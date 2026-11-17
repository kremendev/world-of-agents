// Packed against unpacked: loads each model of two folders with real three.js r160 and the page's own plainModel()
// (taken from src/m1-kit.js), and compares what the page gets: every vertex in world space, every normal, the
// triangles, and for skinned models the skinned vertices posed at five times in every clip.
// usage: THREE_DIR=... node compare.cjs <unpacked models dir> <packed models dir>    (each holding chars/ and keep/)
const { chromium } = require('playwright');
const fs = require('fs'), path = require('path');
const T = process.env.THREE_DIR || path.join(__dirname, '..', '.three160');
const [A, B] = process.argv.slice(2).map((d) => path.resolve(d));
const src = fs.readFileSync(path.join(__dirname, '..', 'src', 'm1-kit.js'), 'utf8');
// glbFromEmbedded() and plainModel(), exactly as the page has them
const glb = src.slice(src.indexOf('function glbFromEmbedded'), src.indexOf('function loadGltfJson'));
if (!glb.includes('function plainModel')) throw new Error('plainModel() not found between glbFromEmbedded() and loadGltfJson()');
const page = `<!doctype html><script type="importmap">{"imports":{"three":"https://cdn.jsdelivr.net/npm/three@0.160.0/build/three.module.js","three/addons/":"https://cdn.jsdelivr.net/npm/three@0.160.0/examples/jsm/"}}</script>
<script type="module">
import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
const gltfLoader = new GLTFLoader();
${glb}
const load = (url, dir) => fetch(url).then((r) => r.json()).then((gl) => new Promise((res, rej) => gltfLoader.parse(glbFromEmbedded(gl), dir, res, rej))).then(plainModel);
function meshes(g) { const out = []; g.scene.updateMatrixWorld(true); g.scene.traverse((o) => { if (o.isMesh) out.push(o); }); return out; }
window.compare = async (a, b, dir) => {
  const [ga, gb] = await Promise.all([load(a, dir), load(b, dir)]);
  const ma = meshes(ga), mb = meshes(gb), v = new THREE.Vector3(), w = new THREE.Vector3(), n3 = new THREE.Matrix3();
  const r = { meshes: ma.length + '/' + mb.length, pos: 0, nrm: 0, tri: true, skin: 0, names: true };
  if (ma.length !== mb.length) return r;
  for (let k = 0; k < ma.length; k++) {
    const x = ma[k], y = mb[k];
    if (x.name !== y.name) r.names = false;
    const pa = x.geometry.attributes.position, pb = y.geometry.attributes.position;
    if (pa.count !== pb.count) { r.tri = false; continue; }
    const ia = x.geometry.index, ib = y.geometry.index;
    if (!!ia !== !!ib || (ia && (ia.count !== ib.count || ia.array.some((q, i) => q !== ib.array[i])))) r.tri = false;
    for (let i = 0; i < pa.count; i++) {
      v.fromBufferAttribute(pa, i).applyMatrix4(x.matrixWorld); w.fromBufferAttribute(pb, i).applyMatrix4(y.matrixWorld);
      r.pos = Math.max(r.pos, v.distanceTo(w));
    }
    const na = x.geometry.attributes.normal, nb = y.geometry.attributes.normal;
    if (na && nb) {
      const ka = n3.getNormalMatrix(x.matrixWorld).clone(), kb = new THREE.Matrix3().getNormalMatrix(y.matrixWorld);
      for (let i = 0; i < na.count; i++) {
        v.fromBufferAttribute(na, i).applyMatrix3(ka).normalize(); w.fromBufferAttribute(nb, i).applyMatrix3(kb).normalize();
        r.nrm = Math.max(r.nrm, v.angleTo(w) * 180 / Math.PI);
      }
    } else if (na || nb) r.nrm = 999;
  }
  const sa = ma.filter((o) => o.isSkinnedMesh), sb = mb.filter((o) => o.isSkinnedMesh);
  if (sa.length) {
    const xa = new THREE.AnimationMixer(ga.scene), xb = new THREE.AnimationMixer(gb.scene);
    for (const clip of ga.animations) {
      const cb = gb.animations.find((c) => c.name === clip.name);
      if (!cb || Math.abs(cb.duration - clip.duration) > 1e-6) { r.skin = 999; continue; }
      xa.stopAllAction(); xb.stopAllAction();
      xa.clipAction(clip).play(); xb.clipAction(cb).play();
      for (const f of [0, 0.21, 0.5, 0.77, 0.999]) {
        xa.setTime(f * clip.duration); xb.setTime(f * clip.duration);
        ga.scene.updateMatrixWorld(true); gb.scene.updateMatrixWorld(true);
        for (let k = 0; k < sa.length; k++) {
          sa[k].skeleton.update(); sb[k].skeleton.update();
          for (let i = 0; i < sa[k].geometry.attributes.position.count; i += 7) {
            sa[k].getVertexPosition(i, v).applyMatrix4(sa[k].matrixWorld); sb[k].getVertexPosition(i, w).applyMatrix4(sb[k].matrixWorld);
            r.skin = Math.max(r.skin, v.distanceTo(w));
          }
        }
      }
    }
  }
  return r;
};
window.ready = true;
</script>`;
(async () => {
  const b = await chromium.launch({ args: ['--no-sandbox'] });
  const p = await b.newPage();
  p.on('pageerror', (e) => console.log('pageerror:', e.message));
  await p.route('https://cdn.jsdelivr.net/**', (route) => {
    const rel = route.request().url().split('/three@0.160.0/')[1];
    route.fulfill({ status: 200, contentType: 'application/javascript', body: fs.readFileSync(path.join(T, rel), 'utf8') });
  });
  await p.route('http://pack.test/**', (route) => {
    const u = new URL(route.request().url()).pathname;
    if (u === '/') return route.fulfill({ status: 200, contentType: 'text/html', body: page });
    const f = path.join(u.startsWith('/a/') ? A : B, u.slice(3));
    route.fulfill({ status: 200, body: fs.readFileSync(f) });
  });
  await p.goto('http://pack.test/');
  await p.waitForFunction(() => window.ready, null, { timeout: 60000 });
  let bad = 0;
  for (const dir of ['chars', 'keep']) {
    for (const f of fs.readdirSync(path.join(B, dir)).filter((x) => x.endsWith('.gltf.json')).sort()) {
      const r = await p.evaluate(([a, b, d]) => window.compare(a, b, d), [`/a/${dir}/${f}`, `/b/${dir}/${f}`, `/b/${dir}/`]);
      const ok = r.names && r.tri && r.pos < 0.002 && r.nrm < 1 && r.skin < 0.003;
      if (!ok) bad++;
      console.log((ok ? 'ok  ' : 'BAD ') + `${dir}/${f}`.padEnd(32), `meshes ${r.meshes}  position ${(r.pos * 1000).toFixed(3)} mm  normal ${r.nrm.toFixed(3)} deg  triangles ${r.tri ? 'same' : 'DIFFER'}` + (r.skin ? `  posed ${(r.skin * 1000).toFixed(3)} mm` : '') + (r.names ? '' : '  NAMES DIFFER'));
    }
  }
  await b.close();
  process.exit(bad ? 1 : 0);
})();
