import { describe, expect, it } from 'vitest';
import { CAMERA, roomView, type Vec3 } from './camera';
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

  it('keeps the side the camera is on', () => {
    const { target, position } = roomView('forge', [3, 4]);
    const [dx, dz] = [position[0] - target[0], position[2] - target[2]];
    expect(dz / dx).toBeCloseTo(4 / 3);
    expect(dx).toBeGreaterThan(0);
  });
});
