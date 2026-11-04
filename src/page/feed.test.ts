import { describe, expect, it } from 'vitest';
import { AGENT_IDS, type OfficeEvent } from '../events/schema';
import { INITIAL_OFFICE, officeReducer } from '../state/office';
import { feedLines, type FeedLine } from './feed';

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
