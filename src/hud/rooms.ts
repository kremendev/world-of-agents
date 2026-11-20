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
 * Who is in which room (4d.3), in the map's order. A figure on its way counts where it is going. Once the world is on
 * screen it says where each figure is (`rooms`, T): idle life moves resting agents between the idle areas, which the
 * office can't know. Until then, from the office alone: each agent at the place its state gives it (placeFor()), Live's
 * scroll stop left out, since a dev spends its task at its desk.
 */
export function roomBadges(
  office: OfficeState,
  rooms: Readonly<Partial<Record<AgentId, RoomId>>> | null = null,
): RoomBadge[] {
  const where = new Map<AgentId, RoomId>();
  for (const { id } of ROSTER) {
    const spot = placeFor(id, office);
    const room = rooms?.[id] ?? (spot ? SPOTS[spot].room : null);
    if (room) where.set(id, room);
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
