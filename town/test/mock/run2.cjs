const { chromium } = require('playwright');
const fs = require('fs'), path = require('path');
(async () => {
  const b = await chromium.launch({ args: ['--no-sandbox'] });
  const p = await b.newPage({ viewport: { width: 1440, height: 900 } });
  const errs = [];
  p.on('pageerror', (e) => errs.push('pageerror: ' + e.message + '\n' + (e.stack || '').split('\n').slice(0, 3).join('\n')));
  p.on('console', (m) => { if (m.type() === 'error' && !/ERR_TUNNEL|Failed to load resource/.test(m.text())) errs.push('console: ' + m.text().slice(0, 300)); });
  await p.route('https://cdn.jsdelivr.net/**', (route) => { const u = route.request().url(); route.fulfill({ status: 200, contentType: 'application/javascript', body: fs.readFileSync(path.join(__dirname, u.endsWith('three.module.js') ? 'three.module.js' : path.basename(u)), 'utf8') }); });
  await p.goto('file://' + process.argv[2]);
  await p.waitForTimeout(1500);
  await p.evaluate(() => { window.WOA.simT = 58; });
  await p.waitForTimeout(500);
  await p.click('.rail [data-room="tavern"]');
  await p.waitForTimeout(400);
  await p.click('#floor-upper');
  await p.waitForTimeout(400);
  if (process.argv[3]) await p.screenshot({ path: path.join(process.argv[3], 'room-tavern.png') }); // optional: an output folder
  await p.evaluate(() => window.WOA.emit('fly', 'stable'));
  await p.waitForTimeout(300);
  const stable = await p.evaluate(() => document.getElementById('room-name').textContent);
  await p.click('#room-close');
  await p.waitForTimeout(200);
  const hidden = await p.evaluate(() => document.getElementById('room').hidden);

  await p.evaluate(() => window.WOA.emit('fly', 'workshop'));
  await p.waitForTimeout(300);
  if (process.argv[3]) await p.screenshot({ path: path.join(process.argv[3], 'room-workshop.png') }); // optional: an output folder
  console.log('stable card:', stable, '| closed:', hidden);
  console.log(errs.length ? errs.slice(0, 8).join('\n---\n') : 'no errors');
  await b.close();
})();
