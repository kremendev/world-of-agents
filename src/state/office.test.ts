import { describe, expect, it } from 'vitest';
import type { OfficeEvent } from '../events/schema';
import {
  INITIAL_OFFICE,
  MAX_MESSAGES,
  MAX_TASKS,
  officeReducer,
  workingCount,
  type OfficeState,
} from './office';

const apply = (events: readonly OfficeEvent[], state: OfficeState = INITIAL_OFFICE) =>
  events.reduce(officeReducer, state);

const task = (taskId: string, status: 'todo' | 'in-progress' | 'done' = 'todo'): OfficeEvent => ({
  type: 'task',
  taskId,
  title: `Task ${taskId}`,
  owner: 'backend',
  status,
  at: 0,
});

const message = (text: string): OfficeEvent => ({ type: 'message', from: 'lead', to: 'you', text, at: 0 });

describe('officeReducer', () => {
  it('starts with everyone idle, no tasks and no messages', () => {
    for (const agent of Object.values(INITIAL_OFFICE.agents)) expect(agent).toEqual({ state: 'idle' });
    expect(INITIAL_OFFICE.tasks).toEqual([]);
    expect(INITIAL_OFFICE.messages).toEqual([]);
  });

  describe('state events', () => {
    it("set that agent's state and task and leave the others alone", () => {
      const next = apply([{ type: 'state', agent: 'frontend', state: 'writing', taskId: 'ui', at: 5 }]);
      expect(next.agents.frontend).toEqual({ state: 'writing', taskId: 'ui' });
      expect(next.agents.backend).toBe(INITIAL_OFFICE.agents.backend);
    });

    it('clear the task when the event names none', () => {
      const next = apply([
        { type: 'state', agent: 'lead', state: 'reading', taskId: 'design', at: 0 },
        { type: 'state', agent: 'lead', state: 'waiting', at: 1 },
      ]);
      expect(next.agents.lead).toEqual({ state: 'waiting' });
    });
  });

  describe('task events', () => {
    it('add new tasks in the order they arrive', () => {
      const next = apply([task('a'), task('b'), task('c')]);
      expect(next.tasks.map((t) => t.id)).toEqual(['a', 'b', 'c']);
      expect(next.tasks[0]).toEqual({ id: 'a', title: 'Task a', owner: 'backend', status: 'todo' });
    });

    it('update a known task in place instead of adding it again', () => {
      const next = apply([task('a'), task('b'), task('a', 'done')]);
      expect(next.tasks.map((t) => [t.id, t.status])).toEqual([
        ['a', 'done'],
        ['b', 'todo'],
      ]);
    });

    it(`ignore new tasks past ${MAX_TASKS} but still update known ones`, () => {
      const full = apply(Array.from({ length: MAX_TASKS }, (_, i) => task(`t${i}`)));
      expect(full.tasks).toHaveLength(MAX_TASKS);
      expect(officeReducer(full, task('one-too-many'))).toBe(full);

      const updated = officeReducer(full, task('t0', 'done'));
      expect(updated.tasks).toHaveLength(MAX_TASKS);
      expect(updated.tasks[0]?.status).toBe('done');
    });
  });

  describe('message events', () => {
    it('append messages, oldest first', () => {
      const next = apply([message('one'), message('two')]);
      expect(next.messages).toEqual([
        { from: 'lead', to: 'you', text: 'one', at: 0 },
        { from: 'lead', to: 'you', text: 'two', at: 0 },
      ]);
    });

    it(`keep only the newest ${MAX_MESSAGES}`, () => {
      const many = Array.from({ length: MAX_MESSAGES + 5 }, (_, i) => message(`m${i}`));
      const next = apply(many);
      expect(next.messages).toHaveLength(MAX_MESSAGES);
      expect(next.messages[0]?.text).toBe('m5');
      expect(next.messages.at(-1)?.text).toBe(`m${MAX_MESSAGES + 4}`);
    });
  });

  it('leaves the state as it is for token events (nothing shows them yet)', () => {
    const before = apply([task('a')]);
    expect(officeReducer(before, { type: 'tokens', agent: 'lead', input: 10, output: 5, at: 0 })).toBe(
      before,
    );
  });

  it('never changes the state it is given', () => {
    const before = apply([task('a'), message('hi')]);
    const snapshot = structuredClone(before);
    for (const event of [
      { type: 'state', agent: 'designer', state: 'thinking', taskId: 'a', at: 0 },
      task('a', 'done'),
      task('b'),
      message('again'),
    ] satisfies OfficeEvent[]) {
      officeReducer(before, event);
    }
    expect(before).toEqual(snapshot);
  });
});

describe('workingCount', () => {
  it('counts thinking, reading and writing agents only', () => {
    expect(workingCount(INITIAL_OFFICE)).toBe(0);
    const busy = apply([
      { type: 'state', agent: 'lead', state: 'thinking', at: 0 },
      { type: 'state', agent: 'designer', state: 'reading', at: 0 },
      { type: 'state', agent: 'frontend', state: 'writing', at: 0 },
      { type: 'state', agent: 'backend', state: 'walking', at: 0 },
      { type: 'state', agent: 'reviewer', state: 'waiting', at: 0 },
    ]);
    expect(workingCount(busy)).toBe(3);
  });
});
