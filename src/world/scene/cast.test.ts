import * as THREE from 'three';
import { GLTFLoader, type GLTF } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { clone as cloneSkinned } from 'three/examples/jsm/utils/SkeletonUtils.js';
import { beforeAll, describe, expect, it } from 'vitest';
import { FLOOR_H, ROOM, SPOTS, toWorld, type House } from '../map';
import { START } from '../places';
import lead from '../models/lead.glb?url&inline';
import reviewer from '../models/reviewer.glb?url&inline';
import { FIGURES, createCast, groundAt, rigSeatY, type FetchedCast } from './cast';
import type { Kit } from './kit';
import { plainModel } from './models';

/**
 * A character from the bundle, as bytes (a test has no server), without its texture: jsdom loads no images, and
 * GLTFLoader would wait for one forever. Everything else, skin and clips included, is the file's own.
 */
function parse(dataUrl: string): Promise<GLTF> {
  const bytes = Uint8Array.from(atob(dataUrl.slice(dataUrl.indexOf(',') + 1)), (c) => c.charCodeAt(0));
  const jsonLength = new DataView(bytes.buffer).getUint32(12, true);
  const json = JSON.parse(new TextDecoder().decode(bytes.subarray(20, 20 + jsonLength))) as {
    images?: unknown;
    textures?: unknown;
    samplers?: unknown;
    materials?: { pbrMetallicRoughness?: { baseColorTexture?: unknown } }[];
  };
  delete json.images;
  delete json.textures;
  delete json.samplers;
  for (const m of json.materials ?? []) delete m.pbrMetallicRoughness?.baseColorTexture;
  // the JSON chunk padded with spaces to four bytes, as GLB lays it out
  const raw = new TextEncoder().encode(JSON.stringify(json));
  const chunk = new Uint8Array((raw.length + 3) & ~3).fill(0x20);
  chunk.set(raw);
  const bin = bytes.subarray(20 + jsonLength);
  const glb = new Uint8Array(20 + chunk.length + bin.length);
  const view = new DataView(glb.buffer);
  glb.set(bytes.subarray(0, 8)); // glTF, version 2
  view.setUint32(8, glb.length, true);
  view.setUint32(12, chunk.length, true);
  glb.set(bytes.subarray(16, 20), 16); // JSON
  glb.set(chunk, 20);
  glb.set(bin, 20 + chunk.length);
  return new Promise((resolve, reject) =>
    new GLTFLoader().parse(glb.buffer, '', (g) => resolve(plainModel(g)), reject),
  );
}

// the kit's toon material, without the renderer the real kit needs
const kit = {
  toon: (color: string, extra = {}) => new THREE.MeshToonMaterial({ color, ...extra }),
  TEX: { soft: new THREE.Texture() },
} as unknown as Kit;
const flameTex = new THREE.Texture();
const flat = () => 0.02;
const phases = { lead: 0, designer: 1, frontend: 2, backend: 3, reviewer: 4 };

describe("the cast's figures", () => {
  it("are the town's rigs: their heights, hip heights and speeds", () => {
    expect(FIGURES).toEqual({
      lead: { H: 1.32, hipY: 0.6, speed: 2.4 },
      designer: { H: 1.78, hipY: 0.9, speed: 2.35 },
      frontend: { H: 1.92, hipY: 0.98, speed: 2.3 },
      backend: { H: 2.18, hipY: 1.06, speed: 2.25 },
      reviewer: { H: 1.95, hipY: 0.98, speed: 2.1 },
    });
  });

  it("sit, where no seat is found, at the town's rig seat height, never under 0.5 m", () => {
    expect(rigSeatY(1.32, 0.6)).toBe(0.5);
    expect(rigSeatY(1.78, 0.9)).toBe(0.5);
    expect(rigSeatY(1.92, 0.98)).toBeCloseTo(0.51, 6);
    expect(rigSeatY(2.18, 1.06)).toBeCloseTo(0.5554167, 6);
    expect(rigSeatY(1.95, 0.98)).toBeCloseTo(0.510625, 6);
  });
});

describe('the ground under a figure', () => {
  const crossing = { x: 0, z: 40, ang: 0.3, len: 2 };
  const ground = groundAt([crossing]);

  it('is the floor in a house, the terrace on a deck, the dais at the Forge, and grass elsewhere', () => {
    const workshop = ROOM.workshop as House;
    expect(ground(...toWorld(workshop, 0, 0))).toBe(FLOOR_H);
    const studio = ROOM.studio as House;
    const deck = studio.deck as readonly [number, number, number, number];
    expect(ground(...toWorld(studio, (deck[0] + deck[1]) / 2, (deck[2] + deck[3]) / 2))).toBe(0.2);
    expect(ground(ROOM.forge.x + 3, ROOM.forge.z)).toBe(0.16);
    expect(ground(-40, 30)).toBe(0.02);
  });

  it("rises over a footbridge's arch, highest in its middle", () => {
    expect(ground(0, 40)).toBeCloseTo(0.44, 6);
    expect(ground(0.8 * Math.cos(0.3), 40 - 0.8 * Math.sin(0.3))).toBeLessThan(0.44);
  });
});

describe('the cast in a scene', () => {
  let lead0: GLTF;
  let reviewer0: GLTF;
  beforeAll(async () => {
    [lead0, reviewer0] = await Promise.all([parse(lead), parse(reviewer)]);
  });
  // each build gets models of its own, as the page's one build does: the lead's model stands in for the three figures
  // not loaded here, each a copy with its own skeleton
  const own = (g: GLTF): GLTF => ({ ...g, scene: cloneSkinned(g.scene) as THREE.Group });
  const build = (reducedMotion: boolean, scene = new THREE.Scene()) => {
    const fetched = {
      lead: own(lead0),
      designer: own(lead0),
      frontend: own(lead0),
      backend: own(lead0),
      reviewer: own(reviewer0),
    } as FetchedCast;
    return {
      scene,
      cast: createCast(kit, scene, fetched, { reducedMotion, phases, start: START, groundY: flat, flameTex }),
    };
  };

  it('stands each figure on its start spot, facing its way, sized to its height', () => {
    const { scene, cast } = build(true);
    expect(scene.children).toHaveLength(5);
    const a = cast.actors.lead;
    const sp = SPOTS[START.lead];
    expect([a.root.position.x, a.root.position.y, a.root.position.z]).toEqual([sp.x, 0.02, sp.z]);
    expect(a.root.rotation.y).toBe(sp.ry);
    expect(a.root.userData.agentId).toBe('lead');
    const box = new THREE.Box3().setFromObject(a.model.obj);
    expect(box.max.y - box.min.y).toBeCloseTo(1.32, 2);
  });

  it('gives every mesh the toon material, its shadows, no culling, and no raycast', () => {
    const { scene, cast } = build(true);
    // a ray straight down through the figure's hips, which would land on its body
    scene.updateMatrixWorld(true);
    const hips = cast.actors.reviewer.model.hips.getWorldPosition(new THREE.Vector3());
    const down = new THREE.Raycaster(new THREE.Vector3(hips.x, 5, hips.z), new THREE.Vector3(0, -1, 0));
    expect(down.intersectObject(cast.actors.reviewer.root, true)).toEqual([]);
    cast.actors.reviewer.model.obj.traverse((o) => {
      if (!(o instanceof THREE.Mesh)) return;
      expect(o.material).toBeInstanceOf(THREE.MeshToonMaterial);
      expect([o.castShadow, o.receiveShadow, o.frustumCulled]).toEqual([true, true, false]);
    });
  });

  it("hangs the town's one carried light, the Reviewer's lantern, from its root by the head, as the town does", () => {
    const { scene, cast } = build(true);
    const lights: THREE.Light[] = [];
    scene.traverse((o) => {
      if (o instanceof THREE.Light) lights.push(o);
    });
    expect(lights).toHaveLength(1);
    const lantern = cast.actors.reviewer.lantern as THREE.PointLight;
    expect(lights[0]).toBe(lantern);
    expect(lantern.parent).toBe(cast.actors.reviewer.root);
    expect(lantern.position.toArray()).toEqual([-0.18, 2.2, 0.35]);
    expect([lantern.color.getHexString(), lantern.intensity, lantern.distance, lantern.decay]).toEqual([
      '6dffa0',
      2.5,
      4,
      2,
    ]);
  });

  it("shows the lantern in the right hand: the town's green flame and its halo, sized in metres (Dima, 18 Nov)", () => {
    const { scene, cast } = build(true);
    const lamp = cast.actors.reviewer.lamp;
    expect(lamp?.group.parent?.name).toBe('mixamorigRightHand');
    const [flame, halo] = (lamp?.flicker.children ?? []) as THREE.Sprite[];
    expect((flame?.material as THREE.SpriteMaterial).map).toBe(flameTex);
    expect((flame?.material as THREE.SpriteMaterial).color.toArray()).toEqual([0.6, 2.4, 1.2]);
    expect((halo?.material as THREE.SpriteMaterial).blending).toBe(THREE.AdditiveBlending);
    // the town's sizes in the world, whatever scale the bones carry. To 5 places, not 6: the counter-scale is measured in
    // the rest pose, and each clip then starts at a random time, whose float32 pose moves the hand's scale by about a
    // millionth (a run on 18 Nov missed 6 places by 5.5e-7)
    scene.updateMatrixWorld(true);
    const size = flame?.getWorldScale(new THREE.Vector3());
    expect(size?.x).toBeCloseTo(0.16, 5);
    expect(size?.y).toBeCloseTo(0.3, 5);
    // the halo a quarter metre, not the town's 0.7: by the lap it washed the robe green (Dima, 18 Nov)
    expect(halo?.getWorldScale(new THREE.Vector3()).x).toBeCloseTo(0.25, 5);
    // only the Reviewer carries one
    expect(cast.actors.lead.lamp).toBeNull();
  });

  it('plays the clip for each pose, switching at once with reduced motion', () => {
    const { cast } = build(true);
    const a = cast.actors.designer;
    for (const [mode, clip] of [
      ['type', 'play_mobile_game'],
      ['walk', 'walk'],
      ['drink', 'sit'],
      ['paint', 'idle'],
      ['smash', 'play_mobile_game'],
    ] as const) {
      cast.drive(a, mode, 0.016, null);
      expect(a.model.cur, mode).toBe(clip);
      expect(a.model.acts[clip]?.getEffectiveWeight(), mode).toBe(1);
      for (const other of Object.keys(a.model.acts).filter((k) => k !== clip))
        expect(a.model.acts[other as typeof clip]?.getEffectiveWeight(), `${mode}: ${other}`).toBe(0);
    }
  });

  it('crossfades over 0.3 s without reduced motion', () => {
    const { cast } = build(false);
    const a = cast.actors.frontend;
    cast.drive(a, 'walk', 0.1, null);
    expect(a.model.cur).toBe('walk');
    expect(a.model.acts.walk?.getEffectiveWeight()).toBeGreaterThan(0);
    expect(a.model.acts.walk?.getEffectiveWeight()).toBeLessThan(1);
  });

  it('seats a figure with its hips 5.5% of its height above the seat, its ankles at their standing height', () => {
    const scene = new THREE.Scene();
    const sp = SPOTS['court-bench'];
    // a seat 0.45 m high, wide enough for every ray around the hips
    const seat = new THREE.Mesh(new THREE.BoxGeometry(1.2, 0.45, 1.2), new THREE.MeshBasicMaterial());
    seat.position.set(sp.x, 0.02 + 0.225, sp.z);
    scene.add(seat);
    const { cast } = build(true, scene);
    const a = cast.actors.backend;
    a.root.position.set(sp.x, 0.02, sp.z);
    a.root.rotation.y = sp.ry;
    // as after a rendered frame: the seat's raycast reads world matrices
    scene.updateMatrixWorld(true);
    cast.drive(a, 'sit', 0.016, 'court-bench');
    scene.updateMatrixWorld(true);
    const hips = a.model.hips.getWorldPosition(new THREE.Vector3());
    expect(hips.y - (0.02 + 0.45)).toBeCloseTo(0.055 * 2.18, 3);
    // over the spot: the seated clip sits forward of its seat, and the model is moved back over its middle
    expect(Math.hypot(hips.x - sp.x, hips.z - sp.z)).toBeLessThan(0.001);
    const legs = a.model.legs ?? [];
    expect(legs).toHaveLength(2);
    for (const L of legs) {
      const ankle = L.foot.getWorldPosition(new THREE.Vector3()).y - 0.02;
      expect(ankle).toBeCloseTo(a.model.ankleH, 3);
    }
  });

  it('walks at its speed: 0.59 body heights a second at 1x, between 0.8x and 2.6x', () => {
    const { cast } = build(true);
    expect(cast.actors.lead.model.acts.walk?.timeScale).toBe(2.6); // 2.4 / (0.59 * 1.32) is over the cap
    expect(cast.actors.backend.model.acts.walk?.timeScale).toBeCloseTo(2.25 / (0.59 * 2.18), 6);
  });

  it("paces the walk clip with the walk: the hurry speeds it up, as far as the town's 2.6x (Dima, 18 Nov)", () => {
    const { cast } = build(true);
    const a = cast.actors.backend;
    const own = 2.25 / (0.59 * 2.18);
    cast.drive(a, 'walk', 0.016, null, 1.2);
    expect(a.model.acts.walk?.timeScale).toBeCloseTo(own * 1.2, 6);
    cast.drive(a, 'walk', 0.016, null, 2.5);
    expect(a.model.acts.walk?.timeScale).toBe(2.6);
    cast.drive(a, 'walk', 0.016, null);
    expect(a.model.acts.walk?.timeScale).toBeCloseTo(own, 6);
  });

  it('measures the seat only once the seated clip has faded in, so the hips are over the seat', () => {
    const scene = new THREE.Scene();
    const sp = SPOTS['court-bench'];
    const seat = new THREE.Mesh(new THREE.BoxGeometry(1.2, 0.45, 1.2), new THREE.MeshBasicMaterial());
    seat.position.set(sp.x, 0.02 + 0.225, sp.z);
    scene.add(seat);
    const { cast } = build(false, scene);
    const a = cast.actors.backend;
    a.root.position.set(sp.x, 0.02, sp.z);
    scene.updateMatrixWorld(true);
    cast.drive(a, 'sit', 0.05, 'court-bench');
    expect(a.model.bent).toBe(false);
    for (let i = 0; i < 10; i++) cast.drive(a, 'sit', 0.05, 'court-bench');
    expect(a.model.bent).toBe(true);
  });

  it('falls back to the rig seat height where no seat is found, sinking the feet 0.22 m at most', () => {
    const { cast } = build(true);
    const a = cast.actors.backend;
    cast.drive(a, 'sit', 0.016, 'court-bench');
    const want =
      a.model.baseY + Math.max(-0.22, Math.min(0, a.seatY - a.model.baseY - (a.model.seat.sit ?? 0)));
    expect(a.model.obj.position.y).toBeCloseTo(want, 6);
    expect(a.model.bent).toBe(false);
    // no model's clip sits that high (the lowest needs 0.18 m); a clip with its hips 1 m up sinks the feet no further
    (a.model.seat as { sit?: number }).sit = 1;
    cast.drive(a, 'sit', 0.016, 'court-bench');
    expect(a.model.obj.position.y).toBeCloseTo(a.model.baseY - 0.22, 6);
  });

  it("lights the Reviewer's lantern only while it stands and isn't reading, and leaves it lit with reduced motion", () => {
    const moving = build(false).cast;
    const r = moving.actors.reviewer;
    moving.lanternFor(r, 'idle', 1);
    expect(r.lantern?.intensity).toBeGreaterThan(0);
    // the flame you see shows with the light, flickering as the town's did
    expect(r.lamp?.group.visible).toBe(true);
    expect(r.lamp?.flicker.scale.y).not.toBe(1);
    for (const mode of ['read', 'readsit', 'sit', 'type'] as const) {
      moving.lanternFor(r, mode, 1);
      expect(r.lantern?.intensity, mode).toBe(0);
      expect(r.lamp?.group.visible, mode).toBe(false);
    }
    const still = build(true).cast;
    still.lanternFor(still.actors.reviewer, 'readsit', 1);
    expect(still.actors.reviewer.lantern?.intensity).toBe(2.5);
    expect(still.actors.reviewer.lamp?.group.visible).toBe(true);
  });
});
