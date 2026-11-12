// The token ledger (v3.2, docs/v3.2-plan.md): every turn's usage, the Lead's and each subagent's, added per model to a
// total kept in $.store, and what those tokens would cost at API prices. Only numbers and the engine's model ids: never
// text. A mod can't tell which account is logged in, so the total is "This PC".

import type { PaneLedger } from './types';

/** One model's running totals: the four counts the API reports for a request, summed, and how many turns. */
export type ModelTotals = {
  inputTokens: number;
  outputTokens: number;
  cacheRead: number;
  cacheWrite: number;
  turns: number;
};

/** The ledger as $.store keeps it: when counting began, and the totals per model id. */
export type Ledger = { since: number; models: Record<string, ModelTotals> };

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
/** The $.store key of past sessions (v3.2c): what hooks/ledger-past.mjs counted, and when. */
export const PAST_KEY = 'ledger-past';
/** The most ledger-past.mjs prints: 32 models of five counts are well under it. */
export const MAX_PAST = 8192;
/** At most this many model ids are kept apart; the rest count together as OTHER. */
export const MAX_MODELS = 32;
/** A model id the API reports: lower-case letters, digits, dots and dashes, starting with a letter. Else OTHER. */
const MODEL_ID = /^[a-z][a-z0-9.-]{0,63}$/;
export const OTHER = 'other';
const ZERO: ModelTotals = { inputTokens: 0, outputTokens: 0, cacheRead: 0, cacheWrite: 0, turns: 0 };
const COUNTS = ['inputTokens', 'outputTokens', 'cacheRead', 'cacheWrite', 'turns'] as const;

/**
 * API prices per million tokens, standard (not fast mode), read on PRICED_ON from
 * https://platform.claude.com/docs/en/about-claude/pricing. Cache writes at the 5-minute price: the counts don't say
 * which. Haiku 5.5 at its price for prompts up to 100,000 tokens. So the value is an estimate, and the pane says "about".
 */
export const PRICED_ON = '11 Nov 2026';
/** Per million tokens: base input, cache write, cache read, output. */
type Price = { base: number; write: number; read: number; output: number };
const PRICES: Readonly<Record<string, Price>> = {
  'claude-fable-5-2': { base: 8, write: 10, read: 0.2, output: 40 },
  'claude-opus-5-5': { base: 4, write: 5, read: 0.2, output: 20 },
  'claude-sonnet-5-5': { base: 2, write: 2.5, read: 0.1, output: 10 },
  'claude-haiku-5-5': { base: 0.1, write: 0.125, read: 0.01, output: 0.5 },
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

/** One turn added: a new ledger when there is none yet, starting `now`. Pure: the ledger given is left as it was. */
export function addTurn(ledger: Ledger | null, usage: TurnUsageLike, now: number): Ledger {
  const base = ledger ?? { since: now, models: {} };
  const id = typeof usage.model === 'string' && MODEL_ID.test(usage.model) ? usage.model : OTHER;
  const room = Object.keys(base.models).filter((m) => m !== OTHER).length < MAX_MODELS - 1;
  const key = Object.hasOwn(base.models, id) || room ? id : OTHER;
  const was = Object.hasOwn(base.models, key) ? base.models[key]! : ZERO;
  const totals: ModelTotals = {
    inputTokens: plus(was.inputTokens, count(usage.input_tokens)),
    outputTokens: plus(was.outputTokens, count(usage.output_tokens)),
    cacheRead: plus(was.cacheRead, count(usage.cache_read_input_tokens)),
    cacheWrite: plus(was.cacheWrite, count(usage.cache_creation_input_tokens)),
    turns: plus(was.turns, 1),
  };
  return { since: base.since, models: { ...base.models, [key]: totals } };
}

const isTotals = (v: unknown): v is ModelTotals =>
  typeof v === 'object' &&
  v !== null &&
  !Array.isArray(v) &&
  Object.keys(v).length === COUNTS.length &&
  COUNTS.every((k) => {
    const n = (v as Record<string, unknown>)[k];
    return typeof n === 'number' && Number.isSafeInteger(n) && n >= 0;
  });

/** The ledger $.store held, or null when there is none or it isn't one (then counting starts again). */
export function readLedger(value: unknown): Ledger | null {
  if (typeof value !== 'object' || value === null || Array.isArray(value)) return null;
  const { since, models } = value as Record<string, unknown>;
  if (typeof since !== 'number' || !Number.isSafeInteger(since) || since < 0) return null;
  if (typeof models !== 'object' || models === null || Array.isArray(models)) return null;
  const entries = Object.entries(models);
  if (entries.length > MAX_MODELS) return null;
  if (!entries.every(([id, totals]) => (id === OTHER || MODEL_ID.test(id)) && isTotals(totals))) return null;
  return { since, models: Object.fromEntries(entries) as Record<string, ModelTotals> };
}

/** Past sessions as $.store keeps them (v3.2c): the ledger counted before `before` (when the live one began), and when. */
export type Past = Ledger & { before: number; counted: number };

const whole = (n: unknown): n is number => typeof n === 'number' && Number.isSafeInteger(n) && n >= 0;
const keysAre = (v: object, keys: string) => Object.keys(v).sort().join() === keys;

/**
 * What ledger-past.mjs printed, when it is exactly a ledger of whole numbers per model id ({"since", "models"}, nothing
 * else, at most MAX_PAST characters); else null, and nothing of it is kept. The one child output the mod keeps (L7).
 */
export function pastOf(printed: string): Ledger | null {
  if (typeof printed !== 'string' || printed.length > MAX_PAST) return null;
  let value: unknown;
  try {
    value = JSON.parse(printed);
  } catch {
    return null;
  }
  if (typeof value !== 'object' || value === null || Array.isArray(value) || !keysAre(value, 'models,since'))
    return null;
  return readLedger(value);
}

/** Past sessions $.store held, or null when there are none or it isn't exactly that. */
export function readPast(value: unknown): Past | null {
  if (typeof value !== 'object' || value === null || Array.isArray(value)) return null;
  if (!keysAre(value, 'before,counted,models,since')) return null;
  const { before, counted } = value as Record<string, unknown>;
  const ledger = readLedger(value);
  if (ledger === null || !whole(before) || !whole(counted) || ledger.since > before) return null;
  return { ...ledger, before, counted };
}

/** Two ledgers as one: the counts per model added, model ids past MAX_MODELS together as OTHER, from the earlier since. */
export function merge(a: Ledger | null, b: Ledger | null): Ledger | null {
  if (a === null || b === null) {
    const one = a ?? b;
    return one === null ? null : { since: one.since, models: one.models };
  }
  const models: Record<string, ModelTotals> = { ...a.models };
  for (const [id, t] of Object.entries(b.models)) {
    const room = Object.keys(models).filter((m) => m !== OTHER).length < MAX_MODELS - 1;
    const key = Object.hasOwn(models, id) || room ? id : OTHER;
    const was = Object.hasOwn(models, key) ? models[key]! : ZERO;
    models[key] = {
      inputTokens: plus(was.inputTokens, t.inputTokens),
      outputTokens: plus(was.outputTokens, t.outputTokens),
      cacheRead: plus(was.cacheRead, t.cacheRead),
      cacheWrite: plus(was.cacheWrite, t.cacheWrite),
      turns: plus(was.turns, t.turns),
    };
  }
  return { since: Math.min(a.since, b.since), models };
}

/**
 * What the pane and the hall show: tokens in (input, cache reads and writes) and out, the value in whole cents, and the
 * tokens of models the price table doesn't know, by model id, the most first, at most three.
 */
export type LedgerSummary = PaneLedger;

export function summarize(ledger: Ledger): LedgerSummary {
  let tokensIn = 0;
  let tokensOut = 0;
  let dollars = 0;
  const unpriced: { model: string; tokens: number }[] = [];
  for (const [model, t] of Object.entries(ledger.models)) {
    tokensIn = plus(tokensIn, plus(plus(t.inputTokens, t.cacheRead), t.cacheWrite));
    tokensOut = plus(tokensOut, t.outputTokens);
    const price = priceOf(model);
    if (price) {
      dollars +=
        (t.inputTokens * price.base +
          t.cacheWrite * price.write +
          t.cacheRead * price.read +
          t.outputTokens * price.output) /
        1_000_000;
    } else {
      unpriced.push({ model, tokens: t.inputTokens + t.cacheRead + t.cacheWrite + t.outputTokens });
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

/** A token count, short: 950, 12K, 3.4M. */
export function shortCount(n: number): string {
  if (n < 1000) return String(n);
  if (n < 1_000_000) return `${Math.round(n / 1000)}K`;
  return `${(n / 1_000_000).toFixed(1)}M`;
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
