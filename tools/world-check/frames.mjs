// A frame's time on this PC's own GPU (docs/v4.0-plan.md, Tech, "Performance"): a page with the Forge Keep in
// headless Edge, which draws on the GPU (ANGLE on D3D11) when no software flag is given, with the frame rate and vsync
// unlocked, at one Windows scaling's viewport, after a 3 s warm-up, every frame counted for 10 s.
//
//   node tools/world-check/frames.mjs <url> <css_width> <css_height> <scale>
//   4a step 5 on a 2560 x 1440 display, browser chrome taken off: 2560 1300 1 | 2048 1040 1.25 | 1707 867 1.5
import { chromium } from 'playwright-core';

const [url, w, h, s] = process.argv.slice(2);
if (!url || !(+w > 0) || !(+h > 0) || !(+s > 0)) {
  console.error('usage: node frames.mjs <url> <css_width> <css_height> <scale>');
  process.exit(2);
}
const browser = await chromium.launch({
  channel: 'msedge',
  headless: true,
  args: ['--disable-frame-rate-limit', '--disable-gpu-vsync'],
});
const page = await (
  await browser.newContext({ viewport: { width: +w, height: +h }, deviceScaleFactor: +s })
).newPage();
await page.goto(url);
await page.waitForFunction(
  () => {
    const c = document.querySelector('canvas.world');
    return c && !c.hidden;
  },
  null,
  { timeout: 120000, polling: 200 },
);
await page.waitForTimeout(3000);
const r = await page.evaluate(
  () =>
    new Promise((done) => {
      const t = [];
      const finish = () => {
        const d = t
          .slice(1)
          .map((x, i) => x - t[i])
          .sort((a, b) => a - b);
        const c = document.querySelector('canvas.world');
        done({
          frames: d.length,
          fps: +(d.length / ((t.at(-1) - t[0]) / 1000)).toFixed(1),
          median: +d[d.length >> 1].toFixed(2),
          p95: +d[Math.floor(d.length * 0.95)].toFixed(2),
          canvas: `${c.width}x${c.height}`,
        });
      };
      const tick = (now) => {
        t.push(now);
        if (now - t[0] < 10000) requestAnimationFrame(tick);
        else finish();
      };
      requestAnimationFrame(tick);
    }),
);
console.log(
  `${s * 100}%  viewport ${w}x${h}  canvas ${r.canvas} device px  ${r.fps} fps` +
    `  frame median ${r.median} ms  p95 ${r.p95} ms  (${r.frames} frames)`,
);
await browser.close();
