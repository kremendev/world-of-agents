import { describe, expect, it } from 'vitest';
import { furnaceLook } from '../office/hall/draw';
import { FORGE_MOUTH, forgeFlicker, forgeLook } from './forge';

describe("the Forge's furnace (4c.4, D11)", () => {
  it("takes the 2D hall's mouth colours: cold with nobody working, orange with one, bright with two or more", () => {
    expect(forgeLook(0).mouth).toBe(FORGE_MOUTH.cold);
    expect(forgeLook(1).mouth).toBe(FORGE_MOUTH.one);
    for (const n of [2, 3, 4, 5]) expect(forgeLook(n).mouth).toBe(FORGE_MOUTH.busy);
    for (const n of [0, 1, 2, 5]) expect(forgeLook(n).mouth).toBe(furnaceLook(n).fill);
  });

  it('glows hotter with each working agent, up to four', () => {
    const heats = [0, 1, 2, 3, 4, 5].map((n) => forgeLook(n).heat);
    for (let i = 1; i <= 4; i++) expect(heats[i]).toBeGreaterThan(heats[i - 1]!);
    expect(heats[5]).toBe(heats[4]);
    expect(forgeLook(-1)).toEqual(forgeLook(0));
  });

  it('flickers in motion, and not at all with reduced motion; the colour changes either way', () => {
    const times = Array.from({ length: 40 }, (_, i) => i * 0.137);
    expect(times.some((t) => forgeFlicker(t, false) !== 0)).toBe(true);
    for (const t of times) expect(forgeFlicker(t, true)).toBe(0);
    // the look takes no motion setting: reduced motion sees the same colours and heat
    expect(forgeLook(2)).toEqual({ mouth: FORGE_MOUTH.busy, heat: 0.25 + 2 * 0.35 });
  });
});
