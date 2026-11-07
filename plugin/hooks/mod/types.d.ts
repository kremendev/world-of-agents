// The team pane's state contract: what the mod keeps in $.state for the session and the pane draws.
// A contract has to be self-contained (no imports), so the four ids are spelled out; roster.ts names the same four.

/** One run of one of our subagents, as `$.agent.list()` last showed it. The list forgets finished agents; this doesn't. */
export type PaneAgent = {
  /** The run's agent id. */
  id: string;
  /** Which of our agents: the name always comes from the roster, never from the event. */
  agent: 'designer' | 'frontend' | 'backend' | 'reviewer';
  /** The engine's status word: pending, running, waiting, idle, completed, failed or killed. */
  status: string;
  /** The Agent call's description of the task: agent text, shown only as plain Text. */
  task: string;
};

/** A tool call waiting for Dima's approval. */
export type PaneAsk = {
  /** The call's tool_use_id: the entry goes when that call resolves. */
  id: string;
  /** The subagent asking; absent for the main thread, the Lead. */
  agentId?: string;
  tool: string;
};

export type PaneLimit = { kind: string; percentUsed: number; resetsAt?: string };

/** The last `session.measure`: the context window and the plan's rate-limit windows. */
export type PaneUsage = { tokens?: number; window: number; percent?: number; limits: PaneLimit[] };

export type PaneView = {
  /** The Lead's main-thread turn: running from its `turn.start` to its `turn.complete`. */
  lead: 'running' | 'idle';
  agents: PaneAgent[];
  asks: PaneAsk[];
  /** The last `permission_mode` a prompt or a subagent start carried; null before the first. */
  mode: string | null;
  usage: PaneUsage | null;
};

declare module 'claude-code' {
  interface PluginState {
    'world-of-agents': { view: Shaped<PaneView> };
  }
}
