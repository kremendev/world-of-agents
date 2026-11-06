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
  - `roster.ts`: names and guild of the five agents;
  - `presets.ts`: the fixed prompt texts;
  - `types.d.ts`: the state contract;
  - `*.test.tsx`: kit tests.
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
- The Auto warning on `permission_mode` `auto`, and not on `default`.
- Context and plan limits from `session.measure`.
- The `Link` goes exactly to `http://localhost:4319`. No `Markdown` element anywhere in the tree.
- `tool.check` and `agent.spawn` hand back allow, ask, deny and a deny unchanged (the spike's tests, kept).
- Each preset submits exactly its constant through `$.prompt.submit`. A source check finds `$.prompt.submit` nowhere outside
  `presets.ts`.
- (Vitest) `roster.ts`'s names and guilds equal `src/office/roster.ts`.

**By hand (desktop, the dev install)**

- The pane appears after the first message. Where the surface puts it, wide and narrowed, is recorded, not chosen.
- During a small v2 run:
  - the five agents' states follow;
  - the Backend dev's Bash shows as "needs you" and clears after the approval;
  - switching to Auto shows the warning from the next prompt.
- Context and limits change after a turn, and each preset sends its text.
- The link opens a hall started by hand (the mod starts none yet), and `/reload-plugins` keeps what the pane shows.

**Open in 2b:** `$.prompt.submit` from a desktop pane wasn't tried in the spike.

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
  - a health check with a short time limit;
  - a start through `$.process.spawn` with exactly `['node', '<plugin>/hall/server.mjs']`, the stream read for the child's
    whole life;
  - one start in flight at a time.
- `plugin/hooks/mod/voice.ts` (new): the sanitizer (control characters out, 200 characters at most, never a split code point),
  the fixed argument list with `-ExecutionPolicy RemoteSigned`, a queue of one utterance at a time, and mute kept in
  `$.store`.
- `plugin/voice/speak.ps1` (new): reads stdin, caps it again, and speaks it with `System.Speech` `Speak`.
- `register.tsx`: a hall check at session start and at each main-thread `turn.start`, and a voice line on an `ask`.
- **"The team is done"**, once at the end of a main-thread turn, under these conditions:
  - the turn ended with `answer`, which is stricter than Dima's rule: an interrupted or errored turn stays silent;
  - at least one of our agents (a roster type) ran in that turn;
  - all of them are finished (completed, failed or killed);
  - no approval is open.

  It says "The team is done." and the first sentence of the Lead's answer, or "The team stopped. <role> failed." with
  roles from the roster (several failed roles are joined with "and"). Turns with no agents stay silent.

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

**Open in 2c:** writing stdin through `$.process.spawn`'s `input` is in the types but wasn't run in the spike; the brief's
fallback stays.

## 2d: hall fixes

**Files and tests**

| Fix                              | Files                                                                                         | Tests                                                                                                                                       |
| -------------------------------- | --------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| The Lead's answer in the feed    | first reproduced; then `server/map.ts`, `src/page/feed.ts` or the page, wherever the cause is | a replay of a Lead-only turn (prompt, answer, `Stop`) that fails before the fix and passes after                                            |
| Bubbles stay long enough         | `src/office/hall/talk.ts`, `HallLabels.tsx`                                                   | time on screen is 2.5 s plus 50 ms per shown character, at most 8 s; a second bubble for an agent waits for the first                       |
| Agents hurry                     | `src/office/hall/walkers.ts`, `walk.ts`                                                       | work starting or ending mid-walk turns the rest of the walk and the next one to 2.5x, with no jump in position; reduced motion unchanged    |
| Minimum desk time                | `walkers.ts` or `destination.ts`                                                              | work that ends 1 s after sitting down keeps the agent at its desk, showing its last working state, until 3 s; the feed keeps the real times |
| Links as plain text              | `src/page/AgentText.tsx`                                                                      | `[text](url)` becomes "text" with no `<a>`; also code inside a link, a `javascript:` URL, a malformed link                                  |
| The Reviewer reports what it ran | `plugin/agents/reviewer.md`                                                                   | none beyond the roster test: prompt wording is checked by hand                                                                              |

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
