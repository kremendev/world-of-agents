import type { AgentId } from '../events/schema';
import { ROSTER } from '../office/roster';
import type { OfficeState } from '../state/office';
import { ROOMS, SPOTS, type RoomId } from '../world/map';
import { placeFor } from '../world/places';

/** A camera view the rail offers: the whole keep, or a room. */
export type View = RoomId | 'overview';

/** A room on the rail, with how many agents are in it and how many of those need you. */
export type RoomBadge = { id: RoomId; name: string; agents: number; needsYou: number };

/**
 * Who is in which room (4d.3), from the office alone: each agent at the place its state gives it (placeFor()), in the
 * map's order. A figure on its way counts where it is going. Live's scroll stop is left out: the page can't see which
 * scrolls the world has handed over, and a dev spends its task at its desk, so it counts there from the start.
 */
export function roomBadges(office: OfficeState): RoomBadge[] {
  const where = new Map<AgentId, RoomId>();
  for (const { id } of ROSTER) {
    const spot = placeFor(id, office);
    if (spot) where.set(id, SPOTS[spot].room);
  }
  return ROOMS.map((room) => {
    const inside = ROSTER.filter((a) => where.get(a.id) === room.id);
    return {
      id: room.id,
      name: room.name,
      agents: inside.length,
      needsYou: inside.filter((a) => office.agents[a.id].state === 'needs-you').length,
    };
  });
}

/** What a room's button says to a screen reader: "Workshop, 2 agents, one needs you". */
export function roomLabel({ name, agents, needsYou }: RoomBadge): string {
  const parts = [name];
  if (agents > 0) parts.push(agents === 1 ? '1 agent' : `${agents} agents`);
  if (needsYou > 0) parts.push(needsYou === 1 ? 'one needs you' : `${needsYou} need you`);
  return parts.join(', ');
}
