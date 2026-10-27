import type { AgentId } from '../../events/schema';
import { SMALL_TALK } from './smalltalk';

/** How long a message's speech bubble stays up. */
export const SPEECH_MS = 4000;
/** Longest speech bubble text, in characters, before it is cut with an ellipsis. */
export const SPEECH_CHARS = 80;
/** Rest-room chat: one line per slot, shown for the first part of the slot. */
export const SMALL_TALK_MS = 3000;
const SMALL_TALK_SHOWN_MS = 2500;

/** Cuts text to SPEECH_CHARS. Counts code points, so an emoji is never split into a broken half. */
export function clip(text: string): string {
  const chars = Array.from(text);
  return chars.length > SPEECH_CHARS ? `${chars.slice(0, SPEECH_CHARS).join('')}…` : text;
}

/**
 * Who says what in the rest room at time `now`, given the agents idling there (in roster order).
 * Nobody chats alone. Speakers take turns, and each works through its own lines.
 */
export function smallTalk(idle: readonly AgentId[], now: number): { agent: AgentId; text: string } | null {
  if (idle.length < 2 || now % SMALL_TALK_MS >= SMALL_TALK_SHOWN_MS) return null;
  const slot = Math.floor(now / SMALL_TALK_MS);
  const agent = idle[slot % idle.length]!;
  const lines = SMALL_TALK[agent];
  return { agent, text: lines[Math.floor(slot / idle.length) % lines.length]! };
}
