/**
 * The keep's lit screens (v4.0.0, 4c.6, D12): every one belongs to a work spot and glows only while that spot's owner
 * works there. Pure, so Vitest holds the rule; the world lights each screen through screenLit(). The keep has two, the
 * dev desks' (4b); the Library's orb, the War hall's task board and the keyboards' red keys are not screens.
 */
import type { AgentId, AgentState } from '../events/schema';
import type { SpotId } from './map';
import { WORK } from './places';

/** Every lit screen in the keep, by its owner, at the owner's work spot. */
export const SCREENS = {
  frontend: 'desk-frontend',
  backend: 'desk-backend',
} as const satisfies Partial<Record<AgentId, SpotId>>;

export type ScreenOwner = keyof typeof SCREENS;

/** The states in which an agent at its desk is at its work: its screen lit. */
export const LIT: ReadonlySet<AgentState> = new Set(['thinking', 'reading', 'writing', 'waiting']);

/**
 * Whether an agent is at its work now: standing (not walking) at its own work spot, not held there after its work
 * ended, and in a working state. Its screen glows, if it has one, only then.
 */
export function screenLit(
  owner: AgentId,
  o: { spot: SpotId; walking: boolean; held: boolean; state: AgentState | null },
): boolean {
  return !o.walking && !o.held && o.spot === WORK[owner] && o.state !== null && LIT.has(o.state);
}
