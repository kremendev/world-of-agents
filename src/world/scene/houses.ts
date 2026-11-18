/**
 * The Forge Keep's houses (v4.0.0, 4a): stone footing, dark timber walls with a red band, red tile roofs with horns and
 * skulls; zoomed in, the roof lifts off and the walls between you and the room fold down. Ported from
 * `town/src/m4-houses.js` (forge-keep, 89ae8b1). The five houses take their base, walls and roof from the Blender
 * models; the buildings nobody works in have no model and are built by hand, as in the town. Their contents follow in
 * the town's order, since they draw on the shared generator.
 */
import * as THREE from 'three';
import { FLOOR_H, ROOM, face, toWorld, type Vec2 } from '../map';
import type { Kit } from './kit';
import type { Land } from './land';
import { kitMat, kitNode, type KitModels } from './models';
import type { Props } from './props';
import type { GLTF } from 'three/examples/jsm/loaders/GLTFLoader.js';

const { PI } = Math;
const WALL_T = 0.32;

/** What a house is built from: a room of the map, or one of the buildings nobody works in. */
export type HouseSpec = {
  readonly id?: string;
  readonly name: string;
  readonly x: number;
  readonly z: number;
  readonly ry: number;
  readonly w: number;
  readonly d: number;
  readonly wallH: number;
  readonly floor?: string;
  readonly door?: { readonly side: 'S' | 'N' | 'E' | 'W'; readonly width: number };
  readonly doorLocal?: Vec2;
  readonly doorN?: Vec2;
  readonly storeys?: number;
  readonly upperH?: number;
  readonly deck?: readonly [number, number, number, number];
};
export type WallSide = {
  g: THREE.Group;
  sf: THREE.Group;
  up: THREE.Group;
  n: Vec2;
  s: number;
  wish?: boolean;
};
export type Roof = {
  R: THREE.Group;
  mats: THREE.Material[];
  base: number;
  hR: number;
  smokeAt: [number, number, number] | null;
};
export type Upper = {
  U: THREE.Group;
  sides: Record<string, WallSide>;
  lift: number;
  mats: THREE.Material[];
  top: number;
  fading?: boolean;
};
export type HouseRec = {
  id: string;
  r: HouseSpec;
  g: THREE.Group;
  sides: Record<string, WallSide>;
  lift: number;
  view: 'ground' | 'upper';
  deco: boolean;
  name: string;
  upper?: Upper;
  top: number;
  roof: Roof;
  near?: boolean;
};
export type HouseOptions = {
  id?: string;
  pitch?: number;
  chimney?: readonly [number, number] | null;
  stairHole?: readonly [number, number, number, number];
  windows?: boolean;
  deco?: boolean;
};
type WallOptions = { T?: number; base?: number; stone?: boolean; paneT?: number };
type Door = { x: number; w: number };
type BoxSpec = [number, number, number, number, number, number, number?, number?, number?];
export type TaskStatus = 'todo' | 'work' | 'review' | 'done';

const upOf = (sf: THREE.Object3D) => sf.userData.up as THREE.Group;
const cutOf = (sf: THREE.Object3D) => sf.userData.cutY as number;

export function createHouses(
  kit: Kit,
  props: Props,
  land: Land,
  models: KitModels,
  tasks: readonly TaskStatus[],
) {
  const {
    scene,
    M,
    COL,
    TEX,
    GRAD,
    UP,
    toon,
    glow,
    mesh,
    at,
    rot,
    put,
    spike,
    rr,
    pick,
    tiled,
    planarUV,
    wallUV,
    boxes,
  } = kit;
  const {
    SPINNERS,
    skull,
    horns,
    torch,
    flame,
    table,
    skullCandle,
    throne,
    rug,
    trophy,
    hangingBanner,
    weaponRack,
    shield,
    brazier,
    chest,
    crate,
    barrel,
    stool,
    drum,
    poleBanner,
    skullPole,
    woodpile,
    spikes,
    bookshelf,
    desk,
    candle,
    fence,
    plant,
    cauldron,
    bench,
    lampPost,
    scrollStack,
    telescope,
    starGlobe,
    crystal,
    wallMap,
    easel,
    bottle,
    anvil,
    sack,
    cart,
    roundTable,
    mug,
    lanternString,
    signPost,
    bed,
    curtain,
    partition,
    wardrobe,
  } = props;
  const { patch } = land;
  const HOUSES: Record<string, HouseRec> = {};
  const FLOOR_TEX: Record<string, readonly [THREE.Texture, number]> = {
    war: [TEX.planksWar, 2.6],
    dark: [TEX.planksDark, 2.6],
    light: [TEX.planksLight, 2.6],
    planks: [TEX.planks, 2.6],
    tiles: [TEX.slate, 3.6],
  };
  // A wall in two parts: everything up to the cut line stays, everything above it hangs from a pivot
  // at the cut line (sf.userData.up). The cutaway folds that upper part down into the stone band,
  // so a wall never sinks into the ground. Stone walls cut at the top of the stone band, upper-storey
  // walls at waist height.
  function buildWall(
    sf: THREE.Group,
    L: number,
    top: number,
    door: Door | null,
    corners: boolean,
    windows: boolean,
    o: WallOptions = {},
  ) {
    const T = o.T || WALL_T;
    const base = o.base || 0;
    const stone = o.stone !== false;
    const yS = stone ? 1.15 : base;
    const floorY = stone ? FLOOR_H : base;
    const cutY = stone ? yS : base + 0.9;
    const up = at(new THREE.Group(), 0, cutY, 0);
    sf.add(up);
    sf.userData.up = up;
    up.userData.movesWithWall = true;
    sf.userData.cutY = cutY;
    const lists: Record<'timber' | 'panes' | 'shutters', [BoxSpec[], BoxSpec[]]> = {
      timber: [[], []],
      panes: [[], []],
      shutters: [[], []],
    };
    // a box goes below or above the cut; an upright box that crosses it is cut in two
    function add(kind: 'timber' | 'panes' | 'shutters', b: BoxSpec) {
      const [x, y, z, sx, sy, sz, rx = 0, ry = 0, rz = 0] = b;
      const y0 = y - sy / 2;
      const y1 = y + sy / 2;
      const [lo, hi] = lists[kind];
      if (rx || rz || y0 >= cutY - 0.01) hi.push([x, y - cutY, z, sx, sy, sz, rx, ry, rz]);
      else if (y1 <= cutY + 0.01) lo.push(b);
      else {
        lo.push([x, (y0 + cutY) / 2, z, sx, cutY - y0, sz, rx, ry, rz]);
        hi.push([x, (cutY + y1) / 2 - cutY, z, sx, y1 - cutY, sz, rx, ry, rz]);
      }
    }
    const gapA = door ? door.x - door.w / 2 : 0;
    const gapB = door ? door.x + door.w / 2 : 0;
    const spans: [number, number][] = door
      ? [
          [-L / 2, gapA],
          [gapB, L / 2],
        ]
      : [[-L / 2, L / 2]];
    const uh = top - yS;
    for (const [a, b] of spans) {
      const len = b - a;
      if (len < 0.05) continue;
      const cx = (a + b) / 2;
      if (stone) {
        sf.add(at(mesh(planarUV(new THREE.BoxGeometry(len, yS, T + 0.08), 1.6), M.stone), cx, yS / 2, 0));
        up.add(at(mesh(wallUV(new THREE.BoxGeometry(len, uh, T), uh, 1.3), M.plankWall), cx, uh / 2, 0));
      } else {
        const h1 = cutY - yS;
        const h2 = top - cutY;
        sf.add(
          at(
            mesh(wallUV(new THREE.BoxGeometry(len, h1, T), h1, 1.3, 0, uh), M.plankWall),
            cx,
            yS + h1 / 2,
            0,
          ),
        );
        up.add(
          at(mesh(wallUV(new THREE.BoxGeometry(len, h2, T), h2, 1.3, h1, uh), M.plankWall), cx, h2 / 2, 0),
        );
      }
    }
    if (door) {
      const dh = FLOOR_H + 2.3;
      const lh = top - dh;
      up.add(
        at(
          mesh(wallUV(new THREE.BoxGeometry(door.w, lh, T), lh, 1.3), M.plankWall),
          door.x,
          dh + lh / 2 - cutY,
          0,
        ),
      );
      add('timber', [door.x - door.w / 2 - 0.1, (dh + 0.1) / 2, 0, 0.24, dh + 0.1, T + 0.16]);
      add('timber', [door.x + door.w / 2 + 0.1, (dh + 0.1) / 2, 0, 0.24, dh + 0.1, T + 0.16]);
      add('timber', [door.x, dh + 0.08, 0, door.w + 0.8, 0.3, T + 0.2]);
      // iron studs on the door posts
      for (const sd of [-1, 1])
        for (let i = 0; i < 4; i++)
          add('timber', [door.x + sd * (door.w / 2 + 0.1), 0.35 + i * 0.55, T / 2 + 0.09, 0.07, 0.07, 0.04]);
      up.add(at(skull(0.26), door.x, dh + 0.42 - cutY, T / 2 + 0.17));
      up.add(at(horns(0.6), door.x, dh + 0.48 - cutY, T / 2 + 0.15));
      for (const sd of [-1, 1])
        up.add(at(torch(), door.x + sd * (door.w / 2 + 0.55), FLOOR_H + 1.7 - cutY, T / 2 + 0.02));
    }
    add('timber', [0, yS + (stone ? 0 : 0.09), 0, L, 0.18, T + 0.12]);
    add('timber', [0, top - 0.1, 0, L, 0.22, T + 0.12]);
    const n = Math.max(1, Math.round(L / 2.3));
    const xs: number[] = [];
    for (let i = 1; i < n; i++) {
      const x = -L / 2 + (i * L) / n;
      if (door && x > gapA - 0.45 && x < gapB + 0.45) continue;
      xs.push(x);
      add('timber', [x, yS + uh / 2, 0, 0.2, uh, T + 0.1]);
      // pegs where the beams cross the posts
      for (const py of [yS + 0.09, top - 0.1]) add('timber', [x, py, T / 2 + 0.08, 0.09, 0.09, 0.06]);
    }
    if (corners)
      for (const x of [-L / 2 + 0.2, L / 2 - 0.2])
        add('timber', [x, (base + top + 0.12) / 2, 0, 0.42, top - base + 0.12, T + 0.18]);
    const bounds = [-L / 2 + (corners ? 0.41 : 0), ...xs, L / 2 - (corners ? 0.41 : 0)];
    if (door) bounds.push(gapA - 0.22, gapB + 0.22);
    bounds.sort((p, q) => p - q);
    let k = 0;
    for (let i = 0; i < bounds.length - 1; i++) {
      const a = bounds[i] as number;
      const b = bounds[i + 1] as number;
      const pw = b - a;
      const pc = (a + b) / 2;
      if (pw < 0.9) continue;
      if (door && pc > gapA - 0.3 && pc < gapB + 0.3) continue;
      k++;
      if (windows && pw > 1.5 && k % 2 === 1) {
        const wy = floorY + (stone ? 1.62 : 1.35);
        add('panes', [pc, wy, 0, 0.86, 0.78, o.paneT || T + 0.04]);
        for (const bb of [
          [pc, wy + 0.44, 0, 1.08, 0.1, T + 0.12],
          [pc, wy - 0.44, 0, 1.12, 0.12, T + 0.16],
          [pc - 0.48, wy, 0, 0.1, 0.96, T + 0.12],
          [pc + 0.48, wy, 0, 0.1, 0.96, T + 0.12],
          [pc, wy, 0, 0.06, 0.78, T + 0.06],
          [pc, wy, 0, 0.86, 0.05, T + 0.06],
        ] as BoxSpec[])
          add('timber', bb);
        for (const sd of [-1, 1]) {
          add('shutters', [pc + sd * 0.78, wy, T / 2 + 0.05, 0.42, 0.86, 0.05, 0, sd * 0.35, 0]);
          // a plank batten across each shutter
          add('timber', [pc + sd * 0.78 + sd * 0.012, wy, T / 2 + 0.09, 0.44, 0.08, 0.03, 0, sd * 0.35, 0]);
        }
      } else if (pw > 1.0) {
        const ph = uh - 0.3;
        const ang = Math.atan2(ph, pw - 0.2);
        const dl = Math.hypot(ph, pw - 0.2);
        for (const sd of [-1, 1])
          add('timber', [pc, yS + uh / 2, T / 2 + 0.04, dl, 0.13, 0.06, 0, 0, sd * ang]);
      }
    }
    const [tl, tu] = lists.timber;
    const [pl, pu] = lists.panes;
    const [sl, su] = lists.shutters;
    boxes(sf, M.timber, tl);
    boxes(up, M.timber, tu);
    boxes(sf, M.pane, pl, false);
    boxes(up, M.pane, pu, false);
    boxes(sf, M.red, sl);
    boxes(up, M.red, su);
    separateCut(sf, cutY);
  }
  // Opened, a house shows its walls' cut tops from above, and where two materials' boxes end at the cut (the stone band
  // and the timber sill, say) their tops share one plane and fight for the same pixels: they flicker. So each material's
  // cut top, after the darkest, is lowered a little more than the last; the parts above the cut are left alone.
  const _cutV = new THREE.Vector3();
  const _cutM = new THREE.Matrix4();
  const _cutB = new THREE.Matrix4();
  const _cutI = new THREE.Matrix4();
  function separateCut(sf: THREE.Group, cutY: number) {
    const up = upOf(sf);
    const byMat = new Map<THREE.Material, THREE.Mesh[]>();
    sf.traverse((o) => {
      if (!(o instanceof THREE.Mesh) || Array.isArray(o.material)) return;
      for (let q: THREE.Object3D | null = o; q && q !== sf; q = q.parent) if (q === up) return;
      const m = o.material as THREE.Material;
      const list = byMat.get(m);
      if (list) list.push(o);
      else byMat.set(m, [o]);
    });
    const lum = (m: THREE.Material) => {
      const mm = m as THREE.MeshToonMaterial;
      return (mm.color ? mm.color.r * 0.3 + mm.color.g * 0.59 + mm.color.b * 0.11 : 0) + (mm.map ? 0.5 : 0);
    };
    const mats = [...byMat.keys()].sort((a, b) => lum(a) - lum(b));
    sf.updateWorldMatrix(true, true);
    _cutI.copy(sf.matrixWorld).invert();
    const done = new Set<THREE.BufferGeometry>();
    mats.forEach((m, i) => {
      if (!i) return;
      for (const o of byMat.get(m) ?? []) {
        const geo = o.geometry as THREE.BufferGeometry;
        if (done.has(geo)) continue;
        done.add(geo);
        _cutM.multiplyMatrices(_cutI, o.matrixWorld);
        _cutB.copy(_cutM).invert();
        const pos = geo.attributes.position as THREE.BufferAttribute;
        let moved = false;
        for (let k = 0; k < pos.count; k++) {
          _cutV.fromBufferAttribute(pos, k).applyMatrix4(_cutM);
          if (Math.abs(_cutV.y - cutY) > 0.002) continue;
          _cutV.y -= 0.003 * i;
          _cutV.applyMatrix4(_cutB);
          pos.setXYZ(k, _cutV.x, _cutV.y, _cutV.z);
          moved = true;
        }
        if (moved) {
          pos.needsUpdate = true;
          geo.computeBoundingBox();
          geo.computeBoundingSphere();
        }
      }
    });
  }
  // every roof material gets its own see-through copy so the roof can fade as it lifts
  function fadeCopies(R: THREE.Group): THREE.Material[] {
    const mats: THREE.Material[] = [];
    const cache = new Map<THREE.Material, THREE.Material>();
    R.traverse((ob) => {
      if (!(ob instanceof THREE.Mesh)) return;
      const src = ob.material as THREE.Material;
      let c = cache.get(src);
      if (!c) {
        c = src.clone();
        c.transparent = true;
        cache.set(src, c);
        mats.push(c);
      }
      ob.material = c;
    });
    return mats;
  }
  function buildRoof(H: HouseRec, top: number, o: HouseOptions): Roof {
    const r = H.r;
    const a = o.pitch || 0.6;
    const over = 0.6;
    const half = r.d / 2 + over;
    const R = new THREE.Group();
    R.position.y = top - over * Math.tan(a);
    H.g.add(R);
    const hR = half * Math.tan(a);
    const yb = over * Math.tan(a);
    const slabLen = half / Math.cos(a);
    const tile = toon('#ffffff', { map: TEX.roof });
    for (const sd of [-1, 1]) {
      const s = mesh(planarUV(new THREE.BoxGeometry(r.w + over * 2, 0.18, slabLen), 1.6), tile);
      s.rotation.x = sd < 0 ? -a : a;
      s.position.set(0, hR / 2, (sd * half) / 2);
      R.add(s);
    }
    const sh = new THREE.Shape();
    sh.moveTo(-r.d / 2, yb);
    sh.lineTo(r.d / 2, yb);
    sh.lineTo(0, hR - 0.12);
    sh.closePath();
    const gg = new THREE.ShapeGeometry(sh);
    const gable = toon('#ffffff', { map: TEX.gable, side: THREE.DoubleSide });
    for (const sd of [-1, 1]) {
      R.add(at(rot(mesh(gg, gable), 0, PI / 2, 0), sd * (r.w / 2 + 0.02), 0, 0));
      R.add(at(rot(skull(0.34), 0, (sd * PI) / 2, 0), sd * (r.w / 2 + 0.2), yb + (hR - yb) * 0.42, 0));
      R.add(at(rot(horns(1.1), 0, (sd * PI) / 2, 0), sd * (r.w / 2 + over + 0.05), hR + 0.12, 0));
    }
    R.add(at(mesh(new THREE.BoxGeometry(r.w + over * 2 + 0.2, 0.2, 0.26), M.iron), 0, hR + 0.04, 0));
    const nSp = Math.floor((r.w + over) / 1.5);
    for (let i = 0; i < nSp; i++)
      spike(
        R,
        new THREE.Vector3(-r.w / 2 + 0.5 + (i * (r.w - 1)) / Math.max(1, nSp - 1), hR + 0.12, 0),
        UP,
        0.34,
        0.06,
        M.boneD,
        0,
        5,
      );
    let smokeAt: [number, number, number] | null = null;
    if (o.chimney) {
      const [cx, cz] = o.chimney;
      const ch = hR + 1.4;
      R.add(at(mesh(planarUV(new THREE.BoxGeometry(0.85, ch, 0.85), 1.2), M.stone), cx, ch / 2, cz));
      R.add(at(mesh(new THREE.BoxGeometry(1.05, 0.16, 1.05), M.iron), cx, ch + 0.05, cz));
      smokeAt = [cx, ch + 0.3, cz];
    }
    const mats = fadeCopies(R);
    return { R, mats, base: R.position.y, hR, smokeAt };
  }
  function wallDefs(r: HouseSpec) {
    return {
      S: { c: [0, r.d / 2] as Vec2, n: [0, 1] as Vec2, L: r.w + WALL_T },
      N: { c: [0, -r.d / 2] as Vec2, n: [0, -1] as Vec2, L: r.w + WALL_T },
      E: { c: [r.w / 2, 0] as Vec2, n: [1, 0] as Vec2, L: r.d - WALL_T },
      W: { c: [-r.w / 2, 0] as Vec2, n: [-1, 0] as Vec2, L: r.d - WALL_T },
    };
  }
  function sideFrame(parent: THREE.Object3D, sd: { c: Vec2; n: Vec2 }) {
    const sg = new THREE.Group();
    parent.add(sg);
    const sf = new THREE.Group();
    sf.position.set(sd.c[0], 0, sd.c[1]);
    sf.rotation.y = Math.atan2(sd.n[0], sd.n[1]);
    sg.add(sf);
    return { sg, sf };
  }
  /* ---------- houses from Blender: the same groups as the hand-built ones, so the cutaway works unchanged.
     Each named part of the file (in house coordinates) goes into the group that moves it: a wall's lower part stays,
     its upper part folds, the roof lifts and fades. */
  function kitPut(H: HouseRec, node: THREE.Object3D | null, target: THREE.Object3D) {
    if (!node) return;
    node.updateWorldMatrix(true, true);
    H.g.updateMatrixWorld(true);
    const meshes: THREE.Mesh[] = [];
    node.traverse((o) => {
      if (o instanceof THREE.Mesh) meshes.push(o);
    });
    for (const o of meshes) {
      const geo = o.geometry as THREE.BufferGeometry;
      // a blank uv set lets the town bake the parts that never move together with everything else
      if (!geo.attributes.uv)
        geo.setAttribute(
          'uv',
          new THREE.Float32BufferAttribute(
            new Float32Array((geo.attributes.position as THREE.BufferAttribute).count * 2),
            2,
          ),
        );
      const mat = kitMat(kit, o.material as THREE.Material);
      const m = new THREE.Mesh(geo, mat);
      m.castShadow = !(mat as THREE.MeshStandardMaterial).isMeshStandardMaterial;
      m.receiveShadow = true;
      o.matrixWorld.decompose(m.position, m.quaternion, m.scale);
      H.g.add(m);
      m.updateMatrixWorld(true);
      target.attach(m);
    }
  }
  function kitWall(
    H: HouseRec,
    sf: THREE.Group,
    lo: THREE.Object3D | null,
    hi: THREE.Object3D | null,
    door: Door | null,
    o: WallOptions = {},
  ) {
    const T = o.T || WALL_T;
    const stone = o.stone !== false;
    const base = o.base || 0;
    const cutY = stone ? 1.15 : base + 0.9;
    const up = at(new THREE.Group(), 0, cutY, 0);
    sf.add(up);
    sf.userData.up = up;
    up.userData.movesWithWall = true;
    sf.userData.cutY = cutY;
    kitPut(H, lo, sf);
    kitPut(H, hi, up);
    separateCut(sf, cutY);
    if (door)
      for (const sd of [-1, 1])
        up.add(at(torch(), door.x + sd * (door.w / 2 + 0.55), FLOOR_H + 1.7 - cutY, T / 2 + 0.08));
  }
  function kitRoof(H: HouseRec, top: number, o: HouseOptions, node: THREE.Object3D | null): Roof {
    const r = H.r;
    const a = o.pitch || 0.6;
    const over = 0.6;
    const half = r.d / 2 + over;
    const R = new THREE.Group();
    R.position.y = top - over * Math.tan(a);
    H.g.add(R);
    const hR = half * Math.tan(a);
    kitPut(H, node, R);
    const mats = fadeCopies(R);
    let smokeAt: [number, number, number] | null = null;
    if (o.chimney) {
      const [cx, cz] = o.chimney;
      smokeAt = [cx, hR + 1.4 + 0.3, cz];
    }
    return { R, mats, base: R.position.y, hR, smokeAt };
  }
  const HOUSE_MODELS: Partial<Record<string, GLTF>> = {
    war: models.house_war,
    workshop: models.house_workshop,
    tavern: models.house_tavern,
    library: models.house_library,
    studio: models.house_studio,
  };
  function buildHouse(r: HouseSpec, o: HouseOptions = {}): HouseRec {
    const g = new THREE.Group();
    g.position.set(r.x, 0, r.z);
    g.rotation.y = r.ry || 0;
    scene.add(g);
    const id = (r.id || o.id) as string;
    const H = {
      id,
      r,
      g,
      sides: {},
      lift: 0,
      view: 'ground',
      deco: !!o.deco,
      name: r.name,
      top: 0,
    } as unknown as HouseRec;
    const model = HOUSE_MODELS[id];
    const partOf = (name: string) => (model ? kitNode(model, id + '_' + name) : null);
    if (model) kitPut(H, partOf('base'), g);
    else
      g.add(
        at(
          mesh(planarUV(new THREE.BoxGeometry(r.w + 0.6, FLOOR_H + 0.3, r.d + 0.6), 1.4), M.stone),
          0,
          (FLOOR_H + 0.3) / 2 - 0.3,
          0,
        ),
      );
    const [ft, tl] = FLOOR_TEX[r.floor || 'planks'] as readonly [THREE.Texture, number];
    g.add(
      rot(
        at(
          mesh(
            new THREE.PlaneGeometry(r.w, r.d),
            toon('#ffffff', { map: tiled(ft, r.w / tl, r.d / tl) }),
            false,
          ),
          0,
          FLOOR_H + 0.004,
          0,
        ),
        -PI / 2,
        0,
        0,
      ),
    );
    const top = FLOOR_H + r.wallH;
    const defs = wallDefs(r);
    const doorLocal = r.doorLocal || [0, r.d / 2];
    const doorSide = r.door ? r.door.side : 'S';
    for (const [k, sd] of Object.entries(defs)) {
      const { sg, sf } = sideFrame(g, sd);
      const ux = Math.cos(sf.rotation.y);
      const uz = -Math.sin(sf.rotation.y);
      const door =
        doorSide === k
          ? {
              x: (doorLocal[0] - sd.c[0]) * ux + (doorLocal[1] - sd.c[1]) * uz,
              w: (r.door && r.door.width) || 1.4,
            }
          : null;
      if (model) kitWall(H, sf, partOf(k + '_lo'), partOf(k + '_hi'), door);
      else buildWall(sf, sd.L, top, door, k === 'N' || k === 'S', o.windows !== false);
      H.sides[k] = { g: sg, sf, up: upOf(sf), n: sd.n, s: 1 };
    }
    // a stone step at the door (the Blender footing has its own)
    if (!model) {
      const dn = r.doorN || [0, 1];
      const along =
        Math.abs(dn[0]) > 0
          ? [0.7, ((r.door && r.door.width) || 1.4) + 0.5]
          : [((r.door && r.door.width) || 1.4) + 0.5, 0.7];
      g.add(
        at(
          mesh(planarUV(new THREE.BoxGeometry(along[0] as number, 0.14, along[1] as number), 1.2), M.stone),
          doorLocal[0] + dn[0] * 0.62,
          0.07,
          doorLocal[1] + dn[1] * 0.62,
        ),
      );
    }
    let roofAt = top;
    if (r.storeys === 2) {
      // the upper storey: a floor with a hole over the stairs, walls without the stone band
      const uh = r.upperH || 2.5;
      const U = at(new THREE.Group(), 0, top, 0);
      U.userData.movesWithWall = true;
      g.add(U);
      const upper: Upper = { U, sides: {}, lift: 0, mats: [], top };
      H.upper = upper;
      if (model) kitPut(H, partOf('Ufloor'), U);
      else {
        const floorMat = toon('#ffffff', { map: ft });
        const [hx0, hx1, hz0, hz1] = o.stairHole || [0, 0, 0, 0];
        const hw = r.w / 2;
        const hd = r.d / 2;
        const pieces = o.stairHole
          ? [
              [-hw, hx0, -hd, hd],
              [hx1, hw, -hd, hd],
              [hx0, hx1, -hd, hz0],
              [hx0, hx1, hz1, hd],
            ]
          : [[-hw, hw, -hd, hd]];
        for (const [x0, x1, z0, z1] of pieces as [number, number, number, number][]) {
          if (x1 - x0 < 0.05 || z1 - z0 < 0.05) continue;
          U.add(
            at(
              mesh(planarUV(new THREE.BoxGeometry(x1 - x0, 0.22, z1 - z0), tl), floorMat),
              (x0 + x1) / 2,
              0.09,
              (z0 + z1) / 2,
            ),
          );
        }
      }
      const jetty: BoxSpec[] = [];
      for (const [k, sd] of Object.entries(defs)) {
        const { sg, sf } = sideFrame(U, sd);
        if (model)
          kitWall(H, sf, partOf('U' + k + '_lo'), partOf('U' + k + '_hi'), null, {
            base: 0.2,
            stone: false,
            T: WALL_T - 0.05,
          });
        else {
          buildWall(sf, sd.L, 0.2 + uh, null, k === 'N' || k === 'S', true, {
            base: 0.2,
            stone: false,
            T: WALL_T - 0.05,
            paneT: WALL_T - 0.03,
          });
          jetty.push([0, 0.05, 0.2, sd.L + 0.2, 0.2, 0.18]);
          boxes(sf, M.timber, jetty.slice(-1));
        }
        upper.sides[k] = { g: sg, sf, up: upOf(sf), n: sd.n, s: 1 };
      }
      roofAt = top + 0.2 + uh;
    }
    H.top = roofAt;
    H.roof = model ? kitRoof(H, roofAt, o, partOf('roof')) : buildRoof(H, roofAt, o);
    HOUSES[id] = H;
    return H;
  }
  // straight stairs from the ground floor up to the floor above, rising along z
  function stairs(H: HouseRec, x: number, zBottom: number, zTop: number, width: number) {
    const upper = H.upper as Upper;
    const steps = 12;
    const rise = upper.top + 0.2 - FLOOR_H;
    const depth = (zTop - zBottom) / steps;
    const list: BoxSpec[] = [];
    for (let i = 0; i < steps; i++) {
      const h = (rise * (i + 1)) / steps;
      list.push([x, FLOOR_H + h / 2, zBottom + depth * (i + 0.5), width, h, Math.abs(depth) + 0.01]);
    }
    boxes(H.g, M.wood, list);
    const side = x > 0 ? -1 : 1;
    const rx = x + side * (width / 2 + 0.04);
    for (let i = 0; i <= 4; i++) {
      const z = zBottom + ((zTop - zBottom) * i) / 4;
      const y = FLOOR_H + (rise * i) / 4;
      H.g.add(at(mesh(new THREE.BoxGeometry(0.07, 0.95, 0.07), M.woodD), rx, y + 0.5, z));
    }
    const len = Math.hypot(zTop - zBottom, rise);
    const rail = at(
      mesh(new THREE.BoxGeometry(0.08, 0.08, len), M.woodL),
      rx,
      FLOOR_H + rise / 2 + 0.95,
      (zBottom + zTop) / 2,
    );
    rail.rotation.x = -Math.atan2(rise, zTop - zBottom);
    H.g.add(rail);
  }
  function hang(sf: THREE.Group, obj: THREE.Object3D, x: number, y: number, z: number) {
    const cut = cutOf(sf);
    if (y > cut) {
      obj.position.set(x, y - cut, z);
      upOf(sf).add(obj);
    } else {
      obj.position.set(x, y, z);
      sf.add(obj);
    }
  }
  const alongOf = (side: string, along: number) =>
    side === 'S' ? along : side === 'N' ? -along : side === 'E' ? -along : along;
  function onWallU<T extends THREE.Object3D>(
    H: HouseRec,
    side: string,
    obj: T,
    along: number,
    y: number,
    depth = 0.1,
  ): T {
    const s = (H.upper as Upper).sides[side] as WallSide;
    obj.rotation.y = PI;
    hang(s.sf, obj, alongOf(side, along), y, -((WALL_T - 0.05) / 2 + depth / 2 + 0.01));
    return obj;
  }
  const inU = <T extends THREE.Object3D>(H: HouseRec, obj: T, x: number, z: number, ry = 0) =>
    put((H.upper as Upper).U, obj, x, z, ry, 0.2);
  function railing(parent: THREE.Object3D, pts: readonly (readonly [number, number])[], y = 0, h = 0.9) {
    for (let i = 0; i < pts.length - 1; i++) {
      const [ax, az] = pts[i] as readonly [number, number];
      const [bx, bz] = pts[i + 1] as readonly [number, number];
      const len = Math.hypot(bx - ax, bz - az);
      const r = at(
        mesh(new THREE.BoxGeometry(len, 0.07, 0.07), M.woodL),
        (ax + bx) / 2,
        y + h,
        (az + bz) / 2,
      );
      r.rotation.y = -Math.atan2(bz - az, bx - ax);
      parent.add(r);
      const n = Math.max(1, Math.round(len / 0.5));
      for (let k = 0; k <= n; k++)
        parent.add(
          at(
            mesh(new THREE.BoxGeometry(0.05, h, 0.05), M.woodD),
            ax + ((bx - ax) * k) / n,
            y + h / 2,
            az + ((bz - az) * k) / n,
          ),
        );
    }
  }
  function onWall<T extends THREE.Object3D>(
    H: HouseRec,
    side: string,
    obj: T,
    along: number,
    y: number,
    depth = 0.1,
    inside = true,
  ): T {
    const s = H.sides[side] as WallSide;
    if (inside) obj.rotation.y = PI;
    hang(
      s.sf,
      obj,
      alongOf(side, along),
      y,
      inside ? -(WALL_T / 2 + depth / 2 + 0.01) : WALL_T / 2 + depth / 2 + 0.01,
    );
    return obj;
  }
  const inH = <T extends THREE.Object3D>(H: HouseRec, obj: T, x: number, z: number, ry = 0) =>
    put(H.g, obj, x, z, ry, FLOOR_H);
  const outH = <T extends THREE.Object3D>(H: HouseRec, obj: T, x: number, z: number, ry = 0) =>
    put(H.g, obj, x, z, ry, 0);
  // world point of a house-local spot, for patches under a territory
  const W2 = (r: HouseSpec, x: number, z: number) => toWorld(r, x, z);

  /* ---------- the task board */
  const boardCanvas = document.createElement('canvas');
  boardCanvas.width = 512;
  boardCanvas.height = 280;
  const boardTex = new THREE.CanvasTexture(boardCanvas);
  boardTex.colorSpace = THREE.SRGBColorSpace;
  let boardTasks = tasks;
  // The town painted this lettering in "M PLUS Rounded 1c" from Google Fonts, which the page's policy refuses; the stack
  // falls back to the self-hosted Inter (the world's label font is a question before 4d).
  const BOARD_FONT = '"M PLUS Rounded 1c", "Inter Variable", sans-serif';
  function drawBoard(next: readonly TaskStatus[] = boardTasks) {
    boardTasks = next;
    const g = boardCanvas.getContext('2d');
    if (!g) return;
    const W = 512;
    const done = next.filter((t) => t === 'done').length;
    g.fillStyle = '#2e2422';
    g.fillRect(0, 0, W, 280);
    g.fillStyle = '#e3d5b6';
    g.font = `800 40px ${BOARD_FONT}`;
    g.textAlign = 'left';
    g.fillText('TASKS', 28, 58);
    g.fillStyle = '#ffd27a';
    g.textAlign = 'right';
    g.fillText(`${done} / 5`, W - 28, 58);
    const col: Record<TaskStatus, string> = {
      done: '#6f9a52',
      work: '#d9762e',
      review: '#4f9a96',
      todo: '#6e6668',
    };
    ['L', 'D', 'B', 'F', 'R'].forEach((ch, i) => {
      const x = 28 + i * 94;
      const y = 90;
      g.fillStyle = col[next[i] ?? 'todo'];
      g.beginPath();
      g.roundRect(x, y, 78, 96, 14);
      g.fill();
      g.fillStyle = 'rgba(255, 255, 255, 0.22)';
      g.beginPath();
      g.roundRect(x + 6, y + 6, 66, 18, 8);
      g.fill();
      g.fillStyle = '#1e1a1c';
      g.font = `800 46px ${BOARD_FONT}`;
      g.textAlign = 'center';
      g.fillText(ch, x + 39, y + 70);
    });
    g.fillStyle = '#1b1616';
    g.beginPath();
    g.roundRect(28, 220, W - 56, 28, 14);
    g.fill();
    if (done) {
      g.fillStyle = '#d9762e';
      g.beginPath();
      g.roundRect(28, 220, ((W - 56) * done) / 5, 28, 14);
      g.fill();
    }
    boardTex.needsUpdate = true;
  }
  drawBoard();
  if (document.fonts) void document.fonts.ready.then(() => drawBoard());
  function taskBoard(): THREE.Group {
    const g = new THREE.Group();
    g.add(mesh(new THREE.BoxGeometry(2.7, 1.65, 0.1), M.woodD));
    g.add(
      at(
        new THREE.Mesh(
          new THREE.PlaneGeometry(2.45, 1.35),
          new THREE.MeshBasicMaterial({ map: boardTex, toneMapped: false }),
        ),
        0,
        0,
        0.06,
      ),
    );
    g.add(at(mesh(new THREE.BoxGeometry(2.9, 0.14, 0.2), M.wood), 0, 0.9, 0.02));
    g.add(at(skull(0.18), 0, 1.08, 0.06));
    return g;
  }

  /* ---------------- War hall (the Lead/PM) */
  {
    const r = ROOM.war as HouseSpec;
    const H = buildHouse(r, { pitch: 0.62 });
    const top = FLOOR_H + r.wallH;
    inH(H, table(3.4, 2.0, 0.86), -2.5, -0.6);
    {
      const geo = new THREE.PlaneGeometry(3.0, 1.7, 26, 16);
      const pos = geo.attributes.position as THREE.BufferAttribute;
      const cols: number[] = [];
      for (let i = 0; i < pos.count; i++) {
        const x = pos.getX(i);
        const y = pos.getY(i);
        const h = Math.max(
          0,
          Math.sin(x * 2.1 + 1) * Math.cos(y * 2.7) * 0.1 + Math.sin(x * 5 + y * 3) * 0.03,
        );
        pos.setZ(i, h);
        cols.push(
          ...(h > 0.08
            ? [0.86, 0.82, 0.76]
            : h > 0.03
              ? [0.5, 0.38, 0.28]
              : h > 0.005
                ? [0.42, 0.55, 0.32]
                : [0.32, 0.5, 0.62]),
        );
      }
      geo.setAttribute('color', new THREE.Float32BufferAttribute(cols, 3));
      geo.computeVertexNormals();
      const map = rot(
        at(
          mesh(geo, new THREE.MeshToonMaterial({ vertexColors: true, gradientMap: GRAD }), false),
          -2.5,
          FLOOR_H + 0.91,
          -0.6,
        ),
        -PI / 2,
        0,
        0,
      );
      H.g.add(map);
      for (const [dx, dz, c] of [
        [-0.9, -0.3, COL.red],
        [0.4, 0.3, '#3f5f8f'],
        [1.0, -0.4, COL.gold],
        [-0.2, -0.5, COL.red],
      ] as const) {
        H.g.add(
          at(
            mesh(new THREE.CylinderGeometry(0.012, 0.012, 0.24, 4), M.dark, false),
            -2.5 + dx,
            FLOOR_H + 1.05,
            -0.6 + dz,
          ),
        );
        H.g.add(
          at(
            mesh(new THREE.BoxGeometry(0.12, 0.07, 0.01), toon(c), false),
            -2.5 + dx + 0.06,
            FLOOR_H + 1.13,
            -0.6 + dz,
          ),
        );
      }
      for (const [dx, dz] of [
        [-1.55, -0.85],
        [1.55, 0.85],
      ] as const)
        inH(H, skullCandle(), -2.5 + dx, -0.6 + dz).position.y = FLOOR_H + 0.9;
    }
    inH(H, throne(), -6.1, -2.6, face(-6.1, -2.6, -2.5, -0.6));
    inH(H, rug(1.6, [COL.redD, COL.bone, COL.red, COL.black, COL.redL, COL.redD]), -4.6, 0.6);
    onWall(H, 'N', taskBoard(), 3.8, FLOOR_H + 1.95, 0.12);
    onWall(H, 'N', trophy(), -2.5, FLOOR_H + 2.2, 0.1);
    onWall(H, 'N', trophy(), 0.9, FLOOR_H + 2.1, 0.1);
    onWall(H, 'N', hangingBanner(1.0, 1.9), -5.4, top - 0.3, 0.04);
    onWall(H, 'N', hangingBanner(1.0, 1.9), 6.4, top - 0.3, 0.04);
    onWall(H, 'W', weaponRack(4), 0.6, FLOOR_H, 0.3);
    onWall(H, 'E', shield(COL.red), -2.0, FLOOR_H + 1.9, 0.1);
    onWall(H, 'E', shield(COL.black), 1.2, FLOOR_H + 1.9, 0.1);
    inH(H, brazier(7), 6.3, -3.3);
    inH(H, brazier(0, 0.85), -6.7, 3.5);
    inH(H, chest(), 6.3, 1.6, -PI / 2);
    inH(H, crate(0.6), 5.3, 3.6, 0.3);
    inH(H, crate(0.45), 5.9, 3.7, 0.9);
    inH(H, barrel(0.9), -6.6, -0.6);
    inH(H, stool(), -0.9, -2.2);
    // in front: a flagstone square, drums and banners; behind: the armoury pile
    patch('plaza', ...W2(r, 0, 7.4), 5.8, 3.6, -r.ry, 0.014);
    outH(H, drum(), -4.4, 6.0, 0.3);
    outH(H, drum(), 5.6, 5.9, -0.2);
    outH(H, poleBanner(3.4), -2.6, 5.0);
    outH(H, poleBanner(3.4), 2.6, 5.0);
    outH(H, skullPole(2.6), -7.0, 6.2);
    outH(H, skullPole(2.2), 7.8, 5.4);
    outH(H, brazier(0), -6.2, 5.0);
    outH(H, woodpile(2.4), -3.0, -6.0);
    outH(H, barrel(), 4.4, -5.6);
    outH(H, barrel(0.9), 5.0, -6.1);
    outH(H, barrel(1, true), 3.6, -6.2, 0.4);
    outH(H, rot(weaponRack(4), 0, PI, 0), 0.8, -5.6);
    outH(H, spikes(3.0), -8.6, -1.0, PI / 2);
  }

  /* ---------------- Library (the Reviewer) */
  {
    const r = ROOM.library as HouseSpec;
    const H = buildHouse(r, { pitch: 0.66, stairHole: [4.0, 4.84, -2.0, 0.0] });
    const top = FLOOR_H + r.wallH;
    for (const x of [-3.6, -1.4]) inH(H, bookshelf(2.0), x, -r.d / 2 + WALL_T / 2 + 0.27);
    for (const z of [-2.1, 0.3]) inH(H, bookshelf(2.0), -r.w / 2 + WALL_T / 2 + 0.27, z, PI / 2);
    const lib = desk('books');
    inH(H, lib.g, 1.8, -1.2);
    inH(H, candle(0.18, 4), 2.45, -0.95).position.y = FLOOR_H + 0.79;
    {
      const ch = new THREE.Group();
      ch.add(at(mesh(new THREE.BoxGeometry(1.0, 0.45, 0.9), toon('#5a1f2a')), 0, 0.3, 0));
      ch.add(at(mesh(new THREE.BoxGeometry(0.86, 0.12, 0.74), toon('#7a2a36')), 0, 0.58, 0.04));
      ch.add(at(mesh(new THREE.BoxGeometry(1.0, 0.95, 0.22), toon('#5a1f2a')), 0, 0.8, -0.38));
      for (const sd of [-1, 1])
        ch.add(at(mesh(new THREE.BoxGeometry(0.2, 0.6, 0.9), toon('#4a1822')), sd * 0.5, 0.52, 0));
      inH(H, ch, -3.3, 1.9, 0.9);
    }
    inH(H, rug(1.5, ['#3a1f3a', COL.bone, '#5a2a4a', COL.redD, '#e0cfa8', '#3a1f3a']), -1.2, 0.8);
    {
      const lec = new THREE.Group();
      lec.add(at(mesh(new THREE.CylinderGeometry(0.08, 0.2, 1.0, 8), M.woodD), 0, 0.5, 0));
      lec.add(rot(at(mesh(new THREE.BoxGeometry(0.6, 0.06, 0.44), M.wood), 0, 1.06, 0), 0.35, 0, 0));
      lec.add(
        rot(at(mesh(new THREE.BoxGeometry(0.5, 0.03, 0.36), toon('#e6d9bc')), 0, 1.1, 0.01), 0.35, 0, 0),
      );
      inH(H, lec, 2.3, 2.5, -0.5);
    }
    {
      const gl = new THREE.Group();
      gl.add(at(mesh(new THREE.CylinderGeometry(0.05, 0.2, 0.9, 10), M.woodD), 0, 0.45, 0));
      const tilt = at(new THREE.Group(), 0, 1.25, 0);
      tilt.rotation.z = 0.4;
      const ball = mesh(new THREE.SphereGeometry(0.34, 24, 16), toon('#ffffff', { map: TEX.globe }));
      tilt.add(ball);
      tilt.add(rot(mesh(new THREE.TorusGeometry(0.4, 0.02, 6, 28), M.gold), 0, PI / 2, 0));
      gl.add(tilt);
      inH(H, gl, 0.5, 3.0);
      SPINNERS.push({ o: ball, axis: 'y', v: 0.25 });
    }
    {
      const orb = new THREE.Group();
      orb.add(at(mesh(new THREE.CylinderGeometry(0.16, 0.26, 0.9, 8), M.woodD), 0, 0.45, 0));
      orb.add(at(mesh(new THREE.SphereGeometry(0.22, 16, 12), glow('#5fe0d0', 1.0), false), 0, 1.12, 0));
      for (let i = 0; i < 3; i++) {
        const a = (i / 3) * PI * 2;
        spike(
          orb,
          new THREE.Vector3(Math.cos(a) * 0.14, 0.92, Math.sin(a) * 0.14),
          new THREE.Vector3(Math.cos(a), 2, Math.sin(a)),
          0.3,
          0.03,
          M.bone,
          0,
          5,
        );
      }
      inH(H, orb, 3.0, -3.2);
    }
    const stacks: Parameters<Kit['instanced']>[1][number][] = [];
    for (const [x, z, n] of [
      [0.2, -3.4, 5],
      [0.75, -3.5, 3],
      [-4.2, 3.3, 4],
    ] as const) {
      const [wx, wz] = W2(r, x, z);
      let y = FLOOR_H;
      for (let i = 0; i < n; i++) {
        const h = rr(0.06, 0.1);
        stacks.push({
          x: wx + rr(-0.03, 0.03),
          y: y + h / 2,
          z: wz + rr(-0.03, 0.03),
          sx: rr(0.32, 0.42),
          sy: h,
          sz: rr(0.24, 0.3),
          ry: r.ry + rr(-0.3, 0.3),
          c: pick(props.BOOK_COLS),
        });
        y += h;
      }
    }
    kit.instanced(kit.UNIT_BOX, stacks, { cast: true });
    inH(H, skullCandle(), -4.3, 3.4).position.y = FLOOR_H + 0.42;
    inH(H, candle(0.5), -4.5, 2.9);
    inH(H, candle(0.34), -4.2, 2.7);
    onWall(H, 'E', hangingBanner(0.9, 1.6), -3.0, top - 0.3, 0.04);
    onWall(H, 'S', trophy(), 1.6, FLOOR_H + 2.1, 0.1);
    // the round tower at the front corner
    {
      const t = new THREE.Group();
      t.add(
        at(
          mesh(
            new THREE.CylinderGeometry(2.2, 2.4, 7.6, 22),
            toon('#ffffff', { map: tiled(TEX.castleWall, 3.5, 2.4) }),
          ),
          0,
          3.8,
          0,
        ),
      );
      t.add(at(mesh(new THREE.CylinderGeometry(2.6, 2.4, 0.4, 22), M.stone), 0, 7.7, 0));
      t.add(
        at(
          mesh(new THREE.ConeGeometry(2.9, 3.6, 22), toon('#ffffff', { map: tiled(TEX.roof, 5, 2) })),
          0,
          9.7,
          0,
        ),
      );
      t.add(at(skull(0.45), 0, 11.8, 0));
      for (const [a, y] of [
        [0.5, 2.6],
        [2.0, 4.6],
        [3.6, 3.4],
        [5.2, 5.6],
      ] as const)
        t.add(
          at(
            rot(mesh(new THREE.BoxGeometry(0.4, 0.9, 0.12), M.pane, false), 0, -a + PI / 2, 0),
            Math.cos(a) * 2.32,
            y,
            Math.sin(a) * 2.32,
          ),
        );
      t.add(at(rot(hangingBanner(1.0, 2.2), 0, 0.6, 0), Math.sin(0.6) * 2.42, 6.8, Math.cos(0.6) * 2.42));
      outH(H, t, 5.6, 3.4);
    }
    // beside it: a herb plot, a cauldron, a bench
    fence(
      H.g,
      [
        [-5.8, 4.9],
        [-5.8, 7.6],
        [-9.0, 7.6],
        [-9.0, 4.9],
      ],
      0.7,
    );
    for (let i = 0; i < 10; i++) outH(H, plant(rr(0.6, 0.9)), rr(-8.6, -6.2), rr(5.3, 7.1));
    outH(H, cauldron(), 1.2, 6.2);
    outH(H, bench(1.6, true), 3.0, 6.7, PI);
    outH(H, skullPole(2.2), -0.4, 5.6);
    outH(H, lampPost(0), -4.6, 4.6);
    outH(H, crate(0.55), 6.2, -1.4, 0.3);
    outH(H, crate(0.4), 6.3, -0.8, 0.8);
    patch('dirt', ...W2(r, 0.5, 6.4), 4.6, 2.2, -r.ry, 0.013);
    // upstairs: the archive
    stairs(H, 4.42, -3.4, -0.2, 0.84);
    railing(
      (H.upper as Upper).U,
      [
        [4.0, 0.0],
        [4.0, -2.0],
        [4.84, -2.0],
      ],
      0.2,
    );
    for (const x of [-3.6, -1.4, 1.0]) inU(H, bookshelf(2.0), x, -r.d / 2 + WALL_T / 2 + 0.27);
    for (const z of [-2.1, 0.3, 2.5]) inU(H, bookshelf(2.0), -r.w / 2 + WALL_T / 2 + 0.27, z, PI / 2);
    inU(H, table(2.2, 1.0, 0.8, M.wood), 0.2, 0.7);
    inU(H, scrollStack(), -0.4, 0.6).position.y = 1.04;
    inU(H, scrollStack(), 0.9, 0.9).position.y = 1.04;
    inU(H, at(mesh(new THREE.BoxGeometry(0.5, 0.03, 0.36), toon('#e6d9bc')), 0, 0, 0), 0.3, 0.5).position.y =
      1.03;
    inU(H, candle(0.2), -0.6, 1.0).position.y = 1.0;
    inU(H, candle(0.14), 0.95, 0.4).position.y = 1.0;
    inU(H, stool(), 0.2, 1.6);
    inU(H, stool(), -0.9, 1.5);
    inU(H, telescope(), 2.4, 2.9, PI);
    inU(H, starGlobe(), -2.6, 2.6);
    inU(H, crystal(), 2.9, -2.8);
    inU(H, rug(1.3, ['#3a1f3a', COL.bone, '#5a2a4a', COL.redD, '#e0cfa8', '#3a1f3a']), 0.2, 0.7);
    onWallU(H, 'S', wallMap(), -0.6, 1.75, 0.06);
    onWallU(H, 'E', trophy(), 2.4, 1.8, 0.1);
    inU(H, chest(), -3.6, 3.2, 0);
  }

  /* ---------------- Design studio (the Designer) */
  {
    const r = ROOM.studio as HouseSpec;
    const H = buildHouse(r, { pitch: 0.58 });
    const top = FLOOR_H + r.wallH;
    const st = desk('paper');
    inH(H, st.g, -2.0, -1.6);
    {
      const mb = new THREE.Group();
      mb.add(mesh(new THREE.BoxGeometry(1.6, 1.25, 0.08), M.wood));
      mb.add(
        at(
          new THREE.Mesh(
            new THREE.PlaneGeometry(1.45, 1.1),
            new THREE.MeshBasicMaterial({ map: TEX.moodboard, toneMapped: false }),
          ),
          0,
          0,
          0.05,
        ),
      );
      onWall(H, 'N', mb, 1.6, FLOOR_H + 1.75, 0.08);
    }
    inH(H, table(1.2, 0.7, 0.74, M.woodL), 2.6, -2.0, 0.1);
    for (const [dx, dz, c] of [
      [-0.35, -0.1, '#3f5f8f'],
      [0, 0.12, COL.red],
      [0.32, -0.05, COL.gold],
      [0.12, -0.2, '#5f8a52'],
    ] as const)
      inH(
        H,
        at(mesh(new THREE.CylinderGeometry(0.08, 0.09, 0.16, 12), toon(c)), 0, 0.08, 0),
        2.6 + dx,
        -2.0 + dz,
      ).position.y = FLOOR_H + 0.78;
    for (let i = 0; i < 3; i++) {
      const cv = at(
        mesh(new THREE.BoxGeometry(0.8, 0.6, 0.04), toon(pick(['#efe4cc', '#e2d4b6']))),
        0,
        0.3,
        0,
      );
      cv.rotation.x = -0.22;
      inH(H, cv, 3.7 - i * 0.1, 1.4 + i * 0.12, -PI / 2);
    }
    inH(H, plant(1.1), 3.8, 2.8);
    inH(H, plant(0.9), -3.8, 2.9);
    inH(H, bookshelf(1.6), -r.w / 2 + WALL_T / 2 + 0.27, 0.6, PI / 2);
    onWall(H, 'E', hangingBanner(0.9, 1.5), 0.6, top - 0.3, 0.04);
    // the terrace: a raised deck the road runs onto
    const [x0, x1, z0, z1] = r.deck as readonly [number, number, number, number];
    H.g.add(
      at(
        mesh(
          planarUV(new THREE.BoxGeometry(x1 - x0, 0.2, z1 - z0), 2.6),
          toon('#ffffff', { map: TEX.planks }),
        ),
        (x0 + x1) / 2,
        0.1,
        (z0 + z1) / 2,
      ),
    );
    const deckG = at(new THREE.Group(), 0, 0.2, 0);
    H.g.add(deckG);
    fence(
      deckG,
      [
        [x0, z0 + 0.1],
        [x0, z1],
        [-2.0, z1],
      ],
      0.85,
    );
    fence(
      deckG,
      [
        [3.4, z1],
        [x1, z1],
        [x1, z0 + 0.1],
      ],
      0.85,
    );
    put(deckG, easel(), -1.5, 5.3, Math.atan2(-2.4 - -1.5, 6.2 - 5.3));
    put(deckG, bench(1.6, true), 3.0, 4.4, 0);
    put(deckG, plant(1.0), -3.7, 4.0);
    put(deckG, plant(0.8), 3.8, 7.1);
    put(deckG, lampPost(0), -3.9, 7.3);
    put(deckG, at(mesh(new THREE.CylinderGeometry(0.16, 0.14, 0.3, 10), M.wood), 0, 0.15, 0), -3.0, 5.0);
    put(deckG, at(mesh(new THREE.CylinderGeometry(0.14, 0.12, 0.26, 10), M.red), 0, 0.13, 0), -2.7, 4.6);
    // behind: a flower bed
    for (let i = 0; i < 14; i++)
      outH(
        H,
        at(
          mesh(new THREE.SphereGeometry(0.14, 8, 6), toon(pick([COL.red, COL.bone, '#d98a3a', COL.redL]))),
          0,
          0.14,
          0,
        ),
        rr(-3.5, 3.5),
        rr(-5.2, -4.2),
      );
    outH(H, skullPole(2.0), 4.9, -4.6);
  }

  /* ---------------- Workshop (the two devs) */
  const deskF = desk('screen');
  const deskB = desk('screen');
  {
    const r = ROOM.workshop as HouseSpec;
    const H = buildHouse(r, { pitch: 0.6, chimney: [-4.0, -1.6] });
    const top = FLOOR_H + r.wallH;
    inH(H, deskF.g, -3.0, -1.4);
    inH(H, deskB.g, 2.0, -1.4);
    inH(H, crystal(), -5.0, 2.6);
    {
      const sh = new THREE.Group();
      for (const y of [0.9, 1.5]) sh.add(at(mesh(new THREE.BoxGeometry(2.4, 0.06, 0.4), M.wood), 0, y, 0));
      for (const sd of [-1, 1])
        sh.add(at(mesh(new THREE.BoxGeometry(0.06, 1.7, 0.4), M.woodD), sd * 1.2, 0.85, 0));
      for (let i = 0; i < 7; i++)
        sh.add(
          at(
            bottle(pick(['#5fb8c8', '#8fbf5a', '#d98a3a', '#9a7ac8', '#5fe0d0'])),
            -1.0 + i * 0.32,
            0.93 + (i % 2) * 0.6,
            0,
          ),
        );
      sh.add(at(skull(0.14), 0.9, 1.65, 0));
      inH(H, sh, -0.5, -r.d / 2 + WALL_T / 2 + 0.25);
    }
    {
      const wb = table(2.0, 0.8, 0.86, M.woodD);
      wb.add(at(anvil(), 0.4, 0.9, 0));
      wb.add(
        rot(
          at(mesh(new THREE.CylinderGeometry(0.02, 0.02, 0.4, 6), M.wood), -0.5, 0.92, 0.1),
          PI / 2,
          0,
          0.4,
        ),
      );
      inH(H, wb, 3.9, -3.2);
    }
    {
      const stove = new THREE.Group();
      stove.add(at(mesh(new THREE.BoxGeometry(0.9, 0.8, 0.8), M.iron), 0, 0.4, 0));
      stove.add(at(mesh(new THREE.PlaneGeometry(0.4, 0.3), glow('#ff7a2a', 1.8), false), 0, 0.35, 0.41));
      stove.add(at(mesh(new THREE.CylinderGeometry(0.1, 0.1, 2.2, 8), M.iron), 0, 1.9, -0.2));
      inH(H, stove, -5.2, 0.7, PI / 2);
    }
    for (const [x, y, rr0, c] of [
      [4.2, 1.7, 0.4, COL.gold],
      [3.5, 1.35, 0.26, COL.ironL],
    ] as const) {
      const g = new THREE.Group();
      g.add(rot(mesh(new THREE.CylinderGeometry(rr0, rr0, 0.1, 18), toon(c)), PI / 2, 0, 0));
      for (let i = 0; i < 10; i++) {
        const a = (i / 10) * PI * 2;
        g.add(
          at(
            mesh(new THREE.BoxGeometry(0.12, 0.12, 0.1), toon(c)),
            Math.cos(a) * (rr0 + 0.05),
            Math.sin(a) * (rr0 + 0.05),
            0,
          ),
        );
      }
      onWall(H, 'N', g, x, FLOOR_H + y, 0.1);
      SPINNERS.push({ o: g, axis: 'z', v: c === COL.gold ? 0.6 : -0.9 });
    }
    onWall(H, 'W', weaponRack(4), -1.2, FLOOR_H, 0.3);
    onWall(H, 'S', hangingBanner(1.0, 1.7), -2.4, top - 0.3, 0.04);
    onWall(H, 'S', shield(COL.red), 2.6, FLOOR_H + 1.8, 0.1);
    inH(H, barrel(), -5.2, -3.2);
    inH(H, crate(0.6), -4.6, -3.4, 0.3);
    inH(H, crate(0.6), 5.0, 3.2, 0.2);
    inH(H, sack(), 4.3, 3.4);
    // the yard to the south
    patch('dirt', ...W2(r, 0, 6.2), 6.6, 2.8, -r.ry, 0.013);
    outH(H, woodpile(2.6), -2.6, 5.4);
    outH(H, cart(), 2.6, 6.2, 0.4);
    {
      const blk = new THREE.Group();
      blk.add(at(mesh(new THREE.CylinderGeometry(0.4, 0.45, 0.6, 12), M.woodL), 0, 0.3, 0));
      blk.add(rot(at(mesh(new THREE.CylinderGeometry(0.03, 0.03, 0.7, 6), M.woodD), 0.1, 0.8, 0), 0, 0, 0.5));
      blk.add(rot(at(mesh(new THREE.BoxGeometry(0.26, 0.18, 0.04), M.ironL), -0.08, 1.1, 0), 0, 0, 0.5));
      outH(H, blk, -5.0, 5.6);
    }
    outH(H, barrel(), 5.2, 5.0);
    outH(H, barrel(0.85), 5.8, 5.6);
    outH(H, skullPole(2.4), -6.6, 6.8);
    outH(H, brazier(0, 0.9), 7.4, -1.4);
  }

  /* ---------------- Tavern */
  let hearthLight: THREE.PointLight;
  {
    const r = ROOM.tavern as HouseSpec;
    const H = buildHouse(r, { pitch: 0.6, chimney: [-1.5, -3.1], stairHole: [-5.34, -4.44, -2.8, -0.5] });
    const top = FLOOR_H + r.wallH;
    {
      const bar = new THREE.Group();
      bar.add(at(mesh(new THREE.BoxGeometry(0.9, 1.1, 5.0), M.wood), 0, 0.55, 0));
      bar.add(at(mesh(new THREE.BoxGeometry(1.1, 0.08, 5.2), M.woodL), 0, 1.14, 0));
      for (let i = 0; i < 5; i++)
        bar.add(at(mesh(new THREE.BoxGeometry(0.02, 0.9, 0.9), M.woodD), -0.46, 0.5, -2 + i));
      for (let i = 0; i < 6; i++)
        bar.add(
          at(bottle(pick(['#4f7a4a', '#8a2a24', '#b08a3e', '#3f5f8f'])), rr(-0.2, 0.2), 1.18, -2.2 + i * 0.8),
        );
      bar.add(at(skull(0.2), 0, 1.3, 2.3));
      inH(H, bar, 4.1, -0.6);
      const shelf = new THREE.Group();
      for (const y of [1.5, 2.0]) shelf.add(at(mesh(new THREE.BoxGeometry(0.3, 0.05, 4.0), M.wood), 0, y, 0));
      for (let i = 0; i < 10; i++)
        shelf.add(
          at(
            bottle(pick(['#4f7a4a', '#8a2a24', '#b08a3e', '#3f5f8f', '#5fb8c8'])),
            0,
            i % 2 ? 2.03 : 1.53,
            -1.8 + i * 0.4,
          ),
        );
      inH(H, shelf, 5.12, -0.6);
      inH(H, barrel(0.9, true), 4.85, 2.6, PI / 2);
      inH(H, barrel(0.9, true), 4.85, 3.4, PI / 2);
    }
    {
      const hearth = new THREE.Group();
      hearth.add(at(mesh(planarUV(new THREE.BoxGeometry(2.6, 2.0, 0.9), 1.4), M.stone), 0, 1.0, 0));
      hearth.add(at(mesh(new THREE.BoxGeometry(2.9, 0.18, 1.1), M.wood), 0, 2.05, 0.05));
      hearth.add(at(mesh(new THREE.PlaneGeometry(1.2, 0.8), glow('#ff7a2a', 2.0), false), 0, 0.55, 0.46));
      hearth.add(at(cauldron(), 0, 0.0, 0.85));
      hearth.add(at(skull(0.22), 0, 2.32, 0.1));
      hearthLight = new THREE.PointLight('#ff9a4a', 12, 9, 2);
      hearthLight.position.set(0, 0.9, 1.2);
      hearth.add(hearthLight);
      flame(hearth, 0, 0.3, 0.3, 1.4);
      inH(H, hearth, -1.5, -r.d / 2 + WALL_T / 2 + 0.46);
    }
    inH(H, roundTable(), -2.2, 0.8);
    inH(H, stool(), -3.1, 0.8);
    inH(H, stool(), -1.3, 0.8);
    inH(H, roundTable(0.65), 1.0, 2.3);
    inH(H, stool(), 0.1, 2.3);
    inH(H, stool(), 1.9, 2.3);
    inH(H, stool(), 1.0, 3.2);
    for (const [x, z] of [
      [-2.4, 0.6],
      [-1.9, 1.0],
      [1.2, 2.1],
      [0.8, 2.5],
    ] as const)
      inH(H, mug(), x, z).position.y = FLOOR_H + 0.8;
    inH(H, stool(), 3.2, -2.4);
    onWall(H, 'N', trophy(), 2.6, FLOOR_H + 2.1, 0.1);
    onWall(H, 'S', shield(COL.black), -3.0, FLOOR_H + 1.9, 0.1);
    onWall(H, 'S', hangingBanner(0.9, 1.6), 1.6, top - 0.3, 0.04);
    onWall(H, 'W', trophy(), -2.6, FLOOR_H + 2.2, 0.1);
    // the beer garden
    patch('dirt', ...W2(r, -0.5, 6.4), 4.8, 2.6, -r.ry, 0.013);
    outH(H, table(3.6, 0.9, 0.8, M.woodL), 0.4, 6.55);
    outH(H, bench(3.6, false), 0.4, 5.75);
    outH(H, bench(3.6, false), 0.4, 7.35, PI);
    for (const [x, z] of [
      [-0.6, 6.4],
      [0.8, 6.7],
      [1.6, 6.4],
    ] as const)
      outH(H, mug(), x, z).position.y = 0.84;
    fence(
      H.g,
      [
        [-4.6, 6.6],
        [-4.6, 8.6],
        [3.6, 8.6],
        [3.6, 4.3],
      ],
      0.9,
    );
    for (const [x, z] of [
      [-4.6, 8.6],
      [3.6, 8.6],
      [3.6, 4.3],
    ] as const)
      outH(H, at(mesh(new THREE.CylinderGeometry(0.06, 0.08, 2.6, 6), M.woodD), 0, 1.3, 0), x, z);
    lanternString(
      H.g,
      [
        [-4.6, 8.6],
        [3.6, 8.6],
        [3.6, 4.3],
      ],
      2.5,
      0.35,
    );
    outH(H, barrel(), 3.0, 5.2);
    outH(H, barrel(0.8, true), 2.6, 7.9, 0.3);
    outH(H, signPost('TAVERN'), -6.4, 3.6, -PI / 2);
    outH(H, skullPole(2.2), -8.4, 5.6);
    // upstairs: three bed nooks and a hallway
    stairs(H, -4.89, -3.6, -0.6, 0.9);
    railing(
      (H.upper as Upper).U,
      [
        [-4.44, -0.5],
        [-4.44, -2.8],
        [-5.34, -2.8],
      ],
      0.2,
    );
    for (const [x, c] of [
      [-2.6, COL.red],
      [0.8, '#3f5f8f'],
      [4.0, COL.redD],
    ] as const) {
      inU(H, bed(c), x, -2.75);
      inU(H, chest(), x + 0.95, -3.4, PI / 2).scale.setScalar(0.7);
      inU(H, curtain(0.8, 1.6), x - 0.5, -1.35);
      inU(H, candle(0.16), x - 0.62, -3.55);
    }
    for (const x of [-0.9, 2.4]) inU(H, partition(2.5), x, -2.6);
    {
      const runner = mesh(new THREE.PlaneGeometry(8.6, 1.1), toon(COL.redD), false);
      runner.rotation.x = -PI / 2;
      inU(H, runner, 0.4, 0.9).position.y = 0.212;
    }
    inU(H, wardrobe(), 0.8, 3.45, PI);
    inU(H, bench(1.6, true), 2.8, 3.4, PI);
    inU(H, table(0.9, 0.7, 0.8, M.woodL), 4.4, 1.6);
    inU(H, stool(), 4.4, 2.4);
    inU(H, candle(0.16, 0), 4.5, 1.5).position.y = 1.0;
    {
      const basin = new THREE.Group();
      basin.add(at(mesh(new THREE.CylinderGeometry(0.06, 0.12, 0.8, 8), M.woodD), 0, 0.4, 0));
      basin.add(at(mesh(new THREE.CylinderGeometry(0.28, 0.2, 0.14, 14), toon('#b8b0a8')), 0, 0.86, 0));
      basin.add(
        rot(at(mesh(new THREE.CircleGeometry(0.24, 14), toon('#5f8fa8'), false), 0, 0.92, 0), -PI / 2, 0, 0),
      );
      inU(H, basin, -2.2, 3.3);
    }
    inU(H, plant(0.9), -3.6, 3.3);
    onWallU(H, 'S', shield(COL.red), -1.2, 1.7, 0.1);
    onWallU(H, 'E', hangingBanner(0.9, 1.5), 1.6, 2.5, 0.04);
  }

  return {
    HOUSES,
    buildHouse,
    inH,
    outH,
    onWall,
    W2,
    deskF,
    deskB,
    hearthLight,
    drawBoard,
  };
}

export type Houses = ReturnType<typeof createHouses>;
