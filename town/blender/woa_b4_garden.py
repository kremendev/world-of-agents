# World of Agents, batch 4: the altar, the garden hedge and arch, the footbridge, a flora set (10 trees, 5 bushes),
# and the Forge again, now with flagstone entrances from the ring road onto its plaza.
# Static models are in their own local frames (the page drops each into the group it already places);
# the flora file holds one object per kind at the origin (tree_oak, bush_fern ...), which the page draws as instances.
import os
exec(compile(open(os.path.join(os.path.expanduser('~'), 'Documents', 'WoA-models', 'woa_kit.py'), encoding='utf-8').read(), 'woa_kit.py', 'exec'))
from math import sin, cos, pi, atan2, hypot, tan, radians, sqrt

KEEP = os.path.join(HOME, 'keep')
random.seed(11)

# ---------------------------------------------------------------- town numbers (world.js / m4-houses.js)
FLOOR_H, WALL_T = 0.22, 0.32
def hexc(h):
    h = h.lstrip('#')
    c = [int(h[i:i + 2], 16) / 255 for i in (0, 2, 4)]
    return tuple(v / 12.92 if v <= 0.04045 else ((v + 0.055) / 1.055) ** 2.4 for v in c)

MATX = {}
def pm(name, hx, emit=0.0):
    if name in MATX:
        return MATX[name]
    m = bpy.data.materials.new(name)
    try:
        m.use_nodes = True
    except Exception:
        pass
    nt = m.node_tree
    bs = nt.nodes.get('Principled BSDF') or next((n for n in nt.nodes if n.type == 'BSDF_PRINCIPLED'), None)
    if bs is None:
        out = next((n for n in nt.nodes if n.type == 'OUTPUT_MATERIAL'), None) or nt.nodes.new('ShaderNodeOutputMaterial')
        bs = nt.nodes.new('ShaderNodeBsdfPrincipled')
        nt.links.new(bs.outputs[0], out.inputs['Surface'])
    rgb = hexc(hx)
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

# the town's own colours, so the page's toon materials match and batch together
STONES = [pm('h_stone_a', '#7b706a'), pm('h_stone_b', '#857a72'), pm('h_stone_c', '#6e645e')]
STONE_D = pm('h_stone_d', '#5d5550')
MORTAR = pm('h_mortar', '#4f4743')
BOARDS = [pm('h_board_a', '#4a3324'), pm('h_board_b', '#553a29'), pm('h_board_c', '#40291d')]
CORE = pm('h_core', '#3f2a1f')
TIMBER = pm('h_timber', '#3a2419')
WOOD = pm('h_wood', '#5c3b2a')
WOOD_L = pm('h_wood_l', '#7d5538')
RED = pm('h_red', '#8a2420')
RED_D = pm('h_red_d', '#5e1717')
TILES = [pm('h_tile_a', '#a63a2a'), pm('h_tile_b', '#8f2c23'), pm('h_tile_c', '#9a3427')]
IRON = pm('h_iron', '#3b3437')
BONE = pm('h_bone', '#e3d5b6')
BONE_D = pm('h_bone_d', '#b9a988')
SOCKET = pm('h_socket', '#2a2024')
PANE = pm('h_pane', '#ffbf73', emit=2.1)
PLAZA = [pm('f_flag_a', '#8a7f72'), pm('f_flag_b', '#7d7268'), pm('f_flag_c', '#958a7c')]
PLAZA_BED = pm('f_bed', '#5d5550')
BRICK = [pm('f_brick_a', '#6e5a50'), pm('f_brick_b', '#7a6458'), pm('f_brick_c', '#634f47')]

class B(Build):
    def ico(self, r, loc, mat, scale=(1, 1, 1), rot=(0, 0, 0), sub=1):
        verts = bmesh.ops.create_icosphere(self.bm, subdivisions=sub, radius=r)['verts']
        for v in verts:
            v.co.x *= scale[0]; v.co.y *= scale[1]; v.co.z *= scale[2]
            v.co.x += R(-0.07, 0.07) * r; v.co.y += R(-0.07, 0.07) * r; v.co.z += R(-0.07, 0.07) * r
        self._place(verts, loc, rot, mat)
    def seg(self, a, b, r0, r1, mat, segs=6):
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
    def prism(self, pts, axis_a, axis_b, mat):
        """an outline of 2D points pushed along a line: pts map through f(p, t) to 3D at t = 0 and t = 1"""
        a = [self.bm.verts.new(axis_a(p)) for p in pts]
        b = [self.bm.verts.new(axis_b(p)) for p in pts]
        n = len(pts)
        faces = [self.bm.faces.new(a), self.bm.faces.new(list(reversed(b)))]
        for i in range(n):
            j = (i + 1) % n
            faces.append(self.bm.faces.new((a[i], a[j], b[j], b[i])))
        idx = self.mi(mat)
        for f in faces:
            f.material_index = idx

GROUPS = {}
def keep_obj(ob, group):
    GROUPS.setdefault(group, []).append(ob)
    return ob

# ---------------------------------------------------------------- small carved pieces
def skull(Bx, loc, s, facing):
    """a horned beast skull on a wall: facing = unit vector (Blender XY) it looks along"""
    fx, fy = facing
    x, y, z = loc
    Bx.ball(0.5 * s, (x, y, z), BONE, scale=(1.0, 1.0, 0.9), segs=10)
    Bx.ball(0.32 * s, (x + fx * 0.32 * s, y + fy * 0.32 * s, z - 0.12 * s), BONE_D, scale=(1.0, 1.0, 0.8), segs=8)
    for sd in (-1, 1):
        px, py = -fy * sd, fx * sd
        Bx.ball(0.12 * s, (x + fx * 0.36 * s + px * 0.2 * s, y + fy * 0.36 * s + py * 0.2 * s, z + 0.08 * s), SOCKET, segs=8)
        p = Vector((x + px * 0.3 * s, y + py * 0.3 * s, z + 0.25 * s))
        for k in range(3):
            q = p + Vector((px * 0.32 * s, py * 0.32 * s, (0.25 - k * 0.18) * s))
            Bx.seg(p, q, (0.13 - k * 0.035) * s, (0.1 - k * 0.035) * s, BONE_D if k % 2 else BONE, segs=6)
            p = q

def horns(Bx, loc, s, along, rise=1.0):
    """a pair of horns spreading sideways along `along` (Blender XY unit vector); rise < 1 keeps them flat"""
    ax, ay = along
    x, y, z = loc
    Bx.ball(0.18 * s, (x, y, z), BONE_D, segs=8)
    for sd in (-1, 1):
        p = Vector((x, y, z))
        for k in range(5):
            q = p + Vector((ax * sd * 0.22 * s, ay * sd * 0.22 * s, (0.12 + k * 0.05) * s * rise))
            Bx.seg(p, q, (0.14 - k * 0.024) * s, (0.12 - k * 0.024) * s, BONE if k % 2 else BONE_D, segs=6)
            p = q


# where the roads meet the ring round the Forge (town angle atan2(z, x)): main, war, library, studio, workshop, yard
SPOKES = [1.5708, -1.6284, -0.7646, 0.1159, -3.0065, 2.36]

def L3(x, y, z):
    return (x, -z, y)

LOGS = [pm('y_log_a', '#6e4a32'), pm('y_log_b', '#5f3f2a'), pm('y_log_c', '#7a5338')]
LOG_TIP = pm('y_tip', '#c8b48c')
ROPE = pm('y_rope', '#b8a07a')
YARD_R, YARD_GATE = 7.5, -0.526


# ---------------------------------------------------------------- the Forge (centre 0,0; furnace at z = -0.6 on a 0.16 plaza)
def build_forge():
    F = B('forge')
    F.cyl(7.7, 0.12, (0, 0, 0.06), PLAZA_BED, segs=56, r2=7.9)
    rings = [1.0 + i * 0.86 for i in range(8)]
    for ri, rad in enumerate(rings):                              # flagstones in rings round the furnace
        n = max(6, int(2 * pi * rad / 0.95))
        off = random.random()
        for k in range(n):
            a0 = (k + off) / n * 2 * pi
            a1 = (k + 1 + off) / n * 2 * pi
            am = (a0 + a1) / 2
            arc = rad * (a1 - a0) - 0.06
            F.box((0.78, arc, 0.05), (cos(am) * rad, sin(am) * rad, 0.135), random.choice(PLAZA), rot=(0, 0, am + R(-0.02, 0.02)))
    for k in range(64):                                           # a curb of bigger stones round the edge, open at each entrance
        a = k / 64 * 2 * pi
        if any(min(abs(-a - s) % (2 * pi), 2 * pi - abs(-a - s) % (2 * pi)) < 0.17 for s in SPOKES):   # Blender angle a is town angle -a
            continue
        F.box((0.34, 0.74, 0.22), (cos(a) * 7.78, sin(a) * 7.78, 0.13), random.choice(STONES), rot=(0, 0, a))
    for s in SPOKES:                                               # entrances: flagstones that ramp down to the ring road
        for row in range(3):
            r0 = 7.62 + row * 0.3
            top = 0.16 - row * 0.045
            for k in range(-2, 3):
                t = k * 0.42
                cx, cz = cos(s) * r0 - sin(s) * t, sin(s) * r0 + cos(s) * t
                F.box((0.28, 0.4, 0.1), L3(cx, top - 0.05, cz), random.choice(PLAZA), rot=(0, 0, -s + R(-0.03, 0.03)))
        for sd in (-1, 1):                                         # a pair of edge stones flanking each entrance
            t = sd * 1.18
            F.box((0.95, 0.24, 0.24), L3(cos(s) * 7.95 - sin(s) * t, 0.1, sin(s) * 7.95 + cos(s) * t), STONES[1], rot=(0, 0, -s))
    fz = -0.6
    oy = -fz                                                       # Blender y of the furnace centre
    by = 0.16
    # the body: stone courses round a core, the mouth left open for the page's glowing fire
    F.box((4.4, 3.4, 3.2), (0, oy, by + 1.6), MORTAR)
    def mouth(x, y):
        return abs(x) < 1.28 and y < 1.05 + sqrt(max(0.0, 1.28 ** 2 - x * x))
    rows = 8
    rh = 3.2 / rows
    for r in range(rows):
        y = r * rh + rh / 2
        for face, (ax, L) in (('front', (0, 4.4)), ('back', (0, 4.4)), ('left', (1, 3.4)), ('right', (1, 3.4))):
            s = -L / 2 + (0.28 if r % 2 else 0) - 0.2
            while s < L / 2 - 0.05:
                sl = min(R(0.5, 0.9), L / 2 - s)
                s0 = max(s, -L / 2)
                m = (s0 + s + sl) / 2
                wid = s + sl - s0 - 0.05
                if wid > 0.15:
                    if face == 'front' and mouth(m, y):
                        s += sl
                        continue
                    if face == 'front':
                        F.box((wid, 0.08, rh - 0.05), (m, oy - 1.72, by + y), random.choice(BRICK))
                    elif face == 'back':
                        F.box((wid, 0.08, rh - 0.05), (m, oy + 1.72, by + y), random.choice(BRICK))
                    else:
                        sx = 2.22 if face == 'right' else -2.22
                        F.box((0.08, wid, rh - 0.05), (sx, oy - m, by + y), random.choice(BRICK))
                s += sl
    F.box((4.9, 3.9, 0.36), (0, oy, by + 3.3), IRON)
    for k in range(13):                                           # the iron arch round the mouth, and its posts
        a0, a1 = pi * k / 13, pi * (k + 1) / 13
        p0 = (cos(a0) * 1.1, oy - 1.74, by + 1.05 + sin(a0) * 1.1)
        p1 = (cos(a1) * 1.1, oy - 1.74, by + 1.05 + sin(a1) * 1.1)
        F.seg(p0, p1, 0.16, 0.16, IRON, segs=6)
    for sd in (-1, 1):
        F.box((0.3, 0.3, 1.05), (sd * 1.1, oy - 1.74, by + 0.52), IRON)
    F.box((2.6, 1.0, 0.12), (0, oy - 2.0, by + 2.45), IRON, rot=(-0.5, 0, 0))   # the hood
    # the chimney: a stone stack with iron bands, a cap, horns and a skull
    cy = oy + 0.5
    F.box((1.9, 1.9, 7.2), (0, cy, by + 6.9), MORTAR)
    crow = int(7.2 / 0.36)
    for k in range(crow):
        z = by + 3.3 + k * 0.36 + 0.18
        for (ox, oyy, sx, sy) in ((0.98, 0, 0.08, 1.96), (-0.98, 0, 0.08, 1.96), (0, 0.98, 1.96, 0.08), (0, -0.98, 1.96, 0.08)):
            cut = 0.14 if k % 2 else 0
            F.box((sx if sx < 0.1 else sx - cut, sy if sy < 0.1 else sy - cut, 0.32), (ox, cy + oyy, z), random.choice(BRICK))
    for y in (4.6, 7.0, 9.4):
        F.box((2.08, 2.08, 0.22), (0, cy, by + y), IRON)
        for sx in (-1, 1):
            for sy in (-1, 1):
                F.ball(0.07, (sx * 1.05, cy + sy * 1.05, by + y), IRON, segs=6)
    F.box((2.3, 2.3, 0.3), (0, cy, by + 10.55), IRON)
    horns(F, (0, cy, by + 10.9), 3.4, (1, 0))
    skull(F, (0, cy - 1.0, by + 7.9), 1.5, (0, -1))
    for sd in (-1, 1):
        a = Vector((sd * 2.3, oy - 1.8, by + 3.5))
        F.seg(a, a + Vector((sd * 0.4, -0.3, 1.0)).normalized() * 0.7, 0.12, 0.005, BONE_D, segs=6)
    return F.done(bevel=0, outline=0)


# ---------------------------------------------------------------- the altar: a stone circle round a horned totem (shrine-local)
MOSS = pm('a_moss', '#5f7f42')
RUNE = pm('a_rune', '#3f3a38')
CLOTH = pm('a_cloth', '#8a2420')
FEATHER = pm('a_feather', '#262022')

def build_altar():
    A = B('altar')
    A.cyl(3.15, 0.08, L3(0, 0.03, 0), STONE_D, segs=28)
    for k in range(18):                                            # a ring of flat stones underfoot
        a = k / 18 * 2 * pi
        A.box((0.7, 0.45, 0.06), L3(cos(a) * 2.5, 0.08, sin(a) * 2.5), random.choice(STONES), rot=(0, 0, -a + pi / 2))
    random.seed(23)
    for i in range(7):                                             # seven carved standing stones
        a = i / 7 * 2 * pi + 0.3
        h = R(1.6, 2.5)
        x, z = cos(a) * 2.5, sin(a) * 2.5
        tilt = (R(-0.07, 0.07), R(-0.07, 0.07))
        rot = (tilt[0], tilt[1], -a + pi / 2)
        A.box((0.62, 0.42, h), L3(x, h / 2, z), random.choice(STONES), rot=rot, top=0.82)
        A.box((0.5, 0.34, 0.22), L3(x, h + 0.06, z), STONES[2], rot=rot, top=0.55)
        ix, iz = -cos(a), -sin(a)                                  # runes cut into the inner face
        for k in range(3):
            A.box((0.18, 0.05, 0.08 + 0.06 * (k % 2)), L3(x + ix * 0.22, h * (0.35 + k * 0.17), z + iz * 0.22), RUNE, rot=(0, 0, -a + pi / 2))
        A.ico(R(0.18, 0.26), L3(x, h + 0.16, z), MOSS, scale=(1.3, 1.1, 0.45), sub=1)
    # the altar slab south of the totem, on two legs, with a bowl
    for sd in (-1, 1):
        A.box((0.3, 0.6, 0.55), L3(sd * 0.5, 0.3, 1.0), STONES[0])
    A.box((1.5, 0.85, 0.16), L3(0, 0.63, 1.0), STONES[1])
    A.cyl(0.24, 0.12, L3(0.35, 0.77, 1.0), IRON, segs=12, r2=0.3)
    # the totem: a carved pole with faces, two pairs of horns, a skull and red cloth
    A.seg(L3(0, -0.2, 0), L3(0, 3.0, 0), 0.24, 0.2, WOOD, segs=10)
    for k, y in enumerate((0.9, 1.7, 2.4)):
        A.cyl(0.3 - k * 0.02, 0.5, L3(0, y, 0), random.choice(BOARDS), segs=8)
        for sd in (-1, 1):
            A.ball(0.07, L3(sd * 0.1, y + 0.08, 0.27 - k * 0.02), SOCKET, segs=6)
        A.box((0.2, 0.06, 0.06), L3(0, y - 0.12, 0.28 - k * 0.02), BONE_D)
    horns(A, L3(0, 2.0, 0), 1.0, (1, 0), rise=0.7)
    skull(A, L3(0, 3.2, 0.05), 0.95, (0, -1))
    horns(A, L3(0, 3.3, -0.05), 1.7, (1, 0), rise=1.0)
    for sd in (-1, 1):                                             # cloth strips and feathers hanging from the horns
        A.box((0.12, 0.03, 0.9), L3(sd * 0.55, 1.75, 0.05), CLOTH, rot=(0, R(-0.1, 0.1), 0))
        A.box((0.05, 0.02, 0.3), L3(sd * 0.75, 1.95, 0.05), FEATHER)
    for k in range(6):                                             # a scatter of bones
        a = R(0, 2 * pi); d = R(1.0, 2.0)
        A.seg(L3(cos(a) * d, 0.1, sin(a) * d), L3(cos(a) * d + R(-0.4, 0.4), 0.1, sin(a) * d + R(-0.4, 0.4)), 0.04, 0.04, BONE, segs=5)
    return [A.done(bevel=0, outline=0)]

# ---------------------------------------------------------------- the garden: a clipped hedge ring with two gaps and a rose arch (garden-local)
HEDGE = [pm('g_hedge_a', '#4f7a46'), pm('g_hedge_b', '#5a8450'), pm('g_hedge_c', '#46703f')]
ROSE = [pm('g_rose_a', '#c83a4a'), pm('g_rose_b', '#e8869a'), pm('g_rose_c', '#f2d27a')]
GARDEN_R = 7.4
GATE_A, STREAM_A = atan2(4.6, 5.6), 2.84

def angd(a, b):
    d = abs(a - b) % (2 * pi)
    return min(d, 2 * pi - d)

def build_garden():
    G = B('garden')
    random.seed(31)
    # the hedge: a swept, slightly lumpy profile between the gaps, with leafy clumps breaking the top line
    runs = [(GATE_A + 0.19, STREAM_A - 0.22), (STREAM_A + 0.22, GATE_A - 0.19 + 2 * pi)]
    prof = [(-0.5, 0.0), (-0.52, 0.55), (-0.42, 0.98), (-0.2, 1.12), (0.2, 1.12), (0.42, 0.98), (0.52, 0.55), (0.5, 0.0)]
    for a0, a1 in runs:
        n = max(4, int((a1 - a0) * GARDEN_R / 0.35))
        rings = []
        for i in range(n + 1):
            a = a0 + (a1 - a0) * i / n
            ring = []
            for j, (u, y) in enumerate(prof):
                end = 1 if (i in (0, n)) else 0
                wob = 0 if j in (0, len(prof) - 1) else R(-0.05, 0.05)
                rr0 = GARDEN_R + u * (1 - 0.35 * end) + wob
                ring.append(G.bm.verts.new(L3(cos(a) * rr0, y * (1 - 0.15 * end) + (0 if y == 0 else R(-0.03, 0.03)), sin(a) * rr0)))
            rings.append(ring)
        mi = G.mi(random.choice(HEDGE))
        for i in range(n):
            for j in range(len(prof) - 1):
                f = G.bm.faces.new((rings[i][j], rings[i + 1][j], rings[i + 1][j + 1], rings[i][j + 1]))
                f.material_index = G.mi(HEDGE[(i + j) % 3]) if random.random() < 0.3 else mi
        for ring in (rings[0], list(reversed(rings[-1]))):           # cap the ends
            G.bm.faces.new(ring).material_index = mi
        for i in range(0, n, 2):                                     # clumps on the top and the faces
            a = a0 + (a1 - a0) * (i + 0.5) / n
            for (u, y, s) in ((R(-0.25, 0.25), 1.12, R(0.28, 0.4)), (random.choice((-0.5, 0.5)), R(0.4, 0.9), R(0.22, 0.32))):
                rr0 = GARDEN_R + u
                G.ico(s, L3(cos(a) * rr0, y, sin(a) * rr0), random.choice(HEDGE), scale=(1.2, 1.2, 0.8), sub=1)
            if random.random() < 0.35:                               # a few roses in the hedge
                rr0 = GARDEN_R + random.choice((-0.52, 0.52))
                G.ball(0.08, L3(cos(a) * rr0, R(0.5, 1.0), sin(a) * rr0), random.choice(ROSE), segs=6)
    # the rose arch over the gate (the page hangs its lamp at the top)
    gx, gz = cos(GATE_A) * GARDEN_R, sin(GATE_A) * GARDEN_R
    Ar = B('garden_arch')
    for sd in (-1, 1):
        Ar.box((0.18, 0.18, 2.3), L3(sd * 0.85, 1.15, 0), WOOD)
        Ar.box((0.3, 0.3, 0.12), L3(sd * 0.85, 0.06, 0), STONES[0])
    prev = None
    for k in range(15):                                              # the arch, then roses and leaves along it
        a = pi * k / 14
        p = L3(cos(a) * 0.85, 2.3 + sin(a) * 0.85, 0)
        if prev:
            Ar.seg(prev, p, 0.07, 0.07, WOOD, segs=6)
        prev = p
    for k in range(26):
        a = pi * k / 25
        side = random.choice((-1, 1))
        x, y = cos(a) * 0.85, 2.3 + sin(a) * 0.85
        if k % 2:
            Ar.ico(R(0.13, 0.2), L3(x + R(-0.05, 0.05), y + R(-0.05, 0.05), side * R(0.02, 0.1)), random.choice(HEDGE), scale=(1, 1, 0.7), sub=1)
        else:
            Ar.ball(0.07, L3(x, y, side * 0.12), random.choice(ROSE), segs=6)
    for sd in (-1, 1):                                               # climbing roses up the posts
        for k in range(6):
            Ar.ico(0.12, L3(sd * 0.85 + R(-0.08, 0.08), 0.4 + k * 0.33, R(-0.1, 0.1)), random.choice(HEDGE), sub=1)
            if k % 2:
                Ar.ball(0.06, L3(sd * 0.85 + R(-0.1, 0.1), 0.5 + k * 0.33, 0.12), random.choice(ROSE), segs=6)
    ao = Ar.done(bevel=0, outline=0)
    ao.location = L3(gx, 0, gz)
    ao.rotation_euler = (0, 0, atan2(cos(GATE_A), sin(GATE_A)))
    return [G.done(bevel=0, outline=0), ao]

# ---------------------------------------------------------------- the footbridge: an arched deck 3.4 m long, 1.1 wide (bridge-local, x along)
def build_bridge():
    Bg = B('bridge')
    span = 1.7
    deck = lambda x: 0.12 + 0.32 * (1 - (x / span) ** 2)
    x = -span
    while x < span - 0.01:                                            # planks across, following the arch
        pw = 0.24
        xm = x + pw / 2
        slope = -2 * 0.32 * xm / span ** 2
        Bg.box((pw - 0.03, 1.1 + R(-0.04, 0.04), 0.07), L3(xm, deck(xm) - 0.035, 0), random.choice(BOARDS + [WOOD]), rot=(0, -atan2(slope, 1), 0))
        x += pw
    for sd in (-1, 1):
        prev = None
        for k in range(9):                                            # curved side beams and a handrail
            xx = -span + 2 * span * k / 8
            p = L3(xx, deck(xx) - 0.12, sd * 0.5)
            q = L3(xx, deck(xx) + 0.85, sd * 0.52)
            if prev:
                Bg.seg(prev[0], p, 0.08, 0.08, TIMBER, segs=6)
                Bg.seg(prev[1], q, 0.045, 0.045, WOOD_L, segs=6)
            prev = (p, q)
        for xx in (-1.55, -0.52, 0.52, 1.55):
            Bg.seg(L3(xx, deck(xx) - 0.1, sd * 0.52), L3(xx, deck(xx) + 0.88, sd * 0.52), 0.05, 0.045, TIMBER, segs=6)
    for sd in (-1, 1):                                                # stone footings at both ends
        Bg.box((0.5, 1.3, 0.3), L3(sd * (span - 0.05), 0.05, 0), STONES[0])
    return [Bg.done(bevel=0, outline=0)]

# ---------------------------------------------------------------- the flora set: one object per kind, standing at the origin
BARK = pm('f_bark', '#5c3b2a')
BARK_D = pm('f_bark_d', '#4a3020')
BARK_G = pm('f_bark_g', '#6e6560')
BIRCH = pm('f_birch', '#e8e4dc')
BIRCH_M = pm('f_birch_m', '#2e2a28')
LEAF = [pm('f_leaf_a', '#55804a'), pm('f_leaf_b', '#3f6a40'), pm('f_leaf_c', '#6e9452')]
LEAF_L = [pm('f_leafl_a', '#8fb35a'), pm('f_leafl_b', '#a3c26a')]
AUT = [pm('f_aut_a', '#a5432c'), pm('f_aut_b', '#c0652f'), pm('f_aut_c', '#8a3426'), pm('f_aut_d', '#d98a3a')]
PINK = [pm('f_pink_a', '#f2a7c3'), pm('f_pink_b', '#e889ad'), pm('f_pink_c', '#f7c6d6')]
PINE = [pm('f_pine_a', '#3e6a46'), pm('f_pine_b', '#355f40'), pm('f_pine_c', '#47744c')]
SPRUCE = [pm('f_spr_a', '#2f5a4a'), pm('f_spr_b', '#2a4f44'), pm('f_spr_c', '#386655')]
FRUIT = pm('f_fruit', '#c8382c')
BERRY = pm('f_berry', '#4a4a9a')
FLOWER = [pm('f_flw_a', '#e8c860'), pm('f_flw_b', '#f2eee0'), pm('f_flw_c', '#d94a5a')]
GRASS_C = [pm('f_grass_a', '#7a9450'), pm('f_grass_b', '#6a8a48'), pm('f_seed', '#c9a75a')]

def blob(T, r, loc, mats, squash=0.85):
    T.ico(r, loc, random.choice(mats), scale=(1, 1, squash), rot=(R(0, 3), R(0, 3), R(0, 3)), sub=1)

def trunk(T, h, r0, r1, mat, bend=0.0, segs=8):
    pts = [Vector((0, 0, -0.15))]
    for k in range(1, 4):
        u = k / 3
        pts.append(Vector((sin(u * 2.1) * bend, cos(u * 1.7) * bend * 0.6 - bend * 0.6, h * u)))
    for k in range(3):
        T.seg(pts[k], pts[k + 1], r0 + (r1 - r0) * k / 3, r0 + (r1 - r0) * (k + 1) / 3, mat, segs=segs)
    for k in range(4):                                                # root flares
        a = k / 4 * 2 * pi + 0.4
        T.seg((0, 0, 0.35), (cos(a) * r0 * 2.2, sin(a) * r0 * 2.2, -0.05), r0 * 0.45, r0 * 0.15, mat, segs=5)
    return pts[-1]

def tree_oak():
    T = B('tree_oak'); top = trunk(T, 2.2, 0.34, 0.22, BARK, 0.15)
    for a in (0.3, 2.4, 4.4):
        T.seg(top - Vector((0, 0, 0.4)), top + Vector((cos(a) * 0.9, sin(a) * 0.9, 0.5)), 0.12, 0.06, BARK, segs=6)
    for (x, y, z, r) in ((0, 0, 3.0, 1.25), (0.9, 0.3, 2.7, 0.95), (-0.85, -0.3, 2.75, 1.0), (0.2, -0.9, 2.8, 0.9), (-0.3, 0.85, 2.9, 0.9), (0.1, 0.1, 3.8, 0.85), (0.6, -0.4, 3.5, 0.7)):
        blob(T, r, (x, y, z), LEAF)
    return T

def tree_maple():
    T = B('tree_maple'); top = trunk(T, 2.4, 0.26, 0.17, BARK_D, 0.1)
    for k, (z, r) in enumerate(((2.6, 1.15), (3.3, 1.0), (3.9, 0.75), (4.35, 0.45))):
        for j in range(3):
            a = j / 3 * 2 * pi + k
            blob(T, r * 0.75, (cos(a) * r * 0.45, sin(a) * r * 0.45, z), AUT, squash=0.7)
    return T

def tree_cherry():
    T = B('tree_cherry'); top = trunk(T, 1.9, 0.24, 0.15, BARK_D, 0.35)
    for a in (0.0, 2.1, 4.2):
        T.seg(top - Vector((0, 0, 0.3)), top + Vector((cos(a) * 1.1, sin(a) * 1.1, 0.35)), 0.1, 0.05, BARK_D, segs=6)
    for (x, y, z, r) in ((0, 0, 2.5, 1.0), (1.1, 0.2, 2.3, 0.8), (-1.0, 0.5, 2.35, 0.8), (0.3, -1.05, 2.3, 0.75), (-0.4, -0.7, 2.75, 0.7), (0.4, 0.8, 2.8, 0.7)):
        blob(T, r, (x, y, z), PINK, squash=0.6)
    return T

def tree_fruit():
    T = B('tree_fruit'); top = trunk(T, 1.7, 0.22, 0.15, BARK, 0.05)
    for (x, y, z, r) in ((0, 0, 2.5, 1.1), (0.7, 0.3, 2.25, 0.75), (-0.6, -0.4, 2.3, 0.8), (0.1, -0.6, 2.9, 0.7)):
        blob(T, r, (x, y, z), LEAF, squash=0.9)
    for k in range(14):                                               # apples on the crown's skin
        a = R(0, 2 * pi); e = R(-0.3, 0.9)
        T.ball(0.09, (cos(a) * cos(e) * 1.1, sin(a) * cos(e) * 1.1, 2.45 + sin(e) * 0.9), FRUIT, segs=6)
    return T

def tree_birch():
    T = B('tree_birch')
    for (dx, dy, h, lean) in ((0, 0, 4.2, 0.0), (0.35, 0.2, 3.6, 0.35)):
        b0, b1 = Vector((dx * 0.3, dy * 0.3, -0.1)), Vector((dx + lean, dy + lean * 0.3, h))
        T.seg(b0, b1, 0.13, 0.08, BIRCH, segs=8)
        for k in range(7):                                            # the black bark marks
            u = 0.12 + k * 0.12
            p = b0 + (b1 - b0) * u
            T.box((0.1, 0.03, 0.04), (p.x + 0.11, p.y, p.z), BIRCH_M, rot=(0, 0, k * 0.9))
        for k in range(4):
            u = 0.55 + k * 0.13
            p = b0 + (b1 - b0) * u
            blob(T, 0.55 - k * 0.06, (p.x + R(-0.4, 0.4), p.y + R(-0.4, 0.4), p.z + 0.5), LEAF_L + [LEAF[2]], squash=1.3)
    return T

def tree_willow():
    T = B('tree_willow'); top = trunk(T, 1.9, 0.38, 0.26, BARK_D, 0.2)
    blob(T, 1.3, (0, 0, 2.6), LEAF_L, squash=0.75)
    for k in range(5):
        a = k / 5 * 2 * pi
        blob(T, 0.85, (cos(a) * 0.9, sin(a) * 0.9, 2.4), LEAF_L, squash=0.7)
    for k in range(28):                                               # the hanging curtain
        a = k / 28 * 2 * pi + R(-0.08, 0.08)
        r0 = R(1.3, 1.65)
        z0 = 2.5 + R(-0.2, 0.2)
        ln = R(1.4, 2.1)
        T.seg((cos(a) * r0, sin(a) * r0, z0), (cos(a) * (r0 + 0.15), sin(a) * (r0 + 0.15), z0 - ln), 0.09, 0.03, random.choice(LEAF_L), segs=4)
    return T

def tree_pine():
    T = B('tree_pine'); trunk(T, 1.4, 0.24, 0.18, BARK, 0.0)
    for k in range(5):
        r0 = 1.55 - k * 0.27
        T.cyl(r0, 1.25, (R(-0.04, 0.04), R(-0.04, 0.04), 1.4 + k * 0.72), PINE[k % 3], segs=9, r2=0.08, rot=(0, 0, R(0, 1)))
    return T

def tree_spruce():
    T = B('tree_spruce'); trunk(T, 1.0, 0.2, 0.15, BARK_D, 0.0)
    for k in range(8):
        r0 = 1.3 - k * 0.14
        T.cyl(r0, 0.95, (0, 0, 1.0 + k * 0.62), SPRUCE[k % 3], segs=8, r2=0.06, rot=(0, 0, k * 0.4))
    T.seg((0, 0, 5.5), (0, 0, 6.3), 0.08, 0.01, SPRUCE[1], segs=6)
    return T

def tree_cypress():
    T = B('tree_cypress'); trunk(T, 0.7, 0.18, 0.14, BARK, 0.0)
    for k in range(7):
        r = 0.72 - abs(k - 2.2) * 0.1
        blob(T, max(0.25, r), (R(-0.06, 0.06), R(-0.06, 0.06), 1.0 + k * 0.62), PINE, squash=1.25)
    return T

def tree_dead():
    T = B('tree_dead'); top = trunk(T, 2.4, 0.28, 0.14, BARK_G, 0.3)
    def branch(p, d, ln, r, depth):
        q = p + d.normalized() * ln
        T.seg(p, q, r, r * 0.55, BARK_G, segs=5)
        if depth > 0:
            for k in range(2):
                nd = d.normalized() + Vector((R(-0.8, 0.8), R(-0.8, 0.8), R(-0.1, 0.5)))
                branch(q, nd, ln * 0.62, r * 0.55, depth - 1)
    for k in range(4):
        a = k / 4 * 2 * pi + 0.3
        branch(top - Vector((0, 0, 0.5 + k * 0.15)), Vector((cos(a), sin(a), 0.7)), 1.0, 0.1, 2)
    return T

def bush_round():
    T = B('bush_round')
    for (x, y, z, r) in ((0, 0, 0.45, 0.6), (0.45, 0.1, 0.35, 0.45), (-0.4, -0.15, 0.35, 0.48), (0.05, 0.4, 0.4, 0.42)):
        blob(T, r, (x, y, z), LEAF, squash=0.8)
    return T

def bush_flower():
    T = B('bush_flower')
    for (x, y, z, r) in ((0, 0, 0.4, 0.5), (0.4, 0.15, 0.3, 0.38), (-0.35, -0.1, 0.32, 0.4)):
        blob(T, r, (x, y, z), LEAF, squash=0.8)
    col = random.choice(FLOWER)
    for k in range(16):
        a = R(0, 2 * pi); e = R(0.0, 1.2)
        T.ball(0.07, (cos(a) * cos(e) * 0.55, sin(a) * cos(e) * 0.5, 0.35 + sin(e) * 0.4), col if k % 3 else random.choice(FLOWER), segs=6)
    return T

def bush_berry():
    T = B('bush_berry')
    for (x, y, z, r) in ((0, 0, 0.42, 0.55), (0.42, -0.1, 0.32, 0.42), (-0.38, 0.12, 0.34, 0.44)):
        blob(T, r, (x, y, z), [LEAF[1]], squash=0.8)
    for k in range(18):
        a = R(0, 2 * pi); e = R(-0.2, 1.1)
        T.ball(0.05, (cos(a) * cos(e) * 0.58, sin(a) * cos(e) * 0.52, 0.4 + sin(e) * 0.42), BERRY, segs=5)
    return T

def bush_fern():
    T = B('bush_fern')
    for k in range(11):
        a = k / 11 * 2 * pi + R(-0.1, 0.1)
        ln = R(0.7, 1.0)
        T.box((ln, 0.16, 0.03), (cos(a) * ln * 0.45, sin(a) * ln * 0.45, 0.3), random.choice(LEAF[:2] + LEAF_L[:1]), rot=(0, -R(0.45, 0.7), a))
        T.box((ln * 0.6, 0.28, 0.02), (cos(a) * ln * 0.5, sin(a) * ln * 0.5, 0.33), random.choice(LEAF), rot=(0, -R(0.45, 0.7), a))
    return T

def bush_grass():
    T = B('bush_grass')
    for k in range(22):
        a = R(0, 2 * pi); d = R(0, 0.25); h = R(0.6, 1.1)
        b0 = (cos(a) * d, sin(a) * d, 0)
        b1 = (cos(a) * (d + R(0.1, 0.35)), sin(a) * (d + R(0.1, 0.35)), h)
        T.seg(b0, b1, 0.035, 0.005, random.choice(GRASS_C[:2]), segs=3)
        if k % 4 == 0:
            T.seg(b1, (b1[0], b1[1], b1[2] + 0.2), 0.03, 0.01, GRASS_C[2], segs=4)
    return T

FLORA = [tree_oak, tree_maple, tree_cherry, tree_fruit, tree_birch, tree_willow, tree_pine, tree_spruce, tree_cypress, tree_dead,
         bush_round, bush_flower, bush_berry, bush_fern, bush_grass]

def build_flora():
    obs = []
    for fn in FLORA:
        random.seed(hash(fn.__name__) % 1000)
        obs.append(fn().done(bevel=0, outline=0))
    return obs

# ---------------------------------------------------------------- export, previews
def export(obs, fname):
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
    log('exported', fname, 'objects', len(obs), sorted(o.name for o in obs), 'tris', tris, 'bytes', os.path.getsize(path) if os.path.exists(path) else -1)

def celify():
    for ob in bpy.context.scene.objects:
        if ob.type != 'MESH' or ob.name == 'skydome':
            continue
        for slot in ob.material_slots:
            m = slot.material
            if m is None or 'rgb' not in m:
                continue
            rgb = tuple(m['rgb'])
            slot.material = cel(m.name + '_glow', rgb, emit=float(m['emit'])) if m['emit'] else cel(m.name + '_cel', rgb, var=0.07, scale=3.0, grad=None)

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

def P(x, y, z):
    return (x, -z, y)

def main():
    sc = setup(sun_rot=(52, 0, -35), sun_energy=4.2)
    sc.render.resolution_x, sc.render.resolution_y = 1500, 1000
    os.makedirs(KEEP, exist_ok=True)
    made = {}
    for name, fn in (('forge', lambda: [build_forge()]), ('altar', build_altar), ('garden', build_garden), ('bridge', build_bridge), ('flora', build_flora)):
        try:
            obs = fn()
            export(obs, name + '.glb')
            made[name] = obs
        except Exception:
            log('FAILED', name, traceback.format_exc())
    # previews: everything laid out on a lawn, flora in a row
    spots = {'forge': (0, 0), 'altar': (-30, 30), 'garden': (40, 30), 'bridge': (-30, 50)}
    for name, (x, z) in spots.items():
        for o in made.get(name, []):
            if o.parent is None:
                mw = o.matrix_world.copy()
                o.matrix_world = Matrix.Translation((x, -z, 0)) @ mw
    for k, o in enumerate(made.get('flora', [])):
        o.location = (-28 + k * 4.0, -70, 0)
    gb = Build('ground')
    gb.box((260, 260, 0.2), (0, 0, -0.1), pm('grass', '#6f8f45'))
    gb.done(bevel=0, outline=0)
    celify()
    for ob in list(bpy.context.scene.objects):
        if ob.type == 'MESH' and ob.name not in ('skydome', 'ground'):
            add_ink(ob, 0.025)
    render(sc, cam('c_forge', P(15, 11, 15), P(0, 1.5, 0), 30), 'b4_forge.png')
    render(sc, cam('c_altar', P(-30 + 6, 4.5, 30 + 6.5), P(-30, 1.3, 30), 34), 'b4_altar.png')
    render(sc, cam('c_garden', P(40 + 11, 9, 30 + 11), P(40, 0.5, 30), 34), 'b4_garden.png')
    render(sc, cam('c_bridge', P(-30 + 3.5, 2.2, 50 + 3.5), P(-30, 0.4, 50), 40), 'b4_bridge.png')
    render(sc, cam('c_flora_a', P(-10, 6, 70 + 13), P(-10, 2.2, 70), 30), 'b4_flora_a.png')
    render(sc, cam('c_flora_b', P(20, 6, 70 + 13), P(20, 2.0, 70), 30), 'b4_flora_b.png')

run(main)
