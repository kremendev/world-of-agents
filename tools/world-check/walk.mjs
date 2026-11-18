// The figures on the app's events (4b): the demo run played into the world (the check page's ?demo), sampled twice a
// second from its start to 15 s after its end. A fault is a figure standing still, not held at its work spot, anywhere
// but where placeFor() puts it; an idle or done figure standing at a work spot; a walk that runs over 60 s; or a walk
// that goes over furniture: every walk's whole path, once, a ray down every 15 cm meeting anything more than 25 cm above
// the height a figure stands at there (a door's sill and a road's flagstones, up to 20 cm, are walked over; a crate, a
// bench or a desk is 40 cm and up). A walk out of a seated spot starts on its seat and one into it ends there, so the
// first and last 0.6 m by a seat are left out; the highest step met is said, so nothing hides under the line.
//
//   node tools/world-check/walk.mjs <url of the render check page> [reduce]      exit 1 on any fault
//   NEXT=<s>: the demo's Next step pressed every s seconds, the figures landing first, as the page does
import { chromium } from 'playwright-core';

const [url, reduce] = process.argv.slice(2);
if (!url) {
  console.error('usage: node walk.mjs <url> [reduce]');
  process.exit(2);
}
const demo = new URL(url);
demo.searchParams.set('demo', '');
if (process.env.NEXT) demo.searchParams.set('next', process.env.NEXT);
const SEATED = ['type', 'smash', 'readsit', 'sit', 'drink'];
const browser = await chromium.launch({
  channel: 'msedge',
  headless: true,
  args: ['--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist'],
});
const faults = [];
const seen = { samples: 0, walks: 0, turns: 0, holds: 0, places: new Set(), step: 0 };
try {
  const page = await browser.newPage({
    viewport: { width: 240, height: 150 },
    reducedMotion: reduce === 'reduce' ? 'reduce' : 'no-preference',
  });
  page.on('pageerror', (e) => faults.push('pageerror: ' + e.message));
  await page.goto(demo.href);
  await page.waitForFunction(() => window.__world?.ready, null, { timeout: 300000 });
  const last = {};
  let endedAt = null;
  for (;;) {
    const s = await page.evaluate((seated) => {
      const w = window.__world;
      const { THREE, scene, groundY, spots, office } = w;
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
        spot && SEAT.has(spots[spot].pose) && Math.hypot(spots[spot].x - x, spots[spot].z - z) < 0.6;
      const checked = (window.__checked ??= new WeakSet());
      const out = {};
      for (const id of Object.keys(w.actors)) {
        const at = w.whereIs(id);
        // a walk not seen before: its whole path, every 15 cm
        let above = 0;
        let where = null;
        if (at.path && !checked.has(at.path)) {
          checked.add(at.path);
          const p = at.path;
          for (let i = 1; i < p.length; i++) {
            const n = Math.max(1, Math.ceil(Math.hypot(p[i].x - p[i - 1].x, p[i].z - p[i - 1].z) / 0.15));
            for (let k = 0; k <= n; k++) {
              const x = p[i - 1].x + ((p[i].x - p[i - 1].x) * k) / n;
              const z = p[i - 1].z + ((p[i].z - p[i - 1].z) * k) / n;
              if (bySeat(at.spot, x, z) || bySeat(at.to, x, z)) continue;
              const h = over(x, z);
              if (h > above) {
                above = h;
                where = [+x.toFixed(2), +z.toFixed(2)];
              }
            }
          }
        }
        out[id] = {
          spot: at.spot,
          to: at.to,
          walking: at.walking,
          held: at.held,
          state: office.agents[id].state,
          place: w.placeFor(id, office, false),
          idleSpot: ['tavern', 'yard', 'court', 'garden'].includes(spots[at.spot].room),
          above: +above.toFixed(2),
          where,
        };
      }
      return { t: performance.now(), ended: w.ended, out };
    }, SEATED);
    seen.samples++;
    for (const [id, a] of Object.entries(s.out)) {
      const was = last[id];
      if (a.walking && !was?.walking) seen.walks++;
      if (a.walking && was?.walking && a.to !== was.to) seen.turns++;
      if (a.held && !was?.held) seen.holds++;
      if (!a.walking) seen.places.add(`${id}@${a.spot}`);
      seen.step = Math.max(seen.step, a.above);
      const at = `${(s.t / 1000).toFixed(1)}s ${id}`;
      if (!a.walking && !a.held && a.place !== null && a.spot !== a.place)
        faults.push(`${at} stands at ${a.spot}, its place is ${a.place} (${a.state})`);
      if (!a.walking && !a.held && (a.state === 'idle' || a.state === 'done') && !a.idleSpot)
        faults.push(`${at} is ${a.state} at ${a.spot}, a work place`);
      if (a.above > 0.25)
        faults.push(`${at} walks over furniture ${a.above} m up at (${a.where}), to ${a.to}`);
      a.since = a.walking ? (was?.walking ? was.since : s.t) : null;
      if (a.walking && s.t - a.since > 60000) faults.push(`${at} has walked for over 60 s`);
      last[id] = a;
    }
    if (s.ended && endedAt === null) endedAt = s.t;
    if (endedAt !== null && s.t - endedAt > 15000) break;
    await page.waitForTimeout(500);
  }
} finally {
  await browser.close();
}
const unique = [...new Set(faults)];
console.log(
  `${seen.samples} samples: ${seen.walks} walks, ${seen.turns} turns mid-path, ${seen.holds} desk holds;` +
    ` the highest step walked over ${seen.step} m; stood at ${[...seen.places].sort().join(' ')}`,
);
for (const f of unique.slice(0, 20)) console.log('FAULT ' + f);
console.log(unique.length ? `${unique.length} faults` : 'no faults');
process.exit(unique.length ? 1 : 0);
