// Every walk idle life can take (T, 4c): for each agent, from each of its idle spots and its rest spot to each other
// one, the map's route on clear floor, by walk.mjs's rule: a ray down every 15 cm meeting anything more than 25 cm above
// the height a figure stands at there, the first and last 0.6 m by a seat left out. walk.mjs sees only the walks the
// demo happens to play; this sees all of them.
//
//   node tools/world-check/idle-walks.mjs <url of the render check page>      exit 1 on any fault
import { chromium } from 'playwright-core';

const [url] = process.argv.slice(2);
if (!url) {
  console.error('usage: node idle-walks.mjs <url>');
  process.exit(2);
}
const SEATED = ['type', 'smash', 'readsit', 'sit', 'drink'];
const browser = await chromium.launch({
  channel: 'msedge',
  headless: true,
  args: ['--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist'],
});
let result;
try {
  const page = await browser.newPage({ viewport: { width: 240, height: 150 }, reducedMotion: 'reduce' });
  page.on('pageerror', (e) => console.log('pageerror:', e.message));
  await page.goto(url);
  await page.waitForFunction(() => window.__world?.ready, null, { timeout: 300000 });
  result = await page.evaluate((seated) => {
    const { THREE, scene, groundY, spots, idleSpots, restSpots, route } = window.__world;
    const SEAT = new Set(seated);
    scene.updateMatrixWorld(true);
    const ray = new THREE.Raycaster();
    const skip = (o) => {
      for (let q = o; q; q = q.parent) if (q.userData.agentId || !q.visible) return true;
      return !o.isMesh || o.material.transparent;
    };
    const over = (x, z) => {
      ray.set(new THREE.Vector3(x, 2.1, z), new THREE.Vector3(0, -1, 0));
      ray.far = 2.5;
      const hit = ray.intersectObjects(scene.children, true).find((h) => !skip(h.object));
      return hit ? hit.point.y - groundY(x, z) : 0;
    };
    const bySeat = (spot, x, z) =>
      SEAT.has(spots[spot].pose) && Math.hypot(spots[spot].x - x, spots[spot].z - z) < 0.6;
    const rows = [];
    for (const [agent, list] of Object.entries(idleSpots)) {
      const all = [...new Set([restSpots[agent], ...list])];
      for (const a of all)
        for (const b of all) {
          if (a === b) continue;
          const p = route(a, b);
          let above = 0;
          let where = null;
          for (let i = 1; i < p.length; i++) {
            const n = Math.max(1, Math.ceil(Math.hypot(p[i].x - p[i - 1].x, p[i].z - p[i - 1].z) / 0.15));
            for (let k = 0; k <= n; k++) {
              const x = p[i - 1].x + ((p[i].x - p[i - 1].x) * k) / n;
              const z = p[i - 1].z + ((p[i].z - p[i - 1].z) * k) / n;
              if (bySeat(a, x, z) || bySeat(b, x, z)) continue;
              const h = over(x, z);
              if (h > above) {
                above = h;
                where = [+x.toFixed(2), +z.toFixed(2)];
              }
            }
          }
          rows.push({ agent, a, b, above: +above.toFixed(2), where });
        }
    }
    return rows;
  }, SEATED);
} finally {
  await browser.close();
}
let faults = 0;
for (const r of result) {
  const bad = r.above > 0.25;
  if (bad) faults++;
  console.log(
    `${bad ? 'FAULT' : 'clear'} ${r.agent.padEnd(9)} ${r.a.padEnd(13)} -> ${r.b.padEnd(13)} highest ${r.above} m` +
      (bad ? ` at (${r.where})` : ''),
  );
}
console.log(faults ? `${faults} of ${result.length} walks FAIL` : `all ${result.length} walks clear`);
process.exit(faults ? 1 : 0);
