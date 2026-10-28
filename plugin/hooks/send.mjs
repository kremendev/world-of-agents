// World of Agents hook script. Claude Code runs it in the background (async) for every hook in hooks.json
// and pipes the hook payload as JSON on stdin.
//
// One way only: it posts an allowlisted subset of the payload to the hall server on 127.0.0.1 and throws
// the reply away. It prints nothing and always exits 0, so it can never send Claude Code a decision.
// Node built-ins only, so the plugin needs no npm install. No token file or no server: it does nothing.
//
// WOA_CAPTURE=1 also saves the raw payload to ~/.world-of-agents/capture/ (milestone 1 only). Raw payloads
// hold file contents and commands: redact them before they go anywhere near a repo.

import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { homedir } from 'node:os';
import { join } from 'node:path';

const HALL_URL = 'http://127.0.0.1:4319/api/hook';
const TIMEOUT_MS = 800;
const MAX_STDIN = 5 * 1024 * 1024;
const HOME_DIR = join(homedir(), '.world-of-agents');

/** The only tool whose input and response fields we forward. Every other tool sends just its name. */
const AGENT_TOOL = 'Agent';
const MAX_BACKGROUND_TASKS = 20;

const str = (v, max) => (typeof v === 'string' ? v.slice(0, max) : undefined);

const escapeRegExp = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

/**
 * The home folder in every spelling an agent or Git Bash may write it: `C:\Users\dima`, `C:/Users/dima`
 * and `/c/Users/dima`, any case (Windows paths ignore it). Matches only whole folder names, so
 * `C:\Users\dimaX` is left alone.
 */
export function homePattern(home) {
  const drive = home.match(/^([A-Za-z]):[\\/](.*)$/);
  const forms = drive
    ? [`${drive[1]}:\\`, `${drive[1]}:/`, `/${drive[1]}/`].map(
        (root) => escapeRegExp(root) + drive[2].split(/[\\/]/).map(escapeRegExp).join('[\\\\/]'),
      )
    : [escapeRegExp(home)];
  return new RegExp(`(?:${forms.join('|')})(?![\\w.-])`, drive ? 'gi' : 'g');
}

/** Common secret formats an agent may echo: Anthropic, GitHub and AWS keys, and PEM blocks. */
const SECRETS = [
  /-----BEGIN [A-Z ]*-----[\s\S]*?(?:-----END [A-Z ]*-----|$)/g,
  /sk-ant-[\w-]+/g,
  /github_pat_\w+/g,
  /gh[pousr]_[A-Za-z0-9]+/g,
  /AKIA[0-9A-Z]{16}/g,
];

/**
 * Free text (the prompt, an agent's last message, an Agent call's description): the home folder becomes
 * `~` and key-shaped strings become `[redacted]`. Scrubbed before the cap, so a cut can't leave half a key.
 */
export function text(v, max, home = homedir()) {
  if (typeof v !== 'string') return undefined;
  let out = v.replace(homePattern(home), '~');
  for (const secret of SECRETS) out = out.replace(secret, '[redacted]');
  return out.slice(0, max);
}

const bool = (v) => (typeof v === 'boolean' ? v : undefined);
const obj = (v) => (v && typeof v === 'object' && !Array.isArray(v) ? v : {});
const tag = (prompt, name) => prompt.match(new RegExp(`<${name}>([^<]{1,100})</${name}>`))?.[1];

/**
 * A background subagent finishing re-prompts the Lead with a `<task-notification>` as if the user typed it.
 * Only its ids and status go on: its <result> is the subagent's full output and <output-file> is a path.
 */
function taskNotification(prompt) {
  if (typeof prompt !== 'string' || !prompt.startsWith('<task-notification>')) return undefined;
  return {
    task_id: tag(prompt, 'task-id'),
    tool_use_id: tag(prompt, 'tool-use-id'),
    status: tag(prompt, 'status'),
  };
}

/** The fields the hall needs, and nothing else: never file contents, commands, paths or transcripts. */
export function allowlist(p, home = homedir()) {
  const notification = taskNotification(p.prompt);
  const out = {
    hook_event_name: str(p.hook_event_name, 40),
    session_id: str(p.session_id, 100),
    agent_id: str(p.agent_id, 100),
    agent_type: str(p.agent_type, 100),
    tool_name: str(p.tool_name, 100),
    tool_use_id: str(p.tool_use_id, 100),
    notification_type: str(p.notification_type, 40),
    source: str(p.source, 40),
    reason: str(p.reason, 40),
    prompt: notification ? undefined : text(p.prompt, 120, home),
    task_notification: notification,
    last_assistant_message: text(p.last_assistant_message, 200, home),
  };
  if (p.tool_name === AGENT_TOOL) {
    const input = obj(p.tool_input);
    out.tool_input = {
      description: text(input.description, 120, home),
      subagent_type: str(input.subagent_type, 100),
      run_in_background: bool(input.run_in_background),
    };
    if (p.tool_response !== undefined) {
      const response = obj(p.tool_response);
      out.tool_response = { status: str(response.status, 40), agentId: str(response.agentId, 100) };
    }
  }
  if (Array.isArray(p.background_tasks)) {
    out.background_tasks = p.background_tasks.slice(0, MAX_BACKGROUND_TASKS).map((t) => ({
      id: str(obj(t).id, 100),
      type: str(obj(t).type, 40),
      status: str(obj(t).status, 40),
      agent_type: str(obj(t).agent_type, 100),
    }));
  }
  return JSON.parse(JSON.stringify(out)); // drops the undefined fields
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

function capture(raw, event) {
  const dir = join(HOME_DIR, 'capture');
  mkdirSync(dir, { recursive: true });
  const name = `${Date.now()}-${process.pid}-${String(event).replace(/[^A-Za-z]/g, '')}.json`;
  writeFileSync(join(dir, name), raw);
}

function readToken() {
  try {
    const token = readFileSync(join(HOME_DIR, 'token'), 'utf8').trim();
    return /^[A-Za-z0-9_-]{16,200}$/.test(token) ? token : null;
  } catch {
    return null;
  }
}

async function main() {
  const raw = await readStdin();
  if (!raw) return;
  const payload = JSON.parse(raw);
  if (!payload || typeof payload !== 'object') return;
  if (process.env.WOA_CAPTURE === '1') capture(raw, payload.hook_event_name);

  const token = readToken();
  if (!token) return;
  const res = await fetch(HALL_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
    body: JSON.stringify(allowlist(payload)),
    signal: AbortSignal.timeout(TIMEOUT_MS),
  });
  await res.body?.cancel(); // the reply is never read
}

// Run only as a script, so tests can import allowlist().
if (process.argv[1]?.endsWith('send.mjs')) {
  process.on('uncaughtException', () => process.exit(0));
  process.on('unhandledRejection', () => process.exit(0));
  main()
    .catch(() => {})
    .finally(() => process.exit(0));
}
