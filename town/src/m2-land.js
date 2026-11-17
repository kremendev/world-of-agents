
/* ================================================================ sky, light: early evening, a low orange sun and dusky shade,
   dim enough that the castle's own lights (torches, braziers, windows, the furnace) carry it */
// The sky is a dome that paints its own gradient: deep blue overhead, warm near the horizon, orange where the sun is.
const SUN_DIR = new THREE.Vector3(-62, 27, 70).normalize();
const skyDome = new THREE.Mesh(new THREE.SphereGeometry(600, 32, 16), new THREE.ShaderMaterial({
  side: THREE.BackSide, depthWrite: false, fog: false,
  uniforms: { zen: { value: new THREE.Color('#2b3b78') }, mid: { value: new THREE.Color('#7f8fc4') }, hor: { value: new THREE.Color('#f2aa7c') }, low: { value: new THREE.Color('#c98a72') }, sunCol: { value: new THREE.Color('#ffa864') }, sunDir: { value: SUN_DIR } },
  vertexShader: 'varying vec3 vDir; void main() { vDir = position; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }',
  fragmentShader: `uniform vec3 zen, mid, hor, low, sunCol, sunDir; varying vec3 vDir;
    void main() {
      vec3 d = normalize(vDir); float h = d.y;
      vec3 c = h > 0.0 ? mix(mix(hor, mid, smoothstep(0.0, 0.22, h)), zen, smoothstep(0.22, 0.85, h)) : mix(hor, low, smoothstep(0.0, -0.35, h));
      float s = max(dot(d, sunDir), 0.0);
      c += sunCol * (pow(s, 6.0) * 0.45 + pow(s, 90.0) * 0.8 + pow(s, 2000.0) * 6.0);
      gl_FragColor = vec4(c * 1.2, 1.0);
    }`,
}));
skyDome.renderOrder = -100;
skyDome.frustumCulled = false;
scene.add(skyDome);
scene.fog = new THREE.Fog('#d6a487', 230, 640);
scene.add(new THREE.HemisphereLight('#9aa8d8', '#4a3428', 1.05));
const sun = new THREE.DirectionalLight('#ffb070', 2.3);
sun.position.copy(SUN_DIR).multiplyScalar(110);
sun.castShadow = true;
sun.shadow.mapSize.set(4096, 4096);
Object.assign(sun.shadow.camera, { left: -70, right: 70, top: 66, bottom: -66, near: 1, far: 260 });
sun.shadow.camera.updateProjectionMatrix();
sun.shadow.bias = -0.0005;
sun.shadow.normalBias = 0.05;
scene.add(sun);

/* ================================================================ the island */
const islandShape = new THREE.Shape();
for (let i = 0; i <= 160; i++) {
  const t = i / 160 * PI * 2, r = WW.islandR(t);
  // shape y is -z in the world after the rotation below
  const x = Math.cos(t) * r, y = -Math.sin(t) * r;
  if (i === 0) islandShape.moveTo(x, y); else islandShape.lineTo(x, y);
}
const islandGeo = new THREE.ExtrudeGeometry(islandShape, { depth: 2.4, bevelEnabled: true, bevelThickness: 0.5, bevelSize: 0.7, bevelSegments: 3, curveSegments: 4 });
islandGeo.rotateX(-PI / 2);
const grassTex = tiled(TEX.grass, 1 / 9, 1 / 9);
// the cliff side shows layers of soil and rock (extrude side UVs: v runs top -1.9 to bottom 1.5)
function strataMat(vTop, vBottom) {
  const t = TEX.strata.clone();
  t.wrapS = THREE.RepeatWrapping; t.wrapT = THREE.ClampToEdgeWrapping;
  t.repeat.set(1 / 8, -1 / (vBottom - vTop)); t.offset.set(0, vBottom / (vBottom - vTop));
  t.needsUpdate = true;
  return toon('#ffffff', { map: t });
}
const island = new THREE.Mesh(islandGeo, [toon('#ffffff', { map: grassTex }), strataMat(-1.9, 1.5)]);
island.position.y = -2.9;
island.receiveShadow = true;
scene.add(island);
const KIT = await KIT_P;
const CASTLE_KIT = KIT.walls && KIT.towers && KIT.gate;
if (KIT.underside) scene.add(KIT.underside);
if (CASTLE_KIT) for (const n of ['walls', 'towers', 'gate']) scene.add(KIT[n]);
/* the underside: an upside-down mountain of rock in strata, with ledges, vertical crags and a long tip (hand-built fallback) */
const UNDER_TOP = -3.25, UNDER_H = 46;
const unz = (a, b) => Math.sin(a * 1.7 + b * 0.9) * 0.5 + Math.sin(a * 3.1 - b * 1.3 + 1.7) * 0.3 + Math.sin(a * 7.3 + b * 2.9 + 0.4) * 0.2;
// radius of the underside at angle t and depth fraction f (0 at the top, 1 at the tip)
function underR(t, f) {
  const k = Math.min(1, f / 0.07);
  const ledge = 0.07 * Math.max(0, Math.sin(f * 21 + unz(t * 2, f * 3) * 2));
  const crag = 0.06 * unz(t * 9, f * 4) + 0.035 * Math.sin(t * 23 + f * 9);
  const prof = Math.pow(1 - f, 0.8) * (1 - 0.18 * f);
  return (WW.islandR(t) - 0.25) * Math.max(0.015, prof * (1 + (crag + ledge) * k));
}
const underY = (t, f) => UNDER_TOP - f * UNDER_H + unz(t * 4, f * 7) * 0.8 * Math.min(1, f / 0.08);
const STRATA = ['#6b4a35', '#7d6a5c', '#6a5a50', '#8a7563', '#5c4f4a', '#7a4f3e', '#73655e', '#5a4a46', '#4a4048'];
const strataCol = (t, f) => f < 0.05 ? STRATA[0] : f > 0.86 ? STRATA[8] : STRATA[1 + Math.floor(Math.abs(f * 13 + unz(t * 3, f) * 0.6)) % 7];
if (!KIT.underside) {
  const NT = 72, NF = 28;
  const pos = [], col = [];
  const P = (i, j) => { const t = i / NT * PI * 2, f = Math.pow(j / NF, 1.15), r = underR(t, f); return [Math.cos(t) * r, underY(t, f), Math.sin(t) * r, t, f]; };
  const c = new THREE.Color();
  for (let j = 0; j < NF; j++) for (let i = 0; i < NT; i++) {
    const a = P(i, j), b = P(i + 1, j), d = P(i, j + 1), e = P(i + 1, j + 1);
    for (const tri of [[a, d, b], [b, d, e]]) {
      const tm = (tri[0][3] + tri[1][3] + tri[2][3]) / 3, fm = (tri[0][4] + tri[1][4] + tri[2][4]) / 3;
      c.set(strataCol(tm, fm));
      const v = 0.92 + ((i * 7 + j * 13) % 5) * 0.035;
      for (const p of tri) { pos.push(p[0], p[1], p[2]); col.push(c.r * v, c.g * v, c.b * v); }
    }
  }
  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
  geo.setAttribute('color', new THREE.Float32BufferAttribute(col, 3));
  geo.computeVertexNormals();
  const under = new THREE.Mesh(geo, toon('#ffffff', { vertexColors: true, flatShading: true }));
  under.receiveShadow = true;
  scene.add(under);
  // stalactites under the ledges and a cluster at the tip; boulders standing out of the rock
  const drips = [], boulders = [];
  for (let i = 0; i < 90; i++) {
    const t = rr(0, PI * 2), f = rr(0.12, 0.92), r = underR(t, f) * 0.97, len = rr(1.5, 7) * (1.1 - f * 0.5);
    drips.push({ x: Math.cos(t) * r, y: underY(t, f) - len / 2 + 0.3, z: Math.sin(t) * r, sx: rr(0.35, 1.2) * (1.2 - f * 0.6), sy: len, sz: rr(0.35, 1.2) * (1.2 - f * 0.6), rx: PI + rr(-0.12, 0.12), rz: rr(-0.12, 0.12), ry: rr(0, 3), c: strataCol(t, f) });
  }
  for (let i = 0; i < 14; i++) {
    const t = rr(0, PI * 2), r = rr(0, 2.6), len = rr(5, 14);
    drips.push({ x: Math.cos(t) * r, y: UNDER_TOP - UNDER_H * rr(0.82, 0.95) - len / 2, z: Math.sin(t) * r, sx: rr(0.8, 1.8), sy: len, sz: rr(0.8, 1.8), rx: PI + rr(-0.1, 0.1), rz: rr(-0.1, 0.1), ry: rr(0, 3), c: pick(['#5a4a46', '#4a4048', '#625a5e']) });
  }
  for (let i = 0; i < 46; i++) {
    const t = rr(0, PI * 2), f = rr(0.06, 0.7), r = underR(t, f), s = rr(1.2, 3.6) * (1 - f * 0.6);
    boulders.push({ x: Math.cos(t) * r, y: underY(t, f), z: Math.sin(t) * r, sx: s, sy: s * rr(0.6, 1), sz: s * rr(0.8, 1.1), rx: rr(0, 3), ry: rr(0, 3), c: strataCol(t, f) });
  }
  instanced(new THREE.ConeGeometry(1, 1, 6), drips, { flat: true });
  instanced(new THREE.DodecahedronGeometry(1, 0), boulders, { flat: true });
  // vines and roots hanging from under the rim, with leaf clumps along them
  const leaves = [];
  const vineMat = toon('#4a5f34'), rootMat = toon('#4a3424');
  for (let i = 0; i < 46; i++) {
    const t = i / 46 * PI * 2 + rr(-0.05, 0.05), r0 = WW.islandR(t) - 0.4, len = rr(4, 13), y0 = rr(-2.6, -3.4);
    const out = rr(0.4, 1.6), sway = rr(-0.8, 0.8);
    const pts = [];
    for (let k = 0; k <= 4; k++) { const u = k / 4; pts.push(new THREE.Vector3(Math.cos(t) * (r0 + out * Math.sin(u * PI * 0.8)) - Math.sin(t) * sway * u, y0 - len * u, Math.sin(t) * (r0 + out * Math.sin(u * PI * 0.8)) + Math.cos(t) * sway * u)); }
    const curve = new THREE.CatmullRomCurve3(pts);
    const green = rnd() < 0.6;
    scene.add(mesh(new THREE.TubeGeometry(curve, 16, green ? 0.05 : 0.09, 5), green ? vineMat : rootMat, false));
    if (green) for (let k = 1; k < 9; k++) { const p = curve.getPoint(k / 9); const s = rr(0.18, 0.34); leaves.push({ x: p.x + rr(-0.15, 0.15), y: p.y, z: p.z + rr(-0.15, 0.15), sx: s, sy: s * 0.6, sz: s, ry: rr(0, 3), c: pick(['#5f7f42', '#4f6a3a', '#6a8a48', '#b04a32']) }); }
  }
  instanced(new THREE.IcosahedronGeometry(1, 0), leaves, { flat: true });
}
// clouds and distant isles
const cloudMat = toon('#fff4ea', { emissive: '#e8c8b0', emissiveIntensity: 0.25 });
const cloudGeo = new THREE.SphereGeometry(1, 16, 12);
const cloudRing = new THREE.Group();
scene.add(cloudRing);
for (let i = 0; i < 22; i++) {
  const a = i / 22 * PI * 2 + rr(-0.12, 0.12), r = rr(100, 260), s = rr(1.6, 3.2);
  const g = new THREE.Group();
  for (let k = 0; k < 7; k++) { const b = new THREE.Mesh(cloudGeo, cloudMat); const rs = rr(1.6, 2.8) * s; b.scale.set(rs, rs * 0.7, rs); b.position.set(rr(-3.5, 3.5) * s, rr(-0.3, 1.2) * s, rr(-1.8, 1.8) * s); g.add(b); }
  g.position.set(Math.cos(a) * r, rr(-45, 28), Math.sin(a) * r);
  cloudRing.add(g);
}
// roots hanging from the rim, a soft grass fringe, crystals in the rock, loose rocks floating below
{
  const roots = [], fringe = [], crystals = [], floaters = [];
  for (let i = 0; i < 420; i++) {
    const t = i / 420 * PI * 2 + rr(-0.006, 0.006), r = WW.islandR(t);
    if (rnd() < 0.55) {
      const len = rr(0.5, 2.8), y0 = rr(-0.55, -1.8);
      roots.push({ x: Math.cos(t) * (r + 0.8), y: y0 - len / 2, z: Math.sin(t) * (r + 0.8), sx: rr(0.7, 1.3), sy: len, sz: rr(0.7, 1.3), rx: PI + rr(-0.12, 0.12), rz: rr(-0.12, 0.12), c: pick(['#4a3424', '#3e2c20', '#4f6a3a', '#5a4a30']) });
    }
    if (i % 2 === 0) fringe.push({ x: Math.cos(t) * (r + 0.3), y: -0.06, z: Math.sin(t) * (r + 0.3), sx: rr(0.5, 0.8), sy: rr(0.18, 0.28), sz: rr(0.5, 0.8), c: pick(['#5f7f42', '#6a8a48', '#55753c']) });
  }
  const crystalGlow = [];
  for (let i = 0; i < (KIT.underside ? 0 : 16); i++) {
    // clusters grow out of the rock surface, pointing outward and down
    const t = rr(0, PI * 2), f = rr(0.1, 0.65), y = underY(t, f), r = underR(t, f) + 0.3;
    const cx = Math.cos(t) * r, cz = Math.sin(t) * r, col = pick(['#5fe0d0', '#e0605a', '#5fe0d0']);
    for (let j = 0; j < 6; j++) crystals.push({ x: cx + rr(-0.7, 0.7), y: y + rr(-0.7, 0.5), z: cz + rr(-0.7, 0.7), sx: rr(0.22, 0.5), sy: rr(0.8, 2.0), sz: rr(0.22, 0.5), rx: Math.sin(t) * rr(0.5, 1.2), rz: -Math.cos(t) * rr(0.5, 1.2), c: col });
    crystalGlow.push([cx, y, cz, col]);
  }
  for (const [x, y, z, col] of crystalGlow) { const h = new THREE.Sprite(new THREE.SpriteMaterial({ map: TEX.soft, color: col, transparent: true, opacity: 0.55, depthWrite: false, blending: THREE.AdditiveBlending })); h.position.set(x, y, z); h.scale.setScalar(5); scene.add(h); }
  for (let i = 0; i < 7; i++) {
    const t = rr(0, PI * 2), d = WW.islandR(t) + rr(4, 12);
    floaters.push({ x: Math.cos(t) * d, y: rr(-14, -4), z: Math.sin(t) * d, s: rr(0.8, 2.2) });
  }
  instanced(new THREE.ConeGeometry(0.06, 1, 4), roots, {});
  instanced(new THREE.SphereGeometry(1, 10, 6), fringe, {});
  instanced(new THREE.OctahedronGeometry(1, 0), crystals.map((c) => ({ ...c, c: c.c === '#5fe0d0' ? '#7ff0e0' : '#ff7a6a' })), { mat: new THREE.MeshBasicMaterial({ color: '#ffffff' }), colors: true });
  for (const f of floaters) {
    const g = new THREE.Group();
    g.add(at(mesh(new THREE.DodecahedronGeometry(1.2 * f.s, 0), toon('#6e5240')), 0, -0.4 * f.s, 0));
    g.add(at(mesh(new THREE.CylinderGeometry(1.0 * f.s, 1.1 * f.s, 0.3 * f.s, 9), toon('#6f8b49')), 0, 0.5 * f.s, 0));
    if (rnd() < 0.6) g.add(at(tree(pick(['pine', 'autumn', 'dead']), 0.5 * f.s), 0, 0.6 * f.s, 0));
    g.position.set(f.x, f.y, f.z);
    g.rotation.y = rr(0, 6);
    scene.add(g);
  }
}

/* far isles: each a small world of its own, so they read as places and not as shapes */
const isleSide = strataMat(-0.75, 1.35);
// The isles' trees and bushes come from the Blender flora set, drawn with the island's own; without the set, the isle
// keeps its hand-built trees and no more. Spots are in isle units (R), clear of what the isle's theme builds (CLEAR).
const ISLE_FLORA = {
  ruin: { trees: ['tree_pine', 'tree_spruce', 'tree_dead', 'tree_pine', 'tree_oak'], clear: [[-0.25, -0.1, 0.32], [0.35, 0.3, 0.3], [0.1, 0.5, 0.14]] },
  farm: { trees: ['tree_oak', 'tree_fruit', 'tree_maple', 'tree_birch', 'tree_fruit'], clear: [[-0.2, -0.15, 0.32], [0.3, 0.25, 0.46], [0.35, -0.45, 0.22], [0.05, 0.55, 0.12]] },
  shrine: { trees: ['tree_cherry', 'tree_maple', 'tree_cherry', 'tree_cypress'], clear: [[0, 0, 0.45]] },
  falls: { trees: ['tree_pine', 'tree_spruce', 'tree_birch', 'tree_willow', 'tree_spruce'], clear: [[0.25, 0.3, 0.33], [0.52, 0.52, 0.26]] },
};
const ISLE_BUSHES = ['bush_round', 'bush_round', 'bush_flower', 'bush_berry', 'bush_fern', 'bush_grass'];
function isleTree(g, kind, s, x, z) {
  if (KIT.flora) plantFlora(kind, s, g.position.x + x, g.position.z + z, g.position.y);
  else g.add(at(tree(FLORA_FALLBACK[kind], s), x, 0, z));
}
function isleFlora(g, R, theme, fixed) {
  if (!KIT.flora) return;
  const { trees, clear } = ISLE_FLORA[theme], s = R / 10;
  const taken = [...clear, ...fixed.map(([x, z]) => [x, z, 0.16])];
  const spot = (minK, maxK, r) => {
    for (let tries = 0; tries < 60; tries++) {
      const a = rr(0, PI * 2), k = rr(minK, maxK), x = Math.cos(a) * k, z = Math.sin(a) * k;
      if (taken.every(([cx, cz, cr]) => Math.hypot(x - cx, z - cz) > cr + r)) { taken.push([x, z, r]); return [x * R, z * R]; }
    }
    return null;
  };
  for (let i = 0; i < 7; i++) { const p = spot(0.3, 0.74, 0.12); if (p) plantFlora(trees[i % trees.length], rr(1.0, 1.3) * s, g.position.x + p[0], g.position.z + p[1], g.position.y); }
  for (let i = 0; i < 9; i++) { const p = spot(0.15, 0.78, 0.05); if (p) plantFlora(pick(ISLE_BUSHES), rr(0.75, 1.25) * s, g.position.x + p[0], g.position.z + p[1], g.position.y); }
}
function skyIsle(cx, cy, cz, R, theme, sd) {
  const g = new THREE.Group();
  g.position.set(cx, cy, cz);
  scene.add(g);
  const sh = new THREE.Shape();
  for (let i = 0; i <= 56; i++) {
    const t = i / 56 * PI * 2, r = R * (1 + 0.12 * Math.sin(3 * t + sd) + 0.07 * Math.sin(5 * t + 2 * sd));
    if (i === 0) sh.moveTo(Math.cos(t) * r, -Math.sin(t) * r); else sh.lineTo(Math.cos(t) * r, -Math.sin(t) * r);
  }
  const geo = new THREE.ExtrudeGeometry(sh, { depth: 1.4, bevelEnabled: true, bevelThickness: 0.35, bevelSize: 0.5, bevelSegments: 2, curveSegments: 3 });
  geo.rotateX(-PI / 2);
  g.add(at(new THREE.Mesh(geo, [toon('#ffffff', { map: grassTex }), isleSide]), 0, -1.75, 0));
  const under = mesh(new THREE.ConeGeometry(R * 0.95, R * 2.3, 12, 3), toon('#6e5240'), false);
  under.rotation.x = PI;
  under.position.y = -2.1 - R * 1.15;
  g.add(under);
  for (let i = 0; i < 14; i++) { const t = rr(0, PI * 2), k = rr(0.2, 0.9); g.add(at(rot(mesh(new THREE.DodecahedronGeometry(rr(0.8, 2.0) * (R / 10), 0), toon(pick(['#6e5240', '#5f4636', '#7a5c47']))), rr(0, 3), rr(0, 3), 0), Math.cos(t) * R * 0.95 * k, -2.1 - (1 - k) * R * 2.3, Math.sin(t) * R * 0.95 * k)); }
  for (let i = 0; i < 26; i++) { const t = rr(0, PI * 2), len = rr(0.6, 2.4); g.add(at(rot(mesh(new THREE.ConeGeometry(0.07, len, 4), toon('#4a3424')), PI, 0, 0), Math.cos(t) * R * 1.02, -0.6 - len / 2, Math.sin(t) * R * 1.02)); }
  const s = R / 10;
  if (theme === 'ruin') {
    const t = at(new THREE.Group(), -R * 0.25, 0, -R * 0.1);
    t.add(at(mesh(new THREE.CylinderGeometry(1.7 * s, 1.9 * s, 5.5 * s, 14), toon('#ffffff', { map: tiled(TEX.castleWall, 2.5, 1.6) })), 0, 2.75 * s, 0));
    for (let i = 0; i < 7; i++) { const a = i / 7 * PI * 2; t.add(at(mesh(new THREE.BoxGeometry(0.7 * s, rr(0.4, 1.6) * s, 0.5 * s), M.stone), Math.cos(a) * 1.6 * s, 5.6 * s, Math.sin(a) * 1.6 * s)); }
    t.add(at(mesh(new THREE.BoxGeometry(0.4 * s, 1.0 * s, 0.1), M.pane, false), 0, 2.6 * s, 1.85 * s));
    g.add(t);
    for (const sd2 of [-1, 1]) g.add(at(mesh(new THREE.BoxGeometry(0.7 * s, 3.2 * s, 0.7 * s), M.stone), R * 0.35 + sd2 * 1.3 * s, 1.6 * s, R * 0.3));
    g.add(at(mesh(new THREE.BoxGeometry(3.3 * s, 0.6 * s, 0.7 * s), M.stone), R * 0.35, 3.4 * s, R * 0.3));
    g.add(at(skullPole(2.4), R * 0.1, 0, R * 0.5));
    for (const [x, z, k] of [[0.5, -0.5, 'tree_pine'], [-0.6, 0.5, 'tree_maple'], [0.2, 0.6, 'tree_dead']]) isleTree(g, k, 1.2 * s, x * R, z * R);
    isleFlora(g, R, theme, [[0.5, -0.5], [-0.6, 0.5], [0.2, 0.6]]);
  } else if (theme === 'farm') {
    const h = at(new THREE.Group(), -R * 0.2, 0, -R * 0.15);
    h.add(at(mesh(wallUV(new THREE.BoxGeometry(3.6 * s, 2.2 * s, 2.8 * s), 2.2 * s, 1.3), M.plankWall), 0, 1.1 * s, 0));
    const roofGeo = new THREE.CylinderGeometry(2.1 * s, 2.1 * s, 4.0 * s, 3, 1);
    h.add(at(rot(mesh(roofGeo, toon('#ffffff', { map: TEX.roof })), 0, 0, PI / 2), 0, 2.2 * s + 0.9 * s, 0));
    h.add(at(mesh(new THREE.BoxGeometry(0.8 * s, 1.5 * s, 0.1), M.woodD), 0, 0.75 * s, 1.42 * s));
    h.add(at(mesh(new THREE.BoxGeometry(0.6 * s, 0.6 * s, 0.1), M.pane, false), 1.1 * s, 1.3 * s, 1.42 * s));
    g.add(h);
    const field = mesh(new THREE.PlaneGeometry(R * 0.8, R * 0.5), toon('#ffffff', { map: TEX.field }), false);
    field.rotation.x = -PI / 2;
    field.position.set(R * 0.3, 0.03, R * 0.25);
    g.add(field);
    const mill = at(new THREE.Group(), R * 0.35, 0, -R * 0.45);
    mill.add(at(mesh(new THREE.CylinderGeometry(0.8 * s, 1.2 * s, 4 * s, 12), toon('#e3d5b6')), 0, 2 * s, 0));
    mill.add(at(mesh(new THREE.ConeGeometry(1.2 * s, 1.4 * s, 12), toon('#ffffff', { map: TEX.roof })), 0, 4.7 * s, 0));
    const hub = at(new THREE.Group(), 0, 3.6 * s, 1.0 * s);
    for (let k = 0; k < 4; k++) { const arm = new THREE.Group(); arm.rotation.z = k * PI / 2; arm.add(at(mesh(new THREE.BoxGeometry(0.5 * s, 2.6 * s, 0.04), toon('#e3d5b6', { side: THREE.DoubleSide })), 0.3 * s, 1.5 * s, 0)); hub.add(arm); }
    mill.add(hub);
    SPINNERS.push({ o: hub, axis: 'z', v: 0.4 });
    g.add(mill);
    isleTree(g, 'tree_maple', 1.1 * s, -R * 0.55, R * 0.4);
    g.add(at(hay(0.5 * s), R * 0.05, 0, R * 0.55));
    isleFlora(g, R, theme, [[-0.55, 0.4]]);
  } else if (theme === 'shrine') {
    for (let i = 0; i < 6; i++) { const a = i / 6 * PI * 2; g.add(at(rot(mesh(new THREE.BoxGeometry(0.7 * s, rr(2, 3) * s, 0.5 * s), M.stone), 0, -a, rr(-0.1, 0.1)), Math.cos(a) * 3 * s, 1.2 * s, Math.sin(a) * 3 * s)); }
    g.add(totem(4 * s));
    for (const a of [0.8, 3.9]) g.add(at(brazier(0, 1.2 * s), Math.cos(a) * 1.8 * s, 0, Math.sin(a) * 1.8 * s));
    for (const [x, z] of [[0.6, 0.4], [-0.5, -0.5], [0.4, -0.6]]) isleTree(g, 'tree_maple', 1.1 * s, x * R, z * R);
    isleFlora(g, R, theme, [[0.6, 0.4], [-0.5, -0.5], [0.4, -0.6]]);
  } else if (theme === 'falls') {
    const fixed = [[-0.5, -0.3, 'tree_pine'], [-0.2, -0.6, 'tree_pine'], [0.4, -0.4, 'tree_oak'], [-0.6, 0.3, 'tree_maple']];
    for (const [x, z, k] of fixed) isleTree(g, k, 1.2 * s, x * R, z * R);
    isleFlora(g, R, theme, fixed);
    g.add(at(rot(mesh(new THREE.CircleGeometry(R * 0.28, 24), toon('#5c96b4', { emissive: '#2c5a72', emissiveIntensity: 0.35 }), false), -PI / 2, 0, 0), R * 0.25, 0.04, R * 0.3));
    const fall = new THREE.Mesh(new THREE.PlaneGeometry(1.8 * s, R * 3.2), new THREE.MeshBasicMaterial({ map: fallTexFar, color: '#acb5c8', transparent: true, opacity: 0.85, side: THREE.DoubleSide, depthWrite: false }));
    fall.position.set(R * 0.62, -R * 1.6, R * 0.62);
    fall.rotation.y = PI / 4;
    g.add(fall);
    const brook = mesh(new THREE.PlaneGeometry(1.2 * s, R * 0.55), toon('#6fa9c9'), false);
    brook.rotation.set(-PI / 2, 0, -PI / 4);
    brook.position.set(R * 0.45, 0.05, R * 0.45);
    g.add(brook);
  }
  return g;
}
const fallTexFar = tiled(TEX.water, 1, 4);
skyIsle(-150, 6, -105, 11, 'ruin', 0.4);
skyIsle(165, -4, -60, 13, 'farm', 1.7);
skyIsle(115, 20, 135, 9, 'shrine', 2.9);
skyIsle(-165, -14, 85, 12, 'falls', 4.1);

/* ================================================================ ground decals: soft-edged patches of dirt, sand and stone */
const decalMats = {};
function decalMat(kind) {
  if (decalMats[kind]) return decalMats[kind];
  const src = { dirt: TEX.dirt, sand: TEX.sand, plaza: TEX.plaza, field: TEX.field }[kind];
  const mask = canvasTex(256, 256, (g, W, H) => { const gr = g.createRadialGradient(W / 2, H / 2, W * 0.3, W / 2, H / 2, W / 2); gr.addColorStop(0, 'rgba(255,255,255,1)'); gr.addColorStop(1, 'rgba(255,255,255,0)'); g.fillStyle = gr; g.fillRect(0, 0, W, H); });
  mask.wrapS = mask.wrapT = THREE.ClampToEdgeWrapping;
  decalMats[kind] = { src, mask };
  return decalMats[kind];
}
let decalOrder = 0;
function patch(kind, x, z, rx, rz, ry = 0, y = 0.012, tile = 4) {
  const d = decalMat(kind);
  const map = tiled(d.src, rx * 2 / tile, rz * 2 / tile);
  const m = new THREE.Mesh(new THREE.PlaneGeometry(rx * 2, rz * 2), toon('#ffffff', { map, alphaMap: d.mask, transparent: true, depthWrite: false, polygonOffset: true, polygonOffsetFactor: -1, polygonOffsetUnits: -1 - decalOrder }));
  m.rotation.set(-PI / 2, 0, ry);
  m.position.set(x, y, z);
  m.receiveShadow = true;
  m.renderOrder = -10 + decalOrder++ * 0.01;
  scene.add(m);
  return m;
}

/* ================================================================ roads: ribbons along the sampled curves */
function ribbon(line, w, closed, y) {
  const pts = closed ? [...line, line[0]] : line;
  const pos = [], uv = [], idx = [];
  let acc = 0;
  for (let i = 0; i < pts.length; i++) {
    const a = pts[Math.max(0, i - 1)], b = pts[Math.min(pts.length - 1, i + 1)];
    let tx = b[0] - a[0], tz = b[1] - a[1];
    if (closed && (i === 0 || i === pts.length - 1)) { const p = line[line.length - 1], q = line[1]; tx = q[0] - p[0]; tz = q[1] - p[1]; }
    const l = Math.hypot(tx, tz) || 1;
    const nx = -tz / l, nz = tx / l;
    if (i > 0) acc += Math.hypot(pts[i][0] - pts[i - 1][0], pts[i][1] - pts[i - 1][1]);
    pos.push(pts[i][0] + nx * w / 2, y, pts[i][1] + nz * w / 2, pts[i][0] - nx * w / 2, y, pts[i][1] - nz * w / 2);
    uv.push(0, acc, 1, acc);
    if (i > 0) { const k = i * 2; idx.push(k - 2, k, k - 1, k - 1, k, k + 1); }
  }
  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
  geo.setAttribute('uv', new THREE.Float32BufferAttribute(uv, 2));
  geo.setIndex(idx);
  geo.computeVertexNormals();
  return geo;
}
// Roads share one world-space texture per kind, so where two roads overlap the stones line up and
// there is no seam. Edges fade through vertex alpha; a side road widens and fades out where it joins.
const ROAD_KIND = { cobble: [TEX.tCobble, 4, 0.1, 'tCobble'], flag: [TEX.tFlag, 4, 0.1, 'tFlag'], dirt: [TEX.tDirt, 6, 0.45, 'tDirt'] };
const roadMats = {};
const smooth = (t) => { t = Math.max(0, Math.min(1, t)); return t * t * (3 - 2 * t); };
// Where a paved road meets a paved road of another kind (flagstones into the cobbled ring), it stops at the other's
// edge on a row of edge stones instead of fading across it. Same kinds, and dirt, still blend (shared world texture).
const THRESHOLDS = [];
const PAVED = (k) => k === 'cobble' || k === 'flag';
function nearestRoad(P, self) {
  let best = null, bd = 1e9;
  for (const o of ROADS) {
    if (o === self || o.kind === 'stones') continue;
    const d = distToLine(P[0], P[1], o.closed ? [...o.line, o.line[0]] : o.line) - o.w / 2;
    if (d < bd) { bd = d; best = o; }
  }
  return bd < 0.6 ? best : null;
}
function trimToEdge(L, fromEnd, other) {
  const OL = other.closed ? [...other.line, other.line[0]] : other.line, edge = other.w / 2 + 0.02;
  const pts = fromEnd ? [...L].reverse() : [...L];
  let k = 0;
  while (k < pts.length - 2 && distToLine(pts[k][0], pts[k][1], OL) < edge) k++;
  if (k === 0) return null;
  let a = pts[k - 1], b = pts[k];
  for (let it = 0; it < 12; it++) { const m = [(a[0] + b[0]) / 2, (a[1] + b[1]) / 2]; if (distToLine(m[0], m[1], OL) < edge) a = m; else b = m; }
  const cut = [(a[0] + b[0]) / 2, (a[1] + b[1]) / 2];
  const out = [cut, ...pts.slice(k)];
  return fromEnd ? out.reverse() : out;
}
function roadMesh(rd, i) {
  let L = rd.closed ? [...rd.line, rd.line[0]] : rd.line;
  const joins = rd.closed ? [false, false] : [!rd.refs[0], !rd.refs[rd.refs.length - 1]];
  if (!rd.closed && PAVED(rd.kind)) for (const e of [0, 1]) {
    if (!joins[e]) continue;
    const P = e ? L[L.length - 1] : L[0], other = nearestRoad(P, rd);
    if (!other || other.kind === rd.kind || !PAVED(other.kind)) continue;
    const T = trimToEdge(L, e === 1, other);
    if (!T) continue;
    L = T;
    joins[e] = false;
    const q = e ? L[L.length - 1] : L[0], r2 = e ? L[L.length - 2] : L[1], l = Math.hypot(q[0] - r2[0], q[1] - r2[1]) || 1;
    THRESHOLDS.push({ x: q[0], z: q[1], tx: (q[0] - r2[0]) / l, tz: (q[1] - r2[1]) / l, w: rd.w, kind: rd.kind });
  }
  const n = L.length;
  const [tex, tile, fw, key] = ROAD_KIND[rd.kind];
  const acc = [0];
  for (let k = 1; k < n; k++) acc.push(acc[k - 1] + Math.hypot(L[k][0] - L[k - 1][0], L[k][1] - L[k - 1][1]));
  const total = acc[n - 1];
  const y = 0.02 + i * 0.0015;
  const pos = [], uv = [], col = [], idx = [];
  for (let k = 0; k < n; k++) {
    const a = L[Math.max(0, k - 1)], b = L[Math.min(n - 1, k + 1)];
    let tx = b[0] - a[0], tz = b[1] - a[1];
    if (rd.closed && (k === 0 || k === n - 1)) { const p = L[n - 2], q = L[1]; tx = q[0] - p[0]; tz = q[1] - p[1]; }
    const l = Math.hypot(tx, tz) || 1, nx = -tz / l, nz = tx / l;
    let wMul = 1, al = 1;
    if (!rd.closed) {
      for (const e of [0, 1]) {
        const d = e ? total - acc[k] : acc[k];
        if (joins[e]) { wMul = Math.max(wMul, 1 + 0.5 * (1 - smooth(d / 2.4))); al = Math.min(al, smooth(d / 2.2)); }
      }
    }
    const hw = rd.w / 2 * wMul;
    const offs = [-(hw + fw), -(hw - fw), hw - fw, hw + fw], alphas = [0, al, al, 0];
    for (let j = 0; j < 4; j++) {
      const x = L[k][0] + nx * offs[j], z = L[k][1] + nz * offs[j];
      pos.push(x, y, z); uv.push(x / tile, z / tile); col.push(1, 1, 1, alphas[j]);
    }
    if (k > 0) for (let j = 0; j < 3; j++) { const A = (k - 1) * 4 + j, B = A + 1, C = k * 4 + j, D = C + 1; idx.push(B, D, A, A, D, C); }
  }
  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
  geo.setAttribute('uv', new THREE.Float32BufferAttribute(uv, 2));
  geo.setAttribute('color', new THREE.Float32BufferAttribute(col, 4));
  geo.setIndex(idx);
  geo.computeVertexNormals();
  if (!roadMats[rd.kind]) roadMats[rd.kind] = toon('#ffffff', { map: tex, normalMap: nrm(key, rd.kind === 'dirt' ? 1.0 : 1.8), vertexColors: true, transparent: true, depthWrite: false, polygonOffset: true, polygonOffsetFactor: -2, polygonOffsetUnits: -4 });
  const m = new THREE.Mesh(geo, roadMats[rd.kind]);
  m.receiveShadow = true;
  m.renderOrder = -5 + i * 0.01;
  scene.add(m);
}
// where a path of stepping stones meets the stream it stops, and a footbridge carries it over (WW.crossings)
function distToLine(x, z, P) {
  let best = 1e9;
  for (let i = 0; i < P.length - 1; i++) {
    const [ax, az] = P[i], [bx, bz] = P[i + 1], dx = bx - ax, dz = bz - az, l2 = dx * dx + dz * dz || 1;
    const t = Math.max(0, Math.min(1, ((x - ax) * dx + (z - az) * dz) / l2));
    best = Math.min(best, Math.hypot(x - ax - dx * t, z - az - dz * t));
  }
  return best;
}
WW.crossings = [];
function splitAtWater(line) {
  const n = line.length, wet = line.map(([x, z]) => distToLine(x, z, WW.brookLine) < 1.35);
  if (!wet.some(Boolean)) return [{ pts: line, closed: true }];
  let start = wet.findIndex((w, i) => !w && wet[(i - 1 + n) % n]);
  const segs = [];
  let cur = [];
  for (let k = 0; k <= n; k++) {
    const i = (start + k) % n;
    if (!wet[i] && k < n) { cur.push(line[i]); continue; }
    if (cur.length > 1) segs.push({ pts: cur, closed: false });
    if (k < n && wet[i] && cur.length) {
      // a wet run begins: find where it ends and bridge from the last dry stone to the next
      let j = k;
      while (j < n && wet[(start + j) % n]) j++;
      const a = cur[cur.length - 1], b = line[(start + j) % n];
      const dx = b[0] - a[0], dz = b[1] - a[1], len = Math.hypot(dx, dz);
      WW.crossings.push({ x: (a[0] + b[0]) / 2, z: (a[1] + b[1]) / 2, ang: Math.atan2(-dz, dx), len });
    }
    cur = [];
  }
  return segs;
}
ROADS.forEach((rd, i) => {
  if (rd.kind !== 'stones') { roadMesh(rd, i); return; }
  const map = TEX.roadStones.clone(); map.wrapS = THREE.ClampToEdgeWrapping; map.wrapT = THREE.RepeatWrapping; map.repeat.set(1, 1 / 1.3); map.needsUpdate = true;
  const mat = toon('#ffffff', { map, transparent: true, depthWrite: false, polygonOffset: true, polygonOffsetFactor: -2, polygonOffsetUnits: -6 });
  for (const sgm of splitAtWater(rd.line)) {
    const m = new THREE.Mesh(ribbon(sgm.pts, rd.w, sgm.closed, 0.03), mat);
    m.receiveShadow = true;
    scene.add(m);
  }
});

/* kerbs along the paved roads, broken wherever another road joins; ruts in the dirt roads; grass along the edges */
{
  const segD = (px, pz, ax, az, bx, bz) => { const dx = bx - ax, dz = bz - az, l2 = dx * dx + dz * dz || 1, t = Math.max(0, Math.min(1, ((px - ax) * dx + (pz - az) * dz) / l2)); return Math.hypot(px - ax - dx * t, pz - az - dz * t); };
  const onOther = (x, z, self, pad) => {
    for (const o of ROADS) {
      if (o === self) continue;
      const P = o.closed ? [...o.line, o.line[0]] : o.line, lim = o.w / 2 + pad;
      for (let i = 0; i < P.length - 1; i++) {
        if (Math.abs(P[i][0] - x) > lim + 1 || Math.abs(P[i][1] - z) > lim + 1) continue;
        if (segD(x, z, P[i][0], P[i][1], P[i + 1][0], P[i + 1][1]) < lim) return true;
      }
    }
    return false;
  };
  const FORGE_SPOKES = [1.5708, -1.6284, -0.7646, 0.1159, -3.0065, 2.36];
  const inPlace = (x, z) => {
    if (KIT.forge) { const d = Math.hypot(x, z), a = Math.atan2(z, x); if (d > 7.4 && d < 9.0 && FORGE_SPOKES.some((s) => { let q = Math.abs(a - s) % (2 * PI); q = Math.min(q, 2 * PI - q); return q * d < 1.45; })) return true; }
    for (const r of ROOMS) {
      if (r.kind === 'house') { const [lx, lz] = WW.toLocal(r, x, z); if (Math.abs(lx) < r.w / 2 + 0.9 && Math.abs(lz) < r.d / 2 + 0.9) return true; if (r.deck && lx > r.deck[0] - 0.5 && lx < r.deck[1] + 0.5 && lz > r.deck[2] && lz < r.deck[3] + 0.5) return true; }
      else if (Math.hypot(x - r.x, z - r.z) < r.r + 0.6) return true;
    }
    for (const dc of WW.DECOR) {
      if (dc.kind === 'hut') { const [lx, lz] = WW.toLocal(dc, x, z); if (Math.abs(lx) < dc.w / 2 + 0.9 && Math.abs(lz) < dc.d / 2 + 0.9) return true; }
      else if (Math.hypot(x - dc.x, z - dc.z) < (dc.r || 2) + 0.4) return true;
    }
    return Math.hypot(x, z) > WW.islandR(Math.atan2(z, x)) - 1.2;
  };
  const kerbs = [], tufts = [], rutMat = toon('#5a4030', { transparent: true, opacity: 0.32, depthWrite: false, polygonOffset: true, polygonOffsetFactor: -3, polygonOffsetUnits: -8 });
  for (const rd of ROADS) {
    if (rd.kind === 'stones') continue;
    const L = rd.closed ? [...rd.line, rd.line[0]] : rd.line, paved = rd.kind !== 'dirt';
    const side = (k) => { const a = L[Math.max(0, k - 1)], b = L[Math.min(L.length - 1, k + 1)], l = Math.hypot(b[0] - a[0], b[1] - a[1]) || 1; return [-(b[1] - a[1]) / l, (b[0] - a[0]) / l]; };
    for (let k = 0; k < L.length; k++) {
      const [nx, nz] = side(k), ry = Math.atan2(nx, nz) + PI / 2;
      for (const sd of [-1, 1]) {
        const off = rd.w / 2 + 0.07;
        const x = L[k][0] + nx * sd * off, z = L[k][1] + nz * sd * off;
        if (inPlace(x, z) || onOther(x, z, rd, 0.25)) continue;
        if (paved) kerbs.push({ x, y: 0.04, z, sx: 0.2, sy: 0.13, sz: rr(0.4, 0.47), ry: ry + rr(-0.04, 0.04), c: rd.kind === 'flag' ? pick(['#8a7a70', '#7e6f66', '#94857a']) : pick(['#9a8f86', '#8a8078', '#a39a90']) });
        if (k % 3 === 0 && rnd() < 0.7) {
          const o2 = off + (paved ? 0.25 : 0.1) + rr(0, 0.35), tx = L[k][0] + nx * sd * o2, tz = L[k][1] + nz * sd * o2;
          if (!inPlace(tx, tz) && !onOther(tx, tz, rd, 0.2)) { const c = pick(['#5f7f42', '#6a8a48', '#55753c', '#7a9450']); for (let q = 0; q < 5; q++) tufts.push({ x: tx + rr(-0.15, 0.15), y: 0.11, z: tz + rr(-0.15, 0.15), rx: rr(-0.4, 0.4), rz: rr(-0.4, 0.4), sy: rr(0.7, 1.3), c }); }
        }
      }
    }
    // two wheel ruts down the middle of a dirt road
    if (!paved && rd.w > 1.5) for (const sd of [-1, 1]) {
      const pts = L.map((p, k) => { const [nx, nz] = side(k); return [p[0] + nx * sd * 0.45, p[1] + nz * sd * 0.45]; });
      const m = new THREE.Mesh(ribbon(pts, 0.18, false, 0.035), rutMat);
      m.receiveShadow = true;
      m.renderOrder = -4;
      scene.add(m);
    }
  }
  for (const t of THRESHOLDS) {
    const nx = -t.tz, nz = t.tx, n = Math.max(2, Math.round((t.w + 0.3) / 0.42));
    for (let k = 0; k < n; k++) {
      const u = -((t.w + 0.3) / 2) + (k + 0.5) * (t.w + 0.3) / n;
      kerbs.push({ x: t.x + nx * u - t.tx * 0.1, y: 0.045, z: t.z + nz * u - t.tz * 0.1, sx: 0.4, sy: 0.12, sz: 0.24, ry: Math.atan2(nx, nz) + PI / 2 + rr(-0.04, 0.04), c: pick(['#8a7a70', '#7e6f66', '#94857a']) });
    }
  }
  instanced(new RoundedBoxGeometry(1, 1, 1, 1, 0.2), kerbs, { cast: false });
  const tm = instanced(new THREE.ConeGeometry(0.06, 0.24, 4), tufts, {});
  if (tm) tm.userData.noLine = true;
}

/* ================================================================ the castle: curtain wall, towers, gatehouse, water gate */
const CW = WW.CASTLE;
const castleMat = M.castle;
const castleTowerMat = relief('castleWall', 5, 2.2, 2);
const merlons = [];
const wallBanners = [];
function wallRun(ax, az, bx, bz) {
  const len = Math.hypot(bx - ax, bz - az);
  if (len < 0.5) return;
  const g = new THREE.Group();
  g.position.set((ax + bx) / 2, 0, (az + bz) / 2);
  g.rotation.y = -Math.atan2(bz - az, bx - ax);
  const body = mesh(planarUV(new THREE.BoxGeometry(len, CW.h, CW.thick), 3.2), castleMat);
  body.position.y = CW.h / 2;
  g.add(body);
  g.add(at(mesh(planarUV(new THREE.BoxGeometry(len, 0.3, CW.thick + 0.3), 3.2), M.stone), 0, CW.h + 0.15, 0));
  scene.add(g);
  g.updateMatrixWorld(true);
  const n = Math.floor(len / 1.1);
  for (let i = 0; i < n; i++) {
    const t = -len / 2 + (i + 0.5) * len / n;
    for (const side of [-1, 1]) {
      _p.set(t, CW.h + 0.65, side * (CW.thick / 2 + 0.05)).applyMatrix4(g.matrixWorld);
      merlons.push({ x: _p.x, y: _p.y, z: _p.z, sx: 0.62, sy: 0.75, sz: 0.38, ry: g.rotation.y, c: pick(['#7a6f68', '#71665f', '#827770']) });
    }
  }
  return { g, len };
}
const outward = (i) => { const [ax, az] = CW.pts[i], [bx, bz] = CW.pts[(i + 1) % CW.pts.length]; const l = Math.hypot(bx - ax, bz - az); return [(bz - az) / l, -(bx - ax) / l]; };
if (!CASTLE_KIT) CW.pts.forEach(([ax, az], i) => {
  const [bx, bz] = CW.pts[(i + 1) % CW.pts.length];
  const gap = CW.gaps.find((gp) => gp.seg === i);
  const len = Math.hypot(bx - ax, bz - az);
  if (!gap) { const r = wallRun(ax, az, bx, bz); if (len > 14) wallBanners.push({ i, t: 0.5 }); }
  else {
    const h = gap.w / 2 / len;
    wallRun(ax, az, ax + (bx - ax) * (gap.t - h), az + (bz - az) * (gap.t - h));
    wallRun(ax + (bx - ax) * (gap.t + h), az + (bz - az) * (gap.t + h), bx, bz);
  }
});
// towers at every corner, some with red cone roofs
if (!CASTLE_KIT) CW.pts.forEach(([x, z], i) => {
  const t = new THREE.Group();
  const h = i % 3 === 0 ? 10.5 : 8.6;
  t.add(at(mesh(new THREE.CylinderGeometry(3.0, 3.3, h, 24), castleTowerMat), 0, h / 2, 0));
  t.add(at(mesh(new THREE.CylinderGeometry(3.45, 3.2, 0.5, 24), M.stone), 0, h + 0.2, 0));
  for (let k = 0; k < 12; k++) { const a = k / 12 * PI * 2; merlons.push({ x: x + Math.cos(a) * 3.2, y: h + 0.85, z: z + Math.sin(a) * 3.2, sx: 0.7, sy: 0.8, sz: 0.45, ry: -a + PI / 2, c: '#7a6f68' }); }
  if (i % 2 === 0) {
    const roof = mesh(new THREE.ConeGeometry(3.9, 4.6, 24), toon('#ffffff', { map: tiled(TEX.roof, 6, 2) }));
    t.add(at(roof, 0, h + 2.6, 0));
    t.add(at(mesh(new THREE.CylinderGeometry(0.05, 0.05, 2.2, 6), M.iron), 0, h + 5.6, 0));
    const flag = at(new THREE.Group(), 0, h + 6.2, 0);
    flag.add(at(mesh(new THREE.BoxGeometry(1.3, 0.7, 0.03), M.red), 0.65, 0, 0));
    t.add(flag);
    FLAGS.push(flag);
  } else {
    const sk = skull(0.55); t.add(at(sk, 0, h + 1.6, 0));
    t.add(at(mesh(new THREE.CylinderGeometry(0.08, 0.1, 1.2, 6), M.wood), 0, h + 0.9, 0));
  }
  for (let k = 0; k < 4; k++) { const a = k / 4 * PI * 2 + i, wy = 2.5 + (k % 2) * 3, wr = 3.3 - 0.3 * wy / h + 0.04; const w = at(mesh(new THREE.BoxGeometry(0.3, 0.9, 0.12), glow('#ffb35e', 1.1), false), Math.cos(a) * wr, wy, Math.sin(a) * wr); w.rotation.y = -a + PI / 2; t.add(w); }
  t.position.set(x, 0, z);
  scene.add(t);
});
