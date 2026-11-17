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
    c.root.add(m);
    c.body.visible = false;
    c.model = { obj: m, mixer, acts, cur: 'idle', baseY, seat };
  }).catch((err) => console.warn('model for ' + id + ' did not load; keeping the hand-built figure:', err && err.message));
}

function driveModel(c, mode, dt) {
  const M = c.model;
  const want = M.acts[CLIP_FOR[mode]] ? CLIP_FOR[mode] : 'idle';
  if (want !== M.cur) {
    const prev = M.acts[M.cur], next = M.acts[want];
    next.enabled = true;
    next.setEffectiveWeight(1);
    next.time = 0;
    prev.crossFadeTo(next, 0.3, false);
    if (want === 'walk') next.timeScale = M.acts.walk.timeScale || 1;
    M.cur = want;
  }
  // seated clips: drop the model so its hips meet the hand-built rig's seat height, never sinking the feet far into the floor
  let off = 0;
  if (want !== 'walk' && want !== 'idle' && M.seat[want] !== undefined) off = Math.max(-0.22, Math.min(0, c.seatY - M.baseY - M.seat[want]));
  M.obj.position.y += (M.baseY + off - M.obj.position.y) * Math.min(1, dt * 8);
  M.mixer.update(REDUCE ? 0 : dt);
}
