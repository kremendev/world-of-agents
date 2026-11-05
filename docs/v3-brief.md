# World of Agents — v3 Brief

5 Nov 2026 · Dima. A copy of the "World of Agents — v3 Brief" doc for Claude Code. From milestone 0 on, this file in `docs/` is the
source of truth for implementation; the doc is the overview and the place decisions are made.

v3 moves World of Agents into the Claude app you already open. The plugin grows a mod: a team pane beside the conversation shows
who is working, who needs you and how much of your plan is used, and speaks when it matters. The team grows into guilds of
specialists with their own skills and memory, and scouts run on their own in Anthropic's cloud.

## Goal and scope

You open a project in the Code tab of the Claude desktop app and talk to the Lead/PM as your main agent. No terminal: the mod
starts the hall and opens it for you.

| In v3                                                                       | Later                                       |
| --------------------------------------------------------------------------- | ------------------------------------------- |
| A mod in the plugin: team pane, voice, preset prompts, "Open hall"          | An own desktop app (v4, after a cost study) |
| Install from the repo as a marketplace, no `--plugin-dir`                   | Voice input (mods can speak, not listen)    |
| Guilds two levels deep, skills and memory per agent                         | Several projects in one hall                |
| A token ledger: this session, plan limits, all time on this PC              | A Codex adapter                             |
| Scouts on Anthropic's cloud scheduled tasks, starting with news to Telegram | Watching cloud runs live in the hall        |
| Quality gates, backlog, safe-command list                                   | Unattended runs on your PC                  |

The pixel hall stays a browser page: inside the Claude app a pane draws boxes, text and SVG, not our canvas.

## How it fits together

The mod sits inside Claude; the hall and scouts only report. Everything runs on your Max plan, through Anthropic's own app and
cloud.

```text
YOUR PC
  Claude desktop app, Code tab (your Max login)  <───────────>  ANTHROPIC CLOUD: Claude models on your Max plan
    Lead/PM (main thread, Opus) ──> Guild leads (4 guilds, Sonnet) ──> Specialists (2 per guild, own skills)
                       │ events, agent states
                       ▼
    World of Agents mod: team pane, voice, token ledger. Watches and speaks, never decides.
       │ read, write, run (you approve commands)          │ events + token
       ▼                                                  ▼
  Project folder                                     Hall server + page: 127.0.0.1:4319, pixel hall in the browser,
                                                     started by the mod
                                                          ▲
ANTHROPIC CLOUD                                           │ reports
  News scout (scheduled task, own repo, no connectors,    │
  allowlisted sites only) ──digest──> Telegram (your chat only)
                         └──commits──> woa-scouts repo (daily reports)
```

Claude talks to Anthropic on its own, so our code never sees your login. The mod reads the session from inside Claude Code and
passes events to the hall. The scout runs in the cloud, and the hall only reads the reports it commits.

Where each part lives:

- `.claude-plugin/marketplace.json` at the repo root: makes the repo its own marketplace.
- `plugin/`: the agents (guild leads and specialists), `skills/`, `settings.json` (the Lead as main agent), `hooks/`
  (`send.mjs`, the quality gate, and the mod's module), and `hall/` (the prebuilt page plus one bundled server file, built at
  release).
- `server/` and `src/`: the hall's source, as in v2.
- `docs/v3-brief.md` (this brief) and `docs/v3-spike.md` (milestone 1's findings).
- `kremendev/woa-scouts`: a separate small repo with the scouts' prompts, skills and reports.

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
`CLAUDE_CODE_MAX_SUBAGENT_SPAWN_DEPTH=2` stops anything deeper.

- Each guild lead's `Agent(...)` list names only its own specialists.
- Specialists get no `Agent` tool.
- Guild leads and specialists run on Sonnet. Only the Lead uses Opus.
- Milestone 1 checks that an `Agent(...)` list really restricts a subagent, not only the main thread.

**Skills.** The plugin gets a `skills/` folder of skills we write or vet. An agent's `skills:` line preloads 2 to 5 of them in
full when it starts, and it can still call any other skill when it needs one. Preloaded skills cost context on every run, so keep
the lists short.

**Memory.** The Lead and each guild lead get `memory: local`: a notes file per agent that survives between sessions and stays out
of git. That's how the Designer remembers your design decisions, not just best practices. Switch an agent to `memory: project`
only if you want its notes committed, because on a public repo anyone can read them.

The new characters need sprites and room in the hall. That's a design round before milestone 5, since the v1 look is locked.

## The team pane and voice

The mod draws a pane that docks beside the conversation in the desktop app when the panel is 800 px or wider, and sits above the
prompt when it's narrower. The same pane works in the terminal and in VS Code.

**What the pane shows:**

- **Agents by guild**, with exact states from `$.agent.list()`: pending, running, waiting, idle, completed, failed or killed. No
  guessing from hook timing.
- **Who needs you**, taken from the `agentId` on `tool.check`. You still answer in Claude Code's own permission prompt, which a
  mod can't change.
- **A warning when the session runs in `auto`**, because nothing asks for your approval then. The pane only warns: it never changes
  the mode itself.
- **Tasks** in progress and done.
- **Usage**: context used and plan limits. See the token ledger.
- **Buttons**: "Open hall", mute, and a few preset prompts such as "Plan the next milestone", "Run the quality check" and "Review
  what changed". A preset sends its fixed text as if you had typed it.

**The hall starts itself.** When a session starts, the mod checks `/api/health`, and if nothing answers it starts the hall server.
The plugin carries a prebuilt hall (one bundled server file plus the built page), so installing it needs no `npm install`. "Open
hall" links to `http://localhost:4319`, because the desktop app only makes `https:` and `http://localhost` links clickable.

**Voice.** The mod speaks with `$.audio.speak` for two things only:

- "Backend dev needs your approval."
- "The team is done." Then the first sentence of the Lead's report.

It's on by default, the mute button is remembered between sessions, and nothing else is spoken. Milestone 1 checks that speech
works on Windows.

## The token ledger

The ledger answers three questions: how full is this conversation, how much of my plan is gone, and how much have I used in total.

| What                | Where it comes from                                                                            | Shown as                                        |
| ------------------- | ---------------------------------------------------------------------------------------------- | ----------------------------------------------- |
| This session        | `$.session.usage()`: context tokens, window and percent                                        | "Context 42% of 200K"                           |
| Plan limits         | `rateLimits` in the same call (kind, percent used, reset time), refreshed on `session.measure` | "5-hour limit 63%, resets 18:40"                |
| All time on this PC | Each request's token usage, added to a running total in `$.store`                              | Tokens in and out, plus the value at API prices |
| Older sessions      | An opt-in "Count my past sessions" button that reads Claude Code's local transcripts           | Added to the all-time total once                |

**Rules:**

- The backfill reads numbers only. It never copies or stores transcript text, which can hold anything you or an agent typed.
- Transcripts only go back as far as Claude Code keeps them, because it cleans up old ones.
- "Value at API prices" is what the same tokens would cost on the API, from a dated price table. On Max it isn't money you spent,
  but it's the number we need for the desktop-app question later.
- Milestone 1 checks whether a mod can tell which account is logged in. If it can't, the total is per PC, and the pane says so.

**What it can't see:** claude.ai chats, the mobile app, other PCs, and scouts running in the cloud. They all use the same plan. For
the full picture of the plan, claude.ai/settings/usage is the source.

In the hall, the treasure chest in the Lead's room shows the all-time total.

## Scouts

Scouts are agents that work on their own, on Anthropic's cloud scheduled tasks. They run on your Max plan even when your PC is off,
at most once an hour. They can start on a schedule, from a GitHub event, or from an API call.

**Where they live:** their own small repo, `kremendev/woa-scouts`. Each scout is a prompt plus committed skills, with its own cloud
environment. A cloud run clones only that repo, so a scout never sees your projects or your other secrets.

**The first scout: news to Telegram.**

1. A schedule fires it, for example daily at 08:07. A time just past the hour, because runs set exactly on the hour can start late.
2. It reads only from an allowlist of sources: the environment's network access is set to Custom, with those sites and
   `api.telegram.org`.
3. It writes a short digest (up to 10 items: title, link, one line each) and commits it to `reports/YYYY-MM-DD.md`.
4. It sends the digest to your Telegram chat through a bot. The bot token is stored as a network secret, so the scout can use it
   but never read it.

**One rule that matters:** a new scheduled task includes all your connectors by default, and the run can use them, including
writes. Remove every connector from a scout. A scout reading untrusted news with access to your email or calendar is how data gets
stolen.

**In the hall:** a rookery where the scouts live as ravens, showing each scout's last run and its latest report. The hall can't
watch cloud runs live. It reads the committed reports afterwards.

**More scout ideas:**

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
- **A safe-command list.** A project's `.claude/settings.json` lets `npm test`, `npm run check`, `git status`, `git diff` and
  `git log` run without asking. It always denies reading `.env` files and `git push`. A `/world-of-agents:setup-project` skill
  writes the backlog and these settings, and you check the diff before keeping it.
- **No two agents on one file.** Guild leads hand each specialist its own files.

**Sandbox trade-off.** The desktop app on Windows has no sandbox, and its WSL sessions don't load plugins. So:

- **Everyday work** happens in the desktop app, with approvals and the safe-command list.
- **Long runs** happen in a terminal inside WSL, with Claude Code's sandbox on. There, Bash can run without asking, but only inside
  the project and with no network. The mod still loads there and draws its pane in the terminal.

## Security

The big change from v2: a mod runs inside Claude Code with your full permissions and no sandbox. It can read files and secrets,
approve tool calls, send prompts as you and spend your plan. So the rule is simple: our mod watches, shows and speaks. It never
decides.

| Risk                             | What could happen                                                | Control                                                                                                                                                                                                 |
| -------------------------------- | ---------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| The mod does more than it should | A bug or a bad change makes it read secrets or call out          | A small mod with no remote code. A test runs `claude plugin validate --json` and fails if the list of events or mods API calls it uses grows past an expected list. Every pull request shows that list. |
| The mod approves things          | A tool call runs that you never saw                              | No answers on `tool.call`, no decisions on `tool.check`. A test pins it.                                                                                                                                |
| Prompts sent as you              | Text from an agent, a file or a web page gets sent as your words | `asUser` prompts come only from preset buttons with fixed text. Never from agent output, files, the hall page or scouts. No `session.send`.                                                             |
| Agent text in the pane           | A link in agent output points somewhere harmful                  | Agent text is drawn with `Text`, not `Markdown` with clickable links. The only link is our own hall on localhost.                                                                                       |
| Starting the hall                | Something else gets started                                      | A fixed command from the plugin's own folder, with no arguments from agents or files. The hall keeps every v2 control: token, handshake, Host and Origin checks, CSP.                                   |
| The ledger's backfill            | Transcript text leaks                                            | It reads usage numbers only and stores totals only, never text.                                                                                                                                         |
| Skills from others               | A skill carries hidden instructions or scripts                   | Only skills we write or have read. Third-party skills are pinned to a commit, and scripts in them get reviewed like code.                                                                               |
| Runaway delegation               | A chain of agents burns the plan                                 | Depth capped at 2. Each guild lead can start only its own specialists, and specialists can't start anyone.                                                                                              |
| Agent memory                     | Notes with paths or decisions end up on GitHub                   | `memory: local` by default, which stays out of git.                                                                                                                                                     |
| Scouts reading the web           | A news page tells the scout to do something else                 | Its own repo, no connectors, an allowlist of sites, the bot token as a network secret, a fixed chat and a capped digest. The worst case is junk in your own Telegram chat.                              |
| Installing the plugin            | People install code that changed after they trusted it           | Releases are tagged, and the README tells people to install a tagged version.                                                                                                                           |

## Plan and usage

The v2 rules stay: Claude Code logged in with Max or higher, personal use on your own projects, and limits shared with claude.ai
chats.

**What uses the plan faster in v3:** more agents (each specialist has its own context), quality-gate retries, and scouts, whose
cloud runs count against the same plan.

**What keeps it in check:**

- Only the Lead runs on Opus. Guild leads and specialists use Sonnet, and nothing uses Haiku.
- Depth is capped at 2, and gate retries at 3 per task.
- Scouts run a few times a day, not hourly.
- The mod makes no model calls of its own.
- The ledger shows the real numbers, so we tune with facts instead of guesses.

## Milestones

One milestone per session. Claude Code: stop after each one for Dima's review, run `npm run check` before saying anything works,
commit only when Dima asks, and never add Claude or Anthropic lines to commits, pull requests or release notes. Where the docs and
real behaviour disagree, real behaviour wins: say so and fix this brief.

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
   - an `Agent(...)` list really restricts a subagent, and depth 2 works;
   - whether the desktop app applies `permissions.defaultMode` set to `default` and `env` with
     `CLAUDE_CODE_MAX_SUBAGENT_SPAWN_DEPTH=2` from a project's `.claude/settings.local.json`, since a plugin can set neither;
   - whether a pane can tell a session runs in `auto`, so it can warn. It never changes the mode itself.
   - Done when: `docs/v3-spike.md` records a real answer for each, with a go or no-go per feature.
2. **Team pane and voice.** Everything under "The team pane and voice", plus the prebuilt hall inside the plugin, plus:
   - **Agents hurry.** If an agent's work starts or ends while it's still walking, it walks at about 2.5x speed.
   - **Show the work.** At the desk, an agent shows its last working state for at least 3 s before it walks to the rest room.
     The activity feed keeps the real times.
   - **No links in agent text.** `AgentText` shows a Markdown link `[text](url)` as the plain "text", never a clickable link.
   - **The Reviewer reports what it ran.** Its prompt says: report only checks you actually ran with your own tools.
   - Done when: from opening a project in the desktop app to watching a run in the hall, you never touch a terminal.
3. **Token ledger.** Everything under "The token ledger", plus the chest in the hall. Done when: the pane's plan-limit numbers
   match claude.ai's usage page, and the backfill test proves no transcript text is stored.
4. **Big-project tools.** Quality gates, the backlog, plan once and approve once, the safe-command list and the setup skill. Done
   when: a real task gets a failing check fixed by the agent within 3 tries, without you stepping in.
5. **Guilds, skills and memory.** First a design round with Dima for the guild wings and the new characters. Then the agent files,
   skills, memory, roster and hall changes. Done when: the Designer hands a task to a specialist, which uses its preloaded skill,
   and the hall shows both.
6. **Scouts.** The `woa-scouts` repo, the news scout on a scheduled task, Telegram, and the rookery. Done when: a scheduled run
   posts a digest to Telegram with no connectors on the task and no secret in the repo, and the hall shows the latest report.

## Decisions

The first three are Dima's answers from 5 Nov. The rest have a default so Claude Code can start; Dima changes them in the doc.

| Decision                   | Default                                                                       | Other option                                                 | Status |
| -------------------------- | ----------------------------------------------------------------------------- | ------------------------------------------------------------ | ------ |
| Platform                   | A mod in the Claude app                                                       | Your own desktop app, in v4 after a cost study               | Agreed |
| Team shape                 | Guilds, two levels deep                                                       | Flat, or the experimental agent teams                        | Agreed |
| Where scouts run           | Anthropic's cloud scheduled tasks                                             | Desktop scheduled tasks on your PC                           | Agreed |
| Repo                       | Same repo, with a `v2.0.0` release tag; scouts get their own small repo       | A new repo for v3                                            | Open   |
| Scouts repo                | Public: digests are public news and good portfolio material                   | Private, but then the hall needs a token to read the reports | Open   |
| Everyday work vs long runs | The desktop app with approvals; a WSL terminal with the sandbox for long runs | WSL only                                                     | Open   |
| Voice                      | On for approvals and "the team is done"; mute is remembered                   | Off until you turn it on                                     | Open   |
| Agent memory               | `local`, out of git                                                           | `project`, committed                                         | Open   |
| Specialist models          | Sonnet                                                                        | Opus for the Review guild, where security matters most       | Open   |
| Ledger backfill            | An opt-in button                                                              | Automatic on install                                         | Open   |

## Later: an own desktop app

There are two very different desktop apps, and only one of them costs money.

- **An app that only watches** is free and allowed. That's the hall in its own window, with a tray icon and notifications, reading
  the same events as the page. It never talks to Claude, so it needs no key and no login.
- **An app that talks to Claude**, where you chat inside your app and it drives the agents, has to use an API key. The terms say
  products built on Claude "should use API key authentication", so you'd pay per token instead of using Max.

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
- [Subagents](https://code.claude.com/docs/en/sub-agents): `skills`, `memory`, nesting depth
- [Agent teams](https://code.claude.com/docs/en/agent-teams): experimental, no nested teams, higher usage
- [Scheduled tasks](https://code.claude.com/docs/en/routines): cloud runs, triggers, connectors, network secrets, limits
- [Legal and compliance](https://code.claude.com/docs/en/legal-and-compliance): subscription use, products on the Agent SDK
- [Claude API pricing](https://docs.claude.com/en/docs/about-claude/pricing): per-token prices
