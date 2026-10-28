# v2 hook payloads: what Claude Code really sends

Recorded on 28 Oct 2026 with Claude Code 2.1.312 on Windows 11 (native, Git Bash). Two runs, each redacted
into `server/fixtures/` in the order its payloads arrived. The raw capture folders were deleted afterwards.

**Run 1** (`run1-background/`, 28 payloads, Node 26.12.1), in a scratch git repo: `claude -p "<task>" --plugin-dir
<repo>/plugin --agent world-of-agents:lead --permission-mode acceptEdits` with `WOA_CAPTURE=1`. The Lead sent
the Designer and the Backend dev in the background, then the Reviewer in the foreground. `-p` mode was used
because that session couldn't drive an interactive terminal. `-p` shows no approval prompts, so `Notification`
did not fire, and nothing failed, so `StopFailure` did not fire either.

**Run 2** (`run2-interactive/`, 24 payloads): an interactive session with the plugin and
`--agent world-of-agents:lead`, with `WOA_CAPTURE=1`. The Lead sent the Backend dev (it wrote `server.js` and
ran `node --check` in Bash), then the Reviewer. The whole session ran in `auto` permission mode (Claude Code's
built-in start mode for interactive sessions, see `Notification`), so it brought no `Notification` either, but
background results came back in a new form: see What run 2 changed.

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
| `permission_mode` | all but `SessionStart`, `SubagentStart`, `SessionEnd`              | `"acceptEdits"` in run 1, `"auto"` in run 2                         |
| `effort`          | `PreToolUse`, `PostToolUse`, `Stop`, `SubagentStop`                | `{ "level": "medium" }`; the Lead's were `"xhigh"` in run 2         |
| `agent_id`        | `SubagentStart`, `SubagentStop`, and every event inside a subagent | e.g. `"afcc4e7953aac3c28"`. The Lead's own events have none.        |

So: **no `agent_id` means the Lead**. Inside a subagent, `agent_type` is the subagent's
(`world-of-agents:designer`), as the brief expected.

## Per event

### `SessionStart`

`source`: `"startup"` (docs list `startup`, `resume`, `clear`, `compact`, `fork`). Run 2's (interactive) also
has `model`: `"claude-opus-5-5"`, the Lead's model. Run 1's (`-p`) has none.

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

**In run 2 there was no `<task-notification>`.** Each background result came as an `<agent-message>`
hand-back, again as a `UserPromptSubmit`:

```text
<agent-message from="a99a671337edc9498">       = the subagent's agent_id
[Subagent hand-back] The text below is the final report of a subagent this session delegated to. …
The report follows:
  …                                            the subagent's whole final report, every line indented
</agent-message>
```

It has no `<status>` and no tool-use id, only `from`. The report held the full contents of `server.js` and the
Bash command the dev ran; the fixtures keep the frame and redact the report. Run 2 used the same Claude Code
version as run 1, so the change comes from how it ran: interactive instead of `-p`, or `auto` instead of
`acceptEdits`. Which of the two is not known.

**Only `prompt` tells a frame from your own prompt.** Your prompts (run 1 row 2, run 2 row 2) and the frames
(run 1 rows 16 and 19, run 2 rows 12 and 20) have the same keys, the same `permission_mode` and `agent_type`,
and each starts a new `prompt_id` the way your turns do. The only pattern is order: each frame came right after
its subagent's `SubagentStop` (1 to 4 ms later in run 2), which is timing, not a field. So `send.mjs` matches
the exact start of the text.

### `PreToolUse`

`tool_name`, `tool_input`, `tool_use_id`. `tool_input` per tool:

| Tool           | `tool_input` keys                                             |
| -------------- | ------------------------------------------------------------- |
| `Agent` (Lead) | `description`, `prompt`, `subagent_type`, `run_in_background` |
| `Read`         | `file_path`                                                   |
| `Glob`         | `pattern` (and `path` when given)                             |
| `Write`        | `file_path`, `content`                                        |
| `Bash`         | `command` (and `description` when given)                      |

`subagent_type` is the full name: `"world-of-agents:designer"`. In run 1 the Lead chose
`run_in_background: true` for the two devs and `false` for the Reviewer. In run 2 neither Agent call had
`run_in_background`, and both came back `async_launched`, the Reviewer's too.

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

**In run 1 the Lead's model is in no hook payload** (run 2's `SessionStart` has it, see above, but `send.mjs`
doesn't forward it). Hooks carry `effort` but not the main thread's model. The session
transcript has it: in run 1's transcript every Lead reply (10 of 10) has `message.model`
`"claude-opus-5-5"`, and each subagent transcript (`subagents/agent-<agent_id>.jsonl`) has
`"claude-sonnet-5-5"`. The `-p` stream's `system` `init` message also said `model: "claude-opus-5-5"`.
`send.mjs` never reads transcripts, so the hall shows the model from the roster, not from events.

### `SubagentStop`

`agent_id`, `agent_type`, `last_assistant_message` (the full final text), `agent_transcript_path` (local
path), `stop_hook_active`, `background_tasks`, `session_crons`. In `background_tasks` the stopping agent
itself is still listed as `"running"`, so don't read it here.

In run 2 the two real subagents' `SubagentStop` had **no `last_assistant_message`**: their report came in the
hand-back instead. Run 2 also has three `SubagentStop`s with the Lead's `agent_type` and an `agent_id` that
never started (rows 10, 17 and 23). Rows 17 and 23 carry a short `last_assistant_message` that reads like a
suggested next prompt for you ("run it and curl localhost:3000 to verify"), so they look like Claude Code's
prompt suggestions running as a side agent; that is a guess from the text. The hall already ignores them: a
`SubagentStop` with the Lead's type is not one of our subagents.

### `Stop`

`last_assistant_message`, `stop_hook_active`, `session_crons`, and `background_tasks`: the Lead's
subagents still running, each `{ id, type: "subagent", status: "running", description, agent_type }`.
**`Stop` fired three times in one run**: once after the Lead sent the two devs (2 tasks running), once
after the first task notification (1 running), and once at the real end (`[]`).

### `SessionEnd`

`reason`: `"other"` when `-p` exits, `"prompt_input_exit"` when you quit an interactive session (run 2).

### `Notification`, `StopFailure`

Still not captured. Run 2 was meant to fill in `Notification`, but the whole session ran in `auto` permission
mode (`permission_mode` on every payload). `auto` approved the Backend dev's Bash without asking, so no
`permission_prompt` fired. No `idle_prompt` either: the session ended 62 s after the Lead's last turn.

Why `auto`: since Claude Code 2.1.283, `auto` is the built-in start mode for interactive terminal and VS Code
sessions, and since 2.1.302 `claude -p` with no mode set starts in `default` (shown as Manual), not `auto`
([permission modes](https://code.claude.com/docs/en/permission-modes)). No settings file on this PC sets a mode
(user, project, managed and VS Code settings were checked), so run 2 got the interactive default. Run 1 was `-p`
with `--permission-mode acceptEdits`, which is why the two runs differ.

So **whether `permission_prompt` names the waiting subagent is still unknown**. `server/map.ts` handles both: with
an `agent_id` that subagent needs you, without one the Lead does. Nothing failed, so there was no
`StopFailure`. See Still to capture.

## What changes in the run table

The payloads win over the brief. `docs/v2-brief.md` has been corrected to match.

1. **`Agent(...)` names need the prefix.** With `Agent(designer, …)` every call failed with
   `Agent type 'designer' not found. Available agents: none`. With
   `Agent(world-of-agents:designer, …)` all four work, and the Lead sends `subagent_type`
   `world-of-agents:<name>`.
2. **`PostToolUse` `Agent` is not always "task done".** It means done only when
   `tool_response.status` is `"completed"`. For `"async_launched"` it means "started in the background"; the
   task is done when that `agent_id`'s `SubagentStop` arrives (see What run 2 changed).
3. **A `<task-notification>` prompt is not the user.** It must not replace the run text or reset anything.
   The Lead reads a result: Lead `thinking`.
4. **`Stop` with running `background_tasks` is not the end.** The Lead is `waiting` on its team. Lead `done`
   and "everyone rests" only when `background_tasks` is empty.
5. **Matching a subagent to its card.** `SubagentStart` has no `tool_use_id`. Match it to the oldest open
   card with the same `subagent_type` that has no agent yet; when `PostToolUse` brings `tool_response.agentId`,
   that link wins. Background and foreground calls both send `agentId`.

## What run 2 changed

Before this was handled, run 2 fed through `allowlist()` and `mapHook()` replaced the header's run text with
`<agent-message from="…` twice and ended with both cards In progress while everyone was idle. Now:

1. **Frames never reach the hall as text.** `send.mjs` recognises `<task-notification>` and
   `<agent-message from="` by their exact start and forwards only ids, status and `from`. Any other prompt that
   starts with a tag forwards no text at all, so a frame Claude Code changes or adds can't leak its contents
   (the hand-backs held file contents) and can't replace the run text.
2. **Cards end at `SubagentStop`**, which both kinds of run send. Frame text changed between two runs of the
   same version, so it never decides Done. A `<task-notification>` status other than `completed` reopens the
   card and puts its agent in `error`; a hand-back has no status, so it changes no card.
3. **The subagent's report moved** from `SubagentStop.last_assistant_message` into the hand-back, which the
   hall never reads. A `SubagentStop` without a last message says "Report sent to the Lead".
4. **Agent calls ran in the background without asking for it**, so a foreground `PostToolUse` `completed` may
   be rare in interactive runs.

## What `send.mjs` forwards

Only these fields go to the hall server, checked against all 52 payloads of both runs (no path, file content
or command got through):

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
- For a prompt that starts with `<task-notification>`: `task_notification: { task_id, tool_use_id, status }`
  and no `prompt`. For one that starts with `<agent-message from="…">`: `agent_message: { from }` and no
  `prompt`. Ids, status and `from` must be id-shaped (letters, digits, `_`, `-`, up to 100), so no free text
  rides along. Any other prompt that starts with `<` and a tag name: no `prompt` at all.

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

`plugin/hooks/send.test.ts` runs every fixture of both runs through `allowlist()` after putting the dangerous values back
(each `<redacted>` becomes a unique sentinel, each placeholder path a real one under a test home folder) and
checks that no sentinel, home folder spelling or path field comes out. It also pins the
`<task-notification>` detection on run 1's fixtures, the hand-back detection and the tag safety net on run 2's,
and covers the home-folder and key scrubbing. `server/map.test.ts` plays both runs through `allowlist()` and
`mapHook()`.

## Still to capture

One more short interactive run, to fill in `Notification` (`permission_prompt`, `idle_prompt`) and to see
whether it names the subagent that is waiting. An interactive session starts in `auto`, which approves Bash
without asking, so start this one in `default` explicitly. `default` is the config value (what hooks report
in `permission_mode`); Claude Code shows it as Manual and also accepts `manual`:

```bash
cd <a scratch git repo>
WOA_CAPTURE=1 CLAUDE_CODE_MAX_SUBAGENT_SPAWN_DEPTH=1 claude --plugin-dir "<repo>/plugin" --agent world-of-agents:lead --permission-mode default
```

Ask for a task that needs Bash in a subagent (for example "have the backend dev add server.js and run
`node --check` on it"). If Bash runs without asking you, the session is not in the default mode: stop and check
the mode (Shift+Tab cycles it). Approve or deny the prompt, then wait two minutes at the end for
`idle_prompt` before you quit (run 2 quit after 62 s and got none). `StopFailure` needs an API error, so it may
stay uncaptured; it is mapped from the docs.

Check `ls ~/.world-of-agents/capture` before quitting: if it is empty, the plugin's hooks didn't run (check
`/hooks` in that session) or `WOA_CAPTURE=1` wasn't set in that shell.
