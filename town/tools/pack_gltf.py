"""Pack a town model smaller without changing what the page shows: a .gltf.json in, a .gltf.json out.

Plain glTF 2.0 with KHR_mesh_quantization, so three.js reads it with no decoder and no WebAssembly:
- static meshes: positions as 16-bit integers on a grid of (largest extent / 65535), the dequantization folded into
  the node's transform and also written to the node's extras as woa_q = [x, y, z, step], so the page can move it back
  out of the transform (m1-kit.js, plainModel);
- normals: dropped from a primitive when they are flat, so that the normals the page computes again from the packed
  positions (glTF has a viewer compute flat normals where there are none) stay within 0.5 degree of the originals,
  else 8-bit;
- skinned meshes: positions stay float; normals 8-bit, texture coordinates normalized 16-bit (when within 0..1), skin
  weights normalized 8-bit summing to exactly 255;
- animation: a track that holds its node's rest value all through is left out (three.js plays that the same); a
  linear key is dropped when interpolating its neighbours reproduces it within a tolerance (0.05 degree, 0.5 mm, 1e-4
  of scale), every sampler keeps its first and last key, rotations become normalized 16-bit, and the animation data
  shares three buffer views (times, rotations, the rest) so the JSON stays short.
It prints the largest error each step made, measured against the input. Usage:
    python3 town/tools/pack_gltf.py <in.gltf.json> <out.gltf.json>
"""
import base64
import json
import os
import sys

import numpy as np

CT = {5120: np.int8, 5121: np.uint8, 5122: np.int16, 5123: np.uint16, 5125: np.uint32, 5126: np.float32}
CODE = {np.dtype(v): k for k, v in CT.items()}
NC = {'SCALAR': 1, 'VEC2': 2, 'VEC3': 3, 'VEC4': 4, 'MAT4': 16}
TYPE = {v: k for k, v in NC.items()}
ROT_TOL = np.radians(0.05)
FLAT_TOL = 0.5   # degrees: normals are dropped only when the page's recomputed ones stay this close
POS_TOL = 0.0005
SCALE_TOL = 1e-4


def unnorm(q):
    """The value glTF gives a normalized integer."""
    if q.dtype == np.int8:
        return np.maximum(q / 127.0, -1.0)
    if q.dtype == np.uint8:
        return q / 255.0
    if q.dtype == np.int16:
        return np.maximum(q / 32767.0, -1.0)
    if q.dtype == np.uint16:
        return q / 65535.0
    raise ValueError(q.dtype)


class Src:
    def __init__(self, j, buf):
        self.j, self.buf = j, buf

    def read(self, i, raw=False):
        a = self.j['accessors'][i]
        assert 'sparse' not in a, 'sparse accessors are not handled'
        bv = self.j['bufferViews'][a['bufferView']]
        dt = np.dtype(CT[a['componentType']])
        n = NC[a['type']]
        off = bv.get('byteOffset', 0) + a.get('byteOffset', 0)
        st = bv.get('byteStride', dt.itemsize * n)
        raw_b = np.frombuffer(self.buf, np.uint8, count=st * (a['count'] - 1) + dt.itemsize * n, offset=off)
        v = np.lib.stride_tricks.as_strided(raw_b, shape=(a['count'], dt.itemsize * n), strides=(st, 1))
        v = v.copy().view(dt).reshape(a['count'], n)
        if raw or not a.get('normalized'):
            return v
        return unnorm(v)


class Out:
    """The new buffer, its views and accessors."""

    def __init__(self):
        self.bin = bytearray()
        self.views, self.accs = [], []
        self.pools = {}

    def view(self, data, stride=None, target=None):
        while len(self.bin) % 4:
            self.bin.append(0)
        v = {'buffer': 0, 'byteOffset': len(self.bin), 'byteLength': len(data)}
        if stride:
            v['byteStride'] = stride
        if target:
            v['target'] = target
        self.bin += data
        self.views.append(v)
        return len(self.views) - 1

    def acc(self, arr, normalized=False, minmax=False, stride=None, target=None):
        """One accessor over a fresh view. A stride pads each element to it (vertex attributes must be 4-aligned)."""
        arr = np.ascontiguousarray(arr)
        count, n = arr.shape
        es = arr.dtype.itemsize * n
        if stride and stride != es:
            pad = np.zeros((count, stride), np.uint8)
            pad[:, :es] = arr.view(np.uint8).reshape(count, es)
            data = pad.tobytes()   # the whole last stride too: three.js r160 views count * stride bytes
        else:
            stride = None
            data = arr.tobytes()
        a = {'bufferView': self.view(data, stride, target), 'componentType': CODE[arr.dtype], 'count': count, 'type': TYPE[n]}
        if normalized:
            a['normalized'] = True
        if minmax:
            fl = arr.astype(np.float64)
            a['min'], a['max'] = [num(x) for x in fl.min(0)], [num(x) for x in fl.max(0)]
        self.accs.append(a)
        return len(self.accs) - 1


    def pooled(self, pool, arr, minmax=False, normalized=False):
        """An accessor in a view shared with others of its pool (the animation data), so the JSON stays short."""
        arr = np.ascontiguousarray(arr)
        count, n = arr.shape
        data, members = self.pools.setdefault(pool, (bytearray(), []))
        while len(data) % 4:
            data.append(0)
        a = {'bufferView': None, 'byteOffset': len(data), 'componentType': CODE[arr.dtype], 'count': count, 'type': TYPE[n]}
        if normalized:
            a['normalized'] = True
        if minmax:
            fl = arr.astype(np.float64)
            a['min'], a['max'] = [num(x) for x in fl.min(0)], [num(x) for x in fl.max(0)]
        data += arr.tobytes()
        self.accs.append(a)
        members.append(a)
        return len(self.accs) - 1

    def flush(self):
        for data, members in self.pools.values():
            v = self.view(bytes(data))
            for a in members:
                a['bufferView'] = v
        self.pools = {}


def num(x):
    x = float(x)
    return int(x) if x == int(x) and abs(x) < 2**53 else x


def q8(n):
    n = n / np.maximum(np.linalg.norm(n, axis=1, keepdims=True), 1e-12)
    return np.clip(np.round(n * 127), -127, 127).astype(np.int8)


def flat_error(P, N, I):
    """The largest angle, in degrees, between a vertex's normal and a face that uses it, with the faces taken from P:
    what the page's recomputed normals can be off by. Infinite when a vertex is left with no face of any area."""
    fn = np.cross(P[I[:, 1]] - P[I[:, 0]], P[I[:, 2]] - P[I[:, 0]])
    ar = np.linalg.norm(fn, axis=1)
    ok = ar > 1e-12
    fn, I = fn[ok] / ar[ok, None], I[ok]
    if len(np.setdiff1d(np.arange(len(P)), I.reshape(-1))):
        return np.inf
    Nn = N / np.maximum(np.linalg.norm(N, axis=1, keepdims=True), 1e-12)
    c = min(np.einsum('ij,ij->i', Nn[I[:, k]], fn).min() for k in range(3))
    return float(np.degrees(np.arccos(np.clip(c, -1, 1))))


def slerp(a, b, t):
    d = np.einsum('ij,ij->i', a, b)
    b = np.where(d[:, None] < 0, -b, b)
    d = np.abs(d)
    th = np.arccos(np.clip(d, -1, 1))
    s = np.sin(th)
    small = s < 1e-6
    wa = np.where(small, 1 - t, np.sin((1 - t) * th) / np.where(small, 1, s))
    wb = np.where(small, t, np.sin(t * th) / np.where(small, 1, s))
    r = wa[:, None] * a + wb[:, None] * b
    return r / np.linalg.norm(r, axis=1, keepdims=True)


def angle(a, b):
    return 2 * np.arccos(np.clip(np.abs(np.einsum('ij,ij->i', a, b)), 0, 1))


def sample(T, V, t, rot):
    """The track (T, V) at times t, as three.js plays it: slerp for rotations, lerp for the rest."""
    k = np.clip(np.searchsorted(T, t, side='right') - 1, 0, len(T) - 2) if len(T) > 1 else np.zeros(len(t), int)
    if len(T) == 1:
        return np.repeat(V[:1], len(t), 0)
    f = np.clip((t - T[k]) / (T[k + 1] - T[k]), 0, 1)
    if rot:
        return slerp(V[k], V[k + 1], f)
    return V[k] + (V[k + 1] - V[k]) * f[:, None]


def err(A, B, rot):
    return angle(A, B) if rot else np.abs(A - B).max(1)


def reduce_keys(T, V, rot, tol):
    """Greedy: from each kept key, reach as far as interpolation to that key stays within tol of every key between."""
    n = len(T)
    if n <= 2:
        return np.arange(n)
    keep, a = [0], 0
    while a < n - 1:
        b = a + 1
        while b + 1 < n:
            c = b + 1
            mid = np.arange(a + 1, c)
            if err(sample(T[[a, c]], V[[a, c]], T[mid], rot), V[mid], rot).max() > tol:
                break
            b = c
        keep.append(b)
        a = b
    return np.array(keep)


def pack(src, dst):
    j = json.load(open(src))
    if 'woa pack' in j['asset'].get('generator', '') or 'KHR_mesh_quantization' in j.get('extensionsUsed', []):
        sys.exit(f'{src} is packed already: pack the file made from the .glb (tools/to_gltf_json.py)')
    uri = j['buffers'][0]['uri']
    S = Src(j, base64.b64decode(uri[uri.index(',') + 1:]))
    O = Out()
    worst = {'position mm': 0.0, 'normal deg': 0.0, 'uv': 0.0, 'weight': 0.0, 'rot deg': 0.0, 'move mm': 0.0, 'scale': 0.0}
    dropped = kept = 0
    quantized = False

    skinned = {n['mesh'] for n in j['nodes'] if 'mesh' in n and 'skin' in n}
    dq = {}
    for mi, m in enumerate(j['meshes']):
        if mi in skinned:
            continue
        P = np.concatenate([S.read(p['attributes']['POSITION']).astype(np.float64) for p in m['primitives']])
        o = P.min(0)
        step = max(float((P.max(0) - o).max()) / 65535, 1e-9)
        dq[mi] = (o, step)

    for mi, m in enumerate(j['meshes']):
        for p in m['primitives']:
            at = p['attributes']
            new = {}
            P = S.read(at['POSITION']).astype(np.float64)
            Pq = P
            if mi in dq:
                o, step = dq[mi]
                q = np.round((P - o) / step).astype(np.uint16)
                Pq = o + q * step
                worst['position mm'] = max(worst['position mm'], np.abs(o + q * step - P).max() * 1000)
                new['POSITION'] = O.acc(q, minmax=True, stride=8, target=34962)
                quantized = True
            else:
                new['POSITION'] = O.acc(P.astype(np.float32), minmax=True, target=34962)
            I = S.read(p['indices'], raw=True).reshape(-1) if 'indices' in p else None
            for k, ai in at.items():
                if k == 'POSITION':
                    continue
                if k == 'NORMAL':
                    N = S.read(ai).astype(np.float64)
                    tri = (I if I is not None else np.arange(len(P))).reshape(-1, 3)
                    if mi in dq:
                        fe = flat_error(Pq, N, tri)
                        if fe <= FLAT_TOL:
                            worst['normal deg'] = max(worst['normal deg'], fe)
                            dropped += 1
                            continue
                    kept += 1
                    qn = q8(N)
                    Nn = N / np.maximum(np.linalg.norm(N, axis=1, keepdims=True), 1e-12)
                    back = unnorm(qn)
                    back /= np.maximum(np.linalg.norm(back, axis=1, keepdims=True), 1e-12)
                    worst['normal deg'] = max(worst['normal deg'], np.degrees(np.arccos(np.clip(np.einsum('ij,ij->i', Nn, back), -1, 1))).max())
                    new[k] = O.acc(qn, normalized=True, stride=4, target=34962)
                    quantized = True
                elif k.startswith('TEXCOORD'):
                    t = S.read(ai).astype(np.float64)
                    if t.min() >= 0 and t.max() <= 1:
                        qt = np.round(t * 65535).astype(np.uint16)
                        worst['uv'] = max(worst['uv'], np.abs(qt / 65535 - t).max())
                        new[k] = O.acc(qt, normalized=True, target=34962)
                    else:
                        new[k] = O.acc(t.astype(np.float32), target=34962)
                elif k.startswith('WEIGHTS'):
                    w = S.read(ai).astype(np.float64)
                    w = w / np.maximum(w.sum(1, keepdims=True), 1e-12)
                    qw = np.round(w * 255).astype(np.int32)
                    big = qw.argmax(1)
                    qw[np.arange(len(qw)), big] += 255 - qw.sum(1)
                    assert qw.min() >= 0 and (qw.sum(1) == 255).all()
                    worst['weight'] = max(worst['weight'], np.abs(qw / 255 - w).max())
                    new[k] = O.acc(qw.astype(np.uint8), normalized=True, target=34962)
                else:
                    a = j['accessors'][ai]
                    new[k] = O.acc(S.read(ai, raw=True), normalized=a.get('normalized', False), target=34962)
            p['attributes'] = new
            if I is not None:
                p['indices'] = O.acc(I.reshape(-1, 1), target=34963)

    for n in j['nodes']:
        if 'mesh' not in n or n['mesh'] not in dq:
            continue
        assert 'matrix' not in n and not n.get('children'), 'a mesh node with a matrix or children is not handled'
        o, step = dq[n['mesh']]
        t = np.array(n.get('translation', [0, 0, 0]), float)
        x, y, z, w = n.get('rotation', [0, 0, 0, 1])
        R = np.array([[1 - 2 * (y * y + z * z), 2 * (x * y - z * w), 2 * (x * z + y * w)],
                      [2 * (x * y + z * w), 1 - 2 * (x * x + z * z), 2 * (y * z - x * w)],
                      [2 * (x * z - y * w), 2 * (y * z + x * w), 1 - 2 * (x * x + y * y)]])
        sc = np.array(n.get('scale', [1, 1, 1]), float)
        n['translation'] = [float(v) for v in t + R @ (sc * o)]
        n['scale'] = [float(v) for v in sc * step]
        n.setdefault('extras', {})['woa_q'] = [float(o[0]), float(o[1]), float(o[2]), step]

    for s in j.get('skins', []):
        if 'inverseBindMatrices' in s:
            s['inverseBindMatrices'] = O.acc(S.read(s['inverseBindMatrices']))

    times = {}
    rest = {'translation': [0, 0, 0], 'rotation': [0, 0, 0, 1], 'scale': [1, 1, 1]}
    resting = 0
    for an in j.get('animations', []):
        channels, samplers = [], []
        for c in an['channels']:
            sm = dict(an['samplers'][c['sampler']])
            path = c['target']['path']
            T = S.read(sm['input']).astype(np.float64).reshape(-1)
            V = S.read(sm['output']).astype(np.float64)
            rot = path == 'rotation'
            # A track that holds its node's rest value all through plays exactly like no track in three.js (a property
            # no running clip animates stays at, or blends towards, its original value), so it is left out.
            if path in rest and sm.get('interpolation', 'LINEAR') in ('LINEAR', 'STEP'):
                r = np.array(j['nodes'][c['target']['node']].get(path, rest[path]), float)
                gap = angle(V / np.linalg.norm(V, axis=1, keepdims=True), np.repeat(r[None], len(V), 0)) if rot else np.abs(V - r).max(1)
                if gap.max() < (np.radians(0.01) if rot else 1e-5):
                    resting += 1
                    continue
            if sm.get('interpolation', 'LINEAR') == 'LINEAR' and path != 'weights':
                tol = ROT_TOL if rot else POS_TOL if path == 'translation' else SCALE_TOL
                k = reduce_keys(T, V, rot, tol)
                T2, V2 = T[k], V[k]
            else:
                T2, V2 = T, V
            if rot:
                V2 = V2 / np.linalg.norm(V2, axis=1, keepdims=True)
                qv = np.clip(np.round(V2 * 32767), -32767, 32767).astype(np.int16)
                back = unnorm(qv)
                back /= np.linalg.norm(back, axis=1, keepdims=True)
                if sm.get('interpolation', 'LINEAR') == 'LINEAR':
                    e = angle(sample(T2, back, T, True), V / np.linalg.norm(V, axis=1, keepdims=True)).max()
                else:
                    e = angle(back, V2).max()
                worst['rot deg'] = max(worst['rot deg'], np.degrees(e))
                out = O.pooled('rot', qv, normalized=True)
            else:
                if sm.get('interpolation', 'LINEAR') == 'LINEAR' and path != 'weights':
                    e = np.abs(sample(T2, V2, T, False) - V).max()
                    worst['move mm' if path == 'translation' else 'scale'] = max(worst['move mm' if path == 'translation' else 'scale'], e * (1000 if path == 'translation' else 1))
                out = O.pooled('vec', V2.astype(np.float32))
            key = T2.astype(np.float32).tobytes()
            if key not in times:
                times[key] = O.pooled('time', T2.astype(np.float32).reshape(-1, 1), minmax=True)
            sm['input'], sm['output'] = times[key], out
            samplers.append(sm)
            channels.append({**c, 'sampler': len(samplers) - 1})
        an['channels'], an['samplers'] = channels, samplers
    O.flush()

    for im in j.get('images', []):
        assert 'bufferView' not in im, 'textures travel as files beside the model'
    if quantized:
        for k in ('extensionsUsed', 'extensionsRequired'):
            j[k] = sorted(set(j.get(k, [])) | {'KHR_mesh_quantization'})
    j['accessors'], j['bufferViews'] = O.accs, O.views
    j['buffers'] = [{'byteLength': len(O.bin), 'uri': 'data:application/octet-stream;base64,' + base64.b64encode(bytes(O.bin)).decode()}]
    j['asset']['generator'] = (j['asset'].get('generator', '') + ', woa pack').lstrip(', ')
    open(dst, 'w').write(json.dumps(j, separators=(',', ':')))
    a, b = os.path.getsize(src), os.path.getsize(dst)
    detail = ' '.join(f'{k} {v:.3g}' for k, v in worst.items() if v)
    still = f', resting tracks left out {resting}' if resting else ''
    print(f'{os.path.basename(dst):26s} {a / 1e6:5.2f} -> {b / 1e6:5.2f} MB  flat normals dropped {dropped}, kept {kept}{still}  worst: {detail}')


if __name__ == '__main__':
    pack(sys.argv[1], sys.argv[2])
