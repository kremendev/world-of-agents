# v2 hook payloads: what Claude Code really sends

Recorded on 28 Oct 2026 with Claude Code 2.1.312 on Windows 11 (native, Git Bash), Node 26.12.1.

One run in a scratch git repo: `claude -p "<task>" --plugin-dir <repo>/plugin --agent world-of-agents:lead
--permission-mode acceptEdits` with `WOA_CAPTURE=1`. The Lead sent the Designer and the Backend dev in the
background, then the Reviewer in the foreground. 28 payloads, redacted into `server/fixtures/run1-background/`
in the order they arrived. The raw capture folder was deleted afterwards.

`-p` mode was used because this session can't drive an interactive terminal. `-p` shows no approval prompts,
so `Notification` did not fire, and nothing failed, so `StopFailure` did not fire either. Both still need a
capture from an interactive run (see Still to capture).

## Fields on every event

| Field             | Seen on                                                            | Notes                                                               |
| ----------------- | ------------------------------------------------------------------ | ------------------------------------------------------------------- |
| `hook_event_name` | all                                                                |                                                                     |
| `session_id`      | all                                                                | UUID                                                                |
| `agent_type`      | all                                                                | `world-of-agents:lead` on the Lead's events (from `--agent`)        |
| `transcript_path` | all                                                                | Full local path. Never forwarded.                                   |
| `cwd`             | all                                                                | Full local path. Never forwarded.                                   |
| `scratchpad_dir`  | all                                                                | Full local path. Never forwarded.                                   |
| `prompt_id`       | all but `SessionStart`                                             | UUID per user turn; a background task notification starts a new one |
| `permission_mode` | all but `SessionStart`, `SubagentStart`, `SessionEnd`              | `"acceptEdits"` in this run                                         |
| `effort`          | `PreToolUse`, `PostToolUse`, `Stop`, `SubagentStop`                | `{ "level": "medium" }`                                             |
| `agent_id`        | `SubagentStart`, `SubagentStop`, and every event inside a subagent | e.g. `"afcc4e7953aac3c28"`. The Lead's own events have none.        |

So: **no `agent_id` means the Lead**. Inside a subagent, `agent_type` is the subagent's
(`world-of-agents:designer`), as the brief expected.

## Per event

### `SessionStart`

`source`: `"startup"` (docs list `startup`, `resume`, `clear`, `compact`, `fork`).

### `UserPromptSubmit`

`prompt`: the full text. **It also fires when a background subagent finishes**: Claude Code re-prompts the
Lead with a `<task-notification>` as if the user typed it.

```text
<task-notification>
<task-id>aa4e749e181be82c3</task-id>          = the subagent's agent_id
<tool-use-id>toolu_01TcTEJ…</tool-use-id>     = the Agent call's tool_use_id
<output-file>…</output-file>                  full local path
<status>completed</status>
<summary>Agent "node:http static server" finished</summary>
<note>… the same task-id may notify more than once.</note>
<result>…</result>                            the subagent's whole final message
<usage>…</usage>
</task-notification>
```

### `PreToolUse`

`tool_name`, `tool_input`, `tool_use_id`. `tool_input` per tool:

| Tool           | `tool_input` keys                                             |
| -------------- | ------------------------------------------------------------- |
| `Agent` (Lead) | `description`, `prompt`, `subagent_type`, `run_in_background` |
| `Read`         | `file_path`                                                   |
| `Glob`         | `pattern` (and `path` when given)                             |
| `Write`        | `file_path`, `content`                                        |
| `Bash`         | `command` (and `description` when given)                      |

`subagent_type` is the full name: `"world-of-agents:designer"`. The Lead chose
`run_in_background: true` for the two devs and `false` for the Reviewer.

### `SubagentStart`

Only `agent_id` and `agent_type` (plus the common fields). **No `tool_use_id`**, so it does not say which
Agent call started it. It arrived right after its `PreToolUse` `Agent` and before the matching `PostToolUse`.

### `PostToolUse` (tool `Agent`)

Same fields as `PreToolUse`, plus `tool_response` and `duration_ms`. What `tool_response` holds depends
on `run_in_background`:

| Agent call | Arrives                         | `tool_response.status` | Other `tool_response` keys                                                                 |
| ---------- | ------------------------------- | ---------------------- | ------------------------------------------------------------------------------------------ |
| Background | at once (`duration_ms` 6 to 7)  | `"async_launched"`     | `isAsync`, `agentId`, `description`, `resolvedModel`, `prompt`, `outputFile`, …            |
| Foreground | when the subagent ends (10.8 s) | `"completed"`          | `agentId`, `agentType`, `content`, `resolvedModel`, `totalTokens`, `usage`, `toolStats`, … |

`tool_response.agentId` is the link between the Agent call (`tool_use_id`) and the subagent (`agent_id`).
`resolvedModel` was `"claude-sonnet-5-5"` for all three subagents.

**The Lead's model is in no hook payload.** Hooks carry `effort` but not the main thread's model. The session
transcript has it: in run 1's transcript every Lead reply (10 of 10) has `message.model`
`"claude-opus-5-5"`, and each subagent transcript (`subagents/agent-<agent_id>.jsonl`) has
`"claude-sonnet-5-5"`. The `-p` stream's `system` `init` message also said `model: "claude-opus-5-5"`.
`send.mjs` never reads transcripts, so the hall shows the model from the roster, not from events.

### `SubagentStop`

`agent_id`, `agent_type`, `last_assistant_message` (the full final text), `agent_transcript_path` (local
path), `stop_hook_active`, `background_tasks`, `session_crons`. In `background_tasks` the stopping agent
itself is still listed as `"running"`, so don't read it here.

### `Stop`

`last_assistant_message`, `stop_hook_active`, `session_crons`, and `background_tasks`: the Lead's
subagents still running, each `{ id, type: "subagent", status: "running", description, agent_type }`.
**`Stop` fired three times in one run**: once after the Lead sent the two devs (2 tasks running), once
after the first task notification (1 running), and once at the real end (`[]`).

### `SessionEnd`

`reason`: `"other"` when `-p` exits.

### `Notification`, `StopFailure`

Not captured yet. The interactive run for `Notification` left no capture on this PC (no
`~/.world-of-agents/capture/` folder, and no new Claude Code session in `~/.claude/projects/`), so
**whether `permission_prompt` names the waiting subagent is still unknown**. `server/fixtures/run2-interactive/`
does not exist yet. See Still to capture.

## What changes in the run table

The payloads win over the brief. `docs/v2-brief.md` has been corrected to match.

1. **`Agent(...)` names need the prefix.** With `Agent(designer, …)` every call failed with
   `Agent type 'designer' not found. Available agents: none`. With
   `Agent(world-of-agents:designer, …)` all four work, and the Lead sends `subagent_type`
   `world-of-agents:<name>`.
2. **`PostToolUse` `Agent` is not always "task done".** It means done only when
   `tool_response.status` is `"completed"`. For `"async_launched"` it means "started in the background"; the
   task is done when that `agent_id`'s `SubagentStop` arrives, or the `<task-notification>` for its
   `tool_use_id` with `<status>completed</status>`.
3. **A `<task-notification>` prompt is not the user.** It must not replace the run text or reset anything.
   The Lead reads a result: Lead `thinking`.
4. **`Stop` with running `background_tasks` is not the end.** The Lead is `waiting` on its team. Lead `done`
   and "everyone rests" only when `background_tasks` is empty.
5. **Matching a subagent to its card.** `SubagentStart` has no `tool_use_id`. Match it to the oldest open
   card with the same `subagent_type` that has no agent yet; when `PostToolUse` brings `tool_response.agentId`,
   that link wins. Background and foreground calls both send `agentId`.

## What `send.mjs` forwards

Only these fields go to the hall server, checked against all 28 payloads (no path, file content or command
got through):

- `hook_event_name`, `session_id`, `agent_id`, `agent_type`, `tool_name`, `tool_use_id`,
  `notification_type`, `source`, `reason`
- Free text: `prompt` (120 characters), `last_assistant_message` (200) and the Agent call's `description`
  (120). The Backend dev's last message quoted the full path of the file it wrote, so free text is scrubbed
  before it is capped:
  - the home folder becomes `~` in every spelling: `C:\Users\<name>`, `C:/Users/<name>`,
    `/c/Users/<name>`, any case, whole folder names only;
  - key-shaped strings become `[redacted]`: `sk-ant-…`, `ghp_` / `gho_` / `ghu_` / `ghs_` / `ghr_…`,
    `github_pat_…`, `AKIA` + 16 characters, and `-----BEGIN … -----` blocks (to the END line, or to the
    end of the text when cut off).
- For `Agent` only: `tool_input.subagent_type`, `tool_input.run_in_background`, `tool_response.status` and
  `tool_response.agentId`.
- `background_tasks` as `{ id, type, status, agent_type }` (at most 20).
- For a `<task-notification>` prompt: `task_notification: { task_id, tool_use_id, status }` and no `prompt`.

## Other checks in milestone 1

- **`claude plugin validate ./plugin` passes.** It also lists marketplace checks (no README, LICENSE or icon in
  the plugin folder); those only matter for publishing to the plugin directory.
- **The Lead can't start `Explore` or `claude-code-guide`.** Asked directly, the Lead refused because its
  prompt says so. To test the lock itself, a scratch copy of the plugin without that prompt rule called
  both; Claude Code answered `Agent type 'Explore' not found. Available agents: world-of-agents:backend,
world-of-agents:designer, world-of-agents:frontend, world-of-agents:reviewer`, and the same for
  `claude-code-guide`.
- **Hooks print nothing.** `send.mjs` printed nothing and exited 0 with: no token file, empty stdin, invalid
  JSON, a JSON array, a token but no server, a server that never answers (gave up at about 900 ms), and a
  server that answers `{"decision":"block","reason":"…"}` (reply dropped). The stream-json output of the
  run had no hook output either.
- **Bash in `-p` mode** was denied without a prompt (the Backend dev reported it couldn't run
  `node --check`). Interactive runs ask instead.

## Tests

`plugin/hooks/send.test.ts` runs every fixture through `allowlist()` after putting the dangerous values back
(each `<redacted>` becomes a unique sentinel, each placeholder path a real one under a test home folder) and
checks that no sentinel, home folder spelling or path field comes out. It also pins the
`<task-notification>` detection on run 1's fixtures and covers the home-folder and key scrubbing.

## Still to capture

One short interactive run, to fill in `Notification` (`permission_prompt`, `idle_prompt`) and to see
whether it names the subagent that is waiting:

```bash
cd <a scratch git repo>
WOA_CAPTURE=1 CLAUDE_CODE_MAX_SUBAGENT_SPAWN_DEPTH=1 claude --plugin-dir "<repo>/plugin" --agent world-of-agents:lead
```

Ask for a task that needs Bash in a subagent (for example "have the backend dev add server.js and run
`node --check` on it"), approve or deny the prompt, wait a minute at the end for `idle_prompt`, then quit.
`StopFailure` needs an API error, so it may stay uncaptured; it is mapped from the docs.

Check `ls ~/.world-of-agents/capture` before quitting: if it is empty, the plugin's hooks didn't run (check
`/hooks` in that session) or `WOA_CAPTURE=1` wasn't set in that shell.
