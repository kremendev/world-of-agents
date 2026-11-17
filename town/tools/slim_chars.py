"""Slim a rigged Tripo character export for the web.

Keeps the mesh, the skin and every animation; keeps only the colour texture (the town's toon shading uses no normal or
metal/rough map), resized to 1024 px JPEG; repacks the binary buffer. Usage:
    python tools/slim_chars.py <tripo_export.glb> <out.glb>
"""
import io
import json
import struct
import sys

from PIL import Image


def slim(src, dst, size=1024, quality=86):
    b = open(src, 'rb').read()
    clen, _ = struct.unpack('<II', b[12:20])
    j = json.loads(b[20:20 + clen])
    bin0 = 20 + clen + 8

    def view_bytes(i):
        bv = j['bufferViews'][i]
        o = bin0 + bv.get('byteOffset', 0)
        return b[o:o + bv['byteLength']]

    mat = j['materials'][0]
    pbr = mat['pbrMetallicRoughness']
    base_tex = pbr['baseColorTexture']['index']
    base_img = j['textures'][base_tex]['source']
    im = Image.open(io.BytesIO(view_bytes(j['images'][base_img]['bufferView']))).convert('RGB').resize((size, size), Image.LANCZOS)
    buf = io.BytesIO()
    im.save(buf, 'JPEG', quality=quality, optimize=True)
    jpg = buf.getvalue()
    for k in ('normalTexture', 'occlusionTexture', 'emissiveTexture'):
        mat.pop(k, None)
    pbr.pop('metallicRoughnessTexture', None)
    pbr['metallicFactor'], pbr['roughnessFactor'] = 0.0, 1.0
    pbr['baseColorTexture'] = {'index': 0}
    sampler = j['textures'][base_tex].get('sampler')
    j['textures'] = [{'source': 0, **({'sampler': sampler} if sampler is not None else {})}]
    used = sorted({a['bufferView'] for a in j['accessors'] if 'bufferView' in a})
    blob, remap, views = bytearray(), {}, []
    for i in used:
        while len(blob) % 4:
            blob.append(0)
        data = view_bytes(i)
        v = dict(j['bufferViews'][i])
        v.update(byteOffset=len(blob), byteLength=len(data), buffer=0)
        remap[i] = len(views)
        views.append(v)
        blob += data
    for a in j['accessors']:
        if 'bufferView' in a:
            a['bufferView'] = remap[a['bufferView']]
    while len(blob) % 4:
        blob.append(0)
    views.append({'buffer': 0, 'byteOffset': len(blob), 'byteLength': len(jpg)})
    blob += jpg
    j['images'] = [{'bufferView': len(views) - 1, 'mimeType': 'image/jpeg'}]
    j['bufferViews'] = views
    while len(blob) % 4:
        blob.append(0)
    j['buffers'] = [{'byteLength': len(blob)}]
    js = json.dumps(j, separators=(',', ':')).encode()
    while len(js) % 4:
        js += b' '
    total = 12 + 8 + len(js) + 8 + len(blob)
    out = struct.pack('<4sII', b'glTF', 2, total) + struct.pack('<II', len(js), 0x4E4F534A) + js + struct.pack('<II', len(blob), 0x004E4942) + bytes(blob)
    open(dst, 'wb').write(out)
    print(dst, len(b) // 1024, 'KB ->', len(out) // 1024, 'KB', [a['name'] for a in j.get('animations', [])])


if __name__ == '__main__':
    slim(sys.argv[1], sys.argv[2])
