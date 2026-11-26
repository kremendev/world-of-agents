// The accessibility scan (T, Dima, 21 Nov, in place of a Narrator pass): axe-core over each state of the HUD in the
// installed Edge, on the bundled hall's page from the stand-in hall (hall-standin.ts), its policy on. States: loading,
// a run at work, a card open, needs-you, the drawer closed, a phone at 320 x 480 with a card open, and (Dima's desktop
// pass, 25 Nov) the review board open in the drawer, at 1440 x 900 and on a phone at 360 x 640, and (4.0.1) the phone's
// Demo top bar at 360, with New task open and without. Prints every
// violation by state; exits 1 on any serious or critical one. axe runs through the browser's own channel, not as a page
// script, so the page's policy stays as it is.
//
//   npm run build:plugin-hall
//   npx tsx tools/world-check/hall-standin.ts plugin/hall/page 4397
//   node tools/world-check/axe.mjs http://127.0.0.1:4397/
import { chromium } from 'playwright-core';
import { readFileSync } from 'node:fs';
import { createRequire } from 'node:module';

const url = process.argv[2];
if (!url || !/^http:\/\/127\.0\.0\.1:\d+\/$/.test(url) || url.includes(':4319/')) {
  console.error('usage: node axe.mjs http://127.0.0.1:<port, not 4319>/');
  process.exit(2);
}
const AXE = readFileSync(createRequire(import.meta.url).resolve('axe-core/axe.min.js'), 'utf8');
const wait = (ms) => new Promise((r) => setTimeout(r, ms));
const ctl = (body) =>
  fetch(`${url}ctl`, {
    method: 'POST',
    body: JSON.stringify(body),
    headers: { 'content-type': 'application/json' },
  });
let at = 1;
const ev = (e) => ({ ...e, at: at++ });
const state = (agent, s, taskId) => ev({ type: 'state', agent, state: s, ...(taskId ? { taskId } : {}) });
const task = (taskId, title, owner) => ev({ type: 'task', taskId, title, owner, status: 'in-progress' });
const RUN = () => [
  ev({ type: 'run', text: 'Build a sign-up form with an API' }),
  task('t1', 'Design the form', 'designer'),
  task('t2', 'Build the form', 'frontend'),
  task('t3', 'Sign-up API', 'backend'),
  state('lead', 'waiting'),
  state('designer', 'writing', 't1'),
  state('frontend', 'writing', 't2'),
  state('backend', 'writing', 't3'),
];
// two of the Reviewer's reports in its format, so the review board has a review and an earlier one
const report = (verdict) =>
  [
    'I reviewed the sign-up form and its API.',
    '',
    '## Verdict',
    '',
    verdict,
    '',
    '## Files checked',
    '',
    '- server/routes/signup.ts',
    '',
    '## Findings',
    '',
    verdict === 'Approved'
      ? '- None'
      : '- server/routes/signup.ts:12: the email is never checked for its length',
    '',
    '## Checks run',
    '',
    '- Read server/routes/signup.ts',
    '',
    '## Left for the Lead',
    '',
    '- Run the tests',
  ].join('\n');
const REVIEWS = () => [
  ev({ type: 'message', from: 'reviewer', to: 'lead', text: report('Changes needed') }),
  ev({ type: 'message', from: 'reviewer', to: 'lead', text: report('Approved') }),
];
// the Reviewer's card, then its "Show in Activity": the review board over the drawer's feed
async function openBoard(page) {
  await page.locator('.hud-agent[data-agent="reviewer"]').click();
  await wait(500);
  await page.getByRole('button', { name: /^Show in Activity/ }).click();
  await page.waitForSelector('.review-board');
  await wait(500);
}

const results = [];
const errors = [];
async function scan(page, name) {
  if (!(await page.evaluate(() => 'axe' in window))) await page.evaluate(AXE);
  const r = await page.evaluate(() =>
    window.axe.run(document, { resultTypes: ['violations', 'incomplete'] }).then((x) => ({
      violations: x.violations.map((v) => ({
        id: v.id,
        impact: v.impact,
        help: v.help,
        nodes: v.nodes.map((n) => n.target.join(' ')).slice(0, 4),
        count: v.nodes.length,
      })),
      incomplete: x.incomplete.map(
        (v) => `${v.id} (${v.nodes.length}: ${v.nodes.map((n) => n.target.join(' ')).join(' | ')})`,
      ),
    })),
  );
  results.push({ name, ...r });
  const bad = r.violations.filter((v) => v.impact === 'serious' || v.impact === 'critical');
  console.log(`${name}: ${r.violations.length} violations, ${bad.length} serious or critical`);
  for (const v of r.violations)
    console.log(`  ${v.impact} ${v.id}: ${v.help} (${v.count}) ${v.nodes.join(' | ')}`);
  if (r.incomplete.length) console.log(`  to look at by hand: ${r.incomplete.join(', ')}`);
}

const browser = await chromium.launch({
  channel: 'msedge',
  headless: true,
  args: ['--ignore-gpu-blocklist'],
});
// the profile Edge runs with is removed when it closes: in finally, so a scan that throws leaves none behind
try {
  async function open(width, height, { slow = false } = {}) {
    const context = await browser.newContext({ viewport: { width, height }, deviceScaleFactor: 1 });
    const page = await context.newPage();
    page.on('pageerror', (e) => errors.push(`${width}: ${e.message}`));
    page.on('console', (m) => {
      if (['error', 'warning'].includes(m.type())) errors.push(`${width}: ${m.text().slice(0, 200)}`);
    });
    // the world's chunk held back, so the page stays in its loading state long enough to scan
    if (slow) await page.route('**/assets/world-*.js', async (r) => (await wait(8000), r.continue()));
    await page.goto(url);
    return { context, page };
  }
  const ready = (page) => page.waitForSelector('canvas.world:not([hidden])', { timeout: 120_000 });

  await ctl({ reset: true });
  {
    const { context, page } = await open(1440, 900, { slow: true });
    await page.waitForSelector('.hud-loading', { timeout: 30_000 });
    await scan(page, 'loading');
    await context.close();
  }
  await ctl({ events: RUN() });
  {
    const { context, page } = await open(1440, 900);
    await ready(page);
    await wait(2000);
    await scan(page, 'working');
    await page.locator('.hud-agent[data-agent="designer"]').click();
    await wait(500);
    await scan(page, 'card');
    await page.keyboard.press('Escape');
    await ctl({ events: [state('backend', 'needs-you', 't3')] });
    await page.waitForSelector('.hud-needs');
    await scan(page, 'needs-you');
    await page.getByRole('button', { name: 'Close the drawer' }).click();
    await page.waitForSelector('.hud-handle');
    await scan(page, 'drawer closed');
    await context.close();
  }
  {
    const { context, page } = await open(320, 480);
    await ready(page);
    await wait(2000);
    await page.locator('.hud-agent[data-agent="designer"]').click();
    await wait(500);
    await scan(page, 'phone 320 with a card');
    await context.close();
  }
  await ctl({ events: REVIEWS() });
  for (const [width, height, name] of [
    [1440, 900, 'review board in the drawer'],
    [360, 640, 'phone 360 with the review board'],
  ]) {
    const { context, page } = await open(width, height);
    await ready(page);
    await wait(2000);
    await openBoard(page);
    await scan(page, name);
    await context.close();
  }
  // the phone's Demo top bar (4.0.1): its icon buttons, and the task input open in place of them
  {
    const { context, page } = await open(360, 640);
    await ready(page);
    await wait(1500);
    await page.getByRole('button', { name: 'Play demo' }).click();
    await page.waitForSelector('.hud-top .hud-group');
    await wait(500);
    await scan(page, 'phone 360 in the Demo');
    await page.getByRole('button', { name: 'New task' }).click();
    await page.waitForSelector('.hud-writing');
    await scan(page, 'phone 360 with New task open');
    await context.close();
  }
} finally {
  await browser.close();
}
const serious = results.flatMap((r) =>
  r.violations
    .filter((v) => v.impact === 'serious' || v.impact === 'critical')
    .map((v) => `${r.name}: ${v.id}`),
);
console.log(errors.length ? `console:\n${errors.join('\n')}` : 'console: nothing');
console.log(
  serious.length
    ? `FAILED, serious or critical:\n${serious.join('\n')}`
    : 'no serious or critical violations',
);
process.exit(serious.length ? 1 : 0);
