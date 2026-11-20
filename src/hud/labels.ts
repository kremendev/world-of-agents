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

/**
 * A shown tag on the box, in CSS px: `x` its middle, `y` its bottom (where the world projects the head), its size, and
 * whether it is fixed (a needs-you or failed agent's, which keeps its own spot; its box includes the marker over it).
 */
export type TagBox = { id: AgentId; x: number; y: number; width: number; height: number; fixed: boolean };

/** How far apart two tags stack (Dima, 20 Nov). */
export const TAG_GAP = 4;

/**
 * Where each tag goes so none overlaps another (Dima, 20 Nov), as how far up from its own spot, in px (0 or less).
 * The fixed tags are placed first, then the rest; each group from the bottom of the box up, so the figure nearest the
 * front keeps its spot. A tag whose box would overlap one already placed moves up by its own height plus TAG_GAP,
 * again until it is clear. No tag is ever hidden. Two fixed tags that would overlap stack the same way, so neither
 * covers the other.
 */
export function settleTags(tags: readonly TagBox[]): Partial<Record<AgentId, number>> {
  const lowestFirst = (a: TagBox, b: TagBox) => b.y - a.y;
  const order = [
    ...tags.filter((t) => t.fixed).sort(lowestFirst),
    ...tags.filter((t) => !t.fixed).sort(lowestFirst),
  ];
  const placed: { left: number; right: number; top: number; bottom: number }[] = [];
  const up: Partial<Record<AgentId, number>> = {};
  for (const tag of order) {
    const left = tag.x - tag.width / 2;
    const right = tag.x + tag.width / 2;
    let bottom = tag.y;
    const hits = () =>
      placed.some(
        (p) => left < p.right && right > p.left && bottom - tag.height < p.bottom && bottom > p.top,
      );
    while (hits()) bottom -= tag.height + TAG_GAP;
    placed.push({ left, right, top: bottom - tag.height, bottom });
    up[tag.id] = bottom - tag.y;
  }
  return up;
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
