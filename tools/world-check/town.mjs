// The town's test copy for render.mjs town, as the town's own test/serve.sh makes it (forge-keep, 89ae8b1), in Node
// since this PC has no Python on PATH: the built page with a camera hook (window.__dbg: camera, controls, scene,
// THREE, a frame count, the actors), its auto-run paused, and its models beside it. Serve <out_dir> with serve.ts.
//
//   git archive origin/forge-keep town | tar -x -C <scratch>     (never a checkout)
//   node tools/world-check/town.mjs <scratch>/town <out_dir>     needs town/dist/forge-keep.html, built by its build.py
import { cpSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const [town, out] = process.argv.slice(2);
if (!town || !out) {
  console.error('usage: node town.mjs <town_dir> <out_dir>');
  process.exit(2);
}
let html = readFileSync(join(town, 'dist/forge-keep.html'), 'utf8');
/** Replaces the one place `find` stands, or stops: the town's page has changed. */
function once(find, replace) {
  const n = html.split(find).length - 1;
  if (n !== 1) throw new Error(`expected "${find}" once in the town's page, found it ${n} times`);
  html = html.replace(find, () => replace);
}
const controls = 'const controls = new OrbitControls(camera, renderer.domElement);';
once(
  controls,
  controls +
    '\nwindow.__dbg = { camera, controls, scene, renderer, THREE, frames: 0, get actors() { return actors; } };' +
    '\n(function count() { window.__dbg.frames++; requestAnimationFrame(count); })();',
);
// a view can lift the camera's limits, as the town's shot.cjs does ("free": true)
const clamp = 'const r = Math.hypot(t.x, t.z), max = 52;';
once(clamp, 'if (window.__dbg && window.__dbg.free) return;\n  ' + clamp);
// the town's own 13-step run stays still, so every view is of the same moment
once('paused: false', 'paused: true');
mkdirSync(out, { recursive: true });
writeFileSync(join(out, 'index.html'), html);
for (const d of ['chars', 'keep']) cpSync(join(town, 'models', d), join(out, d), { recursive: true });
console.log('town copy in', out);
