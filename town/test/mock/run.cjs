const { chromium } = require('playwright');
const fs = require('fs'), path = require('path');
(async () => {
  const b = await chromium.launch({ args: ['--no-sandbox'] });
  const p = await b.newPage({ viewport: { width: 1440, height: 900 } });
  const errs = [];
  p.on('pageerror', (e) => errs.push('pageerror: ' + e.message + '\n' + (e.stack || '').split('\n').slice(0, 4).join('\n')));
  p.on('console', (m) => { if (m.type() === 'error' && !/ERR_TUNNEL|Failed to load resource/.test(m.text())) errs.push('console: ' + m.text().slice(0, 300)); });
  await p.route('https://cdn.jsdelivr.net/**', (route) => {
    const u = route.request().url();
    const name = u.endsWith('three.module.js') ? 'three.module.js' : path.basename(u);
    route.fulfill({ status: 200, contentType: 'application/javascript', body: fs.readFileSync(path.join(__dirname, name), 'utf8') });
  });
  await p.goto('file://' + process.argv[2]);
  await p.waitForTimeout(2500);
  const s1 = await p.evaluate(() => ({ has3D: window.WOA.has3D, simT: window.WOA.simT }));
  // walk the whole script fast: every agent goes everywhere it can go
  await p.evaluate(() => { window.WOA.simT = 37; });
  await p.waitForTimeout(800);
  await p.evaluate(() => { window.WOA.simT = 70; });
  await p.waitForTimeout(800);
  await p.evaluate(() => { window.WOA.emit('fly', 'library'); window.WOA.openHouses = true; window.WOA.select('frontend', true); });
  await p.waitForTimeout(800);
  await p.evaluate(() => { window.WOA.simT = 121; window.WOA.emit('fly', 'overview'); });
  await p.waitForTimeout(800);
  const s2 = await p.evaluate(() => ({ simT: window.WOA.simT, agents: Object.fromEntries(Object.entries(window.WOA.agents).map(([k, a]) => [k, a.spot + (a.arrived ? '' : ' (walking)')])) }));
  console.log(JSON.stringify(s1), JSON.stringify(s2));
  console.log(errs.length ? errs.slice(0, 8).join('\n---\n') : 'no errors');
  await b.close();
})();
