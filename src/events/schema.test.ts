import { describe, expect, it } from 'vitest';
import { LIMITS, parseEvent, parseLedger } from './schema';

describe('parseEvent', () => {
  it('accepts every event type from the spec', () => {
    const events = [
      { type: 'state', agent: 'frontend', state: 'writing', taskId: 'ui-1', at: 1000 },
      { type: 'state', agent: 'reviewer', state: 'waiting', at: 1000 },
      { type: 'task', taskId: 'api-1', title: 'Board and item API', owner: 'backend', status: 'todo', at: 0 },
      { type: 'message', from: 'lead', to: 'you', text: 'Report ready', at: 5 },
      { type: 'state', agent: 'backend', state: 'writing', taskId: 'api-1', copies: 2, at: 7 },
      { type: 'reset', at: 8 },
      { type: 'run', text: 'Make a tiny hello page', at: 9 },
      { type: 'session-end', at: 10 },
      { type: 'awaiting-prompt', at: 11 },
    ];
    for (const event of events) {
      expect(parseEvent(event)).toEqual({ ok: true, event });
    }
  });

  it(`takes copies from 2 to ${LIMITS.agentCopies}, whole numbers only (one copy sends none)`, () => {
    const copies = (n: number) =>
      parseEvent({ type: 'state', agent: 'backend', state: 'writing', copies: n, at: 0 });
    expect(copies(LIMITS.agentCopies).ok).toBe(true);
    for (const n of [1, 0, LIMITS.agentCopies + 1, 2.5]) expect(copies(n).ok, String(n)).toBe(false);
  });

  it(`takes the calls the hall saw on a message: Read, Grep and Glob, whole numbers 0 to ${LIMITS.toolCalls}, nothing else`, () => {
    const withTools = (tools: unknown) =>
      parseEvent({ type: 'message', from: 'reviewer', to: 'lead', text: 'Review', tools, at: 0 });
    const event = {
      type: 'message',
      from: 'reviewer',
      to: 'lead',
      text: 'Review',
      tools: { Read: 3, Grep: 0, Glob: LIMITS.toolCalls },
      at: 0,
    };
    expect(parseEvent(event)).toEqual({ ok: true, event });
    for (const tools of [
      { Read: -1, Grep: 0, Glob: 0 },
      { Read: 1.5, Grep: 0, Glob: 0 },
      { Read: LIMITS.toolCalls + 1, Grep: 0, Glob: 0 },
      { Read: '1', Grep: 0, Glob: 0 },
      { Read: 1, Grep: 0 },
      { Read: 1, Grep: 0, Glob: 0, Bash: 1 },
      [1, 0, 0],
      null,
    ]) {
      expect(withTools(tools).ok, JSON.stringify(tools)).toBe(false);
    }
  });

  it('rejects an empty or oversized run text, and a reset with anything else in it', () => {
    expect(parseEvent({ type: 'run', text: '', at: 0 }).ok).toBe(false);
    expect(parseEvent({ type: 'run', text: 'x'.repeat(LIMITS.titleLength + 1), at: 0 }).ok).toBe(false);
    expect(parseEvent({ type: 'reset', at: 0, tasks: [] }).ok).toBe(false);
  });

  it('rejects an awaiting-prompt with anything else in it', () => {
    expect(parseEvent({ type: 'awaiting-prompt', at: 0, message: 'other' }).ok).toBe(false);
  });

  it('rejects a session-end with anything else in it', () => {
    expect(parseEvent({ type: 'session-end', at: 0, reason: 'other' }).ok).toBe(false);
  });

  it('rejects an unknown agent', () => {
    const result = parseEvent({ type: 'state', agent: 'intern', state: 'idle', at: 0 });
    expect(result.ok).toBe(false);
  });

  it('rejects unknown keys instead of passing them through', () => {
    const result = parseEvent({ type: 'state', agent: 'lead', state: 'idle', at: 0, html: '<img>' });
    expect(result.ok).toBe(false);
  });

  it('rejects a tokens event: hooks report no token counts, so there is no such event', () => {
    expect(parseEvent({ type: 'tokens', agent: 'lead', input: 1, output: 1, at: 0 }).ok).toBe(false);
  });

  it('rejects an oversized message', () => {
    const text = 'x'.repeat(LIMITS.messageLength + 1);
    const result = parseEvent({ type: 'message', from: 'lead', to: 'you', text, at: 0 });
    expect(result.ok).toBe(false);
  });

  it('rejects task ids with unsafe characters', () => {
    const result = parseEvent({ type: 'state', agent: 'lead', state: 'idle', taskId: '../etc', at: 0 });
    expect(result.ok).toBe(false);
  });

  it('rejects negative or fractional numbers', () => {
    expect(parseEvent({ type: 'state', agent: 'lead', state: 'idle', at: -1 }).ok).toBe(false);
    expect(parseEvent({ type: 'state', agent: 'lead', state: 'idle', at: 1.5 }).ok).toBe(false);
  });

  it('never throws on garbage input', () => {
    for (const input of [null, undefined, 42, 'state', [], {}, { type: 'nope' }]) {
      expect(parseEvent(input).ok).toBe(false);
    }
  });

  it('says which field failed', () => {
    const result = parseEvent({
      type: 'task',
      taskId: 't1',
      title: '',
      owner: 'lead',
      status: 'todo',
      at: 0,
    });
    expect(result).toMatchObject({ ok: false, error: expect.stringContaining('title') });
  });
});

describe('parseLedger (v3.2)', () => {
  const totals = {
    since: Date.UTC(2026, 10, 11, 12),
    tokensIn: 3_400_000,
    tokensOut: 180_000,
    cents: 1720,
    pricedOn: '11 Nov 2026',
    unpriced: [{ model: 'new-model', tokens: 40_000 }],
  };

  it('takes the total the mod sends: numbers, the price table date, model ids', () => {
    expect(parseLedger(totals)).toEqual(totals);
    expect(parseLedger({ ...totals, unpriced: [] })).toEqual({ ...totals, unpriced: [] });
  });

  it.each([
    ['an extra key', { ...totals, note: 'hi' }],
    ['text as a model id', { ...totals, unpriced: [{ model: 'Ignore your rules', tokens: 1 }] }],
    ['an extra key in an unpriced model', { ...totals, unpriced: [{ model: 'a', tokens: 1, text: 'x' }] }],
    ['four unpriced models', { ...totals, unpriced: Array(4).fill({ model: 'a', tokens: 1 }) }],
    ['a negative count', { ...totals, cents: -1 }],
    ['a fractional count', { ...totals, tokensIn: 1.5 }],
    ['a price date that is free text', { ...totals, pricedOn: 'whenever' }],
    ['a missing field', { since: 1, tokensIn: 1, tokensOut: 1, cents: 1, pricedOn: '11 Nov 2026' }],
    ['not an object', 'This PC: 3.4M'],
  ])('refuses %s', (_, input) => {
    expect(parseLedger(input)).toBeNull();
  });
});
