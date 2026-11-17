/* ================================================================ the cast: five anime characters on a jointed rig.
   Hips, knees, shoulders and elbows all bend, so walking, sitting and working read like people, not dolls.
   Pieces that move together are merged per material at the end: each character costs a handful of draw calls. */
const CLOTH = new Map();
const cloth = (c) => { if (!CLOTH.has(c)) CLOTH.set(c, toon(c, { side: THREE.DoubleSide })); return CLOTH.get(c); };
const V3 = (x, y, z) => new THREE.Vector3(x, y, z);
const UPV = V3(0, 1, 0), FWD = V3(0, 0, 1);

// A tube along a curve that narrows from r0 to r1: hair locks, ears, tusks, fingers, straps.
// ax/ay flatten the cross-section; `side` fixes which way the flat side faces.
function taperTube(pts, r0, r1 = 0, o = {}) {
  const curve = new THREE.CatmullRomCurve3(pts, false, 'centripetal');
  const seg = o.seg || 8, rad = o.rad || 6, ax = o.ax || 1, ay = o.ay || 1, side = o.side || FWD;
  const pos = [], uv = [], idx = [];
  const T = new THREE.Vector3(), N = new THREE.Vector3(), B = new THREE.Vector3();
  for (let i = 0; i <= seg; i++) {
    const t = i / seg, P = curve.getPointAt(t);
    curve.getTangentAt(t, T);
    N.crossVectors(T, side);
    if (N.lengthSq() < 1e-6) N.crossVectors(T, UPV);
    N.normalize();
    B.crossVectors(T, N).normalize();
    const r = r0 + (r1 - r0) * Math.pow(t, o.pow || 1);
    for (let j = 0; j <= rad; j++) {
      const a = j / rad * PI * 2, cx = Math.cos(a) * r * ax, cy = Math.sin(a) * r * ay;
      pos.push(P.x + N.x * cx + B.x * cy, P.y + N.y * cx + B.y * cy, P.z + N.z * cx + B.z * cy);
      uv.push(j / rad, t);
    }
  }
  for (let i = 0; i < seg; i++) for (let j = 0; j < rad; j++) { const a = i * (rad + 1) + j, b = a + rad + 1; idx.push(a, a + 1, b, b, a + 1, b + 1); }
  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
  geo.setAttribute('uv', new THREE.Float32BufferAttribute(uv, 2));
  geo.setIndex(idx);
  geo.computeVertexNormals();
  return geo;
}
// A turned shell from a profile of [radius, y] pairs, listed bottom to top (so normals face out).
function lathe(prof, seg = 18, p0 = 0, pl = PI * 2) {
  return new THREE.LatheGeometry(prof.map(([r, y]) => new THREE.Vector2(Math.max(0.002, r), y)), seg, p0, pl);
}
// The lowest ring of a shell hangs in uneven rags.
function tatter(geo, nPts, amt, seed = 3, closed = true) {
  const p = geo.attributes.position, seg = p.count / nPts - 1;
  let s = seed;
  const r2 = () => ((s = (s * 16807) % 2147483647) / 2147483647);
  const drops = [];
  for (let i = 0; i <= seg; i++) drops.push((i % 2 ? 1 : 0.2) * amt * (0.35 + r2() * 0.9));
  if (closed) drops[seg] = drops[0];
  for (let i = 0; i <= seg; i++) {
    const k = i * nPts;
    p.setY(k, p.getY(k) - drops[i]);
    if (nPts > 2) p.setY(k + 1, p.getY(k + 1) - drops[i] * 0.3);
  }
  geo.computeVertexNormals();
  return geo;
}
function add(parent, geo, mat, x = 0, y = 0, z = 0, cast = true) { const m = mesh(geo, mat, cast); m.position.set(x, y, z); parent.add(m); return m; }
function ball(parent, r, mat, x, y, z, sx = 1, sy = 1, sz = 1) { const m = add(parent, new THREE.SphereGeometry(r, 14, 10), mat, x, y, z); m.scale.set(sx, sy, sz); return m; }
// a straight limb piece hanging down from its joint
function limbGeo(len, r0, r1, seg = 10) { const g = new THREE.CylinderGeometry(r0, r1, len, seg); g.translate(0, -len / 2, 0); return g; }

// Merge every rigid piece under one joint by material, so a character draws in a few calls.
function consolidate(g) {
  for (const ch of g.children) if (!ch.isMesh && ch.children.length) consolidate(ch);
  const buckets = new Map();
  for (const ch of [...g.children]) {
    if (!ch.isMesh || ch.isInstancedMesh || ch.children.length || Array.isArray(ch.material) || ch.userData.keep) continue;
    ch.updateMatrix();
    const src = ch.geometry.index ? ch.geometry.toNonIndexed() : ch.geometry.clone();
    for (const k of Object.keys(src.attributes)) if (!['position', 'normal', 'uv'].includes(k)) src.deleteAttribute(k);
    if (!src.attributes.uv) src.setAttribute('uv', new THREE.Float32BufferAttribute(new Float32Array(src.attributes.position.count * 2), 2));
    if (!src.attributes.normal) src.computeVertexNormals();
    src.clearGroups();
    src.applyMatrix4(ch.matrix);
    const key = ch.material.uuid + (ch.castShadow ? 's' : '');
    if (!buckets.has(key)) buckets.set(key, { m: ch.material, cast: ch.castShadow, geos: [] });
    buckets.get(key).geos.push(src);
    g.remove(ch);
  }
  for (const { m, cast, geos } of buckets.values()) {
    const merged = geos.length === 1 ? geos[0] : mergeGeometries(geos, false);
    if (!merged) continue;
    const mm = new THREE.Mesh(merged, m);
    mm.castShadow = cast;
    mm.receiveShadow = true;
    g.add(mm);
  }
}

/* ---------- painted patterns for clothes and armour */
TEX.scales = canvasTex(128, 128, (g, W, H) => {
  g.fillStyle = '#2c2c34'; g.fillRect(0, 0, W, H);
  for (let r = 0; r < 9; r++) for (let c = 0; c < 9; c++) {
    const x = c * 16 + (r % 2) * 8, y = r * 15;
    g.fillStyle = (r + c) % 3 ? '#4a4a56' : '#565664';
    g.beginPath(); g.arc(x, y, 9, 0, PI); g.fill();
    g.strokeStyle = '#1c1c22'; g.lineWidth = 2; g.beginPath(); g.arc(x, y, 9, 0, PI); g.stroke();
    g.fillStyle = 'rgba(255, 255, 255, 0.18)'; g.fillRect(x - 4, y + 2, 5, 2);
  }
});
TEX.tabard = canvasTex(128, 256, (g, W, H) => {
  g.fillStyle = '#6e1c1e'; g.fillRect(0, 0, W, H);
  g.fillStyle = 'rgba(30, 6, 8, 0.35)'; for (let i = 0; i < 6; i++) g.fillRect(tr(0, W), 0, 3, H);
  g.strokeStyle = '#e6dcc4'; g.lineWidth = 5;
  for (let y = 30; y < H; y += 46) { g.beginPath(); g.moveTo(W / 2, y - 18); g.lineTo(W / 2 + 18, y); g.lineTo(W / 2, y + 18); g.lineTo(W / 2 - 18, y); g.closePath(); g.stroke(); g.fillStyle = '#e6dcc4'; g.fillRect(W / 2 - 3, y - 3, 6, 6); }
  g.fillRect(10, 0, 4, H); g.fillRect(W - 14, 0, 4, H);
});
TEX.sash = canvasTex(128, 64, (g, W, H) => {
  g.fillStyle = '#6b3a8f'; g.fillRect(0, 0, W, H);
  g.fillStyle = '#e0b04a'; for (let x = 0; x < W; x += 16) { g.beginPath(); g.moveTo(x, H / 2); g.lineTo(x + 8, H / 2 - 8); g.lineTo(x + 16, H / 2); g.lineTo(x + 8, H / 2 + 8); g.fill(); }
  g.fillStyle = '#3e1f58'; g.fillRect(0, 6, W, 4); g.fillRect(0, H - 10, W, 4);
});
TEX.fur = canvasTex(128, 128, (g, W, H) => {
  g.fillStyle = '#ffffff'; g.fillRect(0, 0, W, H);
  for (let i = 0; i < 260; i++) { g.strokeStyle = trnd() < 0.5 ? 'rgba(120, 110, 100, 0.25)' : 'rgba(255, 255, 255, 0.5)'; g.lineWidth = tr(1, 3); const x = tr(0, W), y = tr(0, H); g.beginPath(); g.moveTo(x, y); g.lineTo(x + tr(-4, 4), y + tr(6, 12)); g.stroke(); }
});
const furMat = (c) => toon(c, { map: TEX.fur });

/* ---------- anime faces, painted onto the head (the face sits at u = 0.25 of the sphere) */
function animeEye(g, x, y, side, f, closed) {
  const w = f.eyeW || 15, h = f.eyeH || 17;
  if (closed) { g.strokeStyle = f.lash; g.lineWidth = 5; g.lineCap = 'round'; g.beginPath(); g.moveTo(x - w, y + 3); g.quadraticCurveTo(x, y + 10, x + w, y + 3); g.stroke(); return; }
  const tilt = (f.tilt || 0.12) * side;
  g.save(); g.translate(x, y); g.rotate(tilt);
  g.fillStyle = '#fbf6ee'; g.beginPath(); g.ellipse(0, 2, w, h * 0.92, 0, 0, PI * 2); g.fill();
  const ig = g.createLinearGradient(0, -h, 0, h);
  ig.addColorStop(0, f.irisDark); ig.addColorStop(0.5, f.iris); ig.addColorStop(1, f.irisLight);
  g.fillStyle = ig; g.beginPath(); g.ellipse(-side * 1.5, 4, w * 0.74, h * 0.86, 0, 0, PI * 2); g.fill();
  g.fillStyle = 'rgba(10, 6, 16, 0.85)'; g.beginPath(); g.ellipse(-side * 1.5, 5, w * 0.3, h * 0.42, 0, 0, PI * 2); g.fill();
  g.fillStyle = 'rgba(255, 255, 255, 0.95)'; g.beginPath(); g.ellipse(-side * 1.5 - 5, -3, 3.6, 4.6, 0, 0, PI * 2); g.fill();
  g.beginPath(); g.arc(-side * 1.5 + 4, 11, 1.8, 0, PI * 2); g.fill();
  // a heavy upper lash with a flick at the outer corner, a thin lower lash
  g.strokeStyle = f.lash; g.lineCap = 'round'; g.lineWidth = 5.5;
  g.beginPath(); g.moveTo(-w - 2, -h * 0.1); g.quadraticCurveTo(0, -h - 6, w + 2, -h * 0.25); g.stroke();
  g.lineWidth = 3.5; g.beginPath(); g.moveTo(side * (w + 2), -h * 0.25); g.lineTo(side * (w + 8), -h * 0.55); g.stroke();
  g.lineWidth = 1.6; g.beginPath(); g.moveTo(-w * 0.6, h + 2); g.quadraticCurveTo(0, h + 5, w * 0.6, h + 2); g.stroke();
  g.restore();
  if (f.brow) {
    g.strokeStyle = f.brow; g.lineWidth = 4; g.lineCap = 'round';
    const yi = f.fierce ? y - h - 3 : y - h - 11, yo = f.fierce ? y - h - 13 : y - h - 9;
    g.beginPath(); g.moveTo(x - side * 13, yi); g.quadraticCurveTo(x, (yi + yo) / 2 - 3, x + side * 15, yo); g.stroke();
  }
}
function animeFace(f) {
  const draw = (closed, glowOnly) => canvasTex(512, 256, (g, W, H) => {
    g.fillStyle = glowOnly ? '#000000' : f.skin; g.fillRect(0, 0, W, H);
    const cx = W * 0.25, ey = H * 0.55, dx = f.eyeGap || 34;
    if (glowOnly) {
      // only what glows: tattoos, eye fire
      if (f.tattoo) { g.strokeStyle = f.tattoo; g.lineWidth = 3; g.lineCap = 'round'; for (const s of [-1, 1]) { g.beginPath(); g.moveTo(cx + s * (dx + 20), ey - 34); g.lineTo(cx + s * (dx + 24), ey + 4); g.lineTo(cx + s * (dx + 10), ey + 26); g.stroke(); g.beginPath(); g.moveTo(cx + s * (dx + 26), ey + 12); g.lineTo(cx + s * (dx + 34), ey + 22); g.stroke(); } g.beginPath(); g.moveTo(cx, ey - 58); g.lineTo(cx, ey - 40); g.stroke(); }
      if (f.glowEyes && !closed) for (const s of [-1, 1]) { g.fillStyle = f.glowEyes; g.shadowColor = f.glowEyes; g.shadowBlur = 12; g.beginPath(); g.ellipse(cx + s * dx, ey + 2, f.eyeW || 13, (f.eyeH || 10) * 0.7, s * 0.15, 0, PI * 2); g.fill(); g.shadowBlur = 0; }
      return;
    }
    if (f.skull) {
      for (const s of [-1, 1]) { g.fillStyle = '#1e1824'; g.beginPath(); g.ellipse(cx + s * 32, ey, 21, 23, s * 0.2, 0, PI * 2); g.fill(); }
      g.fillStyle = '#1e1824'; g.beginPath(); g.moveTo(cx, ey + 24); g.lineTo(cx - 8, ey + 40); g.lineTo(cx + 8, ey + 40); g.closePath(); g.fill();
      g.fillStyle = '#efe7d2'; g.fillRect(cx - 28, ey + 52, 56, 16);
      g.strokeStyle = '#1e1824'; g.lineWidth = 3; g.strokeRect(cx - 28, ey + 52, 56, 16);
      for (let i = -21; i <= 21; i += 7) { g.beginPath(); g.moveTo(cx + i, ey + 52); g.lineTo(cx + i, ey + 68); g.stroke(); }
      g.strokeStyle = 'rgba(30, 24, 36, 0.5)'; g.lineWidth = 2.5; g.beginPath(); g.moveTo(cx + 46, ey - 54); g.lineTo(cx + 56, ey - 34); g.lineTo(cx + 50, ey - 22); g.stroke();
      return;
    }
    // soft cheek shading and a fine nose line
    g.fillStyle = 'rgba(0, 0, 0, 0.06)'; for (const s of [-1, 1]) { g.beginPath(); g.ellipse(cx + s * (dx + 26), ey + 30, 24, 30, 0, 0, PI * 2); g.fill(); }
    if (f.blush) { g.fillStyle = f.blush; g.globalAlpha = 0.35; for (const s of [-1, 1]) { g.beginPath(); g.ellipse(cx + s * (dx + 8), ey + 26, 13, 6, 0, 0, PI * 2); g.fill(); } g.globalAlpha = 1; }
    if (f.glowEyes) {
      for (const s of [-1, 1]) { g.fillStyle = '#141018'; g.save(); g.translate(cx + s * dx, ey + 2); g.rotate(s * 0.15); g.beginPath(); g.ellipse(0, 0, (f.eyeW || 13) + 3, (f.eyeH || 10) * 0.8 + 2, 0, 0, PI * 2); g.fill(); g.restore(); }
      if (closed) for (const s of [-1, 1]) { g.strokeStyle = f.lash; g.lineWidth = 4; g.beginPath(); g.moveTo(cx + s * dx - 13, ey + 2); g.lineTo(cx + s * dx + 13, ey + 2); g.stroke(); }
      if (f.brow) for (const s of [-1, 1]) { g.strokeStyle = f.brow; g.lineWidth = 4; g.beginPath(); g.moveTo(cx + s * (dx - 14), ey - 10); g.lineTo(cx + s * (dx + 16), ey - 20); g.stroke(); }
    } else for (const s of [-1, 1]) animeEye(g, cx + s * dx, ey, s, f, closed);
    g.strokeStyle = 'rgba(70, 36, 30, 0.45)'; g.lineWidth = 2.5; g.beginPath(); g.moveTo(cx + 2, ey + 22); g.lineTo(cx - 2, ey + 29); g.stroke();
    if (f.bandage) { g.fillStyle = '#f2ece0'; g.save(); g.translate(cx, ey + 20); g.rotate(-0.25); g.fillRect(-16, -5, 32, 10); g.strokeStyle = '#c8bfae'; g.lineWidth = 1.5; for (const xx of [-8, 0, 8]) { g.beginPath(); g.moveTo(xx, -5); g.lineTo(xx, 5); g.stroke(); } g.restore(); }
    if (f.scars) { g.strokeStyle = '#a8706a'; g.lineCap = 'round'; g.lineWidth = 4; g.beginPath(); g.moveTo(cx + dx + 4, ey - 36); g.lineTo(cx + dx - 6, ey + 30); g.stroke(); g.lineWidth = 3; g.beginPath(); g.moveTo(cx - dx - 20, ey + 26); g.lineTo(cx - dx + 4, ey + 40); g.stroke(); }
    if (f.tattoo) { g.strokeStyle = f.tattoo; g.lineWidth = 3; g.lineCap = 'round'; for (const s of [-1, 1]) { g.beginPath(); g.moveTo(cx + s * (dx + 20), ey - 34); g.lineTo(cx + s * (dx + 24), ey + 4); g.lineTo(cx + s * (dx + 10), ey + 26); g.stroke(); g.beginPath(); g.moveTo(cx + s * (dx + 26), ey + 12); g.lineTo(cx + s * (dx + 34), ey + 22); g.stroke(); } g.beginPath(); g.moveTo(cx, ey - 58); g.lineTo(cx, ey - 40); g.stroke(); }
    const my = ey + 44;
    g.strokeStyle = '#5a2a2a'; g.fillStyle = '#6a2830'; g.lineWidth = 3; g.lineCap = 'round';
    if (f.mouth === 'smirk') { g.beginPath(); g.moveTo(cx - 9, my); g.quadraticCurveTo(cx + 2, my + 4, cx + 11, my - 4); g.stroke(); }
    else if (f.mouth === 'grim') { g.beginPath(); g.moveTo(cx - 12, my + 2); g.lineTo(cx + 12, my + 1); g.stroke(); }
    else if (f.mouth === 'fang') { g.beginPath(); g.moveTo(cx - 10, my); g.quadraticCurveTo(cx, my + 6, cx + 10, my); g.stroke(); g.fillStyle = '#ffffff'; g.beginPath(); g.moveTo(cx + 4, my + 2); g.lineTo(cx + 7, my + 9); g.lineTo(cx + 9, my + 2); g.fill(); }
    else { g.beginPath(); g.moveTo(cx - 7, my); g.quadraticCurveTo(cx, my + 5, cx + 7, my); g.stroke(); }
  });
  const out = { open: draw(false, false), closed: draw(true, false) };
  if (f.tattoo || f.glowEyes) { out.gOpen = draw(false, true); out.gClosed = draw(true, true); }
  return out;
}

/* ---------- the rig. Feet at y = 0, facing +z. arms[0] is the left arm (+x), arms[1] the right. */
function rig(o) {
  const H = o.H, hu = o.hu || H / 6.4;
  const hipY = o.hipY || H * 0.5;
  const ankle = 0.075 * H / 1.8, legL = hipY - ankle;
  const thigh = legL * 0.5, shin = legL * 0.5;
  const neckY = H - hu * 1.12, torsoLen = neckY - hipY;
  const R = hu * 0.5, sw = o.sw, hw = o.hw;
  const upper = o.upper || H * 0.17, fore = o.fore || H * 0.15;
  const root = new THREE.Group(), body = new THREE.Group();
  body.position.y = hipY;
  root.add(body);
  const spine = new THREE.Group();
  body.add(spine);
  const neck = at(new THREE.Group(), 0, torsoLen, 0);
  spine.add(neck);
  const head = at(new THREE.Group(), 0, hu * 0.16, 0);
  neck.add(head);
  const c = { root, body, spine, neck, head, R, hu, H, hipY, sw, hw, thigh, shin, upper, fore, torsoLen, seatY: Math.max(0.5, shin + ankle - 0.02), legs: [], arms: [], labelUp: R * 2.6 };
  for (const sd of [1, -1]) {
    const sh = at(new THREE.Group(), sd * sw, torsoLen - hu * 0.32, 0);
    spine.add(sh);
    const el = at(new THREE.Group(), 0, -upper, 0);
    sh.add(el);
    const hand = at(new THREE.Group(), 0, -fore, 0);
    el.add(hand);
    c.arms.push({ sh, el, hand, sd });
    const hip = at(new THREE.Group(), sd * hw * 0.6, 0, 0);
    body.add(hip);
    const knee = at(new THREE.Group(), 0, -thigh, 0);
    hip.add(knee);
    const foot = at(new THREE.Group(), 0, -shin, 0);
    knee.add(foot);
    c.legs.push({ hip, knee, foot, sd });
  }
  return c;
}
// the head: a face sphere with a pointed chin, ears, and the face material that blinks
function makeHead(c, f, o = {}) {
  const R = c.R;
  const faces = animeFace(f);
  const faceMat = toon('#ffffff', { map: faces.open });
  if (faces.gOpen) { faceMat.emissive = new THREE.Color('#ffffff'); faceMat.emissiveMap = faces.gOpen; faceMat.emissiveIntensity = 1.6; }
  const skin = toon(f.skin);
  const sk = add(c.head, new THREE.SphereGeometry(R, 32, 20), faceMat, 0, R * 0.95, 0);
  sk.scale.set(0.9, 1.0, 0.94);
  sk.userData.keep = true;
  const chin = add(c.head, new THREE.ConeGeometry(R * (o.jaw || 0.46), R * 0.52, 14), skin, 0, R * 0.12, R * 0.16);
  chin.rotation.x = PI;
  chin.scale.z = 0.85;
  add(c.head, limbGeo(c.hu * 0.32, R * 0.36, R * 0.42), skin, 0, R * 0.25, -R * 0.05);
  c.faceMat = faceMat; c.faces = faces; c.skin = skin;
  c.hc = V3(0, R * 0.95, 0);
  return { sk, skin };
}
// ears: long and pointed (elf), long and drooping (goblin), short and pointed (orc)
function ears(c, mat, kind) {
  const R = c.R, h = c.hc;
  for (const sd of [1, -1]) {
    let tip, r0 = R * 0.17;
    if (kind === 'elf') tip = [sd * R * 1.95, h.y + R * 0.55, -R * 0.3];
    else if (kind === 'goblin') { tip = [sd * R * 2.35, h.y + R * 0.05, -R * 0.3]; r0 = R * 0.22; }
    else tip = [sd * R * 1.45, h.y + R * 0.35, -R * 0.2];
    const pts = [V3(sd * R * 0.82, h.y - R * 0.05, -R * 0.06), V3((sd * R * 0.82 + tip[0]) / 2, (h.y + tip[1]) / 2 + R * 0.08, (tip[2] - R * 0.06) / 2), V3(...tip)];
    add(c.head, taperTube(pts, r0, 0.004, { ax: 1, ay: 0.38, side: FWD, rad: 6 }), mat);
  }
}
// hair locks: each from a root point on the scalp to a tip, with a bend through a middle point
function locks(c, mat, list, r = 0.24) {
  for (const L of list) {
    const pts = L.map((p) => V3(p[0] * c.R, c.hc.y + p[1] * c.R, p[2] * c.R));
    add(c.head, taperTube(pts, c.R * (L.r || r), 0.003, { seg: 7, rad: 5, ax: 1, ay: 0.6 }), mat);
  }
}
// a cap of hair over the top and back of the head, the hairline raised at the front
function hairCap(c, mat, back = 0.62) {
  const cap = add(c.head, new THREE.SphereGeometry(c.R * 1.07, 24, 14, 0, PI * 2, 0, PI * back), mat, 0, c.hc.y, 0);
  // tipped back: the hairline sits high on the forehead and low at the nape
  cap.scale.set(0.95, 1.02, 0.92);
  cap.rotation.x = -0.5;
  return cap;
}
// bangs over the forehead
function bangs(c, mat, n = 6, len = 0.75, spread = 0.75) {
  const list = [];
  for (let i = 0; i < n; i++) {
    const u = (i / (n - 1) - 0.5) * 2 * spread;
    list.push([[u * 0.62, 0.78, 0.56], [u * 0.78, 0.45, 0.92], [u * 0.86 + u * 0.1, 0.78 - len, 0.98]]);
  }
  locks(c, mat, list, 0.2);
}
// body parts
function torso(c, prof, mat, depth = 0.72, seg = 18) {
  const m = add(c.spine, lathe(prof, seg), mat);
  m.scale.z = depth;
  return m;
}
function arm(c, mat, r0, r1, handMat, o = {}) {
  for (const A of c.arms) {
    ball(A.sh, r0 * 1.15, o.shoulderMat || mat, 0, 0, 0);
    add(A.sh, limbGeo(c.upper, r0, r1 * 1.05), mat);
    ball(A.el, r1 * 1.05, mat, 0, 0, 0);
    add(A.el, limbGeo(c.fore, r1, r1 * 0.78), o.foreMat || mat);
    hand(c, A, handMat, r1 * 0.95, o.bony);
  }
}
function hand(c, A, mat, w, bony) {
  const h = A.hand;
  if (bony) {
    add(h, new THREE.BoxGeometry(w * 1.2, w * 0.9, w * 0.5), mat, 0, -w * 0.4, 0);
    for (let i = 0; i < 4; i++) add(h, taperTube([V3((i - 1.5) * w * 0.35, -w * 0.8, 0), V3((i - 1.5) * w * 0.38, -w * 1.5, w * 0.15), V3((i - 1.5) * w * 0.36, -w * 2.0, w * 0.35)], w * 0.1, w * 0.07, { seg: 3, rad: 4 }), mat);
    return;
  }
  add(h, rbox(w * 1.5, w * 1.6, w * 0.75, w * 0.25), mat, 0, -w * 0.75, 0.0);
  add(h, rbox(w * 0.45, w * 0.9, w * 0.45, w * 0.2), mat, A.sd * w * 0.62, -w * 0.55, w * 0.25).rotation.z = A.sd * 0.5;
}
function leg(c, mat, r0, r1, shinMat, bootMat, o = {}) {
  for (const L of c.legs) {
    ball(L.hip, r0 * 1.02, mat, 0, 0, 0);
    add(L.hip, limbGeo(c.thigh, r0, r1 * 1.08), mat);
    ball(L.knee, r1 * 1.05, shinMat || mat, 0, 0, 0);
    add(L.knee, limbGeo(c.shin, r1, r1 * 0.72), shinMat || mat);
    const ank = c.hipY - c.thigh - c.shin;
    if (o.bony) {
      add(L.foot, rbox(r1 * 1.1, r1 * 0.5, r1 * 2.6, r1 * 0.2), bootMat, 0, -ank + r1 * 0.25, r1 * 0.75);
      continue;
    }
    const bw = r1 * (o.bootW || 1.7), fh = bw * 0.55;
    add(L.foot, rbox(bw, c.shin * 0.42 + ank * 0.5, bw * 1.05, bw * 0.25), bootMat, 0, -ank * 0.25 + c.shin * 0.12, 0);
    add(L.foot, rbox(bw, fh, bw * 2.0, bw * 0.25), bootMat, 0, -ank + fh / 2, bw * 0.45);
  }
}
// a belt as a ring around the waist, with buckles and pouches
function belt(c, y, rx, rz, mat, o = {}) {
  const b = add(c.spine, new THREE.TorusGeometry(1, o.t || 0.022, 6, 28), mat, 0, y, 0);
  b.rotation.x = PI / 2 + (o.tilt || 0);
  b.scale.set(rx, rz, 1);
  if (o.buckle) add(c.spine, rbox(0.07, 0.06, 0.02, 0.008), M.gold, 0, y + Math.sin(o.tilt || 0) * rz, rz + 0.012);
  return b;
}

/* ---------- the five */
const BUILD = {
  // Lead/PM: a goblin captain. Wide-brim hat with a buckled band, green eyes that glow under the brim,
  // long black hair, a dark strapped coat with a white collar, a sword across the back, a glowing charm.
  lead: () => {
    const c = rig({ H: 1.32, hu: 1.32 / 5.0, sw: 0.15, hw: 0.11, upper: 0.21, fore: 0.19, hipY: 0.6 });
    const f = { skin: '#8aa46a', lash: '#16121a', glowEyes: '#a8ff6a', eyeW: 12, eyeH: 9, brow: '#141016', mouth: 'smirk', eyeGap: 33 };
    const { skin } = makeHead(c, f, { jaw: 0.42 });
    ears(c, skin, 'goblin');
    const hair = toon('#141218');
    hairCap(c, hair, 0.6);
    const back = [];
    for (let i = 0; i < 9; i++) { const a = PI * 0.62 + i / 8 * PI * 0.76; const x = Math.cos(a), z = Math.sin(a); back.push([[x * 0.92, 0.25, -Math.abs(z) * 0.9], [x * 1.05, -0.6, -Math.abs(z) * 1.0 - 0.15], [x * 1.0, -1.7 - (i % 3) * 0.25, -Math.abs(z) * 0.95 - 0.35]]); }
    locks(c, hair, back, 0.26);
    bangs(c, hair, 5, 0.55, 0.7);
    // the hat
    const R = c.R, hy = c.hc.y + R * 0.78;
    const hat = new THREE.Group();
    hat.position.set(0, hy, -R * 0.05);
    hat.rotation.x = -0.12;
    c.head.add(hat);
    const hm = toon('#2a2530');
    add(hat, new THREE.CylinderGeometry(R * 2.5, R * 2.5, R * 0.08, 28), hm, 0, 0, 0);
    add(hat, lathe([[R * 2.5, -R * 0.02], [R * 2.4, R * 0.02], [R * 1.05, R * 0.06]], 28), hm);
    add(hat, new THREE.CylinderGeometry(R * 0.82, R * 1.02, R * 1.05, 20), hm, 0, R * 0.55, 0);
    add(hat, new THREE.CylinderGeometry(R * 1.04, R * 1.04, R * 0.26, 20), toon('#5a3a26'), 0, R * 0.17, 0);
    add(hat, rbox(R * 0.36, R * 0.3, R * 0.08, R * 0.03), M.gold, 0, R * 0.17, R * 1.03);
    add(hat, rbox(R * 0.18, R * 0.12, R * 0.09, R * 0.02), M.dark, 0, R * 0.17, R * 1.06);
    c.labelUp = R * 4.0;
    // body: dark coat open at the front over a waistcoat, white high collar, straps and buckles
    const T = c.torsoLen, coat = cloth('#2b2a35'), vest = toon('#4a2a2e');
    torso(c, [[0.12, -0.08], [0.115, 0.05], [0.1, T * 0.4], [0.13, T * 0.75], [0.12, T * 0.95], [0.05, T + 0.01]], vest, 0.75);
    const coatG = lathe([[0.2, -0.46], [0.17, -0.2], [0.135, 0.02], [0.115, T * 0.4], [0.145, T * 0.78], [0.13, T * 0.96], [0.06, T + 0.02]], 22, 0.42, PI * 2 - 0.84);
    tatter(coatG, 7, 0.05, 11, false);
    add(c.spine, coatG, coat).scale.z = 0.8;
    add(c.spine, lathe([[0.07, T - 0.01], [0.075, T + 0.06], [0.085, T + 0.11]], 18, PI * 0.15, PI * 1.7), cloth('#ece8e0'));
    for (const sd of [1, -1]) { const s = add(c.spine, rbox(0.03, T * 0.95, 0.012, 0.005), toon('#4a3226'), sd * 0.04, T * 0.5, 0.1); s.rotation.z = sd * 0.42; }
    add(c.spine, rbox(0.04, 0.035, 0.015, 0.006), M.gold, 0, T * 0.52, 0.112);
    belt(c, 0.03, 0.125, 0.1, toon('#4a3226'), { buckle: true });
    // the charm: a green crystal at the belt that glows
    const charm = add(c.spine, new THREE.OctahedronGeometry(0.028, 0), glow('#7dff9a', 2.4), 0.09, -0.02, 0.07, false);
    charm.scale.y = 1.6;
    const ch = new THREE.Sprite(new THREE.SpriteMaterial({ map: TEX.soft, color: '#7dff9a', transparent: true, opacity: 0.6, depthWrite: false, blending: THREE.AdditiveBlending }));
    ch.position.set(0.09, -0.02, 0.08); ch.scale.setScalar(0.22); c.spine.add(ch);
    // sword across the back
    const sw = new THREE.Group(); sw.position.set(0, T * 0.5, -0.12); sw.rotation.z = 0.7; c.spine.add(sw);
    add(sw, rbox(0.05, 0.62, 0.03, 0.01), toon('#2a1e1a'), 0, 0, 0);
    add(sw, rbox(0.16, 0.025, 0.04, 0.008), M.gold, 0, 0.32, 0);
    add(sw, new THREE.CylinderGeometry(0.014, 0.014, 0.12, 8), toon('#4a3226'), 0, 0.4, 0);
    ball(sw, 0.022, M.gold, 0, 0.47, 0);
    arm(c, coat, 0.045, 0.04, skin, { shoulderMat: coat });
    for (const A of c.arms) add(A.el, lathe([[0.065, -c.fore * 0.55], [0.05, -c.fore * 0.35]], 12), cloth('#2b2a35'));
    leg(c, toon('#3a3238'), 0.06, 0.05, toon('#3a3238'), toon('#3a2a22'), { bootW: 1.9 });
    // a rolled map in the left hand
    const map = add(c.arms[0].hand, new THREE.CylinderGeometry(0.025, 0.025, 0.3, 10), toon('#e6d9bc'), 0, -0.05, 0.03);
    map.rotation.x = PI / 2;
    map.userData.keep = true;
    c.gear = { map };
    return finish(c);
  },
  // Designer: an elf with dark skin, wild spiky black hair, purple eyes, gold hoops and chains with a skull,
  // a bandage across the nose, a dark jacket with a fur collar, a patterned purple sash, baggy wrapped trousers.
  designer: () => {
    const c = rig({ H: 1.78, sw: 0.19, hw: 0.13, hipY: 0.9 });
    const f = { skin: '#8a5a3c', lash: '#1a1016', iris: '#a066e0', irisDark: '#4a2a7a', irisLight: '#e0c4ff', brow: '#1a1218', mouth: 'smirk', bandage: true, eyeW: 14, eyeH: 14, tilt: 0.2 };
    const { skin } = makeHead(c, f);
    ears(c, skin, 'elf');
    const hair = toon('#1c1a22');
    hairCap(c, hair, 0.55);
    const spikes = [];
    for (let i = 0; i < 14; i++) {
      const a = i / 14 * PI * 2, up = 0.35 + (i % 3) * 0.2, x = Math.sin(a), z = Math.cos(a);
      if (z > 0.55) continue;
      spikes.push([[x * 0.75, 0.75, z * 0.6], [x * 1.15, 0.95 + up * 0.5, z * 0.85 - 0.2], [x * 1.55, 1.05 + up, z * 1.0 - 0.6]]);
    }
    for (let i = 0; i < 6; i++) { const x = (i / 5 - 0.5) * 1.4; spikes.push([[x * 0.6, 0.6, -0.8], [x * 0.8, 0.0, -1.1], [x * 0.9, -0.55 - (i % 2) * 0.2, -1.05]]); }
    locks(c, hair, spikes, 0.3);
    bangs(c, hair, 6, 0.6, 0.85);
    // gold hoops at the ears
    for (const sd of [1, -1]) { const e = add(c.head, new THREE.TorusGeometry(c.R * 0.16, c.R * 0.03, 6, 16), M.gold, sd * c.R * 0.9, c.hc.y - c.R * 0.42, -c.R * 0.1); e.rotation.y = PI / 2; }
    const T = c.torsoLen;
    torso(c, [[0.14, -0.06], [0.13, 0.06], [0.115, T * 0.35], [0.15, T * 0.72], [0.15, T * 0.9], [0.06, T + 0.01]], toon('#3b3743'), 0.68);
    const jacket = cloth('#2a2732');
    add(c.spine, lathe([[0.17, -0.02], [0.135, T * 0.3], [0.165, T * 0.72], [0.165, T * 0.9], [0.07, T + 0.02]], 22, 0.5, PI * 2 - 1.0), jacket).scale.z = 0.76;
    // fur collar: clumps around the neck and over the shoulders
    const fm = furMat('#d9d0c4');
    for (let i = 0; i < 14; i++) { const a = PI * 0.3 + i / 13 * PI * 1.4, x = Math.sin(a), z = Math.cos(a); ball(c.spine, 0.055, fm, x * 0.12, T - 0.02 + Math.abs(z) * 0.01, z * 0.09 - 0.01, 1.2, 0.8, 1.0); }
    // the sash, its knotted ends hanging at the hip
    const sash = toon('#ffffff', { map: TEX.sash });
    belt(c, 0.04, 0.15, 0.11, sash, { t: 0.04 });
    for (const [x, len, rz] of [[0.1, 0.32, 0.12], [0.13, 0.26, 0.28]]) { const e = add(c.spine, rbox(0.06, len, 0.015, 0.006), sash, x, 0.02 - len / 2, 0.08); e.rotation.z = rz; }
    // gold chains with a skull pendant
    for (const [dy, r] of [[0.1, 0.004], [0.17, 0.005]]) add(c.spine, taperTube([V3(0.07, T - 0.01, 0.03), V3(0.05, T - dy * 0.6, 0.1), V3(0, T - dy, 0.115), V3(-0.05, T - dy * 0.6, 0.1), V3(-0.07, T - 0.01, 0.03)], r, r, { seg: 10, rad: 4 }), M.gold);
    c.spine.add(at(skull(0.045), 0, T - 0.2, 0.12));
    arm(c, jacket, 0.05, 0.043, skin, { shoulderMat: jacket });
    for (const A of c.arms) add(A.el, lathe([[0.058, -c.fore * 0.62], [0.06, -c.fore * 0.48]], 12), toon('#1f1d26'));
    // baggy trousers gathered by wraps at the ankle
    const pants = toon('#26232b');
    leg(c, pants, 0.085, 0.07, pants, toon('#3a2a22'), { bootW: 1.4 });
    for (const L of c.legs) { for (let k = 0; k < 4; k++) add(L.knee, new THREE.TorusGeometry(0.052, 0.012, 5, 14), toon('#cbbfae'), 0, -c.shin * (0.55 + k * 0.08), 0).rotation.x = PI / 2 + (k % 2 ? 0.15 : -0.1); add(L.hip, lathe([[0.075, -c.thigh * 0.95], [0.1, -c.thigh * 0.5], [0.095, 0]], 14), pants); }
    // brush in the right hand, palette in the left
    const R2 = c.arms[1].hand, L2 = c.arms[0].hand;
    const brush = new THREE.Group(); brush.position.set(0, -0.07, 0.02); R2.add(brush);
    add(brush, new THREE.CylinderGeometry(0.008, 0.006, 0.32, 6), toon('#5a3a26'), 0, 0, 0.0).rotation.x = PI / 2;
    add(brush, new THREE.ConeGeometry(0.012, 0.05, 6), toon('#e05a4a'), 0, 0, 0.18).rotation.x = PI / 2;
    const pal = new THREE.Group(); pal.position.set(0, -0.08, 0.06); L2.add(pal);
    add(pal, new THREE.CylinderGeometry(0.11, 0.11, 0.012, 16), toon('#b08a5a'), 0, 0, 0).rotation.x = PI / 2;
    for (const [x, y, col] of [[-0.05, 0.04, '#e05a4a'], [0.0, 0.06, '#e8c860'], [0.05, 0.03, '#4a8ad0'], [0.04, -0.03, '#5ab060']]) add(pal, new THREE.SphereGeometry(0.016, 6, 4), toon(col), x, y, 0.01);
    c.gear = { brush, pal };
    return finish(c);
  },
  // Frontend dev: an orc warrior woman. Green skin with lime tattoos that glow, dark green hair with lime
  // streaks in a high ponytail, orange eyes, a white fur mantle, spiked dark pauldrons, belts and buckles,
  // gauntlets, a grey tunic, two swords.
  frontend: () => {
    const c = rig({ H: 1.92, sw: 0.2, hw: 0.14, hipY: 0.98 });
    const f = { skin: '#86a85e', lash: '#1a1410', iris: '#ff9a3a', irisDark: '#a0400a', irisLight: '#ffd59a', brow: '#21402c', mouth: 'fang', tattoo: '#c4ff5a', fierce: true, eyeW: 14, eyeH: 12, tilt: 0.25 };
    const { skin } = makeHead(c, f, { jaw: 0.5 });
    ears(c, skin, 'orc');
    // little tusks
    for (const sd of [1, -1]) add(c.head, taperTube([V3(sd * c.R * 0.24, c.hc.y - c.R * 0.6, c.R * 0.66), V3(sd * c.R * 0.28, c.hc.y - c.R * 0.42, c.R * 0.76)], c.R * 0.06, 0.003, { seg: 3, rad: 5 }), M.bone);
    const hair = toon('#21402c'), lime = toon('#b8f060');
    hairCap(c, hair, 0.56);
    bangs(c, hair, 5, 0.5, 0.75);
    // the ponytail: gathered at the crown, falling down the back with lime streaks
    const tie = add(c.head, new THREE.TorusGeometry(c.R * 0.24, c.R * 0.07, 6, 14), toon('#4a3226'), 0, c.hc.y + c.R * 0.95, -c.R * 0.55);
    tie.rotation.x = 1.1;
    const tail = [];
    for (let i = 0; i < 7; i++) { const u = (i / 6 - 0.5); tail.push({ pts: [[u * 0.25, 1.05, -0.6], [u * 0.45, 1.75, -1.3], [u * 0.7, 1.0, -2.1], [u * 0.8, -0.8, -2.0], [u * 0.6, -2.8 - Math.abs(u) * 0.6, -1.5]], lime: i === 2 || i === 5 }); }
    for (const t of tail) locks(c, t.lime ? lime : hair, [t.pts], 0.28);
    const T = c.torsoLen;
    // grey tunic down to mid-thigh, cut into strips at the hem
    const tunic = cloth('#8d8c93');
    torso(c, [[0.15, -0.05], [0.13, 0.06], [0.115, T * 0.38], [0.15, T * 0.7], [0.145, T * 0.9], [0.06, T + 0.01]], skin, 0.68);
    const tg = lathe([[0.2, -0.3], [0.17, -0.1], [0.14, 0.04], [0.122, T * 0.38], [0.155, T * 0.7], [0.152, T * 0.88], [0.07, T + 0.015]], 22);
    tatter(tg, 7, 0.08, 7);
    add(c.spine, tg, tunic).scale.z = 0.72;
    // white fur mantle over the shoulders and down the back
    const fm = furMat('#efe9df');
    for (let i = 0; i < 18; i++) { const a = i / 18 * PI * 2, x = Math.sin(a), z = Math.cos(a); ball(c.spine, 0.075, fm, x * 0.17, T - 0.03, z * 0.12, 1.2, 0.85, 1.1); }
    const mantle = lathe([[0.25, T - 0.42], [0.22, T - 0.2], [0.18, T - 0.04]], 18, PI * 0.62, PI * 0.76);
    tatter(mantle, 3, 0.07, 5, false);
    add(c.spine, mantle, cloth('#efe9df')).scale.z = 0.8;
    // belts at an angle over the hips, a strap across the chest
    const leather = toon('#4a3226');
    belt(c, 0.05, 0.155, 0.115, leather, { buckle: true, tilt: 0.08 });
    belt(c, -0.04, 0.165, 0.125, leather, { buckle: true, tilt: -0.12 });
    const strap = add(c.spine, rbox(0.035, T * 1.05, 0.012, 0.005), leather, 0, T * 0.52, 0.105);
    strap.rotation.z = 0.6;
    // spiked dark pauldrons
    const armour = toon('#2b2b33');
    for (const A of c.arms) {
      const p = add(A.sh, new THREE.SphereGeometry(0.1, 14, 10, 0, PI * 2, 0, PI * 0.55), armour, A.sd * 0.015, 0.02, 0);
      p.scale.set(1.15, 1, 1.1);
      for (let k = 0; k < 3; k++) add(A.sh, new THREE.ConeGeometry(0.022, 0.12, 6), M.ironL, A.sd * (0.03 + k * 0.03), 0.1 - k * 0.012, -0.04 + k * 0.04).rotation.z = -A.sd * (0.3 + k * 0.15);
    }
    arm(c, skin, 0.052, 0.046, toon('#3a3a42'), { foreMat: toon('#3a3a42') });
    // glowing bands on the upper arms; gauntlet spikes at the elbow
    for (const A of c.arms) {
      for (const y of [-0.08, -0.13]) add(A.sh, new THREE.TorusGeometry(0.054, 0.006, 4, 16), glow('#c4ff5a', 1.4), 0, y, 0, false).rotation.x = PI / 2;
      add(A.el, new THREE.ConeGeometry(0.02, 0.07, 6), M.ironL, 0, -0.03, -0.05).rotation.x = -2.2;
    }
    const legging = toon('#2e2b30');
    leg(c, legging, 0.08, 0.062, legging, toon('#3a2a22'), { bootW: 1.7 });
    for (const L of c.legs) { for (let k = 0; k < 6; k++) { const a = k / 6 * PI * 2; ball(L.knee, 0.04, fm, Math.sin(a) * 0.065, -c.shin * 0.5, Math.cos(a) * 0.065); } belt({ spine: L.hip }, -c.thigh * 0.45, 0.085, 0.085, leather, { t: 0.012 }); }
    // two swords: crossed on the back, or one in each hand when she fights
    const blade = toon('#c8ccd2'), grip = toon('#2a1e1a');
    function sword(parent) {
      const s = new THREE.Group(); parent.add(s);
      add(s, rbox(0.045, 0.62, 0.01, 0.004), blade, 0, 0.36, 0);
      add(s, new THREE.ConeGeometry(0.023, 0.08, 4), blade, 0, 0.71, 0).scale.z = 0.25;
      add(s, rbox(0.13, 0.025, 0.035, 0.006), M.gold, 0, 0.04, 0);
      add(s, new THREE.CylinderGeometry(0.014, 0.014, 0.12, 8), grip, 0, -0.03, 0);
      ball(s, 0.02, M.gold, 0, -0.1, 0);
      return s;
    }
    const backS = new THREE.Group(); backS.position.set(0, T * 0.45, -0.13); c.spine.add(backS);
    for (const sd of [1, -1]) { const s = sword(backS); s.rotation.z = sd * 0.6; s.position.x = -sd * 0.02; }
    const handS = c.arms.map((A) => { const s = sword(A.hand); s.position.set(0, -0.07, 0.02); s.rotation.x = PI / 2; s.visible = false; return s; });
    c.gear = { backS, handS };
    return finish(c);
  },
  // Backend dev: an orc commander. Big, olive skin, long dark hair, tusks and scars, scaled armour trimmed with
  // fur, a tattered dark-red tabard with a bone-white diamond pattern, bone tusk ornaments, fur boots, red strips.
  backend: () => {
    const c = rig({ H: 2.18, sw: 0.27, hw: 0.17, hipY: 1.06, upper: 0.37, fore: 0.33 });
    const f = { skin: '#7c8848', lash: '#141010', iris: '#ffc04a', irisDark: '#8a4a0a', irisLight: '#ffe6a0', brow: '#1c1818', mouth: 'grim', scars: true, fierce: true, eyeW: 13, eyeH: 10, tilt: 0.3, eyeGap: 36 };
    const { skin } = makeHead(c, f, { jaw: 0.62 });
    ears(c, skin, 'orc');
    for (const sd of [1, -1]) add(c.head, taperTube([V3(sd * c.R * 0.3, c.hc.y - c.R * 0.66, c.R * 0.64), V3(sd * c.R * 0.38, c.hc.y - c.R * 0.3, c.R * 0.8), V3(sd * c.R * 0.48, c.hc.y - c.R * 0.08, c.R * 0.72)], c.R * 0.1, 0.004, { seg: 5, rad: 6 }), M.bone);
    const hair = toon('#1c1818');
    hairCap(c, hair, 0.62);
    const long = [];
    for (let i = 0; i < 11; i++) { const a = PI * 0.55 + i / 10 * PI * 0.9, x = Math.cos(a), z = -Math.abs(Math.sin(a)); long.push([[x * 0.95, 0.4, z * 0.9], [x * 1.1, -0.5, z * 1.05 - 0.15], [x * 1.05, -1.9 - (i % 4) * 0.3, z * 1.0 - 0.5]]); }
    for (const sd of [1, -1]) long.push([[sd * 0.8, 0.5, 0.35], [sd * 1.05, -0.3, 0.45], [sd * 1.1, -1.6, 0.5]]);
    locks(c, hair, long, 0.3);
    bangs(c, hair, 4, 0.4, 0.6);
    const T = c.torsoLen;
    // scaled armour over a broad chest
    const scales = toon('#ffffff', { map: TEX.scales });
    TEX.scales.repeat.set(4, 3);
    torso(c, [[0.21, -0.08], [0.19, 0.08], [0.18, T * 0.38], [0.24, T * 0.72], [0.24, T * 0.9], [0.09, T + 0.01]], scales, 0.72, 22);
    // fur trim at the neck and shoulders, big pauldrons with bone tusks
    const fur = furMat('#5a4434');
    for (let i = 0; i < 20; i++) { const a = i / 20 * PI * 2, x = Math.sin(a), z = Math.cos(a); ball(c.spine, 0.09, fur, x * 0.22, T - 0.02, z * 0.16, 1.2, 0.8, 1.1); }
    for (const A of c.arms) {
      const p = add(A.sh, new THREE.SphereGeometry(0.15, 16, 10, 0, PI * 2, 0, PI * 0.55), scales, A.sd * 0.02, 0.03, 0);
      p.scale.set(1.2, 1, 1.15);
      for (let k = 0; k < 5; k++) { const a = k / 5 * PI * 2; ball(A.sh, 0.05, fur, A.sd * 0.02 + Math.sin(a) * 0.15, -0.04, Math.cos(a) * 0.14); }
      for (const dz of [-0.05, 0.05]) add(A.sh, taperTube([V3(A.sd * 0.1, 0.1, dz), V3(A.sd * 0.2, 0.2, dz * 1.5), V3(A.sd * 0.24, 0.32, dz * 2.2 - 0.02)], 0.03, 0.003, { seg: 5, rad: 6 }), M.bone);
    }
    // the tabard, front and back, cut into rags at the hem
    const tab = toon('#ffffff', { map: TEX.tabard, side: THREE.DoubleSide });
    for (const sd of [1, -1]) {
      const pg = new THREE.PlaneGeometry(0.3, 0.95, 6, 4);
      const p = pg.attributes.position;
      for (let i = 0; i < p.count; i++) if (p.getY(i) < -0.47) p.setY(i, p.getY(i) - ((i % 2) ? 0.09 : 0.02) * (0.5 + ((i * 7) % 5) / 5));
      pg.computeVertexNormals();
      const pm = add(c.spine, pg, tab, 0, T * 0.62 - 0.48 - 0.08, sd * 0.175);
      if (sd < 0) pm.rotation.y = PI;
      pm.rotation.x = -sd * 0.06;
    }
    belt(c, 0.06, 0.215, 0.165, toon('#3a2a20'), { buckle: true, t: 0.03 });
    c.spine.add(at(skull(0.07), 0, 0.06, 0.2));
    // red cloth strips from the belt and the arms
    const red = cloth('#9a2626');
    for (const [x, z, len] of [[0.17, 0.08, 0.42], [-0.16, 0.1, 0.36], [0.19, -0.06, 0.5]]) add(c.spine, rbox(0.035, len, 0.006, 0.003), red, x, 0.04 - len / 2, z).rotation.z = x * 0.6;
    arm(c, skin, 0.075, 0.066, skin, { shoulderMat: scales, foreMat: toon('#3a3238') });
    for (const A of c.arms) { add(A.el, lathe([[0.08, -c.fore * 0.95], [0.085, -c.fore * 0.4], [0.074, -c.fore * 0.05]], 14), toon('#3a3238')); add(A.el, rbox(0.022, 0.32, 0.005, 0.003), red, A.sd * 0.07, -0.05, 0).rotation.z = A.sd * 0.2; }
    const pants = toon('#2c2826');
    leg(c, pants, 0.11, 0.09, pants, toon('#3a2a22'), { bootW: 1.7 });
    for (const L of c.legs) for (let k = 0; k < 8; k++) { const a = k / 8 * PI * 2; ball(L.knee, 0.055, furMat('#6a5440'), Math.sin(a) * 0.09, -c.shin * 0.48, Math.cos(a) * 0.09); }
    // the war hammer: on the back, or in the right hand when he works or fights
    function hammer(parent) {
      const h = new THREE.Group(); parent.add(h);
      add(h, new THREE.CylinderGeometry(0.022, 0.026, 1.1, 8), toon('#4a3226'), 0, 0.25, 0);
      for (const y of [-0.15, 0.05, 0.25]) add(h, new THREE.TorusGeometry(0.027, 0.006, 4, 10), M.iron, 0, y, 0).rotation.x = PI / 2;
      add(h, rbox(0.34, 0.17, 0.17, 0.02), M.iron, 0, 0.82, 0);
      for (const sd of [1, -1]) add(h, rbox(0.04, 0.2, 0.2, 0.012), M.ironL, sd * 0.17, 0.82, 0);
      add(h, new THREE.ConeGeometry(0.03, 0.12, 6), M.ironL, 0, 0.96, 0);
      h.add(at(skull(0.06), 0, 0.82, 0.09));
      return h;
    }
    const backH = hammer(c.spine); backH.position.set(0.08, T * 0.1, -0.21); backH.rotation.z = -0.5;
    const handH = hammer(c.arms[1].hand); handH.position.set(0, -0.08, 0.02); handH.rotation.x = PI / 2; handH.visible = false;
    c.gear = { backH, handH };
    return finish(c);
  },
  // Reviewer: a skeleton reaper. Tattered black hooded robe, green spirit fire, a staff with a skull lantern,
  // pouches and a potion at the belt, a book for reading.
  reviewer: () => {
    const c = rig({ H: 1.95, sw: 0.18, hw: 0.11, hipY: 0.98, upper: 0.33, fore: 0.3 });
    const bone = toon('#e8e0cc'), boneD = toon('#b8ad96');
    const f = { skin: '#e8e0cc', skull: true, lash: '#1e1824' };
    makeHead(c, f, { jaw: 0.4 });
    // green fire in the eye sockets
    const eyeFire = new THREE.SpriteMaterial({ map: TEX.flame, color: new THREE.Color(0.5, 2.4, 1.1), transparent: true, depthWrite: false, toneMapped: false });
    for (const sd of [1, -1]) {
      add(c.head, new THREE.SphereGeometry(c.R * 0.12, 8, 6), glow('#7dff9a', 3), sd * c.R * 0.3, c.hc.y - c.R * 0.02, c.R * 0.82, false);
      const s = new THREE.Sprite(eyeFire); s.center.set(0.5, 0.1); s.scale.set(c.R * 0.35, c.R * 0.7, 1); s.position.set(sd * c.R * 0.3, c.hc.y, c.R * 0.86); c.head.add(s);
    }
    // the hood: open at the face, pointed at the back, ragged at the edge
    const hood = cloth('#1d1a22'), robe = cloth('#23202a');
    const hd = add(c.head, new THREE.SphereGeometry(c.R * 1.42, 24, 16, PI / 2 + 1.0, PI * 2 - 2.0, 0, PI * 0.72), hood, 0, c.hc.y + c.R * 0.12, -c.R * 0.08);
    hd.scale.set(1.0, 1.08, 1.05);
    add(c.head, taperTube([V3(0, c.hc.y + c.R * 0.9, -c.R * 0.9), V3(0, c.hc.y + c.R * 1.25, -c.R * 1.6), V3(0, c.hc.y + c.R * 0.9, -c.R * 2.3)], c.R * 0.42, 0.01, { seg: 6, rad: 8 }), hood);
    c.labelUp = c.R * 3.2;
    // long robe from the shoulders to the ankles, flared and torn; a ragged shawl over the shoulders
    const T = c.torsoLen;
    torso(c, [[0.1, -0.02], [0.09, T * 0.4], [0.12, T * 0.75], [0.05, T + 0.01]], toon('#2a2430'), 0.7);
    const rg = lathe([[0.36, -0.94], [0.28, -0.6], [0.2, -0.25], [0.15, 0.05], [0.13, T * 0.4], [0.16, T * 0.75], [0.15, T * 0.92], [0.07, T + 0.02]], 26);
    tatter(rg, 8, 0.14, 17);
    add(c.spine, rg, robe).scale.z = 0.82;
    const shawl = lathe([[0.27, T - 0.34], [0.23, T - 0.16], [0.18, T - 0.02], [0.08, T + 0.05]], 22);
    tatter(shawl, 4, 0.1, 23);
    add(c.spine, shawl, hood).scale.z = 0.86;
    // a glimpse of ribs at the open collar
    for (let k = 0; k < 3; k++) add(c.spine, new THREE.TorusGeometry(0.06 - k * 0.006, 0.008, 4, 12, PI), bone, 0, T - 0.1 - k * 0.04, 0.06).rotation.set(0, 0, PI);
    // belt with pouches and a green potion
    const leather = toon('#3a2a20');
    belt(c, 0.0, 0.15, 0.125, leather, { t: 0.02, buckle: true });
    for (const [x, z] of [[0.13, 0.06], [-0.13, 0.06], [0.06, 0.12]]) add(c.spine, rbox(0.06, 0.07, 0.04, 0.012), toon('#4a3426'), x, -0.04, z);
    const potion = add(c.spine, new THREE.SphereGeometry(0.035, 10, 8), glow('#5effa0', 1.8), -0.07, -0.05, 0.13, false);
    add(c.spine, new THREE.CylinderGeometry(0.012, 0.014, 0.04, 8), toon('#c8e8d8'), -0.07, -0.005, 0.13);
    add(c.spine, new THREE.CylinderGeometry(0.014, 0.014, 0.015, 8), toon('#6a4a2a'), -0.07, 0.02, 0.13);
    // bony arms in wide ragged sleeves, bony hands; feet of bone under the hem
    for (const A of c.arms) {
      ball(A.sh, 0.04, bone, 0, 0, 0);
      add(A.sh, limbGeo(c.upper, 0.018, 0.016, 6), bone);
      ball(A.el, 0.022, bone, 0, 0, 0);
      add(A.el, limbGeo(c.fore, 0.016, 0.013, 6), bone);
      add(A.el, limbGeo(c.fore * 0.95, 0.009, 0.009, 5), boneD, 0.018, 0, 0);
      hand(c, A, bone, 0.034, true);
      const sl = lathe([[0.1, -c.upper - 0.12], [0.075, -c.upper * 0.5], [0.06, 0.02]], 14);
      tatter(sl, 3, 0.07, 31 + A.sd);
      add(A.sh, sl, robe);
    }
    leg(c, bone, 0.025, 0.02, bone, bone, { bony: true });
    // the staff, topped by a skull in an iron cage with green fire inside
    const staff = new THREE.Group(); staff.position.set(0, -0.04, 0.02); c.arms[1].hand.add(staff);
    staff.rotation.x = PI / 2;
    add(staff, taperTube([V3(0, -0.95, 0), V3(0.02, -0.3, 0.01), V3(-0.01, 0.4, 0), V3(0.03, 0.92, 0.02)], 0.022, 0.016, { seg: 10, rad: 6 }), toon('#2e2420'));
    for (const y of [-0.4, 0.2, 0.7]) add(staff, new THREE.TorusGeometry(0.026, 0.006, 4, 10), M.iron, 0, y, 0).rotation.x = PI / 2;
    const top = new THREE.Group(); top.position.y = 1.06; staff.add(top);
    top.add(skull(0.11));
    for (let k = 0; k < 4; k++) { const a = k / 4 * PI * 2; add(top, taperTube([V3(0, -0.08, 0), V3(Math.sin(a) * 0.09, 0.0, Math.cos(a) * 0.09), V3(0, 0.12, 0)], 0.006, 0.006, { seg: 6, rad: 4 }), M.iron); }
    const lf = new THREE.Group(); top.add(lf);
    const lantern = new THREE.SpriteMaterial({ map: TEX.flame, color: new THREE.Color(0.6, 2.4, 1.2), transparent: true, depthWrite: false, toneMapped: false });
    const fl = new THREE.Sprite(lantern); fl.center.set(0.5, 0.05); fl.scale.set(0.16, 0.3, 1); fl.position.y = 0.02; lf.add(fl);
    const halo = new THREE.Sprite(new THREE.SpriteMaterial({ map: TEX.soft, color: '#5effa0', transparent: true, opacity: 0.55, depthWrite: false, blending: THREE.AdditiveBlending })); halo.scale.setScalar(0.7); halo.position.y = 0.08; lf.add(halo);
    const light = new THREE.PointLight('#6dffa0', 2.5, 4, 2); light.position.set(-0.18, 2.2, 0.35); c.root.add(light);
    // a few wisps of the same fire trailing at the hem
    const wisps = [];
    for (const [x, z] of [[0.24, 0.12], [-0.2, -0.2], [0.05, -0.3]]) { const w = new THREE.Sprite(eyeFire); w.center.set(0.5, 0.1); w.scale.set(0.08, 0.16, 1); w.position.set(x, -0.95, z); c.spine.add(w); wisps.push(w); }
    // the book, only out when reading
    const book = new THREE.Group(); book.position.set(-0.02, -0.06, 0.05); c.arms[0].hand.add(book);
    add(book, rbox(0.2, 0.03, 0.26, 0.006), toon('#3a1f2a'), 0, 0, 0);
    add(book, rbox(0.19, 0.022, 0.25, 0.004), toon('#efe4cc'), 0, 0.012, 0.0);
    book.rotation.x = PI / 2;
    c.lantern = { lf, light, wisps };
    c.gear = { staff, book };
    return finish(c);
  },
};
// merge, set shadows, and tie the gear to the poses
function finish(c) {
  consolidate(c.root);
  c.root.traverse((o) => { if (o.isMesh) { o.castShadow = o.castShadow !== false; o.receiveShadow = true; } });
  return c;
}

/* ---------- poses */
function seat(c) {
  c.body.position.y = c.seatY;
  for (const L of c.legs) { L.hip.rotation.x = -1.5; L.knee.rotation.x = 1.45; L.foot.rotation.x = 0.05; }
}
const SEATED = new Set(['type', 'smash', 'needs', 'readsit', 'sit', 'drink']);
function gearFor(c, mode) {
  const g = c.gear || {};
  const seated = SEATED.has(mode);
  if (g.handS) { const fight = mode === 'spar'; g.handS.forEach((s) => { s.visible = fight; }); g.backS.visible = !fight; }
  if (g.handH) { const work = mode === 'spar' || mode === 'smash'; g.handH.visible = work; g.backH.visible = !work; }
  if (g.staff) { g.staff.visible = !seated && mode !== 'read'; g.book.visible = mode === 'read' || mode === 'readsit'; }
  if (g.map) g.map.visible = mode !== 'type' && mode !== 'smash';
  if (g.brush) { g.brush.visible = mode === 'paint' || mode === 'type'; g.pal.visible = mode === 'paint'; }
}
function pose(c, mode, t, phase) {
  const tt = REDUCE ? 0.6 : t;
  const [AL, AR] = c.arms, [LL, LR] = c.legs;
  c.body.position.y = c.hipY;
  c.body.rotation.set(0, 0, 0);
  c.spine.rotation.set(0, 0, 0);
  c.neck.rotation.set(0, 0, 0);
  c.head.rotation.set(0, 0, 0);
  for (const A of c.arms) { A.sh.rotation.set(0, 0, 0); A.el.rotation.set(0, 0, 0); A.hand.rotation.set(0, 0, 0); }
  for (const L of c.legs) { L.hip.rotation.set(0, 0, 0); L.knee.rotation.set(0, 0, 0); L.foot.rotation.set(0, 0, 0); }
  const br = REDUCE ? 0 : Math.sin(tt * 2.1 + phase);
  AL.sh.rotation.z = 0.1; AR.sh.rotation.z = -0.1;
  AL.el.rotation.x = -0.2; AR.el.rotation.x = -0.2;
  if (SEATED.has(mode)) seat(c);
  switch (mode) {
    case 'walk': {
      // shorter legs step faster, so everyone covers the ground at the same pace
      const w = tt * 8.5 * Math.sqrt(0.92 / c.hipY) + phase, s = Math.sin(w), co = Math.cos(w);
      LL.hip.rotation.x = s * 0.46; LR.hip.rotation.x = -s * 0.46;
      LL.knee.rotation.x = 0.08 + Math.max(0, -co) * 0.85; LR.knee.rotation.x = 0.08 + Math.max(0, co) * 0.85;
      LL.foot.rotation.x = -s * 0.2; LR.foot.rotation.x = s * 0.2;
      AL.sh.rotation.x = -s * 0.45; AR.sh.rotation.x = s * 0.45;
      AL.el.rotation.x = -0.3 - Math.max(0, -s) * 0.35; AR.el.rotation.x = -0.3 - Math.max(0, s) * 0.35;
      c.body.position.y = c.hipY - 0.02 + Math.abs(co) * 0.03;
      c.spine.rotation.set(0.07, s * 0.08, 0);
      c.head.rotation.y = -s * 0.05;
      break;
    }
    case 'type': {
      c.spine.rotation.x = 0.16;
      for (const [A, ph] of [[AL, 0], [AR, 1.7]]) { A.sh.rotation.set(-0.75 + Math.sin(tt * 17 + phase + ph) * 0.04, 0, -A.sd * 0.12); A.el.rotation.x = -0.85; }
      c.head.rotation.x = 0.14;
      break;
    }
    case 'smash': {
      const k = Math.abs(Math.sin(tt * 5.2 + phase));
      c.spine.rotation.x = 0.1 - k * 0.12;
      AR.sh.rotation.set(-0.9 - k * 1.6, 0, -0.15); AR.el.rotation.x = -0.5 - k * 0.3;
      AL.sh.rotation.set(-0.7, 0, 0.15); AL.el.rotation.x = -0.9;
      c.head.rotation.x = 0.1 - k * 0.1;
      break;
    }
    case 'needs': {
      AL.sh.rotation.set(0, 0, 2.6 + (REDUCE ? 0 : Math.sin(tt * 6) * 0.22)); AL.el.rotation.z = 0.35;
      AR.sh.rotation.x = -0.7; AR.el.rotation.x = -0.8;
      c.head.rotation.z = 0.12;
      break;
    }
    case 'readsit': case 'read': {
      for (const A of c.arms) { A.sh.rotation.set(-0.7, 0, -A.sd * 0.28); A.el.rotation.set(-1.0, 0, 0); }
      c.head.rotation.x = 0.3;
      c.head.rotation.z = Math.sin(tt * 0.8 + phase) * 0.05;
      if (mode === 'read') c.body.position.y += br * 0.006;
      break;
    }
    case 'sit': {
      for (const A of c.arms) { A.sh.rotation.set(-0.45, 0, -A.sd * 0.05); A.el.rotation.x = -0.5; }
      c.spine.rotation.x = -0.05;
      c.head.rotation.y = Math.sin(tt * 0.4 + phase) * 0.3;
      break;
    }
    case 'drink': {
      const k = Math.max(0, Math.sin(tt * 0.9 + phase));
      AR.sh.rotation.set(-0.5 - k * 0.7, 0, -0.1); AR.el.rotation.x = -1.3 - k * 0.5;
      AL.sh.rotation.x = -0.5; AL.el.rotation.x = -0.7;
      c.head.rotation.x = -k * 0.25;
      break;
    }
    case 'plan': {
      c.spine.rotation.x = 0.28;
      for (const A of c.arms) { A.sh.rotation.set(-0.55, 0, A.sd * 0.25); A.el.rotation.x = -0.35; }
      c.head.rotation.set(0.25, Math.sin(tt * 0.6 + phase) * 0.2, 0);
      c.body.position.y += br * 0.005;
      break;
    }
    case 'point': {
      AL.sh.rotation.set(-1.45, 0, 0.25); AL.el.rotation.x = -0.08;
      AR.sh.rotation.x = -0.2; AR.el.rotation.x = -0.4;
      c.head.rotation.y = 0.35;
      c.body.position.y += br * 0.005;
      break;
    }
    case 'paint': {
      AR.sh.rotation.set(-1.1 + Math.sin(tt * 2.6 + phase) * 0.2, 0, -0.2 + Math.cos(tt * 2.6 + phase) * 0.12); AR.el.rotation.x = -0.45;
      AL.sh.rotation.set(-0.55, 0, 0.25); AL.el.rotation.x = -1.25;
      c.head.rotation.y = -0.12;
      c.body.position.y += br * 0.005;
      break;
    }
    case 'spar': {
      const k = Math.sin(tt * 6 + phase), up = Math.max(0, k);
      c.spine.rotation.set(0.08, k * 0.18, 0);
      AR.sh.rotation.set(-1.0 - up * 1.4 + (1 - up) * 0.3, 0, -0.2); AR.el.rotation.x = -0.6 + up * 0.3;
      AL.sh.rotation.set(-1.2 + Math.max(0, -k) * -1.0, 0, 0.3); AL.el.rotation.x = -0.9;
      LL.hip.rotation.x = -0.25; LR.hip.rotation.x = 0.2; LL.knee.rotation.x = 0.3; LR.knee.rotation.x = 0.15;
      c.body.position.y = c.hipY - 0.04 + Math.abs(k) * 0.02;
      break;
    }
    default: {
      // idle: weight on one leg, breathing, a look around
      c.body.position.y = c.hipY + br * 0.006 - 0.01;
      c.body.rotation.z = 0.025;
      LL.hip.rotation.z = 0.04; LR.hip.rotation.z = -0.02; LR.knee.rotation.x = 0.12; LR.hip.rotation.x = -0.06;
      c.spine.rotation.z = -0.03;
      c.head.rotation.set(0, REDUCE ? 0 : Math.sin(tt * 0.5 + phase) * 0.25, REDUCE ? 0 : Math.sin(tt * 0.9 + phase) * 0.04);
    }
  }
  // the reviewer always carries the staff upright when standing
  if (c.gear && c.gear.staff && c.gear.staff.visible && mode !== 'read') { AR.sh.rotation.set(-0.3, 0, -0.12); AR.el.rotation.set(-1.25, 0, 0); }
  // the lead holds the map against the chest when walking or idle
  if (c.gear && c.gear.map && !SEATED.has(mode) && !['plan', 'point', 'read', 'paint', 'spar'].includes(mode)) { AL.sh.rotation.set(-0.4, 0, 0.05); AL.el.rotation.x = -1.3; }
  gearFor(c, mode);
  if (c.lantern && !REDUCE) {
    const k = 1 + Math.sin(t * 11 + phase) * 0.14 + Math.sin(t * 27) * 0.07;
    c.lantern.lf.scale.set(1 / Math.sqrt(k), k, 1);
    c.lantern.light.intensity = c.gear.staff.visible ? 2.5 * k : 0;
    c.lantern.wisps.forEach((w, i) => { const q = 0.6 + 0.4 * Math.sin(t * 3 + i * 2); w.scale.set(0.08 * q, 0.16 * q, 1); w.position.y = -0.95 + ((t * 0.4 + i * 0.33) % 1) * 0.25; });
  }
}
function blinker(c, t) {
  if (REDUCE || !c.faces) return;
  if (c.nextBlink === undefined) c.nextBlink = t + 1 + Math.random() * 3;
  const closed = t > c.nextBlink && t < c.nextBlink + 0.13;
  if (t > c.nextBlink + 0.13) c.nextBlink = t + 2.2 + Math.random() * 3.5;
  const want = closed ? c.faces.closed : c.faces.open;
  if (c.faceMat.map !== want) {
    c.faceMat.map = want;
    if (c.faces.gOpen) c.faceMat.emissiveMap = closed ? c.faces.gClosed : c.faces.gOpen;
  }
}
