# World of Agents

A pixel-art hall where you watch five AI agents work on your code.

You run Claude Code in your project. A team of five does the work: Lead/PM, Designer, Frontend dev, Backend dev and Reviewer. A web page shows each of them walking to a desk, reading, writing and waiting for your approval.

**[Try the demo](https://kremendev.github.io/world-of-agents/).** It is a scripted run in your browser. It needs no setup and calls no AI.

![The Forge Hall during a real run. The Backend dev is at its desk, flagged "needs you", and an orange banner says it needs your approval in Claude Code. The activity feed lists each step.](docs/media/live-hall.png)

A recorded run, played back at twice the speed:

![The team during a run: the Lead takes the task, the Backend dev fetches its scroll and writes, the Reviewer checks the work, and everyone goes back to the rest room.](docs/media/live-run.gif)

## Requirements

- **Claude Code CLI 2.1.295 or later**, logged in with your Claude plan. Older versions let the guard (see What it never does) fail open. Works on Pro. Max recommended for guild runs and scouts, because they use the plan faster. [Install it](https://code.claude.com/docs/en/quickstart) if you don't have it. Runs count against your plan's limits, and claude.ai shares those limits.
- **Requires Node.js 20.19 or later on PATH.** Tested on 24.22.0. The plugin's hooks run on it, and the guard fails closed: without Node, every agent start and every Bash or PowerShell command in a project with the plugin is blocked with `hook error: [node ${CLAUDE_PLUGIN_ROOT}/hooks/guard.mjs]: failed; blocking because onFailure is "block" Error occurred while executing hook command: Executable not found in $PATH: "node"`. Install Node, or turn the plugin off for that project: `claude plugin disable world-of-agents@world-of-agents --scope local` in the project folder, or switch it off in the desktop app under Customize, then Plugins.
- **Git Bash on Windows.** `woa` is a bash script.

Tested on Windows 11 with Claude Code 2.1.318.

## Setup

```bash
git clone https://github.com/kremendev/world-of-agents.git
cd world-of-agents
npm ci
```

Put `woa` on your PATH, so you can start it from any project. Run this once, in the same folder:

```bash
echo "export PATH=\"\$PATH:$PWD/bin\"" >> ~/.bashrc
source ~/.bashrc
```

The next time you open Git Bash, it may print a red warning about `~/.bash_profile` and create that file. That is fine, and it only happens once.

Check that it reaches Claude Code. This prints a version and starts nothing:

```bash
woa --version
```

## Run it

Use two terminals.

**Terminal 1: the hall.** In this repo:

```bash
npm run hall
```

Open http://127.0.0.1:4319. The badge says Live. To see the scripted run, press **Play demo**. **Back to live** returns to the real one.

**Terminal 2: Claude Code.** In your own project:

```bash
cd path/to/your/project
woa
```

Type your task in Claude Code, and the hall follows it. You approve edits and commands in the terminal, never in the page.

Press Ctrl+C in terminal 1 to stop the hall.

## Install as a plugin

`woa` is for the terminal. To use the team in the Claude desktop app, or in any Claude Code session, install the plugin. You still need the setup above and `npm run hall` running, because the plugin only reports to the hall.

**1. Add the marketplace.** You do this once on each PC, and it turns nothing on. In a Claude Code session:

```text
/plugin marketplace add kremendev/world-of-agents#v2.2.0
```

Or in a terminal:

```bash
claude plugin marketplace add kremendev/world-of-agents#v2.2.0
```

**2. Install it for one project only.** Use any one of these:

- **Desktop app:** open the project in the Code tab. Click **+** next to the prompt box, then **Add plugins** (or **Plugins**, then **Browse plugins**). Select `world-of-agents` and choose the local-only scope.
- **Claude Code session in the project:** run `/plugin install world-of-agents@world-of-agents` and choose **Install for you, in this repo only**.
- **Terminal, in the project folder:** run `claude plugin install world-of-agents@world-of-agents --scope local`.

**Don't choose user scope.** The Lead/PM becomes the main agent wherever the plugin is enabled, so every session in every project would start as the Lead and report to the hall. Project scope is only for a team: it writes to `.claude/settings.json`, which you commit, and turns the plugin on for everyone who clones the repo.

**3. Check the permission mode says Manual.** The selector is under the prompt box. `woa` always starts in Manual, but an installed plugin can't choose a mode. In Auto, nothing asks for your approval, so the hall never shows "needs you".

From v3.0.0 the plugin does this for you, once per project, in two steps you type yourself. `/world-of-agents:setup-project` shows what it would write into the project's `.claude/settings.local.json`: Manual mode, subagent depth 2 and a safe-command list, plus a `.gitignore` line for that file. It writes nothing. `/world-of-agents:setup-project-write` then writes exactly that; typing it is your yes. Claude Code runs a fixed script from the plugin for both, and the model can't start either one. Run again, it says "Already set up". If the file already holds other settings, nothing changes and you're told which ones differ (names only, never values). The settings apply from the next new session. With `woa` it works now.

The safe-command list lets `npm test` and `npm run check` run without asking, so they run whatever code the project's scripts, tests, configs and setup files hold. Read every edit approval in Manual mode as carefully as a command. If the path to the plugin's folder holds an apostrophe, the two skills can't run: Claude Code stops with "Shell command failed … unexpected EOF while looking for matching" and nothing happens.

To remove the plugin, run this in the project folder:

```bash
claude plugin uninstall world-of-agents@world-of-agents --scope local
```

You can still run `woa` in a project that has the plugin. For that session, `woa`'s copy replaces the installed one, so nothing loads twice.

## What the hall shows

- The Lead/PM walks to the dashboard, and each task it hands out becomes a card.
- Each agent fetches its scroll from the Lead's room, then goes to its desk.
- Agents read and write at their desks. The orcs smash their keyboards.
- The furnace burns brighter the more agents are working.
- When Claude Code asks for your approval, the agent shows "needs you" and an orange banner names it.
- A finished agent shows its last message, its card moves to Done and it walks to the rest room.
- The Reviewer reads the work, and the Lead's report shows as a message to you.
- The activity feed lists every step with its time. Click an agent to see only that agent.

## What it never does

- **No API key.** Claude Code runs on your own login. There is no key anywhere in this project.
- **It never reads your login.** That is also why it can't check which plan you have.
- **It never starts a run.** No endpoint starts or runs anything.
- **The page only watches.** Nothing you do in the page reaches an agent.
- **Events stay in memory on 127.0.0.1.** The hall listens on that address only, keeps the last 500 events and forgets them when it stops. Nothing goes to any other computer.

The hook script sends the hall a short list of fields: event name, ids, agent type, tool name, task titles and capped text from your prompt and the agents' messages. It never sends file contents, commands or transcripts. It replaces your home folder and anything shaped like a key before sending. It drops any reply, so the hall can't steer Claude Code.

`woa` adds nothing to your project. Installing the plugin adds one line to the project's `.claude/settings.local.json`, which git ignores. The hall writes one file, `~/.world-of-agents/token`: a random token that lets your hooks post events. It is not your Claude login. The hall deletes it when it stops, but a PC shutdown can leave it behind. That is harmless: the hook script posts nothing until the hall proves it holds the token. An installed plugin has this check from v2.2.0.

One hook answers Claude Code: the guard, `plugin/hooks/guard.mjs`. It runs before every agent start and every Bash or PowerShell command, and it can only deny, never allow, so your permission prompt still decides. It denies an agent start outside the team's table (only the Lead starts agents, and only the four others; Claude Code's own agents are denied, because some run on Haiku), and a shell command that names a `.env` file. The `.env` rule is best effort: it stops accidents and lazy prompt injection, not someone set on getting around it. If the guard can't read a call, it denies it, and with Claude Code 2.1.295 or later a guard that crashes or hangs blocks the call too. `woa` has it now; an installed plugin has it from v3.0.0.

The hook script has one debug switch. `WOA_CAPTURE=1` saves raw hook payloads, which can hold file contents and commands, to `~/.world-of-agents/capture/`. `woa` always turns it off, so normal use never saves them.

## Known limits

- **Approval flags follow a few rules.** `PermissionRequest` names the agent asking, right away.
  - No hook says when you answered, so the flag clears at that agent's next event.
  - If a session sends no `PermissionRequest` (the hall started mid-wait, or an older Claude Code), the hall guesses after about 6 s: the running subagent that last used Edit, Write or Bash. With two writing at once it can name the wrong one.
  - Once a `PermissionRequest` has arrived in a session, the hall never guesses. If a later one gets lost, that wait shows no flag.
- **No token counts.** Hooks don't report them.
- **No sandbox on native Windows.** Commands run with your user's rights, so your approval is the guard. Read each command before you approve it. Claude Code's sandbox needs macOS, Linux or WSL2.
- **One session at a time.** The hall follows one session. Starting, clearing or resuming a session takes it over.
- **Port 4319 is fixed.**
- **Tested on Windows only.** `woa` may work on macOS and Linux, but nobody has tried it.

Work on a git branch, and commit before a run. Review the diff before you commit what the agents wrote.

## How it's built

```text
Claude Code in your project, with the plugin
    │ hook events, as JSON on stdin
    ▼
Hook script: keeps allowed fields, scrubs them, drops any reply
    │ POST /api/hook, with the token
    ▼
Hall server, 127.0.0.1:4319: checks token, Host and Origin, turns hooks into events
    │ Server-Sent Events, read only
    ▼
Page: checks every event, draws the hall
```

- **Plugin** (`plugin/`): the five agents and the hooks. The Lead runs on Opus and the team on Sonnet. Each agent gets only the tools its job needs, and the Reviewer only reads. The repo is its own marketplace (`.claude-plugin/marketplace.json`).
- **Hook script** (`plugin/hooks/send.mjs`): uses Node built-ins only, always exits 0 and prints nothing.
- **Hall server** (`server/`): plain `node:http`, run with `tsx`. It also serves the page.
- **Page** (`src/`): React and TypeScript, with the hall drawn on Canvas 2D. Agent text only ever shows as plain text, and a Content-Security-Policy stops the page loading anything but its own files. The demo plays the same events from a script.
- **Launcher** (`bin/woa`): starts Claude Code with the plugin, the Lead and approvals on.

To work on the page, run `npm run dev` (http://localhost:5173). Run `npm run check` before you commit. The plan and the real hook payloads are in [docs/v2-brief.md](docs/v2-brief.md) and [docs/v2-hooks.md](docs/v2-hooks.md).

## Credits and license

All art is original, drawn for this project. The only third-party asset is the [Pixelify Sans](https://fontsource.org/fonts/pixelify-sans) font (SIL Open Font License 1.1), installed from npm, so the page makes no requests to Google Fonts.

MIT. See [LICENSE](LICENSE).
