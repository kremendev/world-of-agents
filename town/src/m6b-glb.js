/* ================================================================ the Tripo cast: five rigged anime models over the hand-built figures.
   The hand-built rig stays as an invisible controller: it still walks the paths, carries the name label and takes the clicks.
   Each model hangs under the same root, is sized to that rig's height, and plays one of its four clips.
   If a model fails to load, the hand-built figure simply stays visible. */
const MODEL_URL = (id) => 'chars/' + id + '.gltf.json';
// which clip each town pose plays: desk work is the seated "phone" clip (hands forward at desk height), chairs are "sit"
const CLIP_FOR = { walk: 'walk', type: 'play_mobile_game', smash: 'play_mobile_game', sit: 'sit', readsit: 'sit', drink: 'sit' };
// the walk clips cover 0.59 body heights a second at 1x (4 steps in 2.33 s, measured from the files)
const WALK_RATE = 0.59;
const loadModel = (id) => loadGltfJson(MODEL_URL(id), 'chars/');

function attachModel(id, c, speed) {
  loadModel(id).then((g) => {
    const m = g.scene;
    m.updateMatrixWorld(true);
    const box = new THREE.Box3().setFromObject(m);
    const s = c.H / Math.max(0.01, box.max.y - box.min.y);
    m.scale.setScalar(s);
    const baseY = -box.min.y * s;
    m.position.y = baseY;
    const mats = new Map();
    m.traverse((o) => {
      if (!o.isMesh) return;
      const src = o.material;
      if (!mats.has(src)) {
        if (src.map) src.map.colorSpace = THREE.SRGBColorSpace;
        mats.set(src, toon('#ffffff', { map: src.map || null }));
      }
      o.material = mats.get(src);
      o.castShadow = true;
      o.receiveShadow = true;
      o.frustumCulled = false;   // a skinned body moves away from its rest-pose bounds when it sits
      o.raycast = () => {};      // clicks land on the invisible rig, which is cheap and always where the model is
    });
    // lights carried by the old figure (the reviewer's lantern) move to the model, so the scene's light count never changes
    const hand = m.getObjectByName('mixamorigRightHand');
    const lights = [];
    c.body.traverse((o) => { if (o.isLight) lights.push(o); });
    for (const L of lights) { (hand || m).add(L); L.position.set(0, 0, 0); }
    // where the hips sit in each seated clip, so a seated model lines up with the town's chairs
    const seat = {};
    for (const clip of g.animations) {
      const hips = clip.tracks.find((t) => /Hips\.position$/.test(t.name));
      if (hips) seat[clip.name] = hips.values[1] * s;
    }
    const mixer = new THREE.AnimationMixer(m);
    const acts = {};
    for (const clip of g.animations) {
      const a = mixer.clipAction(clip);
      a.enabled = true;
      a.setEffectiveTimeScale(1);
      a.setEffectiveWeight(clip.name === 'idle' ? 1 : 0);
      a.time = Math.random() * clip.duration;
      a.play();
      acts[clip.name] = a;
    }
    if (!acts.idle) return;   // not one of ours: keep the hand-built figure
    if (acts.walk) acts.walk.timeScale = Math.min(2.6, Math.max(0.8, speed / (WALK_RATE * c.H)));
    mixer.update(0);
    // the legs, for seating, and how high an ankle stands when the feet are flat (idle, on the ground)
    const bone = (n) => m.getObjectByName('mixamorig' + n);
    const legs = ['Left', 'Right'].map((side) => ({ up: bone(side + 'UpLeg'), low: bone(side + 'Leg'), foot: bone(side + 'Foot'), saved: [new THREE.Quaternion(), new THREE.Quaternion(), new THREE.Quaternion()] }));
    m.updateMatrixWorld(true);
    const ankleH = legs.every((L) => L.up && L.low && L.foot) ? Math.min(...legs.map((L) => L.foot.getWorldPosition(_ikA).y)) : null;
    c.root.add(m);
    c.body.visible = false;
    c.model = { obj: m, mixer, acts, cur: 'idle', baseY, seat, hips: bone('Hips'), legs: ankleH === null ? null : legs, ankleH, bent: false };
  }).catch((err) => console.warn('model for ' + id + ' did not load; keeping the hand-built figure:', err && err.message));
}

/* ---------- seating. The seated clips were made for a taller chair than the town's, so on its own a clip either floats
   the hips over the seat or sinks the feet into the floor. Instead, the hips are put on the seat (a hip joint sits
   about 5.5% of the body's height above it) and each leg is bent, with two-bone IK, so its ankle stands at the height
   it has on the ground; a leg too short for that dangles, as a goblin's does on a tavern stool. */
const SEAT_CLEAR = 0.055;
const SEAT_TOP = new Map();   // "spot|agent" -> the seat's top under that agent's hips, above the ground, measured once
const _ikA = new THREE.Vector3(), _ikH = new THREE.Vector3(), _ikK = new THREE.Vector3(), _ikT = new THREE.Vector3();
const _ikU = new THREE.Vector3(), _ikP = new THREE.Vector3(), _ikK2 = new THREE.Vector3();
const _ikQ = new THREE.Quaternion(), _ikW = new THREE.Quaternion(), _ikF = new THREE.Quaternion(), _ikFoot = new THREE.Quaternion();
const _ikR = new THREE.Raycaster();
function seatTop(key, x, z, gy) {
  if (SEAT_TOP.has(key)) return SEAT_TOP.get(key);
  const tops = [];
  // where the hips are, and a few rays close around, so the gap between two slats doesn't hide a bench (the highest
  // answer counts: the rays that fall through a gap find a crossbar lower down)
  for (const [dx, dz] of [[0, 0], [0.05, 0], [-0.05, 0], [0, 0.05], [0, -0.05]]) {
    _ikR.set(_ikA.set(x + dx, gy + 1.2, z + dz), _ikU.set(0, -1, 0));
    _ikR.far = 1.3;
    for (const h of _ikR.intersectObjects(scene.children, true)) {
      let mine = false, shown = true;
      for (let q = h.object; q; q = q.parent) { if (q.userData.agentId) mine = true; if (!q.visible) shown = false; }
      const y = h.point.y - gy;
      if (!mine && shown && h.object.isMesh && !h.object.material.transparent && y > 0.25 && y < 0.66) { tops.push(y); break; }
    }
  }
  const top = tops.length ? Math.max(...tops) : null;
  SEAT_TOP.set(key, top);
  return top;
}
// turn a bone so that the world direction `from` (of its child) becomes `to`
function turnBone(b, from, to) {
  _ikQ.setFromUnitVectors(from, to);
  b.getWorldQuaternion(_ikW);
  b.parent.getWorldQuaternion(_ikF).invert();
  b.quaternion.copy(_ikF.multiply(_ikQ).multiply(_ikW));
  b.updateMatrixWorld(true);
}
function legIK(L, groundAt, ankleH, w) {
  const H = L.up.getWorldPosition(_ikH), K = L.low.getWorldPosition(_ikK), A = L.foot.getWorldPosition(_ikA);
  L.foot.getWorldQuaternion(_ikFoot);
  const a = H.distanceTo(K), b = K.distanceTo(A);
  // the ankle where the clip has it across the floor, at the height it stands at; out of reach, the leg hangs towards it
  const dir = _ikU.set(A.x, groundAt + ankleH, A.z).sub(H);
  const d = THREE.MathUtils.clamp(dir.length(), Math.abs(a - b) + 1e-4, a + b - 1e-4);
  dir.normalize();
  // the knee stays on the side the clip bends it to
  const perp = _ikP.subVectors(K, H);
  perp.addScaledVector(dir, -perp.dot(dir));
  if (perp.lengthSq() < 1e-10) return;
  perp.normalize();
  const cosA = THREE.MathUtils.clamp((a * a + d * d - b * b) / (2 * a * d), -1, 1);
  const K2 = _ikK2.copy(H).addScaledVector(dir, a * cosA).addScaledVector(perp, a * Math.sqrt(1 - cosA * cosA));
  const T = _ikT.copy(H).addScaledVector(dir, d);
  turnBone(L.up, _ikP.subVectors(K, H).normalize(), _ikU.subVectors(K2, H).normalize());
  const K3 = L.low.getWorldPosition(_ikK), A3 = L.foot.getWorldPosition(_ikA);
  turnBone(L.low, _ikP.subVectors(A3, K3).normalize(), _ikU.subVectors(T, K3).normalize());
  // the foot keeps the turn the clip gave it
  L.foot.parent.getWorldQuaternion(_ikF).invert();
  L.foot.quaternion.copy(_ikF.multiply(_ikFoot));
  // eased in: part of the way from the clip's legs to these
  if (w < 1) { L.up.quaternion.slerpQuaternions(L.saved[0], L.up.quaternion, w); L.low.quaternion.slerpQuaternions(L.saved[1], L.low.quaternion, w); L.foot.quaternion.slerpQuaternions(L.saved[2], L.foot.quaternion, w); }
  L.up.updateMatrixWorld(true);
}

function driveModel(c, mode, dt, spotId) {
  const M = c.model;
  // put back what last frame's IK turned, so a bone no track moves never keeps it
  if (M.bent) for (const L of M.legs) { L.up.quaternion.copy(L.saved[0]); L.low.quaternion.copy(L.saved[1]); L.foot.quaternion.copy(L.saved[2]); }
  M.bent = false;
  const want = M.acts[CLIP_FOR[mode]] ? CLIP_FOR[mode] : 'idle';
  if (want !== M.cur) {
    const prev = M.acts[M.cur], next = M.acts[want];
    next.enabled = true;
    next.setEffectiveWeight(1);
    next.time = 0;
    // with reduced motion the mixer's time stands still, and a fade never ends: switch at once
    if (REDUCE) prev.setEffectiveWeight(0);
    else prev.crossFadeTo(next, 0.3, false);
    if (want === 'walk') next.timeScale = M.acts.walk.timeScale || 1;
    M.cur = want;
  }
  M.mixer.update(REDUCE ? 0 : dt);
  const seated = want !== 'walk' && want !== 'idle';
  let top = null;
  // the ground itself, not the root's height, which eases towards it after a move (a tavern's floor is higher)
  const ground = groundY(c.root.position.x, c.root.position.z);
  // measured once the seated clip has faded in, so the hips are over the seat and not where the walk left them
  if (seated && spotId && M.legs && M.acts[want].getEffectiveWeight() > 0.99) {
    M.obj.updateWorldMatrix(true, true);   // from the root down: an agent just moved has a stale root matrix
    const hp = M.hips.getWorldPosition(_ikH);
    top = seatTop(spotId + '|' + c.root.userData.agentId, hp.x, hp.z, ground);
  }
  let y = M.baseY, x = 0, z = 0;
  if (top !== null) {
    // the hips on the seat: move the model by what the clip's hips miss by
    y = M.obj.position.y + (ground + top + SEAT_CLEAR * c.H) - _ikH.y;
    // and over its middle (the spot): the seated clips sit 10 to 23 cm forward of their seat, which put chests into desks
    const ry = c.root.rotation.y, cs = Math.cos(ry), sn = Math.sin(ry);
    const wx = c.root.position.x - _ikH.x, wz = c.root.position.z - _ikH.z;
    x = M.obj.position.x + wx * cs - wz * sn;
    z = M.obj.position.z + wx * sn + wz * cs;
  } else if (seated && M.seat[want] !== undefined) {
    // no seat found: the old rule, the hips at the hand-built rig's seat height, sinking the feet 0.22 m at most
    y = M.baseY + Math.max(-0.22, Math.min(0, c.seatY - M.baseY - M.seat[want]));
  }
  const ease = REDUCE ? 1 : Math.min(1, dt * 8);
  M.obj.position.x += (x - M.obj.position.x) * ease;
  M.obj.position.y += (y - M.obj.position.y) * ease;
  M.obj.position.z += (z - M.obj.position.z) * ease;
  M.ikW = top === null ? 0 : Math.min(1, (M.ikW || 0) + (REDUCE ? 1 : dt / 0.3));
  if (top !== null) {
    M.obj.updateWorldMatrix(true, true);   // from the root down: an agent just moved has a stale root matrix
    for (const L of M.legs) {
      L.saved[0].copy(L.up.quaternion); L.saved[1].copy(L.low.quaternion); L.saved[2].copy(L.foot.quaternion);
      legIK(L, ground, M.ankleH, M.ikW);
    }
    M.bent = true;
  }
}
