import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import type { OfficeEvent } from '../events/schema';
import { DEMO_RUN } from './demoRun';
import { createPlayer } from './player';

const idle = (at: number): OfficeEvent => ({ type: 'state', agent: 'lead', state: 'idle', at });

function setup(script: readonly unknown[] = [idle(0), idle(1000), idle(3000)]) {
  const handlers = {
    onEvent: vi.fn<(event: OfficeEvent) => void>(),
    onRestart: vi.fn<() => void>(),
    onEnd: vi.fn<() => void>(),
  };
  const sentAt = () => handlers.onEvent.mock.calls.map(([event]) => event.at);
  return { player: createPlayer(script, handlers), sentAt, ...handlers };
}

beforeEach(() => {
  vi.useFakeTimers();
});

afterEach(() => {
  vi.useRealTimers();
  vi.restoreAllMocks();
});

describe('player', () => {
  it('sends nothing until play()', () => {
    const { onEvent } = setup();
    vi.advanceTimersByTime(10_000);
    expect(onEvent).not.toHaveBeenCalled();
  });

  it('sends each event when its time comes', () => {
    const { player, sentAt } = setup();
    player.play();
    expect(sentAt()).toEqual([0]);
    vi.advanceTimersByTime(999);
    expect(sentAt()).toEqual([0]);
    vi.advanceTimersByTime(1);
    expect(sentAt()).toEqual([0, 1000]);
    vi.advanceTimersByTime(2000);
    expect(sentAt()).toEqual([0, 1000, 3000]);
  });

  it('sends events that share a time together, in script order', () => {
    const second: OfficeEvent = { type: 'state', agent: 'designer', state: 'idle', at: 1000 };
    const { player, onEvent } = setup([idle(1000), second]);
    player.play();
    vi.advanceTimersByTime(1000);
    expect(onEvent.mock.calls).toEqual([[idle(1000)], [second]]);
  });

  it('holds its place while paused', () => {
    const { player, sentAt } = setup();
    player.play();
    vi.advanceTimersByTime(600);
    player.pause();
    vi.advanceTimersByTime(10_000);
    expect(sentAt()).toEqual([0]);

    player.play();
    vi.advanceTimersByTime(399);
    expect(sentAt()).toEqual([0]);
    vi.advanceTimersByTime(1);
    expect(sentAt()).toEqual([0, 1000]);
  });

  it('ignores play() while already playing', () => {
    const { player, sentAt } = setup();
    player.play();
    vi.advanceTimersByTime(500);
    player.play();
    vi.advanceTimersByTime(500);
    expect(sentAt()).toEqual([0, 1000]);
    vi.advanceTimersByTime(10_000);
    expect(sentAt()).toEqual([0, 1000, 3000]);
  });

  it('calls onEnd once the last event is sent', () => {
    const { player, onEnd } = setup();
    player.play();
    vi.advanceTimersByTime(2999);
    expect(onEnd).not.toHaveBeenCalled();
    vi.advanceTimersByTime(1);
    expect(onEnd).toHaveBeenCalledOnce();
  });

  it('restart() tells the listener first, then plays again from the first event', () => {
    const { player, sentAt, onEvent, onRestart } = setup();
    player.play();
    vi.advanceTimersByTime(1500);
    player.restart();
    expect(onRestart).toHaveBeenCalledOnce();
    expect(onRestart.mock.invocationCallOrder[0]).toBeLessThan(onEvent.mock.invocationCallOrder[2]!);
    expect(sentAt()).toEqual([0, 1000, 0]);
    vi.advanceTimersByTime(1000);
    expect(sentAt()).toEqual([0, 1000, 0, 1000]);
  });

  it('restart() works after the run has ended', () => {
    const { player, sentAt, onEnd } = setup();
    player.play();
    vi.advanceTimersByTime(5000);
    player.restart();
    vi.advanceTimersByTime(5000);
    expect(sentAt()).toEqual([0, 1000, 3000, 0, 1000, 3000]);
    expect(onEnd).toHaveBeenCalledTimes(2);
  });

  it('restart(script) plays the new script from its start, through parseEvent() too; restart() replays it', () => {
    const warn = vi.spyOn(console, 'warn').mockImplementation(() => {});
    const { player, onEvent, onRestart } = setup();
    player.play();
    vi.advanceTimersByTime(1500);
    onEvent.mockClear();

    const said: OfficeEvent = { type: 'message', from: 'lead', to: 'you', text: 'New run', at: 0 };
    player.restart([said, { ...said, from: 'intern', at: 500 }, idle(2000)]);
    vi.advanceTimersByTime(5000);
    expect(onRestart).toHaveBeenCalledTimes(1);
    expect(warn).toHaveBeenCalledTimes(1);
    expect(onEvent.mock.calls.map(([event]) => event)).toEqual([said, idle(2000)]);

    onEvent.mockClear();
    player.restart();
    vi.advanceTimersByTime(5000);
    expect(onEvent.mock.calls.map(([event]) => event)).toEqual([said, idle(2000)]);
  });

  it('checks every entry with parseEvent(), drops the bad ones and warns without echoing them', () => {
    const warn = vi.spyOn(console, 'warn').mockImplementation(() => {});
    const { player, sentAt } = setup([
      idle(0),
      { type: 'state', agent: 'intern', state: 'idle', at: 500 },
      { ...idle(1000), html: '<img src=x onerror=alert(1)>' },
      idle(2000),
    ]);
    expect(warn).toHaveBeenCalledTimes(2);
    expect(warn.mock.calls.flat().join(' ')).not.toContain('<img');
    player.play();
    vi.advanceTimersByTime(5000);
    expect(sentAt()).toEqual([0, 2000]);
  });

  it('plays the whole demo run, every event once and in order', () => {
    const warn = vi.spyOn(console, 'warn');
    const { player, onEvent } = setup(DEMO_RUN);
    player.play();
    vi.advanceTimersByTime(DEMO_RUN.at(-1)!.at);
    expect(warn).not.toHaveBeenCalled();
    expect(onEvent.mock.calls.map(([event]) => event)).toEqual(DEMO_RUN);
  });
});
