# v3 milestone 2: the plan

Milestone 2 from `docs/v3-brief.md`, cut into four parts. Each part ends with `npm run check` and a stop for Dima's review;
nothing is committed until Dima says so. Decisions are from Dima's review on 6 Nov 2026; facts were checked on 5 and 6 Nov.

| Part   | What                                                                                     | Ends with                     |
| ------ | ---------------------------------------------------------------------------------------- | ----------------------------- |
| **2a** | Safety base: the guard hook, the setup-project skill, and a desktop dev install          | check, stop                   |
| **2b** | The pane: mod toolchain, team pane, who needs you, Auto warning, usage, presets, link    | check, stop                   |
| **2c** | Processes: prebuilt hall in the plugin, hall start and restart, voice                    | check, stop                   |
| **2d** | Hall fixes: the Lead's answer in the feed, bubbles, hurrying, desk time, links, Reviewer | check, stop, then the release |

Why four: the first cut's 2b needed two new toolchains (tests and types for a mod, and a bundled hall build) on top of every
pane feature and all the process spawning. Spawning processes (the hall, PowerShell) is where milestone 2's risk sits, so it
gets a review of its own.

**The release closes the milestone: `v3.0.0`.** It's a major because the guard now denies Claude Code's built-in agents, a
change in behaviour. Later milestones are minors (the ledger is `v3.1.0`, and so on). The release bumps `plugin.json`, runs
the hall freshness check, tags, writes the notes and moves the README pin, all on Dima's go. The README names the minimum
Claude Code version: 2.1.295 or later, for `onFailure`. The done-when ("you never touch a terminal") is then checked with the
plugin installed from GitHub through the desktop app's own Plugins screen, which also settles milestone 0's done-when.

## How the desktop checks get the plugin (set up in 2a)

The marketplace name `world-of-agents` is taken in the user settings by the GitHub pin, so the working copy can't be added
under that name. The spike's way works instead: a dev marketplace folder outside the repo, `~/Downloads/woa-dev/`, holding
`.claude-plugin/marketplace.json` (name `woa-dev`) and `plugin`, a copy of `agent-office/plugin`. A junction was tried first
and Claude Code refuses it ("its marketplace entry path does not stay inside the marketplace directory (… link-traversing
entry …)"), so the copy is refreshed by hand after each change (the command is in `CLAUDE.md`). A test project,
`~/Downloads/woa-m2-test/`, installs `world-of-agents@woa-dev` at local scope. A plugin from a folder marketplace is read in
place, so a refresh plus `/reload-plugins` reaches the desktop session. In the terminal, `woa` already loads the working
copy.

Real runs cost plan, and the plan is Pro: the checks below use the smallest tasks that show the behaviour.

## 2a: safety base

**Files**

- `plugin/hooks/guard.mjs` (new) and `guard.d.mts` (its types for the tests). Node built-ins only. It reads stdin (capped),
  then:
  - for `Agent`, it identifies the caller and checks the table;
  - for `Bash` and `PowerShell`, it checks whether the command names a `.env` file;
  - it prints the `PreToolUse` deny JSON or nothing, always exits 0, and turns every error it catches into a deny.
- `plugin/hooks/hooks.json`: a second `PreToolUse` entry, matcher `Agent|Bash|PowerShell`, `command: "node"`,
  `args: ["${CLAUDE_PLUGIN_ROOT}/hooks/guard.mjs"]`, `timeout: 5`, `"onFailure": "block"`, no `async`. That is the same
  exec form `send.mjs` uses in installs today. `send.mjs`'s own async entry stays.
- `plugin/hooks/guard.test.ts` (new, Vitest), next to `send.test.ts` for now (2b moves both).
- `server/install.test.ts`: today it pins every hook to `send.mjs` with `async: true`. It changes to: every `send.mjs` entry is
  async, and there is exactly one guard entry, on `PreToolUse`, matcher `Agent|Bash|PowerShell`, not async, with
  `onFailure` `block` and a short timeout. `guard.mjs` imports only `node:` modules.
- `src/office/roster.test.ts`: the guard's main-thread row equals the Lead's `Agent(...)` list and the roster, so the three
  can't drift.
- Two skills, both `disable-model-invocation: true`, so only Dima starts them:
  - `plugin/skills/setup-project/SKILL.md`: the dry run;
  - `plugin/skills/setup-project-write/SKILL.md`: the write; typing it is the yes.

  Each runs one fixed command through an injected skill command, `` !`node '${CLAUDE_PLUGIN_ROOT}/skills/setup-project/setup.mjs'` ``
  (plus `--write` in the second), pre-approved by an `allowed-tools` rule for exactly that command. Claude Code runs it
  before the model sees anything; the model only explains the output and names the next step. The first design had the
  model run the script and ask with `AskUserQuestion`; the desktop check showed the Lead has no shell, so it couldn't run.

- `plugin/skills/setup-project/template.json` (new): the fixed settings. `setup.mjs` (new): the script that copies them.
  Without `--write` it writes nothing. It prints where it would write and the result, or the template and the file's key
  names and why it stops. It exits 0 whenever it printed a result, because a non-zero exit aborts the skill.
  - **No file yet:** the template, written with no overwrite allowed.
  - **A file holding only `enabledPlugins` and/or `extraKnownMarketplaces`** (what an install writes): the template's keys
    are added, and those two are kept exactly as they were.
  - **Anything else** (another key, invalid JSON, a file tracked by git): it shows both and stops, writing nothing.
  - **`.gitignore`:** unless the project's own ignore rules already cover `.claude/settings.local.json`, the write appends
    that one line. Dima's global git ignore doesn't count, because it doesn't travel with the repo.

- `server/setup-skill.test.ts` (new).
- `README.md` and `plugin/README.md`: the guard, the skill, and Claude Code 2.1.295 or later for the guard to fail closed.
  `CLAUDE.md`: layout, security rules for the guard and the skill, and the dev install in the testing notes.

**Tests**

- **The table:** the Lead (no `agent_id`, `agent_type` `world-of-agents:lead`) starting each of the four gets no output.
  Each of `Explore`, `Plan`, `general-purpose`, `claude-code-guide`, `statusline-setup` and an invented name is denied.
- **Fail closed:**
  - a bare `backend` is denied;
  - a subagent caller (with `agent_id`) is denied, and so is a subagent of type `lead`;
  - a main thread with no `agent_type`, or with another one, is denied;
  - so is a missing `tool_input`, `subagent_type` or `command`;
  - so is a `tool_name` outside the matcher, empty stdin, non-JSON and oversized stdin.
- **The `.env` rule:**
  - denied: `cat .env`, `cat .env.local`, `type .\.env`, `Get-Content ".env.production"`, `cat 'my dir/.env'`,
    `grep KEY config/.env`, `source .env`;
  - passes: `echo environment`, `node -e "console.log(process.env.HOME)"`, `printenv`, `npm run env:check`, `ls -la`.
- **Never allow:** the real script runs as a process over every input above plus a list of odd ones. Its stdout is always
  empty or exactly the deny JSON, never a `permissionDecision` other than `deny`, and it exits 0.
- **`onFailure` block:** `install.test.ts` pins it in the config. The engine's half (a missing or crashing script blocks the
  call) needs a model run, so it's a hand check below.
- **The skills:**
  - `template.json` is exactly the agreed settings, with no git rule (a git wildcard would allow `--output=<file>`);
  - each `SKILL.md` has `disable-model-invocation: true`, exactly one injected command, an `allowed-tools` rule for exactly
    that command, the path in single quotes, no `$ARGUMENTS` and no `AskUserQuestion`, and says what a disabled shell means;
  - `setup.mjs` in temp projects:
    - with no file, nothing is written until `--write`, and then the result is the exact template;
    - an install-only file gets the template's keys, with `enabledPlugins` and `extraKnownMarketplaces` unchanged;
    - another key, invalid JSON or a tracked file means nothing is written, even with `--write`, and it exits 0;
    - a second `--write` changes nothing;
    - the `.gitignore` line is appended once, and not when the project already covers the file;
    - a space in the plugin folder or the project folder works.

**By hand**

- **Terminal, the real deny:**
  - **Setup:** a throwaway main agent with `Agent` and `Bash` lives in a scratch test project's `.claude/agents/`, never in
    `plugin/`, and is deleted after. It runs next to the working-copy plugin. The test project holds a dummy `.env`.
  - **Agent calls:** it tries `Explore` and `world-of-agents:backend`. Both are denied with the guard's reason, because that
    caller is unknown. This is the only way to reach the guard's `Agent` deny for real, since the Lead's own list stops
    other types before the guard sees them.
  - **The `.env` rule:** it runs `cat .env`, which is denied, and `echo environment`, which runs.
- **Terminal, a normal handoff:** the Lead hands a one-word task to the Backend dev, and the guard stays silent.
- **Terminal, the block:** a scratch copy of the plugin with `guard.mjs` missing. The Lead's handoff is blocked with "failed;
  blocking because onFailure is "block"".
- **Terminal, the setup skills** (no login needed: the injected command runs before any model call):
  - in Manual and in Auto, with the Lead as main agent, the dry run writes nothing, the write writes, and a second write
    changes nothing;
  - from a plugin copy under a folder with a space, the write works;
  - with `disableSkillShellExecution: true`, nothing runs.
- **Terminal, with the model:**
  - the dry run is explained and names the write skill;
  - asked to run the setup, the Lead can't (it has no Skill tool), and a throwaway agent that has the Skill tool is refused
    by the engine for both skills;
  - with shell execution disabled, the model says why nothing was written.
- **Desktop (Dima), the test project, which starts in Auto from the user settings:**
  - `/world-of-agents:setup-project` shows the result and writes nothing;
  - `/world-of-agents:setup-project-write` writes;
  - the next new session shows Manual and `.gitignore` covers the file.

## 2b: the pane

**Files**

- `plugin/hooks/hooks.json`: `"modules": ["./mod/register.tsx"]` beside the classic hooks (a scratch copy with both
  validated).
- `plugin/.claude-plugin/plugin.json`: `"types"` naming the mod's state contract.
- `plugin/hooks/mod/` (new):
  - `register.tsx`: the hooks;
  - `pane.tsx`: the drawing;
  - `roster.ts`: names of the five agents (guilds come with milestone 5, decided after the build);
  - `presets.ts`: the fixed prompt texts;
  - `types.d.ts`: the state contract;
  - `*.test.tsx`: kit tests.
- `plugin/skills/team/SKILL.md` (added after the build): `/world-of-agents:team`, `disable-model-invocation: true`, which the
  mod answers on `command.run` by opening the pane, without `next`, so the skill's text never reaches the model. A mod's own
  `$.command.register` can't take a `:` in its name or `disable-model-invocation`, so the command is a skill.
- `tests/invisible.test.ts` (added after the build): no bidi controls, zero-width characters or U+FEFF in any text file git
  tracks or would add, the generated types included.
- **Tests apart:** `claude plugin test <dir>` runs every `*.test.ts(x)` under its folder, and Vitest takes every test file it
  finds. So `send.test.ts`, `handshake.test.ts` and `guard.test.ts` move to `tests/plugin/`, the Vitest config excludes
  `plugin/**`, and everything under `plugin/` that is a test is a kit test. `tsconfig.node.json`'s `include` follows the move.
- **Types, committed and pinned:** `tools/claude-code-types/index.d.ts`. It holds only the mods API: the `claude-code` and
  `claude-code/testing` modules. The engine's file also carries two tool tables, one listing the tools of whatever MCP
  servers are connected, which is personal and isn't needed.
  - A header comment names the Claude Code version it came from.
  - `.gitattributes` marks it `linguist-generated=true -diff`.
  - `npm run types:update` regenerates it on purpose; `npm run check` never does. Its source is the copy the
    plugin-authoring skill writes for the running Claude Code version (the kit lays no types, checked); if there is none
    for that version, the script says how to get one.
  - The generator fails on any local path, user name or email address (`C:\Users`, a home path, the account name, `@…`),
    and the committed file is searched for them once more before it goes in.
  - `tsconfig.mod.json` type-checks the mod against it, and `npm run typecheck` runs it.
- `package.json`: `npm run check` also runs `claude plugin test plugin` and `scripts/mod-surface.mjs`. That script runs
  `claude plugin validate plugin --json` and fails if the events, `$` calls, env names or state keys grow past
  `scripts/mod-surface.json`: the brief's "the list shows in every pull request".
- `README.md` (the pane, and that it appears after the first message), `plugin/README.md`, `CLAUDE.md` (layout, the two test
  runners, `types:update`).

**Tests (kit, on the terminal, desktop and vscode surfaces)**

- The five agents with their states from `$.agent.list()`. Names come from `roster.ts`, and an Agent call's `description`
  shows as plain `Text`. No guild grouping before milestone 5.
- Who needs you: an `ask` on `tool.check` names the agent from its `agentId`, and the entry clears when that call resolves.
- The mode warning, the mode named first: "Auto: Nothing asks you before acting.", "Bypass: Nothing asks you before
  acting." and "Accept edits: Edits aren't asked, and npm test runs whatever they change.", none on any other mode.
- An Agent call's `description` is cut at 120 code points, so an emoji is never split.
- `/world-of-agents:team` opens the pane and answers itself; the skill beneath never runs.
- Context and plan limits from `session.measure`.
- The `Link` goes exactly to `http://localhost:4319`. No `Markdown` element anywhere in the tree.
- `tool.check` and `agent.spawn` hand back allow, ask, deny and a deny unchanged (the spike's tests, kept).
- Each preset puts exactly its constant after the draft through `$.prompt.fill` (`append`), and never submits or reads the
  box. A source check finds `$.prompt` nowhere but that one call in `presets.ts`. (Was `$.prompt.submit`, dimmed while the
  Lead's turn ran; decision 21.)
- When the box doesn't take the text, the pane says why in one line.
- (Vitest) `roster.ts`'s ids and names equal `src/office/roster.ts` (the page's roster has no guilds yet).

**By hand (desktop, the dev install)**

- The pane appears after the first message. Where the surface puts it, wide and narrowed, is recorded, not chosen.
- During a small v2 run:
  - the five agents' states follow;
  - the Backend dev's Bash shows as "needs you" and clears after the approval;
  - switching to Auto shows the warning from the next prompt.
- Context and limits change after a turn, and each preset sends its text.
- The link opens a hall started by hand (the mod starts none yet), and `/reload-plugins` keeps what the pane shows.
- After closing the pane, `/world-of-agents:team` opens it again with no model turn.

**Open in 2b:** `$.prompt.submit` from a desktop pane wasn't tried in the spike. Answered by the desktop check on 7 Nov: it
works (3 of 3), and it submits at once, so a preset starts a run that Esc stops only after it started. Hence decision 13.
`$.prompt.fill` would put the text in the prompt box unsent; it wasn't used then, and is since decision 21.

## 2c: processes

**Files**

- `scripts/build-plugin-hall.mjs` (new) and `npm run build:plugin-hall`:
  - Vite builds the page into `plugin/hall/page/`;
  - esbuild (already approved in `allowScripts`) bundles the hall with Zod into `plugin/hall/server.mjs`, which imports
    only `node:` modules;
  - it writes `plugin/hall/manifest.json`, the page's files and their content types.

  `plugin/hall/` is tracked in git and rebuilt by this script.

- **Determinism first:** two builds in a row must be byte-identical before the freshness check exists.
- **The freshness check**, `npm run check:hall`, rebuilds into a temp folder and fails if anything differs from
  `plugin/hall/`. A rebuild takes seconds and the tests must not run builds, so it isn't in `npm run check`. It runs as the
  first step of `npm run release:check`, which the release steps (and `CLAUDE.md`'s release rule) require before any tag.
- **The bundle finds its page relative to its own file** (`import.meta.dirname`), never from the working folder, an
  environment variable or an argument. `server/hall.ts` serves only the files `manifest.json` names, by exact match, and
  never joins a path from the URL. `server/main.ts` keeps `../dist` for `npm run hall`.
- **A restarted hall starts empty.** No event log on disk: agent text on disk would be a new leak. The hall sends a start id
  that the page remembers; when it reconnects to a different one, the status line says "Hall restarted". This touches
  `server/hall.ts`, `src/events/schema.ts`, `src/live/` and `App.tsx`.
- `plugin/hooks/mod/hall.ts` (new):
  - "is the hall up?" through `plugin/hooks/hall-check.mjs` (built in 2c, at Dima's word): send.mjs's own HMAC handshake,
    not a 200 from `/api/health`, which any program on the port could send. It answers by exit code only: 0 ours, 3
    nothing listens, 4 something else holds the port, which hides "Open hall", starts nothing and stops nothing. A Node
    script because a mod's `crypto.subtle` has only `digest`: an HMAC in the mod would be hand-made, and the mod would need
    the token file, the network and the home folder;
  - a start through `$.process.spawn` with exactly `['node', '<plugin>/hall/server.mjs']`, the stream read for the child's
    whole life;
  - one start in flight at a time.
  - Every command runs with the plugin's folder as its working folder. That is a second lock: checked on 8 Nov, Claude
    Code 2.1.318 never runs a `node.exe` planted in the project, neither for a hook (it looks on PATH only) nor for
    `$.process.run` (it refuses one in the working folder as an unsafe location).
- `plugin/hooks/mod/voice.ts` (new): the sanitizer (control characters out, 200 characters at most, never a split code point),
  the fixed argument list with `-ExecutionPolicy RemoteSigned`, a queue of one utterance at a time, and mute kept in
  `$.store`.
- `plugin/voice/speak.ps1` (new): sets `[Console]::InputEncoding` to UTF-8 before it reads stdin, so non-English text isn't
  garbled, then caps it again and speaks it with `System.Speech` `Speak`.
- `register.tsx`: a hall check at session start and at each main-thread `turn.start`, and a voice line on an `ask`.
- **"The team is done"**, once at the end of a main-thread turn, under these conditions:
  - the turn ended with `answer`, which is stricter than Dima's rule: an interrupted or errored turn stays silent;
  - at least one of our agents (a roster type) ran in that turn;
  - all of them are finished (completed, failed or killed);
  - no approval is open.

  It says "The team is done." and the first sentence of the Lead's answer, or "The team stopped. <role> failed." with
  roles from the roster (several failed roles are joined with "and"). Turns with no agents stay silent.

  "Ran in that turn", as built: every run seen since the team last went quiet. Background agents finish before the
  notification turn that reports them, so runs started in that turn alone would almost never speak. The round ends
  (silently, unless the turn ended with an answer) once all its runs are over and no approval is open.

- **A Node check:** at session start the mod runs `node --version` through `$.process.run` (it worked in the desktop app in
  milestone 1). If Node is missing or older than 20.19, the pane warns: the guard then blocks every agent start and shell
  command ("Executable not found in $PATH: "node"", seen in 2a), and the hall can't start. The warning says how to install
  Node or turn the plugin off.
- `pane.tsx`: a hall status line, the Node warning and the mute button. `README.md`: the Windows voice (the Node
  requirement is in since 2a).

**Tests**

- (kit) The spawn's argument list is exactly the fixed one for every text, including injection-shaped ones: quotes, `;`,
  `$(...)`, backticks, newlines, an SSML `<speak>` tag. The text is only ever the `input`.
- The sanitizer's cases. An unknown agent type speaks as "An agent", never as any text from the event.
- Mute: nothing is spawned while muted, and mute survives a new session (mocked `$.store`).
- The hall:
  - health OK means no spawn, health down means one spawn;
  - two checks at once still spawn once;
  - a subagent's `turn.start` checks nothing;
  - the hall's argument list is exact.
- "The team is done": every condition above, both phrases, and silence for a turn with no agents, an aborted turn, a
  running agent and an open approval.
- (Vitest) The manifest-only server: `../`, `%2e%2e`, `..%2f`, a backslash path and a file not in the manifest each get a
  404, and nothing is read from outside the page folder. The page folder comes from the bundle's own location. The bundle,
  when present, imports only `node:` modules. The start id and "Hall restarted".
- (kit) The Node check: a missing `node`, a failing `node --version` and a version under 20.19 each show the warning, and
  a current Node shows none.

**By hand (desktop)**

- With Node taken off the PATH the desktop app starts from, the pane warns (and the guard blocks, as 2a showed).

- The first message starts the hall with no terminal, and "Open hall" shows the live page.
- An edit plus `/reload-plugins` kills it, and the next turn brings it back with "Hall restarted".
- With two sessions, closing the one that started the hall costs the other one turn.
- Voice:
  - "Backend dev needs your approval." on the Backend dev's Bash;
  - "The team is done." and the first sentence at the end;
  - mute silences it and is remembered.
- Windows Security's protection history shows nothing flagged for the PowerShell call.
- `RemoteSigned` runs `speak.ps1` from the dev install now, and from the git-installed copy after the release.
- Carried over from 2b, whose desktop check didn't confirm them:
  - during an approval, "needs you" names the agent ("Backend dev asks to run Bash") and clears after it;
  - in Auto, the warning "Auto: Nothing asks you before acting." shows, and whether "needs you" flickers;
  - during a run, the presets are dim, and a press sends nothing (dropped by decision 21).

**Open in 2c:** writing stdin through `$.process.spawn`'s `input` is in the types but wasn't run in the spike; the brief's
fallback stays. Answered on 7 Nov: a no-login probe on Claude Code 2.1.318 spawned `speak.ps1`'s reading half with the
exact argument list, and `input` arrived whole, Cyrillic and an emoji included. The fallback isn't needed. Also seen there:
`return()` on the stream ended a silent child within 14 ms.

**Changed in 2c:** with a Node older than 20.19 the pane says the hall can't start, not that the guard blocks: `guard.mjs`
needs nothing newer than Node 10, so on an old Node it runs.

## 2d: hall fixes

**Files and tests**

| Fix                              | Files                                                                                         | Tests                                                                                                                                       |
| -------------------------------- | --------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| The Lead's answer in the feed    | first reproduced; then `server/map.ts`, `src/page/feed.ts` or the page, wherever the cause is | a replay of a Lead-only turn (prompt, answer, `Stop`) that fails before the fix and passes after                                            |
| Bubbles stay long enough         | `src/office/hall/talk.ts`, `HallLabels.tsx`                                                   | the first sentence, at most 90 characters; on screen 4 s plus 60 ms per shown character, at most 10 s; a second bubble waits for the first  |
| Agents hurry                     | `src/office/hall/walkers.ts`, `walk.ts`                                                       | work starting or ending mid-walk turns the rest of the walk and the next one to 2.5x, with no jump in position; reduced motion unchanged    |
| Minimum desk time                | `walkers.ts` or `destination.ts`                                                              | work that ends 1 s after sitting down keeps the agent at its desk, showing its last working state, until 3 s; the feed keeps the real times |
| Links as plain text              | `src/page/AgentText.tsx`                                                                      | `[text](url)` becomes "text" with no `<a>`; also code inside a link, a `javascript:` URL, a malformed link                                  |
| The Reviewer reports what it ran | `plugin/agents/reviewer.md`                                                                   | none beyond the roster test: prompt wording is checked by hand                                                                              |

**Backlog from the 2c review: Zod's locales out of the bundle, if it's a small change.** `plugin/hall/server.mjs` is 779 KB,
and 369 KB of it is Zod's error messages in 64 languages, which the hall never shows (it only takes or refuses a hook).
esbuild can't drop them: they hang off the `z` namespace the schemas import. A way that keeps them out without leaning on
Zod's internal file layout goes in; one that does lean on it doesn't. `npm run check:hall` and the install tests must
still pass.

**The feed comes first, and it starts with reproducing Dima's report.** `map.ts` already turns the Lead's last message into a
message to you on `Stop`, so the cause is somewhere else. One suspect: clicking an agent filters the feed, which hides
everyone else's entries. Nothing changes until the cause is found.

Hurrying needs a speed change mid-walk: `positionAt()` assumes one speed from the start, so a walk re-anchors when it speeds
up. Under reduced motion agents still jump, but the 3 s at the desk is about time, not motion, so it still applies.

`App.test.tsx`'s demo and walking tests keep passing at their big slices. `CLAUDE.md` gets the new bubble timing and the
`AgentText` rule.

**By hand**

- `npm run dev`, the demo run: bubbles readable to the end, agents hurrying, a seated agent showing its work before it
  leaves.
- Desktop, a small v2 run: the Lead's plain answer shows in the feed, and the Reviewer's report claims only checks it ran
  with its own tools.

**What 2d's desktop check changed (10 Nov)**

Part 1 of the check passed the desk time and the hurrying. It failed the bubbles (still too fast, and long text didn't fit)
and the feed (long messages cut with "…" and no way to read the rest), so these went into 2d before the release:

- **Bubbles show a short version:** the first sentence (the voice's rule: the first `.`, `!` or `?` that ends one, or a
  line break), cleaned as the voice cleans it (links as their text; marks only where they work as Markdown: every
  backtick, `**` pairs, `__` pairs and a single `*` or `_` at word boundaries, `#`, `>` and list markers at a line's
  start, so user_id, snake_case and "a > b" stay whole, in the voice too), at most 90 characters, cut at a word with "…". Up 4 s plus 60 ms per shown character, at most 10 s, still one
  queue per agent.
- **Bubbles wait while their agent walks** (from the re-check: a hurrying agent's bubble crossed the hall at 2.5x and
  couldn't be read). The bubble's timer was already real time, `performance.now()`, never scaled by walking speed: the
  cause was the bubble drawn over the sprite, which hurried. Now a bubble isn't shown while its agent walks: it waits in
  the queue, and its time runs only while it is on screen, so one cut off by a walk shows the rest of its time at the
  next stop. The feed shows the message at once.
- **The whole text in the feed:** a message over 200 characters shows cut, with a "Show all" toggle (a real button:
  Enter and Space, `aria-expanded`, `aria-controls`, the links' focus ring) that opens the full text, line breaks kept,
  in a plain element after it, so it can be selected, copied and read normally by a screen reader. A click on the row
  toggles too, but not one in that text and not one that ends a selection. Same `AgentText`. Both cuts turn links into
  their text first (`src/page/shorten.ts`), so a cut never leaves part of a target showing. (The first try made the
  whole row the button, which made the text impossible to select.)
- **The cause of the "…" was `send.mjs`:** it cut `last_assistant_message` at 200 characters, and `hook-input.ts` held
  it to 200. Both now take 20,000 (`MAX_REPORT`), still scrubbed, and so does the page's schema (4,000 before). The
  hall's body limit went from 64 KB to 256 KB: JSON writes a control character as 6 bytes, so the largest post
  `send.mjs` can make is about 160 KB, and a post over the limit is refused whole, with the hook's state change.
- **Flags:** rows addressed to Dima (a message to you: only the Lead's answer at the main thread's `Stop`), approval
  waits (`needs-you`: a permission dialog) and failures (`error`) get an accent border and a label, "To you", "Needs
  you" or "Failed". Decided from the event's type and fields alone, never its text; a test pins that "IMPORTANT: to you"
  in an ordinary row is not highlighted. An approval row says "Needs you" once, without the state word after it.
  "Failed" can't be forged by an agent either: `send.mjs` takes the first
  word-only `<status>` of a `<task-notification>`, and Claude Code writes it before the summary and the result.
- Tests: the bubble's sentence, cut and timing, the row's cut, expansion and safe text, the flags and the bait row, the
  caps along the whole path, and the largest post against `MAX_BODY`. 39 planted bugs, all caught; 19 more for the
  toggle and the single "Needs you", and 14 for the bubbles' cleanup and walking rule.

**What 2d found (10 Nov)**

- **The Lead's answer missing from the feed.** Not the feed: the hall reset the run. The desktop app serves a session from
  a fresh Claude Code process after it gets focus (its log: `[WarmLifecycle:preview] Warming up session`, then a
  "temporary query" process a few seconds before the next message), and a resumed process fires `SessionStart` with
  source `resume` and the same session id. Checked with no login on 2.1.318: `claude -p --resume` and an app-like
  `--input-format stream-json --resume` both fire it, the second at process start, before any message. `map.ts` took
  every `resume` as a takeover, so the run, the Lead's answer in it, went at the next message. Now a resume of the
  session the hall already follows changes nothing; another session's resume still takes over. `map.test.ts` plays a
  Lead-only turn, the resume and the next prompt into the feed, and failed before the fix.
- **Zod's locales:** gone from the bundle with Zod's own recommended import, `import * as z from 'zod'`, in
  `schema.ts` and `hook-input.ts`: esbuild then sees which members are used. `server.mjs` went from 779 KB to 210 KB,
  with only Zod's English messages left. Nothing leans on Zod's file layout.

**Measured on 10 Nov: do the app's temporary query processes start the hall?**

- What they are: on every focus of a session the app starts a Claude Code process that loads every plugin, ours
  included, and waits (`temporary query on 11 plugin(s) … --await-initialize`): 114 in the log from 30 Sep to 9 Nov, 20
  more by 10 Nov.
- One that gets no message doesn't start the session. On 8 Nov the hall's replay showed no reset after the 18:25:37
  warm-up, though a `SessionStart` then would have reset it (before the fix above). So its mod's `session.start` never
  runs, and it can't start a hall.
- One that gets the next message becomes the session's process: on 8 and 9 Nov messages went out 3 to 4 s after a
  warm-up (18:13:27 then 18:13:30, 16:44:27 then 16:44:31). Its mod starts as an interactive session's does.
- The one hall start the PC still records (the token file is rewritten at every start) was at 16:42:46 on 9 Nov, 1 s
  after a cold session start at 16:42:45, not after a temporary query.
- So no temporary query has been seen starting a hall. What can happen instead: when the app moves a session to a new
  process, the old one, and the hall that is its child, can go; the next Lead turn starts the hall again, and the page
  says "Hall restarted".

Options, not built:

1. **Start the hall only from the interactive session.** `session.start` carries `isInteractive` and `surface`. A
   temporary query that gets no message never runs it, so this changes nothing today; it only guards against a later
   app that initializes its warm processes. Cheap.
2. **Start the hall detached, with an idle timeout.** A small launcher run with `$.process.run` (fixed argv, like the
   hall check) starts `server.mjs` detached and exits; the hall then outlives the process that started it, and exits
   on its own after about 30 minutes with no hook post and no page connected. This also closes the two-session gap and
   the restart after a process switch. Its costs: a hall no mod owns, so it must stop itself; the idle timer in the
   hall; and the spike never saw whether a detached hall survives a real reload.

Recommendation: 2, as its own task, since it changes how the hall lives; nothing measured shows harm today.

## Decided on 6 Nov

1. Four parts, 2a to 2d.
2. The engine's types are committed and pinned: the mods API only, with a version header, marked generated, updated only
   by `npm run types:update`, and searched for local paths and names.
3. `plugin/hall/` is tracked, rebuilt by `build-plugin-hall.mjs`, with a freshness check before every release, once the
   build is proven deterministic.
4. "The team is done" as in 2c, which keeps Dima's rule and adds one condition: the turn must end with an answer.
5. Milestone 2 is `v3.0.0`; later milestones are minors. The README names Claude Code 2.1.295 or later.
6. The setup is two user-only skills whose injected command runs the script; it merges only an install-only file. (The
   first design, with the model running the script and asking with `AskUserQuestion`, failed the desktop check.)
7. The guard's best-effort `.env` rule covers `Bash` and `PowerShell`.

After the 2b build, also on 6 Nov:

8. No guilds in the pane's roster until milestone 5; the surface check fails when the list shrinks too; the Lead's state
   comes from its own turns; agent text is cleaned (control and bidi characters out, cut at 120 code points).
9. `/world-of-agents:team` reopens the pane, as a skill with `disable-model-invocation: true`.
10. The warning covers `bypassPermissions` and `acceptEdits` too, in the wording above.
11. A permanent check in `npm run check` for bidi controls, zero-width characters and U+FEFF in every tracked text file.

After the 2b desktop check, on 7 Nov:

12. "Run the quality check" names the scripts: "Have the team run npm run check, or npm test if there's no check script, and
    tell me what fails. If neither script exists, say so and stop. Don't fix anything yet." The old text sent the Lead
    looking for a README to take a command from.
13. The presets are dim while the Lead's own turn runs, and a press then sends nothing, so one click can't queue a second
    run behind the running one. Replaced by 21.
14. The warning names the mode first: "Auto: …", "Bypass: …", "Accept edits: …".
15. `speak.ps1` sets `[Console]::InputEncoding` to UTF-8 before it reads stdin.

After the 2c desktop check, on 8 Nov (the run's transcript was deleted in the app; what follows is from the app's log and
three CLI runs with a logging plugin):

16. "Needs you", in the pane and the voice, starts when the permission dialog opens (`classic.PermissionRequest`), not at
    `tool.check`, whose `ask` means "the mode's decider". In Auto the classifier settled all six asks of a run, the Lead's
    Agent starts among them, with no dialog; each was spoken before. That was Dima's "Lead/PM needs your approval".
17. "The team is done" also waits until the Lead has heard each run: a background run's result reaches it in a frame
    (`<task-notification>`, or Auto's `<agent-message>` hand-back) after the run is over. In the desktop check the
    Backend dev ended before the Lead's own turn did, so that turn spoke too early, and the next one spoke again.
18. A list marker at the start of a line leaves the spoken sentence, as Markdown does: an Auto run's report opened with
    "1. **What changed:**" and the voice said "The team is done. 1."
19. In the desktop app a mode picked for a folder wins over the project's `defaultMode` in new sessions (its log says
    `folder_pick`); the brief and the README say so.
20. The mod reads a prompt's text only to ask whether it is a frame naming one of its own runs, and keeps none of it:
    not the text, not an id the prompt claims. A kit test plants a fake token in prompts and frames and checks every
    write; a source check pins the one place the text is read.

After the presets spike, on 9 Nov:

21. A preset no longer sends. It puts its fixed text after Dima's draft with `$.prompt.fill` (`mode: 'append'`) and Dima
    presses Enter, so the mod sends nothing as Dima and the brief's "Prompts sent as you" row is closed. Each text starts
    with one space, because append adds it as it is (the spike gave `draftSpike`). No `$.prompt.read`: it would hand the
    whole draft, a pasted token included, to the mod. When the box doesn't take the text, the pane says why in one line:
    "This surface has no prompt box" for the engine's `no_composer`, else, a fill that throws included, "Couldn't fill the
    prompt box". The dimming and
    the double-press flag (13) go, since a fill queues nothing. A throwaway spike in the desktop app's Code tab (engine
    2.1.317) found both candidates work there: fill took the text into an empty box and after a half-typed draft, which
    it kept; `$.prompt.suggest` showed dim text that Tab took, and declined while the box held text. Fill won: one key
    press.

In 2d, on 10 Nov:

22. A `SessionStart` with source `resume` for the session the hall already follows keeps the run: the desktop app
    resumes the session in a fresh process after focus changes, and that wiped the Lead's answer from the feed.
23. A bubble shows the message's first sentence, at most 90 characters, and stays up 4 s plus 60 ms per shown character,
    at most 10 s (after the desktop check: 2.5 s plus 50 ms, at most 8 s, was too fast), and an agent's next bubble waits
    for the one it shows. Its sentence is plain text, cleaned as the voice cleans it, and it shows only while its agent
    stands: its time runs only on screen. Work that starts or ends mid-walk speeds the rest of the walk and the next one to 2.5x, from where the agent
    is. An agent whose work ends less than 3 s after it sat down at its own desk stays, showing that work, until 3 s
    after it sat; reduced motion keeps the hold, then jumps. The feed and the furnace keep the real state.
24. `AgentText` shows a Markdown link or image as its text alone, never as a link and never with its target.
25. `npm run dev:refresh` replaces the hand-typed `rm -rf … && cp -r …`. That `rm -rf` stops half done on a folder a
    hall stands in (Windows, tested), and the `cp -r` after it then copies into the folder still there, as a nested
    `plugin/plugin/` (Git Bash's `cp`, checked).

## Backlog, due before v3.0.0

- **An upgrade path for the setup skill.** If a project's `.claude/settings.local.json` matches an older template version
  exactly, `/world-of-agents:setup-project-write` replaces it with the current template; anything else still stops, as now.
  The past templates stay in the plugin for that comparison.
