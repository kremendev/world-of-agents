// Seated agents against the furniture: every agent is put on every seated spot of the served test copy (serve.sh), and
// the lowest point of its model's seat (skinned vertices near the hips) is measured against the first surface under
// its hips. A gap above 0 is floating, below 0 sinking in. Also reports which clip carries the most weight there.
// usage: THREE_DIR=... node seats.cjs <url> [reduce]      ("reduce" emulates prefers-reduced-motion)
const { chromium } = require('playwright');
const fs = require('fs'), path = require('path');
const T = process.env.THREE_DIR || path.join(__dirname, '..', '.three160');
(async () => {
  const [url, reduce] = process.argv.slice(2);
  const b = await chromium.launch({ args: ['--no-sandbox', '--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist'] });
  const p = await b.newPage({ viewport: { width: 240, height: 150 }, reducedMotion: reduce === 'reduce' ? 'reduce' : 'no-preference' });
  p.on('pageerror', (e) => console.log('pageerror:', e.message));
  await p.route('https://cdn.jsdelivr.net/**', (route) => {
    const rel = route.request().url().split('/three@0.160.0/')[1];
    route.fulfill({ status: 200, contentType: 'application/javascript', body: fs.readFileSync(path.join(T, rel), 'utf8') });
  });
  await p.goto(url);
  await p.waitForFunction(() => window.WOA && window.WOA.has3D && window.__dbg && Object.values(window.__dbg.actors).every((a) => a.c.model), null, { timeout: 180000 });
  const spots = await p.evaluate(() => {
    const W = window.WOA;
    if (!W.paused) document.getElementById('btn-pause').click();
    return Object.entries(W.data.SPOTS).filter(([, s]) => ['sit', 'readsit', 'drink', 'type', 'smash'].includes(s.pose)).map(([id]) => id);
  });
  const rows = [];
  for (const spot of spots) {
    await p.evaluate((spot) => {
      const W = window.WOA, D = window.__dbg, sp = W.data.SPOTS[spot];
      for (const [id, a] of Object.entries(D.actors)) {
        a.path = []; a.from = spot;
        W.agents[id].spot = spot; W.agents[id].arrived = true; W.agents[id].needs = false;
        a.c.root.position.set(sp.x, a.c.root.position.y, sp.z); a.c.root.rotation.y = sp.ry;
      }
    }, spot);
    // a frame's step is capped at 0.05 s and software WebGL draws a few frames a second: wait until every crossfade is over
    await p.waitForFunction((spot) => {
      const want = { type: 'play_mobile_game', smash: 'play_mobile_game' }[window.WOA.data.SPOTS[spot].pose] || 'sit';
      return Object.values(window.__dbg.actors).every((a) => a.c.model.cur === want && a.c.model.acts[want].getEffectiveWeight() > 0.999);
    }, spot, { timeout: 180000, polling: 500 });
    // then 15 more frames, for the height and the legs to ease in (software WebGL can draw under one a second)
    const f0 = await p.evaluate(() => window.__dbg.frames);
    await p.waitForFunction((f0) => window.__dbg.frames >= f0 + 15, f0, { timeout: 300000, polling: 1000 });
    rows.push(...await p.evaluate((spot) => {
      const { THREE, scene, actors } = window.__dbg;
      const agentOf = (o) => { for (let q = o; q; q = q.parent) if (q.userData.agentId) return q.userData.agentId; return null; };
      const shown = (o) => { for (let q = o; q; q = q.parent) if (!q.visible) return false; return true; };
      scene.updateMatrixWorld(true);
      const out = [];
      for (const [id, a] of Object.entries(actors)) {
        const m = a.c.model.obj, M = a.c.model, H = a.c.H, r = a.c.root.position;
        const y = (name) => m.getObjectByName(name).getWorldPosition(new THREE.Vector3()).y - r.y;
        const hp = m.getObjectByName('mixamorigHips').getWorldPosition(new THREE.Vector3());
        // the seat: the highest surface under the hips at seat height (tables stand higher, the floor lower)
        // as the page does: five rays close around the hips (a bench's slats have a gap in the middle), the highest counts
        const hits = [[0, 0], [0.05, 0], [-0.05, 0], [0, 0.05], [0, -0.05]].flatMap(([dx, dz]) => new THREE.Raycaster(new THREE.Vector3(hp.x + dx, r.y + 1.2, hp.z + dz), new THREE.Vector3(0, -1, 0), 0, 1.3).intersectObjects(scene.children, true)
          .filter((h) => !agentOf(h.object) && shown(h.object) && h.object.isMesh && !h.object.material.transparent && h.point.y - r.y > 0.25 && h.point.y - r.y < 0.66).slice(0, 1))
          .sort((a, b) => b.point.y - a.point.y);
        const acts = M.acts, top = Object.entries(acts).sort((x, z) => z[1].getEffectiveWeight() - x[1].getEffectiveWeight())[0];
        out.push({ spot, id, H, pose: window.WOA.data.SPOTS[spot].pose, clip: top[0], w: top[1].getEffectiveWeight(),
          seat: hits.length ? hits[0].point.y - r.y : null, hips: hp.y - r.y,
          ankle: Math.min(y('mixamorigLeftFoot'), y('mixamorigRightFoot')), toe: Math.min(y('mixamorigLeftToeBase'), y('mixamorigRightToeBase')),
          off: m.position.y - M.baseY, baseY: M.baseY, seatClip: M.seat[top[0]], rigSeat: a.c.seatY });
      }
      return out;
    }, spot));
  }
  fs.writeFileSync(process.env.SEATS_JSON || '/dev/null', JSON.stringify(rows));
  const f = (x, d = 2) => (x === null || x === undefined ? '  -  ' : x.toFixed(d));
  for (const r of rows) console.log(`${r.spot.padEnd(14)} ${r.id.padEnd(9)} ${(r.clip + ' ' + f(r.w)).padEnd(22)} seat ${f(r.seat)}  hips ${f(r.hips)} (+${f(r.seat === null ? null : r.hips - r.seat)})  ankle ${f(r.ankle)}  toe ${f(r.toe)}  off ${f(r.off)}`);
  await b.close();
})();
