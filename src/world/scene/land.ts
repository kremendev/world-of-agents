/**
 * The Forge Keep's land (v4.0.0, 4a): sky and light, the island, clouds and far isles, roads and kerbs. Ported from
 * `town/src/m2-land.js` (forge-keep, 89ae8b1), the path the town takes when every Blender model is there: the
 * underside, walls, towers and gate are the models, so the hand-built ones (and `m2b-gate.js`) never run, and neither
 * do their calls on the shared generator. Everything else runs in the town's order.
 */
import * as THREE from 'three';
import { RoundedBoxGeometry } from 'three/examples/jsm/geometries/RoundedBoxGeometry.js';
import { BROOK_LINE, DECOR, ROADS, ROOMS, islandR, toLocal, type Road, type Vec2 } from '../map';
import type { Item, Kit } from './kit';
import { finishKitModels, type FetchedModels, type KitModels } from './models';
import type { Props } from './props';

const { PI } = Math;

export type Crossing = { x: number; z: number; ang: number; len: number };

/** The shortest distance from a point to a polyline. */
export function distToLine(x: number, z: number, P: readonly Vec2[]): number {
  let best = 1e9;
  for (let i = 0; i < P.length - 1; i++) {
    const [ax, az] = P[i] as Vec2;
    const [bx, bz] = P[i + 1] as Vec2;
    const dx = bx - ax;
    const dz = bz - az;
    const l2 = dx * dx + dz * dz || 1;
    const t = Math.max(0, Math.min(1, ((x - ax) * dx + (z - az) * dz) / l2));
    best = Math.min(best, Math.hypot(x - ax - dx * t, z - az - dz * t));
  }
  return best;
}

/** A flat strip of width w along a line, its v running with the distance. */
export function ribbon(line: readonly Vec2[], w: number, closed: boolean, y: number): THREE.BufferGeometry {
  const pts = closed ? [...line, line[0] as Vec2] : line;
  const pos: number[] = [];
  const uv: number[] = [];
  const idx: number[] = [];
  let acc = 0;
  for (let i = 0; i < pts.length; i++) {
    const a = pts[Math.max(0, i - 1)] as Vec2;
    const b = pts[Math.min(pts.length - 1, i + 1)] as Vec2;
    let tx = b[0] - a[0];
    let tz = b[1] - a[1];
    if (closed && (i === 0 || i === pts.length - 1)) {
      const p = line[line.length - 1] as Vec2;
      const q = line[1] as Vec2;
      tx = q[0] - p[0];
      tz = q[1] - p[1];
    }
    const l = Math.hypot(tx, tz) || 1;
    const nx = -tz / l;
    const nz = tx / l;
    const pi = pts[i] as Vec2;
    if (i > 0) {
      const pp = pts[i - 1] as Vec2;
      acc += Math.hypot(pi[0] - pp[0], pi[1] - pp[1]);
    }
    pos.push(pi[0] + (nx * w) / 2, y, pi[1] + (nz * w) / 2, pi[0] - (nx * w) / 2, y, pi[1] - (nz * w) / 2);
    uv.push(0, acc, 1, acc);
    if (i > 0) {
      const k = i * 2;
      idx.push(k - 2, k, k - 1, k - 1, k, k + 1);
    }
  }
  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
  geo.setAttribute('uv', new THREE.Float32BufferAttribute(uv, 2));
  geo.setIndex(idx);
  geo.computeVertexNormals();
  return geo;
}

export async function createLand(kit: Kit, props: Props, fetched: Promise<FetchedModels>) {
  const { scene, TEX, toon, mesh, at, rot, tiled, rnd, rr, pick, wallUV, nrm, M, instanced } = kit;
  const { SPINNERS, plantFlora, skullPole, totem, brazier, hay } = props;

  /* ---------------- sky, light: early evening, a low orange sun and dusky shade,
     dim enough that the castle's own lights (torches, braziers, windows, the furnace) carry it */
  // The sky is a dome that paints its own gradient: deep blue overhead, warm near the horizon, orange where the sun is.
  const SUN_DIR = new THREE.Vector3(-62, 27, 70).normalize();
  const skyDome = new THREE.Mesh(
    new THREE.SphereGeometry(600, 32, 16),
    new THREE.ShaderMaterial({
      side: THREE.BackSide,
      depthWrite: false,
      fog: false,
      uniforms: {
        zen: { value: new THREE.Color('#2b3b78') },
        mid: { value: new THREE.Color('#7f8fc4') },
        hor: { value: new THREE.Color('#f2aa7c') },
        low: { value: new THREE.Color('#c98a72') },
        sunCol: { value: new THREE.Color('#ffa864') },
        sunDir: { value: SUN_DIR },
      },
      vertexShader:
        'varying vec3 vDir; void main() { vDir = position; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }',
      fragmentShader: `uniform vec3 zen, mid, hor, low, sunCol, sunDir; varying vec3 vDir;
    void main() {
      vec3 d = normalize(vDir); float h = d.y;
      vec3 c = h > 0.0 ? mix(mix(hor, mid, smoothstep(0.0, 0.22, h)), zen, smoothstep(0.22, 0.85, h)) : mix(hor, low, smoothstep(0.0, -0.35, h));
      float s = max(dot(d, sunDir), 0.0);
      c += sunCol * (pow(s, 6.0) * 0.45 + pow(s, 90.0) * 0.8 + pow(s, 2000.0) * 6.0);
      gl_FragColor = vec4(c * 1.2, 1.0);
    }`,
    }),
  );
  skyDome.renderOrder = -100;
  skyDome.frustumCulled = false;
  scene.add(skyDome);
  scene.fog = new THREE.Fog('#d6a487', 230, 640);
  scene.add(new THREE.HemisphereLight('#9aa8d8', '#4a3428', 1.05));
  const sun = new THREE.DirectionalLight('#ffb070', 2.3);
  sun.position.copy(SUN_DIR).multiplyScalar(110);
  sun.castShadow = true;
  sun.shadow.mapSize.set(4096, 4096);
  Object.assign(sun.shadow.camera, { left: -70, right: 70, top: 66, bottom: -66, near: 1, far: 260 });
  sun.shadow.camera.updateProjectionMatrix();
  sun.shadow.bias = -0.0005;
  sun.shadow.normalBias = 0.05;
  scene.add(sun);

  /* ---------------- the island */
  const islandShape = new THREE.Shape();
  for (let i = 0; i <= 160; i++) {
    const t = (i / 160) * PI * 2;
    const r = islandR(t);
    // shape y is -z in the world after the rotation below
    const x = Math.cos(t) * r;
    const y = -Math.sin(t) * r;
    if (i === 0) islandShape.moveTo(x, y);
    else islandShape.lineTo(x, y);
  }
  const islandGeo = new THREE.ExtrudeGeometry(islandShape, {
    depth: 2.4,
    bevelEnabled: true,
    bevelThickness: 0.5,
    bevelSize: 0.7,
    bevelSegments: 3,
    curveSegments: 4,
  });
  islandGeo.rotateX(-PI / 2);
  const grassTex = tiled(TEX.grass, 1 / 9, 1 / 9);
  // the cliff side shows layers of soil and rock (extrude side UVs: v runs top -1.9 to bottom 1.5)
  function strataMat(vTop: number, vBottom: number): THREE.MeshToonMaterial {
    const t = TEX.strata.clone();
    t.wrapS = THREE.RepeatWrapping;
    t.wrapT = THREE.ClampToEdgeWrapping;
    t.repeat.set(1 / 8, -1 / (vBottom - vTop));
    t.offset.set(0, vBottom / (vBottom - vTop));
    t.needsUpdate = true;
    return toon('#ffffff', { map: t });
  }
  const island = new THREE.Mesh(islandGeo, [toon('#ffffff', { map: grassTex }), strataMat(-1.9, 1.5)]);
  island.position.y = -2.9;
  island.receiveShadow = true;
  scene.add(island);
  const models: KitModels = finishKitModels(kit, await fetched);
  scene.add(models.underside);
  for (const n of ['walls', 'towers', 'gate'] as const) scene.add(models[n]);

  // clouds and distant isles
  const cloudMat = toon('#fff4ea', { emissive: '#e8c8b0', emissiveIntensity: 0.25 });
  const cloudGeo = new THREE.SphereGeometry(1, 16, 12);
  const cloudRing = new THREE.Group();
  scene.add(cloudRing);
  for (let i = 0; i < 22; i++) {
    const a = (i / 22) * PI * 2 + rr(-0.12, 0.12);
    const r = rr(100, 260);
    const s = rr(1.6, 3.2);
    const g = new THREE.Group();
    for (let k = 0; k < 7; k++) {
      const b = new THREE.Mesh(cloudGeo, cloudMat);
      const rs = rr(1.6, 2.8) * s;
      b.scale.set(rs, rs * 0.7, rs);
      b.position.set(rr(-3.5, 3.5) * s, rr(-0.3, 1.2) * s, rr(-1.8, 1.8) * s);
      g.add(b);
    }
    g.position.set(Math.cos(a) * r, rr(-45, 28), Math.sin(a) * r);
    cloudRing.add(g);
  }
  // roots hanging from the rim, a soft grass fringe, loose rocks floating below (the crystals grow only on the
  // hand-built underside, so none here)
  {
    const roots: Item[] = [];
    const fringe: Item[] = [];
    const floaters: { x: number; y: number; z: number; s: number }[] = [];
    for (let i = 0; i < 420; i++) {
      const t = (i / 420) * PI * 2 + rr(-0.006, 0.006);
      const r = islandR(t);
      if (rnd() < 0.55) {
        const len = rr(0.5, 2.8);
        const y0 = rr(-0.55, -1.8);
        roots.push({
          x: Math.cos(t) * (r + 0.8),
          y: y0 - len / 2,
          z: Math.sin(t) * (r + 0.8),
          sx: rr(0.7, 1.3),
          sy: len,
          sz: rr(0.7, 1.3),
          rx: PI + rr(-0.12, 0.12),
          rz: rr(-0.12, 0.12),
          c: pick(['#4a3424', '#3e2c20', '#4f6a3a', '#5a4a30']),
        });
      }
      if (i % 2 === 0)
        fringe.push({
          x: Math.cos(t) * (r + 0.3),
          y: -0.06,
          z: Math.sin(t) * (r + 0.3),
          sx: rr(0.5, 0.8),
          sy: rr(0.18, 0.28),
          sz: rr(0.5, 0.8),
          c: pick(['#5f7f42', '#6a8a48', '#55753c']),
        });
    }
    for (let i = 0; i < 7; i++) {
      const t = rr(0, PI * 2);
      const d = islandR(t) + rr(4, 12);
      floaters.push({ x: Math.cos(t) * d, y: rr(-14, -4), z: Math.sin(t) * d, s: rr(0.8, 2.2) });
    }
    instanced(new THREE.ConeGeometry(0.06, 1, 4), roots, {});
    instanced(new THREE.SphereGeometry(1, 10, 6), fringe, {});
    for (const f of floaters) {
      const g = new THREE.Group();
      g.add(at(mesh(new THREE.DodecahedronGeometry(1.2 * f.s, 0), toon('#6e5240')), 0, -0.4 * f.s, 0));
      g.add(
        at(
          mesh(new THREE.CylinderGeometry(1.0 * f.s, 1.1 * f.s, 0.3 * f.s, 9), toon('#6f8b49')),
          0,
          0.5 * f.s,
          0,
        ),
      );
      if (rnd() < 0.6)
        g.add(at(props.tree(pick(['pine', 'autumn', 'dead'] as const), 0.5 * f.s), 0, 0.6 * f.s, 0));
      g.position.set(f.x, f.y, f.z);
      g.rotation.y = rr(0, 6);
      scene.add(g);
    }
  }

  /* far isles: each a small world of its own, so they read as places and not as shapes */
  const isleSide = strataMat(-0.75, 1.35);
  // The isles' trees and bushes come from the Blender flora set, drawn with the island's own. Spots are in isle units
  // (R), clear of what the isle's theme builds (CLEAR).
  type Theme = 'ruin' | 'farm' | 'shrine' | 'falls';
  const ISLE_FLORA: Record<
    Theme,
    { trees: readonly string[]; clear: readonly (readonly [number, number, number])[] }
  > = {
    ruin: {
      trees: ['tree_pine', 'tree_spruce', 'tree_dead', 'tree_pine', 'tree_oak'],
      clear: [
        [-0.25, -0.1, 0.32],
        [0.35, 0.3, 0.3],
        [0.1, 0.5, 0.14],
      ],
    },
    farm: {
      trees: ['tree_oak', 'tree_fruit', 'tree_maple', 'tree_birch', 'tree_fruit'],
      clear: [
        [-0.2, -0.15, 0.32],
        [0.3, 0.25, 0.46],
        [0.35, -0.45, 0.22],
        [0.05, 0.55, 0.12],
      ],
    },
    shrine: { trees: ['tree_cherry', 'tree_maple', 'tree_cherry', 'tree_cypress'], clear: [[0, 0, 0.45]] },
    falls: {
      trees: ['tree_pine', 'tree_spruce', 'tree_birch', 'tree_willow', 'tree_spruce'],
      clear: [
        [0.25, 0.3, 0.33],
        [0.52, 0.52, 0.26],
      ],
    },
  };
  const ISLE_BUSHES = ['bush_round', 'bush_round', 'bush_flower', 'bush_berry', 'bush_fern', 'bush_grass'];
  function isleTree(g: THREE.Group, kind: string, s: number, x: number, z: number) {
    plantFlora(kind, s, g.position.x + x, g.position.z + z, g.position.y);
  }
  function isleFlora(
    g: THREE.Group,
    R: number,
    theme: Theme,
    fixed: readonly (readonly [number, number, ...unknown[]])[],
  ) {
    const { trees, clear } = ISLE_FLORA[theme];
    const s = R / 10;
    const taken: [number, number, number][] = [
      ...clear.map(([a, b, c]): [number, number, number] => [a, b, c]),
      ...fixed.map(([x, z]): [number, number, number] => [x, z, 0.16]),
    ];
    const spot = (minK: number, maxK: number, r: number): [number, number] | null => {
      for (let tries = 0; tries < 60; tries++) {
        const a = rr(0, PI * 2);
        const k = rr(minK, maxK);
        const x = Math.cos(a) * k;
        const z = Math.sin(a) * k;
        if (taken.every(([cx, cz, cr]) => Math.hypot(x - cx, z - cz) > cr + r)) {
          taken.push([x, z, r]);
          return [x * R, z * R];
        }
      }
      return null;
    };
    for (let i = 0; i < 7; i++) {
      const p = spot(0.3, 0.74, 0.12);
      if (p)
        plantFlora(
          trees[i % trees.length] as string,
          rr(1.0, 1.3) * s,
          g.position.x + p[0],
          g.position.z + p[1],
          g.position.y,
        );
    }
    for (let i = 0; i < 9; i++) {
      const p = spot(0.15, 0.78, 0.05);
      if (p)
        plantFlora(
          pick(ISLE_BUSHES),
          rr(0.75, 1.25) * s,
          g.position.x + p[0],
          g.position.z + p[1],
          g.position.y,
        );
    }
  }
  const fallTexFar = tiled(TEX.water, 1, 4);
  function skyIsle(cx: number, cy: number, cz: number, R: number, theme: Theme, sd: number) {
    const g = new THREE.Group();
    g.position.set(cx, cy, cz);
    scene.add(g);
    const sh = new THREE.Shape();
    for (let i = 0; i <= 56; i++) {
      const t = (i / 56) * PI * 2;
      const r = R * (1 + 0.12 * Math.sin(3 * t + sd) + 0.07 * Math.sin(5 * t + 2 * sd));
      if (i === 0) sh.moveTo(Math.cos(t) * r, -Math.sin(t) * r);
      else sh.lineTo(Math.cos(t) * r, -Math.sin(t) * r);
    }
    const geo = new THREE.ExtrudeGeometry(sh, {
      depth: 1.4,
      bevelEnabled: true,
      bevelThickness: 0.35,
      bevelSize: 0.5,
      bevelSegments: 2,
      curveSegments: 3,
    });
    geo.rotateX(-PI / 2);
    g.add(at(new THREE.Mesh(geo, [toon('#ffffff', { map: grassTex }), isleSide]), 0, -1.75, 0));
    const under = mesh(new THREE.ConeGeometry(R * 0.95, R * 2.3, 12, 3), toon('#6e5240'), false);
    under.rotation.x = PI;
    under.position.y = -2.1 - R * 1.15;
    g.add(under);
    for (let i = 0; i < 14; i++) {
      const t = rr(0, PI * 2);
      const k = rr(0.2, 0.9);
      g.add(
        at(
          rot(
            mesh(
              new THREE.DodecahedronGeometry(rr(0.8, 2.0) * (R / 10), 0),
              toon(pick(['#6e5240', '#5f4636', '#7a5c47'])),
            ),
            rr(0, 3),
            rr(0, 3),
            0,
          ),
          Math.cos(t) * R * 0.95 * k,
          -2.1 - (1 - k) * R * 2.3,
          Math.sin(t) * R * 0.95 * k,
        ),
      );
    }
    for (let i = 0; i < 26; i++) {
      const t = rr(0, PI * 2);
      const len = rr(0.6, 2.4);
      g.add(
        at(
          rot(mesh(new THREE.ConeGeometry(0.07, len, 4), toon('#4a3424')), PI, 0, 0),
          Math.cos(t) * R * 1.02,
          -0.6 - len / 2,
          Math.sin(t) * R * 1.02,
        ),
      );
    }
    const s = R / 10;
    if (theme === 'ruin') {
      const t = at(new THREE.Group(), -R * 0.25, 0, -R * 0.1);
      t.add(
        at(
          mesh(
            new THREE.CylinderGeometry(1.7 * s, 1.9 * s, 5.5 * s, 14),
            toon('#ffffff', { map: tiled(TEX.castleWall, 2.5, 1.6) }),
          ),
          0,
          2.75 * s,
          0,
        ),
      );
      for (let i = 0; i < 7; i++) {
        const a = (i / 7) * PI * 2;
        t.add(
          at(
            mesh(new THREE.BoxGeometry(0.7 * s, rr(0.4, 1.6) * s, 0.5 * s), M.stone),
            Math.cos(a) * 1.6 * s,
            5.6 * s,
            Math.sin(a) * 1.6 * s,
          ),
        );
      }
      t.add(at(mesh(new THREE.BoxGeometry(0.4 * s, 1.0 * s, 0.1), M.pane, false), 0, 2.6 * s, 1.85 * s));
      g.add(t);
      for (const sd2 of [-1, 1])
        g.add(
          at(
            mesh(new THREE.BoxGeometry(0.7 * s, 3.2 * s, 0.7 * s), M.stone),
            R * 0.35 + sd2 * 1.3 * s,
            1.6 * s,
            R * 0.3,
          ),
        );
      g.add(at(mesh(new THREE.BoxGeometry(3.3 * s, 0.6 * s, 0.7 * s), M.stone), R * 0.35, 3.4 * s, R * 0.3));
      g.add(at(skullPole(2.4), R * 0.1, 0, R * 0.5));
      const fixed = [
        [0.5, -0.5, 'tree_pine'],
        [-0.6, 0.5, 'tree_maple'],
        [0.2, 0.6, 'tree_dead'],
      ] as const;
      for (const [x, z, k] of fixed) isleTree(g, k, 1.2 * s, x * R, z * R);
      isleFlora(g, R, theme, [
        [0.5, -0.5],
        [-0.6, 0.5],
        [0.2, 0.6],
      ]);
    } else if (theme === 'farm') {
      const h = at(new THREE.Group(), -R * 0.2, 0, -R * 0.15);
      h.add(
        at(
          mesh(wallUV(new THREE.BoxGeometry(3.6 * s, 2.2 * s, 2.8 * s), 2.2 * s, 1.3), M.plankWall),
          0,
          1.1 * s,
          0,
        ),
      );
      const roofGeo = new THREE.CylinderGeometry(2.1 * s, 2.1 * s, 4.0 * s, 3, 1);
      h.add(
        at(rot(mesh(roofGeo, toon('#ffffff', { map: TEX.roof })), 0, 0, PI / 2), 0, 2.2 * s + 0.9 * s, 0),
      );
      h.add(at(mesh(new THREE.BoxGeometry(0.8 * s, 1.5 * s, 0.1), M.woodD), 0, 0.75 * s, 1.42 * s));
      h.add(
        at(mesh(new THREE.BoxGeometry(0.6 * s, 0.6 * s, 0.1), M.pane, false), 1.1 * s, 1.3 * s, 1.42 * s),
      );
      g.add(h);
      const field = mesh(
        new THREE.PlaneGeometry(R * 0.8, R * 0.5),
        toon('#ffffff', { map: TEX.field }),
        false,
      );
      field.rotation.x = -PI / 2;
      field.position.set(R * 0.3, 0.03, R * 0.25);
      g.add(field);
      const mill = at(new THREE.Group(), R * 0.35, 0, -R * 0.45);
      mill.add(
        at(mesh(new THREE.CylinderGeometry(0.8 * s, 1.2 * s, 4 * s, 12), toon('#e3d5b6')), 0, 2 * s, 0),
      );
      mill.add(
        at(
          mesh(new THREE.ConeGeometry(1.2 * s, 1.4 * s, 12), toon('#ffffff', { map: TEX.roof })),
          0,
          4.7 * s,
          0,
        ),
      );
      const hub = at(new THREE.Group(), 0, 3.6 * s, 1.0 * s);
      for (let k = 0; k < 4; k++) {
        const arm = new THREE.Group();
        arm.rotation.z = (k * PI) / 2;
        arm.add(
          at(
            mesh(new THREE.BoxGeometry(0.5 * s, 2.6 * s, 0.04), toon('#e3d5b6', { side: THREE.DoubleSide })),
            0.3 * s,
            1.5 * s,
            0,
          ),
        );
        hub.add(arm);
      }
      mill.add(hub);
      SPINNERS.push({ o: hub, axis: 'z', v: 0.4 });
      g.add(mill);
      isleTree(g, 'tree_maple', 1.1 * s, -R * 0.55, R * 0.4);
      g.add(at(hay(0.5 * s), R * 0.05, 0, R * 0.55));
      isleFlora(g, R, theme, [[-0.55, 0.4]]);
    } else if (theme === 'shrine') {
      for (let i = 0; i < 6; i++) {
        const a = (i / 6) * PI * 2;
        g.add(
          at(
            rot(mesh(new THREE.BoxGeometry(0.7 * s, rr(2, 3) * s, 0.5 * s), M.stone), 0, -a, rr(-0.1, 0.1)),
            Math.cos(a) * 3 * s,
            1.2 * s,
            Math.sin(a) * 3 * s,
          ),
        );
      }
      g.add(totem(4 * s));
      for (const a of [0.8, 3.9])
        g.add(at(brazier(0, 1.2 * s), Math.cos(a) * 1.8 * s, 0, Math.sin(a) * 1.8 * s));
      const fixed = [
        [0.6, 0.4],
        [-0.5, -0.5],
        [0.4, -0.6],
      ] as const;
      for (const [x, z] of fixed) isleTree(g, 'tree_maple', 1.1 * s, x * R, z * R);
      isleFlora(g, R, theme, fixed);
    } else {
      const fixed = [
        [-0.5, -0.3, 'tree_pine'],
        [-0.2, -0.6, 'tree_pine'],
        [0.4, -0.4, 'tree_oak'],
        [-0.6, 0.3, 'tree_maple'],
      ] as const;
      for (const [x, z, k] of fixed) isleTree(g, k, 1.2 * s, x * R, z * R);
      isleFlora(g, R, theme, fixed);
      g.add(
        at(
          rot(
            mesh(
              new THREE.CircleGeometry(R * 0.28, 24),
              toon('#5c96b4', { emissive: '#2c5a72', emissiveIntensity: 0.35 }),
              false,
            ),
            -PI / 2,
            0,
            0,
          ),
          R * 0.25,
          0.04,
          R * 0.3,
        ),
      );
      const fall = new THREE.Mesh(
        new THREE.PlaneGeometry(1.8 * s, R * 3.2),
        new THREE.MeshBasicMaterial({
          map: fallTexFar,
          color: '#acb5c8',
          transparent: true,
          opacity: 0.85,
          side: THREE.DoubleSide,
          depthWrite: false,
        }),
      );
      fall.position.set(R * 0.62, -R * 1.6, R * 0.62);
      fall.rotation.y = PI / 4;
      g.add(fall);
      const brook = mesh(new THREE.PlaneGeometry(1.2 * s, R * 0.55), toon('#6fa9c9'), false);
      brook.rotation.set(-PI / 2, 0, -PI / 4);
      brook.position.set(R * 0.45, 0.05, R * 0.45);
      g.add(brook);
    }
    return g;
  }
  skyIsle(-150, 6, -105, 11, 'ruin', 0.4);
  skyIsle(165, -4, -60, 13, 'farm', 1.7);
  skyIsle(115, 20, 135, 9, 'shrine', 2.9);
  skyIsle(-165, -14, 85, 12, 'falls', 4.1);

  /* ---------------- ground decals: soft-edged patches of dirt, sand and stone */
  type DecalKind = 'dirt' | 'sand' | 'plaza' | 'field';
  const decalMats: Partial<Record<DecalKind, { src: THREE.Texture; mask: THREE.Texture }>> = {};
  function decalMat(kind: DecalKind) {
    const had = decalMats[kind];
    if (had) return had;
    const src = { dirt: TEX.dirt, sand: TEX.sand, plaza: TEX.plaza, field: TEX.field }[kind];
    const mask = kit.canvasTex(256, 256, (g, W, H) => {
      const gr = g.createRadialGradient(W / 2, H / 2, W * 0.3, W / 2, H / 2, W / 2);
      gr.addColorStop(0, 'rgba(255,255,255,1)');
      gr.addColorStop(1, 'rgba(255,255,255,0)');
      g.fillStyle = gr;
      g.fillRect(0, 0, W, H);
    });
    mask.wrapS = mask.wrapT = THREE.ClampToEdgeWrapping;
    const made = { src, mask };
    decalMats[kind] = made;
    return made;
  }
  let decalOrder = 0;
  function patch(kind: DecalKind, x: number, z: number, rx: number, rz: number, ry = 0, y = 0.012, tile = 4) {
    const d = decalMat(kind);
    const map = tiled(d.src, (rx * 2) / tile, (rz * 2) / tile);
    const m = new THREE.Mesh(
      new THREE.PlaneGeometry(rx * 2, rz * 2),
      toon('#ffffff', {
        map,
        alphaMap: d.mask,
        transparent: true,
        depthWrite: false,
        polygonOffset: true,
        polygonOffsetFactor: -1,
        polygonOffsetUnits: -1 - decalOrder,
      }),
    );
    m.rotation.set(-PI / 2, 0, ry);
    m.position.set(x, y, z);
    m.receiveShadow = true;
    m.renderOrder = -10 + decalOrder++ * 0.01;
    scene.add(m);
    return m;
  }

  /* ---------------- roads: ribbons along the sampled curves */
  // Roads share one world-space texture per kind, so where two roads overlap the stones line up and
  // there is no seam. Edges fade through vertex alpha; a side road widens and fades out where it joins.
  type PavedKind = 'cobble' | 'flag' | 'dirt';
  const ROAD_KIND = {
    cobble: [TEX.tCobble, 4, 0.1, 'tCobble'],
    flag: [TEX.tFlag, 4, 0.1, 'tFlag'],
    dirt: [TEX.tDirt, 6, 0.45, 'tDirt'],
  } as const;
  const roadMats: Partial<Record<PavedKind, THREE.MeshToonMaterial>> = {};
  const smooth = (t: number) => {
    const u = Math.max(0, Math.min(1, t));
    return u * u * (3 - 2 * u);
  };
  // Where a paved road meets a paved road of another kind (flagstones into the cobbled ring), it stops at the other's
  // edge on a row of edge stones instead of fading across it. Same kinds, and dirt, still blend (shared world texture).
  const THRESHOLDS: { x: number; z: number; tx: number; tz: number; w: number; kind: string }[] = [];
  const PAVED = (k: string) => k === 'cobble' || k === 'flag';
  const lineOf = (o: Road): readonly Vec2[] => (o.closed ? [...o.line, o.line[0] as Vec2] : o.line);
  function nearestRoad(P: Vec2, self: Road): Road | null {
    let best: Road | null = null;
    let bd = 1e9;
    for (const o of ROADS) {
      if (o === self || o.kind === 'stones') continue;
      const d = distToLine(P[0], P[1], lineOf(o)) - o.w / 2;
      if (d < bd) {
        bd = d;
        best = o;
      }
    }
    return bd < 0.6 ? best : null;
  }
  function trimToEdge(L: readonly Vec2[], fromEnd: boolean, other: Road): Vec2[] | null {
    const OL = lineOf(other);
    const edge = other.w / 2 + 0.02;
    const pts = fromEnd ? [...L].reverse() : [...L];
    let k = 0;
    while (k < pts.length - 2 && distToLine((pts[k] as Vec2)[0], (pts[k] as Vec2)[1], OL) < edge) k++;
    if (k === 0) return null;
    let a = pts[k - 1] as Vec2;
    let b = pts[k] as Vec2;
    for (let it = 0; it < 12; it++) {
      const m: Vec2 = [(a[0] + b[0]) / 2, (a[1] + b[1]) / 2];
      if (distToLine(m[0], m[1], OL) < edge) a = m;
      else b = m;
    }
    const cut: Vec2 = [(a[0] + b[0]) / 2, (a[1] + b[1]) / 2];
    const out = [cut, ...pts.slice(k)];
    return fromEnd ? out.reverse() : out;
  }
  function roadMesh(rd: Road, i: number) {
    const kind = rd.kind as PavedKind;
    let L: readonly Vec2[] = lineOf(rd);
    const joins = rd.closed ? [false, false] : [!rd.refs[0], !rd.refs[rd.refs.length - 1]];
    if (!rd.closed && PAVED(kind))
      for (const e of [0, 1]) {
        if (!joins[e]) continue;
        const P = (e ? L[L.length - 1] : L[0]) as Vec2;
        const other = nearestRoad(P, rd);
        if (!other || other.kind === kind || !PAVED(other.kind)) continue;
        const T = trimToEdge(L, e === 1, other);
        if (!T) continue;
        L = T;
        joins[e] = false;
        const q = (e ? L[L.length - 1] : L[0]) as Vec2;
        const r2 = (e ? L[L.length - 2] : L[1]) as Vec2;
        const l = Math.hypot(q[0] - r2[0], q[1] - r2[1]) || 1;
        THRESHOLDS.push({ x: q[0], z: q[1], tx: (q[0] - r2[0]) / l, tz: (q[1] - r2[1]) / l, w: rd.w, kind });
      }
    const n = L.length;
    const [tex, tile, fw, key] = ROAD_KIND[kind];
    const acc = [0];
    for (let k = 1; k < n; k++) {
      const p = L[k] as Vec2;
      const q = L[k - 1] as Vec2;
      acc.push((acc[k - 1] as number) + Math.hypot(p[0] - q[0], p[1] - q[1]));
    }
    const total = acc[n - 1] as number;
    const y = 0.02 + i * 0.0015;
    const pos: number[] = [];
    const uv: number[] = [];
    const col: number[] = [];
    const idx: number[] = [];
    for (let k = 0; k < n; k++) {
      const a = L[Math.max(0, k - 1)] as Vec2;
      const b = L[Math.min(n - 1, k + 1)] as Vec2;
      let tx = b[0] - a[0];
      let tz = b[1] - a[1];
      if (rd.closed && (k === 0 || k === n - 1)) {
        const p = L[n - 2] as Vec2;
        const q = L[1] as Vec2;
        tx = q[0] - p[0];
        tz = q[1] - p[1];
      }
      const l = Math.hypot(tx, tz) || 1;
      const nx = -tz / l;
      const nz = tx / l;
      let wMul = 1;
      let al = 1;
      if (!rd.closed) {
        for (const e of [0, 1]) {
          const d = e ? total - (acc[k] as number) : (acc[k] as number);
          if (joins[e]) {
            wMul = Math.max(wMul, 1 + 0.5 * (1 - smooth(d / 2.4)));
            al = Math.min(al, smooth(d / 2.2));
          }
        }
      }
      const hw = (rd.w / 2) * wMul;
      const offs = [-(hw + fw), -(hw - fw), hw - fw, hw + fw];
      const alphas = [0, al, al, 0];
      const Lk = L[k] as Vec2;
      for (let j = 0; j < 4; j++) {
        const x = Lk[0] + nx * (offs[j] as number);
        const z = Lk[1] + nz * (offs[j] as number);
        pos.push(x, y, z);
        uv.push(x / tile, z / tile);
        col.push(1, 1, 1, alphas[j] as number);
      }
      if (k > 0)
        for (let j = 0; j < 3; j++) {
          const A = (k - 1) * 4 + j;
          const B = A + 1;
          const C = k * 4 + j;
          const D = C + 1;
          idx.push(B, D, A, A, D, C);
        }
    }
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
    geo.setAttribute('uv', new THREE.Float32BufferAttribute(uv, 2));
    geo.setAttribute('color', new THREE.Float32BufferAttribute(col, 4));
    geo.setIndex(idx);
    geo.computeVertexNormals();
    let mat = roadMats[kind];
    if (!mat) {
      mat = toon('#ffffff', {
        map: tex,
        normalMap: nrm(key, kind === 'dirt' ? 1.0 : 1.8),
        vertexColors: true,
        transparent: true,
        depthWrite: false,
        polygonOffset: true,
        polygonOffsetFactor: -2,
        polygonOffsetUnits: -4,
      });
      roadMats[kind] = mat;
    }
    const m = new THREE.Mesh(geo, mat);
    m.receiveShadow = true;
    m.renderOrder = -5 + i * 0.01;
    scene.add(m);
  }
  // where a path of stepping stones meets the stream it stops, and a footbridge carries it over
  const crossings: Crossing[] = [];
  function splitAtWater(line: readonly Vec2[]): { pts: Vec2[]; closed: boolean }[] {
    const n = line.length;
    const wet = line.map(([x, z]) => distToLine(x, z, BROOK_LINE) < 1.35);
    if (!wet.some(Boolean)) return [{ pts: [...line], closed: true }];
    const start = wet.findIndex((w, i) => !w && wet[(i - 1 + n) % n]);
    const segs: { pts: Vec2[]; closed: boolean }[] = [];
    let cur: Vec2[] = [];
    for (let k = 0; k <= n; k++) {
      const i = (start + k) % n;
      if (!wet[i] && k < n) {
        cur.push(line[i] as Vec2);
        continue;
      }
      if (cur.length > 1) segs.push({ pts: cur, closed: false });
      if (k < n && wet[i] && cur.length) {
        // a wet run begins: find where it ends and bridge from the last dry stone to the next
        let j = k;
        while (j < n && wet[(start + j) % n]) j++;
        const a = cur[cur.length - 1] as Vec2;
        const b = line[(start + j) % n] as Vec2;
        const dx = b[0] - a[0];
        const dz = b[1] - a[1];
        const len = Math.hypot(dx, dz);
        crossings.push({ x: (a[0] + b[0]) / 2, z: (a[1] + b[1]) / 2, ang: Math.atan2(-dz, dx), len });
      }
      cur = [];
    }
    return segs;
  }
  ROADS.forEach((rd, i) => {
    if (rd.kind !== 'stones') {
      roadMesh(rd, i);
      return;
    }
    const map = TEX.roadStones.clone();
    map.wrapS = THREE.ClampToEdgeWrapping;
    map.wrapT = THREE.RepeatWrapping;
    map.repeat.set(1, 1 / 1.3);
    map.needsUpdate = true;
    const mat = toon('#ffffff', {
      map,
      transparent: true,
      depthWrite: false,
      polygonOffset: true,
      polygonOffsetFactor: -2,
      polygonOffsetUnits: -6,
    });
    for (const sgm of splitAtWater(rd.line)) {
      const m = new THREE.Mesh(ribbon(sgm.pts, rd.w, sgm.closed, 0.03), mat);
      m.receiveShadow = true;
      scene.add(m);
    }
  });

  /* kerbs along the paved roads, broken wherever another road joins; ruts in the dirt roads; grass along the edges */
  {
    const segD = (px: number, pz: number, ax: number, az: number, bx: number, bz: number) => {
      const dx = bx - ax;
      const dz = bz - az;
      const l2 = dx * dx + dz * dz || 1;
      const t = Math.max(0, Math.min(1, ((px - ax) * dx + (pz - az) * dz) / l2));
      return Math.hypot(px - ax - dx * t, pz - az - dz * t);
    };
    const onOther = (x: number, z: number, self: Road, pad: number) => {
      for (const o of ROADS) {
        if (o === self) continue;
        const P = lineOf(o);
        const lim = o.w / 2 + pad;
        for (let i = 0; i < P.length - 1; i++) {
          const a = P[i] as Vec2;
          const b = P[i + 1] as Vec2;
          if (Math.abs(a[0] - x) > lim + 1 || Math.abs(a[1] - z) > lim + 1) continue;
          if (segD(x, z, a[0], a[1], b[0], b[1]) < lim) return true;
        }
      }
      return false;
    };
    const FORGE_SPOKES = [1.5708, -1.6284, -0.7646, 0.1159, -3.0065, 2.36];
    const inPlace = (x: number, z: number) => {
      // the forge model is always there, with its spokes
      const d = Math.hypot(x, z);
      const a = Math.atan2(z, x);
      if (
        d > 7.4 &&
        d < 9.0 &&
        FORGE_SPOKES.some((s) => {
          let q = Math.abs(a - s) % (2 * PI);
          q = Math.min(q, 2 * PI - q);
          return q * d < 1.45;
        })
      )
        return true;
      for (const r of ROOMS) {
        if (r.kind === 'house') {
          const [lx, lz] = toLocal(r, x, z);
          if (Math.abs(lx) < r.w / 2 + 0.9 && Math.abs(lz) < r.d / 2 + 0.9) return true;
          if (
            r.deck &&
            lx > r.deck[0] - 0.5 &&
            lx < r.deck[1] + 0.5 &&
            lz > r.deck[2] &&
            lz < r.deck[3] + 0.5
          )
            return true;
        } else if (Math.hypot(x - r.x, z - r.z) < r.r + 0.6) return true;
      }
      for (const dc of DECOR) {
        if (dc.kind === 'hut') {
          const [lx, lz] = toLocal(dc, x, z);
          if (Math.abs(lx) < dc.w / 2 + 0.9 && Math.abs(lz) < dc.d / 2 + 0.9) return true;
        } else if (Math.hypot(x - dc.x, z - dc.z) < (dc.r || 2) + 0.4) return true;
      }
      return Math.hypot(x, z) > islandR(Math.atan2(z, x)) - 1.2;
    };
    const kerbs: Item[] = [];
    const tufts: Item[] = [];
    const rutMat = toon('#5a4030', {
      transparent: true,
      opacity: 0.32,
      depthWrite: false,
      polygonOffset: true,
      polygonOffsetFactor: -3,
      polygonOffsetUnits: -8,
    });
    for (const rd of ROADS) {
      if (rd.kind === 'stones') continue;
      const L = lineOf(rd);
      const paved = rd.kind !== 'dirt';
      const side = (k: number): Vec2 => {
        const a = L[Math.max(0, k - 1)] as Vec2;
        const b = L[Math.min(L.length - 1, k + 1)] as Vec2;
        const l = Math.hypot(b[0] - a[0], b[1] - a[1]) || 1;
        return [-(b[1] - a[1]) / l, (b[0] - a[0]) / l];
      };
      for (let k = 0; k < L.length; k++) {
        const [nx, nz] = side(k);
        const ry = Math.atan2(nx, nz) + PI / 2;
        const Lk = L[k] as Vec2;
        for (const sd of [-1, 1]) {
          const off = rd.w / 2 + 0.07;
          const x = Lk[0] + nx * sd * off;
          const z = Lk[1] + nz * sd * off;
          if (inPlace(x, z) || onOther(x, z, rd, 0.25)) continue;
          if (paved)
            kerbs.push({
              x,
              y: 0.04,
              z,
              sx: 0.2,
              sy: 0.13,
              sz: rr(0.4, 0.47),
              ry: ry + rr(-0.04, 0.04),
              c:
                rd.kind === 'flag'
                  ? pick(['#8a7a70', '#7e6f66', '#94857a'])
                  : pick(['#9a8f86', '#8a8078', '#a39a90']),
            });
          if (k % 3 === 0 && rnd() < 0.7) {
            const o2 = off + (paved ? 0.25 : 0.1) + rr(0, 0.35);
            const tx = Lk[0] + nx * sd * o2;
            const tz = Lk[1] + nz * sd * o2;
            if (!inPlace(tx, tz) && !onOther(tx, tz, rd, 0.2)) {
              const c = pick(['#5f7f42', '#6a8a48', '#55753c', '#7a9450']);
              for (let q = 0; q < 5; q++)
                tufts.push({
                  x: tx + rr(-0.15, 0.15),
                  y: 0.11,
                  z: tz + rr(-0.15, 0.15),
                  rx: rr(-0.4, 0.4),
                  rz: rr(-0.4, 0.4),
                  sy: rr(0.7, 1.3),
                  c,
                });
            }
          }
        }
      }
      // two wheel ruts down the middle of a dirt road
      if (!paved && rd.w > 1.5)
        for (const sd of [-1, 1]) {
          const pts = L.map((p, k): Vec2 => {
            const [nx, nz] = side(k);
            return [p[0] + nx * sd * 0.45, p[1] + nz * sd * 0.45];
          });
          const m = new THREE.Mesh(ribbon(pts, 0.18, false, 0.035), rutMat);
          m.receiveShadow = true;
          m.renderOrder = -4;
          scene.add(m);
        }
    }
    for (const t of THRESHOLDS) {
      const nx = -t.tz;
      const nz = t.tx;
      const n = Math.max(2, Math.round((t.w + 0.3) / 0.42));
      for (let k = 0; k < n; k++) {
        const u = -((t.w + 0.3) / 2) + ((k + 0.5) * (t.w + 0.3)) / n;
        kerbs.push({
          x: t.x + nx * u - t.tx * 0.1,
          y: 0.045,
          z: t.z + nz * u - t.tz * 0.1,
          sx: 0.4,
          sy: 0.12,
          sz: 0.24,
          ry: Math.atan2(nx, nz) + PI / 2 + rr(-0.04, 0.04),
          c: pick(['#8a7a70', '#7e6f66', '#94857a']),
        });
      }
    }
    instanced(new RoundedBoxGeometry(1, 1, 1, 1, 0.2), kerbs, { cast: false });
    const tm = instanced(new THREE.ConeGeometry(0.06, 0.24, 4), tufts, {});
    if (tm) tm.userData.noLine = true;
  }

  return { models, skyDome, sun, island, cloudRing, grassTex, strataMat, crossings, patch };
}

export type Land = Awaited<ReturnType<typeof createLand>>;
