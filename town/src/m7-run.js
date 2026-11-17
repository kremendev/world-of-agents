
fillShelves();
const housePicks = [];

/* ================================================================ agents in the world */
const HOUSE_LIST = ROOMS.filter((r) => r.kind === 'house');
function groundY(x, z) {
  for (const r of HOUSE_LIST) {
    const [lx, lz] = WW.toLocal(r, x, z);
    if (Math.abs(lx) < r.w / 2 + 0.1 && Math.abs(lz) < r.d / 2 + 0.1) return FLOOR_H;
    if (r.deck && lx > r.deck[0] && lx < r.deck[1] && lz > r.deck[2] && lz < r.deck[3]) return 0.2;
  }
  if (Math.hypot(x - ROOM.forge.x, z - ROOM.forge.z) < 7.8) return 0.16;
  for (const c of WW.crossings) {
    const dx = x - c.x, dz = z - c.z, half = (c.len + 0.6) / 2;
    const lx = dx * Math.cos(c.ang) - dz * Math.sin(c.ang), lz = dx * Math.sin(c.ang) + dz * Math.cos(c.ang);
    if (Math.abs(lx) < half && Math.abs(lz) < 0.6) return 0.12 + 0.32 * (1 - (lx / half) ** 2);   // the deck's arch, as built in Blender
  }
  return 0.02;
}
const SPEED = { lead: 2.4, designer: 2.35, frontend: 2.3, backend: 2.25, reviewer: 2.1 };
const actors = {};
const pickables = [];
for (const id of ORDER) {
  const c = BUILD[id]();
  c.root.userData.agentId = id;
  scene.add(c.root);
  pickables.push(c.root);
  const sp = SPOTS[WOA.agents[id].spot];
  c.root.position.set(sp.x, groundY(sp.x, sp.z), sp.z);
  c.root.rotation.y = sp.ry;
  actors[id] = { id, c, path: [], from: WOA.agents[id].spot, phase: rnd() * 6 };
  attachModel(id, c, SPEED[id]);
}
function routeTo(id, spotId) {
  const a = actors[id], sp = SPOTS[spotId];
  const pts = [];
  let start;
  if (a.path.length && a.path[0].node) { start = a.path[0].node; pts.push(a.path[0]); }
  else if (a.path.length && a.path[0].leave) { start = a.path[0].leave; pts.push(a.path[0]); pts.push({ x: WW.N[start].x, z: WW.N[start].z, node: start }); }
  else {
    const prev = SPOTS[a.from];
    start = prev.anchor;
    if (!a.path.length && prev.viaW) pts.push({ x: prev.viaW[0], z: prev.viaW[1], leave: start });
    pts.push({ x: WW.N[start].x, z: WW.N[start].z, node: start });
  }
  const mid = WW.shortest(start, sp.anchor) || [start];
  for (const nid of mid.slice(1)) pts.push({ x: WW.N[nid].x, z: WW.N[nid].z, node: nid });
  if (sp.viaW) pts.push({ x: sp.viaW[0], z: sp.viaW[1] });
  pts.push({ x: sp.x, z: sp.z });
  a.path = pts;
  a.from = spotId;
  if (REDUCE) { a.c.root.position.set(sp.x, groundY(sp.x, sp.z), sp.z); a.c.root.rotation.y = sp.ry; a.path = []; WOA.arrive(id); }
}
WOA.on('goto', routeTo);
WOA.has3D = true;
for (const id of ORDER) if (!WOA.agents[id].arrived) WOA.arrive(id);

/* ================================================================ bake: everything that never moves is merged by material,
   so the town draws in a few hundred calls instead of thousands */
{
  const dyn = new Set();
  for (const H of Object.values(HOUSES)) {
    // only the part of a wall that folds away moves; the stone band and everything low is baked
    for (const sd of Object.values(H.sides)) dyn.add(sd.up);
    dyn.add(H.roof.R);
    if (H.upper) {
      dyn.add(H.upper.U);
      const cache = new Map();
      H.upper.U.traverse((ob) => {
        if (!ob.isMesh) return;
        if (!cache.has(ob.material)) { const cm = ob.material.clone(); cache.set(ob.material, cm); H.upper.mats.push(cm); }
        ob.material = cache.get(ob.material);
      });
    }
  }
  for (const a of Object.values(actors)) dyn.add(a.c.root);
  for (const { f } of FLAMES) dyn.add(f);
  for (const s of SPINNERS) dyn.add(s.o);
  for (const f of FLAGS) dyn.add(f);
  for (const c of CROWS) dyn.add(c);
  [deskF.g, deskB.g, skyBoat, airship, cloudRing, skyDome].forEach((o) => dyn.add(o));
  scene.updateMatrixWorld(true);
  const buckets = new Map();
  let baked = 0;
  const KEEP = ['position', 'normal', 'uv'];
  function walk(o) {
    if (dyn.has(o)) return;
    for (const ch of [...o.children]) walk(ch);
    if (!o.isMesh || o.isInstancedMesh || o.children.length || Array.isArray(o.material)) return;
    const m = o.material, g0 = o.geometry;
    if (m.transparent || m.vertexColors || m.isShaderMaterial || m.depthWrite === false || !g0.attributes.uv || !g0.attributes.normal || g0.attributes.color) return;
    const g = g0.index ? g0.toNonIndexed() : g0.clone();
    for (const k of Object.keys(g.attributes)) if (!KEEP.includes(k)) g.deleteAttribute(k);
    g.morphAttributes = {};
    g.clearGroups();
    g.applyMatrix4(o.matrixWorld);
    const key = m.uuid + (o.castShadow ? 's' : 'n');
    if (!buckets.has(key)) buckets.set(key, { m, cast: o.castShadow, geos: [] });
    buckets.get(key).geos.push(g);
    o.parent.remove(o);
    baked++;
  }
  walk(scene);
  for (const { m, cast, geos } of buckets.values()) {
    const merged = mergeGeometries(geos, false);
    if (!merged) { console.warn('could not merge', m.type); continue; }
    const mm = new THREE.Mesh(merged, m);
    mm.castShadow = cast;
    mm.receiveShadow = true;
    mm.matrixAutoUpdate = false;
    scene.add(mm);
  }
  WOA.bakeInfo = { baked, into: buckets.size };
  const pickMat = new THREE.MeshBasicMaterial({ visible: false });
  for (const [id, H] of Object.entries(HOUSES)) {
    const h = H.top + H.roof.hR;
    const box = new THREE.Mesh(new THREE.BoxGeometry(H.r.w + 0.6, h, H.r.d + 0.6), pickMat);
    box.position.set(H.r.x, h / 2, H.r.z);
    box.rotation.y = H.r.ry || 0;
    box.userData.houseId = id;
    scene.add(box);
    box.updateMatrixWorld(true);
    housePicks.push(box);
  }
}

/* ================================================================ camera, picking */
const camera = new THREE.PerspectiveCamera(34, window.innerWidth / window.innerHeight, 0.5, 900);
const HOME = { t: new THREE.Vector3(0, 0, 2), p: new THREE.Vector3(46, 70, 96) };
camera.position.copy(HOME.p);
const controls = new OrbitControls(camera, renderer.domElement);
controls.target.copy(HOME.t);
controls.enableDamping = true;
controls.dampingFactor = 0.08;
controls.minDistance = 6;
controls.maxDistance = 150;
controls.maxPolarAngle = 1.3;
controls.minPolarAngle = 0.12;
controls.screenSpacePanning = false;
controls.zoomSpeed = 0.8;
controls.update();
// keep the point you orbit around on the island, at ground level
function clampTarget() {
  const t = controls.target;
  const r = Math.hypot(t.x, t.z), max = 52;
  if (r > max) { const k = max / r; camera.position.x -= t.x * (1 - k); camera.position.z -= t.z * (1 - k); t.x *= k; t.z *= k; }
  if (t.y < 0 || t.y > 4) { const ny = Math.max(0, Math.min(4, t.y)); camera.position.y += ny - t.y; t.y = ny; }
  if (camera.position.y < 1.2) camera.position.y = 1.2;
}
let fly = null, focusRoom = null;
function flyTo(target, pos) {
  if (REDUCE) { controls.target.copy(target); camera.position.copy(pos); controls.update(); return; }
  fly = { t0: performance.now(), dur: 1100, ft: controls.target.clone(), fp: camera.position.clone(), tt: target, tp: pos };
}
WOA.on('fly', (id) => {
  if (id === 'overview') { focusRoom = null; flyTo(HOME.t.clone(), HOME.p.clone()); return; }
  const H = HOUSES[id];
  const r = ROOM[id] || (H && H.r);
  if (!r) return;
  focusRoom = id;
  if (H) H.view = 'ground';
  const dir = camera.position.clone().sub(controls.target).setY(0).normalize();
  if (dir.lengthSq() < 0.01) dir.set(0.45, 0, 0.9);
  const dist = r.w ? Math.max(r.w, r.d) * 1.15 + 8 : r.r * 1.6 + 7;
  const target = new THREE.Vector3(r.x, 1.0, r.z);
  flyTo(target, target.clone().addScaledVector(dir, dist).setY(dist * 0.85));
});
WOA.on('unfocus', () => { focusRoom = null; });
WOA.on('floor', (id, f) => { if (HOUSES[id]) HOUSES[id].view = f; });
controls.addEventListener('start', () => { if (fly) return; WOA.clearRoom(); });
renderer.domElement.addEventListener('pointerdown', () => { fly = null; });
renderer.domElement.addEventListener('wheel', () => { fly = null; }, { passive: true });
const raycaster = new THREE.Raycaster();
const ndc = new THREE.Vector2();
function pickAt(e) {
  ndc.set(e.clientX / window.innerWidth * 2 - 1, -(e.clientY / window.innerHeight) * 2 + 1);
  raycaster.setFromCamera(ndc, camera);
  const ha = raycaster.intersectObjects(pickables, true)[0];
  if (ha) { let o = ha.object; while (o && !o.userData.agentId) o = o.parent; if (o) return { agent: o.userData.agentId }; }
  const hh = raycaster.intersectObjects(housePicks, false)[0];
  if (hh) return { house: hh.object.userData.houseId };
  return null;
}
let downAt = null;
renderer.domElement.addEventListener('pointerdown', (e) => { downAt = [e.clientX, e.clientY]; });
renderer.domElement.addEventListener('pointerup', (e) => {
  if (!downAt || Math.hypot(e.clientX - downAt[0], e.clientY - downAt[1]) > 5) return;
  const hit = pickAt(e);
  if (!hit) return;
  if (hit.agent) WOA.select(hit.agent, false);
  else if (hit.house !== focusRoom) WOA.emit('fly', hit.house);
});
let hoverAt = 0;
renderer.domElement.addEventListener('pointermove', (e) => {
  if (e.buttons || e.pointerType !== 'mouse') return;
  const now = performance.now();
  if (now - hoverAt < 90) return;
  hoverAt = now;
  const hit = pickAt(e);
  renderer.domElement.style.cursor = hit && (hit.agent || hit.house !== focusRoom) ? 'pointer' : '';
});

/* ================================================================ houses open up as you come close, or when you click one.
   Two-storey houses show the ground floor (upper storey lifts away) or the upper floor (only the roof lifts). */
for (const [id, H] of Object.entries(HOUSES)) H.id = id;
function houseIsOpen(H, dist) {
  if (WOA.openHouses || focusRoom === H.id) return true;
  if (WOA.following && WOA.selected) {
    const sp = SPOTS[WOA.agents[WOA.selected].spot];
    if (sp.room === H.id && !sp.out) return true;
  }
  return H.near;
}
// whether the camera is close enough to open a house, with a margin so it doesn't flip at the edge
function nearHouse(H, dist) {
  const t = controls.target, td = Math.hypot(H.r.x - t.x, H.r.z - t.z), rad = Math.max(H.r.w, H.r.d) * 0.8 + 9;
  H.near = H.near ? dist < 72 && td < rad + 4 : dist < 64 && td < rad;
}
function setFade(mats, on, state) {
  if (state.fading === on) return;
  state.fading = on;
  for (const m of mats) { m.transparent = on; m.needsUpdate = true; }
}
// the upper part of a wall folds down into its lower part
function fold(side, cut, kw) {
  const t = cut ? 0 : 1;
  side.s += (t - side.s) * kw;
  if (Math.abs(side.s - t) < 0.004) side.s = t;
  side.up.scale.y = Math.max(0.001, side.s);
  side.up.visible = side.s > 0.03;
}
function updateHouses(dt) {
  const dist = camera.position.distanceTo(controls.target);
  const k = REDUCE ? 1 : Math.min(1, dt * 5), kw = REDUCE ? 1 : Math.min(1, dt * 6);
  for (const H of Object.values(HOUSES)) {
    nearHouse(H, dist);
    const open = houseIsOpen(H, dist);
    const upperView = open && !!H.upper && H.view === 'upper';
    const goal = open ? 1 : 0;
    H.lift += (goal - H.lift) * k;
    if (Math.abs(H.lift - goal) < 0.002) H.lift = goal;
    const R = H.roof;
    R.R.position.y = R.base + H.lift * 3.4;
    R.R.visible = H.lift < 0.97;
    for (const m of R.mats) m.opacity = 1 - H.lift;
    const dx = camera.position.x - H.r.x, dz = camera.position.z - H.r.z, l = Math.hypot(dx, dz) || 1;
    const c = Math.cos(H.r.ry || 0), s = Math.sin(H.r.ry || 0);
    // a wall folds once it clearly faces the camera and stands again only once it clearly doesn't
    const facing = (side) => {
      const d = ((side.n[0] * c + side.n[1] * s) * dx + (-side.n[0] * s + side.n[1] * c) * dz) / l;
      if (d > 0.32) side.wish = true; else if (d < 0.06) side.wish = false;
      return !!side.wish;
    };
    for (const side of Object.values(H.sides)) fold(side, open && !upperView && facing(side), kw);
    if (H.upper) {
      const U = H.upper, ug = open && !upperView ? 1 : 0;
      U.lift += (ug - U.lift) * k;
      if (Math.abs(U.lift - ug) < 0.002) U.lift = ug;
      setFade(U.mats, U.lift > 0, U);
      U.U.position.y = U.top + U.lift * 3.4;
      U.U.visible = U.lift < 0.97;
      for (const m of U.mats) m.opacity = 1 - U.lift;
      for (const side of Object.values(U.sides)) fold(side, upperView && facing(side), kw);
    }
  }
}

/* ================================================================ labels */
const tags = {};
for (const id of ORDER) {
  const el = document.createElement('div'); el.className = 'tag';
  const dot = document.createElement('i'); const name = document.createElement('span');
  el.append(dot, name); labelsEl.appendChild(el);
  tags[id] = { el, dot, name, last: '' };
}
const roomEls = ROOMS.map((r) => {
  const el = document.createElement('div'); el.className = 'roomlabel'; el.textContent = r.name; labelsEl.appendChild(el);
  let roofTop = null;
  if (r.kind === 'house') { const H = HOUSES[r.id]; roofTop = H.top + H.roof.hR + 0.9; }
  return { el, r, roofTop };
});
const tmp = new THREE.Vector3();
function project(v) { v.project(camera); return { ok: v.z < 1 && Math.abs(v.x) < 1.1 && Math.abs(v.y) < 1.1, x: (v.x + 1) / 2 * window.innerWidth, y: (1 - v.y) / 2 * window.innerHeight }; }
const DOT = { work: '#ee8a45', needs: '#2a1c22', walking: '#b8aa98', idle: '#8fbf7a' };
function placeLabels() {
  const dist = camera.position.distanceTo(controls.target);
  for (const id of ORDER) {
    const c = actors[id].c, t = tags[id];
    c.head.getWorldPosition(tmp);
    tmp.y += c.labelUp;
    const p = project(tmp);
    t.el.style.display = p.ok ? '' : 'none';
    if (!p.ok) continue;
    t.el.style.transform = `translate(${p.x.toFixed(1)}px, ${p.y.toFixed(1)}px) translate(-50%, -100%)`;
    const st = WOA.stateOf(id);
    const text = st === 'needs' ? `${WOA.data.CAST[id].name} · needs you` : WOA.data.CAST[id].name;
    const key = text + st + WOA.selected;
    if (t.last !== key) {
      t.last = key;
      t.name.textContent = text;
      t.dot.style.background = DOT[st];
      t.el.classList.toggle('needs', st === 'needs');
      t.el.classList.toggle('sel', WOA.selected === id);
    }
  }
  for (const { el, r, roofTop } of roomEls) {
    if (r.kind === 'house') {
      const H = HOUSES[r.id];
      tmp.set(r.x, H.lift < 0.5 ? roofTop : H.upper && H.view === 'upper' ? H.top + 0.6 : FLOOR_H + r.wallH + 0.6, r.z);
    } else tmp.set(r.x, 3.4, r.z);
    const p = project(tmp);
    const show = p.ok && dist < 160;
    el.style.display = show ? '' : 'none';
    if (show) el.style.transform = `translate(${p.x.toFixed(1)}px, ${p.y.toFixed(1)}px) translate(-50%, -50%)`;
  }
}

/* ================================================================ smoke, embers, sparks */
function points(n, color, size, map, opacity, height) {
  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.BufferAttribute(new Float32Array(n * 3), 3));
  const p = new THREE.Points(geo, new THREE.PointsMaterial({ color, size, map, transparent: true, opacity, depthWrite: false, blending: map ? THREE.NormalBlending : THREE.AdditiveBlending }));
  p.frustumCulled = false;
  p.userData.seed = Float32Array.from({ length: n }, () => Math.random());
  p.userData.h = Float32Array.from({ length: n }, () => Math.random() * height);
  p.userData.top = height;
  p.visible = !REDUCE;
  scene.add(p);
  return p;
}
const SMOKES = [{ at: chimneyTop, p: points(30, '#d8cfc6', 2.2, TEX.soft, 0.5, 9), heat: true }];
for (const H of Object.values(HOUSES)) {
  if (!H.roof.smokeAt) continue;
  H.g.updateMatrixWorld(true);
  const w = H.roof.R.localToWorld(new THREE.Vector3(...H.roof.smokeAt));
  SMOKES.push({ at: w, p: points(14, '#d8cfc6', 1.4, TEX.soft, 0.45, 5), house: H });
}
const embers = points(60, '#ffb04a', 0.11, null, 0.9, 4);
const sparks = [];
for (let i = 0; i < 4; i++) {
  const sp = new THREE.Sprite(new THREE.SpriteMaterial({ map: TEX.spark, color: i % 2 ? '#ffd27a' : '#ffffff', transparent: true, opacity: 0, depthWrite: false, blending: THREE.AdditiveBlending }));
  sp.scale.setScalar(0.25);
  deskF.g.add(sp);
  sparks.push(sp);
}

/* ================================================================ lights stay put
   three.js rebuilds every material when the number of visible lights changes. Lights that hung on folding walls,
   lifting roofs or upper floors switched with them, and the whole town flickered while the camera moved.
   Now every static light lives at the scene root; one whose part of a house is hidden is dimmed to zero instead. */
const PARKED = [];
{
  const toggles = new Set();
  for (const H of Object.values(HOUSES)) {
    toggles.add(H.roof.R);
    for (const sd of Object.values(H.sides)) toggles.add(sd.up);
    if (H.upper) { toggles.add(H.upper.U); for (const sd of Object.values(H.upper.sides)) toggles.add(sd.up); }
  }
  scene.updateMatrixWorld(true);
  const found = [];
  scene.traverse((o) => { if (o.isPointLight) found.push(o); });
  for (const l of found) {
    const anc = [];
    let actor = false;
    for (let o = l.parent, d = 0; o && d < 40; o = o.parent, d++) { if (toggles.has(o)) anc.push(o); if (o.userData.agentId) actor = true; }
    if (actor) continue;
    scene.attach(l);
    if (anc.length) PARKED.push({ l, anc, base: l.intensity });
  }
}
function updateParked() {
  for (const p of PARKED) {
    const on = p.anc.every((g) => g.visible);
    if (!on) p.l.intensity = 0;
    else if (p.l.intensity === 0) p.l.intensity = p.base;
  }
}

/* ================================================================ effects: fire glow and embers from every brazier, dust in the
   sunlight, falling leaves. They live on their own layer, so the line pass never draws them. */
const FX = 1;
scene.updateMatrixWorld(true);
const EMBER_SRC = [];
for (const { f, s } of FLAMES) {
  if (s < 1.3) continue;
  let o = f, moving = false;
  for (let d = 0; o && d < 40; d++) { if (o.userData.movesWithWall === true) moving = true; o = o.parent; }
  if (!moving) EMBER_SRC.push(f.getWorldPosition(new THREE.Vector3()));
}
function emberCloud(n) {
  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.BufferAttribute(new Float32Array(n * 3), 3));
  geo.setAttribute('color', new THREE.BufferAttribute(new Float32Array(n * 3), 3));
  const p = new THREE.Points(geo, new THREE.PointsMaterial({ size: 0.09, map: TEX.soft, vertexColors: true, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, toneMapped: false }));
  p.frustumCulled = false;
  p.visible = !REDUCE;
  scene.add(p);
  return p;
}
const fireEmbers = emberCloud(Math.max(1, EMBER_SRC.length * 7));
const fe = { src: Float32Array.from({ length: fireEmbers.geometry.attributes.position.count }, (_, i) => i % Math.max(1, EMBER_SRC.length)), life: Float32Array.from({ length: fireEmbers.geometry.attributes.position.count }, () => Math.random()), sd: Float32Array.from({ length: fireEmbers.geometry.attributes.position.count }, () => Math.random()) };
// motes of dust that catch the low sun, drifting in a box that follows the camera's target
const MOTES = 240, motes = new THREE.Points(new THREE.BufferGeometry(), new THREE.PointsMaterial({ size: 0.07, map: TEX.soft, color: '#ffe2b0', transparent: true, opacity: 0.75, depthWrite: false, blending: THREE.AdditiveBlending }));
motes.geometry.setAttribute('position', new THREE.BufferAttribute(new Float32Array(MOTES * 3), 3));
const moteSeed = Float32Array.from({ length: MOTES * 3 }, () => Math.random());
motes.frustumCulled = false;
motes.visible = !REDUCE;
scene.add(motes);
// leaves falling, red and gold like the groves inside the walls
const LEAVES = 80;
const leafGeo = new THREE.PlaneGeometry(0.16, 0.1);
const leaves = new THREE.InstancedMesh(leafGeo, toon('#ffffff', { side: THREE.DoubleSide }), LEAVES);
const leafState = [];
for (let i = 0; i < LEAVES; i++) { leaves.setColorAt(i, _c.set(pick([COL.autumn1, COL.autumn2, COL.autumn3, '#c9a03a']))); leafState.push({ x: rr(-30, 30), y: rr(0, 12), z: rr(-30, 30), r: rr(0, 6), v: rr(0.5, 0.9), w: rr(1, 3) }); }
leaves.instanceColor.needsUpdate = true;
leaves.frustumCulled = false;
leaves.visible = !REDUCE;
scene.add(leaves);
const leafM = new THREE.Matrix4(), leafQ = new THREE.Quaternion(), leafE = new THREE.Euler(), leafP = new THREE.Vector3(), leafS = new THREE.Vector3(1, 1, 1);
function updateFX(t, dt) {
  const fp = fireEmbers.geometry.attributes.position, fc = fireEmbers.geometry.attributes.color;
  for (let i = 0; i < fp.count; i++) {
    const s = EMBER_SRC[fe.src[i]];
    if (!s) break;
    fe.life[i] += dt * (0.35 + fe.sd[i] * 0.4);
    if (fe.life[i] > 1) fe.life[i] -= 1;
    const l = fe.life[i], sd = fe.sd[i];
    fp.setXYZ(i, s.x + Math.sin(t * (1 + sd) + sd * 20) * 0.25 * l, s.y + 0.2 + l * 2.2, s.z + Math.cos(t * (0.8 + sd) + sd * 9) * 0.25 * l);
    const k = (1 - l) * (0.6 + 0.4 * Math.sin(t * 13 + sd * 30)) * 2.2;
    fc.setXYZ(i, k, k * 0.48, k * 0.16);
  }
  fp.needsUpdate = true; fc.needsUpdate = true;
  const mp = motes.geometry.attributes.position, c = controls.target;
  for (let i = 0; i < MOTES; i++) {
    const a = moteSeed[i * 3], b = moteSeed[i * 3 + 1], h = moteSeed[i * 3 + 2];
    const x = ((a * 44 + t * 0.25 * (b - 0.5) - c.x) % 44 + 66) % 44 - 22, z = ((b * 44 + t * 0.18 * (a - 0.3) - c.z) % 44 + 66) % 44 - 22;
    mp.setXYZ(i, c.x + x, 0.6 + h * 9 + Math.sin(t * 0.5 + a * 20) * 0.4, c.z + z);
  }
  mp.needsUpdate = true;
  for (let i = 0; i < LEAVES; i++) {
    const L = leafState[i];
    L.y -= dt * L.v;
    if (L.y < 0.05) { L.y = rr(8, 13); L.x = c.x + rr(-28, 28); L.z = c.z + rr(-28, 28); }
    leafP.set(L.x + Math.sin(t * 0.9 + L.r) * 0.9, L.y, L.z + Math.cos(t * 0.7 + L.r) * 0.6);
    leafE.set(t * L.w + L.r, t * 0.6 + L.r, Math.sin(t * 2 + L.r) * 1.2);
    leafM.compose(leafP, leafQ.setFromEuler(leafE), leafS);
    leaves.setMatrixAt(i, leafM);
  }
  leaves.instanceMatrix.needsUpdate = true;
}
// everything that is light, smoke, water or air goes on the effects layer
scene.traverse((o) => {
  const m = o.material;
  if (o.isPoints || o.isSprite || o.userData.noLine || (m && !Array.isArray(m) && (m.blending === THREE.AdditiveBlending || m.depthWrite === false))) o.layers.set(FX);
});
for (const ob of [cloudRing, leaves, skyDome]) ob.traverse((o) => o.layers.set(FX));
camera.layers.enable(FX);

/* ================================================================ compositing, after the way anime is shot:
   1. a pre-pass of normals and depth (effects left out) feeds a screen-space line pass: clean ink at silhouettes and creases,
      tinted from the colour under it, thinner with distance;
   2. the colour pass with MSAA; 3. lines; 4. bloom for fire, glass and magic; 5. tone map;
   6. grade: depth of field, a little chromatic fringe, teal in the shade and gold in the light, contrast, vignette, grain. */
const NMAT = new THREE.MeshNormalMaterial({ side: THREE.DoubleSide });
const nTarget = new THREE.WebGLRenderTarget(1, 1, { type: THREE.HalfFloatType });
nTarget.depthTexture = new THREE.DepthTexture(1, 1);
nTarget.depthTexture.type = THREE.UnsignedIntType;
const clearN = new THREE.Color(0.5, 0.5, 1.0), prevClear = new THREE.Color();
function renderNormals() {
  scene.overrideMaterial = NMAT;
  camera.layers.disable(FX);
  const au = renderer.shadowMap.autoUpdate;
  renderer.shadowMap.autoUpdate = false;
  renderer.getClearColor(prevClear);
  const pa = renderer.getClearAlpha();
  renderer.setClearColor(clearN, 1);
  renderer.setRenderTarget(nTarget);
  renderer.clear();
  renderer.render(scene, camera);
  renderer.setRenderTarget(null);
  renderer.setClearColor(prevClear, pa);
  renderer.shadowMap.autoUpdate = au;
  camera.layers.enable(FX);
  scene.overrideMaterial = null;
}
const composer = new EffectComposer(renderer, new THREE.WebGLRenderTarget(1, 1, { type: THREE.HalfFloatType, samples: 4 }));
composer.setPixelRatio(renderer.getPixelRatio());
composer.addPass(new RenderPass(scene, camera));
const VSQ = 'varying vec2 vUv; void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }';
const linePass = new ShaderPass({
  uniforms: { tDiffuse: { value: null }, tNormal: { value: nTarget.texture }, tDepth: { value: nTarget.depthTexture }, texel: { value: new THREE.Vector2() }, width: { value: 1 }, near: { value: 0.5 }, far: { value: 900 } },
  vertexShader: VSQ,
  fragmentShader: `#include <packing>
    uniform sampler2D tDiffuse, tNormal, tDepth; uniform vec2 texel; uniform float width, near, far; varying vec2 vUv;
    float vz(vec2 uv) { return -perspectiveDepthToViewZ(texture2D(tDepth, uv).x, near, far); }
    vec3 nr(vec2 uv) { return texture2D(tNormal, uv).xyz * 2.0 - 1.0; }
    void main() {
      vec4 c = texture2D(tDiffuse, vUv);
      float z = vz(vUv);
      if (z > far * 0.98) { gl_FragColor = c; return; }
      vec2 ox = vec2(texel.x * width, 0.0), oy = vec2(0.0, texel.y * width);
      float zl = vz(vUv - ox), zr = vz(vUv + ox), zu = vz(vUv + oy), zd = vz(vUv - oy);
      // silhouettes: neighbours fall away behind this pixel (second difference, so flat ground stays clean)
      float d2 = max(zl + zr - 2.0 * z, zu + zd - 2.0 * z) / z;
      float sil = smoothstep(0.012, 0.03, d2);
      // creases: the surface turns sharply
      vec3 n = nr(vUv);
      float cr = max(1.0 - dot(n, nr(vUv + ox)), 1.0 - dot(n, nr(vUv + oy)));
      float crease = smoothstep(0.28, 0.5, cr);
      float line = max(sil, crease) * (1.0 - 0.6 * smoothstep(70.0, 260.0, z));
      vec3 ink = c.rgb * vec3(0.26, 0.2, 0.24) + vec3(0.012, 0.004, 0.01);
      gl_FragColor = vec4(mix(c.rgb, ink, line * 0.9), c.a);
    }`,
});
composer.addPass(linePass);
const bloom = new UnrealBloomPass(new THREE.Vector2(window.innerWidth, window.innerHeight), 0.42, 0.55, 0.88);
composer.addPass(bloom);
composer.addPass(new OutputPass());
const gradePass = new ShaderPass({
  uniforms: { tDiffuse: { value: null }, tDepth: { value: nTarget.depthTexture }, texel: { value: new THREE.Vector2() }, near: { value: 0.5 }, far: { value: 900 }, focus: { value: 100 }, dof: { value: 3 }, time: { value: 0 }, ca: { value: 0.0024 } },
  vertexShader: VSQ,
  fragmentShader: `#include <packing>
    uniform sampler2D tDiffuse, tDepth; uniform vec2 texel; uniform float near, far, focus, dof, time, ca; varying vec2 vUv;
    float hash(vec2 p) { return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453); }
    void main() {
      float z = -perspectiveDepthToViewZ(texture2D(tDepth, vUv).x, near, far);
      float coc = clamp((abs(z - focus) / focus - 0.35) * 1.3, 0.0, 1.0) * dof;
      vec2 dc = vUv - 0.5, cao = dc * dot(dc, dc) * ca * 4.0;
      vec3 col;
      if (coc < 0.5) col = vec3(texture2D(tDiffuse, vUv + cao).r, texture2D(tDiffuse, vUv).g, texture2D(tDiffuse, vUv - cao).b);
      else {
        col = vec3(0.0);
        for (int i = 0; i < 12; i++) {
          float fi = float(i), r = sqrt((fi + 0.5) / 12.0) * coc, a = fi * 2.39996;
          vec2 o = vec2(cos(a), sin(a)) * r * texel;
          col += vec3(texture2D(tDiffuse, vUv + o + cao).r, texture2D(tDiffuse, vUv + o).g, texture2D(tDiffuse, vUv + o - cao).b);
        }
        col /= 12.0;
      }
      float l = dot(col, vec3(0.299, 0.587, 0.114));
      col = mix(vec3(l), col, 1.12);
      col = (col - 0.5) * 1.07 + 0.5;
      col *= mix(vec3(0.9, 0.97, 1.08), vec3(1.05, 1.0, 0.93), smoothstep(0.15, 0.75, l));
      col *= mix(0.8, 1.0, 1.0 - smoothstep(0.35, 0.95, length(dc * vec2(1.0, 0.8))));
      col += (hash(vUv / texel + fract(time) * 91.0) - 0.5) * 0.028;
      gl_FragColor = vec4(clamp(col, 0.0, 1.0), 1.0);
    }`,
});
composer.addPass(gradePass);
function sizePost() {
  const w = window.innerWidth, h = window.innerHeight, pr = renderer.getPixelRatio();
  renderer.setSize(w, h); composer.setSize(w, h); bloom.setSize(w, h);
  nTarget.setSize(Math.floor(w * pr), Math.floor(h * pr));
  linePass.uniforms.texel.value.set(1 / (w * pr), 1 / (h * pr));
  gradePass.uniforms.texel.value.copy(linePass.uniforms.texel.value);
  linePass.uniforms.width.value = Math.max(1, pr * 0.85);
  camera.aspect = w / h; camera.updateProjectionMatrix();
}
for (const u of [linePass.uniforms, gradePass.uniforms]) { u.near.value = camera.near; u.far.value = camera.far; }
sizePost();
window.addEventListener('resize', sizePost);

/* ================================================================ loop */
const clock = new THREE.Clock();
let last = 0;
const v2 = new THREE.Vector3();
let hidden = false;
document.addEventListener('visibilitychange', () => { hidden = document.hidden; });
function tick() {
  requestAnimationFrame(tick);
  if (hidden) return;
  const t = clock.getElapsedTime();
  const dt = Math.min(0.05, t - last);
  last = t;
  let working = 0;
  for (const id of ORDER) {
    const a = actors[id], c = a.c, st = WOA.agents[id];
    if (st.state === 'work' && st.arrived && !st.needs) working++;
    if (!WOA.paused && a.path.length) {
      const p = a.path[0];
      const dx = p.x - c.root.position.x, dz = p.z - c.root.position.z, d = Math.hypot(dx, dz), step = SPEED[id] * dt;
      if (d <= step) {
        c.root.position.x = p.x; c.root.position.z = p.z;
        a.path.shift();
        if (!a.path.length) { c.root.rotation.y = SPOTS[a.from].ry; WOA.arrive(id); }
      } else {
        c.root.position.x += dx / d * step; c.root.position.z += dz / d * step;
        let diff = Math.atan2(dx, dz) - c.root.rotation.y;
        diff = Math.atan2(Math.sin(diff), Math.cos(diff));
        c.root.rotation.y += diff * Math.min(1, dt * 10);
      }
    }
    const gy = groundY(c.root.position.x, c.root.position.z);
    c.root.position.y += (gy - c.root.position.y) * Math.min(1, dt * 12);
    const walking = a.path.length > 0;
    const mode = walking ? (WOA.paused ? 'idle' : 'walk') : st.needs ? 'needs' : SPOTS[st.spot].pose;
    pose(c, mode, t * (walking ? 1.25 : 1), a.phase);
    blinker(c, t);
    if (c.model) driveModel(c, mode, dt, walking ? null : st.spot);
  }
  // the furnace burns as hard as the team works
  const heat = 0.25 + working * 0.35;
  const flick = REDUCE ? 0 : Math.sin(t * 9) * 0.08 + Math.sin(t * 23) * 0.05;
  mouthMat.emissiveIntensity = 0.9 + heat * 1.4 + flick;
  coreMat.emissiveIntensity = 1.2 + heat * 1.8 + flick;
  fireLight.intensity = 8 + heat * 16 + flick * 20;
  for (const [dk, who] of [[deskF, 'frontend'], [deskB, 'backend']]) {
    const s = WOA.agents[who];
    const lit = s.state === 'work' && s.arrived;
    dk.screen.material.opacity += ((lit ? 1 : 0.3) - dk.screen.material.opacity) * Math.min(1, dt * 4);
    dk.light.intensity = lit ? 3.5 : 0;
  }
  updateHouses(dt);
  if (!REDUCE) {
    for (const { f, ph } of FLAMES) { const k = 1 + Math.sin(t * 11 + ph) * 0.16 + Math.sin(t * 27 + ph * 2) * 0.08; f.scale.set(1 / Math.sqrt(k), k, 1 / Math.sqrt(k)); }
    for (const fl of FIRE_LIGHTS) fl.l.intensity = fl.base * (1 + Math.sin(t * 9 + fl.ph) * 0.12 + Math.sin(t * 23 + fl.ph) * 0.06);
    hearthLight.intensity = 11 + Math.sin(t * 7) * 1.5;
    for (const s of SPINNERS) { s.o.rotation[s.axis] += dt * s.v; if (s.bob) s.o.position.y = s.y0 + Math.sin(t * 1.6) * 0.06; }
    const fe = WOA.agents.frontend;
    const smashing = fe.state === 'work' && fe.arrived && !fe.needs;
    const k = Math.abs(Math.sin(t * 5.2 + actors.frontend.phase));
    sparks.forEach((sp, i) => { const hit = smashing && k < 0.25; sp.material.opacity = hit ? 1 - k * 4 : 0; sp.position.set(-0.4 + i * 0.19, 0.95 + (i % 2) * 0.12 + (hit ? (0.25 - k) * 0.8 : 0), (i % 2) * 0.08 - 0.29); sp.material.rotation = t * 3 + i; });
    deskF.kb.position.y = deskF.kb.userData.y0 + (smashing && k < 0.2 ? 0.03 : 0);
    const ep = embers.geometry.attributes.position, eh = embers.userData.h, es = embers.userData.seed;
    for (let i = 0; i < ep.count; i++) {
      const sd = es[i];
      eh[i] += dt * (0.5 + sd * 0.7) * (0.5 + heat);
      if (eh[i] > embers.userData.top) eh[i] = 0;
      ep.setXYZ(i, emberBase.x + Math.sin(t * (0.6 + sd) + sd * 10) * 0.8 * sd, emberBase.y + eh[i], emberBase.z + Math.cos(t * 0.7 + sd * 7) * 0.5 * sd);
    }
    ep.needsUpdate = true;
    embers.material.opacity = Math.min(0.95, 0.2 + heat * 0.5);
    for (const S of SMOKES) {
      const P = S.p, pa = P.geometry.attributes.position, sh = P.userData.h, ss = P.userData.seed;
      const lifted = S.house ? S.house.lift : 0;
      P.visible = lifted < 0.5;
      const speed = S.heat ? 0.6 + heat : 0.7;
      for (let i = 0; i < pa.count; i++) {
        const sd = ss[i];
        sh[i] += dt * (0.5 + sd * 0.4) * speed;
        if (sh[i] > P.userData.top) sh[i] = 0;
        pa.setXYZ(i, S.at.x + Math.sin(sh[i] * 0.8 + sd * 6) * sh[i] * 0.16 + sh[i] * 0.3, S.at.y + sh[i], S.at.z + Math.cos(sh[i] * 0.6 + sd * 4) * sh[i] * 0.14);
      }
      pa.needsUpdate = true;
    }
    fallTex.offset.y = (fallTex.offset.y + dt * 1.6) % 1;
    waterTex.offset.x = (waterTex.offset.x + dt * 0.12) % 1;
    cloudRing.rotation.y += dt * 0.004;
    mists.forEach((m, i) => { m.material.opacity = 0.42 + Math.sin(t * 0.8 + i) * 0.1; });
    for (const b of CROWS) { const u = b.userData; u.a += dt * u.s; b.position.set(Math.cos(u.a) * u.r, u.y + Math.sin(u.a * 3) * 0.8, Math.sin(u.a) * u.r); b.rotation.y = -u.a; b.children[3].rotation.z = Math.sin(t * 10 + u.r) * 0.6; b.children[4].rotation.z = -Math.sin(t * 10 + u.r) * 0.6; }
    FLAGS.forEach((f, i) => { f.rotation.y = Math.sin(t * 2 + i) * 0.3; });
    skyBoat.position.y = -0.4 + Math.sin(t * 0.9) * 0.2;
    skyBoat.rotation.x = Math.sin(t * 0.7) * 0.03;
    { const u = airship.userData; u.a += dt * 0.022; airship.position.set(Math.cos(u.a) * u.r, u.y + Math.sin(t * 0.5) * 0.8, Math.sin(u.a) * u.r); airship.rotation.y = Math.atan2(-Math.cos(u.a), -Math.sin(u.a)); }
  }
  if (fly) {
    const k = Math.min(1, (performance.now() - fly.t0) / fly.dur);
    const e = k < 0.5 ? 4 * k * k * k : 1 - Math.pow(-2 * k + 2, 3) / 2;
    controls.target.lerpVectors(fly.ft, fly.tt, e);
    camera.position.lerpVectors(fly.fp, fly.tp, e);
    if (k >= 1) fly = null;
  } else if (WOA.following && WOA.selected) {
    actors[WOA.selected].c.root.getWorldPosition(v2);
    v2.y += 0.8;
    const delta = v2.sub(controls.target).multiplyScalar(REDUCE ? 1 : Math.min(1, dt * 4));
    controls.target.add(delta);
    camera.position.add(delta);
  }
  updateParked();
  controls.update();
  clampTarget();
  placeLabels();
  if (!REDUCE) updateFX(t, dt);
  skyDome.position.copy(camera.position);
  gradePass.uniforms.focus.value = camera.position.distanceTo(controls.target);
  gradePass.uniforms.time.value = REDUCE ? 0 : t;
  renderNormals();
  composer.render();
}
tick();
