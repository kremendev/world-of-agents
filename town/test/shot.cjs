// Real render of the town: the page served locally with real three.js r160 (THREE_DIR: a checkout of mrdoob/three.js at
// tag r160), with a camera hook in the served test copy only (see serve.sh). Software WebGL: about a minute a shot.
// usage: THREE_DIR=... node shot.cjs <url> <views.json> <outdir>
const { chromium } = require('playwright');
const fs = require('fs'), path = require('path');
const T = process.env.THREE_DIR || path.join(__dirname, '..', '.three160');
(async () => {
  const [url, viewsFile, out] = process.argv.slice(2);
  const views = JSON.parse(fs.readFileSync(viewsFile, 'utf8'));
  const b = await chromium.launch({ args: ['--no-sandbox', '--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist'] });
  const p = await b.newPage({ viewport: { width: 1100, height: 700 } });
  const errs = [];
  p.on('pageerror', (e) => errs.push('pageerror: ' + e.message));
  p.on('console', (m) => { if (['error', 'warning'].includes(m.type())) errs.push(m.type() + ': ' + m.text().slice(0, 200)); });
  await p.route('https://cdn.jsdelivr.net/**', (route) => {
    const u = route.request().url();
    const rel = u.split('/three@0.160.0/')[1];
    route.fulfill({ status: 200, contentType: 'application/javascript', body: fs.readFileSync(path.join(T, rel), 'utf8') });
  });
  await p.goto(url);
  await p.waitForFunction(() => window.WOA && window.WOA.has3D && window.__dbg, null, { timeout: 120000 });
  await p.waitForTimeout(8000);
  await p.addStyleTag({ content: '#hud, .hud, aside, header, .rail, .panel, .timeline, #labels { display: none !important }' }).catch(() => {});
  const t0 = Date.now();
  for (const v of views) {
    await p.evaluate((v) => { const d = window.__dbg; d.camera.position.set(...v.p); d.controls.target.set(...v.t); d.controls.update(); if (v.fov) { d.camera.fov = v.fov; d.camera.updateProjectionMatrix(); } }, v);
    await p.waitForTimeout(v.wait || 2500);
    await p.screenshot({ path: path.join(out, v.name + '.png'), timeout: 240000 }); console.log('shot', v.name, Date.now() - t0);
  }
  console.log(errs.length ? errs.slice(0, 12).join('\n') : 'no errors');
  await b.close();
})();
