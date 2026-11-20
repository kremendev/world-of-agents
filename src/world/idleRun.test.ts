import { describe, expect, it } from 'vitest';
import { AGENT_IDS, type AgentId } from '../events/schema';
import { activityAt, IDLE_SPOTS } from './idle';
import { idleTick, type IdleRuns, type Where } from './idleRun';
import { SPOTS, type SpotId } from './map';
import { IDLE_AREAS, START, WORK } from './places';

const SEED = 42;
const atRest = (): Record<AgentId, Where> =>
  Object.fromEntries(AGENT_IDS.map((id) => [id, { spot: START[id], to: null, walking: false }])) as Record<
    AgentId,
    Where
  >;
const everyone = new Set<AgentId>(AGENT_IDS);
const tick = (
  runs: IdleRuns,
  where: Record<AgentId, Where>,
  now: number,
  resting = everyone,
  reducedMotion = false,
) => idleTick(runs, resting, where, now, { seed: SEED, reducedMotion });

/** Plays idle life for `ms`, every `step` ms, with every walk landing at once; returns each agent's spots in turn. */
function play(ms: number, step = 250, reducedMotion = false) {
  let runs: IdleRuns = {};
  const where = atRest();
  const visits = Object.fromEntries(AGENT_IDS.map((id) => [id, [START[id]]])) as Record<AgentId, SpotId[]>;
  const changes: { agent: AgentId; at: number }[] = [];
  for (let now = 0; now <= ms; now += step) {
    const t = tick(runs, where, now, everyone, reducedMotion);
    for (const id of AGENT_IDS)
      if ((t.runs[id]?.n ?? 0) > (runs[id]?.n ?? 0)) changes.push({ agent: id, at: now });
    runs = t.runs;
    for (const [agent, spot] of Object.entries(t.to) as [AgentId, SpotId][]) {
      where[agent] = { spot, to: null, walking: false };
      visits[agent].push(spot);
    }
    // never two agents on one spot
    const spots = AGENT_IDS.map((id) => where[id].spot);
    expect(new Set(spots).size, `at ${now}`).toBe(spots.length);
  }
  return { runs, visits, changes };
}

describe('idle life on the walkers (4c.2)', () => {
  it('starts where each agent rests: nobody walks off at once', () => {
    const t = tick({}, atRest(), 0);
    expect(t.to).toEqual({});
    for (const id of AGENT_IDS)
      expect(t.runs[id]).toMatchObject({ n: 0, since: 0, act: { spot: START[id] } });
  });

  it('moves each agent on once its time there is up, to another idle spot, and never two to one spot', () => {
    const { visits, changes } = play(10 * 60_000);
    for (const id of AGENT_IDS) {
      expect(visits[id].length, id).toBeGreaterThan(id === 'lead' ? 20 : 5);
      for (const spot of visits[id]) {
        expect(IDLE_SPOTS[id]).toContain(spot);
        expect(IDLE_AREAS.has(SPOTS[spot].room)).toBe(true);
      }
      for (let i = 1; i < visits[id].length; i++) expect(visits[id][i]).not.toBe(visits[id][i - 1]);
    }
    // each activity lasts 45 to 90 s (the Lead's pause 8 to 15 s), give or take a tick; an agent whose other spots
    // are all taken takes its next one where it is
    for (const id of AGENT_IDS) {
      const at = changes.filter((c) => c.agent === id).map((c) => c.at);
      const [lo, hi] = id === 'lead' ? [8_000, 15_000] : [45_000, 90_000];
      for (let i = 1; i < at.length; i++) {
        const gap = at[i]! - at[i - 1]!;
        expect(gap, id).toBeGreaterThanOrEqual(lo);
        expect(gap, id).toBeLessThanOrEqual(hi + 250);
      }
    }
  });

  it('never sends an agent to a spot another agent is still walking to (T)', () => {
    // the Backend dev's time at the Tavern is up; its other spot, the yard's, is where the Lead is going
    const where = atRest();
    where.lead = { spot: 'garden-pond', to: 'yard-2', walking: true };
    where.backend = { spot: 'tavern-2', to: null, walking: false };
    const runs: IdleRuns = {
      lead: { n: 1, act: activityAt('lead', 'yard-2', 10_000), since: null },
      backend: { n: 0, act: activityAt('backend', 'tavern-2', 45_000), since: 0 },
    };
    expect(IDLE_SPOTS.backend).toEqual(['tavern-2', 'yard-2']);
    const t = tick(runs, where, 100_000, new Set<AgentId>(['lead', 'backend']));
    // it takes its next activity where it is: its other spot is taken
    expect(t.runs.backend).toMatchObject({ n: 1, act: { spot: 'tavern-2' } });
    expect(t.to.backend).toBeUndefined();
  });

  it("counts an activity's time from when the agent gets there, never on the way", () => {
    const where = atRest();
    let { runs } = tick({}, where, 0);
    // the Frontend dev's next activity, long after the first
    const first = tick(runs, where, 200_000);
    runs = first.runs;
    const to = first.to.frontend!;
    expect(to).toBeDefined();
    where.frontend = { spot: START.frontend, to, walking: true };
    // a long walk: no time spent, no new place
    const walking = tick(runs, where, 400_000);
    expect(walking.runs.frontend?.since).toBeNull();
    expect(walking.to.frontend).toBeUndefined();
    where.frontend = { spot: to, to: null, walking: false };
    const there = tick(walking.runs, where, 400_100);
    expect(there.runs.frontend?.since).toBe(400_100);
    expect(tick(there.runs, where, 400_100 + 44_000).to.frontend).toBeUndefined();
  });

  it('a working agent has no idle activity; at rest again it heads for its rest spot first', () => {
    const where = atRest();
    const { runs } = tick({}, where, 0);
    const working = new Set<AgentId>(AGENT_IDS.filter((id) => id !== 'frontend'));
    where.frontend = { spot: WORK.frontend, to: null, walking: false };
    const t = tick(runs, where, 1000, working);
    expect(t.runs.frontend).toBeUndefined();
    const back = tick(t.runs, where, 2000);
    expect(back.runs.frontend).toMatchObject({ act: { spot: START.frontend }, since: null });
    expect(back.to.frontend).toBeUndefined();
  });

  it('with reduced motion, nobody wanders: everyone stays at its rest spot', () => {
    const { visits } = play(10 * 60_000, 1000, true);
    for (const id of AGENT_IDS) expect(visits[id]).toEqual([START[id]]);
  });
});
