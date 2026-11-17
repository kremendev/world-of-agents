# World of Agents: Blender kit. Cel materials, a box builder, roofs, stone courses, scene and render helpers.
# Loaded by the build scripts with exec(), so everything here lands in their globals.
import bpy, bmesh, math, random, os, traceback
from mathutils import Matrix, Vector, Euler

HOME = os.path.join(os.path.expanduser('~'), 'Documents', 'WoA-models')
OUT = os.path.join(HOME, 'renders')
LOG = []
def log(*a):
    LOG.append(' '.join(str(x) for x in a))
R = random.uniform

# ---------------------------------------------------------------- cel material
# lighting -> three flat tones (cool shade, mid, warm light), times a base colour that is varied by noise or grain,
# darkened in crevices (AO) and toward the ground (a painted gradient)
MATS = {}
def _sock(node, name):
    for s in node.inputs:
        if s.identifier == name or s.name == name:
            return s
    raise KeyError(name)

def cel(name, color, var=0.16, scale=5.0, emit=0.0, grain=False, ao=True, grad=(0.82, 1.08, 0.0, 6.0), shade=(0.42, 0.45, 0.70)):
    if name in MATS:
        return MATS[name]
    m = bpy.data.materials.new(name)
    try:
        m.use_nodes = True
    except Exception:
        pass
    nt = m.node_tree
    N, L = nt.nodes, nt.links
    N.clear()
    out = N.new('ShaderNodeOutputMaterial')
    em = N.new('ShaderNodeEmission')
    L.new(em.outputs[0], out.inputs['Surface'])
    if emit > 0:
        em.inputs['Color'].default_value = (*color, 1)
        em.inputs['Strength'].default_value = emit
        MATS[name] = m
        return m
    diff = N.new('ShaderNodeBsdfDiffuse')
    diff.inputs['Color'].default_value = (1, 1, 1, 1)
    s2r = N.new('ShaderNodeShaderToRGB')
    L.new(diff.outputs[0], s2r.inputs[0])
    ramp = N.new('ShaderNodeValToRGB')
    cr = ramp.color_ramp
    cr.interpolation = 'CONSTANT'
    cr.elements[0].position = 0.0
    cr.elements[0].color = (*shade, 1)
    cr.elements[1].position = 0.42
    cr.elements[1].color = (0.72, 0.72, 0.86, 1)
    e = cr.elements.new(0.72)
    e.color = (1.1, 1.02, 0.92, 1)
    L.new(s2r.outputs[0], ramp.inputs[0])
    tc = N.new('ShaderNodeTexCoord')
    if grain:
        tx = N.new('ShaderNodeTexWave')
        tx.wave_type = 'BANDS'
        try:
            tx.bands_direction = 'Z'
        except Exception:
            pass
        tx.inputs['Scale'].default_value = scale
        tx.inputs['Distortion'].default_value = 6
        tx.inputs['Detail'].default_value = 2
        fac = tx.outputs['Fac']
    else:
        tx = N.new('ShaderNodeTexNoise')
        tx.inputs['Scale'].default_value = scale
        tx.inputs['Detail'].default_value = 3
        fac = tx.outputs['Fac']
    L.new(tc.outputs['Object'], tx.inputs['Vector'])
    mr = N.new('ShaderNodeMapRange')
    mr.inputs['From Min'].default_value = 0.25
    mr.inputs['From Max'].default_value = 0.75
    mr.inputs['To Min'].default_value = 1 - var
    mr.inputs['To Max'].default_value = 1 + var
    L.new(fac, mr.inputs['Value'])
    k = mr.outputs['Result']
    # painted gradient: darker low down, lighter high up (world height)
    if grad:
        geo = N.new('ShaderNodeNewGeometry')
        sep = N.new('ShaderNodeSeparateXYZ')
        L.new(geo.outputs['Position'], sep.inputs[0])
        gr = N.new('ShaderNodeMapRange')
        gr.inputs['From Min'].default_value = grad[2]
        gr.inputs['From Max'].default_value = grad[3]
        gr.inputs['To Min'].default_value = grad[0]
        gr.inputs['To Max'].default_value = grad[1]
        L.new(sep.outputs['Z'], gr.inputs['Value'])
        mm = N.new('ShaderNodeMath'); mm.operation = 'MULTIPLY'
        L.new(k, mm.inputs[0]); L.new(gr.outputs['Result'], mm.inputs[1])
        k = mm.outputs[0]
    # crevices go darker
    if ao:
        try:
            aon = N.new('ShaderNodeAmbientOcclusion')
            aon.inputs['Distance'].default_value = 0.35
            am = N.new('ShaderNodeMapRange')
            am.inputs['To Min'].default_value = 0.55
            am.inputs['To Max'].default_value = 1.0
            L.new(aon.outputs['AO'], am.inputs['Value'])
            mm = N.new('ShaderNodeMath'); mm.operation = 'MULTIPLY'
            L.new(k, mm.inputs[0]); L.new(am.outputs['Result'], mm.inputs[1])
            k = mm.outputs[0]
        except Exception as ex:
            log('ao skipped', ex)
    sc = N.new('ShaderNodeVectorMath')
    sc.operation = 'SCALE'
    sc.inputs[0].default_value = color
    L.new(k, _sock(sc, 'Scale'))
    mul = N.new('ShaderNodeVectorMath')
    mul.operation = 'MULTIPLY'
    L.new(sc.outputs['Vector'], mul.inputs[0])
    L.new(ramp.outputs['Color'], mul.inputs[1])
    L.new(mul.outputs['Vector'], em.inputs['Color'])
    MATS[name] = m
    return m

def ink():
    if 'ink' in MATS:
        return MATS['ink']
    m = cel('ink', (0.07, 0.04, 0.05), emit=1.0)
    m.use_backface_culling = True
    # the outline shell wraps the whole object: it must never cast a shadow, or it shades the object inside it
    for attr, val in (('use_backface_culling_shadow', True), ('use_backface_culling_lightprobe_volume', True), ('shadow_method', 'NONE')):
        try:
            setattr(m, attr, val)
        except Exception:
            pass
    return m

# ---------------------------------------------------------------- builder: many pieces in one mesh, a material index per piece
class Build:
    def __init__(self, name):
        self.name, self.bm, self.mats = name, bmesh.new(), []
    def mi(self, mat):
        if mat not in self.mats:
            self.mats.append(mat)
        return self.mats.index(mat)
    def _place(self, verts, loc, rot, mat):
        M = Matrix.Translation(Vector(loc)) @ Euler(rot, 'XYZ').to_matrix().to_4x4()
        bmesh.ops.transform(self.bm, matrix=M, verts=verts)
        idx = self.mi(mat)
        for f in {f for v in verts for f in v.link_faces}:
            f.material_index = idx
    def box(self, size, loc, mat, rot=(0, 0, 0), taper=None, top=None):
        verts = bmesh.ops.create_cube(self.bm, size=1.0)['verts']
        for v in verts:
            v.co.x *= size[0]; v.co.y *= size[1]; v.co.z *= size[2]
            if taper and v.co.z < 0:
                v.co.x *= taper; v.co.y *= taper
            if top and v.co.z > 0:
                v.co.x *= top; v.co.y *= top
        self._place(verts, loc, rot, mat)
    def cyl(self, r, h, loc, mat, rot=(0, 0, 0), segs=12, r2=None):
        verts = bmesh.ops.create_cone(self.bm, cap_ends=True, cap_tris=False, segments=segs, radius1=r, radius2=r if r2 is None else r2, depth=h)['verts']
        self._place(verts, loc, rot, mat)
    def ball(self, r, loc, mat, scale=(1, 1, 1), segs=12, rot=(0, 0, 0)):
        verts = bmesh.ops.create_uvsphere(self.bm, u_segments=segs, v_segments=max(6, segs // 2), radius=r)['verts']
        for v in verts:
            v.co.x *= scale[0]; v.co.y *= scale[1]; v.co.z *= scale[2]
        self._place(verts, loc, rot, mat)
    def poly(self, pts, z0, z1, mat):
        # an upright prism from a flat outline
        bot = [self.bm.verts.new((x, y, z0)) for x, y in pts]
        top = [self.bm.verts.new((x, y, z1)) for x, y in pts]
        n = len(pts)
        faces = [self.bm.faces.new(top), self.bm.faces.new(list(reversed(bot)))]
        for i in range(n):
            j = (i + 1) % n
            faces.append(self.bm.faces.new((bot[i], bot[j], top[j], top[i])))
        idx = self.mi(mat)
        for f in faces:
            f.material_index = idx
    def done(self, bevel=0.012, outline=0.014, smooth=False):
        me = bpy.data.meshes.new(self.name)
        bmesh.ops.recalc_face_normals(self.bm, faces=self.bm.faces[:])
        # rounded edges are real geometry: a Bevel modifier stacked under the outline shell flips the shading
        if bevel:
            try:
                edges = [e for e in self.bm.edges if e.is_manifold and e.calc_face_angle(0) > math.radians(35)]
                if edges:
                    bmesh.ops.bevel(self.bm, geom=edges, offset=bevel, offset_type='OFFSET', segments=2, profile=0.5, affect='EDGES', clamp_overlap=True)
            except Exception as ex:
                log('bevel skipped', self.name, ex)
        self.bm.to_mesh(me)
        self.bm.free()
        ob = bpy.data.objects.new(self.name, me)
        bpy.context.scene.collection.objects.link(ob)
        for m in self.mats:
            me.materials.append(m)
        if outline:
            n = len(self.mats)
            for _ in range(n):
                me.materials.append(ink())
            s = ob.modifiers.new('ink', 'SOLIDIFY')
            s.thickness = outline
            s.offset = 1.0
            s.use_flip_normals = True
            s.use_rim = False
            s.material_offset = n
            log('ink', self.name, getattr(ink(), 'use_backface_culling_shadow', 'n/a'))
        if smooth:
            for p in me.polygons:
                p.use_smooth = True
        return ob

# ---------------------------------------------------------------- shared pieces
def course(B, a, b, z0, z1, depth, mats, rows, skip=None, big=0.0, jitter=0.03):
    """Rows of cut stones along the segment a->b from z0 to z1. skip(t) -> True leaves a gap at distance t."""
    L = math.dist(a, b)
    ux, uy = (b[0] - a[0]) / L, (b[1] - a[1]) / L
    ang = math.atan2(uy, ux)
    rh = (z1 - z0) / rows
    for r in range(rows):
        s = -0.1 + (0.25 if r % 2 else 0)
        while s < L + 0.05:
            ln = R(0.45, 0.8) + big
            c = min(s + ln / 2, L)
            if skip and skip(c):
                s += ln
                continue
            hh = rh - 0.03
            B.box((ln - 0.03, depth + R(-0.04, 0.04), hh + R(-0.03, 0.01)), (a[0] + ux * c, a[1] + uy * c, z0 + r * rh + hh / 2 + 0.015), random.choice(mats),
                  rot=(R(-jitter, jitter), R(-jitter, jitter), ang + R(-jitter, jitter)))
            s += ln

def quoins(B, x, y, z0, z1, size, mats, ang=0.0):
    """Big corner stones, alternating long and short, sticking out past the wall."""
    h = 0.42
    n = int((z1 - z0) / h)
    for k in range(n):
        long_x = k % 2 == 0
        sx, sy = (size * 1.5, size) if long_x else (size, size * 1.5)
        B.box((sx, sy, h - 0.03), (x, y, z0 + k * h + h / 2), random.choice(mats), rot=(R(-0.02, 0.02), R(-0.02, 0.02), ang + R(-0.03, 0.03)))

def gable_roof(B, x0, x1, yc, run, top, rise, mats, flare=1.35, row=0.32, sw=(0.3, 0.42), ridge_mat=None, sides=(-1, 1), thick=0.05):
    """A gable roof along x with a sagging, flared profile: z = top + rise * u^flare, u from eave (0) to ridge (1)."""
    f = lambda u: top + rise * (u ** flare)
    # arc length by sampling, so rows sit evenly along the slope
    us = [i / 200 for i in range(201)]
    arc = [0.0]
    for i in range(1, 201):
        arc.append(arc[-1] + math.hypot(run / 200, f(us[i]) - f(us[i - 1])))
    total = arc[-1]
    rows = max(3, int(total / row))
    def u_at(sv):
        for i in range(1, 201):
            if arc[i] >= sv:
                return us[i]
        return 1.0
    for side in sides:
        for r in range(rows):
            u = u_at((r + 0.5) / rows * total)
            d = run * (1 - u)
            z = f(u)
            slope = math.atan2(rise * flare * max(u, 1e-3) ** (flare - 1), run)
            x = x0 + (0.17 if r % 2 else 0)
            while x < x1 - 0.05:
                w = min(R(*sw), x1 - x)
                tilt = slope - 0.07
                B.box((w - 0.025, row * 1.6, thick), (x + w / 2, yc + side * d, z + 0.05), random.choice(mats),
                      rot=(-side * tilt + R(-0.02, 0.02), R(-0.025, 0.025), R(-0.03, 0.03)))
                x += w
    if ridge_mat:
        n = int((x1 - x0) / 0.5)
        for k in range(n + 1):
            B.box((0.48, 0.42, 0.18), (x0 + k * (x1 - x0) / n, yc, top + rise + 0.12), ridge_mat, rot=(0, 0, R(-0.03, 0.03)))
    return f

# ---------------------------------------------------------------- scene, light, cameras, render
def setup(sun_rot=(58, 0, -38), sun_energy=4.0):
    for o in list(bpy.data.objects):
        bpy.data.objects.remove(o, do_unlink=True)
    sc = bpy.context.scene
    for eng in ('BLENDER_EEVEE', 'BLENDER_EEVEE_NEXT'):
        try:
            sc.render.engine = eng
            break
        except Exception:
            pass
    sc.view_settings.view_transform = 'Standard'
    sc.render.resolution_x, sc.render.resolution_y = 1600, 1100
    try:
        sc.eevee.taa_render_samples = 32
    except Exception:
        pass
    # the world only lights the shade, dimly and cool; a separate painted dome is what the camera sees as sky
    w = bpy.data.worlds.new('woa-sky')
    try:
        w.use_nodes = True
    except Exception:
        pass
    bg = w.node_tree.nodes.get('Background')
    bg.inputs['Color'].default_value = (0.50, 0.62, 0.92, 1)
    bg.inputs['Strength'].default_value = 0.2
    sc.world = w
    dm = bpy.data.materials.new('skydome')
    try:
        dm.use_nodes = True
    except Exception:
        pass
    N, L = dm.node_tree.nodes, dm.node_tree.links
    N.clear()
    o = N.new('ShaderNodeOutputMaterial')
    em = N.new('ShaderNodeEmission')
    geo = N.new('ShaderNodeNewGeometry')
    sep = N.new('ShaderNodeSeparateXYZ')
    L.new(geo.outputs['Position'], sep.inputs[0])
    mr = N.new('ShaderNodeMapRange')
    mr.inputs['From Min'].default_value = 0.0
    mr.inputs['From Max'].default_value = 140.0
    L.new(sep.outputs['Z'], mr.inputs['Value'])
    ramp = N.new('ShaderNodeValToRGB')
    ramp.color_ramp.elements[0].color = (0.86, 0.88, 0.95, 1)
    ramp.color_ramp.elements[1].color = (0.36, 0.56, 0.92, 1)
    L.new(mr.outputs['Result'], ramp.inputs[0])
    L.new(ramp.outputs['Color'], em.inputs['Color'])
    L.new(em.outputs[0], o.inputs['Surface'])
    bm = bmesh.new()
    bmesh.ops.create_uvsphere(bm, u_segments=32, v_segments=16, radius=300)
    me = bpy.data.meshes.new('skydome')
    bm.to_mesh(me)
    bm.free()
    me.materials.append(dm)
    dome = bpy.data.objects.new('skydome', me)
    for attr in ('visible_shadow',):
        try:
            setattr(dome, attr, False)
        except Exception:
            pass
    sc.collection.objects.link(dome)
    sun = bpy.data.lights.new('sun', 'SUN')
    sun.energy = sun_energy
    sun.color = (1.0, 0.88, 0.70)
    sun.angle = math.radians(1.0)
    so = bpy.data.objects.new('sun', sun)
    so.rotation_euler = Euler([math.radians(a) for a in sun_rot], 'XYZ')
    sc.collection.objects.link(so)
    return sc

def cam(name, loc, look, lens=40):
    c = bpy.data.cameras.new(name)
    c.lens = lens
    c.clip_end = 1000
    o = bpy.data.objects.new(name, c)
    o.location = loc
    o.rotation_euler = (Vector(look) - Vector(loc)).to_track_quat('-Z', 'Y').to_euler()
    bpy.context.scene.collection.objects.link(o)
    return o

def render(sc, camobj, fname):
    sc.camera = camobj
    sc.render.filepath = os.path.join(OUT, fname)
    bpy.ops.render.render(write_still=True)
    log('rendered', fname)

def run(main):
    os.makedirs(OUT, exist_ok=True)
    try:
        main()
        log('ok')
    except Exception:
        log(traceback.format_exc())
    with open(os.path.join(OUT, 'log.txt'), 'w') as f:
        f.write('\n'.join(LOG))
