// The voice: Windows' own speech synthesizer, through a fixed script ($.audio.speak has no voice on Windows).
//
// The command is always exactly speakCommand: no -Command, no shell, nothing built from any text. The text goes in on
// stdin only, cleaned and capped first, and the script speaks it as plain text (Speak, never SSML). Agent names come
// from the roster, never from an event. One voice at a time: at most 3 lines wait, the oldest dropped first, and a
// voice still going after 15 s is stopped. It says two things only: who needs your approval, and that the team is done.

import type { EngineInterface } from 'claude-code';

import { nameOf, ROSTER } from './roster';
import { plain } from './text';
import type { PaneView } from './types';

export const MAX_SPOKEN = 200;
export const MAX_WAITING = 3;
export const STOP_AFTER_MS = 15_000;

/** RemoteSigned runs the plugin's own local script and refuses one marked as downloaded; Bypass would run either. */
export const speakCommand = (root: string) => [
  'powershell.exe',
  '-NoProfile',
  '-NonInteractive',
  '-ExecutionPolicy',
  'RemoteSigned',
  '-File',
  `${root}/voice/speak.ps1`,
];

const waiting: string[] = [];
let speaking = false;
let stopSpeaking: (() => void) | undefined;

/** Queues a line. It is cleaned and capped here, whatever the caller did: agent text may be in it. */
export function say($: EngineInterface, text: string): void {
  const line = plain(text, MAX_SPOKEN);
  if (line === '') return;
  waiting.push(line);
  if (waiting.length > MAX_WAITING) waiting.shift();
  if (!speaking) void speakAll($);
}

/** Mute: nothing waits any more, and a voice that is speaking stops. */
export function hush(): void {
  waiting.length = 0;
  stopSpeaking?.();
}

async function speakAll($: EngineInterface): Promise<void> {
  speaking = true;
  try {
    for (let line = waiting.shift(); line !== undefined; line = waiting.shift()) await speak($, line);
  } finally {
    speaking = false;
  }
}

async function speak($: EngineInterface, line: string): Promise<void> {
  try {
    const voice = $.process.spawn({ argv: speakCommand($.plugin.root), cwd: $.plugin.root, input: line });
    // Leaving the stream ends the child, even one that is still speaking and writes nothing (checked on the engine).
    stopSpeaking = () => void voice.return({ code: null, signal: null }).catch(() => {});
    const timer = $.clock.after(STOP_AFTER_MS, stopSpeaking);
    try {
      // speak.ps1 prints nothing; whatever it writes is read and dropped.
      for await (const piece of voice) void piece;
    } finally {
      timer.cancel();
      stopSpeaking = undefined;
    }
  } catch {
    // No PowerShell (not Windows) or a policy that refuses the script: the voice stays quiet.
  }
}

/** "Backend dev needs your approval." The name is the pane's: the roster's, or "An agent". */
export const approvalLine = (name: string) => `${name} needs your approval.`;

/** The answer's first sentence: up to the first `.`, `!` or `?` that ends a sentence, or the first line break. */
export function firstSentence(answer: string): string {
  const text = answer.trim();
  const end = /[.!?](?=\s|$)|\n/.exec(text);
  return (end ? text.slice(0, end.index + (end[0] === '\n' ? 0 : 1)) : text).trim();
}

/**
 * Markdown as plain words, so no marks and no link targets are read aloud: `[text](url)` (and an image's
 * `![text](url)`) becomes its text. Marks go only where they work as Markdown, so identifiers stay whole: every
 * backtick; `**` pairs; `__` pairs and a single `*` or `_` around words only at word boundaries; and only at the start
 * of a line a quote's `>`, a heading's `#`s and a list item's marker (`1.`, `2)`, `-`, `+`, `*`). The Lead's report often
 * opens with "1. **What changed:**", and its "1." would otherwise be the whole first sentence. user_id, snake_case,
 * 2*3*4 and "a > b" are read as they are. The bubbles in the hall follow the same rules (src/office/hall/talk.ts).
 */
export function withoutMarkdown(text: string): string {
  return text
    .replace(/!?\[([^\]\n]*)\]\([^)\n]*\)/g, '$1')
    .replace(/^[ \t]*(?:>[ \t]?)*(?:(?:#{1,6}|\d{1,3}[.)]|[-+*])[ \t]+)?/gm, '')
    .replace(/`/g, '')
    .replace(/\*\*(?=\S)(.+?)(?<=\S)\*\*/g, '$1')
    .replace(/(?<!\w)__(?=\S)(.+?)(?<=\S)__(?!\w)/g, '$1')
    .replace(/(?<![\w*])\*(?=[^\s*])(.+?)(?<=[^\s*])\*(?![\w*])/g, '$1')
    .replace(/(?<!\w)_(?=[^\s_])(.+?)(?<=[^\s_])_(?!\w)/g, '$1');
}

/**
 * The run an Agent call started in the background, from the call's result: `{ status: 'async_launched', agentId }`.
 * That is how the run really went, after the engine forced a mode either way; a run the Lead waited for comes back
 * `completed`, its result already in hand, and gives nothing here.
 */
export function backgroundRun(answer: unknown): string | undefined {
  const result = (answer as { result?: unknown } | null)?.result as {
    status?: unknown;
    agentId?: unknown;
  } | null;
  if (result?.status !== 'async_launched' || typeof result.agentId !== 'string') return undefined;
  return result.agentId;
}

/**
 * The run whose result a prompt brings the Lead: a Claude Code frame at the very start of the text, either
 * `<task-notification>` with its `<task-id>`, or the `<agent-message from="...">` hand-back Auto mode sends instead
 * (docs/v2-hooks.md). Ids are id-shaped only. Any other prompt brings none.
 */
export function heardRun(text: string): string | undefined {
  return (
    /^<task-notification>[\s\S]*?<task-id>([\w-]{1,100})<\/task-id>/.exec(text)?.[1] ??
    /^<agent-message from="([\w-]{1,100})">/.exec(text)?.[1]
  );
}

const FINISHED = new Set(['completed', 'failed', 'killed']);

const joinAnd = (names: string[]) =>
  names.length < 2 ? names.join('') : `${names.slice(0, -1).join(', ')} and ${names.at(-1)}`;

/**
 * What the end of one of the Lead's turns means for the round, the runs seen since the team last went quiet:
 * - a run still going, a run over whose result hasn't reached the Lead yet, or an approval still open: the team isn't
 *   done, so nothing is said and the round stays;
 * - all over, but the turn didn't end with an answer (interrupted, an error, a refusal): the round ends in silence;
 * - all over, and an answer: "The team is done." and the answer's first sentence, Markdown out, or "The team stopped. Backend dev
 *   failed." with each failed role once, in roster order.
 * A turn with no round says nothing.
 */
export function teamLine(v: PaneView, reason: string, answer: string): { round: string[]; line?: string } {
  if (v.round.length === 0) return { round: [] };
  const runs = v.agents.filter((a) => v.round.includes(a.id));
  // Over is not enough: a background run can end before the Lead's own turn does, and the Lead hears of it only in
  // the frame that follows. Until then its answer can't be the team's.
  const going = runs.some((a) => !FINISHED.has(a.status) || v.unheard.includes(a.id));
  if (going || v.asks.length > 0) return { round: v.round };
  if (reason !== 'answer') return { round: [] };
  const failed = ROSTER.filter((agent) =>
    runs.some((a) => a.agent === agent.id && a.status === 'failed'),
  ).map((agent) => nameOf(agent.id));
  if (failed.length > 0) return { round: [], line: `The team stopped. ${joinAnd(failed)} failed.` };
  return { round: [], line: `The team is done. ${firstSentence(withoutMarkdown(answer))}`.trim() };
}
