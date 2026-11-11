# World of Agents — v3 Brief

5 Nov 2026 · Dima. A copy of the "World of Agents — v3 Brief" doc for Claude Code. From milestone 0 on, this file in `docs/` is the
source of truth for implementation; the doc is the overview and the place decisions are made.

v3 moves World of Agents into the Claude app you already open. The plugin grows a mod: a team pane beside the conversation shows
who is working, who needs you and how much of your plan is used, and speaks when it matters. The team grows into guilds of
specialists with their own skills and memory.

## Goal and scope

You open a project in the Code tab of the Claude desktop app and talk to the Lead/PM as your main agent. No terminal: the mod
starts the hall and opens it for you.

| In v3                                                              | Later                                                             |
| ------------------------------------------------------------------ | ----------------------------------------------------------------- |
| A mod in the plugin: team pane, voice, preset prompts, "Open hall" | An own desktop app (v4, after a cost study)                       |
| Install from the repo as a marketplace, no `--plugin-dir`          | Voice input, through Flint Assistant (mods can speak, not listen) |
| Guilds two levels deep, skills and memory per agent                | Several projects in one hall                                      |
| A token ledger: this session, plan limits, all time on this PC     | A Codex adapter                                                   |
| Scouts: on hold, the news digest moved to Flint Assistant          | Watching cloud runs live in the hall                              |
| Quality gates, backlog, safe-command list                          | Unattended runs on your PC                                        |
|                                                                    | Tasks from Flint Assistant (see "Later: Flint Assistant")         |

The pixel hall stays a browser page: inside the Claude app a pane draws boxes, text and SVG, not our canvas.

## How it fits together

The mod sits inside Claude; the hall only reports. Everything runs on your Claude plan, through Anthropic's own app and
cloud.

```text
YOUR PC
  Claude desktop app, Code tab (your login)  <───────────>  ANTHROPIC CLOUD: Claude models on your plan
    Lead/PM (main thread, Opus) ──> Guild leads (4 guilds, Sonnet) ──> Specialists (2 per guild, own skills)
                       │ events, agent states
                       ▼
    World of Agents mod: team pane, voice, token ledger. Watches and speaks, never decides.
       │ read, write, run (you approve commands)          │ events + token
       ▼                                                  ▼
  Project folder                                     Hall server + page: 127.0.0.1:4319, pixel hall in the browser,
                                                     started by the mod
```

Claude talks to Anthropic on its own, so our code never sees your login. The mod reads the session from inside Claude Code and
passes events to the hall.

Where each part lives:

- `.claude-plugin/marketplace.json` at the repo root: makes the repo its own marketplace.
- `plugin/`: the agents (guild leads and specialists), `skills/`, `settings.json` (the Lead as main agent), `hooks/`
  (`send.mjs`, `guard.mjs`, the quality gate, and the mod's module), `voice/speak.ps1`, and `hall/` (the prebuilt page plus
  one bundled server file, built at release).
- `server/` and `src/`: the hall's source, as in v2.
- `docs/v3-brief.md` (this brief) and `docs/v3-spike.md` (milestone 1's findings).

## The team: guilds, skills and memory

The five v2 agents keep their names and become guild leads. Each guild lead hands focused work to two specialists, so no single
agent carries dozens of skills.

| Guild    | Lead (name unchanged)       | Specialists to start            | Skills they preload (examples)                                                        |
| -------- | --------------------------- | ------------------------------- | ------------------------------------------------------------------------------------- |
| Command  | Lead/PM (Opus, main thread) | none                            | Planning, routing, the backlog                                                        |
| Design   | Designer                    | React designer, Motion designer | React UI patterns, accessibility, design tokens; animation principles, reduced motion |
| Frontend | Frontend dev                | React dev, Test writer          | React and TypeScript practices, state; Vitest and Testing Library                     |
| Backend  | Backend dev                 | API dev, Database dev           | Validation and auth; SQL, migrations, indexes                                         |
| Review   | Reviewer                    | Security warden, QA tester      | OWASP checks, threat models, secret scans; Playwright end-to-end tests                |

**How the levels work.** The Lead is the main thread, the guild leads are one level down, and specialists are two levels down.
`CLAUDE_CODE_MAX_SUBAGENT_SPAWN_DEPTH=2` stops anything deeper: at level 2 the engine withholds the `Agent` tool (milestone
1). A plugin can't set it; the setup skill writes it into `.claude/settings.local.json`, which the desktop app applies.

- Who may start whom is a fixed table in the guard hook (below). An `Agent(...)` list in a subagent's file restricts
  nothing: milestone 1 saw a guild lead start an agent its list doesn't name. Only the main thread's list is applied.
- Specialists get no `Agent` tool.
- Guild leads and specialists run on Sonnet. Only the Lead uses Opus.

**The guard.** A `PreToolUse` hook on the `Agent`, `Bash` and `PowerShell` tools in `plugin/hooks/hooks.json` runs
`plugin/hooks/guard.mjs` before any agent starts another, and before any shell command.

- **A normal hook, not async.** An async hook runs in the background and can't block.
- **Deny-only.** It prints a `PreToolUse` deny (`permissionDecision: "deny"` with a reason) or nothing, and exits 0. It
  never prints `"allow"`, because allow skips Dima's permission prompt. A test pins this.
- **Fail closed.** It denies an unknown caller, an unknown `subagent_type`, malformed input and any error it catches.
  `"onFailure": "block"` (Claude Code 2.1.295 or later) also turns a Node startup failure, a crash or a timeout into a
  block. An older Claude Code doesn't know the field, so there a startup failure or a timeout lets the call through.
- **How it identifies the caller** (from real captured hook input, docs/v3-spike.md): the main thread's call has no
  `agent_id` and `agent_type: "world-of-agents:lead"`, the same whether the Lead is main through `woa`'s `--agent` or only
  through the plugin's `settings.json`. A subagent's call carries its own `agent_id` and its full `agent_type`
  (`world-of-agents:backend`). The callee is `tool_input.subagent_type`, which the Lead always sent as the full name.
  Anything else is an unknown caller.
- **The table** maps caller to who it may start, exact names only. Milestone 2: the main thread (the Lead) may start
  `world-of-agents:designer`, `world-of-agents:frontend`, `world-of-agents:backend` and `world-of-agents:reviewer`; every
  other caller may start nobody. Built-in agents (`Explore`, `Plan`, `general-purpose`, `claude-code-guide`,
  `statusline-setup` and any other) are denied, because some run on Haiku. Milestone 5 adds each guild lead's specialists.
- **A best-effort `.env` rule.** It denies a `Bash` or `PowerShell` command that names a `.env` file (`.env`, `.env.local`,
  `.envrc`, quoted or inside a path), with the same deny-only, fail-closed rules: a command it can't read is denied. Words
  like "environment", `process.env` or a file named `envrc.md` pass. It catches accidents and lazy prompt injection, not a determined attacker: a glob, a
  variable or a script that opens the file itself gets past it. It works with the plugin alone, before the setup skill
  has run.
- **No network, no hall, no file writes.** It reads its input from stdin, checks the table and answers. Short timeout. It
  starts once per agent start and per shell command, about 60 ms each.
- A deny wins over any other hook's answer: `deny` comes before `defer`, `ask` and `allow`.

**Skills.** The plugin gets a `skills/` folder of skills we write or vet. An agent's `skills:` line preloads 2 to 5 of them in
full when it starts, and it can still call any other skill when it needs one. Preloaded skills cost context on every run, so keep
the lists short.

**Memory.** The Lead and each guild lead get `memory: local`: a notes file per agent that survives between sessions and stays out
of git. That's how the Designer remembers your design decisions, not just best practices. Switch an agent to `memory: project`
only if you want its notes committed, because on a public repo anyone can read them.

The new characters need sprites and room in the hall. That's a design round before milestone 5, since the v1 look is locked.

## The team pane and voice

The mod draws a pane beside the conversation. The surface decides where it sits, docked beside the transcript or above the
prompt, and the mod can't choose: milestone 1 saw it docked in a wide desktop window. The same pane works in the terminal and
in VS Code. It appears once the first message is sent: that is when the session, and with it the mod, starts (milestone 1).
The README says so.

**What the pane shows:**

- **Agents**, with exact states from `$.agent.list()`: pending, running, waiting, idle, completed, failed or killed. No
  guessing from hook timing. There are no guilds before milestone 5: until then the pane lists the five agents, and
  milestone 5 groups them by guild.
- **Who needs you**, taken from the `agentId` on `tool.check`, and shown once the permission dialog really opens (its
  `PermissionRequest`). An `ask` goes to the mode's decider: a dialog in Manual, but in Auto the classifier, which settled
  every ask of a test run on 8 Nov with no dialog. You still answer in Claude Code's own permission prompt, which a mod
  can't change.
- **A warning when the session runs in `auto`, `bypassPermissions` or `acceptEdits`**, the mode named first: "Auto: Nothing asks
  you before acting.", "Bypass: Nothing asks you before acting.", "Accept edits: Edits aren't asked, and npm test runs whatever
  they change." The pane only warns: it never changes
  the mode itself. It reads `permission_mode` on the next prompt or subagent event; no event fires on the switch itself, so
  the warning can come one prompt late.
- **A warning when the plugin is on for every project** (v3.0.1): "World of Agents is on for every project.", with
  `claude plugin disable <id> --scope user` for each of our ids (`world-of-agents@<marketplace>`, at most three) that
  the user settings turn on. `disable`, because `uninstall --scope user` fails when no user-scope install is behind the
  setting ("installed in local scope, not user"); a project's local install keeps the plugin on there (CLI, temp
  config, 11 Nov). At session start the mod reads one key of the user's own settings,
  `$.settings.read({ key: 'enabledPlugins', source: 'user' })`, and nothing else of them; the engine hands it only that
  key. The desktop app's Plugins screen made exactly that install on 11 Nov.
- **Tasks** in progress and done.
- **Usage**: context used and plan limits. See the token ledger.
- **Buttons**: "Open hall", mute, and a few preset prompts such as "Plan the next milestone", "Run the quality check" and "Review
  what changed". A preset puts its fixed text in the prompt box, after whatever you've typed, and you send it with Enter: the
  mod never sends a prompt itself.

**The hall starts itself.** When the session starts (the first message) and at the start of each main-thread turn, the mod asks
what holds port 4319 with the hook script's own handshake (any program can answer `/api/health`), and if nothing answers it
starts the hall server; if another program answers, it starts nothing and the pane says so. It never starts a second copy: it starts one only when nothing answers, and a second hall couldn't take
the port anyway (it writes its token only after binding it). The plugin carries a prebuilt hall (one bundled server file plus the
built page), so installing it needs no `npm install`. The bundle finds its page relative to its own file, never from the working
folder, an environment variable or an argument. It serves only the files named in the build's manifest, never a path joined
from the URL; tests try `../`, `%2e%2e` and a backslash path. `plugin/hall/` is tracked in git and rebuilt by
`scripts/build-plugin-hall.mjs`; a freshness check rebuilds it and fails if it differs from what's committed, and every release
runs it. "Open hall" links to `http://localhost:4319`, which opened the hall from the desktop app in milestone 1.

A hall the mod started is the mod's child: a plugin reload kills it, and after the sessions closed it was gone too. A reload
runs `session.start` again, so the health check brings it back. Each kill leaves the token file behind; the handshake makes that
harmless and the next hall writes a new one. With two sessions open, closing the one that started the hall costs the other at
most one turn without it. A restarted hall starts with an empty replay, and it stays that way: no event log on disk, because
agent text on disk would be a new leak. The page rebuilds from nothing and says "Hall restarted".

**Voice.** `$.audio.speak` has no voice on Windows (milestone 1), so the mod speaks through Windows' own synthesizer:

- A fixed script in the plugin, `plugin/voice/speak.ps1`, reads plain text from stdin and speaks it with `System.Speech`
  (`Speak`, never SSML).
- The mod starts it with `$.process.spawn` and exactly this argument list:
  `powershell.exe -NoProfile -NonInteractive -ExecutionPolicy RemoteSigned -File <plugin>/voice/speak.ps1`. Never
  `-Command`, never a shell, never a command string built from any text.
- Why `RemoteSigned`: Windows' default policy refuses to run any `.ps1` with `-File`. `RemoteSigned` runs a local script and
  refuses one marked as downloaded from the internet; the plugin's files, installed by git, carry no such mark (all checked on
  Dima's PC). `Bypass` would run even a marked script, and security tools flag `powershell -ExecutionPolicy Bypass` as a
  malware pattern. The flag applies to that one process and changes nothing on the machine. A Group Policy setting overrides
  it, and then the voice stays silent.
- The text goes in through stdin (`$.process.spawn`'s `input`), capped at 200 characters with control characters stripped.
  Agent names come from our fixed roster table, never from event text. One utterance at a time.
- If `$.process.spawn` can't write stdin, the mod speaks fixed phrases only (the script maps a key from a fixed list to its
  text) and drops "the first sentence of the Lead's report". (Not needed: on 7 Nov stdin arrived whole on the real engine.)
- A test checks the spawn arguments are exactly the fixed list, whatever the text is.

It speaks two things only:

- "Backend dev needs your approval." The role comes from the roster table.
- At the end of the team's work, once: at the end of a main-thread turn that ended with an answer (not interrupted, not an
  API error), in which at least one of our agents ran, all of them are finished (completed, failed or killed) and nothing
  waits for approval. Turns with no agents stay silent. It says "The team is done." and then the first sentence of the
  Lead's answer, or "The team stopped. Backend dev failed." when an agent failed, with the role from the roster table
  (several failed roles are joined with "and").

It's on by default, the mute button is remembered between sessions, and nothing else is spoken. Windows can use any installed
voice, so a voice setting can come later.

## The token ledger

The ledger answers three questions: how full is this conversation, how much of my plan is gone, and how much have I used in total.

| What                | Where it comes from                                                                                            | Shown as                                                            |
| ------------------- | -------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------- |
| This session        | `$.session.usage()`: context tokens, window and percent                                                        | "Context 42% of 200K"                                               |
| Plan limits         | `rateLimits` in the same call (kind, percent used, reset time), refreshed on `session.measure`                 | "5-hour limit 63%, resets 18:40"                                    |
| All time on this PC | Each request's token usage (`turn.step`'s `usage`, per agent and model), added to a running total in `$.store` | Labelled "This PC": tokens in and out, plus the value at API prices |
| Older sessions      | An opt-in "Count my past sessions" button that reads Claude Code's local transcripts                           | Added to the all-time total once                                    |

**Rules:**

- The backfill reads numbers only. It never copies or stores transcript text, which can hold anything you or an agent typed.
- Transcripts only go back as far as Claude Code keeps them, because it cleans up old ones.
- "Value at API prices" is what the same tokens would cost on the API, from a dated price table. On a subscription it isn't money
  you spent, but it's the number we need for the desktop-app question later.
- A mod can't tell which account is logged in: `$.session.identity()` answers only mods that managed settings install
  (milestone 1). So the total is per PC, and the pane labels it "This PC".

**What it can't see:** claude.ai chats, the mobile app, other PCs, and cloud scheduled tasks. They all use the same plan. For
the full picture of the plan, claude.ai/settings/usage is the source.

In the hall, the treasure chest in the Lead's room shows the all-time total.

## Scouts

**On hold since 10 Nov 2026.** The first scout, the news digest to Telegram, moved out of World of Agents into Flint Assistant,
Dima's separate local assistant. There Dima starts it by clicking a reminder at login, instead of a cloud schedule. World of
Agents stays a development studio. Milestone 6 waits until Dima decides whether scouts come back, and with which first scout.

If they come back, the old plan's rules stay: scouts run on Anthropic's cloud scheduled tasks, live in their own small repo
(`kremendev/woa-scouts`) so a run never sees your projects, and have every connector removed. A new scheduled task includes all
your connectors by default, and a scout reading untrusted pages with access to your email or calendar is how data gets stolen.

**Scout ideas for later:**

- A dependency scout that checks security advisories for your projects' packages. That's real cybersecurity work for your
  portfolio.
- A GitHub scout that summarises new issues and pull requests on your repos.
- A uni scout that watches pages you choose, such as admissions news.

## Big-project tools

A huge project means dozens of sessions and hundreds of changes. These tools let the team work longer without you approving every
step, while you still review every milestone.

- **Quality gates.** A local command hook on `SubagentStop` runs the project's check (`npm run check`). If it fails, the agent gets
  the failure and keeps fixing it, up to 3 tries per task. After that the task is marked failed for you to look at. This hook does
  send a decision back, which is fine here: it's our own code, run locally, not a network reply.
- **A backlog that survives sessions.** Each project gets a `BACKLOG.md` with milestones and tasks. The Lead reads it when a
  session starts and updates it at the end, so tomorrow continues today. The hall's dashboard shows it.
- **Plan once, approve once.** At the start of a milestone the Lead plans in plan mode and writes the plan into the backlog. You
  approve it once, the team works through it, and you review at the end.
- **A safe-command list.** Two skills (milestone 2) give the project's `.claude/settings.local.json`
  `permissions.defaultMode` `"default"`, `env` `CLAUDE_CODE_MAX_SUBAGENT_SPAWN_DEPTH=2`, rules that let `npm test` and
  `npm run check` run without asking, and denies for reading `.env`, `.env.*` and `.envrc` files and for `git push` in both
  shells (`Bash(git push *)` and `PowerShell(git push *)`). `git status`, `git diff` and `git log` need no rule: they
  already run without asking as Claude Code's built-in read-only commands. A rule like `Bash(git diff *)` would also allow
  `git diff --output=<file>`, which writes a file without a prompt (checked in 2a). In the desktop app this replaces what
  `woa` does in the terminal; milestone 1 showed the desktop app applies both the mode and the env from that file. From
  milestone 4 the setup also writes the backlog. From v3.0.1 an upgrade keeps the rules the user added: a rule in
  `allow`, `deny` or `ask` is ours when any template version has it in that list, and any other rule (an "Always allow"
  click adds one) stays, after the template's own, and a first setup keeps such rules the same way when `permissions`
  holds nothing but those three lists. The output shows those rules quoted, with control, bidi and
  zero-width characters escaped, because an "Always allow" rule can hold text an agent chose.
  - **The desktop app remembers a mode per folder, and that wins** (its log, 6 to 8 Nov): a new session in `woa-m2-test`
    started in Manual from the file (`source=repo_settings_default_mode`) until Dima switched the selector to Auto there;
    from then on new sessions started in the folder's last pick (`source=folder_pick`), Auto, over the file's `default`.
    So "Manual by default" holds in the desktop app only until a mode is picked for that folder. The terminal (`woa`,
    `claude`) still follows the file. The pane's mode warning is what tells Dima he is in Auto.
  - **…and so far it reads the file only in a git repository** (its log, 11 Nov). What the log proves: every session
    that took its mode from the project's file (`source=repo_settings_default_mode`) ran in a folder the app had recorded
    as a git repository: the two spike folders and `woa-m2-test` on 5 and 6 Nov (app 4.x), and `woa-git-test` on 11 Nov
    (app 5.1231.2; `git init`, the plugin at local scope and the setup written before the folder was ever opened; Manual
    before the first message). The two new sessions in `woa-v3-test` before it had git (11 Nov, app 5.1231.0) started in
    the user settings' Auto (`source=settings_default_mode`), the second one 50 s after the setup wrote `default`. What we
    still don't know: whether a folder without git takes the file on the current app. That rests on one folder, and the
    app updated from 5.1231.0 to 5.1231.2 at 15:06 that day, between it and `woa-git-test`. Nor the rule itself: the main
    process only logs a source the renderer hands it, and the installed app holds no other mention of
    `repo_settings_default_mode`, so the rule may sit in a part that changes without an app update. A fresh folder without
    git, set up the same way, would settle the first. Until then the docs say: check the selector in the first new
    session, and pick Manual once if it isn't Manual.
  - **PowerShell, as the engine answered it (checked in 2a):** `git push` and `git push origin main` are denied through the
    PowerShell tool by `PowerShell(git push *)`. The `Read(...)` denies stop PowerShell's file commands and their aliases
    too: `Get-Content .env`, `gc .env`, `cat .env` and `type .env` are denied by `Read(.env)`, `Get-Content .env.local` by
    `Read(.env.*)` and `Get-Content .envrc` by `Read(.envrc)`. `Get-Content README.md` and `git status` stay allowed.
  - **Why the PowerShell rule matters twice:** on Windows with Git Bash, a scoped Bash deny rule like `Bash(git push *)`
    turns the PowerShell tool off for the session without a warning, unless a scoped `PowerShell(...)` rule is present
    (the tools reference says so; not reproduced here, because a no-login test session has PowerShell off anyway). So
    `PowerShell(git push *)` both denies the push and keeps PowerShell working in a project the skill set up.
  - **The rules come from a fixed template file in the plugin, copied by a script Claude Code runs; the model never runs it
    and never types a rule.** `/world-of-agents:setup-project` is a dry run, and `/world-of-agents:setup-project-write`
    writes; typing the second is Dima's yes. Both are `disable-model-invocation: true`. Each runs one fixed command through
    an injected skill command (`` !`node '${CLAUDE_PLUGIN_ROOT}/…'` ``), pre-approved by `allowed-tools` for exactly that
    command, so it runs in Auto and in Manual even though the Lead has no shell. The model only explains the output.
    That also covers a disabled shell: `disableSkillShellExecution` turns the command into a notice, and the skill says
    nothing was written and how to run the script by hand.
  - **Injected commands skip hooks:** no `PreToolUse` fires for them, so the guard never sees one. Permission rules still
    apply, and a matching deny aborts the skill.
  - **The cost of the two allows:** `npm test` and `npm run check` run code the project holds, without a prompt. An agent
    that gets any file those commands load changed can run its own code through them: `package.json`'s scripts, but also
    test files, configs (`vite.config.ts`, `vitest` and ESLint configs) and setup files. The real control is reading every
    edit approval in Manual mode, the same way you'd read a command.
  - **A plugin folder whose path holds an apostrophe** (`O'Brien`) can't run the setup skills: the single-quoted path
    breaks, and Claude Code aborts the skill with "Shell command failed … unexpected EOF while looking for matching" before
    anything runs (checked in 2a). The script can then be run by hand.
  - **An existing file is never merged by hand.** Installing the plugin at local scope itself creates that file, holding only
    `enabledPlugins` and `extraKnownMarketplaces`. When the file holds nothing else, the script adds the template's keys and
    leaves those two untouched. When it holds anything else, the script shows the template and the file's key names (never
    its values, which can be secrets) and stops, so a second write changes nothing.
  - It makes sure the project's `.gitignore` covers `settings.local.json`.
  - **What the `.env` rule really covers:** a `Read(.env)` deny applies to Claude Code's file tools and to the file commands it
    recognizes in Bash (`cat`, `head`, `tail`, `sed`, `tee`) and their redirections. It misses `grep -r` over a folder,
    a script that opens the file itself, and commands it doesn't recognize. Manual mode doesn't catch `cat .env` either:
    `cat` is one of Claude Code's built-in read-only commands, which run without a prompt in every mode. The guard's
    best-effort rule (see "The guard") covers part of that gap, for `Bash` and `PowerShell`, before the skill has run.
- **No two agents on one file.** Guild leads hand each specialist its own files.

**Sandbox trade-off.** The desktop app on Windows has no sandbox, and its WSL sessions don't load plugins. So:

- **Everyday work** happens in the desktop app, with approvals and the safe-command list.
- **Long runs** happen in a terminal inside WSL, with Claude Code's sandbox on. There, Bash can run without asking, but only inside
  the project and with no network. The mod still loads there and draws its pane in the terminal.

## Security

The big change from v2: a mod runs inside Claude Code with your full permissions and no sandbox. It can read files and secrets,
approve tool calls, send prompts as you and spend your plan. So the rule is simple: our mod watches, shows and speaks. It never
decides.

| Risk                             | What could happen                                                | Control                                                                                                                                                                                                                                                                                                                                    |
| -------------------------------- | ---------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| The mod does more than it should | A bug or a bad change makes it read secrets or call out          | A small mod with no remote code. A test runs `claude plugin validate --json` and fails if the list of events or mods API calls it uses grows past an expected list. Every pull request shows that list.                                                                                                                                    |
| The mod approves things          | A tool call runs that you never saw                              | No answers on `tool.call`, no decisions on `tool.check`. A test pins it.                                                                                                                                                                                                                                                                   |
| Prompts sent as you              | Text from an agent, a file or a web page gets sent as your words | Closed: the mod sends no prompt. A preset puts its fixed text after your draft (`$.prompt.fill`, append), and you press Enter. Never text from agents, files, the hall page or scouts. It never reads the box. No `session.send`.                                                                                                          |
| Agent text in the pane           | A link in agent output points somewhere harmful                  | Agent text is drawn with `Text`, not `Markdown` with clickable links. The only link is our own hall on localhost.                                                                                                                                                                                                                          |
| Starting the hall                | Something else gets started                                      | A fixed command from the plugin's own folder, with no arguments from agents or files. The hall keeps every v2 control: token, handshake, Host and Origin checks, CSP.                                                                                                                                                                      |
| The ledger's backfill            | Transcript text leaks                                            | It reads usage numbers only and stores totals only, never text.                                                                                                                                                                                                                                                                            |
| Skills from others               | A skill carries hidden instructions or scripts                   | Only skills we write or have read. Third-party skills are pinned to a commit, and scripts in them get reviewed like code. A skill's injected commands skip every hook, the guard included; only permission rules see them.                                                                                                                 |
| Runaway delegation               | A chain of agents burns the plan                                 | Depth capped at 2. The guard hook lets an agent start only what its row in a fixed table names, and fails closed. Specialists can't start anyone. An `Agent(...)` list in a subagent's file is no control.                                                                                                                                 |
| The guard approves things        | A start skips your permission prompt                             | Deny-only: it answers deny or nothing, never allow, which would skip the prompt. A test pins it.                                                                                                                                                                                                                                           |
| Spoken text                      | Agent text runs as a command                                     | A fixed script and a fixed argument list, no `-Command` and no shell. The text goes in on stdin, capped at 200 characters, control characters stripped. Names come from the roster table. A test pins the arguments.                                                                                                                       |
| The setup skill's settings       | A wrong line loosens permissions                                 | A fixed template copied by a script Claude Code runs, never by the model. It writes only when Dima types the write skill, never merges a file it doesn't recognize, and the file is git-ignored. No wildcard git rule, which would allow `--output`. An upgrade keeps only rules no template has; one of ours missing or changed stops it. |
| The mod reads settings           | A secret in the settings reaches the mod                         | One key, `enabledPlugins`, from the user source only, read at session start for the every-project warning. The engine hands the mod nothing else. A source check pins that one call.                                                                                                                                                       |
| Reading `.env`                   | An agent reads a secret                                          | `Read(.env)` deny rules (file tools and the file commands Claude Code recognizes in Bash) and the guard's best-effort rule on shell commands that name a `.env` file. Neither stops a determined attacker.                                                                                                                                 |
| Agent memory                     | Notes with paths or decisions end up on GitHub                   | `memory: local` by default, which stays out of git.                                                                                                                                                                                                                                                                                        |
| Scouts reading the web (on hold) | A news page tells the scout to do something else                 | On hold with milestone 6. If scouts come back: their own repo, no connectors, an allowlist of sites, and no secret in the repo.                                                                                                                                                                                                            |
| Tasks from Flint (later)         | Speech or a news page puts words in the Lead's prompt            | Not built in v3. When it is: its own key, off until Dima turns it on, a size cap and a rate limit. The pane shows exactly the text fill will put in the box, as text. Filled on Dima's click, sent by his Enter (see "Later: Flint Assistant").                                                                                            |
| Installing the plugin            | People install code that changed after they trusted it           | Releases are tagged, and the README tells people to install a tagged version.                                                                                                                                                                                                                                                              |

## Plan and usage

Works on Pro. Max recommended for guild runs, because they use the plan faster. The other v2 rules stay: personal use
on your own projects, and limits shared with claude.ai chats.

Claude Code defaults to Opus 5.5 on Pro since v2.1.280 ("Changed the default model on Pro and Team Standard plans from Sonnet to
Opus"), so the Lead on Opus works on Pro. If the ledger shows the Lead draining the 5-hour limit, switch the Lead to Sonnet.

**What uses the plan faster in v3:** more agents (each specialist has its own context) and quality-gate retries.

**What keeps it in check:**

- Only the Lead runs on Opus. Guild leads and specialists use Sonnet, and nothing uses Haiku: the guard denies the built-in
  agents, some of which run on Haiku.
- Depth is capped at 2, and gate retries at 3 per task.
- The mod makes no model calls of its own.
- The ledger shows the real numbers, so we tune with facts instead of guesses.

## Milestones

One milestone per session. Claude Code: stop after each one for Dima's review, run `npm run check` before saying anything works,
commit only when Dima asks, and never add Claude or Anthropic lines to commits, pull requests or release notes. Where the docs and
real behaviour disagree, real behaviour wins: say so and fix this brief.

**Releases.** Milestone 2 ships as `v3.0.0`: a major, because the guard now denies Claude Code's built-in agents, a change in
behaviour. Each later milestone is a minor: `v3.1.0` is the review release (docs/v3.1-plan.md, 11 Nov), the ledger is
`v3.2.0`, and so on. The README names the minimum Claude Code
version: 2.1.299 or later for `v3.0.0` (the guard's `onFailure` needs 2.1.295, and older engines refuse the mod: measured
on 10 Nov, docs/v3-m2-plan.md decision 27), 2.1.312 or later from `v3.0.1`, whose pane calls `$.settings.read`, measured
on 2.1.312 and 2.1.319 only.

0. **Release and install.**
   - Tag the current state as the `v2.0.0` release on GitHub.
   - Add `.claude-plugin/marketplace.json` at the repo root, pointing at `./plugin`, so the repo is its own marketplace.
   - Add the plugin's own `settings.json` with `"agent": "world-of-agents:lead"`, so the Lead is the main agent wherever the
     plugin is enabled.
   - Done when: on Windows, the plugin installs through the desktop app's **Add plugins**, enabled for one project only. A session
     there starts with the Lead, and the hooks still reach the hall.
1. **Spike: prove the platform.** A throwaway mod on a branch checks, in the desktop app on Windows:
   - a pane draws and docks beside the conversation, and its buttons work;
   - `$.agent.list()` returns our agents with their states;
   - `tool.check` carries the `agentId` of a subagent asking for approval;
   - `$.session.usage()` and the turn events give context, plan limits and per-request tokens;
   - `$.audio.speak` talks on Windows;
   - `$.process.spawn` can start the hall, and a `Link` to `http://localhost:4319` opens it;
   - whether a mod can tell which account is logged in;
   - whether an `Agent(...)` list restricts a subagent, and whether depth 2 works;
   - whether the desktop app applies `permissions.defaultMode` set to `default` and `env` with
     `CLAUDE_CODE_MAX_SUBAGENT_SPAWN_DEPTH=2` from a project's `.claude/settings.local.json`, since a plugin can set neither;
   - whether a pane can tell a session runs in `auto`, so it can warn. It never changes the mode itself.
   - Done when: `docs/v3-spike.md` records a real answer for each, with a go or no-go per feature. Done on 5 Nov: no voice from
     `$.audio.speak` on Windows, no account, and an `Agent(...)` list in a subagent restricts nothing; the rest works, some
     with limits. This brief follows from it.
2. **Team pane and voice.** Everything under "The team pane and voice", plus the prebuilt hall inside the plugin, plus:
   - **Agents hurry.** If an agent's work starts or ends while it's still walking, it walks at about 2.5x speed.
   - **Show the work.** At the desk, an agent shows its last working state for at least 3 s before it walks to the rest room.
     The activity feed keeps the real times.
   - **No links in agent text.** `AgentText` shows a Markdown link `[text](url)` as the plain "text", never a clickable link.
   - **The Reviewer reports what it ran.** Its prompt says: report only checks you actually ran with your own tools.
   - **The Lead's final answer in the activity feed**, scrubbed by `send.mjs`, capped, and rendered as text only.
   - **Speech bubbles stay long enough to read:** the first sentence only, as plain text, at most 90 characters, up 4 s
     plus 60 ms per character, at most 10 s, never while the agent walks, and a queue per agent, so a new bubble waits
     instead of replacing the old one.
   - **The whole text in the feed:** a long message's row expands to all of it (up to 20,000 characters), and messages to
     you, approval waits and failures are flagged, from the kind of event alone.
   - **The guard hook** (see "The guard"), with its milestone 2 table.
   - **The setup skills,** `/world-of-agents:setup-project` and `/world-of-agents:setup-project-write`, moved here from
     milestone 4: Claude Code runs a script that copies a fixed template into `.claude/settings.local.json` when Dima types
     the write skill, and makes sure `.gitignore` covers it (see "A safe-command list").
   - Built in four parts with a stop after each; `docs/v3-m2-plan.md` has the files, tests and checks. Released as `v3.0.0`.
   - **The README says the pane appears after the first message.**
   - **The hall comes back:** the mod checks `/api/health` at session start and at the start of each turn, and restarts the
     hall if nothing answers, never starting a second copy (see "The hall starts itself").
   - Done when: from opening a project in the desktop app to watching a run in the hall, you never touch a terminal.
3. **Token ledger.** Everything under "The token ledger", plus the chest in the hall. Done when: the pane's plan-limit numbers
   match claude.ai's usage page, and the backfill test proves no transcript text is stored.
4. **Big-project tools.** Quality gates, the backlog (the setup skill now writes `BACKLOG.md` too), and plan once and approve
   once. Done when: a real task gets a failing check fixed by the agent within 3 tries, without you stepping in.
5. **Guilds, skills and memory.** First a design round with Dima for the guild wings and the new characters. Then the agent files,
   skills, memory, roster, the guild rows in the guard's table, and the hall changes. Done when: the Designer hands a task to a
   specialist, which uses its preloaded skill, and the hall shows both, and the guard denies a guild lead starting another
   guild's specialist.
6. **Scouts: on hold.** The news scout moved to Flint Assistant on 10 Nov, so there is nothing to build here. It waits until Dima
   decides whether scouts come back, and with which first scout.

## Decisions

The first three are Dima's answers from 5 Nov, the next two come from the milestone 1 review, and the news digest row is from
10 Nov. The rest have a default so Claude Code can start; Dima changes them in the doc.

| Decision                   | Default                                                                       | Other option                                                  | Status  |
| -------------------------- | ----------------------------------------------------------------------------- | ------------------------------------------------------------- | ------- |
| Platform                   | A mod in the Claude app                                                       | Your own desktop app, in v4 after a cost study                | Agreed  |
| Team shape                 | Guilds, two levels deep                                                       | Flat, or the experimental agent teams                         | Agreed  |
| Where scouts run           | Anthropic's cloud scheduled tasks                                             | Desktop scheduled tasks on your PC                            | On hold |
| News digest                | In Flint Assistant, Dima's local assistant, started by a click at login       | A news scout in World of Agents                               | Agreed  |
| Guild control              | Deny-only guard hook                                                          | `Agent(...)` lists, which milestone 1 showed restrict nothing | Agreed  |
| Plan                       | Works on Pro, Max recommended                                                 | Max or higher only                                            | Agreed  |
| Repo                       | Same repo, with a `v2.0.0` release tag; scouts get their own small repo       | A new repo for v3                                             | Open    |
| Scouts repo                | Public: digests are public news and good portfolio material                   | Private, but then the hall needs a token to read the reports  | On hold |
| Everyday work vs long runs | The desktop app with approvals; a WSL terminal with the sandbox for long runs | WSL only                                                      | Open    |
| Voice                      | PowerShell fixed script, on by default                                        | Off until you turn it on                                      | Open    |
| Agent memory               | `local`, out of git                                                           | `project`, committed                                          | Open    |
| Specialist models          | Sonnet                                                                        | Opus for the Review guild, where security matters most        | Open    |
| Ledger backfill            | An opt-in button                                                              | Automatic on install                                          | Open    |

## Later: Flint Assistant

Flint Assistant is Dima's separate local voice assistant: Python and Ollama on his PC, in its own repo, started after the
current World of Agents work. One day Dima will say "Hey Flint, ask the Lead to …". Nothing is built for it in v3, but two
things must stay possible:

- **Where a task comes in:** the hall server on `127.0.0.1:4319`, which already checks a token, the Host and the Origin. A
  later endpoint takes a task from Flint with the same checks.
- **How it reaches the Lead:** the pane shows it as "From Flint: …", and a button puts the text after the draft with
  `$.prompt.fill` (append), the way presets do. Dima reads it and presses Enter. Never `$.prompt.submit`.

Today the mod sends nothing as Dima and fills the box only with fixed preset text. Flint's text would be the first untrusted
text it puts there, so when this is built, the "Prompts sent as you" rule gets a written exception with the controls in its
Security row. Flint's text is untrusted: it comes from speech, and Flint also reads the news. Nothing in v3 may close either
path (the hall's token checks, the fill-only presets).

When the endpoint is built, these rules hold:

- **Its own key:** not the hooks' token, so one leaking doesn't open the other.
- **Off by default:** Dima turns it on.
- **Capped:** a size cap and a rate limit.
- **No hidden text:** the pane shows exactly the text that fill will put in the box, cleaned the same way (no control, bidi or
  zero-width characters), with nothing hidden past the cap.

## Later: an own desktop app

There are two very different desktop apps, and only one of them costs money.

- **An app that only watches** is free and allowed. That's the hall in its own window, with a tray icon and notifications, reading
  the same events as the page. It never talks to Claude, so it needs no key and no login.
- **An app that talks to Claude**, where you chat inside your app and it drives the agents, has to use an API key. The terms say
  products built on Claude "should use API key authentication", so you'd pay per token instead of using your subscription.

**How we'll price the second one:** after milestone 3, the ledger shows your real monthly tokens. We multiply them by current API
prices. As of 27 Oct 2026, those were $4 per million input and $20 per million output tokens for Opus 5.5, and $2 and $10 for
Sonnet 5.5, with cached input much cheaper. We'll check the prices again on the day we decide. Then you choose with real numbers,
not a guess.

## Sources

Checked on 5 Nov 2026, except the prices (27 Oct 2026).

- [Mods overview](https://code.claude.com/docs/en/plugins/mods/overview): what a mod can do and reach, and where it runs
- [Draw in the interface](https://code.claude.com/docs/en/plugins/mods/interface): panes, elements, the desktop app's rules
- [Mods reference](https://code.claude.com/docs/en/plugins/mods/reference): events, `$.agent`, `$.session.usage()`, `$.audio`, limits
- [Plugins overview](https://code.claude.com/docs/en/plugins): marketplaces, scopes, the desktop app and VS Code
- [Claude Code in the desktop app](https://code.claude.com/docs/en/desktop): plugins in local sessions, none in WSL sessions
- [Subagents](https://code.claude.com/docs/en/sub-agents): `skills`, `memory`, nesting depth, `Agent(...)` lists only on the
  main thread
- [Hooks](https://code.claude.com/docs/en/hooks): `PreToolUse` deny, `"onFailure": "block"`, async hooks can't block
- [Changelog](https://code.claude.com/docs/en/changelog): 2.1.280, Opus the default on Pro
- [Agent teams](https://code.claude.com/docs/en/agent-teams): experimental, no nested teams, higher usage
- [Scheduled tasks](https://code.claude.com/docs/en/routines): cloud runs, triggers, connectors, network secrets, limits
- [Legal and compliance](https://code.claude.com/docs/en/legal-and-compliance): subscription use, products on the Agent SDK
- [Claude API pricing](https://docs.claude.com/en/docs/about-claude/pricing): per-token prices
