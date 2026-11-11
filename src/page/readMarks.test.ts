import { act, renderHook } from '@testing-library/react';
import { afterEach, beforeEach, describe, expect, it, vi, type MockInstance } from 'vitest';
import { MAX_MARKS, STORAGE_KEY, loadMarks, saveMarks, useReadMarks } from './readMarks';

const START = 'hall-start-id-01';
const OTHER = 'hall-start-id-02';

// Each spy is restored on its own: vi.restoreAllMocks() would also undo setup.ts's canvas mock (CLAUDE.md).
let spies: MockInstance[] = [];
/** Storage that throws on every read and write, as a blocked or broken one does. */
function blockStorage() {
  const blocked = () => {
    throw new Error('blocked');
  };
  spies = [
    vi.spyOn(Storage.prototype, 'getItem').mockImplementation(blocked),
    vi.spyOn(Storage.prototype, 'setItem').mockImplementation(blocked),
  ];
}

beforeEach(() => localStorage.clear());
afterEach(() => {
  for (const spy of spies) spy.mockRestore();
  spies = [];
});

describe('loadMarks and saveMarks', () => {
  it('keep the marks for one hall start: keys only', () => {
    saveMarks(START, ['to-you|lead|4', 'needs-you|backend|1']);
    expect(loadMarks(START)).toEqual(['to-you|lead|4', 'needs-you|backend|1']);
    expect(JSON.parse(localStorage.getItem(STORAGE_KEY)!)).toEqual({
      start: START,
      keys: ['to-you|lead|4', 'needs-you|backend|1'],
    });
  });

  it('give nothing for another hall start, and a save for it drops the old ones', () => {
    saveMarks(START, ['to-you|lead|4']);
    expect(loadMarks(OTHER)).toEqual([]);
    saveMarks(OTHER, ['failed|frontend|3']);
    expect(loadMarks(START)).toEqual([]);
    expect(loadMarks(OTHER)).toEqual(['failed|frontend|3']);
  });

  it(`keep the newest ${MAX_MARKS}`, () => {
    const keys = Array.from({ length: MAX_MARKS + 20 }, (_, i) => `to-you|lead|${i}`);
    saveMarks(START, keys);
    // What is stored, not only what is read back: storage must not grow past the cap.
    expect(JSON.parse(localStorage.getItem(STORAGE_KEY)!).keys).toEqual(keys.slice(-MAX_MARKS));
    expect(loadMarks(START)).toEqual(keys.slice(-MAX_MARKS));
  });

  it('ignore malformed storage, and drop each key that is not a mark', () => {
    for (const raw of [
      'not json',
      'null',
      '[]',
      '{"start":"hall-start-id-01"}',
      '{"start":"hall-start-id-01","keys":"x"}',
    ]) {
      localStorage.setItem(STORAGE_KEY, raw);
      expect(loadMarks(START), raw).toEqual([]);
    }
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({
        start: START,
        keys: [
          'to-you|lead|4',
          'to-you|lead|4<img src=x>',
          'agent text',
          7,
          'failed|nobody|3',
          'failed|frontend|3',
        ],
      }),
    );
    expect(loadMarks(START)).toEqual(['to-you|lead|4', 'failed|frontend|3']);
  });

  it('never throw when storage throws: nothing loads, nothing saves', () => {
    blockStorage();
    expect(loadMarks(START)).toEqual([]);
    expect(() => saveMarks(START, ['to-you|lead|4'])).not.toThrow();
  });
});

describe('useReadMarks', () => {
  it('marks a key read and keeps it for the hall start, so a reload still has it', () => {
    const first = renderHook(() => useReadMarks(START));
    act(() => first.result.current.markRead('to-you|lead|4'));
    expect(first.result.current.read.has('to-you|lead|4')).toBe(true);
    first.unmount();
    const reloaded = renderHook(() => useReadMarks(START));
    expect(reloaded.result.current.read.has('to-you|lead|4')).toBe(true);
  });

  it('keeps the demo and a hall with no start id in memory only', () => {
    const { result } = renderHook(() => useReadMarks(null));
    act(() => result.current.markRead('to-you|lead|4'));
    expect(result.current.read.has('to-you|lead|4')).toBe(true);
    expect(localStorage.getItem(STORAGE_KEY)).toBeNull();
  });

  it('starts from what is kept for another hall start: none, after a restart', () => {
    const { result, rerender } = renderHook(({ scope }) => useReadMarks(scope), {
      initialProps: { scope: START },
    });
    act(() => result.current.markRead('to-you|lead|4'));
    rerender({ scope: OTHER });
    expect(result.current.read.size).toBe(0);
  });

  it('works the same with storage blocked: the marks live in memory', () => {
    blockStorage();
    const { result } = renderHook(() => useReadMarks(START));
    act(() => result.current.markRead('needs-you|backend|1'));
    expect(result.current.read.has('needs-you|backend|1')).toBe(true);
  });

  it('takes only keys that look like marks', () => {
    const { result } = renderHook(() => useReadMarks(START));
    act(() => result.current.markRead('some agent text'));
    expect(result.current.read.size).toBe(0);
  });
});
