// World of Agents guard. Claude Code runs it before every Agent, Bash and PowerShell call (a PreToolUse hook that is NOT
// async: an async hook runs in the background and can't block anything) and pipes the hook input as JSON on stdin.
//
// Deny-only: it prints a PreToolUse deny, or nothing. It never answers allow, because allow would skip your permission
// prompt; with no answer, Claude Code decides exactly as it would without the guard.
//
// Fail closed: input it can't read, a caller it doesn't know and an agent type not in its table are all denied, and so is
// any error it catches. hooks.json sets "onFailure": "block", so a crash, a timeout or a Node that won't start blocks the
// call too (Claude Code 2.1.295 or later; an older one lets the call through).
//
// It reads stdin and answers. No network, no hall, no files, no imports.

const MAX_STDIN = 1024 * 1024;
const PREFIX = 'world-of-agents:';
const LEAD = `${PREFIX}lead`;

/**
 * Who may start whom, by exact agent type. `main` is the main thread, which must be the Lead: real hook input from the
 * Lead's Agent calls has no agent_id and agent_type "world-of-agents:lead", whether the Lead is main through --agent or
 * through the plugin's settings.json (docs/v3-spike.md). `subagents` is keyed by a subagent's own agent_type, and kept
 * apart from `main` so no agent type can ever name the main thread's row. Every caller not listed may start nobody;
 * milestone 5 adds the guild leads. Claude Code's own agents (Explore, Plan, general-purpose, ...) are in no row, so they
 * are always denied: some run on Haiku.
 */
export const MAY_START = Object.freeze({
  main: Object.freeze([`${PREFIX}designer`, `${PREFIX}frontend`, `${PREFIX}backend`, `${PREFIX}reviewer`]),
  subagents: new Map(),
});

/**
 * A shell command that names a .env file: `.env`, `.env.<anything>`, `.envrc` (direnv's) or `.envrc.<anything>`, alone, at
 * the end of a path or quoted. Best effort:
 * it catches accidents and lazy prompt injection, not a determined attacker (a variable, an escape or a script that opens
 * the file itself gets past it). `process.env`, `printenv` and the word "environment" don't match.
 */
export const ENV_FILE =
  /(?:^|[\s'"`=:/\\<>|;&(){}[\],])\.env(?:rc)?(?:\.[\w.-]*)?(?=$|[\s'"`|;&()<>{}[\],:*?])/i;

export const REASONS = Object.freeze({
  agent: 'World of Agents guard: that start is not in the team table of who may start whom.',
  env: 'World of Agents guard: this command names a .env or .envrc file, and the team never reads those.',
  input: 'World of Agents guard: this call could not be checked, so it is denied.',
  model:
    "World of Agents guard: the team's models are set in its agent files, so an Agent call may not choose one.",
});

/** The one answer the guard ever gives. */
export const denial = (reason) =>
  JSON.stringify({
    hookSpecificOutput: {
      hookEventName: 'PreToolUse',
      permissionDecision: 'deny',
      permissionDecisionReason: reason,
    },
  });

const isObject = (v) => v !== null && typeof v === 'object' && !Array.isArray(v);

/** What the caller may start: its table row, or undefined for a caller the guard doesn't know. */
function rowOf(input) {
  if (input.agent_id !== undefined) {
    const known = typeof input.agent_id === 'string' && typeof input.agent_type === 'string';
    return known ? MAY_START.subagents.get(input.agent_type) : undefined;
  }
  return input.agent_type === LEAD ? MAY_START.main : undefined;
}

/**
 * The Agent tool's `model` argument takes precedence over the model an agent file sets, so a call that names one could
 * run the Reviewer on a weaker model, or anyone on a far dearer one. Whatever its value, a call that has it is denied:
 * the agent file's model always wins.
 */
function checkAgent(input) {
  const call = isObject(input.tool_input) ? input.tool_input : undefined;
  if (typeof call?.subagent_type !== 'string') return denial(REASONS.input);
  if (Object.hasOwn(call, 'model')) return denial(REASONS.model);
  return rowOf(input)?.includes(call.subagent_type) ? null : denial(REASONS.agent);
}

function checkShell(input) {
  const command = isObject(input.tool_input) ? input.tool_input.command : undefined;
  if (typeof command !== 'string') return denial(REASONS.input);
  return ENV_FILE.test(command) ? denial(REASONS.env) : null;
}

/** The answer for one hook input: a deny to print, or null for no answer. `raw` is null when stdin was too big. */
export function decide(raw) {
  try {
    if (typeof raw !== 'string') return denial(REASONS.input);
    const input = JSON.parse(raw);
    if (!isObject(input)) return denial(REASONS.input);
    if (input.tool_name === 'Agent') return checkAgent(input);
    if (input.tool_name === 'Bash' || input.tool_name === 'PowerShell') return checkShell(input);
    return denial(REASONS.input);
  } catch {
    return denial(REASONS.input);
  }
}

async function readStdin() {
  const chunks = [];
  let size = 0;
  for await (const chunk of process.stdin) {
    size += chunk.length;
    if (size > MAX_STDIN) return null;
    chunks.push(chunk);
  }
  return Buffer.concat(chunks).toString('utf8');
}

// Run only as a script, so tests can import its functions.
if (process.argv[1]?.endsWith('guard.mjs')) {
  readStdin()
    .then(decide, () => denial(REASONS.input))
    .then((answer) => {
      if (answer) process.stdout.write(answer);
    });
}
