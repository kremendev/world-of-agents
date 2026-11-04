import { describe, expect, it, vi } from 'vitest';
import { parseEvent } from './schema';

// Before any import runs: Zod remembers the probe's answer, so a later spy would see nothing even without the fix.
const compiled = vi.hoisted(() => {
  const seen: unknown[][] = [];
  globalThis.Function = new Proxy(globalThis.Function, {
    construct(target, args) {
      seen.push(args);
      return Reflect.construct(target, args);
    },
  });
  return seen;
});

describe('parseEvent under a strict Content-Security-Policy', () => {
  it('never tries to compile code: the policy would report even a caught attempt', () => {
    const event = { type: 'state', agent: 'lead', state: 'idle', at: 0 };
    expect(parseEvent(event)).toEqual({ ok: true, event });
    expect(parseEvent({ ...event, html: '<img>' }).ok).toBe(false);
    expect(compiled).toEqual([]);
  });
});
