/**
 * The Forge Keep's scatter (v4.0.0, 4a): trees, bushes, rocks, grass and flowers kept off roads and buildings, poles
 * along the big roads, and crows. Ported from `town/src/m5b-scatter.js` (forge-keep, 89ae8b1), in its order: every
 * placement draws on the shared generator. Trees and bushes are the Blender flora set's, as in the town with the set.
 */
import * as THREE from 'three';
import {
  BROOK_LINE,
  CASTLE,
  DECOR,
  DOCK_EDGE,
  ROADS,
  ROOMS,
  SPOT_IDS,
  SPOTS,
  islandR,
  toLocal,
  type Vec2,
} from '../map';
import type { Item, Kit } from './kit';
import type { Houses } from './houses';
import type { KitModels } from './models';
import type { Props } from './props';

const { PI } = Math;

export function createScatter(kit: Kit, props: Props, houses: Houses, models: KitModels) {
  const { scene, COL, toon, mesh, at, rot, put, rnd, rr, pick, instanced } = kit;
  const { plantFlora, growFlora, lampPost, skullPole } = props;
  const CPTS = CASTLE.pts;
  function insideCastle(x: number, z: number): boolean {
    let c = false;
    for (let i = 0, j = CPTS.length - 1; i < CPTS.length; j = i++) {
      const [xi, zi] = CPTS[i] as Vec2;
      const [xj, zj] = CPTS[j] as Vec2;
      if (zi > z !== zj > z && x < ((xj - xi) * (z - zi)) / (zj - zi) + xi) c = !c;
    }
    return c;
  }
  function segDist(px: number, pz: number, ax: number, az: number, bx: number, bz: number): number {
    const dx = bx - ax;
    const dz = bz - az;
    const l2 = dx * dx + dz * dz || 1;
    const t = Math.max(0, Math.min(1, ((px - ax) * dx + (pz - az) * dz) / l2));
    return Math.hypot(px - ax - dx * t, pz - az - dz * t);
  }
  const LINES = [
    ...ROADS.map((rd) => ({ w: rd.w * 0.65, pts: rd.closed ? [...rd.line, rd.line[0] as Vec2] : rd.line })),
    { w: 1.0, pts: BROOK_LINE },
  ];
  const TAKEN: { x: number; z: number; r: number }[] = [];
  const spots = SPOT_IDS.map((id) => SPOTS[id]);
  function free(x: number, z: number, m = 0.6): boolean {
    const t = Math.atan2(z, x);
    if (Math.hypot(x, z) > islandR(t) - 1.6) return false;
    for (const L of LINES) {
      const P = L.pts;
      for (let i = 0; i < P.length - 1; i++) {
        const a = P[i] as Vec2;
        const b = P[i + 1] as Vec2;
        if (Math.abs(a[0] - x) > L.w + m + 1.5 || Math.abs(a[1] - z) > L.w + m + 1.5) continue;
        if (segDist(x, z, a[0], a[1], b[0], b[1]) < L.w + m) return false;
      }
    }
    for (const r of ROOMS) {
      if (r.kind === 'house') {
        const [lx, lz] = toLocal(r, x, z);
        const pad = 3.4 + m;
        if (
          Math.abs(lx) < r.w / 2 + pad &&
          lz > -r.d / 2 - pad &&
          lz < r.d / 2 + pad + (r.deck ? 4.5 : 0) + (r.id === 'tavern' ? 5 : 0)
        )
          return false;
      } else if (Math.hypot(x - r.x, z - r.z) < r.r + (r.kind === 'open' ? 2.2 : 1.4) + m) return false;
    }
    for (const dc of DECOR) {
      if (dc.kind === 'hut') {
        const [lx, lz] = toLocal(dc, x, z);
        if (Math.abs(lx) < dc.w / 2 + 2.6 + m && Math.abs(lz) < dc.d / 2 + 2.6 + m) return false;
      } else if (Math.hypot(x - dc.x, z - dc.z) < dc.r + 1.8 + m) return false;
    }
    for (let i = 0; i < CPTS.length; i++) {
      const [ax, az] = CPTS[i] as Vec2;
      const [bx, bz] = CPTS[(i + 1) % CPTS.length] as Vec2;
      if (segDist(x, z, ax, az, bx, bz) < CASTLE.thick / 2 + 0.8 + m) return false;
      if (Math.hypot(x - ax, z - az) < 3.6 + m) return false;
    }
    if (Math.hypot(x + 44, z - 26) < 6 + m) return false;
    if (Math.hypot(x - DOCK_EDGE[0], z - DOCK_EDGE[1]) < 9 + m) return false;
    for (const s of spots) if (Math.hypot(x - s.x, z - s.z) < 1.2 + m) return false;
    for (const o of TAKEN) if (Math.hypot(x - o.x, z - o.z) < o.r + m) return false;
    return true;
  }
  function scatter(
    n: number,
    tries: number,
    test: (x: number, z: number) => boolean,
    place: (x: number, z: number) => void,
  ) {
    let k = 0;
    for (let i = 0; i < tries && k < n; i++) {
      const t = rr(0, 2 * PI);
      const d = Math.sqrt(rnd()) * 58;
      const x = Math.cos(t) * d * 1.04;
      const z = Math.sin(t) * d * 0.9;
      if (!test(x, z)) continue;
      place(x, z);
      k++;
    }
  }
  // trees: groves inside the walls lean autumn-red, the outer ring is mixed with pines and dead trees
  scatter(
    34,
    6000,
    (x, z) => insideCastle(x, z) && free(x, z, 1.4),
    (x, z) => {
      plantFlora(
        pick([
          'tree_maple',
          'tree_maple',
          'tree_oak',
          'tree_cherry',
          'tree_fruit',
          'tree_birch',
          'tree_cypress',
          'tree_maple',
          'tree_oak',
        ]),
        rr(0.8, 1.1),
        x,
        z,
      );
      TAKEN.push({ x, z, r: 2.2 });
    },
  );
  scatter(
    80,
    9000,
    (x, z) => !insideCastle(x, z) && free(x, z, 1.6),
    (x, z) => {
      plantFlora(
        pick([
          'tree_pine',
          'tree_pine',
          'tree_spruce',
          'tree_spruce',
          'tree_oak',
          'tree_birch',
          'tree_dead',
          'tree_maple',
          'tree_pine',
        ]),
        rr(0.9, 1.3),
        x,
        z,
      );
      TAKEN.push({ x, z, r: 2.4 });
    },
  );
  {
    const rocks: Item[] = [];
    const tufts: Item[] = [];
    const flowers: Item[] = [];
    // every bush is the flora set's (plantFlora always takes it), so the hand-built bush list stays empty
    scatter(
      90,
      9000,
      (x, z) => free(x, z, 0.5),
      (x, z) => {
        const s = rr(0.55, 1.0);
        plantFlora(
          pick([
            'bush_round',
            'bush_round',
            'bush_flower',
            'bush_berry',
            'bush_fern',
            'bush_grass',
            'bush_flower',
          ]),
          s * 1.25,
          x,
          z,
        );
        TAKEN.push({ x, z, r: s });
      },
    );
    scatter(
      60,
      6000,
      (x, z) => free(x, z, 0.4),
      (x, z) => {
        const s = rr(0.25, 0.8);
        rocks.push({
          x,
          y: s * 0.3,
          z,
          sx: s,
          sy: s * rr(0.5, 0.85),
          sz: s * rr(0.8, 1.1),
          ry: rr(0, 3),
          c: pick(['#8a8078', '#7a706a', '#968b81', '#6e665f']),
        });
        TAKEN.push({ x, z, r: s });
      },
    );
    scatter(
      1200,
      16000,
      (x, z) => free(x, z, 0.1),
      (x, z) => {
        const c = pick(['#5f7f42', '#6a8a48', '#55753c', '#7a9450']);
        for (let k = 0; k < 4; k++)
          tufts.push({
            x: x + rr(-0.12, 0.12),
            y: 0.11,
            z: z + rr(-0.12, 0.12),
            rx: rr(-0.35, 0.35),
            rz: rr(-0.35, 0.35),
            sy: rr(0.7, 1.2),
            c,
          });
      },
    );
    scatter(
      320,
      12000,
      (x, z) => free(x, z, 0.1),
      (x, z) => {
        flowers.push({ x, y: 0.16, z, c: pick([COL.red, COL.bone, '#d98a3a', COL.redL, '#e8c860']) });
      },
    );
    instanced(new THREE.DodecahedronGeometry(1, 0), rocks, { cast: true });
    // grass and flowers are too small to ink; they stay out of the line pass
    for (const m of [
      instanced(new THREE.ConeGeometry(0.06, 0.24, 4), tufts, {}),
      instanced(new THREE.SphereGeometry(0.09, 7, 5), flowers, {}),
    ])
      if (m) m.userData.noLine = true;
  }
  growFlora(models);
  // skull poles and lamp posts along the big roads
  for (const [rid, every, kind] of [
    ['main', 9, 'lamp'],
    ['ring', 13, 'skull'],
    ['workshop', 6, 'skull'],
    ['library', 8, 'skull'],
    ['dock', 6, 'skull'],
  ] as const) {
    const rd = ROADS.find((x) => x.id === rid);
    if (!rd) continue;
    const L = rd.line;
    for (let i = 6; i < L.length - 6; i += every * 2) {
      const [ax, az] = L[i - 1] as Vec2;
      const [bx, bz] = L[i + 1] as Vec2;
      const Li = L[i] as Vec2;
      const l = Math.hypot(bx - ax, bz - az) || 1;
      const nx = -(bz - az) / l;
      const nz = (bx - ax) / l;
      const sd = (i / (every * 2)) % 2 ? 1 : -1;
      const x = Li[0] + nx * sd * (rd.w * 0.62 + 0.5);
      const z = Li[1] + nz * sd * (rd.w * 0.62 + 0.5);
      if (rid === 'ring' && Math.hypot(x, z) < 10) continue;
      let ok = true;
      for (const s of spots) if (Math.hypot(x - s.x, z - s.z) < 2) ok = false;
      for (const r of ROOMS)
        if (r.kind !== 'house' && Math.hypot(x - r.x, z - r.z) < r.r + 0.5 && r.id !== 'court') ok = false;
      if (!ok) continue;
      put(
        scene,
        kind === 'lamp' ? lampPost(0) : skullPole(rr(2.0, 2.6)),
        x,
        z,
        Math.atan2(-nx * sd, -nz * sd),
      );
    }
  }

  /* crows: some circle the towers, some sit on the roofs */
  const CROWS: THREE.Group[] = [];
  function crow(): THREE.Group {
    const b = new THREE.Group();
    const black = toon('#2a2426');
    b.add(at(mesh(new THREE.SphereGeometry(0.16, 8, 6), black), 0, 0, 0));
    (b.children[0] as THREE.Object3D).scale.set(1, 0.8, 1.6);
    b.add(at(mesh(new THREE.SphereGeometry(0.1, 8, 6), black), 0, 0.08, 0.2));
    b.add(rot(at(mesh(new THREE.ConeGeometry(0.03, 0.12, 4), toon('#c79a45')), 0, 0.07, 0.33), PI / 2, 0, 0));
    for (const sd of [-1, 1]) {
      const w = at(new THREE.Group(), sd * 0.1, 0.02, 0);
      w.add(at(mesh(new THREE.BoxGeometry(0.55, 0.03, 0.22), black), sd * 0.27, 0, 0));
      b.add(w);
    }
    return b;
  }
  for (let i = 0; i < 6; i++) {
    const c = crow();
    c.userData = { r: rr(30, 55), y: rr(16, 28), a: rr(0, 6.28), s: rr(0.08, 0.14) };
    c.scale.setScalar(1.8);
    scene.add(c);
    CROWS.push(c);
  }
  for (const id of ['war', 'library', 'tavern']) {
    const H = houses.HOUSES[id];
    if (!H) continue;
    const R = H.roof;
    for (let k = 0; k < 2; k++) {
      const c = crow();
      const w3 = c.children[3] as THREE.Object3D;
      const w4 = c.children[4] as THREE.Object3D;
      w3.visible = w4.visible = true;
      w3.rotation.z = 0.9;
      w4.rotation.z = -0.9;
      c.position.set(rr(-H.r.w / 3, H.r.w / 3), R.hR + 0.3, 0);
      c.rotation.y = rr(0, 6);
      R.R.add(c);
    }
  }
  return { CROWS };
}

export type Scatter = ReturnType<typeof createScatter>;
