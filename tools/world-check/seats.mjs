// Seated figures against the furniture (4b), the town's test/seats.cjs (forge-keep, 89ae8b1) for both worlds: every
// figure is put on every seated spot, and once its seated clip has faded in and 15 more frames have passed, its hips are
// measured against the seat under them (the page's five rays) and its toes against the floor. The town's rule, from
// its commit: within 0.4 cm of the hips' target (5.5% of the figure's height above the seat) and toes within 5 cm of
// the floor, every figure on every seat, with and without reduced motion. Exit 1 when a row misses it.
//
//   node tools/world-check/seats.mjs port <url> [reduce]
//   THREE_DIR=<three@0.160.0 folder> node tools/world-check/seats.mjs town <url> [reduce]
//   SEATS_JSON=<file> writes the rows. It counts frames, not seconds: in software WebGL a run takes minutes.
import { chromium } from 'playwright-core';
import { readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const [mode, url, reduce] = process.argv.slice(2);
if (!['town', 'port'].includes(mode) || !url) {
  console.error('usage: node seats.mjs <town|port> <url> [reduce]');
  process.exit(2);
}
const THREE_DIR = process.env.THREE_DIR;
if (mode === 'town' && !THREE_DIR) {
  console.error('town needs THREE_DIR: a folder holding three@0.160.0');
  process.exit(2);
}
const HIPS_TOL = 0.004;
const TOE_TOL = 0.05;

const browser = await chromium.launch({
  channel: 'msedge',
  headless: true,
  args: ['--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist'],
});
const page = await browser.newPage({
  viewport: { width: 240, height: 150 },
  reducedMotion: reduce === 'reduce' ? 'reduce' : 'no-preference',
});
page.on('pageerror', (e) => console.log('pageerror:', e.message));
if (mode === 'town') {
  await page.route('https://cdn.jsdelivr.net/**', (route) => {
    const rel = route.request().url().split('/three@0.160.0/')[1];
    route.fulfill({
      status: 200,
      contentType: 'application/javascript',
      body: readFileSync(join(THREE_DIR, rel), 'utf8'),
    });
  });
}
await page.goto(url);
// one face for both worlds: the figures, the spots, three, a frame count, and a way to put a figure on a spot
await page.waitForFunction(
  (mode) =>
    mode === 'town'
      ? window.WOA?.has3D && window.__dbg && Object.values(window.__dbg.actors).every((a) => a.c.model)
      : window.__world?.ready,
  mode,
  { timeout: 300000 },
);
await page.evaluate((mode) => {
  if (mode === 'town') {
    const W = window.WOA;
    const D = window.__dbg;
    if (!W.paused) document.getElementById('btn-pause').click();
    window.__seat = {
      THREE: D.THREE,
      scene: D.scene,
      spots: W.data.SPOTS,
      frames: () => D.frames,
      ids: Object.keys(D.actors),
      fig: (id) => ({ root: D.actors[id].c.root, H: D.actors[id].c.H, M: D.actors[id].c.model }),
      place(id, spot) {
        const a = D.actors[id];
        const sp = W.data.SPOTS[spot];
        a.path = [];
        a.from = spot;
        Object.assign(W.agents[id], { spot, arrived: true, needs: false });
        a.c.root.position.set(sp.x, a.c.root.position.y, sp.z);
        a.c.root.rotation.y = sp.ry;
      },
    };
  } else {
    const w = window.__world;
    window.__seat = {
      THREE: w.THREE,
      scene: w.scene,
      spots: w.spots,
      frames: () => w.frames,
      ids: Object.keys(w.actors),
      fig: (id) => ({ root: w.actors[id].root, H: w.actors[id].H, M: w.actors[id].model }),
      place: (id, spot) => w.place(id, spot),
    };
  }
}, mode);
const spots = await page.evaluate(() =>
  Object.entries(window.__seat.spots)
    .filter(([, s]) => ['sit', 'readsit', 'drink', 'type', 'smash'].includes(s.pose))
    .map(([id]) => id),
);
const rows = [];
for (const spot of spots) {
  await page.evaluate((spot) => {
    for (const id of window.__seat.ids) window.__seat.place(id, spot);
  }, spot);
  // a frame's step is capped at 0.05 s and software WebGL draws a few frames a second: wait until every crossfade is over
  await page.waitForFunction(
    (spot) => {
      const S = window.__seat;
      const want = { type: 'play_mobile_game', smash: 'play_mobile_game' }[S.spots[spot].pose] || 'sit';
      return S.ids.every((id) => {
        const M = S.fig(id).M;
        return M.cur === want && M.acts[want].getEffectiveWeight() > 0.999;
      });
    },
    spot,
    { timeout: 300000, polling: 500 },
  );
  // then 15 more frames, for the height and the legs to ease in
  const f0 = await page.evaluate(() => window.__seat.frames());
  await page.waitForFunction((f0) => window.__seat.frames() >= f0 + 15, f0, {
    timeout: 300000,
    polling: 1000,
  });
  rows.push(
    ...(await page.evaluate((spot) => {
      const { THREE, scene, ids, fig, spots } = window.__seat;
      const agentOf = (o) => {
        for (let q = o; q; q = q.parent) if (q.userData.agentId) return q.userData.agentId;
        return null;
      };
      const shown = (o) => {
        for (let q = o; q; q = q.parent) if (!q.visible) return false;
        return true;
      };
      scene.updateMatrixWorld(true);
      const out = [];
      for (const id of ids) {
        const { root, H, M } = fig(id);
        const m = M.obj;
        const r = root.position;
        const y = (name) => m.getObjectByName(name).getWorldPosition(new THREE.Vector3()).y - r.y;
        const hp = m.getObjectByName('mixamorigHips').getWorldPosition(new THREE.Vector3());
        // the seat as the page finds it: five rays close around the hips, the highest answer counts
        const hits = [
          [0, 0],
          [0.05, 0],
          [-0.05, 0],
          [0, 0.05],
          [0, -0.05],
        ]
          .flatMap(([dx, dz]) =>
            new THREE.Raycaster(
              new THREE.Vector3(hp.x + dx, r.y + 1.2, hp.z + dz),
              new THREE.Vector3(0, -1, 0),
              0,
              1.3,
            )
              .intersectObjects(scene.children, true)
              .filter(
                (h) =>
                  !agentOf(h.object) &&
                  shown(h.object) &&
                  h.object.isMesh &&
                  !h.object.material.transparent &&
                  h.point.y - r.y > 0.25 &&
                  h.point.y - r.y < 0.66,
              )
              .slice(0, 1),
          )
          .sort((a, b) => b.point.y - a.point.y);
        out.push({
          spot,
          id,
          H,
          pose: spots[spot].pose,
          clip: M.cur,
          seat: hits.length ? hits[0].point.y - r.y : null,
          hips: hp.y - r.y,
          toe: Math.min(y('mixamorigLeftToeBase'), y('mixamorigRightToeBase')),
        });
      }
      return out;
    }, spot)),
  );
}
await browser.close();
if (process.env.SEATS_JSON) writeFileSync(process.env.SEATS_JSON, JSON.stringify(rows, null, 1));
const f = (x) => (x === null ? '   -  ' : (x >= 0 ? ' ' : '') + x.toFixed(3));
let missed = 0;
for (const r of rows) {
  const off = r.seat === null ? null : r.hips - r.seat - 0.055 * r.H;
  const ok = off !== null && Math.abs(off) <= HIPS_TOL && Math.abs(r.toe) <= TOE_TOL;
  if (!ok) missed++;
  console.log(
    `${ok ? 'ok  ' : 'MISS'} ${r.spot.padEnd(14)} ${r.id.padEnd(9)} ${r.clip.padEnd(17)} seat ${f(r.seat)}` +
      `  hips ${f(r.hips)}  off target ${f(off)}  toe ${f(r.toe)}`,
  );
}
console.log(missed ? `${missed} of ${rows.length} miss` : `${rows.length} of ${rows.length} within the rule`);
process.exit(missed ? 1 : 0);
