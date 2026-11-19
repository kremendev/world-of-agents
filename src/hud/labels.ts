import type { AgentId } from '../events/schema';
import { agentById, specialistWords } from '../office/roster';
import type { OfficeState } from '../state/office';

/** A point the world projected: x and y from -1 to 1 across the canvas (y up), z beyond 1 behind the camera. */
export type Projected = { x: number; y: number; z: number };

/**
 * Where a projected point lands on a box `width` x `height` CSS px, and whether a label there shows (D16): never for a
 * point behind the camera or past its far plane, nor for one off the box. No occlusion test: a tag shows through walls.
 */
export function toScreen(
  p: Projected,
  width: number,
  height: number,
): { x: number; y: number; shown: boolean } {
  const shown = p.z > -1 && p.z < 1 && Math.abs(p.x) <= 1 && Math.abs(p.y) <= 1;
  return { x: ((p.x + 1) / 2) * width, y: ((1 - p.y) / 2) * height, shown };
}

/** A name tag's words: the name, and a guild lead's specialists at work after a "+" (D13). */
export function tagText(office: OfficeState, id: AgentId): { name: string; plus: string | null } {
  const helping = id === 'lead' ? [] : office.specialists[id];
  return {
    name: agentById(id).name,
    plus: helping.length > 0 ? `+ ${helping.map(specialistWords).join(', ')}` : null,
  };
}

/** A tag's border: a needs-you or failed agent's first, then the one whose card is open. */
export function tagTone(
  office: OfficeState,
  id: AgentId,
  card: AgentId | null,
): 'needs' | 'error' | 'selected' | null {
  const { state } = office.agents[id];
  if (state === 'needs-you') return 'needs';
  if (state === 'error') return 'error';
  return card === id ? 'selected' : null;
}
