# World of Agents, batch 2: the Forge, the War hall, the Workshop and the Tavern.
# Houses keep the town's exact footprint, door and cutaway: every wall comes in two named parts split at the cut line
# (<id>_<side>_lo stays, <id>_<side>_hi folds down), two-storey houses add <id>_Ufloor and <id>_U<side>_lo/_hi,
# and <id>_roof lifts off. Everything is in the house's own coordinates (town x, y up, z; door rules as in world.js).
# The Forge is one static model: plaza paving, furnace body, chimney, iron bands, horns, skull, spikes, mouth frame.
# The glowing mouth, the fire light and the props stay in the page (they react to how hard the team works).
import os
exec(compile(open(os.path.join(os.path.expanduser('~'), 'Documents', 'WoA-models', 'woa_kit.py'), encoding='utf-8').read(), 'woa_kit.py', 'exec'))
from math import sin, cos, pi, atan2, hypot, tan, radians, sqrt

KEEP = os.path.join(HOME, 'keep')
random.seed(11)

# ---------------------------------------------------------------- town numbers (world.js / m4-houses.js)
FLOOR_H, WALL_T = 0.22, 0.32
ROOMS = {
    'war':      dict(x=-6,   z=-22,  ry=0.06, w=15, d=9, wallH=3.0, door=('S', 0, 2.4), pitch=0.62),
    'workshop': dict(x=-27,  z=-4,   ry=0.28, w=12, d=8, wallH=2.8, door=('E', 1, 1.8), pitch=0.6, chimney=(-4.0, -1.6)),
    'tavern':   dict(x=20.5, z=18.6, ry=-0.2, w=11, d=8, wallH=2.8, door=('W', 1.5, 1.8), pitch=0.6, storeys=2, upperH=2.5,
                     chimney=(-1.5, -3.1), stairHole=(-5.34, -4.44, -2.8, -0.5)),
}

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

# ---------------------------------------------------------------- one wall: wall-local coords (a along, h up, n out) in two parts
class WallParts:
    """Boxes go to the lower part (stays) or the upper part (folds) by the same rule as the page:
    a box tilted in the wall plane goes up whole; an upright box that crosses the cut is cut in two."""
    def __init__(self, name, cut):
        self.lo, self.hi, self.cut = B(name + '_lo'), B(name + '_hi'), cut
    def box(self, a, h, n, sa, sh, sn, mat, rz=0.0, ry=0.0):
        rot = (0, -rz, ry)
        y0, y1 = h - sh / 2, h + sh / 2
        if rz or y0 >= self.cut - 0.01:
            self.hi.box((sa, sn, sh), (a, -n, h), mat, rot=rot)
        elif y1 <= self.cut + 0.01:
            self.lo.box((sa, sn, sh), (a, -n, h), mat, rot=rot)
        else:
            self.lo.box((sa, sn, self.cut - y0), (a, -n, (y0 + self.cut) / 2), mat, rot=rot)
            self.hi.box((sa, sn, y1 - self.cut), (a, -n, (self.cut + y1) / 2), mat, rot=rot)

def build_wall(name, L, top, door, corners, windows, place, stone=True, base=0.0, T=WALL_T, paneT=None):
    yS = 1.15 if stone else base
    floorY = FLOOR_H if stone else base
    cut = yS if stone else base + 0.9
    W = WallParts(name, cut)
    gapA = door[0] - door[1] / 2 if door else 0
    gapB = door[0] + door[1] / 2 if door else 0
    spans = [(-L / 2, gapA), (gapB, L / 2)] if door else [(-L / 2, L / 2)]
    uh = top - yS
    FACE = T / 2 + 0.04          # outer face of the boards; timber stands proud of it
    # layout first, as the page does it: posts every ~2.3 m, panels between, every other wide panel a window
    n = max(1, round(L / 2.3))
    xs = []
    for i in range(1, n):
        x = -L / 2 + i * L / n
        if door and gapA - 0.45 < x < gapB + 0.45:
            continue
        xs.append(x)
    bounds = [-L / 2 + (0.41 if corners else 0), *xs, L / 2 - (0.41 if corners else 0)]
    if door:
        bounds += [gapA - 0.22, gapB + 0.22]
    bounds.sort()
    panels, k = [], 0
    for i in range(len(bounds) - 1):
        a, b = bounds[i], bounds[i + 1]
        pw, pc = b - a, (a + b) / 2
        if pw < 0.9 or (door and gapA - 0.3 < pc < gapB + 0.3):
            continue
        k += 1
        panels.append((pc, pw, 'win' if windows and pw > 1.5 and k % 2 == 1 else ('brace' if pw > 1.0 else None)))
    wy = floorY + (1.62 if stone else 1.35)
    holes = [(pc - 0.55, pc + 0.55) for pc, pw, kind in panels if kind == 'win']
    # the wall itself
    for a, b in spans:
        ln = b - a
        if ln < 0.05:
            continue
        cx = (a + b) / 2
        if stone:
            W.box(cx, yS / 2, 0, ln, yS, T + 0.08, MORTAR)
            rows = 4
            rh = yS / rows
            for r in range(rows):                                  # cut stones on the outer face
                s = a + (0.3 if r % 2 else 0) - 0.15
                while s < b - 0.05:
                    sl = min(R(0.45, 0.8), b - s)
                    s0 = max(s, a)
                    if sl > 0.18 and s + sl > a + 0.1:
                        W.box((s0 + s + sl) / 2, r * rh + rh / 2, (T + 0.08) / 2 + 0.03, (s + sl - s0) - 0.05, rh - 0.05, 0.08, random.choice(STONES))
                    s += sl
            W.box(cx, yS - 0.035, 0, ln, 0.06, T + 0.16, STONE_D)  # a flat coping on the band, below the cut
            W.box(cx, yS + uh / 2, 0, ln, uh, T, CORE)
        else:
            W.box(cx, (yS + top) / 2, 0, ln, top - yS, T, CORE)
        x = a + 0.11                                               # vertical boards outside, stopping at the windows
        while x < b - 0.08:
            bw = min(R(0.18, 0.26), b - x)
            bh = top - yS - R(0.0, 0.06)
            mat = random.choice(BOARDS)
            if any(x < h1 and x + bw > h0 for h0, h1 in holes):
                lo_h = (wy - 0.5) - yS
                hi_y0 = wy + 0.5
                if lo_h > 0.05:
                    W.box(x + bw / 2, yS + lo_h / 2, FACE - 0.02, bw - 0.025, lo_h, 0.04, mat)
                if yS + bh - hi_y0 > 0.05:
                    W.box(x + bw / 2, (hi_y0 + yS + bh) / 2, FACE - 0.02, bw - 0.025, yS + bh - hi_y0, 0.04, mat)
            else:
                W.box(x + bw / 2, yS + bh / 2, FACE - 0.02, bw - 0.025, bh, 0.04, mat)
            x += bw
    if door:
        dx, dw = door
        dh = FLOOR_H + 2.3
        lh = top - dh
        W.box(dx, dh + lh / 2, 0, dw, lh, T, CORE)
        for sd in (-1, 1):
            W.box(dx + sd * (dw / 2 + 0.1), (dh + 0.1) / 2, 0, 0.24, dh + 0.1, T + 0.2, TIMBER)
            for i in range(4):
                W.box(dx + sd * (dw / 2 + 0.1), 0.35 + i * 0.55, T / 2 + 0.12, 0.07, 0.07, 0.04, IRON)
        W.box(dx, dh + 0.08, 0, dw + 0.8, 0.3, T + 0.24, TIMBER)
        W.box(dx, dh + 0.27, T / 2 + 0.15, dw + 0.5, 0.08, 0.06, RED)           # a painted trim over the door
        skull(W.hi, (dx, -(T / 2 + 0.24), dh + 0.42), 0.55, (0, -1))
        horns(W.hi, (dx, -(T / 2 + 0.2), dh + 0.46), 0.8, (1, 0), rise=0.25)
    for a, b in spans:
        if b - a > 0.05:
            W.box((a + b) / 2, yS + (0 if stone else 0.09), 0, b - a, 0.18, T + 0.18, TIMBER)
    W.box(0, top - 0.1, 0, L, 0.22, T + 0.18, TIMBER)
    for x in xs:
        W.box(x, yS + uh / 2, 0, 0.2, uh, T + 0.16, TIMBER)
        for py in (yS + 0.09, top - 0.1):
            W.box(x, py, T / 2 + 0.11, 0.09, 0.09, 0.06, IRON)
    if corners:
        for x in (-L / 2 + 0.2, L / 2 - 0.2):
            W.box(x, (base + top + 0.12) / 2, 0, 0.42, top - base + 0.12, T + 0.2, TIMBER)
    for pc, pw, kind in panels:
        if kind == 'win':
            W.box(pc, wy, 0, 0.86, 0.78, paneT or T + 0.04, PANE)
            for bx in ((pc, wy + 0.44, 1.08, 0.1), (pc, wy - 0.44, 1.12, 0.12), (pc - 0.48, wy, 0.1, 0.96), (pc + 0.48, wy, 0.1, 0.96)):
                W.box(bx[0], bx[1], 0, bx[2], bx[3], T + 0.18, TIMBER)
            for bx in ((pc, wy, 0.06, 0.78), (pc, wy, 0.86, 0.05)):            # the glazing bars
                W.box(bx[0], bx[1], 0, bx[2], bx[3], T + 0.08, TIMBER)
            W.box(pc, wy - 0.56, T / 2 + 0.14, 1.0, 0.1, 0.22, WOOD)              # a sill box outside
            for sd in (-1, 1):
                W.box(pc + sd * 0.78, wy, FACE + 0.04, 0.42, 0.86, 0.05, RED, ry=sd * 0.35)
                for yy in (-0.24, 0.24):
                    W.box(pc + sd * 0.78 + sd * 0.012, wy + yy, FACE + 0.08, 0.44, 0.08, 0.03, RED_D, ry=sd * 0.35)
        elif kind == 'brace':
            ph = uh - 0.3
            ang = atan2(ph, pw - 0.2)
            dl = hypot(ph, pw - 0.2)
            for sd in (-1, 1):
                W.box(pc, yS + uh / 2, FACE + 0.03, dl, 0.13, 0.06, TIMBER, rz=sd * ang)
    lo, hi = W.lo.done(bevel=0, outline=0), W.hi.done(bevel=0, outline=0)
    for ob in (lo, hi):
        ob.location, ob.rotation_euler = place
    return lo, hi

def wall_defs(w, d):
    return {'S': ((0, d / 2), (0, 1), w + WALL_T), 'N': ((0, -d / 2), (0, -1), w + WALL_T),
            'E': ((w / 2, 0), (1, 0), d - WALL_T), 'W': ((-w / 2, 0), (-1, 0), d - WALL_T)}

def door_local(r):
    side, off, _ = r['door']
    w, d = r['w'], r['d']
    return {'S': (off, d / 2), 'N': (off, -d / 2), 'E': (w / 2, off), 'W': (-w / 2, off)}[side]

def frame(c, n, y=0.0):
    """Blender location and rotation of a wall frame: town rotation.y = atan2(nx, nz) is the same angle about Blender Z"""
    return ((c[0], -c[1], y), (0, 0, atan2(n[0], n[1])))

def build_house(hid, r):
    w, d = r['w'], r['d']
    top = FLOOR_H + r['wallH']
    obs = []
    # footing: a stone plinth with cut stones, and a step at the door
    Bb = B(hid + '_base')
    Bb.box((w + 0.6, d + 0.6, FLOOR_H + 0.3), (0, 0, (FLOOR_H + 0.3) / 2 - 0.3), MORTAR)
    for (cx, cz, L, nx, nz) in ((0, d / 2 + 0.3, w + 0.6, 0, 1), (0, -d / 2 - 0.3, w + 0.6, 0, -1), (w / 2 + 0.3, 0, d + 0.6, 1, 0), (-w / 2 - 0.3, 0, d + 0.6, -1, 0)):
        ang = atan2(nx, nz)
        ux, uy = cos(ang), sin(ang)          # along the face, in Blender XY
        for rrow in range(2):
            s = -L / 2 + (0.25 if rrow else 0)
            while s < L / 2 - 0.05:
                sl = min(R(0.5, 0.85), L / 2 - s)
                if sl > 0.2:
                    m = s + sl / 2
                    Bb.box((sl - 0.05, 0.08, 0.22), (cx + ux * m + nx * 0.03, -cz + uy * m - nz * 0.03, -0.17 + rrow * 0.25), random.choice(STONES), rot=(0, 0, ang))
                s += sl
    dl = door_local(r)
    dn = {'S': (0, 1), 'N': (0, -1), 'E': (1, 0), 'W': (-1, 0)}[r['door'][0]]
    dw = r['door'][2]
    along = (0.7, dw + 0.5) if abs(dn[0]) > 0 else (dw + 0.5, 0.7)
    Bb.box((along[0], along[1], 0.14), (dl[0] + dn[0] * 0.62, -(dl[1] + dn[1] * 0.62), 0.07), STONE_D)
    obs.append(Bb.done(bevel=0, outline=0))
    # ground-floor walls
    for k, (c, n, L) in wall_defs(w, d).items():
        ang = atan2(n[0], n[1])
        ux, uz = cos(ang), -sin(ang)
        door = None
        if r['door'][0] == k:
            door = ((dl[0] - c[0]) * ux + (dl[1] - c[1]) * uz, dw)
        obs += build_wall('%s_%s' % (hid, k), L, top, door, k in ('N', 'S'), True, frame(c, n))
    roof_at = top
    if r.get('storeys') == 2:
        uh = r['upperH']
        Uf = B(hid + '_Ufloor')
        hw, hd = w / 2, d / 2
        hx0, hx1, hz0, hz1 = r.get('stairHole', (0, 0, 0, 0))
        pieces = [(-hw, hx0, -hd, hd), (hx1, hw, -hd, hd), (hx0, hx1, -hd, hz0), (hx0, hx1, hz1, hd)] if 'stairHole' in r else [(-hw, hw, -hd, hd)]
        for x0, x1, z0, z1 in pieces:
            if x1 - x0 < 0.05 or z1 - z0 < 0.05:
                continue
            Uf.box((x1 - x0, z1 - z0, 0.16), ((x0 + x1) / 2, -(z0 + z1) / 2, top + 0.06), CORE)
            x = x0
            while x < x1 - 0.02:                                    # floor boards on top
                bw = min(0.3, x1 - x)
                Uf.box((bw - 0.02, z1 - z0, 0.06), (x + bw / 2, -(z0 + z1) / 2, top + 0.17), random.choice(BOARDS))
                x += bw
        obs.append(Uf.done(bevel=0, outline=0))
        for k, (c, n, L) in wall_defs(w, d).items():
            lo, hi = build_wall('%s_U%s' % (hid, k), L, 0.2 + uh, None, k in ('N', 'S'), True, frame(c, n, top),
                                stone=False, base=0.2, T=WALL_T - 0.05, paneT=WALL_T - 0.03)
            jet = B('%s_Ujet%s' % (hid, k))   # the jetty beam belongs with the lower part
            jet.box((L + 0.2, 0.18, 0.2), (0, -0.2, 0.05), TIMBER)
            jo = jet.done(bevel=0, outline=0)
            jo.location, jo.rotation_euler = frame(c, n, top)
            bpy.ops.object.select_all(action='DESELECT')
            jo.select_set(True)
            lo.select_set(True)
            bpy.context.view_layer.objects.active = lo
            bpy.ops.object.join()
            obs += [lo, hi]
        roof_at = top + 0.2 + uh
    obs.append(build_roof(hid, r, roof_at))
    return obs

def build_roof(hid, r, roof_at):
    w, d, a = r['w'], r['d'], r['pitch']
    over = 0.6
    half = d / 2 + over
    hR = half * tan(a)
    base = roof_at - over * tan(a)
    yb = over * tan(a)
    Rb = B(hid + '_roof')
    slab = half / cos(a)
    for sd in (-1, 1):                                           # the deck under the tiles
        Rb.box((w + over * 2, slab, 0.12), (0, -sd * half / 2, base + hR / 2 - 0.02), RED_D, rot=(sd * a, 0, 0))
    gable_roof(Rb, -(w / 2 + over), w / 2 + over, 0, half, base, hR, TILES, flare=1.0, row=0.42, sw=(0.55, 0.78), thick=0.07)
    for sd in (-1, 1):                                           # gables: boards, a round vent, a skull, horns at the ridge ends
        gx = sd * (w / 2 + 0.02)
        pts = [(-d / 2, base + yb), (d / 2, base + yb), (0, base + hR - 0.12)]
        Rb.prism(pts, lambda p: (gx - 0.06, -p[0], p[1]), lambda p: (gx + 0.06, -p[0], p[1]), TIMBER)
        for k in range(-int(d / 2 / 0.3), int(d / 2 / 0.3) + 1):
            z = k * 0.3
            hgt = (hR - 0.12 - yb) * (1 - abs(z) / (d / 2)) - 0.08
            if hgt > 0.1:
                Rb.box((0.04, 0.26, hgt), (gx + sd * 0.07, -z, base + yb + hgt / 2), random.choice(BOARDS))
        Rb.ball(0.28, (gx + sd * 0.1, 0, base + yb + (hR - yb) * 0.62), PANE, scale=(0.4, 1, 1), segs=10)
        skull(Rb, (sd * (w / 2 + 0.2), 0, base + yb + (hR - yb) * 0.36), 0.68, (sd, 0))
        horns(Rb, (sd * (w / 2 + over + 0.05), 0, base + hR + 0.12), 1.6, (0, 1))
        for side in (-1, 1):                                     # red bargeboards along the gable edges
            Rb.box((0.1, slab + 0.2, 0.22), (sd * (w / 2 + over + 0.04), -side * half / 2, base + hR / 2 + 0.06), RED, rot=(side * a, 0, 0))
    Rb.box((w + over * 2 + 0.2, 0.26, 0.2), (0, 0, base + hR + 0.04), IRON)
    nsp = int((w + over) / 1.5)
    for i in range(nsp):
        x = -w / 2 + 0.5 + i * (w - 1) / max(1, nsp - 1)
        Rb.seg((x, 0, base + hR + 0.12), (x, 0, base + hR + 0.46), 0.06, 0.005, BONE_D, segs=5)
    if r.get('chimney'):
        cx, cz = r['chimney']
        ch = hR + 1.4
        Rb.box((0.85, 0.85, ch), (cx, -cz, base + ch / 2), MORTAR)
        rows = int(ch / 0.3)
        for k in range(rows):
            for (ox, oy, sx, sy) in ((0.44, 0, 0.06, 0.88), (-0.44, 0, 0.06, 0.88), (0, 0.44, 0.88, 0.06), (0, -0.44, 0.88, 0.06)):
                Rb.box((sx if sx < 0.1 else sx - (0.1 if k % 2 else 0), sy if sy < 0.1 else sy - (0.1 if k % 2 else 0), 0.26),
                       (cx + ox, -cz + oy, base + 0.15 + k * 0.3), random.choice(STONES))
        Rb.box((1.05, 1.05, 0.16), (cx, -cz, base + ch + 0.05), IRON)
    return Rb.done(bevel=0, outline=0)

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
    for k in range(64):                                           # a curb of bigger stones round the edge
        a = k / 64 * 2 * pi
        F.box((0.34, 0.74, 0.22), (cos(a) * 7.78, sin(a) * 7.78, 0.13), random.choice(STONES), rot=(0, 0, a))
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
    placed = {}
    for hid, r in ROOMS.items():
        try:
            obs = build_house(hid, r)
            export(obs, 'house_%s.glb' % hid)
            placed[hid] = obs
        except Exception:
            log('FAILED house', hid, traceback.format_exc())
    try:
        fo = build_forge()
        export([fo], 'forge.glb')
    except Exception:
        log('FAILED forge', traceback.format_exc())
    # previews: move each house to its place in town, toon materials and ink
    for hid, obs in placed.items():
        r = ROOMS[hid]
        piv = bpy.data.objects.new(hid + '_pivot', None)
        bpy.context.scene.collection.objects.link(piv)
        piv.location = (r['x'], -r['z'], 0)
        piv.rotation_euler = (0, 0, r['ry'])
        for o in obs:
            o.parent = piv
    gb = Build('ground')
    gb.box((140, 140, 0.2), (0, 0, -0.1), pm('grass', '#6f8f45'))
    gb.done(bevel=0, outline=0)
    celify()
    for ob in list(bpy.context.scene.objects):
        if ob.type == 'MESH' and ob.name not in ('skydome', 'ground'):
            add_ink(ob, 0.03)
    for hid, r in ROOMS.items():
        if hid not in placed:
            continue
        ang = r['ry'] + {'S': 0.55, 'N': pi + 0.55, 'E': pi / 2 + 0.55, 'W': -pi / 2 + 0.55}[r['door'][0]]
        dist = max(r['w'], r['d']) * 1.45 + 6
        cxw, czw = r['x'] + sin(ang) * dist, r['z'] + cos(ang) * dist
        render(sc, cam('c_' + hid, P(cxw, 7.5, czw), P(r['x'], 2.0, r['z']), 32), 'b2_%s.png' % hid)
    render(sc, cam('c_forge', P(12, 9, 15), P(0, 3.5, -0.6), 30), 'b2_forge.png')

run(main)
