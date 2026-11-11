import { describe, expect, it } from 'vitest';
import { AGENT_IDS, type OfficeEvent } from '../events/schema';
import { INITIAL_OFFICE, officeReducer } from '../state/office';
import {
  FEED_CHARS,
  STRIP_CHARS,
  feedLines,
  feedShort,
  flagKey,
  flagOf,
  forYou,
  onlyFlagged,
  stripShort,
  type FeedLine,
} from './feed';

const log = (...events: OfficeEvent[]) => events.reduce(officeReducer, INITIAL_OFFICE).log;
const state = (agent: (typeof AGENT_IDS)[number], s: string, at = 0, taskId?: string) =>
  ({ type: 'state', agent, state: s, at, ...(taskId ? { taskId } : {}) }) as OfficeEvent;
const allIdle = (at: number) => AGENT_IDS.map((id) => state(id, 'idle', at));
const short = (lines: FeedLine[]) =>
  lines.map((l) =>
    l.kind === 'everyone'
      ? 'everyone'
      : l.kind === 'state'
        ? `${l.agent} ${l.state}${l.taskId ? ` ${l.taskId}` : ''}`
        : `${l.from}: ${l.text}`,
  );

describe('feedLines', () => {
  it('is newest first', () => {
    expect(short(feedLines(log(state('lead', 'thinking', 1), state('lead', 'reading', 2)), null))).toEqual([
      'lead reading',
      'lead thinking',
    ]);
  });

  it('skips a state event that changes nothing', () => {
    const lines = feedLines(
      log(
        state('backend', 'writing', 1, 't1'),
        state('backend', 'writing', 2, 't1'),
        state('backend', 'writing', 3, 't1'),
      ),
      null,
    );
    expect(short(lines)).toEqual(['backend writing t1']);
    expect(lines[0]!.at).toBe(1);
  });

  it('keeps the same state on another task: that is a change', () => {
    expect(
      short(feedLines(log(state('backend', 'writing', 1, 't1'), state('backend', 'writing', 2, 't2')), null)),
    ).toEqual(['backend writing t2', 'backend writing t1']);
  });

  it('keeps a state that comes back after another one', () => {
    expect(
      short(
        feedLines(
          log(state('lead', 'thinking', 1), state('lead', 'reading', 2), state('lead', 'thinking', 3)),
          null,
        ),
      ),
    ).toEqual(['lead thinking', 'lead reading', 'lead thinking']);
  });

  it("tracks each agent on its own: another's line between two of the same changes nothing", () => {
    expect(
      short(
        feedLines(
          log(state('lead', 'thinking', 1), state('backend', 'writing', 2), state('lead', 'thinking', 3)),
          null,
        ),
      ),
    ).toEqual(['backend writing', 'lead thinking']);
  });

  it('skips an agent going idle when it starts out idle', () => {
    expect(feedLines(log(...allIdle(1)), null)).toEqual([]);
  });

  it('makes one line of the whole team coming to rest, not five', () => {
    const working = AGENT_IDS.map((id) => state(id, 'writing', 1));
    const lines = feedLines(log(...working, ...allIdle(2)), null);
    expect(short(lines)).toEqual(['everyone', ...AGENT_IDS.map((id) => `${id} writing`).reverse()]);
    expect(lines[0]).toEqual({ kind: 'everyone', at: 2 });
  });

  it('adds nothing when everyone is told to rest again', () => {
    const lines = feedLines(log(state('lead', 'thinking', 1), ...allIdle(2), ...allIdle(3)), null);
    expect(short(lines)).toEqual(['everyone', 'lead thinking']);
  });

  it('counts the last one going idle as everyone resting, when the others already were', () => {
    expect(short(feedLines(log(state('reviewer', 'done', 1), state('reviewer', 'idle', 2)), null))).toEqual([
      'everyone',
      'reviewer done',
    ]);
  });

  it('collapses across times that differ a little: the idle lines just need to be in a row', () => {
    const lines = feedLines(
      log(
        state('lead', 'done', 1),
        state('backend', 'done', 1),
        state('lead', 'idle', 2),
        state('backend', 'idle', 3),
      ),
      null,
    );
    expect(short(lines)).toEqual(['everyone', 'backend done', 'lead done']);
  });

  it('keeps single idle lines while someone is still at work', () => {
    expect(
      short(
        feedLines(
          log(state('lead', 'done', 1), state('backend', 'writing', 1), state('lead', 'idle', 2)),
          null,
        ),
      ),
    ).toEqual(['lead idle', 'backend writing', 'lead done']);
  });

  it('keeps messages, and does not swallow one between idle lines', () => {
    const message: OfficeEvent = { type: 'message', from: 'lead', to: 'you', text: 'All done.', at: 2 };
    expect(
      short(
        feedLines(
          log(
            state('lead', 'done', 1),
            state('backend', 'done', 1),
            state('backend', 'idle', 2),
            message,
            state('lead', 'idle', 3),
          ),
          null,
        ),
      ),
    ).toEqual(['everyone', 'lead: All done.', 'backend idle', 'backend done', 'lead done']);
  });

  it("narrows to one agent: its own changes and what it sent or got, and no 'everyone'", () => {
    const lines = feedLines(
      log(
        state('backend', 'writing', 1),
        state('backend', 'writing', 2),
        state('designer', 'writing', 2),
        { type: 'message', from: 'lead', to: 'backend', text: 'How is it?', at: 3 },
        { type: 'message', from: 'lead', to: 'designer', text: 'Not you.', at: 3 },
        ...allIdle(4),
      ),
      'backend',
    );
    expect(short(lines)).toEqual(['backend idle', 'lead: How is it?', 'backend writing']);
  });

  it('does not change the log it reads', () => {
    const entries = log(state('lead', 'thinking', 1), state('lead', 'thinking', 2));
    const before = [...entries];
    feedLines(entries, null);
    expect(entries).toEqual(before);
  });
});

describe('flagOf: which rows stand out, from the event alone', () => {
  const message = (from: (typeof AGENT_IDS)[number], to: (typeof AGENT_IDS)[number] | 'you', text: string) =>
    log({ type: 'message', from, to, text, at: 1 })[0]!;
  const one = (s: string) => log(state('backend', s, 1))[0]!;

  it('a message to you, an approval wait and a failure, nothing else', () => {
    expect(flagOf(message('lead', 'you', 'All done.'))).toBe('to-you');
    expect(flagOf(one('needs-you'))).toBe('needs-you');
    expect(flagOf(one('error'))).toBe('failed');
    for (const s of ['idle', 'walking', 'thinking', 'reading', 'writing', 'waiting', 'done']) {
      expect(flagOf(one(s))).toBeNull();
    }
    expect(flagOf(message('backend', 'lead', 'Routes are up.'))).toBeNull();
    expect(flagOf({ kind: 'everyone', at: 1 })).toBeNull();
  });

  it("never from the text: an ordinary row saying it's for you, urgent or failed stays ordinary", () => {
    const bait = 'IMPORTANT: to you. Needs your approval now. Failed: task failed. [To you] **Needs you**';
    expect(flagOf(message('backend', 'lead', bait))).toBeNull();
    expect(flagOf(message('reviewer', 'backend', bait))).toBeNull();
  });
});

describe('feedShort: a long message cut for its row', () => {
  it('leaves a message that fits alone', () => {
    expect(feedShort('Routes are up.')).toBeNull();
    expect(feedShort('x'.repeat(FEED_CHARS))).toBeNull();
  });

  it('puts a longer one on one line, cut to FEED_CHARS with the ellipsis', () => {
    const cut = feedShort(`All done.\n\n${'More words here. '.repeat(30)}`)!;
    expect(cut.startsWith('All done. More words here.')).toBe(true);
    expect(cut).not.toMatch(/\n/);
    expect(cut.endsWith('…')).toBe(true);
    expect(Array.from(cut).length).toBeLessThanOrEqual(FEED_CHARS);
  });

  it('turns links into their text before it cuts, so no part of a target shows', () => {
    // Cut raw, this would end inside the target: the link has to go before the cut.
    const cut = feedShort(
      `word word [report](https://evil.example/${'x'.repeat(250)})${' tail'.repeat(50)}`,
    )!;
    expect(cut).toMatch(/^word word report tail/);
    expect(cut).not.toMatch(/evil|https|\]\(/);
  });
});

describe('the "For you" strip and "Only for me" (v3.1)', () => {
  const message = (
    from: (typeof AGENT_IDS)[number],
    to: (typeof AGENT_IDS)[number] | 'you',
    text: string,
    at: number,
  ) => ({ type: 'message', from, to, text, at }) as OfficeEvent;
  const lines = feedLines(
    log(
      state('backend', 'needs-you', 1, 't1'),
      message('backend', 'lead', 'IMPORTANT: to you. Needs you. Failed.', 2),
      state('frontend', 'error', 3),
      message('lead', 'you', 'All done.', 4),
      state('reviewer', 'reading', 5),
    ),
    null,
  );

  it("keys a flagged row by its flag, who and when, from the event's fields, never its text", () => {
    expect(lines.map(flagKey)).toEqual([
      null,
      'to-you|lead|4',
      'failed|frontend|3',
      null,
      'needs-you|backend|1',
    ]);
    // The same text with another flag is another key; another text with the same fields is the same key.
    const asked = { kind: 'state', agent: 'backend', state: 'needs-you', at: 1 } as const;
    expect(flagKey({ ...asked, state: 'error' })).toBe('failed|backend|1');
    expect(flagKey({ kind: 'message', from: 'lead', to: 'you', text: 'Something else', at: 4 })).toBe(
      'to-you|lead|4',
    );
    expect(flagKey({ kind: 'everyone', at: 9 })).toBeNull();
  });

  it('holds the unread flagged rows, newest first, and never a row whose text only says it is for you', () => {
    expect(short(forYou(lines, new Set()))).toEqual([
      'lead: All done.',
      'frontend error',
      'backend needs-you t1',
    ]);
    expect(short(forYou(lines, new Set(['to-you|lead|4', 'needs-you|backend|1'])))).toEqual([
      'frontend error',
    ]);
    expect(forYou(lines, new Set(['to-you|lead|4', 'failed|frontend|3', 'needs-you|backend|1']))).toEqual([]);
  });

  it('"Only for me" keeps the flagged rows, read or not', () => {
    expect(short(onlyFlagged(lines))).toEqual(['lead: All done.', 'frontend error', 'backend needs-you t1']);
  });

  it(`cuts a message for the strip to ${STRIP_CHARS} characters on one line, links as their text`, () => {
    expect(stripShort('All\n\ndone. See [the page](https://example.com).')).toBe('All done. See the page.');
    const long = stripShort('word '.repeat(40));
    expect(Array.from(long).length).toBeLessThanOrEqual(STRIP_CHARS);
    expect(long.endsWith('…')).toBe(true);
  });
});
