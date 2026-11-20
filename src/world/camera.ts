/**
 * The Forge Keep's camera (v4.0.0, 4a): its limits and the way it frames a room, the town's numbers (forge-keep,
 * 89ae8b1) with no three.js, so a test holds every view to the limits. scene/world.ts gives the limits to OrbitControls
 * and uses the rest in clampTarget() and flyToRoom(). Angles are in radians, distances in metres.
 */
import { ROOM, type RoomId } from './map';

export type Vec3 = readonly [number, number, number];

export const CAMERA = {
  fov: 34,
  near: 0.5,
  far: 900,
  /** The overview, where the camera starts. */
  home: { target: [0, 0, 2] as Vec3, position: [46, 70, 96] as Vec3 },
  minDistance: 6,
  maxDistance: 150,
  /** From straight down (0) towards the horizon (pi / 2). */
  minPolarAngle: 0.12,
  maxPolarAngle: 1.3,
  /** The point the camera orbits stays on the island, at ground level. */
  targetRadius: 52,
  targetMinY: 0,
  targetMaxY: 4,
  /** The camera never goes lower. */
  minHeight: 1.2,
} as const;

/**
 * A room as the town frames it: its centre, seen from the side the camera is on (`from`, the camera's offset from the
 * point it orbits, x and z), at a distance from the room's size. From straight above, the town's own side.
 */
export function roomView(id: RoomId, from: readonly [number, number]): { target: Vec3; position: Vec3 } {
  const r = ROOM[id];
  const dist = r.kind === 'house' ? Math.max(r.w, r.d) * 1.15 + 8 : r.r * 1.6 + 7;
  const len = Math.hypot(from[0], from[1]);
  const [dx, dz] = len > 0 ? [from[0] / len, from[1] / len] : [0.45, 0.9];
  return { target: [r.x, 1.0, r.z], position: [r.x + dx * dist, dist * 0.85, r.z + dz * dist] };
}

/** How far the HUD's panels reach into the canvas from each of its edges, in CSS px. */
export type Insets = {
  readonly left: number;
  readonly right: number;
  readonly top: number;
  readonly bottom: number;
};

/**
 * The view offset (three's setViewOffset on a `width` x `height` canvas, in the same px) that puts the point the camera
 * looks at in the middle of the area the panels leave free, not the canvas's (Dima, 20 Nov): Show me, Follow, a room
 * and the whole keep then land where they can be seen. Null for none: no insets, or insets that leave nothing free.
 */
export function viewOffset(
  width: number,
  height: number,
  insets: Insets | null,
): { x: number; y: number } | null {
  if (!insets || width <= 0 || height <= 0) return null;
  const { left, right, top, bottom } = insets;
  if (left + right >= width || top + bottom >= height) return null;
  const x = (right - left) / 2;
  const y = (bottom - top) / 2;
  return x === 0 && y === 0 ? null : { x, y };
}
