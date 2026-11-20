import * as THREE from 'three';
import { describe, expect, it } from 'vitest';
import {
  CAMERA,
  NO_OFFSET,
  OWN_SIDE,
  SLIDE_MS,
  roomView,
  slideOffset,
  viewOffset,
  type Vec3,
} from './camera';
import { ROOMS } from './map';

/** Whether a view is one the camera's controls and clampTarget() leave as it is. */
function withinLimits(target: Vec3, position: Vec3) {
  const [dx, dy, dz] = [position[0] - target[0], position[1] - target[1], position[2] - target[2]];
  const distance = Math.hypot(dx, dy, dz);
  const polar = Math.acos(dy / distance); // from straight down, as OrbitControls measures it
  return {
    distance: distance >= CAMERA.minDistance && distance <= CAMERA.maxDistance,
    polar: polar >= CAMERA.minPolarAngle && polar <= CAMERA.maxPolarAngle,
    target:
      Math.hypot(target[0], target[2]) <= CAMERA.targetRadius &&
      target[1] >= CAMERA.targetMinY &&
      target[1] <= CAMERA.targetMaxY,
    height: position[1] >= CAMERA.minHeight,
  };
}
const ALL = { distance: true, polar: true, target: true, height: true };

// eight sides, and straight above the room, where the town takes a side of its own
const SIDES: readonly (readonly [number, number])[] = [
  ...Array.from({ length: 8 }, (_, i) => [Math.cos((i * Math.PI) / 4), Math.sin((i * Math.PI) / 4)] as const),
  [0, 0],
];

describe('the camera', () => {
  it('starts in the overview within its own limits', () => {
    expect(withinLimits(CAMERA.home.target, CAMERA.home.position)).toEqual(ALL);
  });

  it.each(ROOMS.map((r) => [r.id, r] as const))(
    'frames %s at its centre, from every side, within the limits',
    (id, room) => {
      for (const from of SIDES) {
        const { target, position } = roomView(id, from);
        expect(target).toEqual([room.x, 1, room.z]);
        expect(withinLimits(target, position), `${id} from ${from.join(', ')}`).toEqual(ALL);
      }
    },
  );

  describe('the view offset (Dima, 20 Nov)', () => {
    // where three puts the point the camera looks at, in canvas px, with the offset applied as world.ts applies it
    const whereTargetLands = (width: number, height: number, o: { x: number; y: number } | null) => {
      const camera = new THREE.PerspectiveCamera(CAMERA.fov, width / height, CAMERA.near, CAMERA.far);
      camera.position.set(...CAMERA.home.position);
      camera.lookAt(new THREE.Vector3(...CAMERA.home.target));
      if (o) camera.setViewOffset(width, height, o.x, o.y, width, height);
      camera.updateMatrixWorld();
      const p = new THREE.Vector3(...CAMERA.home.target).project(camera);
      return { x: ((p.x + 1) / 2) * width, y: ((1 - p.y) / 2) * height };
    };

    it("puts the point the camera looks at in the middle of the free area, not the canvas's", () => {
      const insets = { left: 204, right: 400, top: 120, bottom: 76 };
      const o = viewOffset(1440, 900, insets);
      expect(o).toEqual({ x: 98, y: -22 });
      const at = whereTargetLands(1440, 900, o);
      expect(at.x).toBeCloseTo(204 + (1440 - 204 - 400) / 2, 6);
      expect(at.y).toBeCloseTo(120 + (900 - 120 - 76) / 2, 6);
    });

    it('moves it right of the card and left of the drawer as they open', () => {
      const card = viewOffset(1440, 900, { left: 612, right: 0, top: 0, bottom: 0 });
      expect(whereTargetLands(1440, 900, card).x).toBeCloseTo(612 + (1440 - 612) / 2, 6);
      const drawer = viewOffset(1440, 900, { left: 0, right: 400, top: 0, bottom: 0 });
      expect(whereTargetLands(1440, 900, drawer).x).toBeCloseTo((1440 - 400) / 2, 6);
    });

    it('is none without insets, with even ones, or with ones that leave nothing free', () => {
      expect(viewOffset(1440, 900, null)).toBeNull();
      expect(viewOffset(1440, 900, { left: 100, right: 100, top: 50, bottom: 50 })).toBeNull();
      expect(viewOffset(1440, 900, { left: 800, right: 640, top: 0, bottom: 0 })).toBeNull();
      expect(viewOffset(1440, 900, { left: 0, right: 0, top: 500, bottom: 400 })).toBeNull();
      expect(viewOffset(0, 0, { left: 10, right: 0, top: 0, bottom: 0 })).toBeNull();
      const none = whereTargetLands(1440, 900, null);
      expect(none.x).toBeCloseTo(720, 6);
      expect(none.y).toBeCloseTo(450, 6);
    });
  });

  it('frames the Library and the Courtyard from their own side, whatever side the camera is on (Dima, 20 Nov)', () => {
    for (const id of ['library', 'court'] as const) {
      const side = OWN_SIDE[id] as readonly [number, number];
      for (const from of SIDES) {
        const { target, position } = roomView(id, from);
        const [dx, dz] = [position[0] - target[0], position[2] - target[2]];
        expect(Math.atan2(dz, dx), `${id} from ${from.join(', ')}`).toBeCloseTo(
          Math.atan2(side[1], side[0]),
          9,
        );
      }
    }
    expect(Object.keys(OWN_SIDE).sort()).toEqual(['court', 'library']);
  });

  it('keeps the side the camera is on', () => {
    const { target, position } = roomView('forge', [3, 4]);
    const [dx, dz] = [position[0] - target[0], position[2] - target[2]];
    expect(dz / dx).toBeCloseTo(4 / 3);
    expect(dx).toBeGreaterThan(0);
  });
});

describe('the view sliding to a new free area (Dima, 20 Nov)', () => {
  const from = { x: 0, y: -60 };
  const to = { x: 204, y: 12 };
  const at = (ms: number, reduced = false) => slideOffset(from, to, ms, reduced);
  // how far along the way, 0 to 1, on each axis
  const along = (ms: number) => [
    (at(ms).x - from.x) / (to.x - from.x),
    (at(ms).y - from.y) / (to.y - from.y),
  ];

  it('takes about 250 ms, from where it was to the new offset exactly', () => {
    expect(SLIDE_MS).toBe(250);
    expect(at(0)).toEqual(from);
    expect(at(-16)).toEqual(from);
    expect(at(SLIDE_MS)).toBe(to);
    expect(at(SLIDE_MS + 1000)).toBe(to);
    const [x, y] = along(SLIDE_MS - 1);
    expect(x).toBeLessThan(1);
    expect(x).toBeGreaterThan(0.99);
    expect(y).toBeCloseTo(x as number, 12);
  });

  it('eases out: fast at first, settling at the end, never back or past', () => {
    expect(along(125)[0]).toBeCloseTo(0.875, 12);
    let was = 0;
    for (let ms = 5; ms <= SLIDE_MS; ms += 5) {
      const [k] = along(ms) as [number];
      expect(k, `${ms} ms`).toBeGreaterThan(was);
      expect(k, `${ms} ms`).toBeLessThanOrEqual(1);
      // ahead of a steady pace all the way
      if (ms < SLIDE_MS) expect(k, `${ms} ms`).toBeGreaterThan(ms / SLIDE_MS);
      was = k;
    }
    // the first 25 ms cover far more ground than the last 25
    const first = along(25)[0] as number;
    const last = 1 - (along(SLIDE_MS - 25)[0] as number);
    expect(first).toBeGreaterThan(last * 50);
  });

  it('lands at once with reduced motion', () => {
    expect(at(0, true)).toBe(to);
    expect(at(100, true)).toBe(to);
  });

  it('slides from none and back to none', () => {
    expect(slideOffset(NO_OFFSET, to, 125, false)).toEqual({ x: 204 * 0.875, y: 12 * 0.875 });
    expect(slideOffset(to, NO_OFFSET, SLIDE_MS, false)).toBe(NO_OFFSET);
  });
});
