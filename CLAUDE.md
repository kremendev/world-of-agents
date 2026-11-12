# World of Agents

A pixel-art web app where five AI agents work in a fantasy guild hall, the Forge Hall. You give a task
("Create a dashboard"); the Lead/PM splits it, the agents walk to their desks and visibly work, the Reviewer
checks the result. v1 plays a scripted run with no AI calls; v2 watches real Claude Code runs: the plugin's
hooks report what each agent does to a hall server on 127.0.0.1, which sends the page the same events.
v3 (started, `docs/v3-brief.md` is the source of truth) moves it into the Claude desktop app: a mod with a team pane,
guilds of specialists and a token ledger. Scouts are on hold: the news digest moved to Flint Assistant, Dima's
separate local assistant (10 Nov). Single user, runs locally, portfolio project.

## Commands

```bash
npm run dev      # http://localhost:5173 (localhost only, never --host)
npm run check    # typecheck + lint + prettier + Vitest + the mod's kit tests + its surface: run before saying anything is done
npm test         # vitest run
npm run test:mod # the mod's kit tests: claude plugin test plugin (check needs Claude Code on PATH for this and mod:surface)
npm run types:update  # copies the installed Claude Code's mods API types into tools/claude-code-types (on purpose only)
npm run build:plugin-hall  # the prebuilt hall in plugin/hall/ (tracked): run after any change to server/ or the page
npm run dev:refresh   # mirrors plugin/ into the desktop dev install, ~/Downloads/woa-dev/plugin
npm run check:hall    # builds it again in a temp folder and fails on any difference (not in check: a build takes seconds)
npm run release:check # check:hall, then check: before every release tag
npm run format   # prettier --write .
npm run hall     # builds the page, then serves it and the API on http://127.0.0.1:4319
bin/woa          # Claude Code in the current folder, with the plugin and the Lead. bin/woa --version starts no session
```

The owner works on Windows in Git Bash. Give commands that work there.

## Stack and why

- React 19 + TypeScript (strict, `noUncheckedIndexedAccess`) + Vite 7, Vitest 5 + Testing Library, Zod 4.
- Zod is imported as `import * as z from 'zod'` (Zod's own advice), never `import { z }`: with the namespace import
  esbuild drops Zod's 64 locales from the bundled hall (779 KB to 210 KB, 2d).
- The office is drawn on **Canvas 2D**. Switch to PixiJS only if sprite handling gets painful.
- TypeScript is pinned to 5.9 on purpose: typescript-eslint 8 does not accept TS 6. Upgrade both together.
- ESLint 9 and Vite 7 are also one major behind on purpose. Upgrade as a separate task. Vitest is on 5.
- npm blocks dependency install scripts. `esbuild` is approved in `package.json` `allowScripts`. If a new
  package asks, review it and approve by name; never `npm install-scripts approve --all`.

## Layout

```
src/events/       Zod schema for OfficeEvent + parseEvent(): the gate every event passes
src/version.ts    the plugin's version from plugin.json (3.2d): the hall states it, the page's badge shows it
src/state/        office.ts: OfficeState, INITIAL_OFFICE, the pure officeReducer(), workingCount()
src/script/       demoRun.ts (the 9-step run as timed events), player.ts (play/pause/restart on a timer)
src/pixel/        sprite format, crisp scaling (scale.ts), baking and drawing (draw.ts)
src/assets/       pixel art as text: characters.ts, workstation.ts, hall.ts (generated from the design)
src/office/       roster.ts (agents: race, look, v2 model and tools), stations.ts (workstation builder),
                  tasks.ts (tile and status chip colours), states.ts (state bubble and chip colours, words)
src/office/hall/  the Forge Hall: layout.ts, placements.ts (generated), surfaces.ts, draw.ts,
                  HallView.tsx (canvas + animation loop), HallLabels.tsx (HTML text and bubbles over it)
                  walk.ts: spots, doors, route(), positionAt(), from the v1 design. Ask before moving a spot.
                  smalltalk.ts: rest-room lines (our flavour text, not agent output)
                  destination.ts: destinationFor(agent, office), walkers.ts: walk queue, talk.ts: bubbles
                  useStage.ts: the room the hall has, settle.ts: which labels stay when they would overlap
src/page/         the page around the hall: TaskBar (+ task.ts: cleanTask, 500-char cap; Demo only, top of the
                  right-hand column), TaskBoard,
                  AgentPanel (details of the selected agent), ActivityFeed + feed.ts (the team's activity, to the
                  right of the hall: skips state events that change nothing; a message over 200 characters shows cut
                  with a "Show all" toggle, aria-expanded and aria-controls, that opens the full text in a plain element
                  after it, selectable; a row click toggles too, but not in that text or when it ends a selection;
                  flagOf(): To you, Needs you, Failed, and an approval row says "Needs you" once),
                  AgentText (agent text: `code` and **bold** as elements, the rest plain text), shorten.ts (the cut
                  bubbles and rows share: links as their text first, never a mark left open), review.ts (v3.1: the
                  Reviewer's report format, parseReview() and reviewsOf(); a review is known by its sender, never its text),
                  ReviewBoard (v3.1: a non-modal dialog over the right-hand column, never the hall; App opens it from the
                  Reviewer's button and a review row's "Open review", closes it on Esc, Close or another agent, puts the
                  focus back after the render, and makes what it covers inert), readMarks.ts (v3.1: the "For you"
                  strip's read marks: flag|agent|at keys only, in localStorage per hall start, newest 500, every access in
                  a try/catch; memory only in the demo), ledgerText.ts (v3.2: the header's "This PC" line, Live only), copy.ts and CopyButton (v3.1: Copy on an opened row and on each
                  review card: links as their text, every Cc and Cf character but tab and line breaks left out, and said)
src/live/         Live mode: hall.ts (health check, with the version the hall states, EventSource with its own reconnect, parseEvent() on every
                  message, the hall's start id after each replay), useLiveHall.ts (status, office, the 5 s re-check in
                  Demo; another start id rebuilds from nothing and says "Hall restarted" until a run starts),
                  announce.ts (what the aria-live region says, cut at the last full sentence)
server/           the v2 hall server, run with tsx: hall.ts (node:http: Host, Origin and token checks, POST
                  /api/handshake, POST /api/hook, POST /api/ledger (v3.2: the token ledger's total from ledger-post.mjs, kept in memory only and sent as a
                  named `ledger` SSE event after each replay, never in it), SSE /api/events with a 500-event replay ended by its start id,
                  /api/health, serves only the page files it is given, by exact match; the handshake answer and /api/health
                  state the plugin version, from src/version.ts, 3.2d), page.ts (PAGE_TYPES, listPage()
                  for dist/, readManifest() for the plugin's hall), serve.ts (binds 4319, writes the token, signals),
                  plugin-hall.ts (the plugin's hall: its page and manifest beside its own file), hook-input.ts
                  (Zod schema of the fields send.mjs forwards), map.ts (pure mapHook(): one hook to
                  OfficeEvents, following the run table in docs/v2-brief.md), token.ts, main.ts (npm run hall).
                  csp.ts: the Content-Security-Policy, for the hall's header and the Pages build's meta tag.
                  quiet-logger.ts: hides the dev proxy's "no hall" error. fixtures/: the recorded runs' hooks, redacted
.claude-plugin/   marketplace.json: the repo is its own marketplace, listing the plugin from ./plugin
plugin/           the Claude Code plugin: .claude-plugin/plugin.json, settings.json (the Lead as main agent), agents/
                  (the five agents' prompts and tools), hooks/hooks.json (an async send.mjs hook per event, and the guard),
                  hooks/send.mjs (allowlists and scrubs each payload, checks the hall with a handshake, then posts it with
                  the token), hooks/guard.mjs (the deny-only PreToolUse guard on Agent, Bash, PowerShell, Edit and Write: who may
                  start whom, no `model` in an Agent call, the .env rule, and from v3.3 the Lead edits BACKLOG.md alone), hooks/gate.mjs (v3.3: the quality gate on SubagentStop, opt-in per project through
                  env WOA_QUALITY_GATE; runs npm run check, sends a dev back at most 3 times, forwards those stops to the
                  hall with its verdict; --status answers by exit code), hooks/hall-check.mjs (send.mjs's handshake against 127.0.0.1:4319, answered
                  by exit code: 0 ours, 3 nothing listens, 4 anything else; with 0, the plugin version the hall states, one line of
                  digits and dots, 3.2d), hooks/ledger-post.mjs (v3.2: the ledger's
                  totals from stdin, checked to the exact shape, posted to /api/ledger after the handshake; prints nothing),
                  hooks/ledger-past.mjs (Recount, v3.2c, per session since 3.2d: every session's token counts from Claude
                  Code's transcripts, cache writes split 5-minute and 1-hour, printed as whole numbers only, on Dima's press),
                  hooks/mod/ (the team pane, a mod named
                  under `modules` in hooks.json: register.tsx the hooks and the one $.state value, pane.tsx the drawing,
                  roster.ts, presets.ts, hall.ts (Node check, hall check and start), voice.ts (the voice: its fixed
                  command, the queue, what it may say), text.ts (plain(): agent text cleaned and capped), ledger.ts (v3.2: the token ledger: addTurn(),
                  readLedger(), recountOf() and recount() (3.2d), summarize(), the dated price table, the pane's "This PC"
                  line and scopeLine()), types.d.ts
                  the state contract that plugin.json names; *.test.tsx are kit tests), voice/speak.ps1 (the voice
                  script), hall/ (built by build:plugin-hall, tracked: page/, server.mjs, manifest.json),
                  skills/setup-project/ (SKILL.md: the dry run; template.json and setup.mjs: copy the fixed settings into
                  a project's .claude/settings.local.json; versions/: every earlier template.json, for the upgrade) and skills/setup-project-write/ (SKILL.md: the write); tested in
                  server/setup-skill.test.ts. skills/team/ (SKILL.md: /world-of-agents:team, which the mod answers). skills/setup-gates/ (gates.mjs and SKILL.md),
                  setup-gates-write/ and setup-gates-off/ (v3.3: the quality gates switch, env WOA_QUALITY_GATE; tested in
                  server/setup-gates.test.ts).
                  An install from GitHub is a copy in Claude Code's cache: nothing outside plugin/ comes with it
tests/            invisible.test.ts: no bidi controls, zero-width characters or U+FEFF in any file git tracks or would add.
                  dev-refresh.test.ts: npm run dev:refresh on temp folders.
                  tests/plugin/: Vitest tests of the plugin's scripts (send, handshake, guard, guard-backlog and its mock
                  twin: BACKLOG.md on disk, agent-prompts: the check in the prompts, hall-check, run-directly:
                  every script's run check) and the mod's
                  source check (mod.test.ts). They live outside plugin/ because `claude plugin test plugin` runs every
                  test file under it
scripts/          types-update.mjs (npm run types:update), mod-surface.mjs + mod-surface.json (the mod's expected surface),
                  build-plugin-hall.ts (build:plugin-hall and, with --check, check:hall; run with tsx),
                  dev-refresh.mjs (dev:refresh: copies new and changed files, deletes the ones plugin/ no longer has,
                  never deletes a folder, refuses a target outside ~/Downloads/woa-dev and any link)
tools/claude-code-types/  index.d.ts: the engine's mods API types (`claude-code`, `claude-code/testing`) for one Claude
                  Code version, generated, -diff in .gitattributes. tsconfig.mod.json type-checks the mod against it
bin/              woa: the launcher, bash for Git Bash (finds the repo from its own location). woa.test.ts runs it
                  with a fake claude
.github/workflows/ pages.yml: builds the demo and hosts it on GitHub Pages
docs/             v3-brief.md (the v3 plan and milestones), v3-spike.md (milestone 1's findings: what the desktop app and mods
                  really do), v3-m2-plan.md (milestone 2 in parts), v3.1-plan.md (v3.1.0, better reviews: parts 3.1a to 3.1e),
                  v3.2-plan.md (v3.2.0, the token ledger; L7, the backfill, waits for Dima), step3-brief.md (v1 step 3 brief), v2-brief.md (the v2 plan, run
                  table and security controls), v2-hooks.md (real hook payload fields and what send.mjs forwards), media/ (the README's
                  screenshot and GIF, from a replay of run 3's redacted fixtures), release-notes/ (v3.0.0.md, v3.0.1.md: each
                  GitHub release's text, written before the tag)
```

## How the hall is drawn

- **Units are art pixels.** The hall is 672 x 480 art px; the design shows it at 2 CSS px per art px (1344 x 960).
- **Sprites** are `{ rows: string[], palette: Record<char, hex> }`. One string per row, `.` = transparent.
  `validateSprite()` and `sprite.test.ts` check every asset. Edit rows by hand; keep widths equal.
- **Scaling** is in device pixels. The whole hall must fit the first screen, under the header and status line, without
  scrolling: `useStage` measures the room and `fitPixelScale()` takes the largest scale that fits both ways. A sharp
  scale (every art pixel a whole number of screen pixels) within 15% of that is used instead, so 125% / 150% Windows
  scaling stays sharp where it can; a sharp scale of 1 CSS px per art px never is, because a tiny hall is the worse
  evil. Otherwise the canvas is stretched with `image-rendering: pixelated`: slightly uneven pixels. The width the
  hall doesn't take goes to the activity column, which goes under the hall when beside it would cost the hall over 15%.
- **Fonts**: Pixelify Sans only on the title, room plaques, name plates and badges, never under 14 px. Everything else
  is the system font: body 15 px, nothing under 13 px. Sizes are in rem so they grow with browser zoom; `layout.test.ts`
  reads the stylesheet and checks all of this.
- **Draw order** is a list of `Drawable { z, draw }` sorted by `z` (roughly the y of an object's base).
  Surfaces (floors, walls, rugs), halos, props, station parts and agents all go into that one list.
- **One `requestAnimationFrame` loop** in `HallView` redraws everything above the floor each frame. The
  floor layer (z <= `FLOOR_Z` = 1: floors, back wall, rugs) is drawn once into an off-screen canvas.
  Keep the loop's effect dependencies stable (`scale` is memoised): a new object there re-runs the effect,
  which sets state, which re-renders, forever.
- **A workstation** draws in two parts: the chair (z = chair top) and desk, PC, keyboard, desk prop
  (z = desk bottom). Agents are their own drawables with z = feet y, so a seated agent lands between them
  and the desk hides its legs. `station.pieces[1]` still marks where the agent sits (`seatSpot()` reads it),
  but it is not drawn with the station. The agent's waist lines up with the desk top (`WAIST`).
- **Walking**: `destinationFor()` turns state + `taskId` into a spot; `walkers.ts` walks `route()` there and
  never reroutes mid-walk (it finishes, then goes to the newest destination). Reduced motion: no hop, bob or
  shake, and agents jump straight to their destination.
- **Hurrying and desk time** (2d): a new destination mid-walk means work started or ended, so the rest of that walk
  and the next one go at 2.5x (`HURRY_SPEED`); the walk re-anchors its start, so the agent doesn't jump. An agent whose
  work ends less than 3 s (`MIN_DESK_MS`) after it sat down at its own desk stays until 3 s after it sat, showing the
  state it had (`heldState` in `HallView`); reduced motion keeps the hold, then jumps. The feed and the furnace keep the
  real state. A walker sent where it already stands is returned unchanged: every office update sends each agent its
  destination, and a fresh `standingAt()` there would restart its desk time.
- **Speech bubbles and walking**: a message's bubble never shows while its agent walks (a hurrying agent carried it
  across the hall at 2.5x, unreadable, in the 10 Nov re-check); it waits in that agent's queue, and its time runs only
  while it is on screen, in real time (`performance.now()`), so one cut off by a walk shows the rest of its time at the
  next stop (`speak()` in `talk.ts`, every frame). The feed shows the message at once. Reduced motion has no walks.
- **Lights**: every halo and every prop marked `flicker` (sconces, candelabras, braziers, the fireplace fire)
  steps its opacity 1 → 0.9 → 0.8 over 1.1 s (`flickerAlpha()`), each with its own phase (`lightPhase()`).
  The scenery is built once per loop; lights read the loop's `now` when drawn. Reduced motion: no flicker.
- **Furnace**: the mouth (`FURNACE_MOUTH`) and its glow are drawn live by
  `furnaceDrawables(working, per, lightAlpha)`, not baked into the furnace surface. The glow is the design's
  CSS box-shadow, measured from the mouth's edge: a solid spread of 1 + 2n art px, then a fade of 7 + 6n
  (n = working agents, max 4). It uses `shadowBlur`, which ignores the canvas transform, so blur and offset
  are in device px (`per` per art px). The glow flickers like any halo; the mouth colour never does
  (it is the busy indicator, so it keeps changing with reduced motion too).
- **Text** (room plaques, name plates, dashboard, furnace label, "You" sign, state and speech bubbles, "!!")
  is HTML in `HallLabels.tsx`, positioned in art px times `--u` (CSS px per art px, not always whole), so it stays sharp.
  Its minimum sizes are in rem, so it grows with browser zoom while the hall doesn't. `settleLabels()` then hides what
  would overlap, by rank: needs-you and error, other working states, speech, furnace label and "You" sign, name plates,
  idle bubbles, room plaques. The dashboard is fixed; under `--u` limits it drops its title, tiles, then count.
  `.hall` has `overflow: clip`, because a label hidden past its edge still counts for the page's scroll width.
  The labels re-render only when an agent's tag changes, not every frame. That text is `aria-hidden`;
  the agent `<button>`s over each sprite are not (they select the agent shown in the agent panel).
- `placements.ts` and `assets/hall.ts` were generated from the v1 design. Hand-edit them now; there is no
  generator in this repo.

## Design: v1 is locked

Do not change the look without asking. New ideas go into a later version.

- **Forge Hall rooms**: Lead/PM room (wall dashboard, war map, Lead's desk on a red rug), great hall in the
  middle (entrance gate with the "You" sign, red carpet, skull-topped pillars, furnace = busy indicator),
  rest room (fireplace, tavern table, fur rug), dev room (Designer, Frontend dev, Backend dev) with the
  Reviewer's library nook in the corner.
- **Cast** (agent names never change): Lead/PM = goblin strategist (smallest); Designer = elf artisan;
  Frontend dev = orc with two huge swords; Backend dev = orc with a huge forge hammer (orcs are the biggest);
  Reviewer = skeleton scholar with spectacles and a candle.
- **Workstations**: war-forge style in dark iron and blood red: spiked throne chair, iron-banded desk with a
  red runner, horned PC with red code, red-glow keyboard. Orcs get the larger set.
- **Style rules**: original fantasy only. Orcs, elves, goblins and skeletons are generic and fine; no
  World of Warcraft / Blizzard names, emblems, factions or art. The banner emblem is our own anvil and flame.

## Behaviour to build (from the v1 spec)

- **States**: idle, walking, thinking, reading, writing, waiting, needs-you, done, error.
  Idle agents wait in the rest room; two or more there chat in speech bubbles. When writing, the orcs get
  angry and smash the keyboard (keyboard shakes, "!!" sparks). Done = walk to the rest room.
- **Walking**: devs fetch their task scroll from the Lead's room, then go to their desks. The Lead walks to
  the dev room to check progress. The Reviewer walks to each dev's desk to review, then writes the verdict
  in the library nook. Agents path around desks and through doorways.
- **Routing**: a task always goes to the agent that owns its area; backend work goes to Backend dev.
- **Demo run** (9 steps): everyone rests → task arrives, Lead goes to the dashboard → Lead splits work, devs
  collect scrolls → Designer and Backend start, Lead checks in → design done, orcs smash keyboards →
  Reviewer at Frontend desk → Reviewer at Backend desk → verdict in the library → report sent, everyone rests.
- **Furnace** glows brighter the more agents are working. Candles and fires flicker.

## Security rules: non-negotiable

- Agent output is untrusted text. Render it as React text. ESLint blocks `dangerouslySetInnerHTML`. Its only
  formatting is `AgentText`: `code` and `strong` elements around plain strings. A Markdown link or image shows as its
  text alone, never as a link and never with its target (`javascript:` ones included). A cut (bubbles, feed rows) turns
  links into their text first, so it can't leave part of a target showing.
- Copy (v3.1) puts agent text on the clipboard as the page shows it: links as their text, never a target the page hid
  (Dima, 11 Nov), and every control (Cc) and format (Cf) character but tab and line breaks left out: bidi controls and
  marks, zero-width characters, the byte order mark and the tag characters, which can spell out an instruction no one
  sees. Hidden characters go before links turn to text, so taking one out never makes a working link. The button says
  how many it removed, every time. `forCopy()` in `copy.ts`; plain `writeText`, never HTML.
- The feed's flags (To you, Needs you, Failed) come from an event's type and the fields `map.ts` sets from hook types
  (a message to you only at the main thread's `Stop`, `needs-you` only from a permission dialog, `error` only from a
  failure), never from agent text: otherwise a page an agent read could make its message look important. A test pins
  that "IMPORTANT: to you" in an ordinary row stays ordinary. Keep the set to those three.
- An agent's last message reaches the hall whole up to 20,000 characters (`MAX_REPORT` in `send.mjs`), scrubbed like
  all free text. `hook-input.ts` and the page's schema take exactly that much, and the hall's `MAX_BODY` (256 KB) holds
  the largest post `send.mjs` can make, with every field full of characters JSON escapes to 6 bytes (a test builds it):
  a post over the limit is refused whole, the hook's state change with it.
- Every event goes through `parseEvent()` before it touches state. Strict objects, enums, length limits.
- v2 has no API key and no Agent SDK: it is observer mode. Claude Code runs on the user's own login, and the
  plugin's hooks post to the hall server on 127.0.0.1. An API key or token in this repo is a bug. Nothing
  secret ever goes in a `VITE_` variable: Vite bundles those into the browser.
- Least privilege per agent in v2: each agent gets only the tools its job needs; the Reviewer only reads. Change a
  model or tools in both `plugin/agents/*.md` and `roster.ts`: `roster.test.ts` fails if they differ, and checks the
  Lead can start exactly the other four. An `Agent(...)` list binds only the main thread: in a subagent's file it is
  ignored (the v3 spike saw one start an agent its list doesn't name), so who may start whom belongs in the guard hook.
- `bin/woa` always passes `--permission-mode default` and unsets `WOA_CAPTURE`, so normal use never saves raw payloads.
  It has no hardcoded paths. Captures use plain `claude`: see Still to capture in docs/v2-hooks.md.
- Enable the plugin per project: local scope (`--scope local`, `.claude/settings.local.json`, which git ignores), or
  project scope to share it. Never user scope: `plugin/settings.json` makes the Lead the main agent wherever the plugin is
  enabled, so every session everywhere would start as the Lead and report to the hall. The desktop app's Plugins screen
  asks for no scope and installs at user scope (twice on 11 Nov, app 5.1231), so installs go through
  `claude plugin install … --scope local`, checked with `claude plugin list`. Its switch under Customize, then Plugins,
  writes the settings file the screen's level names, the user's when it names none (app code, 5.1231.2); for a local
  install it wrote the project's `settings.local.json` (desktop check, 11 Nov), so it is per project there, like
  `claude plugin disable … --scope local`. An installed plugin can't set a
  permission mode or an environment variable, but a project's `.claude/settings.local.json` can, and the desktop app
  applies both (v3 spike), the mode only until one is picked for that folder in the app: from then on new sessions start
  in the folder's last pick, over the file (its log says `source=folder_pick`; seen 8 Nov). So far it took the file's
  mode only in a git repository; a folder without git got the user settings' mode (11 Nov; the brief has what that
  proves and what it doesn't). Until the milestone 2 setup skill writes that file, only `woa` forces Manual and
  `CLAUDE_CODE_MAX_SUBAGENT_SPAWN_DEPTH`.
- From v3.3 `gate.mjs` answers too, and only at `SubagentStop`: a block (the dev goes back to fix a failing
  `npm run check`) or nothing. It runs only where the project's settings set `env.WOA_QUALITY_GATE` to "1" (written by
  `/world-of-agents:setup-gates-write`, a fixed injected command only Dima starts), only for the Designer and the two devs,
  only `npm run check`, only in a project with that script, at most 3 retries per run. Not async, timeout 600, and never
  `onFailure: block`: a gate that breaks lets the agent stop. With gates on it forwards those stops to the hall with its
  verdict and `send.mjs` skips them. The pane learns gates are on from `gate.mjs --status`'s exit code, never from env.
  A gate that passes says nothing, so (v3.3 review) the Frontend and Backend devs run `npm run check` themselves as their
  last step (pre-approved by the setup) and give its exit code; the Designer runs no commands and says so; the Lead passes
  on what they reported. The gate stays the enforcer. `tests/plugin/agent-prompts.test.ts` pins those lines.
- From v3.3 the guard also sees `Edit` and `Write`: the Lead (main thread, `world-of-agents:lead`) may edit only
  `BACKLOG.md` directly in its `cwd` (exact match, no `.` or `..` segment, case-blind on Windows only), and only when that
  file is missing or a plain file with one name (v3.3 review: `lstat`, never through a link; a symbolic link, a junction,
  a folder or a hard link could carry the write to `.claude/settings.local.json`; any error but ENOENT denies); the
  Designer and
  the two devs get no answer (their own permission prompts decide); anyone else is denied. The Lead's tools are
  `Agent(...)`, Read, Grep, Glob, Edit, Write, EnterPlanMode and ExitPlanMode: it plans a milestone once in plan mode and
  keeps `BACKLOG.md`, and still writes no code.
- `guard.mjs` is the one hook that answers a tool call, and it only denies: a test runs it over every input and fails on
  any answer but a deny, and another fails on any decision but `deny` in its code. Never make it allow (allow skips the
  permission prompt) and never make it async (an async hook can't block). It fails closed: an unknown caller, an agent type
  not in `MAY_START`, input it can't read, or any error is a deny, and `"onFailure": "block"` makes a crash or a timeout
  block too. The main thread's row (`main`, the Lead) and subagent rows (`subagents`, by `agent_type`) are kept apart so
  no agent type can name the Lead's row. `MAY_START.main` must equal the Lead's `Agent(...)` list (`roster.test.ts`).
  It denies any Agent call that sets `model` (v3.1, D3): the tool's `model` takes precedence over an agent file's, so the
  agent file's model always wins. It denies `isolation` other than none or `"worktree"` (v3.1 review): `"remote"` runs
  the agent off this PC, out of reach of the hooks and the hall, and an unknown value is denied like `model`. The `.env`
  rule is best effort; don't sell it as more. No network, no writes; its only imports are `node:fs` and `node:url`, for
  `runAsScript()` and, from v3.3, the `lstat` of BACKLOG.md. Failing closed means a missing
  Node blocks every agent start and shell command where the plugin is on; both READMEs say so, with the message.
- Every plugin script with a main part runs it only when Node was started on that very file (v3.1 review): the same
  `runAsScript()` block in each compares the real path of `process.argv[1]` with the module's own (`realpathSync`, then
  `pathToFileURL`), never a name. With `endsWith('guard.mjs')`, a file named `xguard.mjs` that imports the guard ran
  the guard's main part too. `tests/plugin/run-directly.test.ts` finds every such script, pins the block, and imports
  each from an `x<name>.mjs` that traps stdin and the network.
- A project or user agent can't take a `world-of-agents:` name: Claude Code skips any agent file whose name holds `:`
  (checked for 2a, with an error in the debug log), so the guard's `agent_type` can't be spoofed by such a file.
- The setup is two skills, both `disable-model-invocation: true`, so only Dima types them: `setup-project` (dry run) and
  `setup-project-write` (typing it is the yes). Claude Code runs `setup.mjs` itself, through one injected command per skill
  (`` !`node '${CLAUDE_PLUGIN_ROOT}/...'` ``), pre-approved by an `allowed-tools` rule for exactly that command. The model
  runs nothing and decides nothing: the Lead has no Bash and no Skill tool, and the engine refuses either skill to a
  model that has one. Keep the commands fixed (no `$ARGUMENTS`, nothing from the conversation) and the path in single
  quotes: in double quotes bash would still run a `$(...)` in the plugin path. A path with one apostrophe breaks the
  quotes and the skill aborts before anything runs (tested). A path with two apostrophes is unsafe: the quotes balance
  again, so the text between them runs unquoted, and a folder named `a'$(calc)'b` would run `calc`. Accepted, because
  only Dima's own folder names (and our fixed plugin names) reach that path, never the conversation or a cloned repo. `setup.mjs` exits 0 whenever it printed a result, a stop included, because a
  non-zero exit aborts the skill. It merges only a file holding nothing but `enabledPlugins`/`extraKnownMarketplaces`,
  and maybe a `permissions` of `allow`, `deny` and `ask` arrays alone: rules the project gathered before, kept after the
  template's like an upgrade's (v3.0.1); a rule only an earlier template had stops that, and so does any other key.
  It manages `permissions` and its own env keys, and when they are already there it compares them itself. A rule in
  `allow`, `deny` or `ask` is ours when any template version has it in that list; any other rule is the user's (an
  "Always allow" click adds one) and is set aside first (v3.0.1). What is left: exactly the template's says "Already
  set up", whatever else the file holds; exactly an earlier version's (`versions/N.json`, every
  template.json main ever had, byte for byte, checked against git history by a test) is upgraded: those settings are
  replaced, the user's rules follow the template's, and every other setting stays where it was; anything else stops and
  names the settings that differ (so a second `--write` changes nothing). Before changing template.json, save the
  committed one as the next `versions/N.json`. It never prints an existing settings file's values (they can hold
  secrets, and the output goes into the conversation); it shows the two template versions' rules and values, which the
  file matched exactly, the user's own rules, quoted, with control, bidi and zero-width characters escaped and cut at
  200 code points (an "Always allow" rule is a command an agent proposed), and the names of the settings it keeps. Its
  "Written." promises no mode: a folder's pick wins in the desktop app. The skills give the model
  the exact `.env` caveat to repeat, so it doesn't improvise one.
- Injected skill commands skip hooks: no `PreToolUse` fires for them, so the guard never sees one (checked for 2a).
  Permission rules still apply (a matching deny aborts the skill). Only skills we wrote or read go in the plugin.
- `template.json` has no git rule on purpose: `git status`, `git diff` and `git log` already run without asking as
  built-in read-only commands, and `Bash(git diff *)` or `Bash(git log *)` would also allow `--output=<file>`, which
  writes a file without a prompt (checked against the engine's own decisions for 2a). It denies `git push` in both shells:
  on Windows with Git Bash a scoped Bash deny alone turns the PowerShell tool off without a warning (tools reference), and
  the scoped `PowerShell(git push *)` keeps it on. The engine confirmed `Read(.env)` also stops `Get-Content`, `gc`, `cat`
  and `type` in PowerShell. The guard's `.env` rule matches `.envrc` too.
- The team pane (`plugin/hooks/mod/`) watches and shows; it never decides. Every hook returns exactly what `next` resolved
  to: no answer on `tool.call`, no decision on `tool.check`, no change to a spawn, a prompt or a turn. It submits no
  prompt: a preset button puts that preset's fixed text after Dima's draft with `$.prompt.fill` (`mode: 'append'`, each
  text starting with one space), and Dima presses Enter (`fillPreset` takes a key, not a text). It never calls
  `$.prompt.read`, which would hand the whole draft, a pasted token included, to the mod, and never uses `session.send`.
  When the box doesn't take the text the pane says why in one line: "This surface has no prompt box" for the engine's
  `no_composer`, else, a fill that throws included, "Couldn't fill the prompt box". The presets spike (9 Nov) saw fill work in the desktop app's Code
  tab, a draft kept. `register.test.tsx` pins each, and a mutation run (break one, see the kit fail) showed every one bites.
  The ledger (v3.2, per session since 3.2d) keeps numbers only in `$.store` (`ledger`): per session id (`$.session.id()`,
  the transcript's name, a UUID; anything else counts in `earlier`) and model id (ids that aren't `[a-z][a-z0-9.-]{0,63}`
  count as `other`, at most 8 per session), five counts: input, output, cache read, and cache writes of 5 minutes and of
  1 hour. The engine's counts don't say how long a write lasts, so the Lead's are counted as 1-hour writes and a
  subagent's as 5-minute ones: an inference (every response on this PC on 13 Nov was so), pinned by a test, which
  Recount replaces with each transcript's exact split. At most 1000 sessions; past that the oldest fold into `earlier`.
  `readLedger()` reads it back strictly; 3.2c's shape starts again from nothing (it was never released).
  Recount (v3.2c, L7 and 3.2d, Dima's decisions) is opt-in: only the pane's "Recount" runs `ledger-past.mjs`, which reads
  Claude Code's transcripts and prints every session's whole numbers, each with `settled` (no turn can still run in it:
  nothing written for 10 minutes, and no tool call waiting unless a day has passed). `recountOf()` keeps it only when it
  is exactly that (keys `since` and `sessions`, session ids as UUIDs, `settled` and `models`, the counts' five keys, ids
  as above, at most 1000 sessions and 1 MiB) and drops anything else whole. `recount()` merges it: a settled session
  takes the transcript's count in place of the stored one, an unsettled one or one that changed while Recount ran keeps
  what it has, and one stored at the press whose transcript is gone moves into `earlier`, so the total never goes down.
  Never text: a test plants secrets in transcripts and in the script's output.
  Agent text (an Agent call's `description`) is plain `Text`, with control and bidi characters turned to spaces and cut at
  120 code points; never `Markdown`. The only `Link` is the hall, exactly `http://localhost:4319`. `tests/plugin/mod.test.ts`
  checks the source: no `submit` call and no `asUser`, `$.prompt` only as the one `$.prompt.fill` in `presets.ts`, no
  `prompt.read`, no `send`, no `Markdown`, and prompt text read in one place. Two hooks see Dima's prompts (`prompt.submit`, `classic.UserPromptSubmit`): the first only asks `heardRun()` whether the prompt is a frame naming one of the mod's own runs, and that id is only compared with `unheard`; the second reads `permission_mode` only. No prompt text, not even an id a prompt claims, reaches `$.state`, `$.store`, a process, the voice or the pane: `register.test.tsx` plants a fake token in a prompt and in frames and checks every write (two planted bugs, both caught). `scripts/mod-surface.json` lists
  every event, `$` call, state key and env name it uses, as `claude plugin validate` reads them; `npm run mod:surface`
  fails on any difference, either way, so a removed call can't come back unreviewed. No network, no files, no environment
  variables (`mod.test.ts` checks); the processes are the fixed ones below. Of the settings it reads one key, at session
  start: `$.settings.read({ key: 'enabledPlugins', source: 'user' })`, whose answer is that key alone. Our ids that are
  `true` there (at most three, `world-of-agents@<marketplace>` of plain characters) draw "World of Agents is on for every
  project." with `claude plugin disable <id> --scope user`: `uninstall --scope user` fails when no user-scope install
  is behind the setting (CLI, temp config, 11 Nov). `mod.test.ts` pins that one line (v3.0.1).
  The pane warns in `auto`, `bypassPermissions` and `acceptEdits`, the mode named first ("Auto: Nothing asks you before
  acting.", "Bypass: …", "Accept edits: Edits aren't asked, and npm test runs whatever they change."), Dima's wording; it
  never changes the mode. `/world-of-agents:team` is a
  skill with `disable-model-invocation: true` (a mod's `$.command.register` takes neither a `:` nor that flag); the mod
  answers its `command.run` without `next`, opening the pane, so the skill's text reaches the model only if the mod isn't
  loaded, and then only tells Dima so.
- The mod's processes (2c) are fixed commands, each with the plugin's own folder as `cwd`: `node --version`,
  `node <plugin>/hooks/hall-check.mjs`, `node <plugin>/hall/server.mjs` (cwd `<plugin>/hall`), the voice, and from v3.2
  `node <plugin>/hooks/ledger-post.mjs`, whose `stdin` is the ledger's totals (numbers the mod built from the engine's
  counts, never text), run whenever the hall becomes `running` (3.2d: a hall the mod started itself answered after session
  start's push, and showed no total until the Lead's next answer) and after each of the Lead's turns while it is, and from
  v3.2c `node <plugin>/hooks/ledger-past.mjs`, with nothing on stdin since 3.2d, run only on Dima's press. A
  `node.exe` planted in a project is never run: `$.process.run` refuses a command found only in the working folder
  ("unsafe location (current directory)"), and the hook runner looks on PATH only, with Node installed or not (both
  checked on 2.1.318, 8 Nov, with a copy of hostname.exe as the planted file). The plugin's folder as cwd is a second
  lock on that. No shell, no `-Command`, no argument, `env` or text from an agent, a file, the page or the environment;
  the kit tests pin each argv and cwd, and `mod.test.ts` pins where `process.run`, `process.spawn` and `input` appear.
  Nothing a child prints is shown or kept, with three exceptions, each checked to the character: the digits of
  `node --version`, the version hall-check.mjs prints for our hall through `hallVersionOf()` (3.2d), and
  ledger-past.mjs's recount of whole numbers through `recountOf()` (v3.2c, L7, Dima's decision); `mod.test.ts` pins
  `.stdout` to those three lines. The hall is started through the session's `$`, never a turn's: a child dies
  when the dispatch it was started in is abandoned, and an interrupted turn abandons its own. `claude plugin validate`
  refuses a `$` kept in a variable, so register.tsx keeps a closure made in `session.start` instead.
- "Is the hall up?" is `hall-check.mjs`: send.mjs's own handshake (no redirect, capped answer, `timingSafeEqual`), never
  a 200 from `/api/health`. 0 is ours; 3 is a refused connection; 4 is anything else (no token file, a wrong or late
  answer, a redirect, a closed connection). Only 0 shows "Open hall", and since 3.2d only when the hall states this
  plugin's version (`PLUGIN_VERSION` in `hall.ts`, which `mod.test.ts` holds to plugin.json's): two installs on one PC
  share one token file, so another install's hall passes the handshake. That one is `other-version`: "An older hall
  (vX) is running. Close the sessions in your other projects." ("A newer hall" when it is, "before v3.2.0" when it
  states none), no link, no ledger, and nothing started or stopped; the session that started it stops it when it ends.
  askHall() in send.mjs takes the version only beside an answer that proves the token, and only as digits and dots.
  4 shows "Port 4319 is used by another program." and starts and stops nothing. A start happens only on 3 with no start of ours alive, one check at a time; checks run at
  session start and at each of the Lead's turns, never a subagent's. A hall that loses the race for the port exits 0
  without a word and writes no token (checked by hand with a hall on 4319; `install.test.ts` pins the line).
- The plugin's hall (`plugin/hall/`, written by `npm run build:plugin-hall`, tracked) finds its page with
  `import.meta.dirname` only and serves only what `manifest.json` names, by exact match: the URL is looked up, never
  decoded or joined into a path. `readManifest()` refuses any path with a dot segment, a backslash or an odd character, and
  any type its extension isn't served as, so a changed manifest stops the hall from starting. It prints at most two fixed
  lines, never hook or agent text, and keeps every v2 control. Two builds in a row are byte-identical (checked for 2c),
  and `npm run check:hall` must pass before any release (`npm run release:check`). The build forces `VITE_LIVE=true`.
- The voice runs exactly this, never with `Bypass` (security tools flag it):
  `powershell.exe -NoProfile -NonInteractive -ExecutionPolicy RemoteSigned -File <plugin>/voice/speak.ps1`. The text
  goes only to stdin (`input`), cleaned by `plain()` (control and bidi characters out) and capped at 200 code points,
  then capped again in the script. `speak.ps1` is ASCII, sets `[Console]::InputEncoding` to UTF-8 before it reads
  (without it Cyrillic arrives garbled, checked), and speaks with `Speak`, never SSML. Names come from the roster, else
  "An agent". One voice at a time, at most 3 waiting (the oldest dropped), stopped after 15 s; mute is `muted` in
  `$.store`, and muting stops the voice and the queue. It says two things only:
  - `<name> needs your approval.` when a permission dialog opens for a recorded ask (`classic.PermissionRequest`, by agent
    and tool). Not at `tool.check`: `ask` there means "the mode's decider", and in Auto the classifier settles most asks
    with no dialog (an 8 Nov Auto run: six asks, no dialog, each one spoken before the fix). The pane's "needs you"
    follows the same rule (`PaneAsk.shown`).
  - at the end of a Lead turn that ended with an answer, once every run seen since the team last went quiet (`round`) is
    over and heard, and no approval is open: `The team is done. <first sentence>` or `The team stopped. <roles> failed.`
    Heard: a run the Lead started in the background (its Agent call came back `async_launched`) stays in `unheard` until
    a frame naming it reaches the Lead (`<task-notification>…<task-id>`, or Auto's `<agent-message from>`, seen at
    `prompt.submit`, as a turn of its own or into a running one). A background run can end before the Lead's own turn
    does; that is how the 8 Nov desktop check heard the line twice. A lost frame means silence, never an early line.
    The Lead's answer loses its Markdown before the first sentence is cut (`withoutMarkdown()`: a link or image keeps
    only its text; marks go only where they work as Markdown: every backtick, `**` pairs, `__` pairs and a single `*` or
    `_` only at word boundaries, a quote's `>`, a heading's `#` and a list marker only at a line's start), so no mark or
    link target is read aloud and user_id, snake_case and "a > b" are read whole. The hall's bubbles use the same rules
    (`talk.ts`). A bare URL in the answer would still be read.
- No invisible characters in the repo: `tests/invisible.test.ts` fails on bidi controls (U+202A to U+202E, U+2066 to
  U+2069), zero-width characters (U+200B to U+200D, U+2060) and U+FEFF in any text file git tracks or would add. When
  writing such a range in code, use numbers (`0x202a`), not backslash-u escapes: Claude Code's tools have turned
  typed backslash-u escapes into the real characters (2b).
- `send.mjs` doesn't trust the token file, because a PC shutdown can leave one behind with no hall running. Before each
  post it sends a random nonce to `POST /api/handshake` and posts only if the answer is HMAC-SHA256(token, nonce), compared
  with `timingSafeEqual`. Neither request follows a redirect, and the answer is capped. A program on the port without the
  token gets the nonce and nothing else. The hall still checks the Bearer token on every post, so a plugin pinned to
  `v2.1.0`, which has no handshake, keeps working with a newer hall. A new script with an old hall posts nothing.
- The same project can have the plugin and use `woa`: a `--plugin-dir` copy silently replaces an installed plugin of the
  same name, so nothing loads twice (tested for milestone 0, with hooks counted and a real hall). Don't add a warning.
- `version` in `plugin.json` pins installs: people on GitHub get a new copy only when that string changes. Change it with
  every release. A marketplace added from a local folder loads `plugin/` in place, so it ignores the version.
- The hall sends `Content-Security-Policy`, `X-Content-Type-Options: nosniff` and `Referrer-Policy: no-referrer` on every
  response. The Pages build (`VITE_LIVE=false`) carries the same policy as a meta tag, without `frame-ancestors`. Both
  come from `server/csp.ts`. Add only what the page really needs; never `unsafe-inline` or `unsafe-eval`. React's `style`
  props go through the DOM, so they are allowed, but a `style` attribute in HTML or `setAttribute('style', …)` is not.
  The dev server has no policy, because Vite injects inline scripts there. Zod runs `jitless` (`schema.ts`): its speed-up
  probes `new Function`, and the policy reports even a caught attempt.
- GitHub Actions: every action is pinned to a full commit SHA, with its tag in a comment. Read the SHA from GitHub and
  check it is a commit, not a tag object. `pages.yml` runs only on pushes to main and manual dispatch. Its permissions
  are `contents: read`, `pages: write`, `id-token: write`; the build job narrows to `contents: read`, because npm
  packages run there.
- Pictures in the README come from redacted fixtures and show no personal paths. Look at each one before adding it.
- The task bar text is user input. v1 only shows it (trimmed, capped at 500 chars, plain React text). In v2's
  Live mode there is no task bar: the task is typed in Claude Code, and the page never sends anything to
  an agent. The prompt-injection surface is what agents read (files, tool output), not the page: their
  prompts treat it as data, and least privilege, not the prompt, limits what a hijacked agent can do. The
  prompt and agent text that reach the hall are still untrusted text.
- Flag any security issue you notice and explain the risk, even if it is outside the current task.

## Testing notes

- Two test runners. Vitest runs everything outside `plugin/` (`vite.config.ts` excludes `plugin/**`), so a Vitest test of
  a plugin script goes in `tests/plugin/`. `claude plugin test plugin` runs every `*.test.ts(x)` under `plugin/` as a kit
  test, in the engine's own environment (no fs, network or process). In a kit test, the hooks the test registers with
  `on` stand for the engine beneath the mod. A test hook's own `$` only makes the calls its module's scan lists, so a
  test hook that raises another event uses the test body's `$`. `mock.clock(on)` answers `$.clock`, and `clock.settle()`
  lets work the mod didn't await land before a check.
- `claude plugin validate` refuses three things the types allow: a `$.state` atom used in a file other than the one that
  declares it (so `view` lives in `register.tsx`, and `drawPane` gets the value), a state contract with an `import`, and a
  `$` kept in a variable or read as a default value (pass it into a function, or close over it).
- Kit stand-ins (2c): a `process.run` hook answers `{ value: ProcessRunResult }`, or `{ deny }`, which the call rejects
  with; a `process.spawn` hook is an async generator that yields raw pieces and returns `{ value: { code, signal } }`.
  Every `on(...)` comes before the test's first `$` call, so one engine per test, never a loop of them. The test's own `$`
  has no `$.store`: answer `store.get` and `store.set` yourself to read what the mod kept. In the kit, `return()` on a
  stream whose stand-in is waiting lands only at its next piece (plain generator rules); the real engine ends the child at
  once (a no-login probe saw it gone 14 ms later), so the 15 s test lets the stand-in write a piece after the stop.
- A `prompt.fill` stand-in can't give the engine's own refusal: the engine strips a cause a hook writes, so the mod sees
  `{ isFilled: false }` with no `refusal`. To draw what `no_composer` leaves, seed `state.get` with
  `{ value: { value: { shape, value: view }, version } }`, as register.test.tsx does.
- With no login, `claude -p --plugin-dir plugin` still runs the mod's `session.start`, and `$.process.run` and `spawn`
  work there. A throwaway second plugin that hooks `process.run`/`process.spawn` (results arrive as `{ value }` at hook
  level) can log what the mod runs; that is how 2c saw the real calls, cwd and exit codes. Write such logs per call: a
  hook that sleeps in `session.start` holds every plugin's `session.start` behind it.
- `tools/claude-code-types/index.d.ts` comes from the plugin-authoring skill's copy for the running Claude Code
  (`%TEMP%/claude/bundled-skills/<version>/`), which exists once that skill has loaded in a session of that version.
  `types:update` keeps only the two modules and refuses to write if it finds a user folder, the home path, the account
  name or an email address (example.com and its kin are allowed). Claude Code may lay its own types in
  `plugin/.claude-plugin/types/` when a session hot-reloads `plugin/` (`woa`'s `--plugin-dir`); ESLint and Prettier
  ignore that folder, and the engine writes a `.gitignore` of `*` there (seen 8 Nov). It also writes `plugin/tsconfig.json`,
  which only extends that folder and isn't ignored: delete it, never commit it.
- jsdom has no canvas: `src/test/setup.ts` mocks `getContext` to return null; drawing code must handle that.
- Layout tests check that props stay in the hall, agents sit in the right room, and nothing overlaps a desk.
  Add a test when you add a layout rule.
- `noUncheckedSideEffectImports` is on: import CSS from packages by file path
  (`@fontsource-variable/pixelify-sans/wght.css`), not by bare package name.
- The player's clock is `performance.now()`. `vi.useFakeTimers()` fakes it along with `setTimeout` and
  `requestAnimationFrame`, so timer tests need nothing extra. Wrap timer advances in `act()` when React is
  rendering, and advance in small slices (App.test uses 50 ms): React only renders when an `act()` ends, so
  one big jump lands every event at once and the hall sees them late.
- `fireEvent` does not turn Enter/Space into a click. Agent selection tests check the controls are real
  `<button>`s (browsers give them Enter/Space); keyboard use was checked in real Chrome for step 3.
- jsdom has no `matchMedia`: `setup.ts` stubs it as "no match". To test reduced motion, `vi.spyOn` it and
  restore that one spy. Don't call `vi.restoreAllMocks()`: it also undoes setup.ts's canvas mock.
- If Vitest crashes with "Cannot read properties of undefined (reading 'config')" on `describe`, check the
  drive letter in your terminal's path: `c:\...` vs `C:\...` makes Vitest load itself twice.
- Importing `vite` itself in a test fails under jsdom (esbuild's own check), so `quiet-logger.ts` and `csp.ts` import only
  its types. Don't run real builds in a test either: two of them starved other tests past their timeouts.
- `npm run check` runs files in parallel, so a busy machine makes CPU-heavy tests several times slower. Playing the whole
  demo in 50 ms slices is about 1,400 renders, which came close to Vitest's 5 s limit. A test that only looks at where a
  moment ends up should pass a bigger slice to `at()`, as App.test's "plays the demo run" and "walks agents" do. Check this
  with something heavy running: a game on 6 cores made the second one time out when it looked safe at 1.4 s.
- A skill's injected command runs through Git Bash, even with no login (a throwaway skill's marker file, 10 Nov). Git Bash
  can't be hidden from Claude Code on a PC with Git installed: with Git off PATH, or `CLAUDE_CODE_GIT_BASH_PATH` pointing
  elsewhere, it falls back to auto-detection and finds `C:\Program Files\Git\bin\bash.exe`. So "without Git Bash" is
  untested, and the READMEs say the setup skills need it.
- To test an install without touching the real setup, set `CLAUDE_CONFIG_DIR`, `HOME` and `USERPROFILE` to a temp folder.
  With no login there, `claude -p` still fires SessionStart, UserPromptSubmit, StopFailure and SessionEnd before it stops,
  so it spends nothing, and `WOA_CAPTURE=1` counts the hooks. SessionStart's `agent_type` shows the main agent, and
  `--debug-file` shows which copy loaded. `marketplace add` refuses `file://`; to test the cached copy, serve a bare repo
  over HTTP through `git http-backend`, because Claude Code clones shallow.
- Desktop checks of the working copy use a dev install: `~/Downloads/woa-dev/` is a folder marketplace (`woa-dev`) holding a
  copy of `plugin/`, installed at local scope in `~/Downloads/woa-m2-test/`. Claude Code refuses a junction or symlink there
  (a link-traversing entry), so refresh the copy after each change with `npm run dev:refresh`, then run
  `/reload-plugins` in the desktop session. Not `rm -rf … && cp -r …`: a hall started from the dev install stands in
  `woa-dev/plugin/hall`, Windows won't remove that folder, and the copy then lands in a nested `plugin/plugin/`.
  The marketplace name can't be `world-of-agents`: the user settings already pin that one to GitHub.
- `setup-skill.test.ts` runs `setup.mjs` in temp git repos. The script ignores your global git ignore on purpose
  (`core.excludesFile` points at the null device), so the tests don't depend on it either.
- Tests never reach port 4319, where a real hall may be running. `deliver()` in `send.mjs` takes the hall's URL, and
  `handshake.test.ts` uses real HTTP servers on free ports, including ones that don't know the token.
- `woa.test.ts` needs Git Bash on Windows (it skips under WSL's `bash`) and skips its symlink test where the account
  can't create symlinks. `core.filemode` is false on Windows, so git can't see a lost exec bit: a test checks
  `bin/woa` is 100755 in git. A new launcher needs `git add --chmod=+x`.
- In Git Bash, MSYS rewrites an argument like `--base=/world-of-agents/` into a Windows path. To build the Pages version
  locally: `MSYS_NO_PATHCONV=1 VITE_LIVE=false npm run build -- --base=/world-of-agents/`. It overwrites `dist/`, which
  a running hall serves. The workflow runs on Linux and needs no such flag.

## Status and next steps

Done: project setup, event schema, sprite pipeline, the full Forge Hall, and:

1. The "Create a dashboard" demo run. `App` creates a player for `DEMO_RUN` (9 steps of 8 s, about 66 s);
   every entry goes through `parseEvent()` (rejects are `console.warn`ed in dev only), then
   `officeReducer()` (tasks capped at 20, messages at 100). The dashboard shows "No tasks yet", up to 5
   tiles (4 + "+N" when there are more), done count and progress bar; the furnace label says "cold" or
   "N working". Play / Pause / Restart buttons: Pause stops the script only (walks finish, chat goes on);
   Restart puts every agent back at its rest spot at once.
2. Walking. Agents start in the rest room and walk to where their state says (`destinationFor()`, rules
   in destination.test.ts). The script sends no `walking` events, and a test checks that every walk ends
   before the next step. Walking hops 1px every 150 ms, a seated orc writing jitters and shakes its keyboard
   with "!!", and busy agents bob. State bubbles over every agent (none while the state is `walking`),
   message speech bubbles (since 2d the first sentence only, cleaned of Markdown as the voice cleans it, at most 90
   chars, up 4 s plus 60 ms per shown character and at most 10 s, never while the agent walks, and an agent's next bubble
   waits for the one it shows), and rest-room small talk every 3 s.
3. Lights and the page (docs/step3-brief.md). The furnace mouth goes `#5a2a10` / `#f08a3c` / `#ffb15a`
   with 0 / 1 / 2+ working, with a glow that grows up to 4; candles, braziers, the fire and every halo
   flicker (off with reduced motion). The task bar (Send trims, ignores empty, caps at 500, labels the run and
   restarts it, and the Lead's first line quotes it: `On it: <task>. Planning the work first.`; v1 sends nothing
   anywhere). Under the hall: the task board, and the agent panel for the
   agent picked with the buttons over the sprites (Lead/PM by default): race, look, state, task, v2
   model and tools, waiting note. The reducer keeps a `log` of state changes and messages (200 max) for the
   activity feed. An `aria-live` region reads out messages sent to you.
4. v2 (docs/v2-brief.md): observer mode, no Agent SDK and no API key. A Claude Code plugin (`plugin/`: the
   five agents and hooks) reports to a hall server on 127.0.0.1, which sends the same events to the page over
   Server-Sent Events. Milestone 1 (plugin and payload capture) is done; real payload fields are in
   docs/v2-hooks.md. Milestone 2 (the hall server, `server/`) is done: `npm run hall` builds the page and
   serves it with the API on 127.0.0.1:4319. The token in ~/.world-of-agents/token is new at every start and
   deleted on Ctrl+C or when the terminal closes. The hall adopts the first session it hears from; after
   that only a new, cleared or resumed session switches it. A resume of the session it already follows keeps the run
   (2d): the desktop app resumes a session in a fresh process after a focus change, and that wiped the Lead's answer
   from the feed. A card goes Done at its agent's SubagentStop; a
   `<task-notification>` status other than completed reopens it. Claude Code frames (any prompt that starts
   with a tag) never reach the hall as text. `PermissionRequest` names the agent asking, at once; a
   `permission_prompt` 6 s later names nobody and only guesses (the running subagent that last used Edit, Write or
   Bash) in a session where no `PermissionRequest` has arrived. `idle_prompt` is not an approval wait: `awaiting-prompt`, calm text in
   the status line. Fixtures: run 1 (`-p`), run 2 (interactive, `auto`), run 3 and run 4 (interactive, `default`). Milestone 3 (Live mode in the page) is done: the page checks
   `/api/health` on load (1 s), follows the hall over SSE, and rebuilds from the replay on reconnect, so agents stay
   put while it is offline. `VITE_LIVE=false` skips all of it. In Demo it re-checks every 5 s and offers "Go live",
   never switching on its own. An always-there status line turns into the needs-you banner, so nothing below it
   moves. After the first real run: the whole hall fits the first screen, the team's activity feed takes the rest of
   the width (under the hall when narrow; clicking an agent filters it), and the task bar is Demo only, at the top of that
   column. The status line has no box until someone waits for approval: in a box it looked like a disabled input. `public/favicon.svg` is the
   banner's anvil and flame at 16x16. In Live a dev fetches its scroll from the Lead's room before its desk, and a waiting Lead stands on the dev
   room carpet. `SessionEnd` sends all five idle, then `session-end`. There are no token counts in either mode.
   Tests stub `VITE_LIVE`, `fetch` and `EventSource` (src/test/fakeEventSource.ts). Milestone 4 is done: `bin/woa`, the
   README (written so a fresh clone works by following it alone), the MIT license, the roster test and the Pages
   workflow. The hosted demo is built with `VITE_LIVE=false` and the base path `/world-of-agents/`, and it needs the
   repo's Settings, Pages, Source set to GitHub Actions. Its status line says it calls no AI and links to the README,
   and may wrap, because an ellipsis could hide the link. The unused `tokens` event is gone, and the dev proxy no longer
   prints an error every 5 s when no hall is running (a hall dying mid-stream still prints).

5. v3 (docs/v3-brief.md). Milestone 0: v2 is released as the `v2.0.0` tag and GitHub release. The repo is its own
   marketplace, so the plugin installs as `world-of-agents@world-of-agents` from `kremendev/world-of-agents#v2.2.0`, and
   its `settings.json` makes the Lead the main agent. `v2.1.0` is the first release with a marketplace file; `v2.0.0` has
   none, so it can't be pinned. `v2.2.0` is the first with the handshake. The desktop test passed: installed at local
   scope with `claude plugin install` in the project, then run in the desktop app's Code tab, the Lead answered and the
   hall followed the whole run (2 of 2 cards). That run was almost certainly in Auto: a new session in `woa-test`, whose
   local settings set no mode, starts in Auto from the user settings. `woa-test` now runs the `v2.2.0` install.
   Milestone 1 (the spike) is done: `docs/v3-spike.md` has the answers, and the brief follows from them. Its throwaway mod
   is on the local `spike/mods` branch, never pushed: it is unreviewed and the repo is public.

Next: milestone 2 in four parts (docs/v3-m2-plan.md, approved 6 Nov). 2a (the guard hook and the setup skills) is done.
2b (the team pane: the mod, its toolchain and kit tests) is done, desktop-checked on 7 Nov. 2c (processes: the prebuilt
hall, its start, the Node check, voice) is done, desktop-checked on 8 Nov with 2b's leftovers; that check found the
Auto "needs you" bug and the double "team is done" (plan decisions 16 to 20). 2d (hall fixes, `dev:refresh`, Zod's
locales out of the bundle, the temporary query measurement) is built and checked by tests and planted bugs (10 Nov). Its
desktop check (10 Nov) passed the desk time, the hurrying and the feed after a session switch, and changed the bubbles
and the feed: the first sentence in a bubble, whole reports in rows that expand, flagged rows (plan, "What 2d's desktop
check changed"), and its re-check passed. The setup skill's upgrade path from older templates (plan decision 26)
passed its desktop check in `woa-m2-test`. `v3.0.0` is released (10 Nov): the minimum Claude Code version measured as
2.1.299 (plan decision 27), the notes in docs/release-notes/v3.0.0.md. The install check (11 Nov, step 7 of the plan's
"Releasing v3.0.0") found the Plugins screen installs at user scope without asking, and the desktop app took the setup's
mode only in a git repository; the README, the notes and the release page (edited, no new tag) say so. `v3.0.1` (the
plan's "v3.0.1: small fixes", desktop-checked 11 Nov) is released (11 Nov, tag `v3.0.1` on `bba6710`): the setup keeps
the user's rules, in a first setup too, the pane warns when the plugin is on for every project, "Written." promises no
mode, and the minimum Claude Code version is 2.1.312, the oldest measured with the pane's `$.settings.read`.
`woa-test` and `woa-v3-test` run it from GitHub at local scope; `woa-m2-test` stays on `woa-dev`, whose copy needs
`npm run dev:refresh` before the next desktop check (the plan's "Releasing v3.0.1", step 6).

6. The long run, v3.1.0 to v3.4.0 (Dima's brief of 11 Nov), on the branch `v3-next`, built alone and tested by Dima at the
   end. Commits go on `v3-next` only, one per finished part, pushed there: never `main`, never a tag or a release. After
   each part: `npm run check` from `C:\`, `check:hall` when the hall changes, planted bugs for the new logic, and this
   status. Each version gets a desktop checklist for Dima in docs/release-notes/<version>-check.md. Real model runs only
   where nothing else can prove a fact, tiny, in throwaway folders under ~/Downloads/woa-*, deleted after use.
   Done: 3.1a (the Reviewer's report format, its parser, the hall's Read/Grep/Glob counts on the Reviewer's report).
   3.1b (the Reviewer on Opus, the guard denies an Agent call with `model`; a terminal run showed Opus follows the format,
   its report is a parser case). v3.1.0's desktop checklist has steps for both.
   3.1c (the Review board: review rows in the feed, the Reviewer's button opens it, "and reviews" in its label).
   3.1d (the "For you" strip: unread To you, Needs you and Failed rows above the feed, whatever the agent filter, read
   marks kept per hall start; "Only for me"; useLiveHall now gives the page the hall's start id).
   3.1e (Copy on an opened row and each review card; it removes every Cc and Cf character, tag characters included,
   wider than the plan drafted). 3.1f (the review's fixes, 12 Nov: the guard denies `isolation` other than none or
   "worktree"; every plugin script's run check compares real paths, never a name). v3.1.0 is built; its desktop
   checklist is docs/release-notes/v3.1.0-check.md.
   v3.1.0 is released (13 Nov, after Dima's desktop test): tag `v3.1.0` on `703f135`, main fast-forwarded to it, the
   GitHub release from docs/release-notes/v3.1.0.md.
   v3.2.0 (docs/v3.2-plan.md): 3.2a done (every turn's usage, the Lead's and each subagent's, from turn.complete, added
   per model to `ledger` in $.store, one count at a time; the pane's "This PC" line with the value at the dated API
   prices).
   3.2b done (the total in the hall's page header: hooks/ledger-post.mjs; POST /api/ledger; a named `ledger` SSE event
   through parseLedger()). 3.2c done (12 Nov, Dima's L7: the pane's "Count past sessions" runs hooks/ledger-past.mjs,
   which prints a ledger of whole numbers from the transcripts before the live ledger began; pastOf() keeps only that,
   as `ledger-past` in $.store, and the pane and the hall show one total).
   3.2d done (13 Nov, after Dima's desktop check of v3.2.0, docs/v3.2-plan.md "3.2d"): a hall the mod starts itself
   gets the total as it answers; the hall states its plugin version (handshake, /api/health, the page's badge) and the
   pane names another install's hall instead of linking to it; the ledger is per session, the Lead's cache writes priced
   at 1 hour, Recount replaces each settled session's count with its transcript's, exact; billions as "1.18B".
   The v3.2.0 checklist is docs/release-notes/v3.2.0-check.md.
   v3.2.0 is prepared, not tagged (plugin.json 3.2.0, docs/release-notes/v3.2.0.md, README pins on `#v3.2.0`).
   v3.3.0 (docs/v3.3-plan.md): 3.3a done (the quality gate, its switch skills, the hall's gate verdicts, the pane's gate
   lines; three real runs: the send-back loop and the pass path work, an agent fixing from the gate's output not seen).
   3.3b done (BACKLOG.md and plan once, approve once: the Lead
   has Edit, Write, EnterPlanMode and ExitPlanMode; the guard denies the Lead any edit but BACKLOG.md). 3.3c done (the
   review's fixes, 12 Nov: the guard lstats BACKLOG.md and denies a link, a junction, a folder or a second name; the two
   devs run npm run check last and report its exit code; G11 is "not now", in the plan's backlog). The v3.3.0 checklist
   is docs/release-notes/v3.3.0-check.md. Next: prepare v3.3.0, then v3.4.0 (guilds, skills and memory): plan first, and
   prove the team-as-a-local-plugin approach before building on it.
