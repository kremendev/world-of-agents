import type { AgentId, AgentState, OfficeEvent, TaskStatus, ToolCounts } from '../events/schema';

/** `copies` is set only while more than one copy of the agent runs (v2). */
export type AgentStatus = { state: AgentState; taskId?: string; copies?: number };
export type Task = { id: string; title: string; owner: AgentId; status: TaskStatus };
/** `tools`: the calls the hall saw, on the Reviewer's report only (v3.1). */
export type Message = { from: AgentId; to: AgentId | 'you'; text: string; tools?: ToolCounts; at: number };

/** One line of activity: an agent changing state, or a message between agents. */
export type LogEntry =
  | { kind: 'state'; agent: AgentId; state: AgentState; taskId?: string; at: number }
  | ({ kind: 'message' } & Message);

export type OfficeState = {
  agents: Readonly<Record<AgentId, AgentStatus>>;
  /** In the order they were first announced, which is the order the dashboard shows them in. */
  tasks: readonly Task[];
  /** Oldest first, at most MAX_MESSAGES of them. */
  messages: readonly Message[];
  /** Every state change and message, oldest first, at most MAX_LOG of them. */
  log: readonly LogEntry[];
  /** v2: the task you typed in Claude Code, for the header. A reset clears it, a hand-back never replaces it. */
  runText: string | null;
  /** v2: the Claude Code session closed. A reset clears it. */
  sessionEnded: boolean;
  /** v2: the Lead has finished and Claude Code waits for your next message. Anything the Lead does next clears it. */
  awaitingPrompt: boolean;
};

/** Keeps a long run from growing the message list without limit. The oldest messages go first. */
export const MAX_MESSAGES = 100;

/** The same for the activity log, which holds state changes as well as messages. */
export const MAX_LOG = 200;

/** A run can announce at most this many tasks; later new ones are ignored. Updates to known tasks still apply. */
export const MAX_TASKS = 20;

const IDLE: AgentStatus = { state: 'idle' };

export const INITIAL_OFFICE: OfficeState = {
  agents: { lead: IDLE, designer: IDLE, frontend: IDLE, backend: IDLE, reviewer: IDLE },
  tasks: [],
  messages: [],
  log: [],
  runText: null,
  sessionEnded: false,
  awaitingPrompt: false,
};

const logged = (state: OfficeState, entry: LogEntry) => [...state.log, entry].slice(-MAX_LOG);

/** Applies one event that already passed parseEvent(). Pure: returns a new state, never edits the old one. */
export function officeReducer(state: OfficeState, event: OfficeEvent): OfficeState {
  switch (event.type) {
    case 'state': {
      const { agent, state: agentState, taskId, copies, at } = event;
      return {
        ...state,
        agents: { ...state.agents, [agent]: { state: agentState, taskId, copies } },
        awaitingPrompt: state.awaitingPrompt && agent !== 'lead',
        log: logged(state, { kind: 'state', agent, state: agentState, taskId, at }),
      };
    }
    case 'task': {
      const task: Task = { id: event.taskId, title: event.title, owner: event.owner, status: event.status };
      const known = state.tasks.some((t) => t.id === task.id);
      if (!known && state.tasks.length >= MAX_TASKS) return state;
      return {
        ...state,
        tasks: known ? state.tasks.map((t) => (t.id === task.id ? task : t)) : [...state.tasks, task],
      };
    }
    case 'message': {
      const { from, to, text, tools, at } = event;
      const message: Message = { from, to, text, ...(tools ? { tools } : {}), at };
      return {
        ...state,
        messages: [...state.messages, message].slice(-MAX_MESSAGES),
        log: logged(state, { kind: 'message', ...message }),
      };
    }
    case 'reset':
      return INITIAL_OFFICE;
    case 'run':
      return { ...state, runText: event.text };
    case 'session-end':
      return { ...state, sessionEnded: true };
    case 'awaiting-prompt':
      return { ...state, awaitingPrompt: true };
  }
}

/** How many tasks are done. */
export const doneCount = (state: OfficeState) => state.tasks.filter((t) => t.status === 'done').length;

const WORKING: ReadonlySet<AgentState> = new Set(['thinking', 'reading', 'writing']);

/** How many agents are working right now. The furnace burns hotter the more there are. */
export function workingCount(state: OfficeState): number {
  return Object.values(state.agents).filter((a) => WORKING.has(a.state)).length;
}
