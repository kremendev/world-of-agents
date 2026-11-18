import { describe, expect, it } from 'vitest';
import { AGENT_IDS } from '../events/schema';
import { SPOTS } from './map';
import { START, IDLE_AREAS, isIdleSpot } from './places';

describe('the places', () => {
  it('keeps idle life out of every work room and the Forge (Dima, 17 Nov)', () => {
    for (const room of ['war', 'library', 'studio', 'workshop', 'forge'] as const)
      expect(IDLE_AREAS.has(room), room).toBe(false);
    expect([...IDLE_AREAS].sort()).toEqual(['court', 'garden', 'tavern', 'yard']);
  });

  it('starts every agent in an idle area, each on its own spot', () => {
    expect(Object.keys(START).sort()).toEqual([...AGENT_IDS].sort());
    for (const id of AGENT_IDS) expect(isIdleSpot(START[id]), `${id} at ${START[id]}`).toBe(true);
    expect(new Set(Object.values(START)).size).toBe(AGENT_IDS.length);
  });

  it("tells a work room's spot from an idle one", () => {
    expect(isIdleSpot('desk-frontend')).toBe(false);
    expect(isIdleSpot('forge-anvil')).toBe(false);
    expect(isIdleSpot('lib-chair')).toBe(false);
    expect(isIdleSpot('court-bench')).toBe(true);
    expect(SPOTS['court-bench'].room).toBe('court');
  });
});
