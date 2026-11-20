/**
 * Idle life (v4.0.0, 4c.1, D9 in docs/v4-build-plan.md): what an idle agent does, pure and seeded, so Vitest holds it.
 * The four clips there are (walk, idle, sit, play_mobile_game), by place and props: the orcs at the Training yard (the
 * idle clip, sparks now and then) or drinking in the Tavern (sit, a mug); the Designer at the Garden easel or the pond;
 * the Reviewer on the Courtyard bench or in the Tavern by its fire; the Lead wandering the outdoor paths between idle
 * spots, pausing 8 to 15 s. Every other agent changes activity every 45 to 90 s. Never a work room, never the Forge
 * (a walk may cross it): only the idle areas' spots. With reduced motion an idle agent stands at its rest spot.
 */
import type { AgentId } from '../events/schema';
import { clipFor, type ClipName } from './clips';
import { SPOTS, type SpotId } from './map';
import { START } from './places';

/** A prop an activity shows: sparks from the yard's training dummy, a mug in the Tavern. */
export type IdleProp = 'sparks' | 'mug' | null;

/** One idle activity: where, which clip, which prop, and how long it lasts once the agent is there (ms). */
export type IdleActivity = {
  readonly spot: SpotId;
  readonly clip: ClipName;
  readonly prop: IdleProp;
  readonly ms: number;
};

/** Where each agent may idle, its rest spot first: the keep's idle spots, shared where D9's places meet. */
export const IDLE_SPOTS: Readonly<Record<AgentId, readonly SpotId[]>> = {
  lead: ['garden-pond', 'court-well', 'yard-2'],
  designer: ['garden-easel', 'garden-pond'],
  frontend: ['yard-1', 'tavern-1', 'tavern-3'],
  backend: ['tavern-2', 'yard-2', 'tavern-3'],
  reviewer: ['court-bench', 'tavern-1'],
};

/** How long an activity lasts once its agent is there, in ms: the Lead's pauses, everyone else's activities. */
export const IDLE_MS: Readonly<Record<'lead' | 'others', readonly [number, number]>> = {
  lead: [8_000, 15_000],
  others: [45_000, 90_000],
};

const ORCS: ReadonlySet<AgentId> = new Set(['frontend', 'backend']);

/** What an agent does at a spot: the spot's own clip, and the orcs' props (sparks in the yard, a mug in the Tavern). */
export function activityAt(agent: AgentId, spot: SpotId, ms: number): IdleActivity {
  const { room, pose } = SPOTS[spot];
  const prop: IdleProp = !ORCS.has(agent)
    ? null
    : room === 'yard'
      ? 'sparks'
      : pose === 'drink'
        ? 'mug'
        : null;
  return { spot, clip: clipFor(pose), prop, ms };
}

/** A small seeded generator (mulberry32), from the seed, the agent and the activity's number. */
function random(seed: number, agent: AgentId, n: number): () => number {
  let h = (seed ^ Math.imul(n + 1, 0x9e3779b1)) >>> 0;
  for (const ch of agent) h = Math.imul(h ^ ch.charCodeAt(0), 0x85ebca6b) >>> 0;
  return () => {
    h = (h + 0x6d2b79f5) >>> 0;
    let t = h;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

/**
 * The agent's `n`th idle activity. `from`: the spot it stands at, which it leaves unless no other is free. `taken`: the
 * spots other agents stand at or are going to, which it never takes while one of its own is free; with none free, its
 * rest spot. With `reducedMotion`, its rest spot for good.
 */
export function idleActivity(
  agent: AgentId,
  n: number,
  {
    seed,
    from = null,
    taken = new Set(),
    reducedMotion = false,
  }: {
    seed: number;
    from?: SpotId | null;
    taken?: ReadonlySet<SpotId>;
    reducedMotion?: boolean;
  },
): IdleActivity {
  if (reducedMotion) return activityAt(agent, START[agent], Number.POSITIVE_INFINITY);
  const r = random(seed, agent, n);
  const options = IDLE_SPOTS[agent];
  const first = Math.floor(r() * options.length);
  const free = (spot: SpotId) => !taken.has(spot);
  const rotated = options.map((_, i) => options[(first + i) % options.length]!);
  const spot = rotated.find((s) => free(s) && s !== from) ?? rotated.find(free) ?? START[agent];
  const [lo, hi] = IDLE_MS[agent === 'lead' ? 'lead' : 'others'];
  return activityAt(agent, spot, Math.round(lo + r() * (hi - lo)));
}
