# World of Agents

A pixel-art hall where you watch five AI agents work on your code.

You run Claude Code in your project. A team of five does the work: Lead/PM, Designer, Frontend dev, Backend dev and Reviewer. A web page shows each of them walking to a desk, reading, writing and waiting for your approval.

**[Try the demo](https://kremendev.github.io/world-of-agents/).** It is a scripted run in your browser. It needs no setup and calls no AI.

![The Forge Hall during a real run. The Backend dev is at its desk, flagged "needs you", and an orange banner says it needs your approval in Claude Code. The activity feed lists each step.](docs/media/live-hall.png)

A recorded run, played back at twice the speed:

![The team during a run: the Lead takes the task, the Backend dev fetches its scroll and writes, the Reviewer checks the work, and everyone goes back to the rest room.](docs/media/live-run.gif)

## Requirements

- **Claude Code CLI**, logged in with a Max plan or higher. [Install it](https://code.claude.com/docs/en/quickstart) if you don't have it. Runs count against your plan's limits, and claude.ai shares those limits.
- **Node.js.** Tested on 24.22.0.
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

Nothing is installed into your project. The hall writes one file, `~/.world-of-agents/token`: a random token that lets your hooks post events. It is not your Claude login, and it is deleted when the hall stops.

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

- **Plugin** (`plugin/`): the five agents and the hooks. The Lead runs on Opus and the team on Sonnet. Each agent gets only the tools its job needs, and the Reviewer only reads.
- **Hook script** (`plugin/hooks/send.mjs`): uses Node built-ins only, always exits 0 and prints nothing.
- **Hall server** (`server/`): plain `node:http`, run with `tsx`. It also serves the page.
- **Page** (`src/`): React and TypeScript, with the hall drawn on Canvas 2D. Agent text only ever shows as plain text, and a Content-Security-Policy stops the page loading anything but its own files. The demo plays the same events from a script.
- **Launcher** (`bin/woa`): starts Claude Code with the plugin, the Lead and approvals on.

To work on the page, run `npm run dev` (http://localhost:5173). Run `npm run check` before you commit. The plan and the real hook payloads are in [docs/v2-brief.md](docs/v2-brief.md) and [docs/v2-hooks.md](docs/v2-hooks.md).

## Credits and license

All art is original, drawn for this project. The only third-party asset is the [Pixelify Sans](https://fontsource.org/fonts/pixelify-sans) font (SIL Open Font License 1.1), installed from npm, so the page makes no requests to Google Fonts.

MIT. See [LICENSE](LICENSE).
