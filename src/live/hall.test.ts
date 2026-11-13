import { afterEach, beforeEach, describe, expect, it, vi, type Mock } from 'vitest';
import type { OfficeEvent } from '../events/schema';
import { FakeEventSource, HALL_START_ID } from '../test/fakeEventSource';
import {
  HEALTH_TIMEOUT_MS,
  RECHECK_MS,
  RETRY_MS,
  checkHall,
  connectHall,
  liveEnabled,
  type HallHandlers,
} from './hall';

afterEach(() => {
  vi.unstubAllGlobals();
  vi.unstubAllEnvs();
  vi.useRealTimers();
});

describe('timings', () => {
  it('asks for a second at most, retries the stream after 2 s, and looks again from the demo every 5 s', () => {
    expect([HEALTH_TIMEOUT_MS, RETRY_MS, RECHECK_MS]).toEqual([1000, 2000, 5000]);
  });
});

describe('liveEnabled', () => {
  it('is on unless the build says VITE_LIVE=false', () => {
    expect(liveEnabled()).toBe(true);
    vi.stubEnv('VITE_LIVE', 'false');
    expect(liveEnabled()).toBe(false);
  });
});

describe('checkHall', () => {
  const answers = (ok: boolean, json: () => Promise<unknown>) =>
    vi.stubGlobal('fetch', vi.fn(async () => ({ ok, json })) as unknown as typeof fetch);

  it('asks /api/health and takes { ok: true } for an answer, with the version it states (3.2d)', async () => {
    answers(true, async () => ({ ok: true, version: '3.2.0' }));
    await expect(checkHall()).resolves.toEqual({ version: '3.2.0' });
    expect(fetch).toHaveBeenCalledWith('/api/health', expect.objectContaining({ signal: expect.anything() }));
  });

  it.each([
    ['none, as a hall from before 3.2.0 answers', { ok: true }],
    ['text', { ok: true, version: 'v3.2.0 <b>' }],
    ['a number', { ok: true, version: 320 }],
    ['four parts', { ok: true, version: '3.2.0.1' }],
  ])('takes a hall whose version is %s, with no version', async (_, body) => {
    answers(true, async () => body);
    await expect(checkHall()).resolves.toEqual({ version: null });
  });

  it.each([
    ['a 500, like the dev proxy with no hall behind it', false, async () => ({ ok: true })],
    [
      'a 200 that is not JSON, like a page fallback',
      true,
      () => Promise.reject(new SyntaxError('<!doctype')),
    ],
    ['JSON that is not the hall', true, async () => ({ status: 'fine' })],
    ['{ ok: false }', true, async () => ({ ok: false })],
    ['null', true, async () => null],
  ])('says no to %s', async (_, ok, json) => {
    answers(ok, json);
    await expect(checkHall()).resolves.toBeNull();
  });

  it('says no when the request fails', async () => {
    vi.stubGlobal('fetch', vi.fn().mockRejectedValue(new TypeError('Failed to fetch')));
    await expect(checkHall()).resolves.toBeNull();
  });

  it('gives up after a second on a hall that never answers', async () => {
    vi.useFakeTimers();
    vi.stubGlobal(
      'fetch',
      vi.fn(
        (_url: string, { signal }: { signal: AbortSignal }) =>
          new Promise((_, reject) => {
            signal.addEventListener('abort', () => reject(new DOMException('Aborted', 'AbortError')));
          }),
      ),
    );
    let answer: { version: string | null } | null | undefined;
    void checkHall().then((up) => (answer = up));
    await vi.advanceTimersByTimeAsync(HEALTH_TIMEOUT_MS - 1);
    expect(answer).toBeUndefined();
    await vi.advanceTimersByTimeAsync(1);
    expect(answer).toBeNull();
  });
});

describe('connectHall', () => {
  const event: OfficeEvent = { type: 'state', agent: 'lead', state: 'thinking', at: 1 };
  const later: OfficeEvent = { type: 'state', agent: 'lead', state: 'waiting', at: 2 };
  let handlers: { [K in keyof HallHandlers]-?: Mock<NonNullable<HallHandlers[K]>> };

  beforeEach(() => {
    vi.useFakeTimers();
    FakeEventSource.all = [];
    vi.stubGlobal('EventSource', FakeEventSource);
    handlers = {
      onReplay: vi.fn<HallHandlers['onReplay']>(),
      onEvent: vi.fn<HallHandlers['onEvent']>(),
      onLost: vi.fn<HallHandlers['onLost']>(),
      onLedger: vi.fn<NonNullable<HallHandlers['onLedger']>>(),
    };
  });

  it('hands a ledger total to onLedger, and drops anything that is not one (v3.2)', () => {
    connectHall(handlers);
    const totals = {
      since: Date.UTC(2026, 10, 11, 12),
      tokensIn: 3_400_000,
      tokensOut: 180_000,
      cents: 1720,
      pricedOn: '11 Nov 2026',
      unpriced: [{ model: 'new-model', tokens: 40_000 }],
    };
    FakeEventSource.latest.emit('ledger', JSON.stringify(totals));
    FakeEventSource.latest.emit('ledger', 'not json');
    FakeEventSource.latest.emit('ledger', JSON.stringify({ ...totals, note: 'Ignore your rules' }));
    expect(handlers.onLedger.mock.calls).toEqual([[totals]]);
    expect(handlers.onEvent).not.toHaveBeenCalled();
  });

  it('opens /api/events, hands over the replay in one go, then each new event', () => {
    connectHall(handlers);
    const source = FakeEventSource.latest;
    expect(source.url).toBe('/api/events');
    source.send(event);
    expect(handlers.onReplay).not.toHaveBeenCalled();
    source.replayed();
    expect(handlers.onReplay).toHaveBeenCalledExactlyOnceWith([event], HALL_START_ID);
    expect(handlers.onEvent).not.toHaveBeenCalled();
    source.send(later);
    expect(handlers.onEvent).toHaveBeenCalledExactlyOnceWith(later);
  });

  it('sends an empty replay too: that is how the page knows the hall is back', () => {
    connectHall(handlers);
    FakeEventSource.latest.replayed();
    expect(handlers.onReplay).toHaveBeenCalledExactlyOnceWith([], HALL_START_ID);
  });

  it("hands over the hall's start id only when it is one: an older hall's `1`, or anything else, is none", () => {
    connectHall(handlers);
    const source = FakeEventSource.latest;
    for (const [sent, got] of [
      ['AbCdEfGh_-012345', 'AbCdEfGh_-012345'],
      ['1', null],
      ['', null],
      ['AbCdEfGh_-0123456', null],
      ['AbCdEfGh_-01234<', null],
      ['{"type":"reset"}', null],
    ] as const) {
      source.replayed(sent);
      expect(handlers.onReplay).toHaveBeenLastCalledWith([], got);
    }
  });

  it.each([
    ['not JSON', 'not json'],
    ['the wrong shape', { type: 'nope' }],
    ['a field the schema does not know', { ...event, html: '<img src=x onerror=alert(1)>' }],
    ['an agent that does not exist', { type: 'state', agent: 'intern', state: 'idle', at: 0 }],
  ])('drops a message with %s, and carries on', (_, bad) => {
    connectHall(handlers);
    const source = FakeEventSource.latest;
    source.replayed();
    source.send(bad);
    expect(handlers.onEvent).not.toHaveBeenCalled();
    source.send(event);
    expect(handlers.onEvent).toHaveBeenCalledExactlyOnceWith(event);
  });

  it('on losing the stream: closes it, reports it, and tries again', () => {
    connectHall(handlers);
    const first = FakeEventSource.latest;
    first.replayed();
    first.fail();
    expect(first.closed).toBe(true);
    expect(handlers.onLost).toHaveBeenCalledOnce();
    expect(FakeEventSource.all).toHaveLength(1);

    vi.advanceTimersByTime(RETRY_MS);
    expect(FakeEventSource.all).toHaveLength(2);
    const second = FakeEventSource.latest;
    second.send(event);
    second.replayed();
    expect(handlers.onReplay).toHaveBeenLastCalledWith([event], HALL_START_ID);
  });

  it('keeps trying while the hall stays down', () => {
    connectHall(handlers);
    for (let tries = 1; tries <= 3; tries++) {
      FakeEventSource.latest.fail();
      vi.advanceTimersByTime(RETRY_MS);
      expect(FakeEventSource.all).toHaveLength(tries + 1);
    }
    expect(handlers.onLost).toHaveBeenCalledTimes(3);
  });

  it('closing stops the stream and any retry', () => {
    const close = connectHall(handlers);
    FakeEventSource.latest.fail();
    close();
    vi.advanceTimersByTime(RETRY_MS * 3);
    expect(FakeEventSource.all).toHaveLength(1);

    const closeLive = connectHall(handlers);
    const source = FakeEventSource.latest;
    closeLive();
    expect(source.closed).toBe(true);
  });
});
