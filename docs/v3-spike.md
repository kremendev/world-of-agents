# v3 milestone 1: the spike

Run on 5 Nov 2026 on Windows 11, in the Code tab of the Claude desktop app, whose engine was Claude Code **2.1.317**
(built 2 Nov). The terminal's Claude Code was 2.1.318, which wrote the type file the mod was checked against.

A throwaway mod, `woa-spike`, lived in `spike/` on the `spike/mods` branch and was never committed. It was installed
from a local-folder marketplace at local scope in two test projects:

- `woa-spike-team`: the v2 team (`world-of-agents` 2.1.0) and the mod, with the Lead as main agent.
- `woa-spike-depth`: the mod and four test agents (`guild`, `specialist`, `deep`, `other`, all Haiku), with the default
  main thread.

Both projects' `.claude/settings.local.json` set `permissions.defaultMode` to `default` and `env`
`CLAUDE_CODE_MAX_SUBAGENT_SPAWN_DEPTH` to `2`. The user settings say `defaultMode: auto`.

The mod only watched. Every hook handed the engine's answer back unchanged; a test with Claude Code's own kit
(`claude plugin test`) pinned that `tool.check` returns allow, ask and deny untouched and that a spawn's deny passes
through. It logged facts only: event names, ids, agent types, statuses, token numbers, modes and verdicts. No prompt,
command, file content, agent text or account detail. Dima drove the desktop app and reported what only a person can
see or hear; everything else below comes from those logs.

## Answers at a glance

| Spike item                                           | Answer                                                                                                        | Verdict        |
| ---------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- | -------------- |
| A pane docks beside the conversation, buttons work   | Docked on the `desktop` surface, buttons and `/woa-spike` work. It appears only once the session has started  | go-with-limits |
| `$.agent.list()` returns our agents and states       | Full names (`world-of-agents:backend`), `running`, `waiting`, `completed`, `parentId`                         | go             |
| `tool.check` carries a subagent's `agentId`          | The Backend dev's `Write` and `Bash`: its `agentId`, verdict `ask`, approver `person`                         | go             |
| Usage: context, plan limits, per-request tokens      | `session.measure` (context, `five_hour` and `seven_day`, cost) and `turn.step` (each request's tokens)        | go             |
| `$.audio.speak` on Windows                           | Fails every time: "no speech synthesizer on windows". PowerShell's synthesizer through `$.process.run` speaks | no-go          |
| `$.process.spawn` starts the hall, a `Link` opens it | Starts it, but a plugin reload kills it. The link opens `http://localhost:4319`                               | go-with-limits |
| Which account is logged in                           | `$.session.identity()` refuses: only for mods that managed settings install                                   | no-go          |
| An `Agent(...)` list restricts a subagent            | Not at all: a guild lead started an agent its list doesn't name, with no error                                | no-go          |
| Depth 2 works                                        | Main, level 1, level 2. Level 2 gets no `Agent` tool                                                          | go             |
| `settings.local.json` applies mode and depth env     | Both: Manual in the spike projects (Auto where only user settings apply), env reads `2`                       | go             |
| A pane can tell the session runs in `auto`           | Yes, from `permission_mode` on the next prompt or subagent event. No event when the mode changes              | go-with-limits |

## Each check

### The pane

**Tried:** `$.ui.open({ id: 'woa-spike' })` unasked in `session.start`, and again from the `/woa-spike` command, drawn by
a `ui.render` hook on `Pane` with text, six buttons and a `Link`.

**Happened:** in a new desktop session nothing loaded until the first message was sent: typing `/woa` before then
offered nothing, and the mod wrote no log. With the first message the session started, the unasked open answered
`isPlaced: true` and the pane showed as its own column on the right with a title, expand and close marks. The render
hook saw `surface: desktop`, `placement: dock`, `bodyColumns: 94`, viewport 98 x 77, `isFullscreen: true`.
`/woa-spike` was then listed with its description and opened the pane. Each button Dima pressed ran its handler.

**Verdict: go-with-limits.** The pane works, but "when a session starts" means when the first message is sent, not
when the project is opened. Milestone 2's "the hall starts itself" happens at the first message.

### `$.agent.list()`

**Tried:** polled every 2 s and on each spawn, through a v2 run (Backend dev, then Reviewer) and the depth runs.

**Happened:** `type` is the full name, `world-of-agents:backend` and `world-of-agents:reviewer`, and `woa-spike:guild`
for a plugin's own agent. Statuses seen: `running`; `waiting` for a parent while its child runs; `completed`.
`parentId` names the spawning agent, absent for the main thread's. A finished agent dropped off the list about a
minute after it completed. Not seen: `pending`, `idle`, `failed`, `killed`.

**Verdict: go.** The pane can group agents by guild from `type` and draw the tree from `parentId`. It has to keep its
own record of finished agents, because the list forgets them.

### `tool.check` for a subagent

**Tried:** an observer on `tool.check` that awaits `next(e)` and returns its verdict, in a session in Manual mode. Task:
"Ask the backend dev to create hello.js that prints hello, then run node hello.js".

**Happened:** the Backend dev's `Write` and `Bash` each arrived with the dev's own `agentId`, `decision: ask`,
`approver: person`, `isReadOnly` false. Reads by the Lead and the Reviewer came through as `allow`, `isReadOnly: true`.
The mod named the asker from `$.agent.list()` ("Backend dev asks to run Write"). The desktop app also raised its own
Windows notification for the same approval ("Allow Claude to write …\hello.js? Allow once").

**Verdict: go.** This is the brief's "who needs you", with no guessing from hook timing.

### Usage and tokens

**Tried:** hooks on `session.measure`, `turn.step` (the streaming form, `yield* next(e)` for the response) and
`turn.complete`.

**Happened:**

- `session.measure` (the pushed form of `$.session.usage()`, after each main-thread turn) carried
  `context: { tokens: 19017, window: 1000000, percent: 2 }`, `rateLimits`
  `[{ kind: "five_hour", percentUsed: 31, resetsAt: "2026-11-06T02:00:00.000Z" }, { kind: "seven_day", percentUsed: 41, … }]`
  and `cost: { usd: 0.169408 }`, the session's value at API prices as `/cost` totals it.
- **Per-request tokens come from `turn.step`'s result**, `usage`, once per model request, the subagents' too (with
  `agentId`):
  `{ input_tokens: 2, output_tokens: 102, cache_read_input_tokens: 0, cache_creation_input_tokens: 8279, model: "claude-sonnet-5-5" }`.
  The team session made 15 requests before the reload: 10 by the Lead on `claude-opus-5-5`, 5 by the Backend dev and
  the Reviewer on `claude-sonnet-5-5`.
- `turn.complete` carries the same four counts summed for the turn, with `agentId` for a subagent's turn.

**Verdict: go.** The ledger can count per request, per agent and per model. `cost.usd` is a session total only, so the
all-time value at API prices still needs the dated price table, but a session's figure can be checked against it.

### Speech

**Tried:** `$.audio.speak("The team is done.")` from a button, and `"<agent> needs your approval."` on each `ask`. Then
two other ways: `$.audio.play` of a short WAV the mod ships, and PowerShell's `System.Speech` through `$.process.run`,
the text passed in an environment variable, never in the command.

**Happened:** every `$.audio.speak` rejected with `$.audio.speak: no speech synthesizer on windows`, the button and
both approvals alike. `$.audio.play` resolved but made no sound (the types say a Windows terminal has no player; the
desktop app behaves the same). The PowerShell route exited 0 and Dima heard it.

**Verdict: no-go for `$.audio`; go for PowerShell's synthesizer.** It can pick any installed Windows voice by name.

### Starting and opening the hall

**Tried:** `$.process.spawn(['node', 'node_modules/tsx/dist/cli.mjs', 'server/main.ts'])` from the repo folder, then
`/api/health` 5 s later. A detached start: PowerShell `Start-Process … -WindowStyle Hidden`, fixed arguments, the
folder in an environment variable. Opening: a `Link` to `http://localhost:4319`, and `explorer.exe <url>` through
`$.process.run`.

**Happened:**

- The spawned hall printed its address within half a second and answered `/api/health`. A `/reload-plugins` that
  changed nothing reloaded nothing, and the hall stayed. After a real reload (the mod's file had changed) it was gone:
  **unloading the module kills the child**, as the types say.
- The detached hall started (exit 0) and answered `/api/health`. The `/reload-plugins` after it changed nothing, so
  nothing reloaded (the mod's last `session.start` was before the hall started): whether a detached hall survives a
  real reload is still untested. After Dima closed both spike sessions it was down; the moment it stopped wasn't caught.
- Each killed hall left `~/.world-of-agents/token` behind (only its timestamp was checked). That is the case the
  handshake was built for: v2.2.0's script posts nothing until the hall proves it holds the token.
- Dima: the link was clickable and opened the hall, and the process button opened the browser too. `explorer.exe`
  exits 1 even when it opens one.
- `$.process.run` works in the desktop app (`node --version` answered `v24.22.0`), though the types call `$.process`
  "CLI only": the desktop app hosts the CLI.

**Verdict: go-with-limits.** The hall can be started and opened from the mod, but it lives at most as long as the
sessions do. A spawned child dies even on a reload.

### Which account

**Tried:** `$.session.identity()` at start and from a button. Only whether an email or organisation came back was
logged, never the values.

**Happened:** refused every time: "`$.session.identity` answers only a mod that managed settings enable and that is
loaded in place from a source they name; woa-spike is not one". The types add that any mod can read the person's own
config file, where the login keeps the same facts. The mod did not, and shouldn't.

**Verdict: no-go.** The all-time total is per PC, and the pane says so, as the brief already plans.

### `Agent(...)` lists and depth

**Tried:** in `woa-spike-depth`, the main thread started `guild` (`tools: Agent(woa-spike:specialist), Read`) with the
task: start `specialist` and have it start `deep`, then start `other`. Then, separately, the main thread started
`specialist` (`tools: Agent(woa-spike:deep), Read`) and had it start `deep`. In `woa-spike-team`, Dima asked the Lead to
start `woa-spike:other`.

**Happened (from the mod's `agent.spawn` records, not only the agents' own reports):**

- `guild` (level 1) started `specialist` (level 2), and then **`other`, which its list doesn't name, with no deny**.
- `specialist` under `guild` (level 2) had no `Agent` tool and started nothing.
- `specialist` started by the main thread (level 1) had `Agent` and started `deep` (level 2), which ran.
- The Lead refused to start `woa-spike:other` on its own and never made the call, so the engine's check on the main
  thread's list wasn't exercised.

This matches the subagents docs: "The `Agent(agent_type)` allowlist syntax applies only to an agent running as the main
thread … In a subagent definition … any type list inside the parentheses is ignored." Depth 2 also works as they say: at
the limit, the engine withholds `Agent`.

**Verdict: the list in a subagent is a no-go as a control; depth 2 is a go.**

### Project settings in the desktop app

**Tried:** `permissions.defaultMode: "default"` and `env.CLAUDE_CODE_MAX_SUBAGENT_SPAWN_DEPTH: "2"` in each spike
project's `.claude/settings.local.json`, against `defaultMode: auto` in the user settings. Control: a new session in
`woa-test`, whose local settings set neither.

**Happened:** new sessions in both spike projects showed **Manual**, and the mod read `$.env.get(...)` as `"2"`, the
local source's `defaultMode` as `default`, the user's as `auto` and the merged one as `default`. The first prompt's
`permission_mode` was `default`. The control session in `woa-test` showed **Auto**. Depth behaved as 2 (above).

**Verdict: go.** The desktop app applies both from a project's local settings, so the milestone 0 run in `woa-test`
was almost certainly in Auto.

### Telling the pane the session runs in `auto`

**Tried:** observers on `classic.SessionStart`, `classic.UserPromptSubmit`, `classic.SubagentStart` and `classic.Stop`
reading `permission_mode`, plus `$.config.list()`.

**Happened:** after Dima switched the selector to Auto, the next prompt carried `permission_mode: auto` and the pane
showed it; its warning line is drawn from the same value (the kit test checks it). There is no event for the switch
itself: the mode is known at the next prompt, subagent start or stop. Along the way a prompt also carried
`acceptEdits`, after the approvals; what set it wasn't confirmed. `$.config.list()` has a `permissionMode` row ("Default
permission mode"), which is the setting, not the live mode.

**Verdict: go-with-limits.** The pane can warn, one prompt late at worst.

## Also recorded

- **Versions:** the desktop app's engine 2.1.317 (built 2026-11-02T22:15:13Z); the terminal's 2.1.318. The desktop app
  trails the CLI by a build.
- **Context:** a first prompt with the Lead as main agent came to 19,017 tokens of context; the same with the default
  main thread, 83,659. Why the default one is four times larger wasn't looked into.
- **Plan:** the account shows **Pro**. The v2 rules and this brief assume Max or higher.
- **The hall, seen during the v2 run:** the Lead's plain answer to Dima didn't show in the activity feed, and its
  speech bubble went too fast to read in full.

## What this changes in the brief

Proposed after the runs. Dima's review decided them and the brief now has them, with these changes: speech text goes in on
stdin to a fixed `.ps1` (not in an environment variable to `-Command`); the guard is the deny-only `PreToolUse` hook, failing
closed; the hall is checked at session start; the setup skill moves to milestone 2.

1. **Voice:** speak through Windows' own synthesizer with a fixed PowerShell command and the text in an environment
   variable, not `$.audio.speak`. A voice setting becomes possible. On macOS `$.audio.speak` would still work.
2. **Guilds need a real control.** An `Agent(...)` list in a guild lead's file restricts nothing. Options:
   - a `PreToolUse` command hook on `Agent` in the plugin, deny unless the caller's `agent_type` may start that
     `subagent_type` (a fixed table). Local, deterministic, works without the mod, and the same kind of local decision
     as the quality gate (recommended);
   - an `agent.spawn` guard in the mod, which breaks "the mod never decides";
   - one level: guild leads with no `Agent` tool, and the Lead, whose list does apply, starts specialists directly.
3. **The hall's life:** started from the mod it lives at most as long as the sessions, and a spawned one dies on a
   plugin reload. The mod checks `/api/health` at the first prompt and on a timer, and starts the hall when it is
   down. Each kill leaves the token file; the handshake makes that harmless and a new hall writes a new one.
4. **"No terminal" starts at the first message:** the pane and the hall appear once the first prompt is sent.
5. **The Auto warning** comes from `permission_mode` on the next prompt or subagent event.
6. **Settings the plugin can't set** (Manual, depth 2) work from `.claude/settings.local.json` in the desktop app. The
   milestone 4 setup skill can write them, with Dima checking the diff.
7. **Account:** not knowable, so the all-time total is per PC.
8. **Plan:** Pro, not Max, changes how fast more agents and scouts use it up.

## Checked after the review

### How the guard identifies the caller

From real hook input: the four recorded v2 runs (`server/fixtures/`, the Lead made main agent with `--agent`), and one new
capture on 5 Nov with the plugin as installed in `woa-test` (2.1.0, local scope, the Lead made main agent only by the plugin's
`settings.json`, no `--agent`): `claude -p` with `WOA_CAPTURE=1`, the Lead asking the Backend dev for one word. Only the fields
below were read; the raw capture was deleted.

| Hook input                         | `agent_id`         | `agent_type`                                         | `tool_input.subagent_type` |
| ---------------------------------- | ------------------ | ---------------------------------------------------- | -------------------------- |
| The Lead's `Agent` call, `--agent` | absent             | `world-of-agents:lead`                               | `world-of-agents:backend`  |
| The Lead's `Agent` call, settings  | absent             | `world-of-agents:lead`                               | `world-of-agents:backend`  |
| A subagent's tool call             | the subagent's own | its full name, for example `world-of-agents:backend` | (other tools)              |

So the main thread is the call with no `agent_id` and `agent_type` `world-of-agents:lead`, the same both ways, and a subagent
is named by its own `agent_type`. The Lead sent the full name as `subagent_type` in every capture (designer, backend,
reviewer). Not seen yet: a subagent calling `Agent`, since no v2 subagent has the tool. Its caller fields are the same base
fields the subagents' other calls carry; milestone 5 checks them on a real guild lead's call.

### Other checks

- **PowerShell `-File` needs an execution policy flag on Dima's PC.** Every execution-policy scope is `Undefined`, which
  means Restricted: `powershell.exe -NoProfile -NonInteractive -File echo.ps1` failed with exit 1. With
  `-ExecutionPolicy RemoteSigned` the same script ran (exit 0) and read all 32 characters it was given on stdin; marked as
  downloaded (`Zone.Identifier`, zone 3) it was refused (exit 1). `-ExecutionPolicy Bypass` ran even the marked copy. A file
  of the plugin as git installed it has no `Zone.Identifier` stream. The brief uses `RemoteSigned`.
- **A failing hook can block** (hooks docs): `"onFailure": "block"` on a command hook (Claude Code 2.1.295 or later) turns a
  hook that can't start, exits with a code other than 0 or 2, times out or prints output that doesn't parse into a block of
  the `PreToolUse` call. It has no effect on async hooks. `"allow"` skips the permission prompt; `deny` wins over `defer`,
  `ask` and `allow`.
- **Opus on Pro:** changelog 2.1.280 (22 Sep 2026): "Changed the default model on Pro and Team Standard plans from Sonnet to
  Opus".
- **One hall:** `server/main.ts` writes the token only once the port is its own, so a second hall that can't bind 4319 never
  replaces the running one's token.

## Not tested or still open

- Whether the engine refuses a main thread's call outside its `Agent(...)` list: the Lead never made one.
- A subagent's caller fields on an `Agent` call (milestone 5).
- Whether every subagent's list is ignored, not only `guild`'s: the docs say so; one case was seen.
- Whether a detached hall survives a real plugin reload, when exactly it stopped, and what set `acceptEdits`.
- `$.ui.notify` in the desktop app (the types say it has no surface there).
- The pane on the terminal and VS Code surfaces: covered by the kit test only, not run.
