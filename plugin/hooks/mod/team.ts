// The team editor in the pane (v3.4c, docs/v3.4-plan.md, T8): the one-time key "Change skills" makes, the link that
// carries it, and the lines of the team's change log. The key is never kept in $.state or $.store: it goes only on
// hall-key.mjs's stdin and into the link, after a #, so no server ever logs it.

import type { PaneChange } from './types';

/** A key: 32 random bytes as base64url, 43 characters. */
export const KEY = /^[A-Za-z0-9_-]{43}$/;
/** The hall takes a key once, within this long; the pane shows its link as long. */
export const KEY_LIFE_MS = 60_000;
/** After a key, the pane looks at the change log this often, this many times (ten minutes). */
export const WATCH_MS = 20_000;
export const WATCH_TICKS = 30;
/** The most team-log.mjs prints (20 entries of a few hundred characters), and the most the pane shows. */
export const MAX_LOG = 16_384;
export const SHOWN = 5;

/** A new key from the engine's random source. */
export function makeKey(): string {
  const bytes = crypto.getRandomValues(new Uint8Array(32));
  let text = '';
  for (const byte of bytes) text += String.fromCharCode(byte);
  return btoa(text).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
}

/** The team editor's link: the hall, and the key after a #. */
export const editorLink = (hall: string, key: string) => `${hall}/#k=${key}`;

/** A skill's or specialist's name as team.mjs allows it: letters, digits, spaces, a little punctuation. */
const NAME = /^[\p{L}\p{N} .,()'&/-]+$/u;
const name = (v: unknown, max: number): v is string =>
  typeof v === 'string' && v.length >= 1 && v.length <= max && NAME.test(v) && v.trim() === v;
const SINGLE = ['skill-added', 'skill-changed', 'skill-deleted'];
const PAIRED = ['skill-attached', 'skill-detached'];
const keysAre = (v: object, keys: string) => Object.keys(v).sort().join() === keys;

/** One entry when it is exactly one: a time, what changed, and names. */
function changeOf(v: unknown): PaneChange | null {
  if (typeof v !== 'object' || v === null || Array.isArray(v)) return null;
  const e = v as Record<string, unknown>;
  if (typeof e.at !== 'number' || !Number.isSafeInteger(e.at) || e.at <= 0 || !name(e.skill, 60)) return null;
  if (typeof e.what !== 'string') return null;
  if (SINGLE.includes(e.what) && keysAre(e, 'at,skill,what')) {
    return { at: e.at, what: e.what as PaneChange['what'], skill: e.skill };
  }
  if (PAIRED.includes(e.what) && keysAre(e, 'at,skill,specialist,what') && name(e.specialist, 40)) {
    return { at: e.at, what: e.what as PaneChange['what'], skill: e.skill, specialist: e.specialist };
  }
  return null;
}

/**
 * What team-log.mjs printed, when it is exactly {"changes": [...]} of at most 20 entries that are each exactly an entry:
 * the newest SHOWN. Else null, and nothing of it is kept.
 */
export function changesOf(printed: string): PaneChange[] | null {
  if (typeof printed !== 'string' || printed.length > MAX_LOG) return null;
  let value: unknown;
  try {
    value = JSON.parse(printed);
  } catch {
    return null;
  }
  if (typeof value !== 'object' || value === null || Array.isArray(value) || !keysAre(value, 'changes'))
    return null;
  const { changes } = value as { changes: unknown };
  if (!Array.isArray(changes) || changes.length > 20) return null;
  const read = changes.map(changeOf);
  return read.every((c): c is PaneChange => c !== null) ? read.slice(-SHOWN) : null;
}

const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const two = (n: number) => String(n).padStart(2, '0');

/** One change as the pane says it: "12 Nov 14:05 Skill added: Release notes". */
export function changeLine(c: PaneChange): string {
  const d = new Date(c.at);
  const at = `${d.getDate()} ${MONTHS[d.getMonth()]} ${two(d.getHours())}:${two(d.getMinutes())}`;
  switch (c.what) {
    case 'skill-added':
      return `${at} Skill added: ${c.skill}`;
    case 'skill-changed':
      return `${at} Skill changed: ${c.skill}`;
    case 'skill-deleted':
      return `${at} Skill deleted: ${c.skill}`;
    case 'skill-attached':
      return `${at} ${c.specialist ?? ''} got the skill ${c.skill}`;
    case 'skill-detached':
      return `${at} ${c.specialist ?? ''} lost the skill ${c.skill}`;
  }
}
