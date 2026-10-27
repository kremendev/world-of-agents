import type { AgentId, AgentState, OfficeEvent, TaskStatus } from '../events/schema';

export type AgentStatus = { state: AgentState; taskId?: string };
export type Task = { id: string; title: string; owner: AgentId; status: TaskStatus };
export type Message = { from: AgentId; to: AgentId | 'you'; text: string; at: number };

export type OfficeState = {
  agents: Readonly<Record<AgentId, AgentStatus>>;
  /** In the order they were first announced, which is the order the dashboard shows them in. */
  tasks: readonly Task[];
  /** Oldest first, at most MAX_MESSAGES of them. */
  messages: readonly Message[];
};

/** Keeps a long run from growing the message list without limit. The oldest messages go first. */
export const MAX_MESSAGES = 100;

/** A run can announce at most this many tasks; later new ones are ignored. Updates to known tasks still apply. */
export const MAX_TASKS = 20;

const IDLE: AgentStatus = { state: 'idle' };

export const INITIAL_OFFICE: OfficeState = {
  agents: { lead: IDLE, designer: IDLE, frontend: IDLE, backend: IDLE, reviewer: IDLE },
  tasks: [],
  messages: [],
};

/** Applies one event that already passed parseEvent(). Pure: returns a new state, never edits the old one. */
export function officeReducer(state: OfficeState, event: OfficeEvent): OfficeState {
  switch (event.type) {
    case 'state':
      return {
        ...state,
        agents: { ...state.agents, [event.agent]: { state: event.state, taskId: event.taskId } },
      };
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
      const message: Message = { from: event.from, to: event.to, text: event.text, at: event.at };
      return { ...state, messages: [...state.messages, message].slice(-MAX_MESSAGES) };
    }
    case 'tokens':
      // Nothing shows token counts yet; the agent panel (next steps, item 3) will.
      return state;
  }
}

const WORKING: ReadonlySet<AgentState> = new Set(['thinking', 'reading', 'writing']);

/** How many agents are working right now. The furnace burns hotter the more there are. */
export function workingCount(state: OfficeState): number {
  return Object.values(state.agents).filter((a) => WORKING.has(a.state)).length;
}
