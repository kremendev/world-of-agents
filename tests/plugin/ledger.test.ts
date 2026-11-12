import { describe, expect, it } from 'vitest';
import {
  addTurn,
  ledgerLines,
  MAX_MODELS,
  merge,
  OTHER,
  pastOf,
  priceOf,
  readLedger,
  readPast,
  shortCount,
  summarize,
  type Ledger,
  type TurnUsageLike,
} from '../../plugin/hooks/mod/ledger';

const usage = (
  model: string,
  n: Partial<Record<'in' | 'out' | 'read' | 'write', number>> = {},
): TurnUsageLike => ({
  input_tokens: n.in ?? 0,
  output_tokens: n.out ?? 0,
  cache_read_input_tokens: n.read ?? 0,
  cache_creation_input_tokens: n.write ?? 0,
  model,
});
const NOW = Date.UTC(2026, 10, 11, 12);

describe('addTurn', () => {
  it('starts a ledger at the first turn, then adds each turn to its model, leaving the one given unchanged', () => {
    const first = addTurn(null, usage('claude-opus-5-5', { in: 10, out: 5, read: 100, write: 20 }), NOW);
    expect(first).toEqual({
      since: NOW,
      models: {
        'claude-opus-5-5': { inputTokens: 10, outputTokens: 5, cacheRead: 100, cacheWrite: 20, turns: 1 },
      },
    });
    const frozen = structuredClone(first);
    const second = addTurn(first, usage('claude-opus-5-5', { in: 1, out: 1 }), NOW + 9);
    expect(first).toEqual(frozen);
    expect(second.since).toBe(NOW);
    expect(second.models['claude-opus-5-5']).toEqual({
      inputTokens: 11,
      outputTokens: 6,
      cacheRead: 100,
      cacheWrite: 20,
      turns: 2,
    });
  });

  it('counts a model id it cannot trust under "other": odd characters, a prototype name, nothing', () => {
    let ledger: Ledger | null = null;
    for (const model of ['Claude Opus', '__proto__', '', 'a'.repeat(65), 'x<script>', 'constructor!'])
      ledger = addTurn(ledger, usage(model, { in: 1 }), NOW);
    expect(Object.keys(ledger!.models)).toEqual([OTHER]);
    expect(ledger!.models[OTHER]!.turns).toBe(6);
    expect(Object.getPrototypeOf(ledger!.models)).toBe(Object.prototype);
  });

  it(`keeps at most ${MAX_MODELS} models apart, the rest together under "other"`, () => {
    let ledger: Ledger | null = null;
    for (let i = 0; i < MAX_MODELS + 5; i += 1) ledger = addTurn(ledger, usage(`model-${i}`, { in: 1 }), NOW);
    expect(Object.keys(ledger!.models)).toHaveLength(MAX_MODELS);
    expect(ledger!.models[OTHER]!.turns).toBe(6);
  });

  it('takes a count that is not a whole, positive, finite number as 0, and rounds down', () => {
    const odd = {
      ...usage('claude-opus-5-5'),
      input_tokens: -5,
      output_tokens: Number.NaN,
      cache_read_input_tokens: 2.9,
      cache_creation_input_tokens: Infinity,
    };
    expect(addTurn(null, odd, NOW).models['claude-opus-5-5']).toEqual({
      inputTokens: 0,
      outputTokens: 0,
      cacheRead: 2,
      cacheWrite: 0,
      turns: 1,
    });
  });
});

describe('readLedger', () => {
  const good = addTurn(null, usage('claude-opus-5-5', { in: 1 }), NOW);

  it('reads back what the mod stored', () => {
    expect(readLedger(JSON.parse(JSON.stringify(good)))).toEqual(good);
  });

  it.each([
    ['nothing', undefined],
    ['a string', 'ledger'],
    ['an array', []],
    ['no since', { models: {} }],
    ['a negative since', { since: -1, models: {} }],
    ['models as an array', { since: 1, models: [] }],
    ['a bad model id', { since: 1, models: { 'Bad Id': good.models['claude-opus-5-5'] } }],
    [
      'a count that is not a whole number',
      {
        since: 1,
        models: { a: { inputTokens: 1.5, outputTokens: 0, cacheRead: 0, cacheWrite: 0, turns: 1 } },
      },
    ],
    ['an extra field', { since: 1, models: { a: { ...good.models['claude-opus-5-5'], text: 'hello' } } }],
    [
      'a missing field',
      { since: 1, models: { a: { inputTokens: 1, outputTokens: 0, cacheRead: 0, turns: 1 } } },
    ],
  ])('starts again from nothing for %s', (_, value) => {
    expect(readLedger(value)).toBeNull();
  });
});

describe('the value at API prices', () => {
  it("knows the team's models, also with a date after the id, and nothing else", () => {
    expect(priceOf('claude-opus-5-5')).toEqual({ base: 4, write: 5, read: 0.2, output: 20 });
    expect(priceOf('claude-opus-5-5-20261001')).toEqual(priceOf('claude-opus-5-5'));
    expect(priceOf('claude-sonnet-5-5')).toEqual({ base: 2, write: 2.5, read: 0.1, output: 10 });
    expect(priceOf('claude-opus-5')).toBeUndefined();
    expect(priceOf('toString')).toBeUndefined();
    expect(priceOf('claude-opus-5-5x')).toBeUndefined();
  });

  it('adds each kind of token at its own price, in whole cents', () => {
    let ledger = addTurn(
      null,
      usage('claude-opus-5-5', { in: 1_000_000, out: 100_000, read: 1_000_000, write: 200_000 }),
      NOW,
    );
    ledger = addTurn(ledger, usage('claude-sonnet-5-5', { in: 500_000, out: 10_000 }), NOW);
    // Opus: $4 + $2 + $0.20 + $1; Sonnet: $1 + $0.10.
    expect(summarize(ledger)).toEqual({
      since: NOW,
      tokensIn: 2_700_000,
      tokensOut: 110_000,
      cents: 830,
      pricedOn: '11 Nov 2026',
      unpriced: [],
    });
  });

  it('counts the tokens of a model it has no price for, and says so, the most first, three at most', () => {
    let ledger = addTurn(null, usage('claude-opus-5-5', { in: 1_000_000 }), NOW);
    for (const [model, n] of [
      ['new-model-a', 10],
      ['new-model-b', 300],
      ['new-model-c', 20],
      ['new-model-d', 5],
    ] as const)
      ledger = addTurn(ledger, usage(model, { in: n }), NOW);
    const summary = summarize(ledger);
    expect(summary.cents).toBe(400);
    expect(summary.tokensIn).toBe(1_000_335);
    expect(summary.unpriced).toEqual([
      { model: 'new-model-b', tokens: 300 },
      { model: 'new-model-c', tokens: 20 },
      { model: 'new-model-a', tokens: 10 },
    ]);
  });
});

describe("the pane's lines", () => {
  it('say "This PC", the date counting began, the tokens, "about" and the prices\' date', () => {
    const since = new Date(2026, 10, 11, 9).getTime();
    const summary = summarize(
      addTurn(null, usage('claude-opus-5-5', { in: 3_400_000, out: 180_000 }), since),
    );
    expect(ledgerLines(summary)).toEqual([
      'This PC since 11 Nov 2026: 3.4M tokens in, 180K out, about $17.20 at API prices (11 Nov 2026).',
    ]);
    const unpriced = summarize(addTurn(null, usage('new-model', { in: 40_000 }), since));
    expect(ledgerLines(unpriced)[1]).toBe('Not priced: 40K tokens of new-model.');
  });

  it('shortens counts: 950, 12K, 3.4M', () => {
    expect([950, 12_345, 3_400_000].map(shortCount)).toEqual(['950', '12K', '3.4M']);
  });
});

describe('past sessions (v3.2c, L7)', () => {
  const totals = (n: number) => ({ inputTokens: n, outputTokens: n, cacheRead: 0, cacheWrite: 0, turns: 1 });
  const ledger: Ledger = { since: NOW - 1000, models: { 'claude-opus-5-5': totals(5) } };

  it('pastOf takes exactly a ledger of whole numbers, as ledger-past.mjs prints it, and nothing else', () => {
    expect(pastOf(`${JSON.stringify(ledger)}\n`)).toEqual(ledger);
    for (const printed of [
      '',
      'text',
      JSON.stringify({ ...ledger, extra: 1 }),
      JSON.stringify({ since: ledger.since }),
      JSON.stringify({ ...ledger, models: { 'Not-An-Id': totals(1) } }),
      JSON.stringify({ ...ledger, models: { 'claude-opus-5-5': { ...totals(1), turns: 0.5 } } }),
      JSON.stringify([ledger]),
      JSON.stringify({ ...ledger, models: {}, pad: 'x'.repeat(9000) }),
      // A ledger after 9,000 spaces is still JSON, and too long.
      `${' '.repeat(9000)}${JSON.stringify(ledger)}`,
    ]) {
      expect(pastOf(printed)).toBeNull();
    }
  });

  it('readPast takes exactly what the mod stores: the ledger, its cut-off and when it was counted', () => {
    const kept = { ...ledger, before: NOW, counted: NOW + 5 };
    expect(readPast(kept)).toEqual(kept);
    expect(readPast({ ...kept, note: 'x' })).toBeNull();
    expect(readPast({ ...kept, before: NOW - 2000 })).toBeNull();
    expect(readPast({ ...kept, counted: -1 })).toBeNull();
    expect(readPast(ledger)).toBeNull();
  });

  it('merge adds the counts per model from the earlier since, and keeps at most 32 ids apart', () => {
    const live: Ledger = {
      since: NOW,
      models: { 'claude-opus-5-5': totals(1), 'claude-sonnet-5-5': totals(2) },
    };
    expect(merge(live, ledger)).toEqual({
      since: NOW - 1000,
      models: { 'claude-opus-5-5': { ...totals(6), turns: 2 }, 'claude-sonnet-5-5': totals(2) },
    });
    expect(merge(null, { ...ledger, before: NOW, counted: NOW } as Ledger)).toEqual(ledger);
    expect(merge(live, null)).toEqual(live);
    expect(merge(null, null)).toBeNull();
    const many = (from: number): Ledger => ({
      since: NOW,
      models: Object.fromEntries(Array.from({ length: 20 }, (_, i) => [`model-${from + i}`, totals(1)])),
    });
    const both = merge(many(0), many(100))!;
    expect(Object.keys(both.models)).toHaveLength(MAX_MODELS);
    expect(both.models[OTHER]?.turns).toBe(9);
  });
});
