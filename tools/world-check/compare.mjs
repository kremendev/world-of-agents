// The view-by-view comparison of the port's renders against the town's (render.mjs, same view names).
// The rule, set before any result was seen (17 Nov): a view passes when at most 1% of its pixels differ by more than
// 16/255 in a channel and the mean difference is at most 2/255. Then every difference left is looked at in the diff
// image and either explained or fixed: passing the numbers alone isn't the end of it (4a's bloom passed them and was
// still visibly wrong). Writes <out_dir>/<view>-diff.png: the town in grey, red where the two differ.
//
//   node tools/world-check/compare.mjs <town_dir> <port_dir> <out_dir>      exit 1 when a view fails
import { PNG } from 'pngjs';
import { mkdirSync, readFileSync, readdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const [townDir, portDir, out] = process.argv.slice(2);
if (!townDir || !portDir || !out) {
  console.error('usage: node compare.mjs <town_dir> <port_dir> <out_dir>');
  process.exit(2);
}
mkdirSync(out, { recursive: true });
const STRONG = 16;
const MAX_FRACTION = 0.01;
const MAX_MEAN = 2;
let failed = 0;
const rows = [];
for (const f of readdirSync(townDir)
  .filter((n) => n.endsWith('.png'))
  .sort()) {
  const a = PNG.sync.read(readFileSync(join(townDir, f)));
  const b = PNG.sync.read(readFileSync(join(portDir, f)));
  if (a.width !== b.width || a.height !== b.height) throw new Error(`${f}: sizes differ`);
  const n = a.width * a.height;
  const diff = new PNG({ width: a.width, height: a.height });
  let strong = 0;
  let sum = 0;
  let max = 0;
  for (let i = 0; i < n; i++) {
    const o = i * 4;
    const dr = Math.abs(a.data[o] - b.data[o]);
    const dg = Math.abs(a.data[o + 1] - b.data[o + 1]);
    const db = Math.abs(a.data[o + 2] - b.data[o + 2]);
    const d = Math.max(dr, dg, db);
    sum += (dr + dg + db) / 3;
    if (d > max) max = d;
    if (d > STRONG) {
      strong++;
      diff.data[o] = 255;
      diff.data[o + 1] = Math.max(0, 200 - d * 2);
      diff.data[o + 2] = 0;
    } else {
      const grey = (a.data[o] * 0.3 + a.data[o + 1] * 0.59 + a.data[o + 2] * 0.11) * 0.45;
      diff.data[o] = diff.data[o + 1] = diff.data[o + 2] = grey;
    }
    diff.data[o + 3] = 255;
  }
  writeFileSync(join(out, f.replace('.png', '-diff.png')), PNG.sync.write(diff));
  const fraction = strong / n;
  const mean = sum / n;
  const pass = fraction <= MAX_FRACTION && mean <= MAX_MEAN;
  if (!pass) failed++;
  rows.push(
    `${pass ? 'pass' : 'FAIL'}  ${f.padEnd(14)} differing ${(fraction * 100).toFixed(3).padStart(7)}%` +
      `  mean ${mean.toFixed(2).padStart(5)}/255  max ${String(max).padStart(3)}`,
  );
}
console.log(rows.join('\n'));
console.log(failed ? `${failed} of ${rows.length} views fail` : `all ${rows.length} views pass`);
process.exit(failed ? 1 : 0);
