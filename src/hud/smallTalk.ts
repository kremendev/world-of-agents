import type { AgentId } from '../events/schema';
import type { RoomId } from '../world/map';

/** Our own lines for the keep's small talk (D10): plain, in the keep's voice, never agent output and no real names. */
export const KEEP_SMALL_TALK: readonly string[] = [
  'The forge burns hot today.',
  'Who left a hammer by the well again?',
  'My boots still smell of the Tavern.',
  'The crows are back on the gate.',
  'One more round, then back to work.',
  'That dummy has seen better days.',
  'The garden could do with rain.',
  'The war map has a new pin, I hear.',
  'Fresh bread at the Tavern, I am told.',
  'The airship is late again.',
  'Mind the steps by the brook.',
  'A quiet day. I like quiet days.',
];

/** One bubble per idle area every 20 s at most, shown for its first 4 s, and only in some of those slots. */
export const TALK_EVERY_MS = 20_000;
export const TALK_SHOWN_MS = 4_000;

const hash = (a: number, b: number) => {
  let h = Math.imul(a ^ 0x9e3779b1, 0x85ebca6b) ^ Math.imul(b + 1, 0xc2b2ae35);
  h ^= h >>> 15;
  h = Math.imul(h, 0x27d4eb2f);
  return (h ^ (h >>> 13)) >>> 0;
};
const AREA_NO: Readonly<Partial<Record<RoomId, number>>> = { tavern: 1, yard: 2, court: 3, garden: 4 };

/**
 * Who says what at `now` (D10): in each area where two or more idle agents stand (`together`, in roster order), at most
 * one line in each 20 s slot, shown for its first 4 s, in about two slots of three; the speakers take turns. Each area
 * keeps its own clock, so two areas seldom speak at once. Returns the speaker's line, by agent.
 */
export function keepSmallTalk(
  together: ReadonlyMap<RoomId, readonly AgentId[]>,
  now: number,
): Partial<Record<AgentId, string>> {
  const said: Partial<Record<AgentId, string>> = {};
  for (const [room, agents] of together) {
    const area = AREA_NO[room];
    if (area === undefined || agents.length < 2) continue;
    const t = now + area * 7_300;
    const slot = Math.floor(t / TALK_EVERY_MS);
    if (t - slot * TALK_EVERY_MS >= TALK_SHOWN_MS) continue;
    const h = hash(slot, area);
    if (h % 3 === 0) continue;
    said[agents[slot % agents.length]!] = KEEP_SMALL_TALK[(h >>> 4) % KEEP_SMALL_TALK.length]!;
  }
  return said;
}
