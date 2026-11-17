# World of Agents, batch 1: the shell of the town.
# Island underside, curtain walls, corner towers, gatehouse with the dragon skull, flags and banners.
# Everything sits in the town's own coordinates: town (x, y, z) with y up  ->  Blender (x, -z, y).
# Exports keep/underside.glb, keep/walls.glb, keep/towers.glb, keep/gate.glb, then renders cel-shaded previews.
import os
exec(compile(open(os.path.join(os.path.expanduser('~'), 'Documents', 'WoA-models', 'woa_kit.py'), encoding='utf-8').read(), 'woa_kit.py', 'exec'))
from math import sin, cos, pi, atan2, hypot, floor, radians

KEEP = os.path.join(HOME, 'keep')
random.seed(7)

# ---------------------------------------------------------------- town data (same numbers as the page)
CASTLE = [(-38, -28), (-12, -35), (18, -34), (40, -22), (45, 4), (38, 27), (12, 35), (-8, 35), (-30, 30), (-43, 6)]
GAPS = {6: (0.5, 4.4, 'gate'), 9: (0.6, 3.0, 'water')}
WALL_H, WALL_T = 4.2, 1.6
IA, IB = 60.0, 52.0

def island_r(t):
    e = (IA * IB) / hypot(IB * cos(t), IA * sin(t))
    return e * (1 + 0.05 * sin(3 * t + 0.7) + 0.035 * sin(5 * t + 2.1) + 0.02 * sin(9 * t))

def P(x, y, z):
    """town coordinates -> Blender location"""
    return (x, -z, y)

def hexc(h):
    h = h.lstrip('#')
    c = [int(h[i:i + 2], 16) / 255 for i in (0, 2, 4)]
    return tuple(v / 12.92 if v <= 0.04045 else ((v + 0.055) / 1.055) ** 2.4 for v in c)

# ---------------------------------------------------------------- export materials (plain colour, glTF friendly)
MATX = {}
def pm(name, hx, emit=0.0):
    if name in MATX:
        return MATX[name]
    m = bpy.data.materials.new(name)
    try:
        m.use_nodes = True
    except Exception:
        pass
    rgb = hexc(hx)
    nt = m.node_tree
    bs = nt.nodes.get('Principled BSDF') or next((n for n in nt.nodes if n.type == 'BSDF_PRINCIPLED'), None)
    if bs is None:
        out = next((n for n in nt.nodes if n.type == 'OUTPUT_MATERIAL'), None) or nt.nodes.new('ShaderNodeOutputMaterial')
        bs = nt.nodes.new('ShaderNodeBsdfPrincipled')
        nt.links.new(bs.outputs[0], out.inputs['Surface'])
    bs.inputs['Base Color'].default_value = (*rgb, 1)
    bs.inputs['Roughness'].default_value = 1.0
    if emit:
        for nm in ('Emission Color', 'Emission'):
            if nm in bs.inputs:
                bs.inputs[nm].default_value = (*rgb, 1)
                break
        if 'Emission Strength' in bs.inputs:
            bs.inputs['Emission Strength'].default_value = emit
    m['rgb'] = list(rgb)
    m['emit'] = emit
    MATX[name] = m
    return m

STONE = [pm('stone_a', '#8d8279'), pm('stone_b', '#7d726b'), pm('stone_c', '#978b80'), pm('stone_d', '#6f655f')]
MORTAR = pm('mortar', '#4f4743')
CAP = pm('capstone', '#a2978b')
TOWER = [pm('tstone_a', '#8a7f78'), pm('tstone_b', '#7a7069'), pm('tstone_c', '#958a82')]
ROOF = [pm('roof_a', '#a3322a'), pm('roof_b', '#8c2a25'), pm('roof_c', '#b23c30')]
WOOD = pm('wood', '#6b4a33')
WOOD_D = pm('wood_dark', '#4a3324')
IRON = pm('iron', '#3c3b40')
GOLD = pm('gold', '#d8a548')
RED = pm('cloth_red', '#b3302b')
CLOTH_GOLD = pm('cloth_gold', '#e2b35a')
BONE = pm('bone', '#e6dcc4')
BONE_D = pm('bone_shadow', '#b7a98f')
SOCKET = pm('socket', '#2a2024')
EMBER = pm('ember', '#ff8a2a', emit=4.0)
FIRE = pm('fire', '#ffb347', emit=6.0)
WINDOW = pm('window_glow', '#ffb35e', emit=3.0)
CRYSTAL = pm('crystal', '#62f0cf', emit=2.5)
LEAF = [pm('leaf_a', '#5f7f42'), pm('leaf_b', '#4f6a3a'), pm('leaf_c', '#6a8a48')]
VINE = pm('vine', '#4a5f34')
ROOT = pm('root', '#4a3424')
STRATA = [pm('strata_%d' % i, h) for i, h in enumerate(['#6b4a35', '#7d6a5c', '#6a5a50', '#8a7563', '#5c4f4a', '#7a4f3e', '#73655e', '#5a4a46', '#4a4048'])]
GRASS = pm('grass', '#6f8f45')

class B(Build):
    """Build plus a few shapes the kit lacks."""
    def ico(self, r, loc, mat, scale=(1, 1, 1), rot=(0, 0, 0), sub=1):
        verts = bmesh.ops.create_icosphere(self.bm, subdivisions=sub, radius=r)['verts']
        for v in verts:
            v.co.x *= scale[0]; v.co.y *= scale[1]; v.co.z *= scale[2]
            v.co.x += R(-0.06, 0.06) * r; v.co.y += R(-0.06, 0.06) * r; v.co.z += R(-0.06, 0.06) * r
        self._place(verts, loc, rot, mat)
    def seg(self, a, b, r0, r1, mat, segs=6):
        """a tapered rod from point a to point b (Blender coords)"""
        a, b = Vector(a), Vector(b)
        d = b - a
        L = d.length
        if L < 1e-4:
            return
        verts = bmesh.ops.create_cone(self.bm, cap_ends=True, cap_tris=False, segments=segs, radius1=r0, radius2=r1, depth=L)['verts']
        q = d.normalized().to_track_quat('Z', 'Y')
        M = Matrix.Translation((a + b) / 2) @ q.to_matrix().to_4x4()
        bmesh.ops.transform(self.bm, matrix=M, verts=verts)
        idx = self.mi(mat)
        for f in {f for v in verts for f in v.link_faces}:
            f.material_index = idx

    def prism_xz(self, pts, y0, y1, mat):
        """an outline in the XZ plane (x, z), pushed through Y from y0 to y1"""
        a = [self.bm.verts.new((x, y0, z)) for x, z in pts]
        b = [self.bm.verts.new((x, y1, z)) for x, z in pts]
        n = len(pts)
        faces = [self.bm.faces.new(a), self.bm.faces.new(list(reversed(b)))]
        for i in range(n):
            j = (i + 1) % n
            faces.append(self.bm.faces.new((a[i], a[j], b[j], b[i])))
        idx = self.mi(mat)
        for f in faces:
            f.material_index = idx

def arch_pts(cx, half, spring, top, n=14):
    pts = [(cx - half, top), (cx - half, spring)]
    pts += [(cx + cos(pi * (1 - k / n)) * half, spring + sin(pi * (1 - k / n)) * half) for k in range(1, n)]
    pts += [(cx + half, spring), (cx + half, top)]
    return pts

GROUPS = {}
def keep_obj(ob, group):
    GROUPS.setdefault(group, []).append(ob)
    return ob

# ---------------------------------------------------------------- 1. the underside: one closed, terraced rock cone
def unz(a, b):
    return sin(a * 1.7 + b * 0.9) * 0.5 + sin(a * 3.1 - b * 1.3 + 1.7) * 0.3 + sin(a * 7.3 + b * 2.9 + 0.4) * 0.2

UNDER_TOP, UNDER_H, BANDS = -3.0, 46.0, 10

def smooth(e0, e1, x):
    k = min(1.0, max(0.0, (x - e0) / (e1 - e0)))
    return k * k * (3 - 2 * k)

def under_r(t, f):
    b = f * BANDS
    k = floor(b)
    s = (k + smooth(0.72, 1.0, b - k)) / BANDS          # stepped: a shelf, then a sharp ledge
    if k >= BANDS - 1:
        s = f                                            # the last band runs straight down into the tip
    prof = (1 - s) ** 0.8 * (1 - 0.15 * s)
    crag = 0.055 * unz(t * 9, f * 4) + 0.03 * sin(t * 23 + f * 9)
    return (island_r(t) + 0.2) * max(0.02, prof * (1 + crag * min(1, f / 0.05)))

def under_z(t, f):
    return UNDER_TOP - f * UNDER_H + unz(t * 4, f * 7) * 0.8 * min(1, f / 0.08)

def band_mat(t, f):
    if f < 0.04:
        return STRATA[0]
    if f > 0.88:
        return STRATA[8]
    return STRATA[1 + int(abs(f * 13 + unz(t * 3, f) * 0.6)) % 7]

def build_underside():
    NT, NF = 128, 70
    bm = bmesh.new()
    rings = []
    for j in range(NF + 1):
        f = (j / NF) ** 1.08
        ring = []
        for i in range(NT):
            t = i / NT * 2 * pi
            r = under_r(t, f) * (1 + R(-0.012, 0.012) * (j > 0))
            ring.append(bm.verts.new((cos(t) * r, -sin(t) * r, under_z(t, f) + R(-0.12, 0.12) * (j > 0))))
        rings.append(ring)
    top_c = bm.verts.new((0, 0, UNDER_TOP + 0.05))
    tip = bm.verts.new((0.4, -0.3, UNDER_TOP - UNDER_H - 3.0))
    mats = []
    def mi(m):
        if m not in mats:
            mats.append(m)
        return mats.index(m)
    for j in range(NF):
        f = (j + 0.5) / NF
        for i in range(NT):
            i2 = (i + 1) % NT
            fc = bm.faces.new((rings[j][i], rings[j][i2], rings[j + 1][i2], rings[j + 1][i]))
            fc.material_index = mi(band_mat(i / NT * 2 * pi, f))
    for i in range(NT):
        i2 = (i + 1) % NT
        bm.faces.new((top_c, rings[0][i2], rings[0][i])).material_index = mi(STRATA[0])
        bm.faces.new((rings[NF][i], rings[NF][i2], tip)).material_index = mi(STRATA[8])
    bmesh.ops.recalc_face_normals(bm, faces=bm.faces[:])   # closed mesh: every face now points out
    me = bpy.data.meshes.new('underside')
    bm.to_mesh(me)
    bm.free()
    for m in mats:
        me.materials.append(m)
    ob = bpy.data.objects.new('underside', me)
    bpy.context.scene.collection.objects.link(ob)
    keep_obj(ob, 'under')
    log('underside faces', len(me.polygons), 'manifold check done')

    # stalactites under the ledges, boulders, glowing crystals, roots and vines from the rim
    X = B('underside_detail')
    for _ in range(110):
        t = R(0, 2 * pi)
        k = random.randint(1, BANDS - 2)
        f = (k + 0.98) / BANDS
        r = under_r(t, f) * 0.96
        ln = R(1.4, 6.5) * (1.15 - f * 0.6)
        z = under_z(t, f)
        X.seg((cos(t) * r, -sin(t) * r, z + 0.3), (cos(t) * r * 0.99, -sin(t) * r * 0.99, z - ln), R(0.35, 1.1) * (1.2 - f * 0.6), 0.03, band_mat(t, f), segs=5)
    for _ in range(14):
        t = R(0, 2 * pi); rr_ = R(0, 2.4); ln = R(5, 13)
        z = UNDER_TOP - UNDER_H * R(0.84, 0.97)
        X.seg((cos(t) * rr_, -sin(t) * rr_, z), (cos(t) * rr_, -sin(t) * rr_, z - ln), R(0.8, 1.7), 0.05, STRATA[8], segs=5)
    for _ in range(52):
        t = R(0, 2 * pi); f = R(0.05, 0.72)
        r = under_r(t, f); s = R(1.2, 3.4) * (1 - f * 0.6)
        X.ico(s, (cos(t) * r, -sin(t) * r, under_z(t, f)), band_mat(t, f), scale=(1, R(0.8, 1.1), R(0.6, 0.9)), rot=(R(0, 3), R(0, 3), R(0, 3)), sub=1)
    for _ in range(16):   # crystal clusters: the magic that keeps the island up
        t = R(0, 2 * pi); f = R(0.25, 0.8)
        r = under_r(t, f) * 0.98; z = under_z(t, f)
        base = Vector((cos(t) * r, -sin(t) * r, z))
        out = Vector((cos(t), -sin(t), -0.6)).normalized()
        for _k in range(random.randint(3, 6)):
            d = (out + Vector((R(-0.35, 0.35), R(-0.35, 0.35), R(-0.3, 0.2)))).normalized()
            ln = R(1.0, 2.8)
            X.seg(base, base + d * ln, R(0.18, 0.38), 0.02, CRYSTAL, segs=5)
    for i in range(54):   # roots and vines hanging off the rim
        t = i / 54 * 2 * pi + R(-0.05, 0.05)
        r0 = island_r(t) + 0.1
        ln = R(4, 14); out = R(0.4, 1.6); sway = R(-0.8, 0.8)
        green = random.random() < 0.6
        prev = None
        for k in range(6):
            u = k / 5
            rad = r0 + out * sin(u * pi * 0.8)
            pt = (cos(t) * rad + sin(t) * sway * u, -sin(t) * rad + cos(t) * sway * u, -2.6 - ln * u)
            if prev:
                X.seg(prev, pt, (0.06 if green else 0.11) * (1.2 - u * 0.5), (0.05 if green else 0.09) * (1.2 - u * 0.5), VINE if green else ROOT, segs=5)
                if green:
                    X.ico(R(0.18, 0.34), pt, random.choice(LEAF), scale=(1, 1, 0.6), sub=1)
            prev = pt
    keep_obj(X.done(bevel=0, outline=0), 'under')

# ---------------------------------------------------------------- 2. curtain walls
def wall_run(Bw, a, b, banner=False):
    ax, az = a; bx, bz = b
    L = hypot(bx - ax, bz - az)
    if L < 0.5:
        return
    th = atan2(-(bz - az), bx - ax)            # angle in Blender's XY plane
    ux, uy = cos(th), sin(th)                  # along the wall
    nx, ny = -uy, ux                           # across the wall
    mx, my = (ax + bx) / 2, -(az + bz) / 2
    def at(s, w, z):                           # s along, w across (Blender), z up
        return (mx + ux * s + nx * w, my + uy * s + ny * w, z)
    rot = (0, 0, th)
    Bw.box((L, WALL_T, WALL_H), at(0, 0, WALL_H / 2), MORTAR, rot=rot)
    Bw.box((L, WALL_T + 0.7, 0.55), at(0, 0, 0.27), STONE[3], rot=rot)                # plinth
    Bw.box((L, WALL_T + 0.25, 0.32), at(0, 0, WALL_H + 0.16), CAP, rot=rot)           # walkway
    rows = 6
    rh = (WALL_H - 0.55) / rows
    for side in (-1, 1):
        for r in range(rows):
            s = -L / 2 + (0.35 if r % 2 else 0)
            while s < L / 2 - 0.1:
                ln = min(R(0.8, 1.6), L / 2 - s)
                if ln > 0.25:
                    Bw.box((ln - 0.07, 0.14 + R(-0.03, 0.04), rh - 0.07), at(s + ln / 2, side * (WALL_T / 2 + 0.05), 0.55 + r * rh + rh / 2 + R(-0.02, 0.02)),
                           random.choice(STONE), rot=(R(-0.015, 0.015), R(-0.015, 0.015), th + R(-0.015, 0.015)))
                s += ln
    n = max(1, int(L / 1.15))
    for i in range(n):                         # crenellations: tall outside, low inside
        s = -L / 2 + (i + 0.5) * L / n
        Bw.box((0.62, 0.42, 0.85), at(s, (WALL_T / 2 + 0.05), WALL_H + 0.74), random.choice(STONE[:3]), rot=rot)
        Bw.box((0.62, 0.3, 0.42), at(s, -(WALL_T / 2 + 0.02), WALL_H + 0.52), random.choice(STONE[:3]), rot=rot)
    nb = int(L / 7.5)
    for i in range(nb):                        # buttresses on the outer face
        s = -L / 2 + (i + 1) * L / (nb + 1)
        Bw.box((0.9, 0.9, WALL_H * 0.8), at(s, WALL_T / 2 + 0.45, WALL_H * 0.4), STONE[3], rot=rot, top=0.55)
    if banner:
        flag = B('banner_%d' % len(GROUPS.get('walls', [])))
        flag.box((1.5, 0.05, 2.6), at(0, WALL_T / 2 + 0.22, WALL_H - 1.25), RED, rot=rot)
        flag.box((1.62, 0.07, 0.14), at(0, WALL_T / 2 + 0.24, WALL_H - 0.02), WOOD_D, rot=rot)
        for k in range(3):                     # gold flame emblem and hem
            flag.box((0.18 + 0.12 * (2 - k), 0.06, 0.55 - k * 0.12), at(0, WALL_T / 2 + 0.26, WALL_H - 1.1 - k * 0.32), CLOTH_GOLD, rot=(0, 0, th))
        flag.box((1.5, 0.06, 0.12), at(0, WALL_T / 2 + 0.26, WALL_H - 2.45), CLOTH_GOLD, rot=rot)
        keep_obj(flag.done(bevel=0, outline=0), 'walls')

def build_walls():
    Bw = B('castle_walls')
    n = len(CASTLE)
    for i in range(n):
        a = CASTLE[i]; b = CASTLE[(i + 1) % n]
        L = hypot(b[0] - a[0], b[1] - a[1])
        gap = GAPS.get(i)
        if not gap:
            wall_run(Bw, a, b, banner=L > 14)
        else:
            t, w, _k = gap
            h = w / 2 / L
            wall_run(Bw, a, (a[0] + (b[0] - a[0]) * (t - h), a[1] + (b[1] - a[1]) * (t - h)))
            wall_run(Bw, (a[0] + (b[0] - a[0]) * (t + h), a[1] + (b[1] - a[1]) * (t + h)), b)
    keep_obj(Bw.done(bevel=0, outline=0), 'walls')
    water_gate()

def water_gate():
    """the wall carries on over the stream on a low arch, with an iron grate in the water"""
    i = 9
    t, w, _k = GAPS[i]
    a = CASTLE[i]; b = CASTLE[(i + 1) % len(CASTLE)]
    cx, cz = a[0] + (b[0] - a[0]) * t, a[1] + (b[1] - a[1]) * t
    th = atan2(-(b[1] - a[1]), b[0] - a[0])
    half = w / 2 + 0.25
    Wg = B('water_gate')
    Wg.prism_xz(arch_pts(0, half, 0.7, WALL_H), -WALL_T / 2, WALL_T / 2, STONE[1])
    Wg.box((2 * half + 0.6, WALL_T + 0.25, 0.32), (0, 0, WALL_H + 0.16), CAP)
    for k in range(3):
        Wg.box((0.62, 0.42, 0.85), (-half + 0.6 + k * (2 * half - 1.2) / 2, WALL_T / 2 + 0.05, WALL_H + 0.74), STONE[k % 3])
    for k in range(11):
        a2 = pi * k / 10
        for sy in (-1, 1):
            Wg.box((0.42, 0.25, 0.6), (cos(a2) * (half + 0.12), sy * (WALL_T / 2 + 0.05), 0.7 + sin(a2) * (half + 0.12)), CAP, rot=(0, pi / 2 - a2, 0))
    for k in range(7):
        x = -half + 0.3 + k * (2 * half - 0.6) / 6
        top = 0.7 + (half * half - x * x) ** 0.5
        Wg.box((0.09, 0.09, top + 0.8), (x, 0, (top - 0.8) / 2), IRON)
    Wg.box((2 * half, 0.09, 0.09), (0, 0, 0.9), IRON)
    ob = Wg.done(bevel=0, outline=0)
    ob.location = (cx, -cz, 0)
    ob.rotation_euler = (0, 0, th)
    keep_obj(ob, 'walls')

# ---------------------------------------------------------------- 3. corner towers
def build_towers():
    cx = sum(p[0] for p in CASTLE) / len(CASTLE); cz = sum(p[1] for p in CASTLE) / len(CASTLE)
    for i, (x, z) in enumerate(CASTLE):
        h = 10.5 if i % 3 == 0 else 8.6
        Bt = B('tower_%d' % i)
        bx, by = x, -z
        Bt.cyl(3.0, h, (bx, by, h / 2), TOWER[1], segs=20, r2=2.8)
        rows = int(h / 0.62)
        for r in range(rows):
            zr = 0.3 + r * 0.62
            rad = 3.0 - 0.2 * zr / h + 0.08
            for k in range(16):
                a = (k + 0.5 * (r % 2)) / 16 * 2 * pi
                Bt.box((1.12, 0.16, 0.56), (bx + cos(a) * rad, by + sin(a) * rad, zr), random.choice(TOWER), rot=(0, 0, a + pi / 2))
        Bt.cyl(3.5, 0.55, (bx, by, h + 0.1), CAP, segs=20)                       # corbel ring
        for k in range(14):
            a = k / 14 * 2 * pi
            Bt.box((0.75, 0.45, 0.85), (bx + cos(a) * 3.25, by + sin(a) * 3.25, h + 0.8), random.choice(TOWER), rot=(0, 0, a + pi / 2))
        ang_in = atan2(-(cz - z), cx - x)                                          # face the town for the door
        Bt.box((1.3, 0.3, 2.2), (bx + cos(ang_in) * 2.95, by + sin(ang_in) * 2.95, 1.1), WOOD_D, rot=(0, 0, ang_in + pi / 2))
        Bt.box((1.55, 0.32, 0.22), (bx + cos(ang_in) * 3.0, by + sin(ang_in) * 3.0, 2.3), CAP, rot=(0, 0, ang_in + pi / 2))
        for k in range(4):                                                         # arrow slits with warm light
            a = k / 4 * 2 * pi + i
            wz = 2.6 + (k % 2) * 3.1
            Bt.box((0.32, 0.12, 0.95), (bx + cos(a) * 3.02, by + sin(a) * 3.02, wz), WINDOW, rot=(0, 0, a + pi / 2))
            Bt.box((0.5, 0.16, 0.14), (bx + cos(a) * 3.05, by + sin(a) * 3.05, wz + 0.55), CAP, rot=(0, 0, a + pi / 2))
        if i % 2 == 0:                                                             # layered cone roof, finial, flag
            tiers = [(3.95, 3.15, 0.0, 1.5), (3.25, 2.3, 1.2, 1.5), (2.45, 1.4, 2.4, 1.5), (1.6, 0.06, 3.5, 1.7)]
            for k, (r0, r1, z0, hh) in enumerate(tiers):
                Bt.cyl(r0, hh, (bx, by, h + 1.1 + z0 + hh / 2), ROOF[k % 3], segs=18, r2=r1)
            Bt.cyl(0.07, 2.4, (bx, by, h + 6.6), IRON, segs=6)
            Bt.ball(0.22, (bx, by, h + 6.35), GOLD, segs=8)
            F = B('flag_%d' % i)
            F.box((1.5, 0.04, 0.85), (bx + 0.78, by, h + 7.2), RED)
            F.box((0.45, 0.05, 0.35), (bx + 0.85, by, h + 7.2), CLOTH_GOLD)
            keep_obj(F.done(bevel=0, outline=0), 'towers')
        else:                                                                      # open top with a fire brazier
            Bt.cyl(0.95, 0.6, (bx, by, h + 0.75), IRON, segs=10, r2=0.55)
            Bt.cyl(0.12, 0.8, (bx, by, h + 0.25), IRON, segs=6)
            for k in range(5):
                a = k / 5 * 2 * pi
                Bt.seg((bx + cos(a) * 0.35, by + sin(a) * 0.35, h + 1.0), (bx + cos(a) * 0.15, by + sin(a) * 0.15, h + R(1.9, 2.6)), R(0.22, 0.32), 0.02, FIRE, segs=5)
        keep_obj(Bt.done(bevel=0, outline=0), 'towers')

# ---------------------------------------------------------------- 4. gatehouse and the dragon skull
GATE_X, GATE_Z, GATE_W = 2.0, 35.0, 4.4

def dragon_skull(name):
    """built facing local +X, then turned to face out of the gate"""
    S = B(name)
    S.ball(1.0, (0, 0, 0), BONE, scale=(1.2, 1.0, 0.85), segs=14)                        # cranium
    S.ball(1.0, (-0.75, 0, 0.35), BONE_D, scale=(0.35, 1.35, 1.05), segs=12)             # back frill
    S.cyl(0.68, 2.9, (1.75, 0, -0.12), BONE, rot=(0, radians(90), 0), segs=7, r2=0.32)   # snout
    S.box((2.3, 0.9, 0.12), (1.6, 0, 0.26), BONE_D, rot=(0, radians(6), 0))             # snout ridge
    for s in (-1, 1):
        S.ball(0.34, (0.62, s * 0.52, 0.24), SOCKET, segs=10)                            # eye sockets
        S.ball(0.11, (0.78, s * 0.56, 0.26), EMBER, segs=6)                              # embers in the eyes
        S.ball(0.1, (3.0, s * 0.17, 0.12), SOCKET, segs=6)                               # nostrils
        S.box((0.9, 0.22, 0.18), (0.6, s * 0.55, 0.58), BONE_D, rot=(radians(s * 12), 0, radians(-s * 8)))   # brow ridge
        hp = Vector((0.15, s * 0.6, 0.6))                                                # big horns sweeping back
        for k in range(5):
            nxt = hp + Vector((-0.55, s * 0.12, 0.42 - k * 0.14))
            S.seg(hp, nxt, 0.3 - k * 0.055, 0.25 - k * 0.055, BONE_D if k % 2 else BONE, segs=7)
            hp = nxt
        hp = Vector((-0.2, s * 0.85, -0.35))                                             # cheek spikes
        S.seg(hp, hp + Vector((-1.1, s * 0.35, -0.1)), 0.18, 0.02, BONE, segs=6)
        for k in range(8):                                                               # upper teeth
            x = 1.0 + k * 0.27
            w = 0.5 - k * 0.04
            S.seg((x, s * w, -0.3), (x + 0.04, s * w, -0.62 + k * 0.012), 0.06, 0.005, BONE, segs=5)
        S.seg((0.0, s * 0.62, -0.55), (2.7, s * 0.3, -1.05), 0.17, 0.11, BONE_D, segs=6)  # lower jaw, hanging open
        for k in range(6):
            x = 1.1 + k * 0.27
            zj = -0.55 - (x / 2.7) * 0.5
            S.seg((x, s * (0.6 - x * 0.11), zj), (x, s * (0.6 - x * 0.11), zj + 0.32), 0.05, 0.005, BONE, segs=5)
    S.box((0.5, 1.6, 0.25), (-1.05, 0, -0.6), WOOD_D)                                     # mounting beam
    for s in (-1, 1):
        S.box((0.12, 0.12, 1.2), (-1.0, s * 0.7, -0.1), IRON)
    return S.done(bevel=0, outline=0)

def build_gate():
    G = B('gatehouse')
    bx, by = GATE_X, -GATE_Z
    half = GATE_W / 2
    tw = 5.0
    for s in (-1, 1):                                                                    # two flanking towers
        tx = bx + s * (half + tw / 2)
        G.box((tw, tw, 9.6), (tx, by, 4.8), MORTAR)
        for r in range(14):
            zr = 0.4 + r * 0.66
            for side_y in (-1, 1):
                x0 = tx - tw / 2 + (0.3 if r % 2 else 0)
                while x0 < tx + tw / 2 - 0.1:
                    ln = min(R(0.8, 1.4), tx + tw / 2 - x0)
                    if ln > 0.25:
                        G.box((ln - 0.07, 0.14, 0.59), (x0 + ln / 2, by + side_y * (tw / 2 + 0.05), zr), random.choice(STONE))
                    x0 += ln
            for side_x in (-1, 1):
                y0 = by - tw / 2 + (0.3 if r % 2 else 0)
                while y0 < by + tw / 2 - 0.1:
                    ln = min(R(0.8, 1.4), by + tw / 2 - y0)
                    if ln > 0.25:
                        G.box((0.14, ln - 0.07, 0.59), (tx + side_x * (tw / 2 + 0.05), y0 + ln / 2, zr), random.choice(STONE))
                    y0 += ln
        G.box((tw + 0.5, tw + 0.5, 0.45), (tx, by, 9.75), CAP)
        for k in range(4):
            for side in (-1, 1):
                G.box((0.62, 0.45, 0.9), (tx - tw / 2 + 0.6 + k * 1.27, by + side * (tw / 2 + 0.05), 10.4), random.choice(STONE[:3]))
                G.box((0.45, 0.62, 0.9), (tx + side * (tw / 2 + 0.05), by - tw / 2 + 0.6 + k * 1.27, 10.4), random.choice(STONE[:3]))
        for wz in (3.0, 6.4):
            G.box((0.32, 0.16, 1.0), (tx, by - tw / 2 - 0.09, wz), WINDOW)
    # the arch block above the opening
    G.box((GATE_W + 0.2, tw - 0.4, 2.6), (bx, by, 7.6), MORTAR)
    for side_y in (-1, 1):
        for r in range(4):
            zr = 6.6 + r * 0.66
            x0 = bx - half + (0.3 if r % 2 else 0)
            while x0 < bx + half - 0.05:
                ln = min(R(0.7, 1.2), bx + half - x0)
                if ln > 0.2:
                    G.box((ln - 0.07, 0.14, 0.59), (x0 + ln / 2, by + side_y * (tw / 2 - 0.15), zr), random.choice(STONE))
                x0 += ln
    SPRING = 4.0
    G.prism_xz(arch_pts(bx, half, SPRING, 6.5), by - (tw - 0.6) / 2, by + (tw - 0.6) / 2, STONE[1])
    for k in range(13):                                                                  # voussoirs round the arch
        a = pi * k / 12
        for side_y in (-1, 1):
            G.box((0.5, 0.3, 0.75), (bx + cos(a) * (half + 0.15), by + side_y * (tw / 2 - 0.1), SPRING + sin(a) * (half + 0.15)), CAP, rot=(0, pi / 2 - a, 0))
    for k in range(9):                                                                   # portcullis, raised: only its teeth show
        G.box((0.1, 0.1, 2.0), (bx - half + 0.25 + k * (GATE_W - 0.5) / 8, by - 0.6, 5.4), IRON)
        G.cyl(0.07, 0.25, (bx - half + 0.25 + k * (GATE_W - 0.5) / 8, by - 0.6, 4.28), IRON, segs=4, r2=0.0)
    for k in range(2):
        G.box((GATE_W - 0.2, 0.1, 0.1), (bx, by - 0.6, 4.6 + k * 0.6), IRON)
    for s in (-1, 1):                                                                    # heavy doors, swung open
        dx = bx + s * (half - 0.15)
        G.box((0.25, 2.1, 4.0), (dx, by + 1.45, 2.0), WOOD, rot=(0, 0, 0))
        for k in range(3):
            G.box((0.3, 2.15, 0.16), (dx, by + 1.45, 0.8 + k * 1.3), IRON)
    for s in (-1, 1):                                                                    # braziers either side of the road
        G.cyl(0.45, 0.35, (bx + s * 3.6, by - 3.4, 1.35), IRON, segs=8, r2=0.3)
        G.cyl(0.08, 1.2, (bx + s * 3.6, by - 3.4, 0.6), IRON, segs=6)
        G.seg((bx + s * 3.6, by - 3.4, 1.45), (bx + s * 3.6, by - 3.4, 2.4), 0.24, 0.02, FIRE, segs=5)
    gate = keep_obj(G.done(bevel=0, outline=0), 'gate')
    sk = dragon_skull('dragon_skull')
    sk.location = (bx, by - tw / 2 - 0.85, 8.0)
    sk.rotation_euler = (0, radians(10), -pi / 2)                                        # face out of the town
    sk.scale = (1.25, 1.25, 1.25)
    keep_obj(sk, 'gate')
    for s in (-1, 1):                                                                    # tall gate banners
        F = B('gate_banner_%d' % (s + 1))
        F.box((1.3, 0.05, 3.4), (bx + s * (half + tw / 2), by - tw / 2 - 0.2, 6.8), RED)
        F.box((1.42, 0.07, 0.14), (bx + s * (half + tw / 2), by - tw / 2 - 0.22, 8.55), WOOD_D)
        F.box((0.5, 0.06, 0.9), (bx + s * (half + tw / 2), by - tw / 2 - 0.25, 7.2), CLOTH_GOLD)
        keep_obj(F.done(bevel=0, outline=0), 'gate')

# ---------------------------------------------------------------- export, then preview
def export_group(group, fname):
    obs = GROUPS.get(group, [])
    if not obs:
        log('nothing in', group)
        return
    bpy.ops.object.select_all(action='DESELECT')
    for o in obs:
        o.select_set(True)
    bpy.context.view_layer.objects.active = obs[0]
    path = os.path.join(KEEP, fname)
    try:
        bpy.ops.export_scene.gltf(filepath=path, use_selection=True, export_format='GLB', export_apply=True, export_yup=True)
    except TypeError:
        bpy.ops.export_scene.gltf(filepath=path, use_selection=True, export_format='GLB')
    tris = sum(len(p.vertices) - 2 for o in obs if o.type == 'MESH' for p in o.data.polygons)
    log('exported', fname, 'objects', len(obs), 'tris', tris, 'bytes', os.path.getsize(path) if os.path.exists(path) else -1)

def celify():
    for ob in bpy.context.scene.objects:
        if ob.type != 'MESH' or ob.name == 'skydome':
            continue
        for slot in ob.material_slots:
            m = slot.material
            if m is None or 'rgb' not in m:
                continue
            rgb = tuple(m['rgb'])
            if m['emit']:
                slot.material = cel(m.name + '_glow', rgb, emit=float(m['emit']))
            else:
                slot.material = cel(m.name + '_cel', rgb, var=0.07, scale=3.0, grad=None)

def add_ink(ob, t):
    n = len(ob.data.materials)
    for _ in range(n):
        ob.data.materials.append(ink())
    s = ob.modifiers.new('ink', 'SOLIDIFY')
    s.thickness = t
    s.offset = 1.0
    s.use_flip_normals = True
    s.use_rim = False
    s.material_offset = n

def island_top():
    """render-only stand-in for the grass top the page already draws"""
    bm = bmesh.new()
    N = 128
    top = [bm.verts.new((cos(i / N * 2 * pi) * (island_r(i / N * 2 * pi) + 0.7), -sin(i / N * 2 * pi) * (island_r(i / N * 2 * pi) + 0.7), 0.0)) for i in range(N)]
    bot = [bm.verts.new((v.co.x, v.co.y, -3.4)) for v in top]
    bm.faces.new(top)
    bm.faces.new(list(reversed(bot)))
    for i in range(N):
        j = (i + 1) % N
        bm.faces.new((bot[i], bot[j], top[j], top[i]))
    bmesh.ops.recalc_face_normals(bm, faces=bm.faces[:])
    me = bpy.data.meshes.new('island_top')
    bm.to_mesh(me)
    bm.free()
    me.materials.append(GRASS)
    me.materials.append(STRATA[0])
    for p in me.polygons:
        p.material_index = 0 if p.normal.z > 0.5 else 1
    ob = bpy.data.objects.new('island_top', me)
    bpy.context.scene.collection.objects.link(ob)
    return ob

def main():
    sc = setup(sun_rot=(52, 0, -35), sun_energy=4.2)
    sc.render.resolution_x, sc.render.resolution_y = 1700, 1000
    os.makedirs(KEEP, exist_ok=True)
    for step in (build_underside, build_walls, build_towers, build_gate):
        try:
            step()
            log('built', step.__name__)
        except Exception:
            log('FAILED', step.__name__, traceback.format_exc())
    export_group('under', 'underside.glb')
    export_group('walls', 'walls.glb')
    export_group('towers', 'towers.glb')
    export_group('gate', 'gate.glb')
    island_top()
    celify()
    for ob in GROUPS.get('walls', []) + GROUPS.get('towers', []) + GROUPS.get('gate', []):
        if ob.type == 'MESH' and not ob.name.startswith(('flag', 'banner', 'gate_banner')):
            add_ink(ob, 0.05)
    for ob in GROUPS.get('under', []):
        add_ink(ob, 0.08)
    render(sc, cam('c_over', P(78, 58, 96), P(0, -4, 0), 30), 'b1_overview.png')
    render(sc, cam('c_gate', P(15, 7.5, 58), P(2, 6.5, 35), 35), 'b1_gate.png')
    render(sc, cam('c_skull', P(9.5, 9.8, 48.5), P(2, 8.0, 38.3), 45), 'b1_skull.png')
    render(sc, cam('c_under', P(86, -30, 92), P(0, -18, 0), 30), 'b1_underside.png')

run(main)
