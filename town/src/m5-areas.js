
/* ================================================================ The Forge: the heart of the town. It burns as hard as the team works. */
const mouthMat = new THREE.MeshStandardMaterial({ color: 0x000000, emissive: '#ff7a24', emissiveIntensity: 1.4, roughness: 1 });
const coreMat = new THREE.MeshStandardMaterial({ color: 0x000000, emissive: '#ffd890', emissiveIntensity: 2.0, roughness: 1 });
let fireLight, chimneyTop, emberBase;
{
  const r = ROOM.forge;
  const F = new THREE.Group();
  F.position.set(r.x, 0, r.z);
  scene.add(F);
  if (KIT.forge) scene.add(KIT.forge);   // plaza, furnace body, chimney, bands, horns, skull, spikes, mouth frame and hood
  else {
    F.add(at(mesh(planarUV(new THREE.CylinderGeometry(7.7, 7.9, 0.16, 56), 2.4), toon('#ffffff', { map: TEX.plaza })), 0, 0.08, 0));
    F.add(rot(at(mesh(new THREE.TorusGeometry(7.78, 0.13, 6, 72), M.stone), 0, 0.14, 0), PI / 2, 0, 0));
  }
  const fz = -0.6;
  const furnace = new THREE.Group();
  furnace.position.set(0, 0.16, fz);
  F.add(furnace);
  if (!KIT.forge) {
    furnace.add(at(mesh(planarUV(new THREE.BoxGeometry(4.4, 3.2, 3.4), 1.4), M.stone), 0, 1.6, 0));
    furnace.add(at(mesh(new THREE.BoxGeometry(4.9, 0.36, 3.9), M.iron), 0, 3.3, 0));
    furnace.add(at(mesh(planarUV(new THREE.BoxGeometry(1.9, 7.2, 1.9), 1.4), M.stone), 0, 6.9, -0.5));
    for (const y of [4.6, 7.0, 9.4]) furnace.add(at(mesh(new THREE.BoxGeometry(2.05, 0.22, 2.05), M.iron), 0, y, -0.5));
    furnace.add(at(mesh(new THREE.BoxGeometry(2.3, 0.3, 2.3), M.iron), 0, 10.55, -0.5));
    furnace.add(at(rot(horns(2.0), 0, 0, 0), 0, 10.9, -0.5));
    furnace.add(at(skull(0.7), 0, 7.9, 0.5));
    for (const sd of [-1, 1]) spike(furnace, new THREE.Vector3(sd * 2.3, 3.5, 1.8), new THREE.Vector3(sd * 0.4, 1, 0.3), 0.7, 0.12, M.boneD, 0, 6);
    furnace.add(at(mesh(new THREE.TorusGeometry(1.1, 0.16, 8, 22, PI), M.iron), 0, 1.05, 1.71));
  }
  // the mouth: its glow follows how hard the team works
  furnace.add(at(mesh(new THREE.CircleGeometry(1.0, 24, 0, PI), mouthMat, false), 0, 1.05, 1.705));
  furnace.add(at(mesh(new THREE.PlaneGeometry(2.0, 1.05), mouthMat, false), 0, 0.53, 1.705));
  furnace.add(at(mesh(new THREE.PlaneGeometry(1.4, 0.45), coreMat, false), 0, 0.32, 1.71));
  if (!KIT.forge) furnace.add(rot(at(mesh(new THREE.BoxGeometry(2.6, 0.12, 1.0), M.iron), 0, 2.45, 2.0), -0.5, 0, 0));
  // bellows on the side
  {
    const b = new THREE.Group();
    for (let i = 0; i < 4; i++) b.add(at(mesh(new THREE.BoxGeometry(0.9 - i * 0.08, 0.14, 1.2 - i * 0.1), i % 2 ? M.redD : toon('#5a3a2a')), 0, 0.5 + i * 0.16, 0));
    b.add(at(mesh(new THREE.BoxGeometry(1.0, 0.08, 1.3), M.wood), 0, 0.45, 0));
    b.add(rot(at(mesh(new THREE.CylinderGeometry(0.06, 0.1, 1.2, 8), M.iron), 0.7, 0.8, 0), 0, 0, PI / 2));
    furnace.add(at(b, -2.9, 0, 0.2));
  }
  fireLight = new THREE.PointLight('#ff8a3a', 14, 16, 2);
  fireLight.position.set(0, 1.4, 2.8);
  furnace.add(fireLight);
  furnace.updateMatrixWorld(true);
  chimneyTop = furnace.localToWorld(new THREE.Vector3(0, 10.9, -0.5));
  emberBase = furnace.localToWorld(new THREE.Vector3(0, 1.0, 2.0));
  put(F, anvil(), -2.9, 2.9, WW.face(-2.9, 2.9, -3.9, 3.9) + PI / 2, 0.16);
  {
    const tr0 = new THREE.Group();
    tr0.add(at(mesh(new THREE.BoxGeometry(1.5, 0.55, 0.7), M.wood), 0, 0.27, 0));
    tr0.add(rot(at(mesh(new THREE.PlaneGeometry(1.35, 0.55), toon('#3f6f8a', { emissive: '#28485a', emissiveIntensity: 0.4 }), false), 0, 0.52, 0), -PI / 2, 0, 0));
    put(F, tr0, 3.5, 3.0, -0.5, 0.16);
  }
  const coal = [];
  for (let i = 0; i < 40; i++) coal.push({ x: 3.9 + rr(-0.8, 0.8), y: 0.16 + rr(0.05, 0.4), z: -2.4 + rr(-0.7, 0.7), sx: rr(0.14, 0.22), sy: rr(0.1, 0.18), sz: rr(0.14, 0.22), ry: rr(0, 3), c: pick(['#2e2a2c', '#3a3538', '#262224']) });
  instanced(new THREE.DodecahedronGeometry(1, 0), coal, {});
  for (let i = 0; i < 6; i++) F.add(at(mesh(new THREE.SphereGeometry(0.05, 6, 4), glow('#ff6a20', 2.4), false), 3.9 + rr(-0.5, 0.5), 0.3 + rr(0, 0.25), -2.4 + rr(-0.4, 0.4)));
  put(F, weaponRack(4), -5.3, -2.0, Math.atan2(5.3, 2.0), 0.16);
  put(F, weaponRack(4), 5.7, 0.9, -PI / 2, 0.16);
  {
    const gs = new THREE.Group();
    gs.add(at(mesh(new THREE.BoxGeometry(0.9, 0.5, 0.5), M.wood), 0, 0.25, 0));
    const wheel = at(rot(mesh(new THREE.CylinderGeometry(0.45, 0.45, 0.16, 18), toon('#8a8078')), 0, 0, PI / 2), 0, 0.8, 0);
    gs.add(wheel);
    put(F, gs, -4.8, 0.2, 0.4, 0.16);
  }
  for (const a of [0.4, 2.0, 3.9, 5.2]) put(F, brazier(0), Math.cos(a) * 6.9, Math.sin(a) * 6.9, 0, 0.16);
  put(F, poleBanner(4.0), -1.9, -3.8, 0, 0.16);
  put(F, poleBanner(4.0), 1.9, -3.8, 0, 0.16);
  put(F, skullPole(2.6), 6.0, -3.6, 0, 0.16);
  put(F, barrel(), -6.0, 2.0, 0, 0.16);
}

/* ================================================================ Courtyard by the gate */
{
  const r = ROOM.court;
  const C = new THREE.Group();
  C.position.set(r.x, 0, r.z);
  scene.add(C);
  put(C, well(), -5.8, 2.0);
  put(C, bench(1.9, true), -5.2, -4.0, 0);
  put(C, stall(), 6.2, 1.2, -PI / 2);
  {
    const nb = new THREE.Group();
    for (const sd of [-1, 1]) nb.add(at(mesh(new THREE.BoxGeometry(0.12, 2.2, 0.12), M.woodD), sd * 0.8, 1.1, 0));
    nb.add(at(mesh(new THREE.BoxGeometry(1.8, 1.1, 0.08), M.wood), 0, 1.55, 0));
    for (let i = 0; i < 6; i++) nb.add(at(rot(mesh(new THREE.PlaneGeometry(0.34, 0.42), toon(pick(['#e6d9bc', '#d8c8a0', '#efe4cc'])), false), 0, 0, rr(-0.15, 0.15)), -0.6 + (i % 3) * 0.6, 1.8 - Math.floor(i / 3) * 0.5, 0.05));
    nb.add(rot(at(mesh(new THREE.BoxGeometry(2.1, 0.08, 0.4), M.red), 0, 2.2, 0.08), 0.4, 0, 0));
    put(C, nb, 5.6, -5.4, -PI / 2);
  }
  put(C, lampPost(6), -5.8, -1.0);
  put(C, barrel(), 8.0, -0.6); put(C, crate(0.55), 3.8, 3.4, 0.3); put(C, sack(), 4.4, 3.0);
  put(C, skullPole(2.4), -7.8, 6.0);
  {
    const tr0 = new THREE.Group();
    tr0.add(at(mesh(new THREE.BoxGeometry(1.6, 0.5, 0.6), M.wood), 0, 0.25, 0));
    tr0.add(rot(at(mesh(new THREE.PlaneGeometry(1.45, 0.45), toon('#3f6f8a'), false), 0, 0.47, 0), -PI / 2, 0, 0));
    put(C, tr0, -7.6, 3.6, PI / 2);
  }
  patch('dirt', r.x - 4, r.z + 0.5, 4.4, 5.6, 0, 0.013);
}

/* ================================================================ Training yard: a sand ring behind sharpened logs */
{
  const r = ROOM.yard;
  const Y = new THREE.Group();
  Y.position.set(r.x, 0, r.z);
  scene.add(Y);
  patch('sand', r.x, r.z, r.r + 0.6, r.r + 0.6, 0, 0.014, 5);
  const logs = [], tips = [];
  const n = KIT.yard ? 0 : Math.floor(2 * PI * r.r / 0.42);
  if (KIT.yard) Y.add(KIT.yard);   // the palisade, its rope bands and the bone gate
  for (let i = 0; i < n; i++) {
    const a = i / n * 2 * PI - PI;
    let d = Math.abs(a - r.gate); d = Math.min(d, 2 * PI - d);
    if (d < 0.2) continue;
    const h = rr(2.0, 2.7), x = r.x + Math.cos(a) * r.r, z = r.z + Math.sin(a) * r.r;
    logs.push({ x, y: h / 2, z, sy: h, rx: Math.sin(a) * 0.06, rz: -Math.cos(a) * 0.06, c: pick(['#6e4a32', '#5f3f2a', '#7a5338']) });
    tips.push({ x: x + Math.cos(a) * 0.08, y: h + 0.18, z: z + Math.sin(a) * 0.08, c: '#c8b48c' });
  }
  instanced(new THREE.CylinderGeometry(0.18, 0.2, 1, 8), logs, { cast: true });
  instanced(new THREE.ConeGeometry(0.18, 0.4, 8), tips, {});
  // the bone arch over the gate
  {
    const ga = new THREE.Group();
    const gx = Math.cos(r.gate), gz = Math.sin(r.gate);
    ga.position.set(gx * r.r, 0, gz * r.r);
    ga.rotation.y = Math.atan2(gx, gz);
    if (!KIT.yard) {
      for (const sd of [-1, 1]) ga.add(at(mesh(new THREE.CylinderGeometry(0.24, 0.28, 2.6, 8), M.woodD), sd * 1.55, 1.3, 0));
      for (const z of [-0.35, 0.35]) ga.add(at(mesh(new THREE.TorusGeometry(1.5, 0.14, 8, 20, PI), M.bone), 0, 2.2, z));
      ga.add(at(skull(0.55), 0, 3.85, 0.2));
      ga.add(at(horns(1.4), 0, 3.95, 0.2));
    }
    for (const sd of [-1, 1]) ga.add(at(torch(), sd * 1.55, 2.0, 0.24));
    Y.add(ga);
    put(Y, skullPole(2.6), gx * (r.r + 1.6) - gz * 2.2, gz * (r.r + 1.6) + gx * 2.2);
    put(Y, skullPole(2.2), gx * (r.r + 1.6) + gz * 2.2, gz * (r.r + 1.6) - gx * 2.2);
  }
  put(Y, dummy(), -3.2, 2.1, PI);
  put(Y, dummy(), 1.6, 3.2, PI);
  put(Y, target(), 4.4, 3.6, Math.atan2(-4.4, -3.6));
  put(Y, weaponRack(4), -5.4, -2.6, Math.atan2(5.4, 2.6));
  put(Y, hay(), -5.6, 3.8, 0.4); put(Y, hay(), -4.8, 4.7, 1.2);
  put(Y, rot(hay(0.36), 0, 0, 0), -5.1, 4.2, 0.8).position.y = 0.72;
  for (const a of [2.0, 3.4, 4.6]) put(Y, poleBanner(3.4), Math.cos(a) * (r.r - 0.7), Math.sin(a) * (r.r - 0.7), Math.atan2(-Math.cos(a), -Math.sin(a)));
  put(Y, bench(1.8, false), 3.0, -4.6, Math.atan2(-3.0, 4.6));
  put(Y, barrel(), -0.6, -5.8);
  put(Y, brazier(0, 0.9), Math.cos(r.gate) * (r.r - 1.2) - Math.sin(r.gate) * 1.8, Math.sin(r.gate) * (r.r - 1.2) + Math.cos(r.gate) * 1.8);
}

/* ================================================================ the garden water: the pond and the stream are one body of water.
   One ripple in world space, so the pattern runs straight across the join; colour by depth, deep in the middle of the pond,
   shallow at its rim and all down the stream; the stream mouth flares out to meet the pond's rim exactly. */
const POND = { x: -30, z: -20, r: 2.6, mouthA: 0 };
const waterTex = TEX.ripple;
waterTex.wrapS = waterTex.wrapT = THREE.RepeatWrapping;
const WATER_DEEP = new THREE.Color('#1f5f8c'), WATER_SHALLOW = new THREE.Color('#6fb6d2'), WATER_BANK = new THREE.Color('#a6d8e6');
// water takes no light, so it carries the evening itself: a dusky tint over its colours (the falls' too)
const WATER_DUSK = '#bdb3c4';
const waterMat = (lift) => new THREE.MeshBasicMaterial({ map: waterTex, color: WATER_DUSK, vertexColors: true, side: THREE.DoubleSide, polygonOffset: true, polygonOffsetFactor: -1 - lift, polygonOffsetUnits: -4 - lift * 4 });
const _wc = new THREE.Color();
function waterColour(x, z, edge) {
  const d = Math.hypot(x - POND.x, z - POND.z);
  const deep = smooth(1 - d / POND.r);
  _wc.copy(WATER_SHALLOW).lerp(WATER_DEEP, deep * 0.95);
  if (edge) _wc.lerp(WATER_BANK, edge * smooth((d - POND.r) / 1.2) * 0.45);
  return [_wc.r * 1.27, _wc.g * 1.27, _wc.b * 1.27];   // the ripple's grey base is 0.77
}
const WATER_UV = 2.2;
{
  // the pond: rings round a centre, so the colour deepens smoothly
  const NR = 5, NS = 72, Y = 0.045;
  const pos = [], col = [], uv = [], idx = [];
  const put = (x, z) => { pos.push(x, Y, z); col.push(...waterColour(x, z, 0)); uv.push(x / WATER_UV, z / WATER_UV); };
  put(POND.x, POND.z);
  for (let i = 1; i <= NR; i++) for (let k = 0; k < NS; k++) { const a = k / NS * 2 * PI, rr0 = POND.r * i / NR; put(POND.x + Math.cos(a) * rr0, POND.z + Math.sin(a) * rr0); }
  for (let k = 0; k < NS; k++) idx.push(0, 1 + (k + 1) % NS, 1 + k);
  for (let i = 1; i < NR; i++) for (let k = 0; k < NS; k++) {
    const a = 1 + (i - 1) * NS + k, b = 1 + (i - 1) * NS + (k + 1) % NS, c = a + NS, d = b + NS;
    idx.push(a, b, c, b, d, c);
  }
  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
  geo.setAttribute('color', new THREE.Float32BufferAttribute(col, 3));
  geo.setAttribute('uv', new THREE.Float32BufferAttribute(uv, 2));
  geo.setIndex(idx);
  scene.add(mesh(geo, waterMat(0), false));
  // The stream reaches back into the pond. Inside, its banks follow the pond's rim; outside, the stream's own width;
  // a smooth maximum of the two blends one into the other, so the shoreline curves from rim to bank with no corner.
  const L = WW.brookLine;
  const d0 = Math.hypot(L[0][0] - POND.x, L[0][1] - POND.z), ux = (L[0][0] - POND.x) / d0, uz = (L[0][1] - POND.z) / d0;
  POND.mouthA = Math.atan2(uz, ux);
  const S = [];
  for (let d = POND.r - 1.2; d < d0 - 0.2; d += 0.3) S.push([POND.x + ux * d, POND.z + uz * d]);
  S.push(...L);
  const acc = [0];
  for (let k = 1; k < S.length; k++) acc.push(acc[k - 1] + Math.hypot(S[k][0] - S[k - 1][0], S[k][1] - S[k - 1][1]));
  // the inlet: on the rim up to where the pond is 1.5 m either side, then a Hermite curve that leaves the rim at the
  // rim's own angle and settles on the stream's width 0.8 m past the rim: a trumpet mouth with no corner anywhere
  const SW = 0.7, R2 = POND.r * POND.r, d1 = Math.sqrt(R2 - 1.5 * 1.5), d2 = POND.r + 0.8;
  const m0 = -(d1 / 1.5) * (d2 - d1);
  const halfW = (k) => {
    const d = Math.hypot(S[k][0] - POND.x, S[k][1] - POND.z);
    if (d <= d1) return Math.sqrt(Math.max(0, R2 - d * d)) - 0.02;
    if (d >= d2) return SW;
    const t = (d - d1) / (d2 - d1), t2 = t * t, t3 = t2 * t;
    return (2 * t3 - 3 * t2 + 1) * 1.48 + (t3 - 2 * t2 + t) * m0 + (-2 * t3 + 3 * t2) * SW;
  };
  const spos = [], scol = [], suv = [], sidx = [];
  const ACROSS = [-1, -0.5, 0, 0.5, 1];
  for (let k = 0; k < S.length; k++) {
    const a = S[Math.max(0, k - 1)], b = S[Math.min(S.length - 1, k + 1)];
    const l = Math.hypot(b[0] - a[0], b[1] - a[1]) || 1, nx = -(b[1] - a[1]) / l, nz = (b[0] - a[0]) / l, hw = halfW(k);
    for (const u of ACROSS) {
      const x = S[k][0] + nx * u * hw, z = S[k][1] + nz * u * hw;
      spos.push(x, 0.05, z); scol.push(...waterColour(x, z, Math.abs(u))); suv.push(x / WATER_UV, z / WATER_UV);
    }
    if (k > 0) for (let j = 0; j < 4; j++) { const A = (k - 1) * 5 + j, B = A + 1, C = k * 5 + j, D = C + 1; sidx.push(A, C, B, B, C, D); }
  }
  const sg = new THREE.BufferGeometry();
  sg.setAttribute('position', new THREE.Float32BufferAttribute(spos, 3));
  sg.setAttribute('color', new THREE.Float32BufferAttribute(scol, 3));
  sg.setAttribute('uv', new THREE.Float32BufferAttribute(suv, 2));
  sg.setIndex(sidx);
  scene.add(mesh(sg, waterMat(1), false));
  // bank stones down both sides, starting clear of the pond's own rim
  const banks = [];
  for (let k = 1; k < S.length - 1; k += 2) {
    if (Math.hypot(S[k][0] - POND.x, S[k][1] - POND.z) < POND.r + 0.9) continue;   // the pond's rim stones cover the mouth
    const a = S[k - 1], b = S[k + 1], l = Math.hypot(b[0] - a[0], b[1] - a[1]) || 1, nx = -(b[1] - a[1]) / l, nz = (b[0] - a[0]) / l, off = halfW(k) + 0.16;
    for (const sd of [-1, 1]) banks.push({ x: S[k][0] + nx * sd * off, y: 0.06, z: S[k][1] + nz * sd * off, sx: rr(0.25, 0.42), sy: rr(0.15, 0.25), sz: rr(0.25, 0.4), ry: rr(0, 3), c: pick(['#8d837a', '#80766e', '#968b81', '#6e665f']) });
  }
  instanced(new THREE.DodecahedronGeometry(1, 0), banks, {});
}

// footbridges where a path meets the stream: an arched deck 3.4 m long in its own frame, stretched to the gap
for (const c of WW.crossings) {
  let b;
  if (KIT.bridge) b = KIT.bridge.clone();
  else {
    b = new THREE.Group();
    b.add(at(mesh(new THREE.BoxGeometry(3.4, 0.14, 1.1), M.wood), 0, 0.3, 0));
    for (const sd of [-1, 1]) b.add(at(mesh(new THREE.BoxGeometry(3.4, 0.08, 0.08), M.woodD), 0, 1.0, sd * 0.5));
  }
  b.position.set(c.x, 0, c.z);
  b.rotation.y = c.ang;
  b.scale.x = (c.len + 0.6) / 3.4;
  scene.add(b);
}

/* ================================================================ Garden: hedge ring, pond, stepping stones, autumn trees */
{
  const r = ROOM.garden;
  const G = new THREE.Group();
  G.position.set(r.x, 0, r.z);
  scene.add(G);
  const gateA = Math.atan2(4.6, 5.6), streamA = 2.84;
  const bumps = [];
  if (KIT.garden) G.add(KIT.garden);   // the clipped hedge with its two gaps, and the rose arch over the gate
  for (let i = 0; i < (KIT.garden ? 0 : 120); i++) {
    const a = i / 120 * 2 * PI - PI;
    const dg = Math.min(Math.abs(a - gateA), 2 * PI - Math.abs(a - gateA)), ds = Math.min(Math.abs(a - streamA), 2 * PI - Math.abs(a - streamA));
    if (dg < 0.17 || ds < 0.2) continue;
    for (const k of [0, 1]) { const rr0 = r.r + (k ? 0.35 : -0.1); bumps.push({ x: r.x + Math.cos(a) * rr0, y: 0.5 + k * 0.15, z: r.z + Math.sin(a) * rr0, sx: rr(0.55, 0.75), sy: rr(0.55, 0.75), sz: rr(0.55, 0.75), c: pick(['#4f7a46', '#5a8450', '#46703f']) }); }
  }
  instanced(new THREE.SphereGeometry(1, 12, 9), bumps, { cast: true });
  {
    const gx = Math.cos(gateA) * r.r, gz = Math.sin(gateA) * r.r;
    const gate = new THREE.Group();
    gate.position.set(gx, 0, gz);
    gate.rotation.y = Math.atan2(Math.cos(gateA), Math.sin(gateA));
    if (!KIT.garden) {
      for (const sd of [-1, 1]) gate.add(at(mesh(new THREE.BoxGeometry(0.2, 2.4, 0.2), M.woodD), sd * 0.85, 1.2, 0));
      gate.add(at(mesh(new THREE.TorusGeometry(0.85, 0.08, 6, 16, PI), M.wood), 0, 2.3, 0));
    }
    gate.add(at(lampPost(0).children[2].clone(), 0, 2.6, 0));
    G.add(gate);
  }
  const rim = [], pads = [];
  for (let i = 0; i < 26; i++) { const a = i / 26 * 2 * PI; let dm = Math.abs(a - POND.mouthA); dm = Math.min(dm, 2 * PI - dm); if (dm < 0.62) continue; rim.push({ x: POND.x + Math.cos(a) * 2.75, y: 0.08, z: POND.z + Math.sin(a) * 2.75, sx: rr(0.25, 0.4), sy: rr(0.15, 0.25), sz: rr(0.25, 0.35), ry: rr(0, 3), c: pick(['#8d837a', '#80766e', '#968b81']) }); }
  for (let i = 0; i < 7; i++) pads.push({ x: POND.x + rr(-1.6, 1.6), y: 0.065, z: POND.z + rr(-1.4, 1.4), sx: rr(0.8, 1.2), sz: rr(0.8, 1.2), c: pick(['#5f8a4a', '#6e9452']) });
  instanced(new THREE.DodecahedronGeometry(1, 0), rim, {});
  instanced(new THREE.CylinderGeometry(0.22, 0.22, 0.02, 12), pads, {});
  put(G, easel(), 2.2, -4.3, Math.atan2(3.0 - 2.2, -3.4 - -4.3));
  put(G, bench(1.6, true), -4.4, 4.4, Math.atan2(3.4, -4.4));
  for (const [x, z] of [[-5.6, -2.2], [4.9, -0.6]]) {
    const sl = new THREE.Group();
    sl.add(at(mesh(new THREE.CylinderGeometry(0.22, 0.28, 0.9, 6), M.stone), 0, 0.45, 0));
    sl.add(at(mesh(new THREE.BoxGeometry(0.5, 0.36, 0.5), M.stone), 0, 1.08, 0));
    sl.add(at(mesh(new THREE.BoxGeometry(0.3, 0.2, 0.52), glow('#ffc070', 1.6), false), 0, 1.08, 0));
    sl.add(at(mesh(new THREE.ConeGeometry(0.48, 0.36, 4), M.redD), 0, 1.44, 0));
    put(G, sl, x, z, PI / 4);
  }
  {
    const shr = new THREE.Group();
    shr.add(at(mesh(new THREE.BoxGeometry(0.9, 0.6, 0.6), M.stone), 0, 0.3, 0));
    shr.add(at(skull(0.26), 0, 0.75, 0));
    for (const sd of [-1, 1]) shr.add(at(candle(0.18), sd * 0.3, 0.6, 0.12));
    put(G, shr, -4.4, -5.4, Math.atan2(4.4, 5.4));
  }
  plantFlora('tree_willow', 1.0, r.x - 6.2, r.z - 2.8);
  plantFlora('tree_cherry', 0.95, r.x + 5.3, r.z - 4.9);
  plantFlora('tree_fruit', 0.85, r.x - 3.0, r.z + 6.2);
  const fl = [];
  let tries = 0;
  while (fl.length < 90 && tries < 4000) {
    tries++;
    const a = rr(0, 2 * PI), d = rr(5.3, 6.7);
    const x = Math.cos(a) * d, z = Math.sin(a) * d;
    const dg = Math.min(Math.abs(a - gateA), 2 * PI - Math.abs(a - gateA));
    if (dg < 0.35 || Math.hypot(x - 3.0, z + 3.4) < 1.3 || Math.hypot(x - 2.2, z + 4.3) < 1) continue;
    fl.push({ x: r.x + x, y: 0.18, z: r.z + z, sx: 0.9, sy: 0.9, sz: 0.9, c: pick([COL.red, COL.bone, '#d98a3a', COL.redL, '#e8c860']) });
  }
  instanced(new THREE.SphereGeometry(0.11, 8, 6), fl, {});
}
// the stream, out through the water gate and over the edge
const streamTex = tiled(TEX.water, 1, 1);
const fallTex = tiled(TEX.water, 1, 6);
const mists = [];
{
  const L = WW.brookLine;
  const [ex, ez] = L[L.length - 1], [px, pz] = L[L.length - 3];
  const fl = Math.hypot(ex - px, ez - pz), fx = (ex - px) / fl, fz = (ez - pz) / fl;
  const fall = new THREE.Mesh(new THREE.PlaneGeometry(1.4, 40), new THREE.MeshBasicMaterial({ map: fallTex, color: '#acb5c8', transparent: true, opacity: 0.85, side: THREE.DoubleSide, depthWrite: false }));
  fall.position.set(ex + fx * 0.9, -20 + 0.05, ez + fz * 0.9);
  fall.rotation.y = Math.atan2(fx, fz);
  scene.add(fall);
  const mistMat = new THREE.SpriteMaterial({ map: TEX.soft, color: '#ffffff', transparent: true, opacity: 0.5, depthWrite: false });
  for (let i = 0; i < 9; i++) { const sp = new THREE.Sprite(mistMat); sp.position.set(ex + fx * rr(1, 2.4), rr(-38, -30), ez + fz * rr(1, 2.4) + rr(-1, 1)); sp.scale.setScalar(rr(3, 5.5)); scene.add(sp); mists.push(sp); }
  for (let i = 0; i < 4; i++) { const sp = new THREE.Sprite(mistMat); sp.position.set(ex + fx * 1.0, rr(-0.6, 0.3), ez + fz * 1.0 + rr(-0.5, 0.5)); sp.scale.setScalar(rr(1, 1.6)); scene.add(sp); mists.push(sp); }
}

/* ================================================================ buildings nobody works in, and what's around them */
for (const dc of WW.DECOR) {
  if (dc.kind === 'hut') {
    const H = buildHouse({ ...dc, wallH: 2.5 }, { id: dc.id, pitch: 0.66, chimney: dc.id === 'barracks' ? [1.4, -0.6] : null });
    const ww = dc.w / 2, dd = dc.d / 2;
    if (dc.id === 'barracks') { inH(H, bunk(), -1.6, -0.9); inH(H, bunk(), 0.4, -0.9); inH(H, chest(), 2.2, -1.6, -PI / 2); inH(H, brazier(0, 0.7), 2.3, 1.2); onWall(H, 'W', weaponRack(3), 0.0, FLOOR_H, 0.3); onWall(H, 'S', hangingBanner(0.8, 1.3), 1.6, FLOOR_H + 2.3, 0.04); }
    if (dc.id === 'store') { inH(H, table(1.6, 0.6, 0.9, M.wood), -1.2, -1.3); for (let i = 0; i < 4; i++) inH(H, crate(0.45), -1.8 + i * 0.4, -1.3).position.y = FLOOR_H + 0.95; inH(H, barrel(), 1.6, -1.2); inH(H, barrel(0.9), 1.9, -0.4); inH(H, sack(), 0.6, -1.3); inH(H, sack(), 1.0, 0.6); inH(H, crate(0.6), -1.8, 0.8, 0.3); }
    if (dc.id === 'stable') { const straw = mesh(new THREE.PlaneGeometry(dc.w - 0.6, dc.d - 0.6), M.straw, false); straw.rotation.x = -PI / 2; inH(H, straw, 0, 0).position.y = FLOOR_H + 0.01; for (const x of [-1.0, 1.2]) inH(H, partition(2.2, 1.1), x, -0.6); inH(H, wolf(), -2.2, -0.3, 0.4); inH(H, wolf(), 0.1, -0.5, -0.5).scale.setScalar(0.9); inH(H, hay(), 2.4, -1.0, 0.2); { const tr0 = new THREE.Group(); tr0.add(at(mesh(new THREE.BoxGeometry(1.2, 0.4, 0.45), M.wood), 0, 0.2, 0)); tr0.add(rot(at(mesh(new THREE.PlaneGeometry(1.1, 0.36), toon('#3f6f8a'), false), 0, 0.38, 0), -PI / 2, 0, 0)); inH(H, tr0, 2.2, 1.0); } }
    if (dc.id === 'granary') { for (let i = 0; i < 6; i++) inH(H, sack(), -1.4 + (i % 3) * 0.5, -1.2 + Math.floor(i / 3) * 0.55); inH(H, barrel(), 1.5, -1.1); { const bin = mesh(new THREE.BoxGeometry(1.2, 0.8, 0.8), M.wood); bin.position.y = 0.4; const g0 = new THREE.Group(); g0.add(bin); g0.add(at(mesh(new THREE.BoxGeometry(1.1, 0.05, 0.7), M.straw), 0, 0.78, 0)); inH(H, g0, 1.2, 0.7); } }
    if (dc.id === 'barracks') { outH(H, weaponRack(4), -1.4, 3.3); outH(H, spikes(2.6), 3.8, 3.0, 0.6); outH(H, poleBanner(3.0), 3.6, 0.6); outH(H, skullPole(2.4), -3.8, 2.4); }
    if (dc.id === 'store') { outH(H, crate(0.7), -1.6, 2.8, 0.2); outH(H, crate(0.5), -0.9, 3.1, 0.7); outH(H, sack(), 0.6, 2.9); outH(H, sack(), 1.1, 3.2); outH(H, barrel(), 2.3, 2.9); }
    if (dc.id === 'stable') { outH(H, hay(), -2.8, 2.6, 0.3); outH(H, hay(), -2.0, 3.0, 1.1); outH(H, cart(), 2.0, 3.4, -0.3); fence(H.g, [[-3.2, 4.4], [3.2, 4.4]], 0.9); }
    if (dc.id === 'granary') { outH(H, sack(), -1.2, 2.6); outH(H, sack(), -0.6, 2.9); outH(H, sack(), -1.0, 3.3); outH(H, barrel(0.9), 1.6, 2.7); }
  } else if (dc.kind === 'windmill') {
    const g = new THREE.Group();
    g.position.set(dc.x, 0, dc.z);
    g.add(at(mesh(new THREE.CylinderGeometry(1.7, 2.4, 6.6, 18), toon('#ffffff', { map: tiled(TEX.castleWall, 3, 2.2) })), 0, 3.3, 0));
    g.add(at(mesh(new THREE.ConeGeometry(2.3, 2.8, 18), toon('#ffffff', { map: tiled(TEX.roof, 4, 1.5) })), 0, 7.9, 0));
    g.add(at(mesh(new THREE.BoxGeometry(1.0, 1.7, 0.2), M.woodD), 0, 0.85, 2.25));
    for (const [a, y] of [[0.6, 3.6], [-0.9, 4.8]]) g.add(at(rot(mesh(new THREE.BoxGeometry(0.5, 0.6, 0.1), M.pane, false), 0, a, 0), Math.sin(a) * 2.0, y, Math.cos(a) * 2.0));
    const hub = at(new THREE.Group(), 0, 6.2, 2.0);
    hub.add(rot(mesh(new THREE.CylinderGeometry(0.22, 0.22, 0.5, 10), M.woodD), PI / 2, 0, 0));
    for (let k = 0; k < 4; k++) {
      const arm = new THREE.Group();
      arm.rotation.z = k * PI / 2;
      arm.add(at(mesh(new THREE.BoxGeometry(0.12, 4.4, 0.08), M.woodD), 0, 2.3, 0.2));
      arm.add(at(mesh(new THREE.BoxGeometry(0.9, 3.4, 0.04), toon('#e3d5b6', { side: THREE.DoubleSide })), 0.5, 2.6, 0.24));
      arm.add(at(mesh(new THREE.BoxGeometry(0.06, 3.4, 0.06), M.wood), 0.95, 2.6, 0.26));
      hub.add(arm);
    }
    g.add(hub);
    SPINNERS.push({ o: hub, axis: 'z', v: 0.5 });
    g.add(at(sack(), -1.6, 0, 2.6)); g.add(at(sack(), -2.2, 0, 2.2));
    scene.add(g);
  } else if (dc.kind === 'watch') {
    const g = new THREE.Group();
    g.position.set(dc.x, 0, dc.z);
    if (KIT.watch) g.add(KIT.watch);
    else {
    for (const [x, z] of [[-1.2, -1.2], [1.2, -1.2], [-1.2, 1.2], [1.2, 1.2]]) g.add(at(mesh(new THREE.CylinderGeometry(0.16, 0.2, 6.4, 8), M.wood), x, 3.2, z));
    for (const y of [2.0, 4.2]) for (const [a, b] of [[[-1.2, -1.2], [1.2, -1.2]], [[1.2, -1.2], [1.2, 1.2]], [[1.2, 1.2], [-1.2, 1.2]], [[-1.2, 1.2], [-1.2, -1.2]]]) { const l = mesh(new THREE.BoxGeometry(Math.hypot(b[0] - a[0], b[1] - a[1]), 0.12, 0.12), M.woodD); l.position.set((a[0] + b[0]) / 2, y, (a[1] + b[1]) / 2); l.rotation.y = -Math.atan2(b[1] - a[1], b[0] - a[0]); g.add(l); }
    g.add(at(mesh(new THREE.BoxGeometry(3.2, 0.2, 3.2), M.wood), 0, 6.4, 0));
    for (const [x, z, w, d] of [[0, -1.55, 3.2, 0.08], [0, 1.55, 3.2, 0.08], [-1.55, 0, 0.08, 3.2], [1.55, 0, 0.08, 3.2]]) g.add(at(mesh(new THREE.BoxGeometry(w, 0.9, d), toon('#ffffff', { map: TEX.planks })), x, 6.95, z));
    for (const [x, z] of [[-1.5, -1.5], [1.5, -1.5], [-1.5, 1.5], [1.5, 1.5]]) g.add(at(mesh(new THREE.CylinderGeometry(0.07, 0.07, 2.0, 6), M.woodD), x, 7.5, z));
    g.add(at(rot(mesh(new THREE.ConeGeometry(2.6, 1.6, 4), toon('#ffffff', { map: tiled(TEX.roof, 3, 1) })), 0, PI / 4, 0), 0, 9.3, 0));
    g.add(at(skull(0.35), 0, 10.3, 0));
    g.add(at(mesh(new THREE.BoxGeometry(0.6, 6.4, 0.08), M.woodD), 0, 3.2, 1.4));
    }
    g.add(at(brazier(0, 0.7), 0.6, 6.5, -0.6));
    scene.add(g);
  } else if (dc.kind === 'shrine') {
    const g = new THREE.Group();
    g.position.set(dc.x, 0, dc.z);
    if (KIT.altar) g.add(KIT.altar);   // carved standing stones, the altar slab and the horned totem
    else {
      for (let i = 0; i < 7; i++) { const a = i / 7 * 2 * PI + 0.3, h = rr(1.6, 2.5); g.add(rot(at(mesh(planarUV(new THREE.BoxGeometry(0.6, h, 0.4), 1.2), M.stone), Math.cos(a) * 2.5, h / 2, Math.sin(a) * 2.5), rr(-0.08, 0.08), -a, rr(-0.08, 0.08))); }
      g.add(totem(3.4));
    }
    for (const a of [0.9, 2.5, 4.1, 5.6]) g.add(at(skullCandle(), Math.cos(a) * 1.4, 0, Math.sin(a) * 1.4));
    g.add(at(brazier(0, 0.8), 1.6, 0, 1.4));
    scene.add(g);
    patch('dirt', dc.x, dc.z, 3.4, 3.4, 0, 0.013);
  } else if (dc.kind === 'camp') {
    const g = new THREE.Group();
    g.position.set(dc.x, 0, dc.z);
    g.add(at(rot(tent(1.8, 2.5, '#7a5a40'), 0, Math.atan2(2.2, -1.6), 0), -2.2, 0, 1.6));
    g.add(at(rot(tent(1.6, 2.3, '#6a2a22'), 0, Math.atan2(-2.0, -2.2), 0), 2.0, 0, 2.2));
    for (let i = 0; i < 8; i++) { const a = i / 8 * 2 * PI; g.add(at(mesh(new THREE.DodecahedronGeometry(0.18, 0), M.stone), Math.cos(a) * 0.55, 0.1, Math.sin(a) * 0.55)); }
    for (let i = 0; i < 3; i++) g.add(rot(at(mesh(new THREE.CylinderGeometry(0.07, 0.07, 0.8, 6), M.woodD), 0, 0.12, 0), PI / 2, i * 1.05, 0));
    flame(g, 0, 0.12, 0, 1.8);
    for (const a of [0.6, 2.4, 4.4]) g.add(at(rot(mesh(new THREE.CylinderGeometry(0.2, 0.2, 1.4, 8), M.wood), 0, -a, PI / 2), Math.cos(a) * 1.6, 0.2, Math.sin(a) * 1.6));
    g.add(at(skullPole(2.4), -3.2, 0, -1.2));
    g.add(at(barrel(), 3.1, 0, -0.8));
    scene.add(g);
    patch('dirt', dc.x, dc.z, 4.2, 4.0, 0, 0.013);
  }
}

/* ================================================================ outside the walls: the dock, a war camp, fields */
/* a sky ship: wooden hull, red balloon, a propeller at the stern. Bow points along +x. */
function rope(parent, a, b, r = 0.018, mat = M.dark) {
  const va = new THREE.Vector3(...a), vb = new THREE.Vector3(...b);
  const len = va.distanceTo(vb);
  const m = mesh(new THREE.CylinderGeometry(r, r, len, 5), mat, false);
  m.position.copy(va).add(vb).multiplyScalar(0.5);
  m.quaternion.setFromUnitVectors(UP, vb.clone().sub(va).normalize());
  parent.add(m);
  return m;
}
function skyShip() {
  const g = new THREE.Group();
  const hull = mesh(new THREE.SphereGeometry(1, 22, 12, 0, PI * 2, PI / 2, PI / 2), toon('#ffffff', { map: TEX.planks }));
  hull.scale.set(2.7, 1.0, 1.15);
  g.add(hull);
  const deck = mesh(new THREE.CylinderGeometry(1, 1, 0.1, 24), M.woodL);
  deck.scale.set(2.62, 1, 1.1);
  g.add(at(deck, 0, 0.02, 0));
  const rim = mesh(new THREE.TorusGeometry(1, 0.06, 6, 36), M.woodD);
  rim.rotation.x = PI / 2; rim.scale.set(2.68, 1.13, 1); rim.position.y = 0.14;
  g.add(rim);
  g.add(rot(at(mesh(new THREE.CylinderGeometry(0.05, 0.08, 1.6, 8), M.woodD), 3.2, 0.5, 0), 0, 0, -1.2));
  g.add(at(rot(skull(0.32), 0, PI / 2, 0), 2.75, 0.32, 0));
  g.add(at(rot(horns(0.8), 0, PI / 2, 0), 2.75, 0.42, 0));
  g.add(at(mesh(new THREE.CylinderGeometry(0.07, 0.09, 2.8, 8), M.woodD), 0.3, 1.4, 0));
  const pennant = at(new THREE.Group(), 0.3, 2.85, 0);
  pennant.add(at(mesh(new THREE.BoxGeometry(0.9, 0.36, 0.02), M.red), 0.45, 0, 0));
  g.add(pennant);
  FLAGS.push(pennant);
  const cabin = at(new THREE.Group(), -1.5, 0.06, 0);
  cabin.add(at(mesh(new THREE.BoxGeometry(1.1, 0.8, 1.1), toon('#ffffff', { map: TEX.planks })), 0, 0.4, 0));
  cabin.add(at(rot(mesh(new THREE.CylinderGeometry(0.75, 0.75, 1.3, 3), toon('#ffffff', { map: TEX.roof })), 0, 0, PI / 2), 0, 1.05, 0));
  cabin.add(at(mesh(new THREE.BoxGeometry(0.3, 0.3, 0.04), M.pane, false), 0.56, 0.5, 0));
  g.add(cabin);
  const balloon = mesh(new THREE.SphereGeometry(1, 24, 16), toon('#ffffff', { map: TEX.balloon }));
  balloon.scale.set(3.6, 1.5, 1.7);
  balloon.position.y = 4.4;
  g.add(balloon);
  const band = mesh(new THREE.TorusGeometry(1, 0.05, 6, 40), M.bone);
  band.rotation.x = PI / 2; band.scale.set(3.62, 1.72, 1); band.position.y = 4.1;
  g.add(band);
  for (const [bx, bz, hx, hz] of [[2.6, 1.15, 2.0, 0.9], [2.6, -1.15, 2.0, -0.9], [-2.6, 1.15, -2.0, 0.9], [-2.6, -1.15, -2.0, -0.9], [0, 1.7, 0, 1.12], [0, -1.7, 0, -1.12]]) rope(g, [bx, 4.05, bz], [hx, 0.16, hz]);
  const prop = at(new THREE.Group(), -2.95, 0.65, 0);
  prop.add(rot(mesh(new THREE.CylinderGeometry(0.1, 0.1, 0.3, 8), M.iron), 0, 0, PI / 2));
  for (let k = 0; k < 3; k++) { const bl = at(new THREE.Group(), 0, 0, 0); bl.rotation.x = k / 3 * PI * 2; bl.add(at(rot(mesh(new THREE.BoxGeometry(0.04, 0.75, 0.16), M.wood), 0.2, 0, 0), -0.05, 0.4, 0)); prop.add(bl); }
  g.add(prop);
  SPINNERS.push({ o: prop, axis: 'x', v: 7 });
  g.add(at(mesh(new THREE.BoxGeometry(0.06, 0.9, 0.7), M.redD), -2.75, 0.1, 0));
  for (const x of [2.4, -2.4]) g.add(at(mesh(new THREE.SphereGeometry(0.1, 8, 6), glow('#ffc070', 2.2), false), x, 0.5, 0));
  g.add(at(crate(0.45), 1.3, 0.07, 0.4)); g.add(at(barrel(0.6), 1.2, 0.07, -0.45));
  return g;
}

/* the sky dock: a pier braced back into the cliff, a crane, a harbour hut, a moored ship */
const skyBoat = skyShip();
const airship = skyShip();
{
  const rd = ROADS.find((x) => x.id === 'dock');
  const L = rd.line, [ex, ez] = L[L.length - 1], [px, pz] = L[L.length - 4];
  const l = Math.hypot(ex - px, ez - pz), fx = (ex - px) / l, fz = (ez - pz) / l;
  const D = new THREE.Group();
  D.position.set(ex, 0, ez);
  D.rotation.y = Math.atan2(fx, fz);
  scene.add(D);
  if (KIT.dock) {
    D.add(KIT.dock);   // deck, frame, struts, rails, crane, bollard, rope coil and the harbour hut
    D.add(at(crate(0.55), 2.8, 1.17, 6.8));   // the crate on the crane hook
  } else {
    const deckMat = toon('#ffffff', { map: TEX.planks });
    D.add(at(mesh(planarUV(new THREE.BoxGeometry(3.2, 0.22, 10.4), 2.6), deckMat), 0, 0.11, 2.9));
    for (const sd of [-1, 1]) D.add(at(mesh(new THREE.BoxGeometry(0.28, 0.32, 13.4), M.woodD), sd * 1.2, -0.16, 1.4));
    for (const z of [1.6, 4.4, 7.6]) D.add(at(mesh(new THREE.BoxGeometry(3.0, 0.2, 0.24), M.woodD), 0, -0.12, z));
    // diagonal struts from under the deck back into the rock face
    for (const z of [3.6, 7.4]) for (const sd of [-1, 1]) rope(D, [sd * 1.2, -0.3, z], [sd * 1.25, -3.2, -0.9], 0.13, M.wood);
    for (const sd of [-1, 1]) { rope(D, [sd * 1.2, -0.3, 1.8], [sd * 1.25, -2.4, -0.7], 0.11, M.wood); D.add(at(mesh(new THREE.BoxGeometry(0.5, 0.5, 0.6), M.iron), sd * 1.25, -3.1, -0.85)); }
    rope(D, [-1.2, -1.6, 2.6], [1.2, -1.1, 4.9], 0.06, M.woodD); rope(D, [1.2, -1.6, 2.6], [-1.2, -1.1, 4.9], 0.06, M.woodD);
    // railings with rope
    for (const sd of [-1, 1]) {
      const zs = [0.2, 1.7, 3.2, 4.7, 6.2, 7.7];
      for (const z of zs) D.add(at(mesh(new THREE.CylinderGeometry(0.07, 0.08, 1.0, 8), M.woodD), sd * 1.5, 0.7, z));
      for (let i = 0; i < zs.length - 1; i++) if (!(sd > 0 && zs[i] === 4.7)) rope(D, [sd * 1.5, 1.12, zs[i]], [sd * 1.5, 1.12, zs[i + 1]], 0.025, toon('#b8a07a'));
    }
    D.add(at(mesh(new THREE.BoxGeometry(3.2, 0.12, 0.12), M.woodD), 0, 1.1, 8.0));
    // the crane
    const crane = at(new THREE.Group(), -1.1, 0.22, 6.8);
    crane.add(at(mesh(new THREE.CylinderGeometry(0.14, 0.18, 3.8, 8), M.wood), 0, 1.9, 0));
    crane.add(at(mesh(new THREE.BoxGeometry(4.6, 0.18, 0.18), M.wood), 1.9, 3.6, 0));
    rope(crane, [0, 2.6, 0], [1.6, 3.55, 0], 0.07, M.woodD);
    rope(crane, [3.9, 3.5, 0], [3.9, 1.7, 0], 0.02);
    crane.add(at(mesh(new THREE.TorusGeometry(0.12, 0.03, 6, 12, PI * 1.4), M.iron), 3.9, 1.6, 0));
    crane.add(at(crate(0.55), 3.9, 0.95, 0));
    D.add(crane);
    // a bollard with a coil of rope, cargo, a banner
    D.add(at(mesh(new THREE.CylinderGeometry(0.16, 0.2, 0.5, 10), M.iron), 1.15, 0.47, 5.6));
    D.add(at(rot(mesh(new THREE.TorusGeometry(0.22, 0.06, 6, 16), toon('#b8a07a')), PI / 2, 0, 0), 0.5, 0.28, 2.0));
  }
  for (const [x, z] of [[-1.5, 3.2], [1.5, 7.7], [-1.5, 7.7]]) D.add(at(mesh(new THREE.SphereGeometry(0.12, 8, 6), glow('#ffc070', 2.2), false), x, 1.32, z));
  D.add(at(crate(0.6), -0.85, 0.22, 1.3)); D.add(at(crate(0.45), -0.75, 0.22, 2.0)); D.add(at(barrel(0.85), 0.85, 0.22, 1.0)); D.add(at(sack(), 0.6, 0.22, 3.6));
  D.add(at(poleBanner(3.4), -1.45, 0.22, 0.4));
  // the moored ship and its gangplank
  skyBoat.position.set(4.1, -0.4, 5.6);
  skyBoat.rotation.y = -PI / 2;
  D.add(skyBoat);
  const plank = mesh(new THREE.BoxGeometry(1.6, 0.08, 0.7), M.woodL);
  plank.position.set(2.3, 0.05, 5.6);
  plank.rotation.z = -0.18;
  D.add(plank);
  // the harbour hut on land
  const hut = at(new THREE.Group(), -4.6, 0, -3.8);
  if (!KIT.dock) {
    hut.add(at(mesh(wallUV(new THREE.BoxGeometry(3.0, 2.3, 2.6), 2.3, 1.3), M.plankWall), 0, 1.15, 0));
    hut.add(at(rot(mesh(new THREE.CylinderGeometry(1.9, 1.9, 3.4, 3), toon('#ffffff', { map: TEX.roof })), 0, 0, PI / 2), 0, 2.3 + 0.95, 0));
    hut.add(at(mesh(new THREE.BoxGeometry(0.9, 1.7, 0.1), M.woodD), 0.6, 0.85, 1.31));
    hut.add(at(mesh(new THREE.BoxGeometry(0.7, 0.6, 0.1), M.pane, false), -0.7, 1.4, 1.31));
    hut.add(at(skull(0.24), 0.6, 1.95, 1.4));
  }
  hut.add(at(torch(), -0.2, 1.6, 1.3));
  hut.add(at(crate(0.6), 1.9, 0, 0.8)); hut.add(at(barrel(), 1.8, 0, -0.4));
  D.add(hut);
  D.add(at(rot(signPost('SKY DOCK'), 0, PI / 2, 0), 2.2, 0, -2.4));
  // and one ship in the air, circling the island
  scene.add(airship);
  airship.scale.setScalar(1.5);
  airship.userData = { a: 1.2, r: 96, y: 15 };
}
{
  const camp = new THREE.Group();
  camp.position.set(-44, 0, 26);
  scene.add(camp);
  for (const [x, z, c] of [[-2.4, -1.2, '#7a5a40'], [2.2, -2.0, '#6a2a22'], [0.4, 2.6, '#5a4a3a']]) camp.add(at(rot(tent(1.8, 2.6, c), 0, Math.atan2(-x, -z), 0), x, 0, z));
  for (let i = 0; i < 8; i++) { const a = i / 8 * 2 * PI; camp.add(at(mesh(new THREE.DodecahedronGeometry(0.18, 0), M.stone), Math.cos(a) * 0.55, 0.1, Math.sin(a) * 0.55)); }
  flame(camp, 0, 0.1, 0, 1.8);
  camp.add(at(skullPole(2.6), 3.6, 0, 1.8));
  camp.add(at(poleBanner(3.0), -3.6, 0, 1.6));
  camp.add(at(rot(spikes(3.0), 0, 0.6, 0), 4.6, 0, -2.6));
  patch('dirt', -44, 26, 5, 4.6, 0.3, 0.013);
}
patch('field', 54, -8, 6.5, 4.2, 0.35, 0.013, 3);
patch('field', 51, 6, 5.2, 3.6, -0.2, 0.013, 3);
patch('field', 10, -44.5, 6, 3.6, 0.1, 0.013, 3);
put(scene, dummy(), 55.5, -2.6, 0.4);
put(scene, hay(), 48.6, -12.6, 0.4); put(scene, hay(), 49.4, -11.8, 1.3);
