# World of Agents, batch 3: the Library, the Design studio, the Training yard, the watch tower and the sky dock.
# (House builder as in batch 2.) The yard, the tower and the dock are static models in their own local frames:
# the page drops each into the group it already places (yard centre, tower foot, dock frame at the island edge).
# Houses keep the town's exact footprint, door and cutaway: every wall comes in two named parts split at the cut line
# (<id>_<side>_lo stays, <id>_<side>_hi folds down), two-storey houses add <id>_Ufloor and <id>_U<side>_lo/_hi,
# and <id>_roof lifts off. Everything is in the house's own coordinates (town x, y up, z; door rules as in world.js).
# The Forge is one static model: plaza paving, furnace body, chimney, iron bands, horns, skull, spikes, mouth frame.
# The glowing mouth, the fire light and the props stay in the page (they react to how hard the team works).
import os
exec(compile(open(os.path.join(WOA_HOME, 'woa_kit.py'), encoding='utf-8').read(), 'woa_kit.py', 'exec'))  # WOA_HOME: from woa_watch.py
from math import sin, cos, pi, atan2, hypot, tan, radians, sqrt

KEEP = os.path.join(HOME, 'keep')
random.seed(11)

# ---------------------------------------------------------------- town numbers (world.js / m4-houses.js)
FLOOR_H, WALL_T = 0.22, 0.32
ROOMS = {
    'library': dict(x=24, z=-21, ry=-0.32, w=10, d=8, wallH=2.8, door=('S', -2.2, 1.6), pitch=0.66, storeys=2, upperH=2.5,
                    stairHole=(4.0, 4.84, -2.0, 0.0)),
    'studio':  dict(x=30, z=2, ry=-1.37, w=9, d=7, wallH=2.7, door=('S', 0, 1.6), pitch=0.58),
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

# ---------------------------------------------------------------- local frames: town (x, y up, z) -> Blender (x, -z, y)
def L3(x, y, z):
    return (x, -z, y)

LOGS = [pm('y_log_a', '#6e4a32'), pm('y_log_b', '#5f3f2a'), pm('y_log_c', '#7a5338')]
LOG_TIP = pm('y_tip', '#c8b48c')
ROPE = pm('y_rope', '#b8a07a')
YARD_R, YARD_GATE = 7.5, -0.526

def build_yard():
    """the palisade of sharpened logs, lashed with two rope bands, and the bone gate (yard-local)"""
    Y = B('yard')
    n = int(2 * pi * YARD_R / 0.42)
    tops = []
    for i in range(n):
        a = i / n * 2 * pi - pi
        dg = abs(a - YARD_GATE)
        dg = min(dg, 2 * pi - dg)
        if dg < 0.2:
            tops.append(None)
            continue
        h = R(2.0, 2.7)
        x, z = cos(a) * YARD_R, sin(a) * YARD_R
        lean = 0.06
        top = (x + cos(a) * lean * h, h, z + sin(a) * lean * h)
        Y.seg(L3(x, -0.2, z), L3(*top), 0.2, 0.17, random.choice(LOGS), segs=7)
        tip = (top[0] + cos(a) * 0.03, top[1] + 0.45, top[2] + sin(a) * 0.03)
        Y.seg(L3(*top), L3(*tip), 0.17, 0.01, LOG_TIP, segs=7)
        tops.append((x, z, a))
    for hb in (0.55, 1.65):                                       # rope bands on the outside, gaps at the gate
        for i in range(n):
            p, q = tops[i], tops[(i + 1) % n]
            if not p or not q:
                continue
            o = YARD_R + 0.2
            Y.seg(L3(cos(p[2]) * o, hb, sin(p[2]) * o), L3(cos(q[2]) * o, hb + R(-0.03, 0.03), sin(q[2]) * o), 0.045, 0.045, ROPE, segs=5)
    obs = [Y.done(bevel=0, outline=0)]
    # the bone gate, built in its own frame and turned to face out
    G = B('yard_gate')
    for sd in (-1, 1):
        G.seg(L3(sd * 1.55, -0.1, 0), L3(sd * 1.55, 2.9, 0), 0.3, 0.25, LOGS[1], segs=8)
        for yy in (0.6, 1.4, 2.2):
            G.cyl(0.31, 0.12, L3(sd * 1.55, yy, 0), ROPE, segs=8)
        G.seg(L3(sd * 1.55, 2.9, 0), L3(sd * 1.55, 3.4, 0), 0.25, 0.02, LOG_TIP, segs=8)
    for zz in (-0.35, 0.35):                                      # two curved ribs of bone over the gate
        prev = None
        for k in range(13):
            a = pi * k / 12
            p = L3(cos(a) * 1.5, 2.2 + sin(a) * 1.5, zz)
            if prev:
                G.seg(prev, p, 0.15, 0.15, BONE if k % 2 else BONE_D, segs=7)
            prev = p
    for k in range(1, 12, 2):                                     # vertebrae across the ribs
        a = pi * k / 12
        G.seg(L3(cos(a) * 1.5, 2.2 + sin(a) * 1.5, -0.35), L3(cos(a) * 1.5, 2.2 + sin(a) * 1.5, 0.35), 0.11, 0.11, BONE_D, segs=6)
    skull(G, L3(0, 3.85, 0.25), 1.1, (0, -1))
    horns(G, L3(0, 3.95, 0.2), 1.5, (1, 0), rise=0.8)
    go = G.done(bevel=0, outline=0)
    gx, gz = cos(YARD_GATE), sin(YARD_GATE)
    go.location = L3(gx * YARD_R, 0, gz * YARD_R)
    go.rotation_euler = (0, 0, atan2(gx, gz))
    obs.append(go)
    return obs

def build_watch():
    """the watch tower: a stone foot, four log legs with braces, a ladder, a planked lookout and a tiled hat (tower-local)"""
    T = B('watch')
    T.box((3.4, 3.4, 0.5), L3(0, 0.2, 0), MORTAR)
    for k in range(16):                                          # cut stones round the foot
        side, i = divmod(k, 4)
        ang = side * pi / 2
        along = -1.2 + i * 0.8
        nx, nz = sin(ang), cos(ang)
        ux, uz = cos(ang), -sin(ang)
        T.box((0.74, 0.08, 0.42), L3(nx * 1.72 + ux * along, 0.2, nz * 1.72 + uz * along), random.choice(STONES), rot=(0, 0, ang))
    legs = [(-1.2, -1.2), (1.2, -1.2), (1.2, 1.2), (-1.2, 1.2)]
    for x, z in legs:
        T.seg(L3(x * 1.05, 0.4, z * 1.05), L3(x, 6.5, z), 0.22, 0.18, LOGS[0], segs=8)
    for y0, y1 in ((0.6, 3.2), (3.2, 6.2)):                     # X braces on every side
        for i in range(4):
            (ax, az), (bx, bz) = legs[i], legs[(i + 1) % 4]
            T.seg(L3(ax, y0, az), L3(bx, y1, bz), 0.07, 0.07, WOOD, segs=5)
            T.seg(L3(bx, y0, bz), L3(ax, y1, az), 0.07, 0.07, WOOD, segs=5)
            T.seg(L3(ax, y1, az), L3(bx, y1, bz), 0.09, 0.09, TIMBER, segs=6)
    for sd in (-1, 1):                                            # the ladder up the front
        T.box((0.08, 0.1, 6.5), L3(sd * 0.3, 3.25, 1.45), WOOD_L)
    for k in range(17):
        T.box((0.62, 0.06, 0.06), L3(0, 0.35 + k * 0.37, 1.45), WOOD)
    T.box((3.3, 3.3, 0.2), L3(0, 6.4, 0), CORE)                 # the deck, planked on top
    for k in range(11):
        T.box((0.28, 3.2, 0.05), L3(-1.5 + k * 0.3, 6.52, 0), random.choice(BOARDS))
    for (x, z, w, d) in ((0, -1.6, 3.4, 0.1), (0, 1.6, 3.4, 0.1), (-1.6, 0, 0.1, 3.4), (1.6, 0, 0.1, 3.4)):
        T.box((w, d, 0.18), L3(x, 6.6, z), TIMBER)
        horizontal = w > d
        for k in range(10):                                       # parapet boards with gaps
            off = -1.5 + k * 0.33
            bx, bz = (x + off, z) if horizontal else (x, z + off)
            T.box((0.26 if horizontal else 0.06, 0.06 if horizontal else 0.26, 0.9 + (0.12 if k % 3 == 0 else 0)), L3(bx, 7.1, bz), random.choice(BOARDS))
        T.box((w + 0.1, d + 0.06, 0.12), L3(x, 7.58, z), TIMBER)
    for x, z in ((-1.55, -1.55), (1.55, -1.55), (-1.55, 1.55), (1.55, 1.55)):
        T.seg(L3(x, 6.5, z), L3(x, 8.7, z), 0.09, 0.09, TIMBER, segs=6)
    tiers = [(2.75, 2.1, 8.6, 0.6), (2.15, 1.45, 9.1, 0.6), (1.5, 0.75, 9.6, 0.55), (0.8, 0.04, 10.05, 0.6)]
    for k, (r0, r1, y, hh) in enumerate(tiers):                  # a four-sided tiled hat, in tiers
        T.cyl(r0, hh, L3(0, y + hh / 2, 0), TILES[k % 3], segs=4, r2=r1, rot=(0, 0, pi / 4))
    skull(T, L3(0, 10.55, 0), 0.7, (0, -1))
    horns(T, L3(0, 10.7, 0), 1.2, (1, 0), rise=0.9)
    T.box((0.7, 0.04, 1.6), L3(0, 5.6, -1.66), RED)              # a war banner off the back of the deck
    T.box((0.3, 0.05, 0.4), L3(0, 5.8, -1.69), pm('y_gold', '#c79a45'))
    return [T.done(bevel=0, outline=0)]

def build_dock():
    """the sky dock in the page's dock frame: +z runs out from the island edge (dock-local)"""
    D = B('dock')
    for sd in (-1, 1):
        D.box((0.28, 13.4, 0.32), L3(sd * 1.2, -0.16, 1.4), TIMBER)
    for z in (1.6, 4.4, 7.6):
        D.box((3.0, 0.24, 0.2), L3(0, -0.12, z), TIMBER)
    z = -2.3
    while z < 8.1:                                                # deck planks across, slightly uneven
        pw = min(R(0.26, 0.34), 8.1 - z)
        D.box((3.2 + R(-0.08, 0.08), pw - 0.03, 0.12), L3(R(-0.04, 0.04), 0.16 + R(-0.01, 0.01), z + pw / 2), random.choice(BOARDS + [WOOD]))
        z += pw
    for z in (3.6, 7.4):                                          # struts back into the rock, with iron feet
        for sd in (-1, 1):
            D.seg(L3(sd * 1.2, -0.3, z), L3(sd * 1.25, -3.2, -0.9), 0.13, 0.13, WOOD, segs=6)
    for sd in (-1, 1):
        D.seg(L3(sd * 1.2, -0.3, 1.8), L3(sd * 1.25, -2.4, -0.7), 0.11, 0.11, WOOD, segs=6)
        D.box((0.5, 0.6, 0.5), L3(sd * 1.25, -3.1, -0.85), IRON)
    D.seg(L3(-1.2, -1.6, 2.6), L3(1.2, -1.1, 4.9), 0.06, 0.06, TIMBER, segs=5)
    D.seg(L3(1.2, -1.6, 2.6), L3(-1.2, -1.1, 4.9), 0.06, 0.06, TIMBER, segs=5)
    zs = [0.2, 1.7, 3.2, 4.7, 6.2, 7.7]
    for sd in (-1, 1):                                            # rails: posts and rope, a gap for the gangplank
        for z in zs:
            D.seg(L3(sd * 1.5, 0.2, z), L3(sd * 1.5, 1.22, z), 0.08, 0.07, TIMBER, segs=7)
        for i in range(len(zs) - 1):
            if sd > 0 and zs[i] == 4.7:
                continue
            a, b = zs[i], zs[i + 1]
            prev = None
            for k in range(5):                                    # the rope sags between posts
                u = k / 4
                p = L3(sd * 1.5, 1.12 - 0.12 * sin(u * pi), a + (b - a) * u)
                if prev:
                    D.seg(prev, p, 0.03, 0.03, ROPE, segs=5)
                prev = p
    D.box((3.2, 0.12, 0.12), L3(0, 1.1, 8.0), TIMBER)
    # the crane
    cx, cy, cz = -1.1, 0.22, 6.8
    D.seg(L3(cx, cy, cz), L3(cx, cy + 3.8, cz), 0.18, 0.14, WOOD, segs=8)
    D.box((4.6, 0.18, 0.18), L3(cx + 1.9, cy + 3.6, cz), WOOD)
    D.seg(L3(cx, cy + 2.6, cz), L3(cx + 1.6, cy + 3.55, cz), 0.07, 0.07, TIMBER, segs=6)
    D.seg(L3(cx + 3.9, cy + 3.5, cz), L3(cx + 3.9, cy + 1.7, cz), 0.02, 0.02, ROPE, segs=5)
    D.ball(0.12, L3(cx + 3.9, cy + 1.6, cz), IRON, segs=8)
    for k in range(4):
        D.cyl(0.24 - k * 0.01, 0.08, L3(cx, cy + 0.3 + k * 0.08, cz), ROPE, segs=10)
    # bollard and a coil of rope
    D.cyl(0.18, 0.5, L3(1.15, 0.47, 5.6), IRON, segs=10, r2=0.16)
    for k in range(3):
        D.cyl(0.24 - k * 0.04, 0.07, L3(0.5, 0.26 + k * 0.06, 2.0), ROPE, segs=12)
    # the harbour hut on land, in its own little frame
    hx, hz = -4.6, -3.8
    D.box((3.4, 3.0, 0.3), L3(hx, 0.0, hz), MORTAR)
    D.box((3.0, 2.6, 2.3), L3(hx, 1.15 + 0.15, hz), CORE)
    for face in (1, -1):
        x = -1.45
        while x < 1.45:                                           # boards front and back
            bw = min(R(0.2, 0.27), 1.45 - x)
            if not (face > 0 and (0.12 < x + bw / 2 < 1.08 or -1.06 < x + bw / 2 < -0.34)):
                D.box((bw - 0.025, 0.04, 2.2), L3(hx + x + bw / 2, 1.25, hz + face * 1.32), random.choice(BOARDS))
            x += bw
    for sx in (-1, 1):
        D.box((0.2, 2.8, 2.5), L3(hx + sx * 1.52, 1.4, hz), TIMBER)
    D.box((0.9, 0.08, 1.75), L3(hx + 0.6, 0.98, hz + 1.33), WOOD)  # the door, with iron bands
    for yy in (0.5, 1.4):
        D.box((0.94, 0.1, 0.08), L3(hx + 0.6, yy, hz + 1.38), IRON)
    D.box((0.7, 0.06, 0.6), L3(hx - 0.7, 1.55, hz + 1.32), PANE)
    for bx in ((0, 0.34, 0.9, 0.08), (0, -0.34, 0.9, 0.08), (-0.4, 0, 0.08, 0.74), (0.4, 0, 0.08, 0.74)):
        D.box((bx[2], 0.1, bx[3]), L3(hx - 0.7 + bx[0], 1.55 + bx[1], hz + 1.34), TIMBER)
    for sd in (-1, 1):
        D.box((0.34, 0.05, 0.66), L3(hx - 0.7 + sd * 0.56, 1.55, hz + 1.4), RED, rot=(0, 0, sd * 0.35))
    skull(D, L3(hx + 0.6, 2.1, hz + 1.48), 0.45, (0, -1))
    run_, rise_ = 1.6, 1.0
    D.box((3.6, 1.9, 0.1), L3(hx, 3.0, hz - 0.8), RED_D, rot=(-0.56, 0, 0))
    D.box((3.6, 1.9, 0.1), L3(hx, 3.0, hz + 0.8), RED_D, rot=(0.56, 0, 0))
    gable_roof(D, hx - 1.8, hx + 1.8, -hz, run_, 2.45, rise_, TILES, flare=1.0, row=0.36, sw=(0.4, 0.55), thick=0.06)
    for sd in (-1, 1):
        D.prism([(-1.3, 2.45), (1.3, 2.45), (0, 3.35)], lambda p, sd=sd: (hx + sd * 1.5 - 0.05, -(hz + p[0]), p[1]),
                lambda p, sd=sd: (hx + sd * 1.5 + 0.05, -(hz + p[0]), p[1]), TIMBER)
    D.box((3.8, 0.16, 0.14), L3(hx, 3.5, hz), IRON)
    return [D.done(bevel=0, outline=0)]

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
    statics = {}
    for name, fn in (('yard', build_yard), ('watch', build_watch), ('dock', build_dock)):
        try:
            obs = fn()
            export(obs, name + '.glb')
            statics[name] = obs
        except Exception:
            log('FAILED', name, traceback.format_exc())
    # previews: move each house to its place in town, toon materials and ink
    for hid, obs in placed.items():
        r = ROOMS[hid]
        piv = bpy.data.objects.new(hid + '_pivot', None)
        bpy.context.scene.collection.objects.link(piv)
        piv.location = (r['x'], -r['z'], 0)
        piv.rotation_euler = (0, 0, r['ry'])
        for o in obs:
            o.parent = piv
    spots = {'yard': (-24, 17, 0), 'watch': (36.5, -8.5, 0), 'dock': (60, 20, 0)}
    for name, obs in statics.items():
        x, z, ry = spots[name]
        piv = bpy.data.objects.new(name + '_pivot', None)
        bpy.context.scene.collection.objects.link(piv)
        piv.location = (x, -z, 0)
        piv.rotation_euler = (0, 0, ry)
        for o in obs:
            if o.parent is None:
                mw = o.matrix_world.copy()
                o.parent = piv
                o.matrix_parent_inverse = Matrix.Identity(4)
                o.matrix_basis = mw
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
        render(sc, cam('c_' + hid, P(cxw, 7.5, czw), P(r['x'], 2.0, r['z']), 32), 'b3_%s.png' % hid)
    render(sc, cam('c_yard', P(-24 + 13, 9, 17 + 13), P(-24, 1.2, 17), 32), 'b3_yard.png')
    render(sc, cam('c_watch', P(36.5 + 8, 7, -8.5 + 10), P(36.5, 5.2, -8.5), 34), 'b3_watch.png')
    render(sc, cam('c_dock', P(60 + 12, 7, 20 - 6), P(60, 0.5, 20 + 1.5), 30), 'b3_dock.png')

run(main)
