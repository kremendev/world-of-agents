// Where a figure stands is clear floor (4b): every standing spot in the port, and the walk to it from its room's hub
// through its way-point, checked by rays straight down in the real scene. At a spot, a ring of eight rays 25 cm out
// and one in the middle; along the walk, a ray every 15 cm with four more 18 cm out. Each ray must meet the floor
// first: anything it meets more than 8 cm above the height a figure stands at there (groundAt(): a house's floor, the
// Forge's dais) blocks, a desk, a chair or a crate. The town's own
// standing spots are checked too, and the seated ones are the control: each stands on its chair or bench, so the ray
// at its middle must find it, or the check itself is broken.
//
// Then the room views (Dima, 20 Nov): each room as the rooms rail shows it, flown to from the whole keep, so from the
// side the camera starts on. From there, a ray from the camera to each of the room's spots, at the head of the smallest
// figure that stands or sits there (the Lead's, the smallest of all, where none does), must meet nothing first but a
// figure, something drawn invisible (a house's picking box) or the room's own walls the view cuts away. The control:
// from the same head straight down, a ray meets the floor or the seat.
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
  // the room views, one at a time: fly there as the rail does from the whole keep, let the houses open, then the rays
  const views = [];
  for (const id of Object.keys(await page.evaluate(() => window.__world.rooms))) {
    const at = await page.evaluate((id) => {
      window.__world.flyToRoom('overview');
      window.__world.flyToRoom(id);
      return window.__world.frames;
    }, id);
    await page.waitForFunction((at) => window.__world.frames >= at + 4, at, { timeout: 300000 });
    views.push(
      await page.evaluate((id) => {
        const { THREE, scene, camera, spots, houses, figures, places, idleSpots, restSpots, groundY } =
          window.__world;
        scene.updateMatrixWorld(true);
        const SEATED = new Set(['type', 'smash', 'readsit', 'sit', 'drink']);
        // who stands or sits at each spot: work, scrolls, visits (the Reviewer's), the Lead's check, idle life, rest
        const users = {};
        const use = (spot, agent) => (users[spot] ??= new Set()).add(agent);
        for (const [a, s] of Object.entries(places.work)) use(s, a);
        for (const [a, s] of Object.entries(places.fetch)) use(s, a);
        for (const s of Object.values(places.visit)) use(s, 'reviewer');
        use(places.check, 'lead');
        for (const [a, list] of Object.entries(idleSpots)) for (const s of list) use(s, a);
        for (const [a, s] of Object.entries(restSpots)) use(s, a);
        // the room's own walls the view cuts away (folded down), the only thing a ray may pass
        const house = houses[id];
        const cut = house
          ? Object.values(house.sides)
              .filter((w) => w.s < 0.5)
              .map((w) => w.g)
          : [];
        const within = (o, g) => {
          for (let q = o; q; q = q.parent) if (q === g) return true;
          return false;
        };
        const skip = (o) => {
          for (let q = o; q; q = q.parent) if (q.userData.agentId || !q.visible) return true;
          return (
            !o.isMesh ||
            o.material.transparent ||
            o.material.visible === false ||
            cut.some((g) => within(o, g))
          );
        };
        const owner = (o) => {
          for (const [hid, h] of Object.entries(houses)) if (within(o, h.g)) return `the ${hid} house`;
          return 'the grounds';
        };
        const ray = new THREE.Raycaster();
        const eye = camera.position.clone();
        const rows = [];
        let control = 0;
        for (const [sid, s] of Object.entries(spots)) {
          if (s.room !== id) continue;
          const seated = SEATED.has(s.pose);
          const who = [...(users[sid] ?? ['lead'])];
          const h = Math.min(...who.map((a) => figures[a].H)) * (seated ? 0.74 : 1);
          const head = new THREE.Vector3(s.x, groundY(s.x, s.z) + h - 0.1, s.z);
          const dist = eye.distanceTo(head);
          ray.set(eye, head.clone().sub(eye).normalize());
          ray.near = 0;
          ray.far = dist - 0.15;
          const hit = ray.intersectObjects(scene.children, true).find((x) => !skip(x.object));
          // the control: from the head straight down, the floor or the seat
          ray.set(head, new THREE.Vector3(0, -1, 0));
          ray.far = h + 0.5;
          if (ray.intersectObjects(scene.children, true).some((x) => !skip(x.object))) control++;
          rows.push({
            spot: sid,
            head: +head.y.toFixed(2),
            blocked: hit
              ? `${owner(hit.object)}, ${hit.distance.toFixed(1)} m out of ${dist.toFixed(1)}, ${hit.point.y.toFixed(1)} m up`
              : null,
          });
        }
        return { id, camera: eye.toArray().map((v) => +v.toFixed(1)), cut: cut.length, rows, control };
      }, id),
    );
  }
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
  console.log(failed ? 'the floor check FAILED' : `all ${rows.length} standing spots clear`);
  let seen = 0;
  for (const v of views) {
    console.log(`view of ${v.id}: camera at ${v.camera.join(', ')}, ${v.cut} walls cut away`);
    if (v.control !== v.rows.length) {
      failed++;
      console.log(`  CONTROL FAILED: the floor found under ${v.control} of ${v.rows.length} spots`);
    }
    for (const r of v.rows) {
      if (r.blocked) failed++;
      else seen++;
      console.log(
        `  ${r.blocked ? 'HIDDEN' : 'seen  '} ${r.spot.padEnd(16)} head ${r.head} m${r.blocked ? `, blocked by ${r.blocked}` : ''}`,
      );
    }
  }
  const all = views.reduce((n, v) => n + v.rows.length, 0);
  console.log(failed ? 'the check FAILED' : `all ${all} spots seen from their room's view (${seen})`);
} finally {
  await browser.close();
}
process.exit(failed ? 1 : 0);
