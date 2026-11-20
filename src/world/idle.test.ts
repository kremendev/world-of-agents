import { describe, expect, it } from 'vitest';
import { AGENT_IDS, type AgentId } from '../events/schema';
import { SPOTS, type SpotId } from './map';
import { IDLE_MS, IDLE_SPOTS, activityAt, idleActivity } from './idle';
import { IDLE_AREAS, START } from './places';

const SEEDS = [1, 7, 42, 1234, 99991];
const each = (fn: (agent: AgentId, seed: number, n: number) => void) => {
  for (const agent of AGENT_IDS) for (const seed of SEEDS) for (let n = 0; n < 60; n++) fn(agent, seed, n);
};

describe('idle life: the schedule (4c.1, D9)', () => {
  it('never puts an idle agent in a work room or at the Forge: every spot is in an idle area, its rest spot first', () => {
    for (const agent of AGENT_IDS) {
      expect(IDLE_SPOTS[agent][0], agent).toBe(START[agent]);
      for (const spot of IDLE_SPOTS[agent]) {
        expect(IDLE_AREAS.has(SPOTS[spot].room), `${agent} at ${spot}`).toBe(true);
        expect(SPOTS[spot].room).not.toBe('forge');
      }
    }
    each((agent, seed, n) => {
      const { spot } = idleActivity(agent, n, { seed });
      expect(IDLE_AREAS.has(SPOTS[spot].room), `${agent} #${n}`).toBe(true);
    });
  });

  it('changes activity every 45 to 90 s, and the Lead pauses 8 to 15 s', () => {
    expect(IDLE_MS.others).toEqual([45_000, 90_000]);
    expect(IDLE_MS.lead).toEqual([8_000, 15_000]);
    each((agent, seed, n) => {
      const { ms } = idleActivity(agent, n, { seed });
      const [lo, hi] = agent === 'lead' ? [8_000, 15_000] : [45_000, 90_000];
      expect(ms).toBeGreaterThanOrEqual(lo);
      expect(ms).toBeLessThanOrEqual(hi);
    });
  });

  it('moves on: never the spot it stands at while another of its own is free', () => {
    each((agent, seed, n) => {
      const from = IDLE_SPOTS[agent][n % IDLE_SPOTS[agent].length]!;
      expect(idleActivity(agent, n, { seed, from }).spot).not.toBe(from);
    });
  });

  it('never takes a spot another agent has while one of its own is free, and falls back to its rest spot', () => {
    each((agent, seed, n) => {
      const others = IDLE_SPOTS[agent].slice(1);
      const taken = new Set<SpotId>(others);
      expect(idleActivity(agent, n, { seed, taken }).spot).toBe(START[agent]);
    });
    // everything taken: the rest spot, whatever
    expect(idleActivity('designer', 3, { seed: 5, taken: new Set(IDLE_SPOTS.designer) }).spot).toBe(
      START.designer,
    );
  });

  it('is the same for the same seed and number, and uses all of its spots over time', () => {
    for (const agent of AGENT_IDS) {
      expect(idleActivity(agent, 5, { seed: 42 })).toEqual(idleActivity(agent, 5, { seed: 42 }));
      const seen = new Set<SpotId>();
      for (let n = 0; n < 60; n++) seen.add(idleActivity(agent, n, { seed: 42 }).spot);
      expect([...seen].sort(), agent).toEqual([...IDLE_SPOTS[agent]].sort());
    }
  });

  it("plays the clips D9 names, with the orcs' props: sparks in the yard, a mug in the Tavern", () => {
    expect(activityAt('frontend', 'yard-1', 1)).toMatchObject({ clip: 'idle', prop: 'sparks' });
    expect(activityAt('backend', 'yard-2', 1)).toMatchObject({ clip: 'idle', prop: 'sparks' });
    expect(activityAt('frontend', 'tavern-1', 1)).toMatchObject({ clip: 'sit', prop: 'mug' });
    expect(activityAt('backend', 'tavern-2', 1)).toMatchObject({ clip: 'sit', prop: 'mug' });
    expect(activityAt('designer', 'garden-easel', 1)).toMatchObject({ clip: 'idle', prop: null });
    expect(activityAt('designer', 'garden-pond', 1)).toMatchObject({ clip: 'idle', prop: null });
    expect(activityAt('reviewer', 'court-bench', 1)).toMatchObject({ clip: 'sit', prop: null });
    expect(activityAt('reviewer', 'tavern-1', 1)).toMatchObject({ clip: 'sit', prop: null });
    // the Lead wanders and stands; no sparks for it in the yard
    for (const spot of IDLE_SPOTS.lead)
      expect(activityAt('lead', spot, 1)).toMatchObject({ clip: 'idle', prop: null });
  });

  it('with reduced motion, each idle agent stands at its one rest spot for good', () => {
    each((agent, seed, n) => {
      const a = idleActivity(agent, n, { seed, reducedMotion: true });
      expect(a.spot).toBe(START[agent]);
      expect(a.ms).toBe(Number.POSITIVE_INFINITY);
    });
  });
});
