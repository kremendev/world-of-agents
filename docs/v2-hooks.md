# v2 hook payloads: what Claude Code really sends

Recorded on Windows 11 (native, Git Bash) with Claude Code 2.1.312 (runs 1 to 3) and 2.1.318 (run 4): runs 1 and 2 on 28 Oct 2026, run 3 on 4 Nov, run 4 on 4 Nov.
Each run is redacted into `server/fixtures/` in the order its payloads arrived. The raw capture folders were
deleted afterwards.

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

**Run 3** (`run3-manual/`, 25 payloads): the same task in an interactive session started with
`--permission-mode default`. The Lead sent the Backend dev, which had to ask for approval, then the Reviewer.
This run captured `permission_prompt`: see `Notification` and What run 3 changed. A stray `SessionStart` from
another session, a week older, was in the capture folder and was left out.

**Run 4** (`run4-manual/`, 28 payloads): the first run watched live, Claude Code 2.1.318, started like run 3. The
Lead sent the Backend dev, which asked twice (a Write left waiting past the 6 s mark, a Bash answered before it), then the
Reviewer. Then two minutes of no typing after the final report, and a quit. This run captured `PermissionRequest`
and `idle_prompt`: see those sections and What run 4 changed.

## Fields on every event

| Field             | Seen on                                                               | Notes                                                               |
| ----------------- | --------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `hook_event_name` | all                                                                   |                                                                     |
| `session_id`      | all                                                                   | UUID                                                                |
| `agent_type`      | all                                                                   | `world-of-agents:lead` on the Lead's events (from `--agent`)        |
| `transcript_path` | all                                                                   | Full local path. Never forwarded.                                   |
| `cwd`             | all                                                                   | Full local path. Never forwarded.                                   |
| `scratchpad_dir`  | all                                                                   | Full local path. Never forwarded.                                   |
| `prompt_id`       | all but `SessionStart`                                                | UUID per user turn; a background task notification starts a new one |
| `permission_mode` | all but `SessionStart`, `SubagentStart`, `Notification`, `SessionEnd` | `"acceptEdits"` in run 1, `"auto"` in run 2, `"default"` in run 3   |
| `effort`          | `PreToolUse`, `PostToolUse`, `Stop`, `SubagentStop`                   | `{ "level": "medium" }`; the Lead's were `"xhigh"` in run 2         |
| `agent_id`        | `SubagentStart`, `SubagentStop`, and every event inside a subagent    | e.g. `"afcc4e7953aac3c28"`. The Lead's own events have none.        |

So: **no `agent_id` means the Lead**, with one exception: a `Notification` has none and the Lead's `agent_type`
even when a subagent's tool is the one waiting. Inside a subagent, `agent_type` is the subagent's
(`world-of-agents:designer`), as the brief expected.

## Per event

### `SessionStart`

`source`: `"startup"` (docs list `startup`, `resume`, `clear`, `compact`, `fork`). Runs 2 and 3 (interactive)
also have `model`: `"claude-opus-5-5"`, the Lead's model. Run 1's (`-p`) has none.

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
Bash command the dev ran; the fixtures keep the frame and redact the report.

**So far only `auto` mode has sent hand-backs.** All three runs used the same Claude Code version. Run 3 was
interactive like run 2 but sent `<task-notification>`s like run 1, so being interactive isn't the cause. The one
thing only run 2 had is `auto` mode. That is one run of each, so `send.mjs` and `map.ts` keep handling both.

**Only `prompt` tells a frame from your own prompt.** Your prompts (row 2 of each run) and the frames (run 1 rows
16 and 19, run 2 rows 12 and 20, run 3 rows 14 and 22) have the same keys, the same `permission_mode` and
`agent_type`, and each starts a new `prompt_id` the way your turns do. The only pattern is order: each frame came
right after its subagent's `SubagentStop`, which is timing, not a field. So `send.mjs` matches the exact start of
the text.

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
`run_in_background: true` for the two devs and `false` for the Reviewer. In runs 2 and 3 no Agent call had
`run_in_background`, and all came back `async_launched`, the Reviewer's too.

### `SubagentStart`

Only `agent_id` and `agent_type` (plus the common fields). **No `tool_use_id`**, so it does not say which
Agent call started it. It arrived right after its `PreToolUse` `Agent` and before the matching `PostToolUse`.

**Either can land first.** In run 3 those two hooks fired in the same millisecond (rows 4 and 5), and each hook is
its own process. If `SubagentStart` gets to the hall first, the card goes straight to In progress when it is
created, and the agent shows it. Both orders end the same.

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
hand-back instead. Run 3's have it again.

Runs 2 and 3 also have three `SubagentStop`s each with the Lead's `agent_type` and an `agent_id` that never
started (run 2 rows 10, 17, 23; run 3 rows 8, 20, 24). Most carry a short `last_assistant_message` that reads like
a suggested next prompt for you ("run it and curl localhost:3000 to verify", "commit this"), so they look like
Claude Code's prompt suggestions running as a side agent; that is a guess from the text. Run 3's row 8 repeats the
Lead's last message instead. The hall ignores them all: a `SubagentStop` with the Lead's type is not one of our
subagents.

### `Stop`

`last_assistant_message`, `stop_hook_active`, `session_crons`, and `background_tasks`: the Lead's
subagents still running, each `{ id, type: "subagent", status: "running", description, agent_type }`.
**`Stop` fired three times in one run**: once after the Lead sent the two devs (2 tasks running), once
after the first task notification (1 running), and once at the real end (`[]`).

### `SessionEnd`

`reason`: `"other"` when `-p` exits, `"prompt_input_exit"` when you quit an interactive session (runs 2 and 3).
Run 4's interactive session also ended with `"other"`, so it isn't tied to `-p`. The hall ignores the reason.

### `PermissionRequest`

Run 4 captured two (rows 10 and 13). Keys: `session_id`, `transcript_path`, `cwd`, `scratchpad_dir`, `prompt_id`,
`permission_mode`, `agent_id`, `agent_type`, `effort`, `hook_event_name`, `tool_name`, `tool_input` and
`permission_suggestions`. No `tool_use_id`.

**It says who is asking.** A subagent's request carries that subagent's `agent_id` and `agent_type`, so `map.ts`
flags that agent, with no guessing. A request with no `agent_id` is the Lead's own (from the docs and the rule on
every other event: the Lead has none; run 4 had no such request).

**It comes at once.** It fired 18 ms and 12 ms after its tool's `PreToolUse`, and row 10 came 6.021 s before the
`permission_prompt` for the same wait. A prompt you answer quickly now shows too: row 13's Bash sent no
`permission_prompt` at all.

**It can land before its own `PreToolUse`.** Each hook is its own process, and 12 ms is close. A `PreToolUse` for the
same tool within 1 s after the request is treated as that tool's own and leaves the flag up. A later one, or
another tool, means you answered.

This is the hook whose reply can allow or deny a tool call, so like every other hook it is `async`, and `send.mjs`
prints nothing and drops any reply. Only who asks and for which tool go on: its `tool_input` is the very command
or file waiting for you.

### `Notification`

Run 3 captured one `permission_prompt` (row 11), run 4 one `permission_prompt` (row 11) and one `idle_prompt` (row
26). Beyond the common fields each has only `message` and `notification_type`:

```json
{
  "agent_type": "world-of-agents:lead",
  "hook_event_name": "Notification",
  "message": "Claude needs your permission",
  "notification_type": "permission_prompt"
}
```

**`permission_prompt` does not say which subagent is waiting.** The Backend dev's Write was the tool waiting
(row 10), yet the hook has the Lead's `agent_type`, no `agent_id`, no tool name and a generic message. The docs
list no field that would say. `PermissionRequest` has named the agent by then, so once one has arrived in a session
`server/map.ts` adds nothing for a `permission_prompt` and never guesses, even if that agent's flag has already
cleared or it was the Lead asking. Only in a session with no `PermissionRequest` (the hall started mid-wait, or an
older Claude Code) does it work one out: Edit, Write and Bash are the tools that ask, and each one's `PreToolUse` comes
just before its prompt (the dev's Bash only fired once its Write had finished), so the waiting agent is the running
subagent that used one last, or the Lead if there is none. With two subagents writing at once this can name the wrong
one. An `agent_id` wins if Claude Code ever sends one. The cost: a single `PermissionRequest` post lost later in a
session shows no flag for that wait, which beats naming the wrong agent. The post goes over loopback to a running
hall, and a hall that restarts forgets the session, so the guess works again.

**It comes late, or not at all.** The docs say it fires when "the prompt has waited about six seconds", and each
keystroke defers it. Run 3 agrees: it arrived 6.0 s after the Write's `PreToolUse`, while the Bash finished 2.7 s
after its own and sent none. Run 4 is the same: 6.0 s, and none for the Bash answered at once.

**Nothing says you answered.** No hook fires when you approve, so the flag clears at that agent's next event: its
next tool call or its `SubagentStop`. During a long Bash command it stays up after you approved.

**`idle_prompt` is not a wait for approval.** It fired 60.008 s after the final `Stop` (run 4), with the Lead's
`agent_type`, no `agent_id` and the message "Claude is waiting for your input". The docs say a background agent
still running suppresses it. The Lead has finished and Claude Code waits for your next message, so `map.ts` sends
`awaiting-prompt`, which flags nobody: the status line says so in calm text, with no banner, chip or announcement.
Run 3 quit 15 s after the Lead's last turn and run 2 at 62 s, where the typing to quit may have reset the timer.

**Why run 2 had no `permission_prompt`:** it ran in `auto`, which approved the Backend dev's Bash without asking.
Since Claude Code 2.1.283, `auto` is the built-in start mode for interactive terminal and VS Code sessions, and
since 2.1.302 `claude -p` with no mode set starts in `default` (shown as Manual), not `auto`
([permission modes](https://code.claude.com/docs/en/permission-modes)). No settings file on this PC sets a mode
(user, project, managed and VS Code settings were checked), so run 2 got the interactive default. Run 1 was `-p`
with `--permission-mode acceptEdits`.

### `StopFailure`

Not captured: nothing has failed in any run. It is mapped from the docs. See Still to capture.

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
2. **Cards end at `SubagentStop`**, which all three runs send. Frame text changed between runs of the same
   version, so it never decides Done. A `<task-notification>` status other than `completed` reopens the card and
   puts its agent in `error`; a hand-back has no status, so it changes no card.
3. **The subagent's report moved** from `SubagentStop.last_assistant_message` into the hand-back, which the
   hall never reads. A `SubagentStop` without a last message says "Report sent to the Lead".
4. **Agent calls ran in the background without asking for it** (in run 3 too), so a foreground `PostToolUse`
   `completed` may be rare in interactive runs.

## What run 3 changed

1. **`permission_prompt` names nobody.** `map.ts` assumed a hook with no `agent_id` meant the Lead was waiting.
   Fed through it, run 3 flagged the Lead while the Backend dev waited, and the Lead stayed flagged for about 25 s,
   until its next event. Now the running subagent that last used Edit, Write or Bash is flagged, and the Lead keeps
   its state. See `Notification`.
2. **Interactive does not mean hand-backs.** `<task-notification>`s and `SubagentStop.last_assistant_message`
   came back in an interactive session, so neither is tied to `-p`.
3. **An Agent call and its `SubagentStart` can race.** They fired in the same millisecond. A card created or linked
   for a run that is already going now goes straight to In progress, so it can't sit at Todo while the dev works.

## What run 4 changed

1. **`PermissionRequest` replaces the guess.** It carries the asking subagent's `agent_id` and comes 6 s before
   `permission_prompt`, which now adds nothing once a `PermissionRequest` has arrived in the session. Quick answers show too.
2. **`idle_prompt` no longer flags the Lead.** It means the Lead is waiting for your next message. The Lead's
   "needs you" wording is gone: `needs-you` now always means an approval.
3. **Event times are the time of day.** The hall stamps events with `Date.now()` rather than ms since it started,
   so the activity feed can show HH:MM:SS.
4. **Free text cut at its cap ends with "…"**, which counts towards the cap.

## What `send.mjs` forwards

Only these fields go to the hall server, checked against all 105 payloads of the four runs (no path, file content
or command got through):

- `hook_event_name`, `session_id`, `agent_id`, `agent_type`, `tool_name`, `tool_use_id`,
  `notification_type`, `source`, `reason` (a `Notification`'s `message` stays behind: the type is all the hall
  needs)
- Free text: `prompt` (120 characters), `last_assistant_message` (200) and the Agent call's `description`
  (120); cut text ends with "…". The Backend dev's last message quoted the full path of the file it wrote, so free
  text is scrubbed before it is capped:
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
- For a `PermissionRequest`: only `hook_event_name`, the ids, `agent_type` and `tool_name`. Never `tool_input`,
  which is the very command or file waiting for your approval, not even for the `Agent` tool.

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

`plugin/hooks/send.test.ts` runs every fixture of every run through `allowlist()` after putting the dangerous
values back (each `<redacted>` becomes a unique sentinel, each placeholder path a real one under a test home
folder) and checks that no sentinel, home folder spelling or path field comes out. It also pins the
`<task-notification>` detection on runs 1 and 3, the hand-back detection and the tag safety net on run 2, and
covers the home-folder and key scrubbing. `server/map.test.ts` plays all four runs through `allowlist()` and
`mapHook()`.

## Still to capture

**`StopFailure`, and a `<task-notification>` other than `completed`.** These need an API error or a failed or
killed subagent, so they may stay uncaptured. Both are mapped from the docs and hand-built tests. Whether a
failed subagent still sends `SubagentStop` is also unknown.
