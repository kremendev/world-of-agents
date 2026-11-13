// The token ledger (v3.2, docs/v3.2-plan.md): every turn's usage, the Lead's and each subagent's, added per session and
// model to a table kept in $.store, and what those tokens would cost at API prices. Only numbers, the engine's model ids
// and session ids: never text. A mod can't tell which account is logged in, so the total is "This PC".
//
// Per session (3.2d, Dima's decision): Recount reads Claude Code's transcripts (hooks/ledger-past.mjs) and each session it
// covers takes the transcript's exact count in place of the live one, so nothing is counted twice. A session whose
// transcript is gone keeps its numbers, in `earlier`: the total never goes down.

import type { PaneLedger } from './types';

/** One model's totals: the counts the API reports for a request, summed, cache writes by how long they last. */
export type Counts = {
  inputTokens: number;
  outputTokens: number;
  cacheRead: number;
  cacheWrite5m: number;
  cacheWrite1h: number;
};
/** Totals per model id. */
export type Models = Record<string, Counts>;

/**
 * The ledger as $.store keeps it: when counting began, when Recount last ran (null before the first), the totals per
 * session id, and `earlier`: sessions no transcript will cover again, together.
 */
export type Ledger = {
  since: number;
  counted: number | null;
  sessions: Record<string, Models>;
  earlier: Models;
};

/** What `turn.complete` carries: a turn's four counts, summed, and the model of its last response. */
export type TurnUsageLike = {
  input_tokens: number;
  output_tokens: number;
  cache_read_input_tokens: number;
  cache_creation_input_tokens: number;
  model: string;
};

/** The $.store key. */
export const LEDGER_KEY = 'ledger';
/** At most this many sessions apart; past it, the oldest go into `earlier`. */
export const MAX_SESSIONS = 1000;
/** At most this many model ids apart in a session (and in `earlier`); the rest count together as OTHER. */
export const MAX_MODELS = 8;
/** The most ledger-past.mjs prints: 1000 sessions of 8 models are under it. */
export const MAX_RECOUNT = 1_048_576;
/** A model id the API reports: lower-case letters, digits, dots and dashes, starting with a letter. Else OTHER. */
const MODEL_ID = /^[a-z][a-z0-9.-]{0,63}$/;
/** A session id as Claude Code names its transcripts. */
export const SESSION_ID = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/;
export const OTHER = 'other';
const KEYS = ['inputTokens', 'outputTokens', 'cacheRead', 'cacheWrite5m', 'cacheWrite1h'] as const;
const ZERO: Counts = { inputTokens: 0, outputTokens: 0, cacheRead: 0, cacheWrite5m: 0, cacheWrite1h: 0 };

/**
 * API prices per million tokens, standard (not fast mode), read on PRICED_ON from
 * https://platform.claude.com/docs/en/about-claude/pricing: base input, 5-minute and 1-hour cache writes (1.25 and 2
 * times the base), cache read, output. Haiku 5.5 at its price for prompts up to 100,000 tokens. An estimate, so "about".
 */
export const PRICED_ON = '13 Nov 2026';
type Price = { base: number; write5m: number; write1h: number; read: number; output: number };
const PRICES: Readonly<Record<string, Price>> = {
  'claude-fable-5-2': { base: 8, write5m: 10, write1h: 16, read: 0.2, output: 40 },
  'claude-opus-5-5': { base: 4, write5m: 5, write1h: 8, read: 0.2, output: 20 },
  'claude-sonnet-5-5': { base: 2, write5m: 2.5, write1h: 4, read: 0.1, output: 10 },
  'claude-haiku-5-5': { base: 0.1, write5m: 0.125, write1h: 0.2, read: 0.01, output: 0.5 },
};

/** A model's price: its id as listed, or with a date after it (`claude-opus-5-5-20261001`). */
export function priceOf(model: string): Price | undefined {
  const base = /^(.*)-\d{8}$/.exec(model)?.[1] ?? model;
  return Object.hasOwn(PRICES, base) ? PRICES[base] : undefined;
}

/** A count from the engine as a whole number of tokens, 0 for anything that isn't one. */
const count = (n: unknown): number =>
  typeof n === 'number' && Number.isFinite(n) && n > 0 ? Math.min(Math.floor(n), Number.MAX_SAFE_INTEGER) : 0;
const plus = (a: number, b: number) => Math.min(a + b, Number.MAX_SAFE_INTEGER);
const sum = (a: Counts, b: Counts): Counts =>
  Object.fromEntries(KEYS.map((k) => [k, plus(a[k], b[k])])) as Counts;

/** `counts` added to `models` under `id`, or under OTHER past MAX_MODELS ids. Pure: `models` is left as it was. */
function addTo(models: Models, id: string, counts: Counts): Models {
  const room = Object.keys(models).filter((m) => m !== OTHER).length < MAX_MODELS - 1;
  const key = Object.hasOwn(models, id) || room ? id : OTHER;
  return { ...models, [key]: sum(Object.hasOwn(models, key) ? models[key]! : ZERO, counts) };
}

/** Every model of `more` added to `models`. */
const addAll = (models: Models, more: Models): Models =>
  Object.entries(more).reduce((all, [id, counts]) => addTo(all, id, counts), models);

/** A new, empty ledger starting `now`. */
const fresh = (now: number): Ledger => ({ since: now, counted: null, sessions: {}, earlier: {} });

/** The sessions past MAX_SESSIONS, oldest first (the order they were added in), moved into `earlier`. */
function fold(ledger: Ledger): Ledger {
  const ids = Object.keys(ledger.sessions);
  if (ids.length <= MAX_SESSIONS) return ledger;
  const out = ids.slice(0, ids.length - MAX_SESSIONS);
  const sessions = { ...ledger.sessions };
  let earlier = ledger.earlier;
  for (const id of out) {
    earlier = addAll(earlier, sessions[id]!);
    delete sessions[id];
  }
  return { ...ledger, sessions, earlier };
}

/**
 * One turn added to its session: a new ledger when there is none yet, starting `now`. `lead` is the main thread's turn.
 * The engine's counts don't say how long a cache write lasts, so it is inferred: the Lead's writes as 1-hour ones, a
 * subagent's as 5-minute ones. Every response on this PC on 13 Nov was so (3.2d); Recount puts each transcript's exact
 * split in their place. A session id that isn't one counts in `earlier`. Pure: the ledger given is left as it was.
 */
export function addTurn(
  ledger: Ledger | null,
  session: string,
  usage: TurnUsageLike,
  lead: boolean,
  now: number,
): Ledger {
  const base = ledger ?? fresh(now);
  const id = typeof usage.model === 'string' && MODEL_ID.test(usage.model) ? usage.model : OTHER;
  const written = count(usage.cache_creation_input_tokens);
  const counts: Counts = {
    inputTokens: count(usage.input_tokens),
    outputTokens: count(usage.output_tokens),
    cacheRead: count(usage.cache_read_input_tokens),
    cacheWrite5m: lead ? 0 : written,
    cacheWrite1h: lead ? written : 0,
  };
  if (typeof session !== 'string' || !SESSION_ID.test(session)) {
    return { ...base, earlier: addTo(base.earlier, id, counts) };
  }
  const was = Object.hasOwn(base.sessions, session) ? base.sessions[session]! : {};
  return fold({ ...base, sessions: { ...base.sessions, [session]: addTo(was, id, counts) } });
}

const isObject = (v: unknown): v is Record<string, unknown> =>
  typeof v === 'object' && v !== null && !Array.isArray(v);
const whole = (n: unknown): n is number => typeof n === 'number' && Number.isSafeInteger(n) && n >= 0;
const keysAre = (v: object, keys: string) => Object.keys(v).sort().join() === keys;

const isCounts = (v: unknown): v is Counts =>
  isObject(v) && Object.keys(v).length === KEYS.length && KEYS.every((k) => whole(v[k]));

/** Totals per model, exactly: at most MAX_MODELS ids, each a model id or OTHER, each with exactly the five counts. */
const isModels = (v: unknown): v is Models =>
  isObject(v) &&
  Object.keys(v).length <= MAX_MODELS &&
  Object.entries(v).every(([id, counts]) => (id === OTHER || MODEL_ID.test(id)) && isCounts(counts));

/** The ledger $.store held, or null when there is none or it isn't exactly one (then counting starts again). */
export function readLedger(value: unknown): Ledger | null {
  if (!isObject(value) || !keysAre(value, 'counted,earlier,sessions,since')) return null;
  const { since, counted, sessions, earlier } = value;
  if (!whole(since) || !(counted === null || whole(counted)) || !isModels(earlier)) return null;
  if (!isObject(sessions) || Object.keys(sessions).length > MAX_SESSIONS) return null;
  if (!Object.entries(sessions).every(([id, models]) => SESSION_ID.test(id) && isModels(models))) return null;
  return { since, counted, sessions: sessions as Record<string, Models>, earlier };
}

/** What Recount found: per session, its totals and whether it is settled (no turn can still be running in it). */
export type Recount = { since: number; sessions: Record<string, { settled: boolean; models: Models }> };

/**
 * What ledger-past.mjs printed, when it is exactly a recount: {"since", "sessions"}, each session id with exactly
 * {"settled", "models"}, whole numbers only, at most MAX_SESSIONS sessions and MAX_RECOUNT characters. Else null, and
 * nothing of it is kept. One of the child outputs the mod keeps (L7).
 */
export function recountOf(printed: string): Recount | null {
  if (typeof printed !== 'string' || printed.length > MAX_RECOUNT) return null;
  let value: unknown;
  try {
    value = JSON.parse(printed);
  } catch {
    return null;
  }
  if (!isObject(value) || !keysAre(value, 'sessions,since')) return null;
  const { since, sessions } = value;
  if (!whole(since) || !isObject(sessions) || Object.keys(sessions).length > MAX_SESSIONS) return null;
  const ok = Object.entries(sessions).every(
    ([id, s]) =>
      SESSION_ID.test(id) &&
      isObject(s) &&
      keysAre(s, 'models,settled') &&
      typeof s.settled === 'boolean' &&
      isModels(s.models),
  );
  return ok ? { since, sessions: sessions as Recount['sessions'] } : null;
}

const same = (a: unknown, b: unknown) => JSON.stringify(a) === JSON.stringify(b);

/**
 * Recount's result merged into the ledger as it stands now (`table`), given the ledger as it stood at the press
 * (`before`), for a count that finished at `now`. Pure.
 *
 * - A settled session takes the transcript's count in place of the stored one, and a new one is added.
 * - A session not settled keeps what it has: a turn may still run in it, and its end would add that turn's count on top
 *   of the transcript's part of it. A later Recount takes it.
 * - A session whose stored count changed while the count ran keeps it too: a turn ended meanwhile.
 * - A session stored at the press, unchanged, and not found at all (its transcript is gone) moves into `earlier`.
 */
export function recount(table: Ledger | null, before: Ledger | null, found: Recount, now: number): Ledger {
  const base = table ?? fresh(now);
  const sessions = { ...base.sessions };
  let earlier = base.earlier;
  for (const [id, s] of Object.entries(found.sessions)) {
    if (!s.settled) continue;
    if (Object.hasOwn(sessions, id) && !same(sessions[id], before?.sessions[id])) continue;
    sessions[id] = s.models;
  }
  for (const id of Object.keys(base.sessions)) {
    // Found, or not stored as it is now when Recount began (new since, or a turn ended meanwhile): not gone.
    if (Object.hasOwn(found.sessions, id) || !same(base.sessions[id], before?.sessions[id])) continue;
    earlier = addAll(earlier, base.sessions[id]!);
    delete sessions[id];
  }
  const counted = Object.keys(found.sessions).length > 0;
  const since =
    table === null ? (counted ? found.since : now) : counted ? Math.min(base.since, found.since) : base.since;
  return fold({ since, counted: now, sessions, earlier });
}

/**
 * What the pane and the hall show: tokens in (input, cache reads and writes) and out, the value in whole cents, and the
 * tokens of models the price table doesn't know, by model id, the most first, at most three.
 */
export type LedgerSummary = PaneLedger;

export function summarize(ledger: Ledger): LedgerSummary {
  // Per model over every session and `earlier`: the price is per model.
  const all = new Map<string, Counts>();
  for (const models of [...Object.values(ledger.sessions), ledger.earlier]) {
    for (const [id, c] of Object.entries(models)) all.set(id, sum(all.get(id) ?? ZERO, c));
  }
  let tokensIn = 0;
  let tokensOut = 0;
  let dollars = 0;
  const unpriced: { model: string; tokens: number }[] = [];
  for (const [model, t] of all) {
    const tokens = plus(plus(plus(t.inputTokens, t.cacheRead), t.cacheWrite5m), t.cacheWrite1h);
    tokensIn = plus(tokensIn, tokens);
    tokensOut = plus(tokensOut, t.outputTokens);
    const price = priceOf(model);
    if (price) {
      dollars +=
        (t.inputTokens * price.base +
          t.cacheWrite5m * price.write5m +
          t.cacheWrite1h * price.write1h +
          t.cacheRead * price.read +
          t.outputTokens * price.output) /
        1_000_000;
    } else {
      unpriced.push({ model, tokens: plus(tokens, t.outputTokens) });
    }
  }
  unpriced.sort((a, b) => b.tokens - a.tokens);
  return {
    since: ledger.since,
    tokensIn,
    tokensOut,
    cents: Math.round(dollars * 100),
    pricedOn: PRICED_ON,
    unpriced: unpriced.slice(0, 3),
  };
}

const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

/** A token count, short: 950, 12K, 3.4M, 1.18B. The unit follows the rounded number, so never 1000K or 1000.0M. */
export function shortCount(n: number): string {
  if (n < 1000) return String(n);
  const k = Math.round(n / 1000);
  if (k < 1000) return `${k}K`;
  const m = (n / 1_000_000).toFixed(1);
  if (Number(m) < 1000) return `${m}M`;
  return `${(n / 1_000_000_000).toFixed(2)}B`;
}

/** A day as the pane writes it: 11 Nov 2026. */
export function day(ms: number): string {
  const d = new Date(ms);
  return `${d.getDate()} ${MONTHS[d.getMonth()]} ${d.getFullYear()}`;
}

/** The pane's lines for the ledger: the total, then any model it couldn't price. */
export function ledgerLines(s: LedgerSummary): string[] {
  const since = day(s.since);
  const dollars = (s.cents / 100).toFixed(2);
  return [
    `This PC since ${since}: ${shortCount(s.tokensIn)} tokens in, ${shortCount(s.tokensOut)} out, about $${dollars} at API prices (${s.pricedOn}).`,
    ...s.unpriced.map((u) => `Not priced: ${shortCount(u.tokens)} tokens of ${u.model}.`),
  ];
}

/** What the total covers (3.2d, Dima's wording): every session up to the last Recount, then only this plugin's. */
export function scopeLine(counted: number | null): string {
  return counted === null
    ? 'Only World of Agents sessions so far. Press Recount to include everything.'
    : `All sessions up to ${day(counted)}; after that, only World of Agents sessions. Press Recount to include everything.`;
}
