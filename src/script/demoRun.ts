import type { AgentId, AgentState, OfficeEvent, TaskStatus } from '../events/schema';

/** How long each of the nine steps of the demo run lasts, in milliseconds. Long enough for every walk. */
export const STEP_MS = 8000;

/** When step n (1 to 9) starts, in milliseconds from the start of the run. */
const step = (n: number) => (n - 1) * STEP_MS;

const TASKS = {
  plan: { title: 'Write spec.md and tasks.md', owner: 'lead' },
  design: { title: 'Dashboard screens and layout', owner: 'designer' },
  api: { title: 'Board and item API', owner: 'backend' },
  ui: { title: 'Dashboard UI from the design', owner: 'frontend' },
  review: { title: 'Review the diff', owner: 'reviewer' },
} as const satisfies Record<string, { title: string; owner: AgentId }>;

type TaskId = keyof typeof TASKS;

const task = (taskId: TaskId, status: TaskStatus, at: number): OfficeEvent => ({
  type: 'task',
  taskId,
  ...TASKS[taskId],
  status,
  at,
});

const act = (agent: AgentId, state: AgentState, at: number, taskId?: TaskId): OfficeEvent =>
  taskId ? { type: 'state', agent, state, taskId, at } : { type: 'state', agent, state, at };

const say = (from: AgentId, to: AgentId | 'you', text: string, at: number): OfficeEvent => ({
  type: 'message',
  from,
  to,
  text,
  at,
});

/**
 * The scripted "Create a dashboard" run from the v1 spec. `at` is milliseconds from the start of the run.
 * Events carry no positions and no 'walking': the hall works out where each agent goes from its state and
 * task (the Reviewer reading "ui" walks to the Frontend desk), so a real v2 run can send the same events.
 */
export const DEMO_RUN: readonly OfficeEvent[] = [
  // 1. Everyone rests.
  act('lead', 'idle', step(1)),
  act('designer', 'idle', step(1)),
  act('frontend', 'idle', step(1)),
  act('backend', 'idle', step(1)),
  act('reviewer', 'idle', step(1)),

  // 2. The task arrives and the Lead goes to its desk under the dashboard to plan it.
  say('lead', 'you', 'On it: Create a dashboard. Planning the work first.', step(2)),
  task('plan', 'in-progress', step(2)),
  act('lead', 'thinking', step(2), 'plan'),

  // 3. The Lead splits the work; the devs collect their scrolls in the Lead's room.
  act('lead', 'writing', step(3), 'plan'),
  task('design', 'todo', step(3) + 300),
  task('api', 'todo', step(3) + 500),
  task('ui', 'todo', step(3) + 700),
  task('review', 'todo', step(3) + 900),
  act('designer', 'reading', step(3) + 1000, 'design'),
  act('backend', 'reading', step(3) + 1000, 'api'),
  act('frontend', 'reading', step(3) + 1000, 'ui'),
  task('plan', 'done', step(3) + 1500),
  act('lead', 'waiting', step(3) + 1500),

  // 4. Designer and Backend start, Frontend waits for the design, and the Lead checks in on the dev room.
  task('design', 'in-progress', step(4)),
  act('designer', 'writing', step(4), 'design'),
  task('api', 'in-progress', step(4)),
  act('backend', 'reading', step(4), 'api'),
  act('frontend', 'waiting', step(4), 'ui'),
  act('lead', 'reading', step(4) + 1000, 'api'),
  say('lead', 'backend', "How's the API coming?", step(4) + 6500),
  say('backend', 'lead', 'Routes are up. Hammering out the rest.', step(4) + 7000),

  // 5. The design is done; both orcs start writing (and smashing their keyboards).
  task('design', 'done', step(5)),
  act('designer', 'done', step(5), 'design'),
  say('designer', 'frontend', 'Screens are on your desk.', step(5)),
  act('lead', 'waiting', step(5)),
  task('ui', 'in-progress', step(5) + 1000),
  act('frontend', 'writing', step(5) + 1000, 'ui'),
  act('backend', 'writing', step(5) + 1000, 'api'),

  // 6. The Reviewer reviews the Frontend dev's work at their desk.
  task('ui', 'in-review', step(6)),
  act('frontend', 'waiting', step(6), 'ui'),
  task('review', 'in-progress', step(6)),
  act('reviewer', 'reading', step(6), 'ui'),
  say('reviewer', 'frontend', 'UI matches the design. Approved.', step(6) + 6000),

  // 7. Frontend is done; the Reviewer moves on to the Backend dev's desk.
  task('ui', 'done', step(7)),
  act('frontend', 'done', step(7), 'ui'),
  task('api', 'in-review', step(7)),
  act('backend', 'waiting', step(7), 'api'),
  act('reviewer', 'reading', step(7), 'api'),
  say('reviewer', 'backend', 'API checks out. Approved.', step(7) + 5000),

  // 8. Backend is done; the Reviewer writes the verdict in the library nook.
  task('api', 'done', step(8)),
  act('backend', 'done', step(8), 'api'),
  act('reviewer', 'writing', step(8), 'review'),
  task('review', 'done', step(8) + 4000),
  say('reviewer', 'lead', 'Review passed: UI and API approved.', step(8) + 4000),

  // 9. The Lead sends you the report and everyone rests.
  act('reviewer', 'done', step(9), 'review'),
  act('lead', 'writing', step(9)),
  say('lead', 'you', 'Your dashboard is ready: 5 of 5 tasks done, review passed.', step(9) + 1500),
  act('lead', 'idle', step(9) + 2000),
  act('designer', 'idle', step(9) + 2000),
  act('frontend', 'idle', step(9) + 2000),
  act('backend', 'idle', step(9) + 2000),
  act('reviewer', 'idle', step(9) + 2000),
];
