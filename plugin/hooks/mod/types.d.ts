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

/** v3.4: one run of one of the team's specialists, under its guild lead. Its name comes from its agent type's shape. */
export type PaneSpecialist = {
  id: string;
  lead: 'designer' | 'frontend' | 'backend' | 'reviewer';
  /** In words: `woa-team:frontend-react-dev` is "React dev". */
  name: string;
  status: string;
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
 * Recount (v3.2c, L7; per session since 3.2d): running or not, whether the last press failed, and when one last
 * succeeded (null before the first). Only Dima's press runs it.
 */
export type PanePast = { state: 'idle' | 'counting' | 'failed'; counted: number | null };

/** One change the hall's page made to the team (v3.4c): when, what, and names only. */
export type PaneChange = {
  at: number;
  what: 'skill-added' | 'skill-changed' | 'skill-deleted' | 'skill-attached' | 'skill-detached';
  skill: string;
  specialist?: string;
};

/**
 * The team editor's link (v3.4c): none, a key on its way to the hall, a link open for a minute, or the hall didn't take
 * the key. The key itself is never here.
 */
export type PaneEditor = 'none' | 'making' | 'open' | 'failed';

/**
 * The hall as the mod last found it: `running` only once it answered the handshake (hooks/hall-check.mjs) as this
 * plugin's version, `other-version` when it answered as another install's (3.2d), `taken` when something else holds port
 * 4319, `stopped` when nothing runs and no start is under way.
 */
export type PaneHall = 'checking' | 'starting' | 'running' | 'other-version' | 'taken' | 'stopped';

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
  /** v3.4: the specialists' runs `$.agent.list()` showed, newest last. */
  specialists: PaneSpecialist[];
  asks: PaneAsk[];
  /** The last `permission_mode` a prompt or a subagent start carried; null before the first. */
  mode: string | null;
  usage: PaneUsage | null;
  /** The ledger's total, kept in $.store across sessions; null until the first turn is counted. */
  ledger: PaneLedger | null;
  /** Recount: every session in the transcripts, counted into `ledger` when Dima asks (v3.2c, 3.2d). */
  past: PanePast;
  /** v3.4c: the team editor's link, and the newest changes the hall's page made to the team. */
  editor: PaneEditor;
  teamChanges: PaneChange[];
  /** v3.3: are quality gates on in this project? `hooks/gate.mjs --status`'s exit code at session start. */
  gates: 'unknown' | 'on' | 'off';
  /** v3.3: the last time a gate sent an agent back: which of ours, and which retry. From the gate's fixed first line only. */
  gateRetry: { agent: 'designer' | 'frontend' | 'backend'; retry: number } | null;
  /** The ids of the runs seen since the team last went quiet: "the team is done" waits until all of them are over. */
  round: string[];
  /**
   * Runs the Lead started in the background whose result hasn't reached it yet: it comes in a frame (a task
   * notification, or Auto's hand-back). "The team is done" waits for these too.
   */
  unheard: string[];
  hall: PaneHall;
  /** For `other-version`: the version that hall states, digits and dots only; null when it states none (before 3.2.0). */
  hallVersion: string | null;
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
