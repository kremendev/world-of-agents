/**
 * A skull's horn (Dima, 21 Nov): the houses' trophies had two loose bone arcs floating over the skull, like eyebrows.
 * Now each horn grows out of the skull's temple, out and up to a point, as the gate's horned skull's do: one tube along
 * a curve, narrowing to its tip, its root inside the cranium so skull and horns are one piece. In the skull's own units
 * (props.ts SKULL, facing +z); the right horn, the left one its mirror.
 */
import * as THREE from 'three';

/** The skull's cranium (props.ts SKULL): a sphere of `radius` at `y`, scaled by `scale`. */
export const CRANIUM = { radius: 0.5, y: 0.14, scale: [1, 0.92, 1.05] } as const;

/** Whether a point (in the skull's units) is inside the cranium. */
export function insideCranium(p: THREE.Vector3): boolean {
  const [sx, sy, sz] = CRANIUM.scale;
  const r = CRANIUM.radius;
  return (p.x / (r * sx)) ** 2 + ((p.y - CRANIUM.y) / (r * sy)) ** 2 + (p.z / (r * sz)) ** 2 < 1;
}

/** The horn's line: from inside the cranium, out of the temple, then up, curling a little back at the tip. */
export const HORN_PATH: readonly (readonly [number, number, number])[] = [
  [0.18, 0.3, 0],
  [0.5, 0.4, 0.04],
  [0.84, 0.52, 0.08],
  [1.14, 0.74, 0.08],
  [1.32, 1.04, 0.05],
  [1.36, 1.38, 0],
  [1.28, 1.66, -0.05],
];

/** Its radius at the root; it narrows to almost nothing at the tip. */
export const HORN_RADIUS = 0.17;
export const HORN_RINGS = 24;
export const HORN_SIDES = 8;

/** How thick the horn is `t` of the way along (0 the root, 1 the tip), as a share of HORN_RADIUS. */
export const hornTaper = (t: number) => 1 - 0.97 * t ** 1.2;

/** The right horn's geometry: a tube along HORN_PATH, each ring narrowed by hornTaper(). */
export function hornGeometry(): THREE.TubeGeometry {
  const path = new THREE.CatmullRomCurve3(HORN_PATH.map(([x, y, z]) => new THREE.Vector3(x, y, z)));
  const geo = new THREE.TubeGeometry(path, HORN_RINGS, HORN_RADIUS, HORN_SIDES, false);
  const pos = geo.attributes.position as THREE.BufferAttribute;
  const centre = new THREE.Vector3();
  const v = new THREE.Vector3();
  for (let i = 0; i <= HORN_RINGS; i++) {
    // TubeGeometry puts ring i at the point i / HORN_RINGS along the path, by length
    path.getPointAt(i / HORN_RINGS, centre);
    const k = hornTaper(i / HORN_RINGS);
    for (let j = 0; j <= HORN_SIDES; j++) {
      const at = i * (HORN_SIDES + 1) + j;
      v.fromBufferAttribute(pos, at).sub(centre).multiplyScalar(k).add(centre);
      pos.setXYZ(at, v.x, v.y, v.z);
    }
  }
  return geo;
}
