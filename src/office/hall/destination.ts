import type { AgentId } from '../../events/schema';
import type { OfficeState } from '../../state/office';
import { hallStations } from './layout';
import { CHECK_SPOT, FETCH_SPOTS, REST_SPOTS, VISIT_SPOTS, seatSpot, type Spot } from './walk';

/** Each agent's seat. Stations never move, so this is worked out once. */
export const SEATS = Object.fromEntries(hallStations().map((s) => [s.agent.id, seatSpot(s)])) as Readonly<
  Record<AgentId, Spot>
>;

/**
 * Where an agent should be, from the office state alone (rules from the v1 spec).
 * Returns null for 'walking': walking is ours to compute, so that state keeps the current destination.
 */
export function destinationFor(agent: AgentId, office: OfficeState): Spot | null {
  const { state, taskId } = office.agents[agent];
  switch (state) {
    case 'walking':
      return null;
    case 'idle':
    case 'done':
      return REST_SPOTS[agent];
    case 'reading':
      return readingSpot(agent, office, taskId);
    case 'thinking':
    case 'writing':
    case 'waiting':
    case 'needs-you':
    case 'error':
      return SEATS[agent];
  }
}

function readingSpot(agent: AgentId, office: OfficeState, taskId: string | undefined): Spot {
  const task = office.tasks.find((t) => t.id === taskId);
  if (!task) return SEATS[agent];
  if (task.owner === agent) {
    // Still todo: the dev is collecting its task scroll. The Lead has no fetch spot, so it reads at its desk.
    return (task.status === 'todo' ? FETCH_SPOTS[agent] : undefined) ?? SEATS[agent];
  }
  if (agent === 'lead') return CHECK_SPOT;
  return VISIT_SPOTS[task.owner] ?? SEATS[agent];
}
