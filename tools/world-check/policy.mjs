// Opens a page in headless Edge and reports what its Content-Security-Policy refused (every
// securitypolicyviolation, recorded by an init script, which the policy doesn't govern), the console's errors and
// warnings, and either the model check's result or whether the Forge Keep's canvas came up (docs/v4.0-plan.md,
// Security, "Checked"). A check needs its control: the same page served with no policy.
//
//   node tools/world-check/policy.mjs models <url>    the page models-page.mjs builds, served by serve.ts
//   node tools/world-check/policy.mjs page <url>      the app: the Pages build, or the plugin's own page
//   SHOT=<file.png> also saves a screenshot of the page.
import { chromium } from 'playwright-core';

const [kind, url] = process.argv.slice(2);
if (!['models', 'page'].includes(kind) || !url) {
  console.error('usage: node policy.mjs <models|page> <url>');
  process.exit(2);
}
const browser = await chromium.launch({
  channel: 'msedge',
  headless: true,
  args: ['--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist'],
});
// the profile Edge runs with is removed when it closes: in finally, so a check that throws leaves none behind
try {
  const page = await (
    await browser.newContext({ viewport: { width: 1400, height: 900 }, deviceScaleFactor: 1 })
  ).newPage();
  const notes = [];
  page.on('console', (m) => {
    // three warns about flatShading on the toon materials, which say nothing about the policy
    if (['error', 'warning'].includes(m.type()) && !m.text().includes('flatShading')) {
      notes.push(`${m.type()}: ${m.text().slice(0, 200)}`);
    }
  });
  page.on('pageerror', (e) => notes.push('pageerror: ' + e.message.slice(0, 200)));
  page.on('response', (r) => {
    if (r.status() >= 400) notes.push(`http ${r.status()} ${r.url()}`);
  });
  await page.addInitScript(() => {
    window.__violations = [];
    document.addEventListener('securitypolicyviolation', (e) =>
      window.__violations.push(
        `${e.effectiveDirective} ${e.blockedURI || '(inline)'} ${e.sample || ''}`.trim(),
      ),
    );
  });
  await page.goto(url);
  let out;
  if (kind === 'models') {
    await page.waitForFunction(() => window.__result, null, { timeout: 60000 });
    out = await page.evaluate(() => window.__result);
  } else {
    const t0 = Date.now();
    const shown = await page
      .waitForFunction(
        () => {
          const c = document.querySelector('canvas.world');
          if (c && !c.hidden) return 'world';
          if (!c && document.querySelector('.hall') && performance.now() > 5000) return 'hall';
          return false;
        },
        null,
        { timeout: 600000, polling: 500 },
      )
      .then((h) => h.jsonValue());
    out = {
      shown,
      ms: Date.now() - t0,
      policyMeta: await page.evaluate(
        () => document.querySelector('meta[http-equiv="Content-Security-Policy"]')?.content ?? null,
      ),
    };
    await page.waitForTimeout(3000);
    if (process.env.SHOT) await page.screenshot({ path: process.env.SHOT });
  }
  out.violations = await page.evaluate(() => window.__violations);
  out.notes = notes;
  console.log(JSON.stringify(out, null, 1));
} finally {
  await browser.close();
}
