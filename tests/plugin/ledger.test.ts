import { describe, expect, it } from 'vitest';
import {
  addTurn,
  ledgerLines,
  MAX_MODELS,
  MAX_RECOUNT,
  MAX_SESSIONS,
  OTHER,
  priceOf,
  readLedger,
  recount,
  recountOf,
  scopeLine,
  shortCount,
  summarize,
  type Counts,
  type Ledger,
  type Recount,
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
const S1 = '11111111-1111-4111-8111-111111111111';
const S2 = '22222222-2222-4222-8222-222222222222';
const S3 = '33333333-3333-4333-8333-333333333333';
const counts = (n: Partial<Counts> = {}): Counts => ({
  inputTokens: 0,
  outputTokens: 0,
  cacheRead: 0,
  cacheWrite5m: 0,
  cacheWrite1h: 0,
  ...n,
});
const session = (n: number) => `${String(n).padStart(8, '0')}-0000-4000-8000-000000000000`;

describe('addTurn', () => {
  it('starts a ledger at the first turn, then adds each turn to its session and model, leaving the one given unchanged', () => {
    const first = addTurn(
      null,
      S1,
      usage('claude-opus-5-5', { in: 10, out: 5, read: 100, write: 20 }),
      true,
      NOW,
    );
    expect(first).toEqual({
      since: NOW,
      counted: null,
      sessions: {
        [S1]: {
          'claude-opus-5-5': counts({ inputTokens: 10, outputTokens: 5, cacheRead: 100, cacheWrite1h: 20 }),
        },
      },
      earlier: {},
    });
    const frozen = structuredClone(first);
    const second = addTurn(first, S1, usage('claude-opus-5-5', { in: 1, out: 1 }), true, NOW + 9);
    expect(first).toEqual(frozen);
    expect(second.since).toBe(NOW);
    expect(second.sessions[S1]!['claude-opus-5-5']).toEqual(
      counts({ inputTokens: 11, outputTokens: 6, cacheRead: 100, cacheWrite1h: 20 }),
    );
    const other = addTurn(second, S2, usage('claude-opus-5-5', { in: 7 }), true, NOW + 10);
    expect(Object.keys(other.sessions)).toEqual([S1, S2]);
  });

  // The inference Dima asked to pin (3.2d): the engine's counts don't say how long a cache write lasts. On 13 Nov every
  // main-thread response on this PC wrote 1-hour cache and every subagent response 5-minute cache.
  it("counts the Lead's cache writes as 1-hour ones and a subagent's as 5-minute ones", () => {
    const lead = addTurn(null, S1, usage('claude-opus-5-5', { write: 1000 }), true, NOW);
    expect(lead.sessions[S1]!['claude-opus-5-5']).toEqual(counts({ cacheWrite1h: 1000 }));
    const sub = addTurn(lead, S1, usage('claude-sonnet-5-5', { write: 300 }), false, NOW);
    expect(sub.sessions[S1]!['claude-sonnet-5-5']).toEqual(counts({ cacheWrite5m: 300 }));
    // Opus: 1,000 at $8 a million; Sonnet: 300 at $2.50. Priced at 5 minutes, the Lead's would be $5.
    expect(
      summarize(addTurn(null, S1, usage('claude-opus-5-5', { write: 1_000_000 }), true, NOW)).cents,
    ).toBe(800);
    expect(
      summarize(addTurn(null, S1, usage('claude-opus-5-5', { write: 1_000_000 }), false, NOW)).cents,
    ).toBe(500);
  });

  it('counts a turn whose session id is not one in earlier, where no Recount will replace it', () => {
    for (const id of ['', 'not-a-session', 'AAAAAAAA-1111-4111-8111-111111111111', `${S1}x`, '__proto__']) {
      const ledger = addTurn(null, id, usage('claude-opus-5-5', { in: 3 }), true, NOW);
      expect(ledger.sessions).toEqual({});
      expect(ledger.earlier).toEqual({ 'claude-opus-5-5': counts({ inputTokens: 3 }) });
    }
  });

  it('counts a model id it cannot trust under "other": odd characters, a prototype name, nothing', () => {
    let ledger: Ledger | null = null;
    for (const model of ['Claude Opus', '__proto__', '', 'a'.repeat(65), 'x<script>', 'constructor!'])
      ledger = addTurn(ledger, S1, usage(model, { in: 1 }), true, NOW);
    expect(Object.keys(ledger!.sessions[S1]!)).toEqual([OTHER]);
    expect(ledger!.sessions[S1]![OTHER]!.inputTokens).toBe(6);
    expect(Object.getPrototypeOf(ledger!.sessions[S1])).toBe(Object.prototype);
  });

  it(`keeps at most ${MAX_MODELS} models apart in a session, the rest together under "other"`, () => {
    let ledger: Ledger | null = null;
    for (let i = 0; i < MAX_MODELS + 5; i += 1)
      ledger = addTurn(ledger, S1, usage(`model-${i}`, { in: 1 }), true, NOW);
    expect(Object.keys(ledger!.sessions[S1]!)).toHaveLength(MAX_MODELS);
    expect(ledger!.sessions[S1]![OTHER]!.inputTokens).toBe(6);
  });

  it(`keeps at most ${MAX_SESSIONS} sessions apart; the oldest go into earlier, and the total stays`, () => {
    let ledger: Ledger | null = null;
    for (let i = 0; i < MAX_SESSIONS + 3; i += 1)
      ledger = addTurn(ledger, session(i), usage('m', { in: 1 }), true, NOW);
    expect(Object.keys(ledger!.sessions)).toHaveLength(MAX_SESSIONS);
    expect(Object.keys(ledger!.sessions)[0]).toBe(session(3));
    expect(ledger!.earlier).toEqual({ m: counts({ inputTokens: 3 }) });
    expect(summarize(ledger!).tokensIn).toBe(MAX_SESSIONS + 3);
  });

  it('takes a count that is not a whole, positive, finite number as 0, and rounds down', () => {
    const odd = {
      ...usage('claude-opus-5-5'),
      input_tokens: -5,
      output_tokens: Number.NaN,
      cache_read_input_tokens: 2.9,
      cache_creation_input_tokens: Infinity,
    };
    expect(addTurn(null, S1, odd, true, NOW).sessions[S1]!['claude-opus-5-5']).toEqual(
      counts({ cacheRead: 2 }),
    );
  });
});

describe('readLedger', () => {
  const good = addTurn(
    addTurn(null, S1, usage('claude-opus-5-5', { in: 1 }), true, NOW),
    'x',
    usage('m'),
    true,
    NOW,
  );
  const opus = good.sessions[S1]!['claude-opus-5-5']!;

  it('reads back what the mod stored', () => {
    expect(readLedger(JSON.parse(JSON.stringify(good)))).toEqual(good);
    expect(readLedger({ ...good, counted: NOW })).toEqual({ ...good, counted: NOW });
  });

  it.each([
    ['nothing', undefined],
    ['a string', 'ledger'],
    ['an array', []],
    ["3.2c's shape, before 3.2d", { since: 1, models: { 'claude-opus-5-5': { ...opus, turns: 1 } } }],
    ['no since', { counted: null, sessions: {}, earlier: {} }],
    ['an extra key', { ...good, note: 'x' }],
    ['a negative since', { ...good, since: -1 }],
    ['counted as text', { ...good, counted: 'today' }],
    ['sessions as an array', { ...good, sessions: [] }],
    ['a session id that is not one', { ...good, sessions: { 'not-a-session': { m: opus } } }],
    ['a bad model id', { ...good, sessions: { [S1]: { 'Bad Id': opus } } }],
    ['a count that is not a whole number', { ...good, earlier: { m: { ...opus, inputTokens: 1.5 } } }],
    ['an extra count', { ...good, sessions: { [S1]: { m: { ...opus, text: 'hello' } } } }],
    ['a missing count', { ...good, sessions: { [S1]: { m: { ...opus, cacheWrite1h: undefined } } } }],
    [
      'too many models',
      { ...good, earlier: Object.fromEntries(Array.from({ length: 9 }, (_, i) => [`m${i}`, opus])) },
    ],
    [
      'too many sessions',
      {
        ...good,
        sessions: Object.fromEntries(Array.from({ length: MAX_SESSIONS + 1 }, (_, i) => [session(i), {}])),
      },
    ],
  ])('starts again from nothing for %s', (_, value) => {
    expect(readLedger(JSON.parse(JSON.stringify(value ?? null)))).toBeNull();
  });
});

describe('the value at API prices', () => {
  it("knows the team's models, also with a date after the id, and nothing else", () => {
    expect(priceOf('claude-opus-5-5')).toEqual({ base: 4, write5m: 5, write1h: 8, read: 0.2, output: 20 });
    expect(priceOf('claude-opus-5-5-20261001')).toEqual(priceOf('claude-opus-5-5'));
    expect(priceOf('claude-sonnet-5-5')).toEqual({
      base: 2,
      write5m: 2.5,
      write1h: 4,
      read: 0.1,
      output: 10,
    });
    expect(priceOf('claude-haiku-5-5')).toEqual({
      base: 0.1,
      write5m: 0.125,
      write1h: 0.2,
      read: 0.01,
      output: 0.5,
    });
    expect(priceOf('claude-fable-5-2')).toEqual({ base: 8, write5m: 10, write1h: 16, read: 0.2, output: 40 });
    expect(priceOf('claude-opus-5')).toBeUndefined();
    expect(priceOf('toString')).toBeUndefined();
    expect(priceOf('claude-opus-5-5x')).toBeUndefined();
  });

  it('adds each kind of token at its own price, over every session and earlier, in whole cents', () => {
    let ledger = addTurn(
      null,
      S1,
      usage('claude-opus-5-5', { in: 1_000_000, out: 100_000, read: 1_000_000, write: 200_000 }),
      true,
      NOW,
    );
    ledger = addTurn(
      ledger,
      S2,
      usage('claude-sonnet-5-5', { in: 500_000, out: 10_000, write: 100_000 }),
      false,
      NOW,
    );
    ledger = addTurn(ledger, 'no-id', usage('claude-opus-5-5', { in: 250_000 }), true, NOW);
    // Opus: $4 + $2 + $0.20 + 200K at $8 = $1.60, then $1; Sonnet: $1 + $0.10 + 100K at $2.50 = $0.25.
    expect(summarize(ledger)).toEqual({
      since: NOW,
      tokensIn: 3_050_000,
      tokensOut: 110_000,
      cents: 1015,
      pricedOn: '13 Nov 2026',
      unpriced: [],
    });
  });

  it('counts the tokens of a model it has no price for, and says so, the most first, three at most', () => {
    let ledger = addTurn(null, S1, usage('claude-opus-5-5', { in: 1_000_000 }), true, NOW);
    for (const [model, n] of [
      ['new-model-a', 10],
      ['new-model-b', 300],
      ['new-model-c', 20],
      ['new-model-d', 5],
    ] as const)
      ledger = addTurn(ledger, S2, usage(model, { in: n }), true, NOW);
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
      addTurn(null, S1, usage('claude-opus-5-5', { in: 3_400_000, out: 180_000 }), true, since),
    );
    expect(ledgerLines(summary)).toEqual([
      'This PC since 11 Nov 2026: 3.4M tokens in, 180K out, about $17.20 at API prices (13 Nov 2026).',
    ]);
    const unpriced = summarize(addTurn(null, S1, usage('new-model', { in: 40_000 }), true, since));
    expect(ledgerLines(unpriced)[1]).toBe('Not priced: 40K tokens of new-model.');
  });

  it('shortens counts: 950, 12K, 3.4M, 1.18B, and the unit follows the rounded number', () => {
    expect([950, 12_345, 3_400_000, 1_184_100_000].map(shortCount)).toEqual(['950', '12K', '3.4M', '1.18B']);
    expect([999, 1000, 999_499, 999_500, 999_949_999, 999_950_000, 12_345_678_901].map(shortCount)).toEqual([
      '999',
      '1K',
      '999K',
      '1.0M',
      '999.9M',
      '1.00B',
      '12.35B',
    ]);
  });

  it("say what the total covers, in Dima's words", () => {
    expect(scopeLine(null)).toBe(
      'Only World of Agents sessions so far. Press Recount to include everything.',
    );
    expect(scopeLine(new Date(2026, 10, 13, 18).getTime())).toBe(
      'All sessions up to 13 Nov 2026; after that, only World of Agents sessions. Press Recount to include everything.',
    );
  });
});

describe('Recount (3.2d)', () => {
  const opus = (n: number) => ({ 'claude-opus-5-5': counts({ inputTokens: n }) });
  const found = (sessions: Recount['sessions'], since = NOW - 1000): Recount => ({ since, sessions });
  const table = (sessions: Ledger['sessions'], more: Partial<Ledger> = {}): Ledger => ({
    since: NOW,
    counted: null,
    sessions,
    earlier: {},
    ...more,
  });
  const AFTER = NOW + 60_000;

  it('recountOf takes exactly what ledger-past.mjs prints, and nothing else', () => {
    const good = found({ [S1]: { settled: true, models: opus(5) }, [S2]: { settled: false, models: {} } });
    expect(recountOf(`${JSON.stringify(good)}\n`)).toEqual(good);
    for (const printed of [
      '',
      'text',
      JSON.stringify({ ...good, extra: 1 }),
      JSON.stringify({ since: good.since }),
      JSON.stringify({ ...good, since: -1 }),
      JSON.stringify({ ...good, sessions: { 'not-a-session': { settled: true, models: {} } } }),
      JSON.stringify({ ...good, sessions: { [S1]: { settled: 'yes', models: {} } } }),
      JSON.stringify({ ...good, sessions: { [S1]: { settled: true, models: {}, note: 'x' } } }),
      JSON.stringify({ ...good, sessions: { [S1]: { settled: true, models: { 'Not-An-Id': counts() } } } }),
      JSON.stringify({
        ...good,
        sessions: { [S1]: { settled: true, models: { m: { ...counts(), inputTokens: 0.5 } } } },
      }),
      JSON.stringify([good]),
      JSON.stringify({
        since: 1,
        sessions: Object.fromEntries(
          Array.from({ length: MAX_SESSIONS + 1 }, (_, i) => [session(i), { settled: true, models: {} }]),
        ),
      }),
      // Still JSON after a megabyte of spaces, and too long.
      `${' '.repeat(MAX_RECOUNT)}${JSON.stringify(good)}`,
    ]) {
      expect(recountOf(printed)).toBeNull();
    }
  });

  it("a settled session takes the transcript's count in place of the stored one, and a new one is added", () => {
    const before = table({ [S1]: opus(10) });
    const next = recount(
      before,
      before,
      found({ [S1]: { settled: true, models: opus(12) }, [S2]: { settled: true, models: opus(3) } }),
      AFTER,
    );
    expect(next).toEqual({
      since: NOW - 1000,
      counted: AFTER,
      sessions: { [S1]: opus(12), [S2]: opus(3) },
      earlier: {},
    });
  });

  it('a session not settled keeps what it has, and one not stored yet is left for a later Recount', () => {
    const before = table({ [S1]: opus(10) });
    const next = recount(
      before,
      before,
      found({ [S1]: { settled: false, models: opus(4) }, [S2]: { settled: false, models: opus(3) } }),
      AFTER,
    );
    expect(next.sessions).toEqual({ [S1]: opus(10) });
  });

  it('a session whose count changed while Recount ran keeps it: a turn ended meanwhile', () => {
    const before = table({ [S1]: opus(10) });
    const now = table({ [S1]: opus(15), [S3]: opus(1) });
    const next = recount(
      now,
      before,
      found({ [S1]: { settled: true, models: opus(12) }, [S3]: { settled: true, models: opus(2) } }),
      AFTER,
    );
    expect(next.sessions).toEqual({ [S1]: opus(15), [S3]: opus(1) });
  });

  it('a session whose transcript is gone keeps its numbers in earlier: the total never goes down', () => {
    const before = table({ [S1]: opus(10), [S2]: opus(5) }, { earlier: opus(1) });
    const next = recount(before, before, found({ [S1]: { settled: true, models: opus(10) } }), AFTER);
    expect(next.sessions).toEqual({ [S1]: opus(10) });
    expect(next.earlier).toEqual(opus(6));
    expect(summarize(next).tokensIn).toBe(summarize(before).tokensIn);
    // One that appeared while it ran is not taken for gone.
    const during = table({ [S1]: opus(10), [S3]: opus(4) });
    expect(recount(during, before, found({}), AFTER).sessions).toEqual({ [S3]: opus(4) });
    // Nor one whose first turn ended while it ran, with nothing stored at the press.
    expect(recount(table({ [S3]: opus(4) }), null, found({}), AFTER).sessions).toEqual({ [S3]: opus(4) });
  });

  it('from nothing: the transcripts are the ledger, since their first response; with none, since now', () => {
    const next = recount(null, null, found({ [S1]: { settled: true, models: opus(7) } }, NOW - 5000), AFTER);
    expect(next).toEqual({ since: NOW - 5000, counted: AFTER, sessions: { [S1]: opus(7) }, earlier: {} });
    expect(recount(null, null, found({}), AFTER)).toEqual({
      since: AFTER,
      counted: AFTER,
      sessions: {},
      earlier: {},
    });
  });

  it('counts each response once across a Recount and the turns after it', () => {
    // A settled session replaced, then a new turn in it: the turn adds to the transcript's count, once.
    const before = addTurn(null, S1, usage('claude-opus-5-5', { in: 100 }), true, NOW);
    const after = addTurn(
      recount(before, before, found({ [S1]: { settled: true, models: opus(100) } }), AFTER),
      S1,
      usage('claude-opus-5-5', { in: 50 }),
      true,
      AFTER,
    );
    expect(after.sessions[S1]).toEqual(opus(150));
  });
});
