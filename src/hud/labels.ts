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

/** How close a tag (with its marker) comes to the window's edges (Dima, 20 Nov). */
export const TAG_EDGE = 4;

/**
 * Where each tag goes, its middle and its bottom in px, so none overlaps another and each stays inside the window, `area`
 * (Dima, 20 Nov). Each box is first held TAG_EDGE inside the window's edges. The fixed tags are placed
 * first, then the rest; each group from the bottom of the window up, so the figure nearest the front keeps its spot. A
 * tag whose box would overlap one already placed moves up by its own height plus TAG_GAP, again until it is clear;
 * where that would take it past the top edge, it goes down from its spot the same way instead. No tag is ever hidden:
 * in a window too short for the stack either way, it stays at the top edge. Two fixed tags that would overlap stack
 * the same way, so neither covers the other.
 */
export function settleTags(
  tags: readonly TagBox[],
  area: { width: number; height: number },
): Partial<Record<AgentId, { x: number; y: number }>> {
  const within = (v: number, lo: number, hi: number) =>
    lo > hi ? (lo + hi) / 2 : Math.min(hi, Math.max(lo, v));
  const held = tags.map((t) => ({
    ...t,
    x: within(t.x, TAG_EDGE + t.width / 2, area.width - TAG_EDGE - t.width / 2),
    y: within(t.y, TAG_EDGE + t.height, area.height - TAG_EDGE),
  }));
  const lowestFirst = (a: TagBox, b: TagBox) => b.y - a.y;
  const order = [
    ...held.filter((t) => t.fixed).sort(lowestFirst),
    ...held.filter((t) => !t.fixed).sort(lowestFirst),
  ];
  const placed: { left: number; right: number; top: number; bottom: number }[] = [];
  const at: Partial<Record<AgentId, { x: number; y: number }>> = {};
  for (const tag of order) {
    const left = tag.x - tag.width / 2;
    const right = tag.x + tag.width / 2;
    const hits = (bottom: number) =>
      placed.some(
        (p) => left < p.right && right > p.left && bottom - tag.height < p.bottom && bottom > p.top,
      );
    const step = tag.height + TAG_GAP;
    let bottom = tag.y;
    while (hits(bottom)) bottom -= step;
    if (bottom - tag.height < TAG_EDGE) {
      let down = tag.y;
      while (hits(down)) down += step;
      bottom = down <= area.height - TAG_EDGE ? down : TAG_EDGE + tag.height;
    }
    placed.push({ left, right, top: bottom - tag.height, bottom });
    at[tag.id] = { x: tag.x, y: bottom };
  }
  return at;
}

/** A tag moved further than this from its figure's head, in px, gets a line down to it (Dima, 20 Nov). */
export const LEADER_FROM = 12;

/**
 * The leader line from a tag's bottom middle to its figure's head (Dima, 20 Nov): its length in px and its turn from
 * straight down, clockwise on the screen, in radians; null while the tag is no further than LEADER_FROM from the head.
 */
export function leaderLine(
  tag: { x: number; y: number },
  head: { x: number; y: number },
): { length: number; angle: number } | null {
  const dx = head.x - tag.x;
  const dy = head.y - tag.y;
  const length = Math.hypot(dx, dy);
  return length > LEADER_FROM ? { length, angle: Math.atan2(tag.x - head.x, dy) } : null;
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
