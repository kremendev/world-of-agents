/**
 * The cast (v4.0.0, 4b): the five Tripo characters in the Forge Keep. Ported from `town/src/m6b-glb.js`, with the
 * heights and seat heights of `m6-cast.js`'s rigs and `groundY()` from `m7-run.js` (forge-keep, 89ae8b1), on the path
 * where every model is there. The town hangs each model under an invisible hand-built figure that walks the paths and
 * takes the clicks; here a plain group stands in its place, since no hand-built figure is ever shown (docs/v4.0-plan.md,
 * "One path, no stand-ins"). The one thing the figure carried that the scene sees is the Reviewer's lantern light. The
 * town means to move a figure's lights to its model's hand, but it looks for them under the figure's body, and the
 * lantern light hangs from its root, so in the town it stays there, 2.2 m up (Checked, 4b step 2), and it does here.
 * The lantern itself shows in the model's right hand: the town's own green flame and halo, from the hand-built figure's
 * staff, which the town hides with that figure; lit when the light is (Dima, 18 Nov: a light in the hand blew the robe
 * out green, centimetres from it).
 */
import * as THREE from 'three';
import { GLTFLoader, type GLTF } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { FLOOR_H, ROOM, ROOMS, toLocal, type House, type SpotId, SPOTS } from '../map';
import { CLIP_FOR, type ClipName, type Mode } from '../clips';
import type { Kit } from './kit';
import type { Crossing } from './land';
import { CAST_FILES, modelUrl, plainModel, textureUrl } from './models';

export type AgentKey = (typeof CAST_FILES)[number];

/**
 * Each figure as the town's rig makes it: its height (the model is scaled to it), its hip height (which sets the seat
 * height the old rule falls back to), and its walking speed in metres a second.
 */
export const FIGURES: Readonly<Record<AgentKey, { H: number; hipY: number; speed: number }>> = {
  lead: { H: 1.32, hipY: 0.6, speed: 2.4 },
  designer: { H: 1.78, hipY: 0.9, speed: 2.35 },
  frontend: { H: 1.92, hipY: 0.98, speed: 2.3 },
  backend: { H: 2.18, hipY: 1.06, speed: 2.25 },
  reviewer: { H: 1.95, hipY: 0.98, speed: 2.1 },
};

/** The rig's seat height: where its hips go on a chair (`rig()` in m6-cast.js). */
export function rigSeatY(H: number, hipY: number): number {
  const ankle = (0.075 * H) / 1.8;
  const shin = (hipY - ankle) * 0.5;
  return Math.max(0.5, shin + ankle - 0.02);
}

// which clip each pose plays: ../clips.ts, which the idle schedule reads too
export type { ClipName, Mode } from '../clips';
/** The Reviewer's lantern light, as the town makes it: green, 2.5 at 4 m, on the root by the head. */
const LANTERN = { intensity: 2.5, distance: 4 } as const;
/** The poses of a seated figure; the Reviewer's lantern is out only when it stands and isn't reading. */
export const SEATED: ReadonlySet<Mode> = new Set(['type', 'smash', 'readsit', 'sit', 'drink']);
// the walk clips cover 0.59 body heights a second at 1x (4 steps in 2.33 s, measured from the files)
const WALK_RATE = 0.59;

export type FetchedCast = Readonly<Record<AgentKey, GLTF>>;

/**
 * A loader for one character: its own URL as the bundle gives it, and its texture through the bundle's own table
 * (textureUrl()), whatever name the file gives; a name not in it throws.
 */
function castLoader(id: AgentKey): GLTFLoader {
  const own = modelUrl(id);
  const manager = new THREE.LoadingManager();
  manager.setURLModifier((url) => (url === own ? url : textureUrl(url.slice(url.lastIndexOf('/') + 1))));
  return new GLTFLoader(manager);
}

/**
 * The five characters, fetched at once from the bundle and unpacked. A texture that didn't load leaves its material
 * without a map, and GLTFLoader only warns, so that fails here: a model that fails to load shows the 2D hall.
 */
export async function fetchCast(): Promise<FetchedCast> {
  const loaded = await Promise.all(
    CAST_FILES.map((id) => castLoader(id).loadAsync(modelUrl(id)).then(plainModel)),
  );
  loaded.forEach((g, i) => {
    g.scene.traverse((o) => {
      if (o instanceof THREE.Mesh && !(o.material as THREE.MeshStandardMaterial).map) {
        throw new Error(`the ${CAST_FILES[i]} model's texture did not load`);
      }
    });
  });
  return Object.fromEntries(CAST_FILES.map((id, i) => [id, loaded[i] as GLTF])) as FetchedCast;
}

/** Where the ground is under a point: a house's floor, a terrace, the Forge's dais, a footbridge's arch, or grass. */
export function groundAt(crossings: readonly Crossing[]): (x: number, z: number) => number {
  const houses = ROOMS.filter((r): r is House => r.kind === 'house');
  const forge = ROOM.forge;
  return (x, z) => {
    for (const r of houses) {
      const [lx, lz] = toLocal(r, x, z);
      if (Math.abs(lx) < r.w / 2 + 0.1 && Math.abs(lz) < r.d / 2 + 0.1) return FLOOR_H;
      if (r.deck && lx > r.deck[0] && lx < r.deck[1] && lz > r.deck[2] && lz < r.deck[3]) return 0.2;
    }
    if (Math.hypot(x - forge.x, z - forge.z) < 7.8) return 0.16;
    for (const c of crossings) {
      const dx = x - c.x;
      const dz = z - c.z;
      const half = (c.len + 0.6) / 2;
      const lx = dx * Math.cos(c.ang) - dz * Math.sin(c.ang);
      const lz = dx * Math.sin(c.ang) + dz * Math.cos(c.ang);
      // the deck's arch, as built in Blender
      if (Math.abs(lx) < half && Math.abs(lz) < 0.6) return 0.12 + 0.32 * (1 - (lx / half) ** 2);
    }
    return 0.02;
  };
}

type Leg = {
  up: THREE.Bone;
  low: THREE.Bone;
  foot: THREE.Bone;
  saved: [THREE.Quaternion, THREE.Quaternion, THREE.Quaternion];
};

/** A character in the keep: its root (feet on the ground, facing +z) and the model under it. */
export type Actor = {
  readonly id: AgentKey;
  readonly root: THREE.Group;
  readonly H: number;
  readonly seatY: number;
  readonly phase: number;
  readonly model: {
    readonly obj: THREE.Group;
    readonly mixer: THREE.AnimationMixer;
    readonly acts: Readonly<Partial<Record<ClipName, THREE.AnimationAction>>>;
    cur: ClipName;
    readonly baseY: number;
    /** The walk clip's pace at the figure's own speed (the town's: its speed over 0.59 heights a second, 0.8x to 2.6x). */
    readonly walkScale: number;
    /** Where the hips sit in each seated clip, so a seated model lines up with the town's chairs. */
    readonly seat: Readonly<Partial<Record<ClipName, number>>>;
    readonly hips: THREE.Object3D;
    readonly legs: readonly Leg[] | null;
    readonly ankleH: number;
    bent: boolean;
    ikW: number;
  };
  /** The Reviewer's lantern light, on its root by the head, as in the town. */
  readonly lantern: THREE.PointLight | null;
  /** The lantern you see, in the model's right hand: the town's flame and halo, flickering in `flicker`. */
  readonly lamp: { readonly group: THREE.Group; readonly flicker: THREE.Group } | null;
};

/* ---------- seating. The seated clips were made for a taller chair than the town's, so on its own a clip either floats
   the hips over the seat or sinks the feet into the floor. Instead, the hips are put on the seat (a hip joint sits
   about 5.5% of the body's height above it) and each leg is bent, with two-bone IK, so its ankle stands at the height
   it has on the ground; a leg too short for that dangles, as a goblin's does on a tavern stool. */
const SEAT_CLEAR = 0.055;
const _ikA = new THREE.Vector3();
const _ikH = new THREE.Vector3();
const _ikK = new THREE.Vector3();
const _ikT = new THREE.Vector3();
const _ikU = new THREE.Vector3();
const _ikP = new THREE.Vector3();
const _ikK2 = new THREE.Vector3();
const _ikQ = new THREE.Quaternion();
const _ikW = new THREE.Quaternion();
const _ikF = new THREE.Quaternion();
const _ikFoot = new THREE.Quaternion();
const _ikR = new THREE.Raycaster();

// turn a bone so that the world direction `from` (of its child) becomes `to`
function turnBone(b: THREE.Object3D, from: THREE.Vector3, to: THREE.Vector3) {
  _ikQ.setFromUnitVectors(from, to);
  b.getWorldQuaternion(_ikW);
  (b.parent as THREE.Object3D).getWorldQuaternion(_ikF).invert();
  b.quaternion.copy(_ikF.multiply(_ikQ).multiply(_ikW));
  b.updateMatrixWorld(true);
}

function legIK(L: Leg, groundAtY: number, ankleH: number, w: number) {
  const H = L.up.getWorldPosition(_ikH);
  const K = L.low.getWorldPosition(_ikK);
  const A = L.foot.getWorldPosition(_ikA);
  L.foot.getWorldQuaternion(_ikFoot);
  const a = H.distanceTo(K);
  const b = K.distanceTo(A);
  // the ankle where the clip has it across the floor, at the height it stands at; out of reach, the leg hangs towards it
  const dir = _ikU.set(A.x, groundAtY + ankleH, A.z).sub(H);
  const d = THREE.MathUtils.clamp(dir.length(), Math.abs(a - b) + 1e-4, a + b - 1e-4);
  dir.normalize();
  // the knee stays on the side the clip bends it to
  const perp = _ikP.subVectors(K, H);
  perp.addScaledVector(dir, -perp.dot(dir));
  if (perp.lengthSq() < 1e-10) return;
  perp.normalize();
  const cosA = THREE.MathUtils.clamp((a * a + d * d - b * b) / (2 * a * d), -1, 1);
  const K2 = _ikK2
    .copy(H)
    .addScaledVector(dir, a * cosA)
    .addScaledVector(perp, a * Math.sqrt(1 - cosA * cosA));
  const T = _ikT.copy(H).addScaledVector(dir, d);
  turnBone(L.up, _ikP.subVectors(K, H).normalize(), _ikU.subVectors(K2, H).normalize());
  const K3 = L.low.getWorldPosition(_ikK);
  const A3 = L.foot.getWorldPosition(_ikA);
  turnBone(L.low, _ikP.subVectors(A3, K3).normalize(), _ikU.subVectors(T, K3).normalize());
  // the foot keeps the turn the clip gave it
  (L.foot.parent as THREE.Object3D).getWorldQuaternion(_ikF).invert();
  L.foot.quaternion.copy(_ikF.multiply(_ikFoot));
  // eased in: part of the way from the clip's legs to these
  if (w < 1) {
    L.up.quaternion.slerpQuaternions(L.saved[0], L.up.quaternion, w);
    L.low.quaternion.slerpQuaternions(L.saved[1], L.low.quaternion, w);
    L.foot.quaternion.slerpQuaternions(L.saved[2], L.foot.quaternion, w);
  }
  L.up.updateMatrixWorld(true);
}

export type CastOptions = {
  readonly reducedMotion: boolean;
  readonly phases: Readonly<Record<AgentKey, number>>;
  /** Where each figure stands when the keep is built. */
  readonly start: Readonly<Record<AgentKey, SpotId>>;
  readonly groundY: (x: number, z: number) => number;
  /** The props' painted flame (the town's TEX.flame), for the Reviewer's lantern. */
  readonly flameTex: THREE.Texture;
};

/**
 * The cast, built where the town builds its agents (after the scatter, before the bake), each root added to the scene
 * in the town's order and its model under it at once, since every model is already here.
 */
export function createCast(kit: Kit, scene: THREE.Scene, fetched: FetchedCast, o: CastOptions) {
  const { toon } = kit;
  const REDUCE = o.reducedMotion;
  const actors = {} as Record<AgentKey, Actor>;
  for (const id of CAST_FILES) {
    const root = new THREE.Group();
    root.userData.agentId = id;
    scene.add(root);
    const sp = SPOTS[o.start[id]];
    root.position.set(sp.x, o.groundY(sp.x, sp.z), sp.z);
    root.rotation.y = sp.ry;
    const { H, hipY, speed } = FIGURES[id];

    const g = fetched[id];
    const m = g.scene;
    m.updateMatrixWorld(true);
    const box = new THREE.Box3().setFromObject(m);
    const s = H / Math.max(0.01, box.max.y - box.min.y);
    m.scale.setScalar(s);
    const baseY = -box.min.y * s;
    m.position.y = baseY;
    const mats = new Map<THREE.Material, THREE.MeshToonMaterial>();
    m.traverse((ob) => {
      if (!(ob instanceof THREE.Mesh)) return;
      const src = ob.material as THREE.MeshStandardMaterial;
      let mat = mats.get(src);
      if (!mat) {
        if (src.map) src.map.colorSpace = THREE.SRGBColorSpace;
        mat = toon('#ffffff', { map: src.map ?? null });
        mats.set(src, mat);
      }
      ob.material = mat;
      ob.castShadow = true;
      ob.receiveShadow = true;
      ob.frustumCulled = false; // a skinned body moves away from its rest-pose bounds when it sits
      ob.raycast = () => {}; // nothing picks or seats on a figure
    });
    // the town's Reviewer carries a lantern: its light on the root where the town leaves it, and the flame you see in
    // the model's right hand (Dima, 18 Nov), sized in metres whatever the bones' scale
    let lantern: THREE.PointLight | null = null;
    let lamp: Actor['lamp'] = null;
    if (id === 'reviewer') {
      lantern = new THREE.PointLight('#6dffa0', LANTERN.intensity, LANTERN.distance, 2);
      lantern.position.set(-0.18, 2.2, 0.35);
      root.add(lantern);
      const hand = m.getObjectByName('mixamorigRightHand');
      if (!hand) throw new Error('the reviewer model has no right hand');
      const group = new THREE.Group();
      const flicker = new THREE.Group();
      group.add(flicker);
      const flame = new THREE.Sprite(
        new THREE.SpriteMaterial({
          map: o.flameTex,
          color: new THREE.Color(0.6, 2.4, 1.2),
          transparent: true,
          depthWrite: false,
          toneMapped: false,
        }),
      );
      flame.center.set(0.5, 0.05);
      flame.scale.set(0.16, 0.3, 1);
      flame.position.y = 0.02;
      const halo = new THREE.Sprite(
        new THREE.SpriteMaterial({
          map: kit.TEX.soft,
          color: '#5effa0',
          transparent: true,
          opacity: 0.55,
          depthWrite: false,
          blending: THREE.AdditiveBlending,
        }),
      );
      // a quarter metre, not the town's 0.7, which was for a lantern held up on a staff: by the robe it washed it green
      halo.scale.setScalar(0.25);
      halo.position.y = 0.08;
      // nothing picks or seats on a figure; and a sprite needs a camera on the ray, which the seat finder has none of
      flame.raycast = () => {};
      halo.raycast = () => {};
      flicker.add(flame, halo);
      hand.add(group);
      m.updateMatrixWorld(true);
      group.scale.setScalar(1 / hand.getWorldScale(new THREE.Vector3()).x);
      lamp = { group, flicker };
    }
    const seat: Partial<Record<ClipName, number>> = {};
    for (const clip of g.animations) {
      const hipsTrack = clip.tracks.find((t) => /Hips\.position$/.test(t.name));
      if (hipsTrack) seat[clip.name as ClipName] = (hipsTrack.values[1] as number) * s;
    }
    const mixer = new THREE.AnimationMixer(m);
    const acts: Partial<Record<ClipName, THREE.AnimationAction>> = {};
    for (const clip of g.animations) {
      const a = mixer.clipAction(clip);
      a.enabled = true;
      a.setEffectiveTimeScale(1);
      a.setEffectiveWeight(clip.name === 'idle' ? 1 : 0);
      a.time = Math.random() * clip.duration;
      a.play();
      acts[clip.name as ClipName] = a;
    }
    if (!acts.idle || !acts.walk || !acts.sit || !acts.play_mobile_game) {
      throw new Error(`the ${id} model lacks one of its four clips`);
    }
    const walkScale = Math.min(2.6, Math.max(0.8, speed / (WALK_RATE * H)));
    acts.walk.timeScale = walkScale;
    mixer.update(0);
    // the legs, for seating, and how high an ankle stands when the feet are flat (idle, on the ground)
    const bone = (n: string) => m.getObjectByName('mixamorig' + n) as THREE.Bone | undefined;
    const sides = ['Left', 'Right'].map((side) => ({
      up: bone(side + 'UpLeg'),
      low: bone(side + 'Leg'),
      foot: bone(side + 'Foot'),
    }));
    m.updateMatrixWorld(true);
    const legs = sides.every((L) => L.up && L.low && L.foot)
      ? sides.map((L) => ({
          up: L.up as THREE.Bone,
          low: L.low as THREE.Bone,
          foot: L.foot as THREE.Bone,
          saved: [new THREE.Quaternion(), new THREE.Quaternion(), new THREE.Quaternion()] as Leg['saved'],
        }))
      : null;
    const ankleH = legs ? Math.min(...legs.map((L) => L.foot.getWorldPosition(_ikA).y)) : 0;
    const hips = bone('Hips');
    if (!hips) throw new Error(`the ${id} model has no hips`);
    root.add(m);
    actors[id] = {
      id,
      root,
      H,
      seatY: rigSeatY(H, hipY),
      phase: o.phases[id],
      model: {
        obj: m,
        mixer,
        acts,
        cur: 'idle',
        baseY,
        walkScale,
        seat,
        hips,
        legs,
        ankleH,
        bent: false,
        ikW: 0,
      },
      lantern,
      lamp,
    };
  }

  // "spot|agent" -> the seat's top under that agent's hips, above the ground, measured once
  const SEAT_TOP = new Map<string, number | null>();
  function seatTop(key: string, x: number, z: number, gy: number): number | null {
    const known = SEAT_TOP.get(key);
    if (known !== undefined) return known;
    const tops: number[] = [];
    // where the hips are, and a few rays close around, so the gap between two slats doesn't hide a bench (the highest
    // answer counts: the rays that fall through a gap find a crossbar lower down)
    for (const [dx, dz] of [
      [0, 0],
      [0.05, 0],
      [-0.05, 0],
      [0, 0.05],
      [0, -0.05],
    ] as const) {
      _ikR.set(_ikA.set(x + dx, gy + 1.2, z + dz), _ikU.set(0, -1, 0));
      _ikR.far = 1.3;
      for (const h of _ikR.intersectObjects(scene.children, true)) {
        let mine = false;
        let shown = true;
        for (let q: THREE.Object3D | null = h.object; q; q = q.parent) {
          if (q.userData.agentId) mine = true;
          if (!q.visible) shown = false;
        }
        const y = h.point.y - gy;
        const mesh = h.object as THREE.Mesh;
        if (
          !mine &&
          shown &&
          mesh.isMesh &&
          !(mesh.material as THREE.Material).transparent &&
          y > 0.25 &&
          y < 0.66
        ) {
          tops.push(y);
          break;
        }
      }
    }
    const top = tops.length ? Math.max(...tops) : null;
    SEAT_TOP.set(key, top);
    return top;
  }

  /**
   * One frame of a figure: its clip for `mode`, seated on the seat at `spotId` with its legs bent to the floor. `pace`:
   * how many times its own speed it walks at (2.5 on a hurried walk), which the walk clip follows up to the town's 2.6x
   * (Dima, 18 Nov).
   */
  function drive(a: Actor, mode: Mode, dt: number, spotId: SpotId | null, pace = 1) {
    const M = a.model;
    // put back what last frame's IK turned, so a bone no track moves never keeps it
    if (M.bent && M.legs) {
      for (const L of M.legs) {
        L.up.quaternion.copy(L.saved[0]);
        L.low.quaternion.copy(L.saved[1]);
        L.foot.quaternion.copy(L.saved[2]);
      }
    }
    M.bent = false;
    const asked = CLIP_FOR[mode];
    const want: ClipName = asked && M.acts[asked] ? asked : 'idle';
    if (want !== M.cur) {
      const prev = M.acts[M.cur] as THREE.AnimationAction;
      const next = M.acts[want] as THREE.AnimationAction;
      next.enabled = true;
      next.setEffectiveWeight(1);
      next.time = 0;
      // with reduced motion the mixer's time stands still, and a fade never ends: switch at once
      if (REDUCE) prev.setEffectiveWeight(0);
      else prev.crossFadeTo(next, 0.3, false);
      M.cur = want;
    }
    if (want === 'walk') (M.acts.walk as THREE.AnimationAction).timeScale = Math.min(2.6, M.walkScale * pace);
    M.mixer.update(REDUCE ? 0 : dt);
    const seated = want !== 'walk' && want !== 'idle';
    let top: number | null = null;
    // the ground itself, not the root's height, which eases towards it after a move (a tavern's floor is higher)
    const ground = o.groundY(a.root.position.x, a.root.position.z);
    // measured once the seated clip has faded in, so the hips are over the seat and not where the walk left them
    if (seated && spotId && M.legs && (M.acts[want] as THREE.AnimationAction).getEffectiveWeight() > 0.99) {
      M.obj.updateWorldMatrix(true, true); // from the root down: an agent just moved has a stale root matrix
      const hp = M.hips.getWorldPosition(_ikH);
      top = seatTop(spotId + '|' + a.id, hp.x, hp.z, ground);
    }
    let y = M.baseY;
    let x = 0;
    let z = 0;
    if (top !== null) {
      // the hips on the seat: move the model by what the clip's hips miss by
      y = M.obj.position.y + (ground + top + SEAT_CLEAR * a.H) - _ikH.y;
      // and over its middle (the spot): the seated clips sit 10 to 23 cm forward of their seat, which put chests into desks
      const ry = a.root.rotation.y;
      const cs = Math.cos(ry);
      const sn = Math.sin(ry);
      const wx = a.root.position.x - _ikH.x;
      const wz = a.root.position.z - _ikH.z;
      x = M.obj.position.x + wx * cs - wz * sn;
      z = M.obj.position.z + wx * sn + wz * cs;
    } else if (seated && M.seat[want] !== undefined) {
      // no seat found: the old rule, the hips at the rig's seat height, sinking the feet 0.22 m at most
      y = M.baseY + Math.max(-0.22, Math.min(0, a.seatY - M.baseY - (M.seat[want] as number)));
    }
    const ease = REDUCE ? 1 : Math.min(1, dt * 8);
    M.obj.position.x += (x - M.obj.position.x) * ease;
    M.obj.position.y += (y - M.obj.position.y) * ease;
    M.obj.position.z += (z - M.obj.position.z) * ease;
    M.ikW = top === null ? 0 : Math.min(1, M.ikW + (REDUCE ? 1 : dt / 0.3));
    if (top !== null && M.legs) {
      M.obj.updateWorldMatrix(true, true); // from the root down: an agent just moved has a stale root matrix
      for (const L of M.legs) {
        L.saved[0].copy(L.up.quaternion);
        L.saved[1].copy(L.low.quaternion);
        L.saved[2].copy(L.foot.quaternion);
        legIK(L, ground, M.ankleH, M.ikW);
      }
      M.bent = true;
    }
  }

  /**
   * The Reviewer's lantern, as the town's hand-built figure set it each frame: lit, flickering, while it stands and isn't
   * reading, dark otherwise. With reduced motion the town never touches it, so it stays as made, lit. The flame in the
   * hand shows while the light is lit and flickers with it, as the town's flame did.
   */
  function lanternFor(a: Actor, mode: Mode, t: number) {
    if (!a.lantern || !a.lamp) return;
    if (!REDUCE) {
      const k = 1 + Math.sin(t * 11 + a.phase) * 0.14 + Math.sin(t * 27) * 0.07;
      a.lantern.intensity = !SEATED.has(mode) && mode !== 'read' ? LANTERN.intensity * k : 0;
      a.lamp.flicker.scale.set(1 / Math.sqrt(k), k, 1);
    }
    a.lamp.group.visible = a.lantern.intensity > 0;
  }

  return { actors, drive, lanternFor };
}

export type Cast = ReturnType<typeof createCast>;
