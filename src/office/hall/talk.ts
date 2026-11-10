import type { AgentId } from '../../events/schema';
import { linksAsText, shorten } from '../../page/shorten';
import { SMALL_TALK } from './smalltalk';

/** A message's speech bubble stays up 4 s, plus 60 ms for each character it shows, and never past 10 s. */
export const SPEECH_BASE_MS = 4000;
export const SPEECH_PER_CHAR_MS = 60;
export const SPEECH_MAX_MS = 10_000;
/** Longest speech bubble text, in characters, ellipsis included. */
export const SPEECH_CHARS = 90;

/** How long a bubble showing `text` stays up. Counts code points, as shorten() does. */
export const speechMs = (text: string): number =>
  Math.min(SPEECH_MAX_MS, SPEECH_BASE_MS + SPEECH_PER_CHAR_MS * Array.from(text).length);

/**
 * One agent's speech bubbles, the one on screen (or due next) first, each with the time it still has to show. That
 * time runs only while the bubble is on screen, in real time (performance.now()): never while its agent walks, so a
 * hurrying agent never carries a bubble across the hall, and a walk never eats a bubble's time. `since` is when the
 * first one last came on screen, or null while none shows.
 */
export type Speech = {
  readonly queue: readonly { readonly text: string; readonly left: number }[];
  readonly since: number | null;
};

/** No bubbles. */
export const SILENT: Speech = { queue: [], since: null };

/** Adds a message to an agent's bubbles: it waits for the ones before it instead of replacing them. */
export const say = (speech: Speech, text: string): Speech => ({
  ...speech,
  queue: [...speech.queue, { text, left: speechMs(text) }],
});

/**
 * One frame of an agent's bubbles at `now`: the time the first one was on screen since the last frame comes off it
 * (and off the next ones, after a long gap such as a hidden tab), then the first one left shows, unless the agent
 * walks. A bubble cut off by a walk shows the rest of its time once the agent stops. Returns the bubbles and the text
 * on screen.
 */
export function speak(
  speech: Speech,
  now: number,
  walking: boolean,
): { speech: Speech; text: string | null } {
  let queue = speech.queue;
  let spent = speech.since === null ? 0 : now - speech.since;
  while (queue.length > 0 && spent >= queue[0]!.left) {
    spent -= queue[0]!.left;
    queue = queue.slice(1);
  }
  if (queue.length > 0 && spent > 0)
    queue = [{ ...queue[0]!, left: queue[0]!.left - spent }, ...queue.slice(1)];
  const text = walking ? null : (queue[0]?.text ?? null);
  return { speech: { queue, since: text === null ? null : now }, text };
}

/** Rest-room chat: one line per slot, shown for the first part of the slot. */
export const SMALL_TALK_MS = 3000;
const SMALL_TALK_SHOWN_MS = 2500;

/**
 * Markdown's marks, only where they work as Markdown, by the rules of the pane's voice (withoutMarkdown() in
 * plugin/hooks/mod/voice.ts): every backtick; `**` pairs; `__` pairs and a single `*` or `_` around words only at word
 * boundaries; and only at the start of a line a quote's `>`, a heading's `#`s and a list item's marker (`1.`, `2)`,
 * `-`, `+`, `*`). So user_id, snake_case, 2*3*4 and "a > b" stay as they are.
 */
const withoutMarks = (text: string): string =>
  text
    .replace(/^[ \t]*(?:>[ \t]?)*(?:(?:#{1,6}|\d{1,3}[.)]|[-+*])[ \t]+)?/gm, '')
    .replace(/`/g, '')
    .replace(/\*\*(?=\S)(.+?)(?<=\S)\*\*/g, '$1')
    .replace(/(?<!\w)__(?=\S)(.+?)(?<=\S)__(?!\w)/g, '$1')
    .replace(/(?<![\w*])\*(?=[^\s*])(.+?)(?<=[^\s*])\*(?![\w*])/g, '$1')
    .replace(/(?<!\w)_(?=[^\s_])(.+?)(?<=[^\s_])_(?!\w)/g, '$1');

/**
 * What a message's bubble shows: only its first sentence, cleaned the way the pane's voice cleans it: links as their
 * text (as AgentText shows them) and Markdown's marks out where they work as Markdown (withoutMarks()). The sentence
 * ends at the first `.`, `!` or `?` that ends one, or at the first line break, and is at most SPEECH_CHARS long, ending
 * in "…" when cut there. The rest, marks and all, is in the activity feed.
 */
export function bubbleText(text: string): string {
  const plain = withoutMarks(linksAsText(text)).trim();
  const end = /[.!?](?=\s|$)|\n/.exec(plain);
  const sentence = end ? plain.slice(0, end.index + (end[0] === '\n' ? 0 : 1)) : plain;
  return shorten(sentence.trim(), SPEECH_CHARS);
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
