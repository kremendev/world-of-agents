// Where a figure stands is clear floor (4b): every standing spot in the port, and the walk to it from its room's hub
// through its way-point, checked by rays straight down in the real scene. At a spot, a ring of eight rays 25 cm out
// and one in the middle; along the walk, a ray every 15 cm with four more 18 cm out. Each ray must meet the floor
// first: anything it meets more than 8 cm above the height a figure stands at there (groundAt(): a house's floor, the
// Forge's dais) blocks, a desk, a chair or a crate. The town's own
// standing spots are checked too, and the seated ones are the control: each stands on its chair or bench, so the ray
// at its middle must find it, or the check itself is broken.
//
//   node tools/world-check/spots.mjs <url of the render check page>      exit 1 when anything blocks
import { chromium } from 'playwright-core';

const [url] = process.argv.slice(2);
if (!url) {
  console.error('usage: node spots.mjs <url>');
  process.exit(2);
}
const browser = await chromium.launch({
  channel: 'msedge',
  headless: true,
  args: ['--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist'],
});
let failed = 0;
try {
  const page = await browser.newPage({ viewport: { width: 240, height: 150 }, reducedMotion: 'reduce' });
  page.on('pageerror', (e) => console.log('pageerror:', e.message));
  await page.goto(url);
  await page.waitForFunction(() => window.__world?.ready, null, { timeout: 300000 });
  const result = await page.evaluate(() => {
    const { THREE, scene, spots, rooms, groundY } = window.__world;
    scene.updateMatrixWorld(true);
    const SEATED = new Set(['type', 'smash', 'readsit', 'sit', 'drink']);
    const ray = new THREE.Raycaster();
    const down = new THREE.Vector3(0, -1, 0);
    const skip = (o) => {
      for (let q = o; q; q = q.parent) if (q.userData.agentId || !q.visible) return true;
      return !o.isMesh || o.material.transparent;
    };
    // what a ray straight down meets first, against the height a figure stands at there
    const probe = (x, z) => {
      ray.set(new THREE.Vector3(x, 2.1, z), down);
      ray.far = 2.5;
      const hits = ray.intersectObjects(scene.children, true).filter((h) => !skip(h.object));
      if (!hits.length) return null;
      const first = hits[0].point.y;
      const floor = groundY(x, z);
      return first - floor > 0.08
        ? { x: +x.toFixed(2), z: +z.toFixed(2), above: +(first - floor).toFixed(2) }
        : null;
    };
    const ring = (x, z, r, n) => {
      const out = [probe(x, z)];
      for (let i = 0; i < n; i++) {
        const a = (i / n) * Math.PI * 2;
        out.push(probe(x + Math.cos(a) * r, z + Math.sin(a) * r));
      }
      return out.filter(Boolean);
    };
    const rows = [];
    const controls = [];
    for (const [id, s] of Object.entries(spots)) {
      if (SEATED.has(s.pose)) {
        if (!probe(s.x, s.z)) controls.push(id);
        continue;
      }
      const blocks = ring(s.x, s.z, 0.25, 8);
      // the walk in its room: from the hub, through the way-point, to the spot (a terrace's from outside its door)
      const room = rooms[s.room];
      const start = s.anchor.startsWith('hub:') ? room.hubW : null;
      if (start) {
        const pts = [start, ...(s.viaW ? [s.viaW] : []), [s.x, s.z]];
        for (let k = 0; k + 1 < pts.length; k++) {
          const [ax, az] = pts[k];
          const [bx, bz] = pts[k + 1];
          const n = Math.max(1, Math.ceil(Math.hypot(bx - ax, bz - az) / 0.15));
          for (let i = 0; i <= n; i++)
            blocks.push(...ring(ax + ((bx - ax) * i) / n, az + ((bz - az) * i) / n, 0.18, 4));
        }
      }
      rows.push({ id, room: s.room, pose: s.pose, blocks: blocks.slice(0, 3), count: blocks.length });
    }
    return { rows, controls, seated: Object.values(spots).filter((s) => SEATED.has(s.pose)).length };
  });
  const { rows, controls, seated } = result;
  if (controls.length) {
    failed++;
    console.log(`CONTROL FAILED: no seat found under ${controls.join(', ')}`);
  } else console.log(`control: a seat found under all ${seated} seated spots`);
  for (const r of rows) {
    if (r.count) failed++;
    console.log(
      `${r.count ? 'BLOCKED' : 'clear  '} ${r.id.padEnd(16)} ${r.room.padEnd(9)} ${r.pose.padEnd(6)}` +
        (r.count
          ? ` ${r.count} rays, e.g. ${r.blocks.map((b) => `(${b.x}, ${b.z}) ${b.above} m up`).join('; ')}`
          : ''),
    );
  }
  console.log(failed ? 'the check FAILED' : `all ${rows.length} standing spots clear`);
} finally {
  await browser.close();
}
process.exit(failed ? 1 : 0);
