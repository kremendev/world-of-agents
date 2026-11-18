// The models policy check's page script (models-page.mjs bundles it with the repo's three): loads a plain GLB and one
// with a packed image through three's GLTFLoader, under whatever policy the page was served with, and reports what
// loaded and what the policy refused, for policy.mjs.
import { REVISION } from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

const violations = [];
document.addEventListener('securitypolicyviolation', (e) =>
  violations.push(`${e.effectiveDirective} ${e.blockedURI}`),
);
async function load(url) {
  try {
    const g = await new GLTFLoader().loadAsync(url);
    let meshes = 0;
    let textured = 0;
    g.scene.traverse((o) => {
      if (o.isMesh) {
        meshes++;
        if (o.material.map) textured++;
      }
    });
    return { loaded: true, meshes, textured };
  } catch (e) {
    return { loaded: false, error: String(e?.message ?? e) };
  }
}
const result = { revision: REVISION, plain: await load('./plain.glb'), packed: await load('./packed.glb') };
// a refused image reports a moment after the load settles
await new Promise((r) => setTimeout(r, 500));
window.__result = { ...result, violations };
