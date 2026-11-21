import * as THREE from 'three';
import { describe, expect, it } from 'vitest';
import { CRANIUM, HORN_RADIUS, HORN_RINGS, HORN_SIDES, hornGeometry, hornTaper, insideCranium } from './horn';

// each ring of the tube: its vertices and its centre
const rings = () => {
  const pos = hornGeometry().attributes.position as THREE.BufferAttribute;
  return Array.from({ length: HORN_RINGS + 1 }, (_, i) => {
    const vs = Array.from({ length: HORN_SIDES + 1 }, (_, j) =>
      new THREE.Vector3().fromBufferAttribute(pos, i * (HORN_SIDES + 1) + j),
    );
    const centre = vs
      .slice(0, HORN_SIDES)
      .reduce((a, v) => a.add(v), new THREE.Vector3())
      .divideScalar(HORN_SIDES);
    const radius = Math.max(...vs.map((v) => v.distanceTo(centre)));
    return { vs, centre, radius };
  });
};

describe("a skull's horn (Dima, 21 Nov)", () => {
  it('grows out of the cranium: its root is inside it, so skull and horn are one piece', () => {
    const [root] = rings();
    for (const v of root!.vs) expect(insideCranium(v), `${v.toArray()}`).toBe(true);
  });

  it('leaves the skull at its temple: on its side and above its middle', () => {
    const out = rings().find((r) => r.vs.every((v) => !insideCranium(v)))!;
    expect(out.centre.x).toBeGreaterThan(CRANIUM.radius * 0.8);
    expect(out.centre.y).toBeGreaterThan(CRANIUM.y);
  });

  it('curves outward and up, never down, to a point well above the skull', () => {
    const all = rings();
    for (let i = 1; i < all.length; i++)
      expect(all[i]!.centre.y, `ring ${i}`).toBeGreaterThan(all[i - 1]!.centre.y);
    const tip = all.at(-1)!;
    // above the top of the cranium by more than its own height
    expect(tip.centre.y).toBeGreaterThan(CRANIUM.y + CRANIUM.radius * CRANIUM.scale[1] * 2);
    // and out past its side
    expect(Math.max(...all.map((r) => r.centre.x))).toBeGreaterThan(CRANIUM.radius * 2.4);
  });

  it('narrows all the way to almost a point', () => {
    const all = rings();
    expect(all[0]!.radius).toBeCloseTo(HORN_RADIUS, 5);
    for (let i = 1; i < all.length; i++) expect(all[i]!.radius).toBeLessThan(all[i - 1]!.radius);
    expect(all.at(-1)!.radius).toBeLessThan(HORN_RADIUS * 0.05);
    expect(hornTaper(0)).toBe(1);
  });
});
