// Renders the same views of the town (forge-keep, three r160) or of the port (src/world, the app's three) for the
// view-by-view comparison (docs/v4.0-plan.md, Tech). Both in the same headless Edge with software WebGL, the same
// viewport, pixel ratio, reduced motion, view order (a house's cutaway depends on the view before) and frames per view.
//
//   node tools/world-check/render.mjs port <url> <views.json> <out_dir>
//   THREE_DIR=<three@0.160.0 folder> node tools/world-check/render.mjs town <url> <views.json> <out_dir>
//
// port: the render check's page on the dev server, http://localhost:5173/src/world/check/index.html
// town: the town's test copy (town.mjs, served by serve.ts); its three comes from THREE_DIR in place of the CDN.
// NOSHADOW=1: no light casts a shadow, in either, to tell three's shadow sampling apart from everything else.
import { chromium } from 'playwright-core';
import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const [mode, url, viewsFile, out] = process.argv.slice(2);
if (!['town', 'port'].includes(mode) || !url || !viewsFile || !out) {
  console.error('usage: node render.mjs <town|port> <url> <views.json> <out_dir>');
  process.exit(2);
}
const THREE_DIR = process.env.THREE_DIR;
if (mode === 'town' && !THREE_DIR) {
  console.error(
    'town needs THREE_DIR: a folder holding three@0.160.0, as `npm pack three@0.160.0` unpacks it',
  );
  process.exit(2);
}
const views = JSON.parse(readFileSync(viewsFile, 'utf8'));
const FRAMES_PER_VIEW = 8;
mkdirSync(out, { recursive: true });

const browser = await chromium.launch({
  channel: 'msedge',
  headless: true,
  args: ['--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist'],
});
const context = await browser.newContext({
  viewport: { width: 1100, height: 700 },
  deviceScaleFactor: 1,
  reducedMotion: 'reduce',
});
const page = await context.newPage();
const errors = [];
page.on('pageerror', (e) => errors.push('pageerror: ' + e.message));
page.on('response', (r) => {
  if (r.status() >= 400) errors.push(`http ${r.status()}: ${r.url().slice(0, 160)}`);
});
page.on('console', (m) => {
  if (['error', 'warning'].includes(m.type())) errors.push(m.type() + ': ' + m.text().slice(0, 240));
});
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
const t0 = Date.now();
await page.goto(url);
if (mode === 'town') {
  await page.waitForFunction(() => window.WOA && window.WOA.has3D && window.__dbg, null, { timeout: 300000 });
  // the comparison is of the world: the town's figures and its HUD go
  await page.evaluate(() => {
    for (const a of Object.values(window.__dbg.actors)) a.c.root.visible = false;
  });
  await page
    .addStyleTag({
      content:
        '#hud, .hud, aside, header, .rail, .panel, .timeline, #labels, .tag, .roomlabel { display: none !important }',
    })
    .catch(() => {});
} else {
  await page.waitForFunction(() => window.__world && window.__world.ready, null, { timeout: 300000 });
}
const hook = mode === 'town' ? '__dbg' : '__world';
if (process.env.NOSHADOW === '1') {
  const n = await page.evaluate((h) => {
    let count = 0;
    window[h].scene.traverse((o) => {
      if (o.isLight && o.castShadow) {
        count++;
        o.castShadow = false;
      }
    });
    return count;
  }, hook);
  console.log('lights that cast a shadow, turned off:', n);
}
console.log('ready', Date.now() - t0, 'ms');
const info = {};
for (const v of views) {
  const before = await page.evaluate(
    ([h, v]) => {
      const w = window[h];
      w.camera.position.set(...v.p);
      w.controls.target.set(...v.t);
      w.controls.update();
      return w.frames;
    },
    [hook, v],
  );
  await page.waitForFunction(([h, n]) => window[h].frames >= n, [hook, before + FRAMES_PER_VIEW], {
    timeout: 600000,
    polling: 200,
  });
  info[v.name] = await page.evaluate(
    ([h]) => {
      const w = window[h];
      const round = (a) => a.map((x) => +x.toFixed(4));
      return { p: round(w.camera.position.toArray()), t: round(w.controls.target.toArray()) };
    },
    [hook],
  );
  await page.screenshot({ path: join(out, v.name + '.png'), timeout: 600000 });
  console.log('shot', v.name, Date.now() - t0, 'ms');
}
writeFileSync(join(out, 'info.json'), JSON.stringify({ info, errors }, null, 1));
console.log(errors.length ? errors.slice(0, 15).join('\n') : 'no errors');
await browser.close();
