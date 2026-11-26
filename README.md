# World of Agents

A fantasy keep in 3D where you watch five AI agents work on your code.

You run Claude Code in your project. A team of five does the work: Lead/PM, Designer, Frontend dev, Backend dev and Reviewer. A web page shows the Forge Keep, a walled town on a floating island that you turn, pan and zoom around, and each agent walking to its desk, reading, writing and waiting for your approval. Where the browser can't draw 3D (no WebGL 2), the page shows the earlier pixel-art hall instead.

**[Try the demo](https://kremendev.github.io/world-of-agents/).** It is a scripted run in your browser. It needs no setup and calls no AI.

![The Forge Keep during a real run, seen whole from above. The Backend dev's name tag has a raised-hand marker, and an orange banner says it needs your approval in Claude Code. The rooms are listed on the left, the five agents and their states along the bottom, and the activity feed on the right lists each step.](docs/media/live-keep.png)

A minute later in the same run:

![Close in on the Library, where the Reviewer, a hooded skeleton, reads the Backend dev's server.js at its desk by a candle, the bookshelves behind it. The Reviewer's card is open: Skeleton, model Opus, reading, its task and its read-only tools, with Follow and Show in Activity.](docs/media/live-review.png)

## New in v4.0

**The Forge Keep in 3D.** The hall's page is now a walled town on a floating island, nine areas joined by paths, where
the five agents walk to where their work is: a goblin Lead/PM, an elf Designer, two orc devs and a reaper Reviewer.
Turn it, pan it and zoom in; zoomed in, a house opens so you can see inside. Resting agents wander the keep's idle
places and talk, the furnace glows with the work, and an agent that needs you raises a hand over its name tag.

**A HUD you work in.** The run and its tasks along the top, the rooms on the left, the agents along the bottom with a
card for each (Follow, Show in Activity), the activity feed and the task board in a drawer on the right, and a banner
with **Show me** when an agent needs your approval. It works while the keep loads, on a phone, by keyboard, and with
reduced motion.

Where the browser can't draw WebGL 2, the page shows the pixel-art hall of v3. The keep's 3D models are Dmitriy
Kremen's, all rights reserved, not under the MIT licence (see [Credits and license](#credits-and-license)). Nothing changes in the
plugin, so updating needs no new setup. The details are in the [release notes](docs/release-notes/v4.0.0.md).

## New in v3.10

**A team per project, one skill library.** Each project now has a team of its own: its own specialists and its own
notes. Skills live once in your library, which every project on this PC shares, and a project's skills are simply its
specialists' skills. A new project starts with no specialists: on the Team page you add the starter team (the eight you
know) in one click, copy another project's specialists, or add your own. A project's team lives in
`~/.world-of-agents/projects`, never in the project's folder, so a cloned repo can't bring a team of its own.

**Add skills three ways.** On the Team page's Library tab, **+ Add a skill** now offers four ways in: from your Claude
skills (the ones in `~/.claude/skills`, yours and the built-in ones), from a GitHub link to one SKILL.md, by pasting a
whole SKILL.md, or by writing one, as before. The first three end on one check screen: the whole text with its flags,
what its header held that the library leaves out (`allowed-tools` and `hooks` among them, with what they would have
done), the files it names that don't come along, its cost every time a specialist that has it starts, and any reason it
can't be added. What is saved is exactly the text you saw, with where it came from and its license. A skill from GitHub
can be checked for an update, which shows the differences line by line before you take them or keep what you have.

**Bigger skills, one cap per specialist.** A skill's text may be up to 20,000 characters (it was 8,000), and what it's
for one line of up to 1,024. A specialist's skills may come to 40,000 characters together; its page shows what they
cost every time it starts.

**After updating from v3.8**, every project you set up keeps its guild leads, but its specialists can't start until it
has a team of its own. Type `/world-of-agents:setup-team-write` in it, or press **Give this project its own team** in
the pane: it copies your shared team once, its notes waiting on the Notes tab for you to keep or drop one by one, and
gives you three commands to run once in Git Bash. The shared team stays as an unused backup. The details are in the
[release notes](docs/release-notes/v3.10.0.md).

## New in v3.8

**The project names the Lead.** Claude Code 2.1.325 warns that a plugin setting a session's main agent will stop
working, so the plugin no longer does: the project setup writes it into `.claude/settings.local.json` with the rest of
its settings. After updating, type `/world-of-agents:setup-project-write` in each project (it upgrades the settings and
keeps the rules you added), then start a new session. Until then a session there is plain Claude Code, and the guard
tells it to run the setup when it tries to edit a file or start an agent. `woa` needs nothing. The setup also drops a
rule Claude Code said matches nothing, `Write(~/.world-of-agents/**)`: the `Edit` rule beside it covers writes too. The
details are in the [release notes](docs/release-notes/v3.8.0.md).

## New in v3.7

v3.7.0 brings three steps at once: v3.5.0 and v3.6.0 were never released on their own. The details are in the
[release notes](docs/release-notes/v3.7.0.md).

**Notes for the guild leads, only with your approval.** The Designer, the Frontend dev, the Backend dev and the
Reviewer may end a report with one proposed note: a fact about the project worth remembering, such as where something
lives or how it is tested. The hall holds it in memory and the feed says one came; nothing is written until you approve
it on the Team page's new **Notes** tab, where you see each one whole, flagged for links, commands and wording that
reads like an instruction. An approved note reaches that guild lead at the start of its later runs; you can remove it
at any time. No agent writes notes itself, and the Lead keeps none: it keeps a project's state in `BACKLOG.md`.

**The Team page.** **Open Team page** in the pane (until now **Change skills**) opens the hall's Team page, its own view with the hall kept
running behind it: search, a Specialists tab and a Skills tab. Add specialists of your own (a name, a guild, one line of
what it does, Reads only, Edits files or Edits files and runs checks, up to 5 skills, always on Sonnet), change them,
delete them, or switch one off: its guild lead can't start it until you switch it on again, and the guard says why.
Take a skill off with Undo at hand. After an update the pane says when your team's specialist files come from an older
plugin, and `/world-of-agents:setup-team-write` refreshes only those. The page you work in has a new, plainer look; the
hall stays pixel art.

**The hall runs on its own.** Closing the session that started it, or reloading the plugin, no longer stops it, and it
stops itself after 30 minutes with no agent activity and no hall page open. From now on a newer plugin replaces an
older hall through the hall's own API. The hall keeps the last three sessions' activity in memory, so going back
to a session shows its run as it was. The devs and every specialist with a shell run `npm run check` themselves as their
last step, always, and never `cd` first. TypeScript 6, ESLint 10, `npm audit` clean.

## New in v3.4

**After updating, no agent starts until you type `/world-of-agents:setup-team`** (then `-write`), which creates the
team in `~/.world-of-agents/team` and prints the two commands that add it to a project. Guilds: the four guild leads
hand focused work to 8 specialists (React designer, Motion designer, React dev, Test writer, API dev, Database dev,
Security warden, QA tester), each with a few short skills, when you ask for one or when the work is more than a small
change; the guard reads who may start whom from the team, and the setup's new version keeps agents out of that folder.
Agent memory is off. **Change skills** (from v3.7 **Open Team page**)
in the pane opens the hall's Team panel through a one-time link, to add, change and delete skills and give them to
specialists, each change a line in the pane. The details are in the [release notes](docs/release-notes/v3.4.0.md).

## New in v3.3

Big-project tools. **Quality gates**, off until you turn them on per project (`/world-of-agents:setup-gates`), run the
project's `npm run check` each time a dev finishes and send the dev back to fix what fails, at most 3 times. They run
without asking you, which is why they are opt-in and the pane warns about them in Auto and Accept edits. The Lead keeps
a **`BACKLOG.md`** that carries on from one session to the next, and **plans a milestone once** in plan mode for one
approval. The devs end each task by running `npm run check` themselves and report whether it passed. The details are in the
[release notes](docs/release-notes/v3.3.0.md).

## New in v3.2

The token ledger. The team pane counts every turn of every agent, per session, and shows the total for this PC with
what those tokens would cost at API prices ("about": it is an estimate), and the hall's header shows the same total.
Only numbers are kept, in the plugin's own store. Every other Claude Code session on this PC counts too once you press
"Recount": a fixed script reads only the token counts in Claude Code's transcripts, and each session it covers takes the
transcript's exact count. The hall's badge names its plugin version, and the pane says so when another install's hall
holds the port. The details are in the [release notes](docs/release-notes/v3.2.0.md).

## New in v3.1

Better reviews. Click the Reviewer, or "Open review" on a review in the activity feed, and a **review board** opens
beside the hall: the verdict, the files checked, the findings with file and line, what the Reviewer says it ran and,
on its own line, the Read, Grep and Glob calls the hall saw it make. The Reviewer now runs on Opus and ends its report
with fixed headings, and the guard denies an Agent call that tries to choose a model or to run an agent remotely. A
**"For you" strip** keeps
messages to you, approval waits and failures at the top of the feed until you click them, with an **"Only for me"**
filter, and **Copy** copies a long message or a review as the page shows it, hidden characters left out. The details
are in the [release notes](docs/release-notes/v3.1.0.md).

## New in v3

v3 brings the team into the Claude desktop app. Installed as a plugin in one project, it adds:

- **The guard.** A hook that can only deny: an agent start outside the team's table, Claude Code's own agents included, and a shell command that names a `.env` or `.envrc` file.
- **The setup skills.** `/world-of-agents:setup-project` shows, and `/world-of-agents:setup-project-write` writes, the Lead/PM as the main agent (from v3.8), Manual mode, subagent depth 2 and a safe-command list for that project. A project set up by an earlier version is upgraded.
- **The team pane.** Beside the conversation: what each agent is doing, who waits for your approval, a warning when nothing asks before acting or when the plugin is on for every project, your context and plan limits, three preset prompts and the link to the hall.
- **A hall that starts itself.** The plugin carries a prebuilt hall and starts it at your first message: no `npm run hall`, no clone and no `npm install`.
- **A voice on Windows.** "Backend dev needs your approval." and "The team is done." out loud, muted with one click.

The guard now denies Claude Code's built-in agents, which v2 never checked. That change in behaviour is why this is a major version. The details are in the [release notes](docs/release-notes/v3.0.0.md), and each part has its own section under [Install as a plugin](#install-as-a-plugin).

## Requirements

- **Claude Code 2.1.312 or later**, the CLI or the Claude desktop app's Code tab, logged in with your Claude plan. Older versions refuse the team pane or weren't tested with it. Works on Pro. Max recommended for guild runs, because they use the plan faster. [Install it](https://code.claude.com/docs/en/quickstart) if you don't have it. Runs count against your plan's limits, and claude.ai shares those limits.
- **Requires Node.js 20.19 or later on PATH.** Tested on 24.22.0. The plugin's hooks run on it, and the guard fails closed: without Node, every agent start and every Bash or PowerShell command in a project with the plugin is blocked with `hook error: [node ${CLAUDE_PLUGIN_ROOT}/hooks/guard.mjs]: failed; blocking because onFailure is "block" Error occurred while executing hook command: Executable not found in $PATH: "node"`. Install Node, or turn the plugin off for that project: `claude plugin disable world-of-agents@world-of-agents --scope local` in the project folder.
- **A browser that draws WebGL 2** for the Forge Keep: any recent Edge, Chrome, Firefox or Safari. Without it the page shows the pixel-art hall instead.
- **On Windows:** Git Bash (it comes with Git for Windows), for `woa`, which is a bash script, and for the setup skills: Claude Code runs their fixed command through Git Bash, and nobody has tried them without it. The voice uses Windows' own speech synthesizer, so it speaks on Windows only. Claude Code has no sandbox on native Windows (see Known limits).

Tested on Windows 11. Claude Code 2.1.312 and 2.1.319 load the plugin and pass the pane's own tests (`claude plugin validate` and `claude plugin test`), and the desktop app was checked with its engine at 2.1.321. v3.0.0 also ran on 2.1.299, but from v3.0.1 the pane reads one setting with a call nobody has tried on versions before 2.1.312; 2.1.295 and 2.1.296 refuse the pane.

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

`woa` is for the terminal. To use the team in the Claude desktop app, or in any Claude Code session, install the plugin. Up to v2.2.0 you still need the setup above and `npm run hall` running, because the plugin only reports to the hall. From v3.0.0 the plugin carries a prebuilt hall and starts it itself, so you need neither.

**1. Add the marketplace.** You do this once on each PC, and it turns nothing on. In a Claude Code session:

```text
/plugin marketplace add kremendev/world-of-agents#v4.0.0
```

Or in a terminal:

```bash
claude plugin marketplace add kremendev/world-of-agents#v4.0.0
```

**2. Install it for one project only, from a terminal.** In the project folder:

```bash
claude plugin install world-of-agents@world-of-agents --scope local
```

Don't install it through the desktop app's Plugins screen. On 11 Nov 2026 (app 5.1231) that screen asked for no scope and installed the plugin for every project, twice. Then check:

```bash
claude plugin list
```

No `world-of-agents` entry may say `Scope: user`. The list shows every project's install, each with its status in the folder you run it from. If one says `Scope: user`, run `claude plugin uninstall world-of-agents@world-of-agents --scope user`, then install it again in each project.

**Never install it at user scope.** Its hooks would run in every session of every project: each would report to the hall, and the guard would let no session but the Lead's start an agent or edit a file, so everywhere else you'd get a Claude Code that can't edit. (Up to v3.7 it also made every session the Lead.) Project scope is only for a team: it writes to `.claude/settings.json`, which you commit, and turns the plugin on for everyone who clones the repo.

**3. Set up the project, and check the permission mode says Manual.** From v3.8.0 the setup below is also what makes the Lead/PM the main agent: until it is written, a session in the project is plain Claude Code, and the guard lets it start no agent and edit no file. The selector is under the prompt box. `woa` always starts in Manual, but an installed plugin can't choose a mode. In Auto, nothing asks for your approval, so the hall never shows "needs you".

From v3.0.0 the plugin does this for you, once per project, in two steps you type yourself. `/world-of-agents:setup-project` shows what it would write into the project's `.claude/settings.local.json`: the Lead/PM as the main agent (from v3.8.0), Manual mode, subagent depth 2 and a safe-command list, plus a `.gitignore` line for that file. It writes nothing. `/world-of-agents:setup-project-write` then writes exactly that; typing it is your yes. Claude Code runs a fixed script from the plugin for both, and the model can't start either one. Run again, it says "Already set up". A file set up by an earlier version of the plugin is upgraded: the dry run names the version and what it changes, and every other setting in the file stays as it is. From v3.0.1, rules you added yourself, such as the one an "Always allow" click adds, stay too: the dry run lists them, and the upgrade keeps them after the template's own. The same goes for a first setup in a project that already has such rules, as long as `permissions` holds nothing but its `allow`, `deny` and `ask` lists. If one of the template's rules is missing or changed, or the file holds anything else, nothing changes and you're told which settings differ (names only, never values). The settings apply from the next new session. With `woa` it works now. In the desktop app, check the selector in the first new session after the setup. In our tests the app used this file's Manual only in a git repository, and only in sessions started after it had checked the folder again (see the mode in the desktop app, under 4); in a folder without git it started in your own default mode instead. A mode you pick in the selector also sticks to that folder and wins over the file in later sessions. If it doesn't say Manual, pick Manual once, and the app remembers it for that folder. The pane warns when it says Auto.

**4. Trust the project.** The project's `.claude` settings are where World of Agents lives in it: the plugin switched on, the Lead/PM as the main agent (from v3.8.0) and the setup's denies. In VS Code, Claude Code (2.1.325) asks before the first session in a folder you haven't trusted, and a terminal session asks too ("Yes, I trust this folder"). The desktop app asks the first time you open the folder in its Code tab. Say yes for a project you set up. In VS Code, declining starts the session without the project's settings: no World of Agents, no Lead/PM and none of the setup's denies, only your own user settings. In the desktop app (our test, 17 Nov, v3.10.0), yes records the same trust Claude Code reads, and the first new session after the setup started as the Lead/PM, with the pane.

**The mode in the desktop app.** The app reads the project's settings when it checks the folder, as you open it in the Code tab, and new sessions keep what it read then. So sessions right after the setup can still start in your own default mode: in our test (17 Nov, a git repository, Auto in the user settings) both started in Auto, and the app's log named your user settings as the source (`source=settings_default_mode`), not a pick for that folder. In another folder the project's Manual applied in the sessions started after the app had checked the folder again (`source=repo_settings_default_mode`). So after the setup, check the selector: if it doesn't say Manual, pick Manual once, and the app keeps that pick for the folder (`source=folder_pick`). The log is `%LOCALAPPDATA%\Claude\logs\main.log`.

**The team pane.** From v3.0.0 the plugin also draws a pane beside the conversation: the five agents with their state and task, who is waiting for your approval, a warning in the modes that don't ask before acting (Auto, Bypass permissions) or before edits (Accept edits), how full the context is and how much of your plan's limits is used, three preset prompts ("Plan the next milestone", "Run the quality check", "Review what changed") and an "Open hall" link. A preset puts its prompt in the prompt box, after anything you've already typed, and you send it with Enter: the pane never sends a prompt itself. It appears after you send the first message, because that is when the session, and with it the pane, starts. If you close the pane, `/world-of-agents:team` opens it again. Only you can run that command, and it costs no plan: the pane answers it, so it never reaches the model. From v3.0.1 it also warns "World of Agents is on for every project." when your user settings turn the plugin on, and gives the command that turns it off there: `claude plugin disable world-of-agents@world-of-agents --scope user`. Projects where you installed it with `--scope local` keep it.

**The hall starts itself.** At your first message the pane checks that Node.js 20.19 or later is on PATH (and warns if not), then starts the hall the plugin carries, unless one is already running. From v3.7.0 the hall runs on its own, with no window: closing the session that started it, or reloading the plugin, leaves it running, and it stops itself after 30 minutes with no agent activity and no hall page open. It checks again at each of the Lead's turns and starts it again if it's gone. "Open hall" shows only once the hall has proved it holds the token, the same handshake the hook script uses, so the link never points at another program. If another program holds port 4319, the pane says "Port 4319 is used by another program." and starts nothing.

**The voice (Windows).** The pane says two things out loud: "Backend dev needs your approval." when an agent waits for you, and, once the team has finished and the Lead has answered, "The team is done." with the first sentence of that answer, or "The team stopped. Backend dev failed." It uses Windows' own speech synthesizer through a fixed script, `plugin/voice/speak.ps1`, started as `powershell.exe -NoProfile -NonInteractive -ExecutionPolicy RemoteSigned -File …`. The text goes in on stdin, never into the command. `RemoteSigned` applies to that one process and changes nothing on your PC: it runs the plugin's own local script and refuses one marked as downloaded from the internet. If a Group Policy sets the execution policy, it wins, and the voice stays silent. **Mute voice** in the pane turns it off, and it stays off in later sessions.

The safe-command list lets `npm test` and `npm run check` run without asking, so they run whatever code the project's scripts, tests, configs and setup files hold. Read every edit approval in Manual mode as carefully as a command. If the path to the plugin's folder holds an apostrophe, the two skills can't run: Claude Code stops with "Shell command failed … unexpected EOF while looking for matching" and nothing happens.

To turn it off, or any one part of it, see [Turn it off](#turn-it-off).

You can still run `woa` in a project that has the plugin. For that session, `woa`'s copy replaces the installed one, so nothing loads twice.

## What the hall shows

- The Forge Keep fills the window, with the page's panels over it: the run and its tasks at the top, the rooms on the left (a button flies the camera there; Cutaway opens every house), the agents at the bottom, and Activity and the task board in a drawer on the right. A click on an agent, in the world or in the list, opens its card; Follow keeps it in view.
- The Lead/PM plans in the War hall, and each task it hands out becomes a card on the task board.
- Each dev fetches its scroll from the War hall's board, then goes to its desk.
- Agents read and write at their desks, their screens lit while they work.
- The furnace in the Forge burns brighter the more agents are working.
- When Claude Code asks for your approval, a raised hand shows over the agent and an orange banner names it; "Show me" flies the camera to it and opens its card. A failed agent shows a red "!".
- A finished agent's card moves to Done, and it walks back to the keep's idle places: the Tavern, the Training yard, the Courtyard and the Garden, where the team rests, wanders and trades small talk. A name tag floats over each agent, and a speech bubble shows the first sentence of its last message. A bubble never rides along with a walking agent: it waits until the agent stops.
- The Reviewer reads the work, and the Lead's report shows as a message to you. "Show in Activity" on the Reviewer's card (in the pixel-art hall, a click on the Reviewer) opens the review
  board: each review as a card, built from the five headings the Reviewer ends its report with, and the calls the hall
  saw it make on a line of their own. A report that doesn't follow the headings shows as written.
- The activity feed lists every step with its time. "Show in Activity" on an agent's card shows only that agent. A long message shows cut: "Show all" opens the whole text under it, where you can select and copy it, and a click on the row works too. Messages to you, approval waits and failures stand out with a border and a label ("To you", "Needs you", "Failed"), decided by the kind of event, never by what the text says.
- At the top of the feed, the "For you" strip holds what is for you and not yet clicked: messages to you, approval waits and failures, three at most. "Only for me" shows only those rows. Copy, on an opened row and on each review card, copies the text as the page shows it: a link as its text, invisible characters left out.
- In Live, the top bar shows the token ledger's total for this PC: "This PC: 3.6M tokens · about $17.20 at API prices", the same total the team pane shows. Its version chip names the plugin version of the hall you are looking at: "v4.0.0".

## What it never does

- **No API key.** Claude Code runs on your own login. There is no key anywhere in this project.
- **It never reads your login.** That is also why it can't check which plan you have.
- **It never starts a run.** No endpoint starts or runs anything.
- **It never sends anything as you.** Neither the page nor the pane sends a prompt: a preset only puts its text in your prompt box, and you press Enter.
- **It never approves anything.** The guard can only deny, and the pane never answers a tool call, a permission check or an agent start, so your approval prompt always decides.
- **It never reads your `.env` files.** No part of the plugin opens one. The guard denies an agent's shell command that names a `.env` or `.envrc` file, and the setup adds denies that cover Claude Code's file tools and the file commands it recognises in shell commands, like `cat`, `head` and `tail`. They don't cover `grep -r` over a folder, or a script that opens files itself. Both are best effort (see the guard below).
- **The page only watches.** Nothing you do in the page reaches an agent.
- **Events stay in memory on 127.0.0.1.** The hall listens on that address only, keeps the last 500 events and forgets them when it stops. Events never go to any other computer.
- **One network call, only when you press.** Adding a skill from GitHub, or checking one for an update, is the hall's only use of the network (from v3.10): one HTTPS GET to `raw.githubusercontent.com` for that one SKILL.md, built from the parts of the link you gave, with no redirect followed, no cookie, no token and nothing of yours in it. The page and the pane never reach the internet. What comes back is shown whole before it is saved, and saved exactly as shown.
- **It reads your Claude skills only when you ask.** "From your Claude skills" lists files named `SKILL.md` under `~/.claude/skills`, never through a link or a junction, and opens only the one you pick. Other files there are never opened. The desktop app's skill list is read for one thing: whether a skill is yours or built-in.

The hook script sends the hall a short list of fields: event name, ids, agent type, tool name, task titles, the start of your prompt (120 characters) and the agents' last messages (up to 20,000 characters each). Those messages are the agents' own words, so they can quote code or a command an agent wrote. It never sends a tool's input or result, file contents or transcripts. It replaces your home folder and anything shaped like a key before sending. It drops any reply, so the hall can't steer Claude Code.

`woa` adds nothing to your project. Installing the plugin adds one line to the project's `.claude/settings.local.json`, which git ignores. The setup skills, only when you type them, add the settings above to that file and a line for it to `.gitignore`. The hall writes one file, `~/.world-of-agents/token`: a random token that lets your hooks post events. It is not your Claude login. The hall deletes it when it stops, but a PC shutdown can leave it behind. That is harmless: the hook script posts nothing until the hall proves it holds the token. An installed plugin has this check from v2.2.0.

One hook answers Claude Code: the guard, `plugin/hooks/guard.mjs`. It runs before every agent start and every Bash or PowerShell command, and from v3.3 every Edit and Write, and it can only deny, never allow, so your permission prompt still decides. The Lead may write only `BACKLOG.md` at the project root, and only while that is a plain file with one name: a link, a junction, a folder or a hard link there could carry the write into another file, such as your settings. The Designer's and the devs' edits go to your prompt; anyone else's are denied. It denies an agent start outside the team's table (the Lead starts the four others, each guild lead its own guild's specialists, and specialists start nobody; Claude Code's own agents are denied, because some run on Haiku), and a shell command that names a `.env` or `.envrc` file. From v3.1 it also denies an agent start that chooses a model (the agent's own file decides) or runs the agent anywhere but on this PC (`isolation` other than none or `"worktree"`). From v3.4 it denies any agent's Edit or Write into `~/.world-of-agents`, by the path as written and by where it really lands, and into an agent memory folder (`.claude/agent-memory-local`, `.claude/agent-memory` or `~/.claude/agent-memory`), because agent memory is off. From v3.6 it denies the start of a specialist you switched off on the Team page, saying so; its file stays as it is, so switching it on counts at once. It also lets an agent run Bash or PowerShell only when its role has a shell: the Frontend dev, the Backend dev and specialists that edit files and run checks. The Designer, the Reviewer, every other specialist and any agent it doesn't know are denied, so an agent file that somehow loses its tool list still gets no shell. Your own `!` commands never reach the guard. From v3.4 the guard is also the only limit on whom the Lead starts: Claude Code applied the Lead's own list to the whole session, which hid the specialists from the guild leads, so the Lead has none. The `.env` rule is best effort: it stops accidents and lazy prompt injection, not someone set on getting around it. If the guard can't read a call, it denies it, and a guard that crashes or hangs blocks the call too. An installed plugin has it from v3.0.0, and `woa` has it too.

The team pane (`plugin/hooks/mod/`) runs inside Claude Code and only watches. It never answers a tool call, a permission check or an agent start, and it never sends a prompt: a preset button only puts its fixed text in your prompt box, after what you've typed. It never reads your draft. Of the messages you send, it only checks whether one carries an agent's result, and it keeps none of their text. Agent text shows as plain text, never as Markdown or a link; its links go to the hall on localhost: the plain one, and for one minute after you press "Open Team page", one that carries a one-time key after a `#`, which the key's own page removes at once. It uses no network and no files. Of your settings it reads one key, `enabledPlugins` in your user settings, to warn when the plugin is on for every project, and nothing else of them. It starts only fixed programs, each from the plugin's own folder, with no shell and no argument from an agent, a file or the page: `node --version`, `node hooks/hall-check.mjs` (what holds port 4319?), `node hall/server.mjs` (the hall), `node hooks/ledger-post.mjs` (the token total, to the hall), `node hooks/gate.mjs --status` (are quality gates on in this project? its exit code only), `node hooks/ledger-past.mjs` (every session's token counts, only when you press "Recount"), `node hooks/hall-key.mjs` (the one-time key, on its input, when you press "Open Team page"), `node hooks/team-log.mjs` (the team's changes, while the hall runs), `node hooks/team-check.mjs` (are your team's specialist files from an older plugin? its exit code only, at session start) and the voice script. Nothing they print is shown or kept, except the version digits `node --version` prints, the hall's version `hall-check.mjs` prints, the session ids and whole numbers `ledger-past.mjs` prints and the times, kinds and names `team-log.mjs` prints, each checked to the character and dropped whole when it isn't exactly that. Two installs on one PC share the hall's token file, so the pane links to the hall only when it states the pane's own version; another install's hall gets a line naming its version, no link and no total, and the pane never stops it. `npm run check` lists every event and API call it uses and fails if that list changes, so any change to it shows in review.

The hook script has one debug switch. `WOA_CAPTURE=1` saves raw hook payloads, which can hold file contents and commands, to `~/.world-of-agents/capture/`. `woa` always turns it off, so normal use never saves them.

**Never run a catalog installer in a project set up for World of Agents.** The claude-code-templates installer (`npx claude-code-templates …`) and others like it write agents, commands, hooks and settings into your project. Those hooks and settings can skip the permission prompts and undercut the guard, and the team can't use what they add anyway: the guard starts only the team's own agents. To give a specialist a skill, add it on the Team page instead.

## Turn it off

- **In one project:** run `claude plugin disable world-of-agents@world-of-agents --scope local` in the project folder. In a project where you installed it with `--scope local`, the desktop app's switch under Customize, then Plugins, does the same: on 11 Nov 2026 (app 5.1231.2) it wrote that project's `.claude/settings.local.json` and left your user settings alone. The agents, the guard, the pane, the hall and the voice all go with it. `claude plugin enable world-of-agents@world-of-agents --scope local` turns it back on.
- **The voice only:** press **Mute voice** in the pane. It stays muted in later sessions.
- **The pane only:** close it. `/world-of-agents:team` opens it again.
- **The hall:** it stops itself after 30 minutes with no agent activity and no hall page open; closing sessions doesn't stop it (from v3.7.0). A newer version of the plugin stops an older one (3.7.0 or later) before it starts its own. To stop it at once, run `Get-NetTCPConnection -LocalPort 4319 -State Listen | ForEach-Object { Stop-Process -Id $_.OwningProcess }` in PowerShell. A hall you started with `npm run hall` stops with Ctrl+C.
- **The setup's settings:** disabling or removing the plugin leaves them in the project's `.claude/settings.local.json`. Delete `permissions`, `env.CLAUDE_CODE_MAX_SUBAGENT_SPAWN_DEPTH` and `agent` there to remove them. Left there, `agent` names an agent that isn't loaded any more, and Claude Code starts the session as usual.
- **For good:** run this in the project folder:

```bash
claude plugin uninstall world-of-agents@world-of-agents --scope local
```

## Known limits

- **Approval flags follow a few rules.** `PermissionRequest` names the agent asking, right away.
  - No hook says when you answered, so the flag clears at that agent's next event.
  - If a session sends no `PermissionRequest` (the hall started mid-wait, or an older Claude Code), the hall guesses after about 6 s: the running subagent that last used Edit, Write or Bash. With two writing at once it can name the wrong one.
  - Once a `PermissionRequest` has arrived in a session, the hall never guesses. If a later one gets lost, that wait shows no flag.
- **The pane's approval list.** An approval stays listed until that call finishes, so a long command stays there while it runs after you approve it. The mode warning can come one prompt late: Claude Code says nothing when you switch modes, so the pane learns the mode from the next prompt or agent start.
- **The team editor's link is briefly visible in the browser's command line** when the desktop app opens it, and stays
  in a browser process started for it until that closes. It works once and for one minute. Anything that can read the
  hall's token (`~/.world-of-agents/token`) can also make a key, as it could post hooks; the guard and the setup keep
  agents away from that folder.
- **No team, no specialists.** From v3.9 the guard reads who may start whom from the team of the session's project,
  `~/.world-of-agents/projects/<key>/team/team.json`, the project being the folder Claude Code names for the session. A
  project with no team of its own keeps its guild leads, and their specialist starts are denied with the step that gives
  it one. On a PC with no World of Agents team at all, no agent starts, and the guard says to run
  `/world-of-agents:setup-team`.
- **One marketplace per project.** Claude Code loads a project's team as a plugin from that project's own folder
  marketplace, so `claude plugin list` shows one `woa-<project>` per project you gave a team. Removing one is
  `claude plugin marketplace remove woa-<project>`; its folder in `~/.world-of-agents/projects` stays until you delete it.
- **A note is text an agent proposed.** You approve each one, and it then reaches its guild lead under a header that
  says it is context, not instructions; the guild lead's limits stay its tools and the guard. A hijacked agent can still
  propose a planted instruction, which is why the Notes tab flags wording that reads like one: keep plain facts only.
- **Team changes count from the next reload.** Claude Code reads the team's files when a session starts or reloads its
  plugins, so a new or changed specialist, or a changed skill, counts from the next `/reload-plugins` or a new session.
  Switching a specialist off or on counts at once: the guard reads it on every agent start, and the specialist's file
  stays as it is.
- **Quality gates run project code without asking.** With gates on, `npm run check` runs after each dev's task, so an
  edit to `package.json`, a test file or a config changes what runs unasked. Keep them off where you don't read every
  edit you approve. A check that takes longer than 9 minutes counts as a failure.
- **The token ledger is an estimate.** It counts only sessions where the plugin runs, until you press "Recount", which
  counts every session in Claude Code's transcripts on this PC; sessions after that are again only the plugin's, as the
  pane says. Live counts price the Lead's cache writes at the 1-hour rate and subagents' at the 5-minute rate, which is
  what Claude Code did on every response we measured, but the counts don't say; Recount uses each transcript's own
  split. Fast mode is priced at the standard price. A session where a turn may still run (anything in the last 10 minutes,
  or a tool call waiting) keeps its live count until a later Recount. Two sessions ending turns in the same moment can
  lose one turn's count. claude.ai/settings/usage is the full picture of your plan.
- **No sandbox on native Windows.** Commands run with your user's rights, so your approval is the guard. Read each command before you approve it. Claude Code's sandbox needs macOS, Linux or WSL2.
- **One session at a time.** The hall follows one session. Starting, clearing or resuming a session takes it over, and so does a prompt you type in another open session: the hall follows the session you type into. From v3.5.0 it keeps the last three sessions' activity in memory (never on disk), up to 500 events each, so going back to one shows its run as it was, with what its agents did meanwhile.
- **The desktop app's mode can beat Manual.** In our tests the app used the setup's Manual only in a git repository, and only once it had checked the folder again after the setup; in a folder without git it used your own default mode. A mode you pick in the selector also sticks to that folder and wins over the file. Check the selector in the first new session, and if it doesn't say Manual, pick Manual once: the app remembers it for that folder. The pane warns in Auto, Bypass permissions and Accept edits.
- **The pane's hall runs on its own (from v3.7.0).** It outlives the session that started it and any reload, and stops itself after 30 minutes with no agent activity and no hall page open. The desktop app keeps every process it starts in its own job, so quitting the app may stop the hall too. A newer plugin stops an older hall (3.7.0 or later) through the hall's own API, never the other way round; a hall from before 3.7.0 still lives with the session that started it, and the pane names its version and links to nothing until you close your other sessions. A newer hall than your plugin is never stopped from here: the pane says to update. A stopped or restarted hall remembers nothing from before, and the page says "Hall restarted" until your next prompt.
- **Port 4319 is fixed.** If another program holds it, the pane starts no hall.
- **Apostrophes in the plugin's path.** The setup skills put the plugin's path in single quotes. One apostrophe in it makes them fail safely, as above. Two balance the quotes again, so the shell reads the text between them unquoted: it splits the path there, and a `$(...)` in that text would run. Only the names of your own folders reach that path, never a project's or the conversation's, so keep apostrophes out of the folders above the plugin, your user folder included.
- **Where an organization manages Claude Code.** If its managed settings turn on `allowManagedHooksOnly`, a plugin you install yourself loads no hooks. The agents and the Lead still load, but with no guard, no team pane and no reports to the hall, so nothing denies what the guard would. Claude Code's own mods API reference (2.1.318) says so; it hasn't been tested. The validators of 2.1.299 to 2.1.301 also warned that the pane's `classic.*` hooks don't run where an organization manages Claude Code, which would leave the pane without its approval list, the approval voice and the mode warning. Later validators no longer print that warning.
- **The voice is Windows only.** Elsewhere the pane stays quiet.
- **A skill comes alone.** Only its SKILL.md comes into the library: scripts, references and other files never do, and the check screen names the ones its text mentions. A GitHub branch whose name holds a slash can't be told from the folder, so link that skill by its commit instead.
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

- **Plugin** (`plugin/`): the five agents and the hooks. The Lead and the Reviewer run on Opus, the other three on Sonnet, and an Agent call that tries to choose a model is denied. Each agent gets only the tools its job needs, and the Reviewer only reads. The repo is its own marketplace (`.claude-plugin/marketplace.json`).
- **Hook script** (`plugin/hooks/send.mjs`): uses Node built-ins only, always exits 0 and prints nothing.
- **Team pane** (`plugin/hooks/mod/`): a Claude Code mod in TypeScript, typed against the engine's own types for one Claude Code version (`tools/claude-code-types/`, refreshed only with `npm run types:update`) and tested with Claude Code's own kit.
- **Hall server** (`server/`): plain `node:http`, run with `tsx`. It also serves the page: only the files the build lists, never a path taken from the URL.
- **Prebuilt hall** (`plugin/hall/`): the page and one bundled server file that imports only Node's built-ins, so an install needs no `npm install`. `npm run build:plugin-hall` writes it and git tracks it. `npm run check:hall` builds it again and fails if anything differs; every release runs it first (`npm run release:check`).
- **Page** (`src/`): React and TypeScript. The Forge Keep is drawn with three.js (`src/world/`), and the page's panels over it are React (`src/hud/`); the earlier hall, drawn on Canvas 2D, takes over where WebGL 2 isn't there. Agent text only ever shows as plain text, and a Content-Security-Policy stops the page loading anything but its own files. The demo plays the same events from a script.
- **Launcher** (`bin/woa`): starts Claude Code with the plugin, the Lead and approvals on.

To work on the page, run `npm run dev` (http://localhost:5173). Run `npm run check` before you commit. It needs Claude Code on PATH, because it runs the pane's tests and reads the pane with `claude plugin test` and `claude plugin validate`. The plan and the real hook payloads are in [docs/v2-brief.md](docs/v2-brief.md) and [docs/v2-hooks.md](docs/v2-hooks.md).

## Credits and license

All art is original, made for this project: the pixel-art hall drawn by hand, the keep's models built by our own Blender scripts, and the five characters made in Tripo from concept images we made ourselves. The only third-party assets are three fonts, all under the SIL Open Font License 1.1 and self-hosted, installed from npm, so the page makes no requests to Google Fonts: [Pixelify Sans](https://fontsource.org/fonts/pixelify-sans), from v3.6 [Inter](https://fontsource.org/fonts/inter) on the Team page and from v4.0 everywhere you work, and from v4.0 [M PLUS Rounded 1c](https://fontsource.org/fonts/m-plus-rounded-1c) on the Forge Keep's signs and name tags (its Latin letters, one weight).

The 3D models (`src/world/models/`, from v4.0.0) are Dmitriy Kremen's, all rights reserved: they are **not** under the MIT licence, which covers the code only. [docs/ASSETS.md](docs/ASSETS.md) lists them and says what that means. All rights reserved governs use, not access: GitHub's terms let anyone view and fork a public repository on GitHub, and the hosted demo hands the files to every visitor's browser.

The code is MIT. See [LICENSE](LICENSE).
