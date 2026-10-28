import { AGENT_IDS, parseEvent, type AgentId, type AgentState, type OfficeEvent } from '../src/events/schema';
import type { HookInput } from './hook-input';

/** A task card: one Agent call by the Lead, keyed by that call's `tool_use_id`. */
export type Card = { taskId: string; owner: AgentId; title: string; agentId?: string; done: boolean };

/**
 * One subagent run, keyed by its `agent_id`. A stopped run is kept: hooks run in the background and can
 * arrive out of order, so a start or a tool call that lands after its stop must be ignored.
 */
export type Run = { agent: AgentId; taskId?: string; state: AgentState; stopped: boolean };

export type MapState = {
  /**
   * The session the hall follows: the first one it hears from, until another starts new, cleared or resumed.
   * Null until it hears from one.
   */
  session: string | null;
  /** Oldest first: a subagent that starts is matched to the oldest open card of its type. */
  cards: readonly Card[];
  runs: Readonly<Record<string, Run>>;
};

export const INITIAL_MAP: MapState = { session: null, cards: [], runs: {} };

type Step = { state: MapState; events: OfficeEvent[] };

const nothing = (state: MapState): Step => ({ state, events: [] });

const PREFIX = 'world-of-agents:';
const READING: ReadonlySet<string> = new Set(['Read', 'Grep', 'Glob']);
const WRITING: ReadonlySet<string> = new Set(['Edit', 'Write', 'Bash']);
/** The SessionStart sources that switch the hall to that session and reset the run. Not `compact`. */
const TAKES_OVER: ReadonlySet<string> = new Set(['startup', 'clear', 'resume']);

/** `world-of-agents:<name>` to one of our five ids. Anything else (built-in agents, other plugins) is not ours. */
export function agentOf(type: string | undefined): AgentId | null {
  const name = type?.startsWith(PREFIX) ? type.slice(PREFIX.length) : undefined;
  return AGENT_IDS.find((id) => id === name) ?? null;
}

/**
 * Turns one hook post into the OfficeEvents it means, following the run table in docs/v2-brief.md.
 * Pure: returns the next state and the events, and never changes the state it is given. Every event goes
 * through parseEvent() on the way out; one that fails is dropped. Where agents stand is the page's job.
 * `at` is the hook's time in ms on the server's clock.
 */
export function mapHook(state: MapState, input: HookInput, at: number): Step {
  const agent = agentOf(input.agent_type);
  if (!agent) return nothing(state);
  const step = route(state, input, agent, at);
  return {
    state: step.state,
    events: step.events.flatMap((event) => {
      const result = parseEvent(event);
      return result.ok ? [result.event] : [];
    }),
  };
}

function route(state: MapState, input: HookInput, agent: AgentId, at: number): Step {
  const session = input.session_id;
  if (input.hook_event_name === 'SessionStart' && session && TAKES_OVER.has(input.source ?? ''))
    return takeOver(session, at);
  // One session at a time: hooks from another Claude Code window don't mix into this run. A hall with no
  // session yet (it started after Claude Code) follows the first one it hears from.
  const followed = state.session ?? session;
  if (!followed || session !== followed) return nothing(state);
  return dispatch(state.session ? state : { ...state, session: followed }, input, agent, at);
}

/** One hook from the session the hall follows. */
function dispatch(state: MapState, input: HookInput, agent: AgentId, at: number): Step {
  // The Lead's own events carry no agent_id; every event inside a subagent does.
  const sub = input.agent_id && agent !== 'lead' ? input.agent_id : null;
  const byLead = !input.agent_id && agent === 'lead';
  switch (input.hook_event_name) {
    case 'UserPromptSubmit':
      return byLead ? prompted(state, input, at) : nothing(state);
    case 'PreToolUse':
      if (sub) return toolUsed(state, sub, agent, input.tool_name, at);
      if (!byLead) return nothing(state);
      // The Lead reads the project too. Handing out a task is thinking again.
      if (READING.has(input.tool_name ?? '')) return { state, events: [lead('reading', at)] };
      if (input.tool_name !== 'Agent') return nothing(state);
      return handOut(state, input, at);
    case 'SubagentStart':
      return sub && !state.runs[sub] ? startRun(state, sub, agent, at) : nothing(state);
    case 'Notification':
      return notified(state, input, agent, sub, at);
    case 'SubagentStop':
      return sub ? stopRun(state, sub, agent, input.last_assistant_message, at) : nothing(state);
    case 'PostToolUse':
      return byLead ? agentReturned(state, input, at) : nothing(state);
    case 'Stop':
      return byLead ? turnEnded(state, input, at) : nothing(state);
    case 'StopFailure':
      return byLead ? { state, events: [lead('error', at)] } : nothing(state);
    default:
      return nothing(state); // SessionStart from compaction, SessionEnd, and any event Claude Code adds later
  }
}

const lead = (state: AgentState, at: number): OfficeEvent => ({ type: 'state', agent: 'lead', state, at });

const taskEvent = (card: Card, status: 'todo' | 'in-progress' | 'done', at: number): OfficeEvent => ({
  type: 'task',
  taskId: card.taskId,
  title: card.title,
  owner: card.owner,
  status,
  at,
});

/** The runs of `agent` that have not stopped, oldest first. */
const running = (state: MapState, agent: AgentId) =>
  Object.entries(state.runs).filter(([, run]) => run.agent === agent && !run.stopped);

/** The state event for run `id`'s agent, with the number of copies when more than one is running. */
function shown(state: MapState, id: string, at: number): OfficeEvent {
  const run = state.runs[id]!;
  const copies = running(state, run.agent).length;
  return {
    type: 'state',
    agent: run.agent,
    state: run.state,
    ...(run.taskId ? { taskId: run.taskId } : {}),
    ...(copies > 1 ? { copies } : {}),
    at,
  };
}

/**
 * A new, cleared or resumed session takes the hall over and resets the run, so restarting Claude Code needs
 * no hall restart. Compaction starts the current session again mid-run: same run, nothing to reset.
 */
function takeOver(session: string, at: number): Step {
  return { state: { ...INITIAL_MAP, session }, events: [{ type: 'reset', at }] };
}

function prompted(state: MapState, input: HookInput, at: number): Step {
  const notice = input.task_notification;
  if (notice) {
    // A background subagent ended, and Claude Code tells the Lead as if you had typed it. It is not a new
    // run. Only "completed" means the task is done.
    const id = notice.tool_use_id;
    const ended = !id
      ? nothing(state)
      : notice.status === 'completed'
        ? finish(state, id, at)
        : failed(state, id, at);
    return { state: ended.state, events: [...ended.events, lead('thinking', at)] };
  }
  const text = input.prompt?.trim();
  return { state, events: [...(text ? [{ type: 'run' as const, text, at }] : []), lead('thinking', at)] };
}

/** The Lead hands out a task with the Agent tool: a new card for the agent that owns it, and the Lead thinks. */
function handOut(state: MapState, input: HookInput, at: number): Step {
  const thinking = { state, events: [lead('thinking', at)] };
  const taskId = input.tool_use_id;
  const owner = agentOf(input.tool_input?.subagent_type);
  if (!taskId || !owner || owner === 'lead') return thinking;
  if (state.cards.some((c) => c.taskId === taskId)) return thinking;
  const card: Card = {
    taskId,
    owner,
    title: input.tool_input?.description?.trim() || 'Untitled task',
    done: false,
  };
  const event = taskEvent(card, 'todo', at);
  // A tool_use_id that can't be a task id (odd characters, too long) gets no card at all.
  if (!parseEvent(event).ok) return thinking;
  return { state: { ...state, cards: [...state.cards, card] }, events: [event, ...thinking.events] };
}

/**
 * Adds a subagent run and gives it its card: the one PostToolUse already linked to it, or else the oldest
 * open card of its type that has no run yet (SubagentStart carries no tool_use_id).
 */
function linkRun(state: MapState, id: string, agent: AgentId): { state: MapState; card?: Card } {
  const card =
    state.cards.find((c) => c.agentId === id) ??
    state.cards.find((c) => c.owner === agent && !c.done && !c.agentId);
  const cards = card ? state.cards.map((c) => (c === card ? { ...c, agentId: id } : c)) : state.cards;
  const run: Run = { agent, taskId: card?.taskId, state: 'thinking', stopped: false };
  return { state: { ...state, cards, runs: { ...state.runs, [id]: run } }, card };
}

function startRun(state: MapState, id: string, agent: AgentId, at: number): Step {
  const linked = linkRun(state, id, agent);
  const card = linked.card && !linked.card.done ? [taskEvent(linked.card, 'in-progress', at)] : [];
  return { state: linked.state, events: [...card, shown(linked.state, id, at)] };
}

/** A subagent run doing something. A run never seen starting is started first; a stopped run stays stopped. */
function act(state: MapState, id: string, agent: AgentId, activity: AgentState, at: number): Step {
  if (state.runs[id]?.stopped) return nothing(state);
  const started = state.runs[id] ? nothing(state) : startRun(state, id, agent, at);
  const run = { ...started.state.runs[id]!, state: activity };
  const next = { ...started.state, runs: { ...started.state.runs, [id]: run } };
  return { state: next, events: [...started.events, shown(next, id, at)] };
}

function toolUsed(state: MapState, id: string, agent: AgentId, tool: string | undefined, at: number): Step {
  const activity = !tool ? null : READING.has(tool) ? 'reading' : WRITING.has(tool) ? 'writing' : null;
  return activity ? act(state, id, agent, activity, at) : nothing(state);
}

function notified(state: MapState, input: HookInput, agent: AgentId, sub: string | null, at: number): Step {
  if (input.notification_type === 'idle_prompt') return { state, events: [lead('needs-you', at)] };
  if (input.notification_type !== 'permission_prompt') return nothing(state);
  // Not captured yet (docs/v2-hooks.md): whether this names the waiting subagent. If it does, that agent is
  // flagged; if not, agent_type is the Lead's and the Lead is.
  return sub
    ? act(state, sub, agent, 'needs-you', at)
    : { state, events: [{ type: 'state', agent, state: 'needs-you', at }] };
}

/**
 * A subagent run ends: its last message to the Lead, and the agent is done, even when the run already counts
 * as stopped. A run whose task already failed keeps its agent in error. It never moves a card: SubagentStop
 * can't tell a finished run from a failed one, so a card is done only when its task completes (finish()).
 */
function stopRun(state: MapState, id: string, agent: AgentId, text: string | undefined, at: number): Step {
  // A stop whose start never arrived still links its run to a card, and a late start is then ignored.
  const linked = state.runs[id] ? state : linkRun(state, id, agent).state;
  const run: Run = { ...linked.runs[id]!, stopped: true };
  const next: MapState = { ...linked, runs: { ...linked.runs, [id]: run } };
  const events: OfficeEvent[] = [];
  if (text?.trim()) events.push({ type: 'message', from: agent, to: 'lead', text, at });
  // Only failed() gives a run the error state: a failed subagent stays failed.
  if (run.state === 'error') return { state: next, events };
  // Another copy still running keeps the agent busy; the last one to stop sends it to rest.
  const other = running(next, agent).at(-1);
  events.push(
    other
      ? shown(next, other[0], at)
      : { type: 'state', agent, state: 'done', ...(run.taskId ? { taskId: run.taskId } : {}), at },
  );
  return { state: next, events };
}

/**
 * Marks a card done, once. Only a completed task does it: a completed <task-notification> (background) or a
 * PostToolUse with status "completed" (foreground).
 */
function finish(state: MapState, taskId: string, at: number): Step {
  const card = state.cards.find((c) => c.taskId === taskId);
  if (!card || card.done) return nothing(state);
  const done = { ...card, done: true };
  return {
    state: { ...state, cards: state.cards.map((c) => (c === card ? done : c)) },
    events: [taskEvent(done, 'done', at)],
  };
}

/**
 * A task that ended any way but "completed": its agent shows the error, and its card stays where it is. Its
 * run counts as stopped, so a start or a tool call that lands later can't put the agent back to work.
 */
function failed(state: MapState, taskId: string, at: number): Step {
  const card = state.cards.find((c) => c.taskId === taskId);
  if (!card) return nothing(state);
  const id = card.agentId;
  const run: Run = { agent: card.owner, taskId, state: 'error', stopped: true };
  return {
    state: id ? { ...state, runs: { ...state.runs, [id]: run } } : state,
    events: [{ type: 'state', agent: card.owner, state: 'error', taskId, at }],
  };
}

function agentReturned(state: MapState, input: HookInput, at: number): Step {
  const taskId = input.tool_use_id;
  if (input.tool_name !== 'Agent' || !taskId || !state.cards.some((c) => c.taskId === taskId))
    return nothing(state);
  const agentId = input.tool_response?.agentId;
  const linked = agentId ? link(state, taskId, agentId) : state;
  // A background call comes back at once with "async_launched": that only links the card to its run.
  return input.tool_response?.status === 'completed' ? finish(linked, taskId, at) : nothing(linked);
}

/** The Agent call's own word on which run works its card. It beats linkRun's oldest-open-card guess. */
function link(state: MapState, taskId: string, agentId: string): MapState {
  const cards = state.cards.map((c) =>
    c.taskId === taskId ? { ...c, agentId } : c.agentId === agentId ? { ...c, agentId: undefined } : c,
  );
  const runs = Object.fromEntries(
    Object.entries(state.runs).map(([id, run]) => [
      id,
      id === agentId ? { ...run, taskId } : run.taskId === taskId ? { ...run, taskId: undefined } : run,
    ]),
  );
  return { ...state, cards, runs };
}

function turnEnded(state: MapState, input: HookInput, at: number): Step {
  // What the Lead said last this turn is what you read in the terminal: it comes to you as a message.
  const text = input.last_assistant_message;
  const report: OfficeEvent[] = text?.trim() ? [{ type: 'message', from: 'lead', to: 'you', text, at }] : [];
  // Stop fires after every Lead turn. While subagents still run in the background, the Lead waits for them.
  if ((input.background_tasks ?? []).length > 0) return { state, events: [...report, lead('waiting', at)] };
  // Nothing runs any more: everyone rests, and a late hook from a finished run changes nothing.
  const runs = Object.fromEntries(
    Object.entries(state.runs).map(([id, run]) => [id, { ...run, stopped: true }]),
  );
  return {
    state: { ...state, runs },
    events: [
      ...report,
      ...AGENT_IDS.map((agent): OfficeEvent => ({ type: 'state', agent, state: 'idle', at })),
    ],
  };
}
