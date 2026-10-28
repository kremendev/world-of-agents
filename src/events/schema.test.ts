import { describe, expect, it } from 'vitest';
import { LIMITS, parseEvent } from './schema';

describe('parseEvent', () => {
  it('accepts every event type from the spec', () => {
    const events = [
      { type: 'state', agent: 'frontend', state: 'writing', taskId: 'ui-1', at: 1000 },
      { type: 'state', agent: 'reviewer', state: 'waiting', at: 1000 },
      { type: 'task', taskId: 'api-1', title: 'Board and item API', owner: 'backend', status: 'todo', at: 0 },
      { type: 'message', from: 'lead', to: 'you', text: 'Report ready', at: 5 },
      { type: 'tokens', agent: 'lead', input: 1200, output: 300, at: 6 },
      { type: 'state', agent: 'backend', state: 'writing', taskId: 'api-1', copies: 2, at: 7 },
      { type: 'reset', at: 8 },
      { type: 'run', text: 'Make a tiny hello page', at: 9 },
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

  it('rejects an empty or oversized run text, and a reset with anything else in it', () => {
    expect(parseEvent({ type: 'run', text: '', at: 0 }).ok).toBe(false);
    expect(parseEvent({ type: 'run', text: 'x'.repeat(LIMITS.titleLength + 1), at: 0 }).ok).toBe(false);
    expect(parseEvent({ type: 'reset', at: 0, tasks: [] }).ok).toBe(false);
  });

  it('rejects an unknown agent', () => {
    const result = parseEvent({ type: 'state', agent: 'intern', state: 'idle', at: 0 });
    expect(result.ok).toBe(false);
  });

  it('rejects unknown keys instead of passing them through', () => {
    const result = parseEvent({ type: 'tokens', agent: 'lead', input: 1, output: 1, at: 0, html: '<img>' });
    expect(result.ok).toBe(false);
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
    expect(parseEvent({ type: 'tokens', agent: 'lead', input: -1, output: 0, at: 0 }).ok).toBe(false);
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
