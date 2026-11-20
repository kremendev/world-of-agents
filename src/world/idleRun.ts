/**
 * Idle life on the walkers' side (v4.0.0, 4c.2): which idle activity each resting agent is at, and when one moves on.
 * Pure, so Vitest holds it; the world runs it a few times a second and sends the walkers where it says. An agent at
 * rest (idle or done) starts where it stands if that is one of its idle spots, else at its rest spot (where the place
 * map already sends it); an activity's time runs from the moment the agent is there; then it takes its next one,
 * never a spot another agent stands at or is going to. A working agent has no idle activity, so a work event pulls it
 * away at once, from wherever it is, through the place map.
 */
import { AGENT_IDS, type AgentId } from '../events/schema';
import { activityAt, idleActivity, IDLE_SPOTS, type IdleActivity } from './idle';
import type { SpotId } from './map';
import { START } from './places';

/** An agent's idle activity, its number, and when the agent got there (null on the way). */
export type IdleRun = { readonly n: number; readonly act: IdleActivity; readonly since: number | null };
export type IdleRuns = Readonly<Partial<Record<AgentId, IdleRun>>>;

/** Where a figure is: the spot it stands at (or last left), where it walks to, and whether it walks. */
export type Where = { readonly spot: SpotId; readonly to: SpotId | null; readonly walking: boolean };

export function idleTick(
  runs: IdleRuns,
  resting: ReadonlySet<AgentId>,
  where: Readonly<Record<AgentId, Where>>,
  now: number,
  { seed, reducedMotion }: { seed: number; reducedMotion: boolean },
): { runs: IdleRuns; to: Partial<Record<AgentId, SpotId>> } {
  const next: Partial<Record<AgentId, IdleRun>> = {};
  const to: Partial<Record<AgentId, SpotId>> = {};
  // where everyone else is or is going, the runs decided so far in this tick first
  const takenBy = (agent: AgentId) =>
    new Set(
      AGENT_IDS.filter((id) => id !== agent).map(
        (id) => next[id]?.act.spot ?? runs[id]?.act.spot ?? where[id].to ?? where[id].spot,
      ),
    );
  for (const agent of AGENT_IDS) {
    if (!resting.has(agent)) continue;
    const here = where[agent];
    const run = runs[agent];
    if (!run) {
      const ms = idleActivity(agent, 0, { seed, reducedMotion }).ms;
      const standing = !here.walking && IDLE_SPOTS[agent].includes(here.spot);
      next[agent] = standing
        ? { n: 0, act: activityAt(agent, here.spot, ms), since: now }
        : { n: 0, act: activityAt(agent, START[agent], ms), since: null };
      continue;
    }
    const arrived = !here.walking && here.spot === run.act.spot;
    const since = run.since ?? (arrived ? now : null);
    if (since === null || now - since < run.act.ms) {
      next[agent] = since === run.since ? run : { ...run, since };
      continue;
    }
    const act = idleActivity(agent, run.n + 1, {
      seed,
      from: run.act.spot,
      taken: takenBy(agent),
      reducedMotion,
    });
    next[agent] = { n: run.n + 1, act, since: null };
    if (act.spot !== here.spot) to[agent] = act.spot;
  }
  return { runs: next, to };
}
