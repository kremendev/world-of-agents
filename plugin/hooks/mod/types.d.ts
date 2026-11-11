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

/** A tool call put to the mode's decider: in Manual a dialog asks Dima, in Auto the classifier decides first. */
export type PaneAsk = {
  /** The call's tool_use_id: the entry goes when that call resolves. */
  id: string;
  /** The subagent asking; absent for the main thread, the Lead. */
  agentId?: string;
  tool: string;
  /**
   * A dialog asks Dima now (its PermissionRequest came). Only then is it "needs you", drawn and spoken: in Auto the
   * classifier settles most asks itself and no dialog opens (seen 8 Nov).
   */
  shown: boolean;
};

export type PaneLimit = { kind: string; percentUsed: number; resetsAt?: string };

/** The last `session.measure`: the context window and the plan's rate-limit windows. */
export type PaneUsage = { tokens?: number; window: number; percent?: number; limits: PaneLimit[] };

/**
 * The token ledger as the pane shows it (v3.2): tokens in (input, cache reads and writes) and out since `since` on this PC,
 * their value at API prices in whole cents, and the tokens of models the price table doesn't know.
 */
export type PaneLedger = {
  since: number;
  tokensIn: number;
  tokensOut: number;
  cents: number;
  pricedOn: string;
  unpriced: { model: string; tokens: number }[];
};

/**
 * The hall as the mod last found it: `running` only once it answered the handshake (hooks/hall-check.mjs), `taken` when
 * something else holds port 4319, `stopped` when nothing runs and no start is under way.
 */
export type PaneHall = 'checking' | 'starting' | 'running' | 'taken' | 'stopped';

/** What `node --version` said at session start: not asked yet, 20.19 or later, not found, no version, or too old. */
export type PaneNode = 'unchecked' | 'ok' | 'missing' | 'failed' | 'old';

/**
 * Why the prompt box didn't take a preset's text: `no_composer`, the engine's own word that this surface has no box the
 * mod can write; `other` for anything else (a dialog holds the keys, a hook kept it out, a cause unknown).
 */
export type PaneFillRefusal = 'no_composer' | 'other';

export type PaneView = {
  /** The Lead's main-thread turn: running from its `turn.start` to its `turn.complete`. */
  lead: 'running' | 'idle';
  agents: PaneAgent[];
  asks: PaneAsk[];
  /** The last `permission_mode` a prompt or a subagent start carried; null before the first. */
  mode: string | null;
  usage: PaneUsage | null;
  /** The ledger's total, kept in $.store across sessions; null until the first turn is counted. */
  ledger: PaneLedger | null;
  /** The ids of the runs seen since the team last went quiet: "the team is done" waits until all of them are over. */
  round: string[];
  /**
   * Runs the Lead started in the background whose result hasn't reached it yet: it comes in a frame (a task
   * notification, or Auto's hand-back). "The team is done" waits for these too.
   */
  unheard: string[];
  hall: PaneHall;
  node: PaneNode;
  /** For `old`: the version found, digits and dots only. */
  nodeVersion: string | null;
  /** The voice is off. Kept in $.store, so it lasts beyond the session. */
  muted: boolean;
  /** Why the last preset press didn't fill the prompt box; null when it did, and before the first press. */
  fillRefused: PaneFillRefusal | null;
  /**
   * The World of Agents ids the user settings turn on, read once at session start: the plugin is then on in every
   * project. Only ids shaped like `world-of-agents@<marketplace>`, at most three.
   */
  everyProject: string[];
};

declare module 'claude-code' {
  interface PluginState {
    'world-of-agents': { view: Shaped<PaneView> };
  }
}
