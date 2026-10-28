import { describe, expect, it } from 'vitest';
import { AGENT_IDS, parseEvent } from '../events/schema';
import { destinationFor } from '../office/hall/destination';
import { restingWalkers, sendTo, step, walkerAt } from '../office/hall/walkers';
import { MAX_TASK_CHARS } from '../page/task';
import { INITIAL_OFFICE, officeReducer } from '../state/office';
import { DEMO_RUN, DEMO_TASK, STEP_MS, demoRun } from './demoRun';

describe('demo run', () => {
  it('passes parseEvent() unchanged, event by event', () => {
    for (const event of DEMO_RUN) expect(parseEvent(event)).toEqual({ ok: true, event });
  });

  it("quotes your task in the Lead's first line, and changes nothing else", () => {
    expect(DEMO_RUN).toEqual(demoRun(DEMO_TASK));
    const mine = demoRun('Build a forum');
    expect(mine).toHaveLength(DEMO_RUN.length);
    const changed = mine.filter((e, i) => JSON.stringify(e) !== JSON.stringify(DEMO_RUN[i]));
    expect(changed).toEqual([
      {
        type: 'message',
        from: 'lead',
        to: 'you',
        text: 'On it: Build a forum. Planning the work first.',
        at: STEP_MS,
      },
    ]);
  });

  it('still passes parseEvent() with the longest task the task bar lets through, even all emoji', () => {
    const longest = '🔥'.repeat(MAX_TASK_CHARS); // 1000 UTF-16 units, which is what Zod counts
    for (const event of demoRun(longest)) expect(parseEvent(event)).toEqual({ ok: true, event });
  });

  it('never sends "walking": the hall works out walks itself', () => {
    expect(DEMO_RUN.filter((e) => e.type === 'state' && e.state === 'walking')).toEqual([]);
  });

  it('gives every walk time to finish before the next step, so nobody ever has to queue', () => {
    const problems: string[] = [];
    const walkers = restingWalkers();
    let office = INITIAL_OFFICE;
    let i = 0;
    for (let now = 0; now <= 9 * STEP_MS; now += 10) {
      for (const id of AGENT_IDS) walkers[id] = step(walkers[id], now);
      if (now > 0 && now % STEP_MS === 0) {
        for (const id of AGENT_IDS) {
          if (walkerAt(walkers[id], now).walking)
            problems.push(`${id} still walking when step ${now / STEP_MS + 1} starts`);
        }
      }
      let changed = false;
      for (let e = DEMO_RUN[i]; e && e.at <= now; e = DEMO_RUN[i]) {
        office = officeReducer(office, e);
        i += 1;
        changed = true;
      }
      if (!changed) continue;
      for (const id of AGENT_IDS) {
        const to = destinationFor(id, office);
        if (to) walkers[id] = sendTo(walkers[id], to, now, false);
        if (walkers[id].next) problems.push(`${id} sent somewhere new mid-walk at ${now} ms`);
      }
    }
    expect(problems).toEqual([]);
  });

  it('is in time order', () => {
    DEMO_RUN.forEach((event, i) => {
      if (i > 0) expect(event.at).toBeGreaterThanOrEqual(DEMO_RUN[i - 1]!.at);
    });
  });

  it('has events in each of its nine steps and none after', () => {
    const steps = new Set(DEMO_RUN.map((e) => Math.floor(e.at / STEP_MS) + 1));
    expect([...steps]).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  });

  it('only puts agents on tasks that were announced before', () => {
    const announced = new Set<string>();
    for (const e of DEMO_RUN) {
      if (e.type === 'task') announced.add(e.taskId);
      if (e.type === 'state' && e.taskId) {
        expect(announced.has(e.taskId), `${e.agent} on "${e.taskId}" at ${e.at}`).toBe(true);
      }
    }
  });

  it('gives each task to the agent who owns its area, and never moves it', () => {
    const owners: Record<string, string> = {};
    for (const e of DEMO_RUN) {
      if (e.type !== 'task') continue;
      owners[e.taskId] ??= e.owner;
      expect(e.owner, e.taskId).toBe(owners[e.taskId]);
    }
    expect(owners).toEqual({
      plan: 'lead',
      design: 'designer',
      api: 'backend',
      ui: 'frontend',
      review: 'reviewer',
    });
  });

  it('ends with every task done, the report sent to you and everyone resting', () => {
    const end = DEMO_RUN.reduce(officeReducer, INITIAL_OFFICE);
    expect(end.tasks.map((t) => [t.id, t.status])).toEqual([
      ['plan', 'done'],
      ['design', 'done'],
      ['api', 'done'],
      ['ui', 'done'],
      ['review', 'done'],
    ]);
    for (const agent of Object.values(end.agents)) expect(agent.state).toBe('idle');
    expect(end.messages.at(-1)).toMatchObject({ from: 'lead', to: 'you' });
  });
});
