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
npm run dev:refresh   # mirrors plugin/ into the desktop dev install, D:\Dev\sandboxes\woa-dev\plugin
npm run check:hall    # builds it again in a temp folder and fails on any difference (not in check: a build takes seconds)
npm run release:check # check:hall, then check: before every release tag
npm run format   # prettier --write .
npm run hall     # builds the page, then serves it and the API on http://127.0.0.1:4319
bin/woa          # Claude Code in the current folder, with the plugin and the Lead. bin/woa --version starts no session
```

The owner works on Windows in Git Bash. Give commands that work there.

## Stack and why

- React 19 + TypeScript (strict, `noUncheckedIndexedAccess`) + Vite 7, Vitest 5 + Testing Library, Zod 4. Fonts self-hosted
  through Fontsource: Pixelify Sans, from v3.6 Inter, and from v4.0 M PLUS Rounded 1c 5.3.0, pinned exactly, for the
  Forge Keep's signs only (kit.ts loads its Latin file at weight 800 through FontFace; canvas text needs it loaded first).
- Zod is imported as `import * as z from 'zod'` (Zod's own advice), never `import { z }`: with the namespace import
  esbuild drops Zod's 64 locales from the bundled hall (779 KB to 210 KB, 2d).
- The office is drawn on **Canvas 2D**. Switch to PixiJS only if sprite handling gets painful.
- TypeScript 6.0.3, typescript-eslint 8.72.2 and ESLint 10.15.0 (with `@eslint/js` 10.0.1), pinned exactly (v3.5a).
  Not TypeScript 7: typescript-eslint 8 accepts only below 6.1. Upgrade them together.
- `overrides` in package.json gives typescript-estree `minimatch` 11.0.8 (GHSA-g3hv-75wg-m249, fixed in 11.0.1) until a
  stable typescript-eslint asks for `^11.0.1`; then drop it. `npm audit` is clean again: GHSA-fc5q-39xc-vjpf (picomatch
  up to 4.0.7, ReDoS), which from 17 Nov flagged the copy vite, tinyglobby and typescript-eslint use, was withdrawn on
  18 Nov, and nothing was changed for it (`npm audit fix --force` would have put vite back to 6.2.7). After changing an
  override, remove the nested copy from package-lock.json and node_modules, or npm keeps it and calls it "invalid".
- eslint-plugin-react-hooks 7 (ESLint 10 needs it): eslint.config.js turns on its two classic rules only. Its presets
  add the React Compiler's rules (8 `react-hooks/refs` errors in App.tsx and ReviewBoard.tsx, 14 Nov): a choice of its own.
- `yaml` 2.9.1, pinned exactly, is a dependency from v3.10 (it was a dev dependency from 3.6e): `server/skill-check.ts`
  reads a SKILL.md header from outside with it (core schema, unique keys, an alias limit of 5, no tag), and the hall
  bundles it. `plugin/team/team.mjs` never imports it.
- `three` 0.187.0 and `@types/three` 0.187.0, pinned exactly (v4.0.0, 4a; Dima chose the newest, proven by a
  real-render comparison against the town's r160). three has no dependencies and no install script. `@types/three`
  brings six packages for its types alone (fflate, @types/webxr, meshoptimizer, @types/stats.js, @tweenjs/tween.js,
  @dimforge/rapier3d-compat), none with an install script; nothing imports them, and meshoptimizer and rapier3d are
  WebAssembly, which the page's policy refuses. Upgrade three and its types together, as a task of its own.
- `playwright-core` 1.65.1 and `pngjs` 7.0.0, pinned exactly, dev dependencies (Dima, 18 Nov) for tools/world-check:
  no install script and no dependencies. playwright-core drives the installed Edge (`channel: 'msedge'`), no browser
  download.
- Vite 7 is one major behind on purpose. Upgrade as a separate task. Vitest is on 5.
- npm blocks dependency install scripts. `esbuild` is approved in `package.json` `allowScripts`. If a new
  package asks, review it and approve by name; never `npm install-scripts approve --all`.

## Layout

```
src/events/       Zod schema for OfficeEvent + parseEvent(): the gate every event passes
src/version.ts    the plugin's version from plugin.json (3.2d): the hall states it, the page's badge shows it
src/state/        office.ts: OfficeState, INITIAL_OFFICE, the pure officeReducer(), workingCount()
src/script/       demoRun.ts (the 9-step run as timed events, 8 s a step, 40 s in the Forge Keep), player.ts (play,
                  pause and restart on a timer)
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
                  message, the hall's start id after each replay; from 3.5c `replaying` starts a new batch: a switch back), useLiveHall.ts (status, office, the 5 s re-check in
                  Demo; another start id rebuilds from nothing and says "Hall restarted" until a run starts),
                  announce.ts (what the aria-live region says, cut at the last full sentence)
src/team/         v3.4c, the team editor: schema.ts (Zod: the change, the team view, the key; team.mjs's rules mirrored,
                  team-page.test.ts holds them in step), key.ts (takeKey(): #k= out of the address bar at once;
                  startTeamSession() in main.tsx, before React), api.ts (the calls), text.ts (checkText(): refusals as
                  team.mjs's, link and command-like flags), view.ts (v3.6: the Team page's words, search and form
                  refusals, tested in step with the schema and team.mjs). The Team page (v3.6, its own view: App hides
                  the hall view and keeps it mounted, so its connection carries on) is src/page/TeamPage.tsx (top bar,
                  search, tabs, status line with Undo), TeamSpecialists.tsx and TeamLibrary.tsx (v3.9: the Skills tab became the
                  Library; the project chip, the banner of a project with no team of its own, the empty panel, the
                  starter team and the copy, the old shared notes to review), TeamAddSkill.tsx (v3.10f: "+ Add a skill",
                  its four ways in and the one check screen) and TextLines.tsx (a text line by line with its flags)
server/           the v2 hall server, run with tsx: hall.ts (node:http: Host, Origin and token checks, POST
                  /api/handshake, POST /api/hook, POST /api/ledger (v3.2: the token ledger's total from ledger-post.mjs, kept in memory only and sent as a
                  named `ledger` SSE event after each replay, never in it), SSE /api/events with a 500-event replay ended by its start id
                  (from 3.5c the last 3 sessions' runs kept, one sent as `replaying` … `replayed` on a switch back),
                  /api/health, and from v3.4c the team editor: POST /api/key (hall-key.mjs, token, no Origin), POST
                  /api/session (the page's key, once, within 60 s, for a cookie), GET and POST /api/team (that cookie,
                  the page's exact Origin, the schema, a 64 KiB cap; writes through team.mjs only), and from v3.5b POST
                  /api/stop (hall-stop.mjs: token, no Origin, `{ "version" }` under 256 bytes; stops only for a newer
                  version than its own, after its 204) and the idle stop (`idleMs`: no hook event and no page for that
                  long); serves only the page
                  files it is given, by exact match; the handshake answer and /api/health state the plugin version, from
                  src/version.ts, 3.2d), keys.ts (the one-time keys and sessions, digests in memory only),
                  from v3.10 skill-check.ts (a SKILL.md from outside, read for the check screen), claude-skills.ts
                  (Dima's Claude skills under ~/.claude/skills, labels from the app's manifest) and github.ts (the
                  hall's one network call: one GET to raw.githubusercontent.com), behind POST /api/team/skill,
                  page.ts (PAGE_TYPES, listPage()
                  for dist/, readManifest() for the plugin's hall), serve.ts (binds 4319, writes the token, signals;
                  shutdown(): the token file first, then the port, then exit),
                  plugin-hall.ts (the plugin's hall: its page and manifest beside its own file, 30 idle minutes), hook-input.ts
                  (Zod schema of the fields send.mjs forwards), map.ts (pure mapHook(): one hook to
                  OfficeEvents, following the run table in docs/v2-brief.md), token.ts, main.ts (npm run hall).
                  csp.ts: the Content-Security-Policy, for the hall's header and the Pages build's meta tag.
                  quiet-logger.ts: hides the dev proxy's "no hall" error. fixtures/: the recorded runs' hooks, redacted
.claude-plugin/   marketplace.json: the repo is its own marketplace, listing the plugin from ./plugin
plugin/team/      v3.4: the team as data. team.mjs (the only writer of ~/.world-of-agents/team, a local plugin `woa-team`
                  loaded in place: its strict schema, the generator of agents/*.md and skills/*/SKILL.md, the refusal of a
                  skill line starting with !` and of invisible characters, init() and readTeam(); from v3.6 team.json is version 2,
                  with `preset` (reads, edits, edits-and-checks), `on` and `generator`, a version 1 file read through
                  upgrade(), at most 5 specialists a guild; from 3.6e every frontmatter value from the team's data is a
                  double-quoted YAML string, and readTexts() also reads generator 1's unquoted skill files),
                  defaults.json (the 8
                  specialists and 14 skills) and skills/*.md (their texts). skills/setup-team/ (team-setup.mjs) and
                  setup-team-write/: create it, never over one that is there, and from v3.6d refresh an older team's
                  generated files only (never a specialist, skill or text); tested in server/setup-team.test.ts
plugin/           the Claude Code plugin: .claude-plugin/plugin.json (no settings.json from v3.8: the project's setup
                  names the main agent), agents/
                  (the five agents' prompts and tools), hooks/hooks.json (an async send.mjs hook per event, and the guard),
                  hooks/send.mjs (allowlists and scrubs each payload, checks the hall with a handshake, then posts it with
                  the token), hooks/guard.mjs (the deny-only PreToolUse guard on Agent, Bash, PowerShell, Edit and Write: who may
                  start whom, no `model` in an Agent call, the .env rule, and from v3.3 the Lead edits BACKLOG.md alone, from 3.4f no write into agent memory), hooks/gate.mjs (v3.3: the quality gate on SubagentStop, opt-in per project through
                  env WOA_QUALITY_GATE; runs npm run check, sends a dev back at most 3 times, forwards those stops to the
                  hall with its verdict; --status answers by exit code), hooks/hall-check.mjs (send.mjs's handshake against 127.0.0.1:4319, answered
                  by exit code: 0 ours, 3 nothing listens, 4 anything else; with 0, the plugin version the hall states, one line of
                  digits and dots, 3.2d), hooks/hall-start.mjs (v3.5b: starts hall/server.mjs detached, hidden, silent,
                  with its own Node, then waits up to 5 s for the handshake; exit code only), hooks/hall-stop.mjs (v3.5b:
                  after the handshake, POST /api/stop with the token and its own version from plugin.json, then waits
                  for the port to be free; exit code only), hooks/ledger-post.mjs (v3.2: the ledger's
                  totals from stdin, checked to the exact shape, posted to /api/ledger after the handshake; prints nothing),
                  hooks/ledger-past.mjs (Recount, v3.2c, per session since 3.2d: every session's token counts from Claude
                  Code's transcripts, cache writes split 5-minute and 1-hour, printed as whole numbers only, on Dima's press),
                  hooks/hall-key.mjs (v3.4c: the editor's one-time key
                  from stdin to POST /api/key after the handshake; exit code only), hooks/team-log.mjs (v3.4c: the team's
                  change log, names only, as strict JSON), hooks/team-check.mjs (v3.6d: are the team's generated files
                  this plugin's? exit 0 yes or newer, 6 older, 4 no team; prints nothing), hooks/mod/ (the team pane, a mod named
                  under `modules` in hooks.json: register.tsx the hooks and the one $.state value, pane.tsx the drawing,
                  roster.ts, presets.ts, hall.ts (Node check, hall check and start), voice.ts (the voice: its fixed
                  command, the queue, what it may say), text.ts (plain(): agent text cleaned and capped), ledger.ts (v3.2: the token ledger: addTurn(),
                  readLedger(), recountOf() and recount() (3.2d), summarize(), the dated price table, the pane's "This PC"
                  line and scopeLine()), types.d.ts
                  the state contract that plugin.json names; *.test.tsx are kit tests), voice/speak.ps1 (the voice
                  script), hall/ (built by build:plugin-hall, tracked: page/, server.mjs, manifest.json, and from
                  v4.0.0 MODELS-LICENSE.md: the models it carries are Dima's, all rights reserved, never served),
                  skills/setup-project/ (SKILL.md: the dry run; template.json and setup.mjs: copy the fixed settings into
                  a project's .claude/settings.local.json; versions/: every earlier template.json, for the upgrade) and skills/setup-project-write/ (SKILL.md: the write); tested in
                  server/setup-skill.test.ts. skills/team/ (SKILL.md: /world-of-agents:team, which the mod answers). skills/setup-gates/ (gates.mjs and SKILL.md),
                  setup-gates-write/ and setup-gates-off/ (v3.3: the quality gates switch, env WOA_QUALITY_GATE; tested in
                  server/setup-gates.test.ts).
                  An install from GitHub is a copy in Claude Code's cache: nothing outside plugin/ comes with it
src/world/        v4.0.0, the Forge Keep in 3D (docs/v4.0-plan.md), ported from `town/` on `forge-keep`. models/: the
                  keep's GLB files (4a) and the cast's, each JPEG beside its character (4b), Dima's, all rights reserved
                  (docs/ASSETS.md); a texture's URL only from the bundle's own table (textureUrl()). map.ts: the town's
                  world.js (4a). scene/ (4a, three only, never React): the town's modules in its build order, which its
                  seeded random numbers depend on: kit.ts (renderer, materials, canvas textures), models.ts (fetch, unpack, kit
                  materials), props.ts, land.ts, houses.ts, areas.ts, scatter.ts, and world.ts (createWorld(): camera,
                  cutaway, lights, the passes, the loop); bloom.ts puts back r160's bloom; cast.ts (4b): the five
                  characters (fetchCast(), createCast(): sized to the town's rig heights, toon, clips, the seats with
                  two-bone IK, the Reviewer's lantern light on its root as in the town and its flame in the right hand,
                  groundAt()). places.ts (4b): where
                  the agents are, pure: START and IDLE_AREAS (never a work room or the Forge for idle), WORK, FETCH,
                  VISIT, CHECK, and placeFor(), the 2D hall's destinationFor() on the keep's spots with Dima's answers
                  (map.ts has 4b's seven spots after the town's 21). walkers.ts (4b): the 2D hall's walkers with the
                  town's turn mid-path at the 2.5x hurry, the 3 s desk hold and reduced motion's jump; world.ts's
                  update(office, live) and restart(), fed by WorldView. 4c: idle.ts (D9's idle activities on the
                  keep's idle spots, pure and seeded), idleRun.ts (the walkers' side: who moves on, never two on one
                  spot), clips.ts (the pose-to-clip table, SEATED, figureMode(): a needs-you figure's raised hand),
                  forge.ts (the furnace's colour and heat by working count), screens.ts (each lit screen at its
                  owner's work spot, and when it glows); all pure, read by scene/world.ts. check/: the
                  render check's page, dev server only (/src/world/check/index.html), never built. camera.ts: the
                  camera's limits and how it frames a room, as numbers. WorldView.tsx (4a): what App shows in the stage, the world where
                  `canDrawWorld()` (support.ts) finds WebGL 2, the 2D hall while it loads and in its place when it
                  can't draw, fails to load or loses its context for CONTEXT_GRACE_MS; scene/ comes in by a dynamic
                  import, its own chunk; from 4d it tells App its world (`onWorld`), which lays the HUD over it
src/hud/          v4.0.0, 4d: the HUD over the Forge Keep (docs/v4-build-plan.md, the approved mockup in words). TopBar
                  (title, chips, the run line and tiles or the demo's task input, the icon buttons, Play demo, Team, and
                  under 70rem the Rooms menu button), HudStatus (the status line), NeedsYou (the banner, Show me),
                  RoomsRail (+ rooms.ts: who is in which room, pure), AgentList (+ agents.ts: an agent in words),
                  AgentCard (AgentPanel without its portrait, Follow, Show in Activity), Drawer (+ drawerChoice.ts: the
                  viewer's last choice in localStorage, every access in a try/catch), WorldLabels (+ labels.ts: the name
                  tags and bubbles over the canvas, moved each frame), useBox (an element's size), contrast.test.ts
tools/models/     what makes the models: blender/ (the jobs, woa_kit.py, and woa_watch.py, the runner, which from 4a runs
                  only the jobs beside it by their SHA-256), slim_chars.py, to_gltf_json.py and pack_gltf.py (Python:
                  Blender's own, which has numpy, since none is on PATH) and to-glb.mjs (the GLB the page loads: every
                  buffer in its binary chunk, an image a file beside it); README.md has the pipeline
tools/world-check/ the world's checks in real Edge, by hand, never in npm run check (README.md has the commands):
                  render.mjs and compare.mjs (the render comparison against the town), policy.mjs, serve.ts and
                  models-page.mjs (what the page's policy refuses), frames.mjs (a frame's time), town.mjs (the
                  town's test copy), seats.mjs (every figure on every seat, against the town's rule), spots.mjs
                  (every standing spot and its walk on clear floor), walk.mjs (the demo run played into the world:
                  every figure at its place, no walk over furniture), cast/ (the cast comparison's placements and views)
tests/            global-setup.ts and sweep-temp.ts: before every Vitest run, our temp folders a killed run left
                  under os.tmpdir() ("woa-", "woa " and Playwright's profiles), older than an hour, never a link.
                  invisible.test.ts: no bidi controls, zero-width characters or U+FEFF in any file git tracks or would add.
                  models.test.ts (4a): every model in src/world/models is a GLB with no decoder's extension, no data:
                  buffer and no packed image, under the budget (16 MB of files, 9 MB compressed, a character 2 MB with
                  its texture) and listed in docs/ASSETS.md with its author, a Tripo character with its ProduceID.
                  assets.test.ts (4f.1): every GLB and JPEG git knows of is a model of src/world/models listed in
                  docs/ASSETS.md with its author, or the bundled hall's copy of one, byte for byte; a model with
                  Tripo's label has its ProduceID in its row.
                  dev-refresh.test.ts: npm run dev:refresh on temp folders.
                  blender-runner.test.ts: tools/models/blender read as text: the runner names the models folder once
                  (HOME) and hands it to each job as WOA_HOME; no job or the kit names a folder of its own.
                  tests/plugin/: Vitest tests of the plugin's scripts (send, handshake, guard, guard-woa-folder: no edit
                  into ~/.world-of-agents, guard-backlog and its mock
                  twin: BACKLOG.md on disk, agent-prompts: the check in the prompts, hall-check, run-directly:
                  every script's run check) and the mod's
                  source check (mod.test.ts). They live outside plugin/ because `claude plugin test plugin` runs every
                  test file under it
scripts/          types-update.mjs (npm run types:update), mod-surface.mjs + mod-surface.json (the mod's expected surface),
                  build-plugin-hall.ts (build:plugin-hall and, with --check, check:hall; run with tsx) and
                  models-notice.ts (the MODELS-LICENSE.md it writes beside the models, naming each),
                  dev-refresh.mjs (dev:refresh: copies new and changed files, deletes the ones plugin/ no longer has,
                  never deletes a folder, refuses a target outside D:\Dev\sandboxes\woa-dev and any link)
tools/claude-code-types/  index.d.ts: the engine's mods API types (`claude-code`, `claude-code/testing`) for one Claude
                  Code version, generated, -diff in .gitattributes. tsconfig.mod.json type-checks the mod against it
bin/              woa: the launcher, bash for Git Bash (finds the repo from its own location). woa.test.ts runs it
                  with a fake claude
.github/workflows/ pages.yml: builds the demo and hosts it on GitHub Pages
docs/             v3-brief.md (the v3 plan and milestones), v3-spike.md (milestone 1's findings: what the desktop app and mods
                  really do), v3-m2-plan.md (milestone 2 in parts), v3.1-plan.md (v3.1.0, better reviews: parts 3.1a to 3.1e),
                  v3.2-plan.md (v3.2.0, the token ledger; L7, the backfill, waits for Dima), v3.5-plan.md (v3.5.0, the hall and the rules),
                  v3.6-plan.md (v3.6.0, the team editor: waits for Dima's mockup), v3.7-plan.md (v3.7.0, memory with
                  approval: a design, a spike first), v3.8-plan.md (v3.8.0, template 4: the project names the Lead;
                  the probe's results), and plans only, waiting for Dima (16 Nov): v3.9-plan.md (a team per project,
                  one skill library), v3.10-plan.md (adding skills three ways, the hall's one network call),
                  v3.11-plan.md (the rest of the page on the Team page's tokens; folded into v4.0, kept as history),
                  v4.0-plan.md (the Forge Keep in 3D: waits for Dima's review), step3-brief.md (v1 step 3 brief), v2-brief.md (the v2 plan, run
                  table and security controls), v2-hooks.md (real hook payload fields and what send.mjs forwards), media/ (the README's
                  screenshot and GIF, from a replay of run 3's redacted fixtures), release-notes/ (v3.0.0.md, v3.0.1.md: each
                  GitHub release's text, written before the tag), ASSETS.md (v4's models: Dima's, all rights reserved,
                  not under the MIT licence, which covers the code only; never relicense them)
```

## How the hall is drawn

This is the 2D hall. From v4.0.0 (4a) the stage shows the 3D Forge Keep (`src/world/`, docs/v4.0-plan.md) wherever
WebGL 2 is, and the 2D hall is frozen as its fallback: it keeps working and keeps its tests, but new world features
aren't drawn in it (Dima, 17 Nov). jsdom has no WebGL, so every test of the page runs on the 2D hall, except the HUD's,
which mock the world (`src/test/fakeWorld.ts`: a fake world, and `stubLayout()` for sizes, an observer and width media
queries).

**The HUD (4d)** is the page while the world is on screen; while it loads and whenever the 2D hall draws, the page keeps
the layout below. App keeps three slots in both (above the stage, the stage, below it), so a switch never mounts the
world again, and their order is the HUD's tab order: top bar, status or banner, rooms, the world, agents, card, drawer.
Its rules: only the `--ui-*` tokens and Inter (the name tags in the signs' rounded face, its one file), solid panels,
sizes in rem and nothing under 13 px, focus always visible; `src/hud/contrast.test.ts` holds text to 4.5:1 and the focus
ring and meaningful borders to 3:1 on every ground, and no HUD rule may name a colour of its own (the panel shadow and
the tag border aside). The labels over the canvas are `aria-hidden`: the agent list says everything a tag does, and the
live region what a bubble must not miss. Bubbles follow the 2D hall's `talk.ts` rules, their time running only while
they show (not while the agent walks or is off the view), agent text through `AgentText`. The world tells the page
of a hand move, a click on a figure and the heads each frame (one listener each, the page's); the page tells it where
to fly, whom to follow and whether to cut away. Esc closes the review board, the rooms menu, the card, then the
drawer, the focus going back each time.

**What the keep shows (4c)**, beside where the agents are (4b): resting agents live on the keep's idle spots, never a
work room or the Forge (`src/world/idle.ts`, a fixed seed), a work event pulling them away at once; idle agents standing
together trade our own small talk (`src/hud/smallTalk.ts`, never agent output); the furnace takes the 2D hall's three
mouth colours by working count; a raised hand or a "!" over the tag of an agent that needs you or failed; each of the
two screens glows only while its owner works at it. Reduced motion: no wandering, no idle clip, no flicker, sparks or
bob; the furnace's colour still changes.

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
  reads the stylesheet and checks all of this. The Team page (v3.6) is Inter (`@fontsource-variable/inter`, self-hosted)
  in the token set (`--ui-*` on `:root`), 14 px base, never Pixelify; the rest of the page moves to the tokens after
  v3.7 (docs/v3.6-plan.md, Backlog). `.app[hidden]` needs its own `display: none`: `.app`'s flex beats the attribute.
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

Do not change the look without asking. New ideas go into a later version. Lifted for one direction only (Dima, 15 Nov):
the modern UI for everything you work in (the Team page now, the rest of the page after v3.7) and, as its own milestone
after v3.7, a more detailed pixel-art hall and agents (docs/v3.6-plan.md, Backlog). Still ask before each look change.

- **Forge Hall rooms**: Lead/PM room (wall dashboard, war map, Lead's desk on a red rug), great hall in the
  middle (entrance gate with the "You" sign, red carpet, skull-topped pillars, furnace = busy indicator),
  rest room (fireplace, tavern table, fur rug), dev room (Designer, Frontend dev, Backend dev) with the
  Reviewer's library nook in the corner.
- **Cast** (agent names never change): Lead/PM = goblin strategist (smallest); Designer = elf artisan;
  Frontend dev = orc with two huge swords; Backend dev = orc with a huge forge hammer (orcs are the biggest);
  Reviewer = skeleton scholar with spectacles and a candle. That is the 2D hall's cast. The Forge Keep's (v4.0.0, 4b,
  the Tripo models as made, no chibi; docs/ASSETS.md): Lead/PM = goblin, the smallest (1.32 m); Designer = elf
  (1.78 m); Frontend dev = female orc (1.92 m); Reviewer = reaper (1.95 m); Backend dev = male orc, the biggest
  (2.18 m), so the Frontend dev is just under the Reviewer.
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
  model or tools in both `plugin/agents/*.md` and `roster.ts`: `roster.test.ts` fails if they differ, and checks
  every agent has a bare `Agent` and the guard's main row is the other four. In a subagent's file an `Agent(...)` list
  is ignored (the v3 spike saw one start an agent its list doesn't name), and on the main thread it becomes the whole
  session's list, which nested agents inherit (3.4f, Claude Code 2.1.319: the guild leads saw only the Lead's four and
  could never start a specialist; Dima chose a bare `Agent` for the Lead; the engine has no pattern for
  such a list, as its listing and spawn check compare exact names). So no agent file has one, and who may start
  whom belongs in the guard hook alone.
- `bin/woa` always passes `--permission-mode default` and unsets `WOA_CAPTURE`, so normal use never saves raw payloads.
  From v3.8.0 it sets `CLAUDE_CODE_MAX_SUBAGENT_SPAWN_DEPTH=2`, the template's value (`woa.test.ts` holds them together):
  it had 1 from v2, and at 1 Claude Code takes the Agent tool from every subagent (a Haiku probe, 16 Nov: an agent whose
  only tool is Agent is refused, "would be spawned with zero tools"), so under `woa` no specialist could start.
  It has no hardcoded paths. Captures use plain `claude`: see Still to capture in docs/v2-hooks.md.
- Enable the plugin per project: local scope (`--scope local`, `.claude/settings.local.json`, which git ignores), or
  project scope to share it. Never user scope: the plugin's hooks would run in every session everywhere, each would
  report to the hall, and the guard would let no main thread but the Lead start an agent or edit a file. Until v3.7 the
  plugin's own `settings.json` also made every such session the Lead; from v3.8 (template 4, Dima, 16 Nov) the project's
  setup writes `"agent": "world-of-agents:lead"` instead, because Claude Code 2.1.325 warns that a plugin setting the
  session's agent will stop working, and `woa` passes `--agent`. Probed on 2.1.325 with the desktop app's own setting
  sources (docs/v3.8-plan.md): the project's `agent` makes the Lead main in a git repository and without git; with the
  plugin switched off or uninstalled the session starts as plain Claude Code (a debug line, "agent … not found … Using
  default behavior"); a user-scope install leaves every session plain Claude Code. The desktop app's Plugins screen
  asks for no scope and installs at user scope (twice on 11 Nov, app 5.1231), so installs go through
  `claude plugin install … --scope local`, checked with `claude plugin list`. Its switch under Customize, then Plugins,
  writes the settings file the screen's level names, the user's when it names none (app code, 5.1231.2); for a local
  install it wrote the project's `settings.local.json` (desktop check, 11 Nov), so it is per project there, like
  `claude plugin disable … --scope local`. An installed plugin can't set a
  permission mode or an environment variable, but a project's `.claude/settings.local.json` can, and the desktop app
  applies both (v3 spike), the mode only until one is picked for that folder in the app: from then on new sessions start
  in the folder's last pick, over the file (its log says `source=folder_pick`; seen 8 Nov). So far it took the file's
  mode only in a git repository; a folder without git got the user settings' mode (11 Nov; the brief has what that
  proves and what it doesn't). On 17 Nov (v3.10.0, git repositories) sessions right after the setup still got the user
  settings' mode (`source=settings_default_mode`): the app reads the project's settings when it checks the folder
  (`checkTrust`, `sources=0` before the setup, `sources=1` after), and only sessions after a new check took the file's
  (`repo_settings_default_mode`); so the 11 Nov no-git result may be that too, untested. Until the milestone 2 setup
  skill writes that file, only `woa` forces Manual and
  `CLAUDE_CODE_MAX_SUBAGENT_SPAWN_DEPTH`.
- From v3.3 `gate.mjs` answers too, and only at `SubagentStop`: a block (the dev goes back to fix a failing
  `npm run check`) or nothing. It runs only where the project's settings set `env.WOA_QUALITY_GATE` to "1" (written by
  `/world-of-agents:setup-gates-write`, a fixed injected command only Dima starts), only for the Designer and the two devs,
  only `npm run check`, only in a project with that script, at most 3 retries per run. Not async, timeout 600, and never
  `onFailure: block`: a gate that breaks lets the agent stop. With gates on it forwards those stops to the hall with its
  verdict and `send.mjs` skips them. The pane learns gates are on from `gate.mjs --status`'s exit code, never from env.
  A gate that passes says nothing, so (v3.3 review) the Frontend and Backend devs run `npm run check` themselves as their
  last step (pre-approved by the setup) and report what they saw (3.3d, Dima): `npm run check: passed` when it ends
  without an error, `npm run check: failed (exit N)` only with an exit code Claude Code showed, never a second command to
  read one (it asks for approval) and never a number they didn't see, and they run it exactly, as one command on its own,
  nothing added (no `--prefix`, 3.4f) and never chained, so the setup's `Bash(npm run check)` covers it; they run tests
  only as `npm test` or `npm run check`, exactly, never the runner itself or with output cut (3.4g: the React dev's
  `node --test 2>&1 | tail -15` asked Dima); from 3.5d they and every specialist with a shell run the check always, even
  for a small change and even when someone runs it after them (the React dev skipped it), and never `cd` first or chain
  anything: commands already run in the project folder (the Frontend dev's `cd <project> && npm run check`, 14 Nov;
  a real run on 15 Nov saw both run exactly `npm run check`, the React dev as its last step); they change only the files their task names, prove a
  test can fail with a temporary copy or a fixture, and leave no backup copies (Dima's desktop run, 14 Nov); the Designer runs no commands and says so; the Lead
  passes on what they reported ("checked, passed"); from 3.7e a guild lead never tells a specialist to skip its own check
  (the Frontend dev did, and the Form builder obeyed). The gate stays the enforcer. `tests/plugin/agent-prompts.test.ts` pins those lines.
- From v3.3 the guard also sees `Edit` and `Write`: the Lead (main thread, `world-of-agents:lead`) may edit only
  `BACKLOG.md` directly in its `cwd` (exact match, no `.` or `..` segment, case-blind on Windows only), and only when that
  file is missing or a plain file with one name (v3.3 review: `lstat`, never through a link; a symbolic link, a junction,
  a folder or a hard link could carry the write to `.claude/settings.local.json`; any error but ENOENT denies); the
  Designer and
  the two devs get no answer (their own permission prompts decide); anyone else is denied. The Lead's tools are
  `Agent` (bare since 3.4f), Read, Grep, Glob, Edit, Write, EnterPlanMode and ExitPlanMode: it plans a milestone once in plan mode and
  keeps `BACKLOG.md`, and still writes no code.
- `guard.mjs` is the one hook that answers a tool call, and it only denies: a test runs it over every input and fails on
  any answer but a deny, and another fails on any decision but `deny` in its code. Never make it allow (allow skips the
  permission prompt) and never make it async (an async hook can't block). It fails closed: an unknown caller, an agent type
  not in `MAY_START`, input it can't read, or any error is a deny, and `"onFailure": "block"` makes a crash or a timeout
  block too. The main thread's row (`main`, the Lead) and subagent rows (`subagents`, by `agent_type`) are kept apart so
  no agent type can name the Lead's row. A main thread that isn't the Lead, which from v3.8 means a project whose setup
  isn't written yet, is denied Agent, Edit and Write with its own reason (`REASONS.main`, naming the setup; Dima's update
  from v3.7 lands there until he runs it). `MAY_START.main` must be the roster's other four (`roster.test.ts`): since 3.4f the Lead's
  `Agent` is bare, so the guard is its only limit. The guild leads have a bare `Agent` tool (v3.4), held to their
  specialists by the guard.
  It denies any Agent call that sets `model` (v3.1, D3): the tool's `model` takes precedence over an agent file's, so the
  agent file's model always wins. It denies `isolation` other than none or `"worktree"` (v3.1 review): `"remote"` runs
  the agent off this PC, out of reach of the hooks and the hall, and an unknown value is denied like `model`. The `.env`
  rule is best effort; don't sell it as more. Its imports are `node:fs` and `node:url` (for `runAsScript()` and, from
  v3.3, the `lstat` of BACKLOG.md) and from v3.4 `plugin/team/team.mjs`. From v3.9 its `projectTeamOf()` reads the
  team of the session's project, `~/.world-of-agents/projects/<key>/team/team.json`, through the strict schema, the
  project being `CLAUDE_PROJECT_DIR`, the one environment variable the guard reads (a test pins that), never the hook's
  `cwd`, which is a worktree's for an agent in one (3.9a). The shared team of v3.4 to v3.8 is never read for rows: a
  project with no team of its own yet keeps its guild leads, and their specialist starts are denied with
  `REASONS.noTeam`, naming `/world-of-agents:setup-team-write` and the pane's button (Dima, 16 Nov); a broken project
  team has `REASONS.broken`; a PC with no team at all (no library, no projects, no shared team) denies every start,
  the Lead's included, with `REASONS.team`, as before. The guild
  leads' rows come from it (each may start its guild's `woa-team:<guild>-<name>` specialists; specialists start nobody;
  from v3.6 one switched off, `on: false`, is denied with its own reason, its agent file left as it is, so the guard is
  the lock and a switch counts at once; from 3.6f a subagent may run Bash or PowerShell only when its role has a shell,
  `SHELLS` (the two devs) or an `edits-and-checks` specialist, any other subagent or unknown type denied with its own
  reason, the main thread unchanged, since the user's own `!` commands never reach `PreToolUse`, checked on 2.1.319).
  A shell command that names `.world-of-agents` is denied too (best effort). Edit and
  Write into `~/.world-of-agents` are denied for every caller, with or without the setup (v3.4 review, `inWoaFolder()`):
  by the path as written (a leading `~` is home, `.` and `..` resolved against the call's cwd, a Windows `\\?\` prefix
  dropped, case-blind on Windows) and by where it lands (the deepest existing part through `realpathSync.native`, so a
  junction, a link or an 8.3 short name such as `WORLD-~1` that leads in is caught too; this PC keeps short names). The
  template's denies stay as a second layer. Agent memory is off (3.4f, Dima, 14 Nov: notes an agent writes unasked are
  a place where a hijacked agent plants instructions it reads again next session): no agent file sets `memory`
  (`agent-prompts.test.ts`, `team.test.ts`), and an Edit or Write into any of the three agent memory folders,
  `.claude/agent-memory-local`, `.claude/agent-memory` or `~/.claude/agent-memory`, is denied for every caller with its own reason,
  "agent memory is off" (`inAgentMemory()`: a `.claude` folder, then one of the two names, by the path as written, `.`
  and `..` resolved, case-blind on Windows; nothing loads from there, so it is for a true reason, not a lock). No network, no writes, no file content read. Failing closed means a missing
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
  It manages `permissions`, its own env keys and from template 4 (v3.8) `agent`, and when they are already there it
  compares them itself; an `agent` of the user's own stops it, and a version 3 file whose `agent` is already the Lead
  (set by hand, as Claude Code's warning suggests) still counts as version 3. A rule in
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
  and `type` in PowerShell. The guard's `.env` rule matches `.envrc` too. From template 4 it has no `Write(...)` rule:
  Claude Code 2.1.325 warns that file permission checks match only `Edit(path)` rules, and a real run (v3.8) saw
  `Edit(~/.world-of-agents/**)` alone stop the Write tool there ("File is in a directory that is denied by your
  permission settings"), with a write beside it going through.
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
  120 code points; never `Markdown`. Two `Link`s only: the hall, exactly `http://localhost:4319`, and (v3.4c, T8) the team editor's,
  `http://localhost:4319/#k=<key>`, shown for 60 s after Dima presses "Open Team page" ("Change skills" until 3.6e). The
  key is 32 bytes from the
  engine's `crypto.getRandomValues`, kept in a module variable of register.tsx only, never in `$.state` or `$.store`, and
  sent only on hall-key.mjs's stdin. `tests/plugin/mod.test.ts`
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
  `node <plugin>/hooks/hall-check.mjs`, from v3.5b `node <plugin>/hooks/hall-start.mjs` (which starts
  `<plugin>/hall/server.mjs` detached with its own Node, cwd `<plugin>/hall`: `detached`, `windowsHide`, `stdio: 'ignore'`,
  no shell, then waits for the handshake) and `node <plugin>/hooks/hall-stop.mjs`, the voice, and from v3.2
  `node <plugin>/hooks/ledger-post.mjs`, whose `stdin` is the ledger's totals (numbers the mod built from the engine's
  counts, never text), run whenever the hall becomes `running` (3.2d: a hall the mod started itself answered after session
  start's push, and showed no total until the Lead's next answer) and after each of the Lead's turns while it is, and from
  v3.2c `node <plugin>/hooks/ledger-past.mjs`, with nothing on stdin since 3.2d, run only on Dima's press, and from v3.4c `node <plugin>/hooks/hall-key.mjs` (stdin `{"key"}`, from v3.9 `{"key", "project"}`, on the press of "Open Team page") and
  `node <plugin>/hooks/team-log.mjs` (no input until v3.9, then `{"project"}`; whenever the hall becomes `running`, after the Lead's turns while it is, and every
  20 s for ten minutes after a key), and from v3.6d `node <plugin>/hooks/team-check.mjs` (no input until v3.9, then `{"project"}`, at
  session start, its exit code only: the pane says "This project's specialist files are from an older plugin." on 6, and
  from v3.9 "This project has no team of its own yet…" on 4, its Team button then "Give this project its own team"). v3.9:
  the project is `$.session.cwd()`, the session's folder from the engine (3.9a: the same as `CLAUDE_PROJECT_DIR`, which the
  mod's processes don't get), the one new call on `$` (`mod-surface.json`). A
  `node.exe` planted in a project is never run: `$.process.run` refuses a command found only in the working folder
  ("unsafe location (current directory)"), and the hook runner looks on PATH only, with Node installed or not (both
  checked on 2.1.318, 8 Nov, with a copy of hostname.exe as the planted file). The plugin's folder as cwd is a second
  lock on that. No shell, no `-Command`, no argument, `env` or text from an agent, a file, the page or the environment;
  the kit tests pin each argv and cwd, and `mod.test.ts` pins where `process.run`, `process.spawn` and `input` appear.
  Nothing a child prints is shown or kept, with four exceptions, each checked to the character: the digits of
  `node --version`, the version hall-check.mjs prints for our hall through `hallVersionOf()` (3.2d),
  ledger-past.mjs's recount of whole numbers through `recountOf()` (v3.2c, L7, Dima's decision), and
  team-log.mjs's change log through `changesOf()` (v3.4c: time, a fixed kind, and names that pass team.mjs's name rule,
  the newest five shown; Dima's T8 asked for a line per change); `mod.test.ts` pins `.stdout` to those four lines. The
  only long-lived child is the voice (`process.spawn` in voice.ts alone, since v3.5b); the mod ends no process by its id
  (`mod.test.ts`). The hall check still goes through the session's `$`, never a turn's: a run dies with the dispatch it
  was started in when that is abandoned, and an interrupted turn abandons its own. `claude plugin validate`
  refuses a `$` kept in a variable, so register.tsx keeps a closure made in `session.start` instead.
- "Is the hall up?" is `hall-check.mjs`: send.mjs's own handshake (no redirect, capped answer, `timingSafeEqual`), never
  a 200 from `/api/health`. 0 is ours; 3 is a refused connection; 4 is anything else (no token file, a wrong or late
  answer, a redirect, a closed connection). Only 0 shows "Open hall", and since 3.2d only when the hall states this
  plugin's version (`PLUGIN_VERSION` in `hall.ts`, which `mod.test.ts` holds to plugin.json's): two installs on one PC
  share one token file, so another install's hall passes the handshake. That one is `other-version`, no link, no
  ledger. From v3.5b (H2, H6): an older hall from 3.5.0 on (`stoppable()`) is asked to stop through hall-stop.mjs, then
  the port is checked again and ours started if it is free; if it is still there, "An older hall (vX) is running. Your
  next message replaces it." A hall before 3.5.0, or one that states no version, keeps today's line, "An older hall (vX)
  is running. Close your other sessions, here and in other projects." ("before v3.2.0" when it states none), and nothing
  is started or stopped: such a hall lives with the session that started it, which can be another one in this very
  project still on the version it loaded (3.4h). A newer hall is never stopped from here: "A newer hall (vX) is running.
  Update World of Agents in this project to use it." `keepHall()` and `otherHallLine()` take the pane's own version so
  the kit tests can play a later one; no version this plugin can meet yet is older and from 3.5.0 on.
  askHall() in send.mjs takes the version only beside an answer that proves the token, and only as digits and dots.
  4 shows "Port 4319 is used by another program." and starts and stops nothing. A start happens only on 3, one check at
  a time, and hall-start.mjs waits for the handshake inside that check; checks run at
  session start and at each of the Lead's turns, never a subagent's. A hall that loses the race for the port exits 0
  without a word and writes no token (checked by hand with a hall on 4319; `install.test.ts` pins the line).
- The plugin's hall (`plugin/hall/`, written by `npm run build:plugin-hall`, tracked) finds its page with
  `import.meta.dirname` only and serves only what `manifest.json` names, by exact match: the URL is looked up, never
  decoded or joined into a path. `readManifest()` refuses any path with a dot segment, a backslash or an odd character, and
  any type its extension isn't served as, so a changed manifest stops the hall from starting. It prints at most two fixed
  lines, never hook or agent text, and keeps every v2 control. Two builds in a row are byte-identical (checked for 2c),
  and `npm run check:hall` must pass before any release (`npm run release:check`). The build forces `VITE_LIVE=true`.
  It is one bundle, so `import.meta.dirname` in any module it holds is `plugin/hall`: from 3.9f its start names the
  plugin team folder beside it (`teamFiles`, `plugin-hall.ts`), where the starter team is (`defaults()`); tests of the
  source alone missed that, so `install.test.ts` pins it in the bundle.
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
- The team editor (v3.4c, T8, Dima's decision) is the one way the hall's page writes anything. From v3.9 a key comes with
  the folder of the pane's session, and its session cookie stays bound to that project (`keys.ts` `projectOf()`): the page
  reads and changes that project's team, its notes and the PC's library, and nothing it sends can name another project
  (`copy-from` only reads one). A stop carries its project's key (`send.mjs`, `CLAUDE_PROJECT_DIR`, the folder name and a
  hash, never the path), so a proposed note shows only on its own project's page and only that session may approve it.
  What it writes: skills (add, change,
  delete, give, take; at most 5 per specialist, and from v3.10 at most 40,000 characters together, each text up to 20,000
  and each description one printable line up to 1,024) and from v3.6 specialists (add, change, delete, switch: `team.mjs` makes a
  new one's id from its guild and name, which never change after; role, preset and skills change; at most 5 a guild; no
  shell in the Design guild). A write needs the session cookie, which only
  a one-time key buys: made by the mod, handed to the hall only on hall-key.mjs's stdin and through the token-checked
  `POST /api/key`, carried in the link after a `#`, taken out of the address bar before React renders, and exchanged once,
  within 60 s (`server/keys.ts`: digests only, the newest 10 keys and 5 sessions, in memory). The cookie is HttpOnly,
  SameSite=Strict, `Path=/api/team`. Every write also needs the page's exact Origin (`http://` + its Host), JSON, the
  64 KiB cap and `teamChangeSchema`; then `team.mjs`'s `applyChange()` and `writeTeam()` check it again and write only in
  the team folder, `changes.json` included. It never starts a run. A used key says "This link was already used. Open the
  hall again from the pane." (Dima's words). What the panel shows of the team is text; the preview shows a skill whole,
  flags links and command-like lines, and refuses what `textProblem()` refuses. Known limit, in the README: the link is
  briefly visible in the browser's command line when the desktop app opens it. Anything that can read the hall's token
  can also mint a key, the same as it could post hooks; the guard and the template keep agents away from that folder.
- From v3.10 the team editor also reads skills from outside, with the same controls (the page's exact Origin, the session
  cookie, JSON, a cap, `skillAskSchema`). `POST /api/team/skill` writes nothing: it lists Dima's Claude skills, or reads
  one SKILL.md for the check screen, pasted (128 KiB at most), one of his Claude skills (`claude-skills.ts`: only files
  named SKILL.md, at most three folders down under `~/.claude/skills`, every part lstat'ed and a link or junction left
  out, its real path inside, 64 KiB each and 200 in all; the desktop app's manifest read for labels only), or from GitHub.
  The hall keeps each check in memory, the newest 10, bound to its project. `take-skill` and `update-skill` in
  `POST /api/team` name a check by its id, once; what is saved is the hall's copy and the source it found, never the
  page's; a check with a refusal is never taken; an update needs a GitHub check of the skill's own owner, repository, ref
  and path. GitHub is the hall's one network call: `fetchSkill()` in `github.ts`, one GET to `raw.githubusercontent.com`,
  a constant, built from a link's parsed parts (three shapes; every part through team.mjs's segment rules), no redirect
  followed, 10 s, the answer cut at 128 KiB as it arrives, no cookie, no token, User-Agent `World-of-Agents-hall`.
  `skill-api.test.ts` pins that Node's `fetch` appears in `github.ts` alone and that nothing in `server/` opens a
  connection of its own; `install.test.ts` pins one `fetch` in the bundle. The page's `connect-src 'self'` is unchanged.
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
- When a guard, a hook or a permission rule blocks Claude, it stops and tells Dima what is blocking. It never turns the
  plugin, a hook or a setting off to get past it, by any route: a settings file, the CLI or a command (Dima, 18 Nov).
  The case: on 18 Nov World of Agents (3.10.0 from GitHub) was on at local scope in this repo itself, then at
  Downloads\agent-office, and in a new session its guard denied every Edit and Write, since plain Claude isn't the Lead.
  Claude asked, and on Dima's answer ran `claude plugin disable world-of-agents@world-of-agents --scope local`; from now
  on it stops and says what blocks, and the switch is Dima's. World of Agents stays off in this repo (the switch is in its
  `.claude/settings.local.json`, which moved with it to D:\Dev\projects\personal\world-of-agents on 18 Nov): it is where
  plain Claude develops it, and since v3.8 the guard denies any main session that isn't the Lead.

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
- A test's temp folder starts "woa-" or "woa " and is removed in its own cleanup. One a killed run leaves goes in the
  next run's sweep (`tests/sweep-temp.ts`, once it is an hour old), and so does an Edge profile a browser check leaves:
  those scripts close the browser in `finally`.
- jsdom has no canvas: `src/test/setup.ts` mocks `getContext` to return null; drawing code must handle that.
- A fake stream or server in a test is bounded: it sends a fixed amount (twice a cap at most), then closes, and waits a
  turn between pieces. On 16 Nov `github.test.ts`'s endless stream, with the size cap planted out, held the PC's memory
  until VS Code died, twice: a stream that answers at once is read in microtasks alone, so no timer runs, Vitest's own
  timeout included, and `Uint8Array` pieces live outside the V8 heap, so `--max-old-space-size` doesn't stop them (both
  checked). A failing size check says one short line, never the body.
- Planted bugs (Dima, 16 Nov) go in a throwaway git worktree (`D:\Dev\scratch\woa-plant`, the uncommitted files copied in,
  `node_modules` a junction), never in the working tree, so a crash leaves nothing behind there. Each run has a hard
  timeout that ends the whole process tree (`taskkill /T /F`) and a 512 MB heap through `NODE_OPTIONS`. A run that dies,
  times out, prints no summary, reports fewer results than it has tests, or has unhandled errors is FAILED, never caught.
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
- Desktop checks of the working copy use a dev install: `D:\Dev\sandboxes\woa-dev\` is a folder marketplace (`woa-dev`) holding a
  copy of `plugin/`, installed at local scope in `D:\Dev\sandboxes\woa-m2-test\`. Claude Code refuses a junction or symlink there
  (a link-traversing entry), so refresh the copy after each change with `npm run dev:refresh`, then run
  `/reload-plugins` in the desktop session. Not `rm -rf … && cp -r …`: a hall started from the dev install stands in
  `woa-dev/plugin/hall`, Windows won't remove that folder, and the copy then lands in a nested `plugin/plugin/`.
  `/reload-plugins` reloads the mod only when its own files changed, so after a change to `server/` or the page alone
  the old hall keeps running, old build and all, and the pane calls it running (same version): stop it first, as each
  checklist's step 1 does (3.4h; it served v3.4.0's first test the old code). From v3.5b the hall outlives every
  session and reload until it has been idle for 30 minutes, so this holds after any change: stop it by hand.
- The hall's start, end to end, without port 4319 (3.5b): copy `plugin/` to a throwaway folder, replace 4319 with
  another port in every file of the copy (11 files), shorten `HALL_IDLE_MS` in its `hall/server.mjs`, and run
  `claude -p` with no login and `--plugin-dir` on the copy, with `CLAUDE_CONFIG_DIR`, `HOME` and `USERPROFILE` in temp
  folders: the mod's `session.start` starts the hall through hall-start.mjs. `IsProcessInJob` (kernel32, from PowerShell)
  tells whether a process is in a job; on this PC VS Code, its terminals and the desktop app all are.
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
   that a new, cleared or resumed session switches it, and from 3.4g so does a prompt typed in another session (never a
   frame): the session you type into is the one you watch. From 3.5c it keeps the runs of the last 3 sessions (the one it
   follows included, 500 events each, memory only): going back to one sends `replaying`, its run as it stood, then
   `replayed` with the same start id, and a kept session's own hooks keep its run up to date. A resume of the session it already follows keeps the run
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
   each part: `npm run check` from `D:\`, `check:hall` when the hall changes, planted bugs for the new logic, and this
   status. Each version gets a desktop checklist for Dima in docs/release-notes/<version>-check.md. Real model runs only
   where nothing else can prove a fact, tiny, in throwaway folders under D:\Dev\scratch\woa-*, deleted after use.
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
   v3.2.0 is released (14 Nov, after Dima's re-check): tag `v3.2.0` on `62124fa`, main fast-forwarded to it, the GitHub
   release from docs/release-notes/v3.2.0.md. His re-check's one note, free port 4319 before step 9, is in the checklist.
   v3.3.0 (docs/v3.3-plan.md): 3.3a done (the quality gate, its switch skills, the hall's gate verdicts, the pane's gate
   lines; three real runs: the send-back loop and the pass path work, an agent fixing from the gate's output not seen).
   3.3b done (BACKLOG.md and plan once, approve once: the Lead
   has Edit, Write, EnterPlanMode and ExitPlanMode; the guard denies the Lead any edit but BACKLOG.md). 3.3c done (the
   review's fixes, 12 Nov: the guard lstats BACKLOG.md and denies a link, a junction, a folder or a second name; the two
   devs run npm run check last and report its exit code; G11 is "not now", in the plan's backlog). 3.3d done (14 Nov,
   Dima's decision after a real run: Claude Code shows no exit code on a pass, so the devs report "npm run check: passed",
   or "failed (exit N)" with a code they saw, and never run a command just to read one; the Lead says "checked, passed";
   and a card whose gate failed stays open when the Lead's Agent call comes back "completed"). The v3.3.0 checklist
   is docs/release-notes/v3.3.0-check.md. v3.3.0 is released (14 Nov, after Dima's desktop run): tag `v3.3.0` on `cfc4200`, main fast-forwarded to it, the
   GitHub release from docs/release-notes/v3.3.0.md.
   v3.4.0 (docs/v3.4-plan.md): the local-plugin approach is proven (a folder marketplace, local scope, loaded in place,
   `woa-team:<id>`; no model run). 3.4a done (plugin/team/, setup-team). 3.4b done (the guard's team rows from team.json, every start denied
   without it, the folder rule; template version 3 denies Read/Edit/Write on ~/.world-of-agents/**, versions/2.json the
   v3.0 one; guild leads have Agent and memory: local, the Lead memory: local (memory off since 3.4f); from the review, Edit and Write into
   ~/.world-of-agents denied for every caller, as written and as resolved). 3.4d done (a `specialist` event; the hall
   shows a guild lead's specialists at work in its name plate and screen-reader label, the pane under the lead; names from
   the agent type's shape only). 3.4c done (12 Nov, Dima's T8: the pane's "Change skills" makes a one-time key, hands
   it to the hall through hall-key.mjs's stdin and shows the link with it after a #; the page takes it out of the address
   bar at once and exchanges it once, within 60 s, for an HttpOnly, SameSite=Strict cookie; the Team panel adds,
   changes, deletes and gives skills through POST /api/team, with a full preview, flags and refusals; every change is a
   line in the pane through team-log.mjs). 3.4e done (14 Nov: the specialists report the check as the devs do since
   3.3d, and the ones that edit change only their task's files and leave no backup copies). 3.4f done (14 Nov, Dima's
   decisions after the self-check: the Designer changes only its task's files; the Lead passes a request for a
   specialist on to its guild lead, naming it, and guild leads hand work over when asked or when it is more than a small
   change; the Lead's `Agent` is bare, because its list became the whole session's and hid the specialists from the
   guild leads; agent memory is off, and the guard denies a write into any of the three agent memory folders with its own reason;
   the devs and the specialists run exactly `npm run check`, nothing added; a real run saw the Frontend dev start its
   React dev; the engine has no pattern for an `Agent(...)` list, so the Lead's `Agent` stays bare). 3.4g done (14 Nov,
   Dima's desktop test of v3.4.0: a prompt typed in another session takes the hall over, because a newer session had
   taken it and the older one, still open, sent no SessionStart, so its run never reached the page; the devs and the
   specialists run tests only as `npm test` or `npm run check`; the Lead's hand-off says who, not how, so "the React
   dev" is no reason to use React or to rule it out). 3.4h done (14 Nov, Dima's re-check: the older-hall line says
   "Close your other sessions, here and in other projects.", because after an update another session in the same
   project can keep the old hall; the README says a hall stops when its session closes or reloads an updated plugin,
   and a `/reload-plugins` that brings nothing new keeps it). The v3.4.0 checklist is docs/release-notes/v3.4.0-check.md. v3.4.0 is
   released (14 Nov, after Dima's re-check): tag `v3.4.0` on `ee78885`, main fast-forwarded to it, the GitHub release
   from docs/release-notes/v3.4.0.md.

7. The review's fixes (12 Nov, Dima's review of `v3-next`), folded into the versions they belong to, `v3-next` rebuilt
   once with `--force-with-lease`: 3.1f (Agent `isolation` none or "worktree" only; every plugin script's run check by
   real path), 3.2c (past sessions, L7), 3.3c (BACKLOG.md looked at with lstat; the devs run npm run check last), 3.4b's
   folder rule (Edit and Write into ~/.world-of-agents denied for every caller, as written and as resolved), 3.4c (the
   skill buttons, T8), the specialists' prompts in 3.4a. G11 is "not now". What waits for Dima: his desktop checks in
   order (v3.1.0 to v3.4.0), then the tags, one version at a time, on `main`.

8. Dima's desktop checks (13 Nov). v3.1.0 passed and is released. v3.2.0's failed step 6 (no total in the hall's header
   after an app restart) and he decided the self-check's findings: 3.2d (docs/v3.2-plan.md, L10 to L16) fixes the cause
   and adds the hall's version, the per-session ledger with Recount, the 1-hour cache-write price and "1.18B". `v3-next`
   was rebuilt a second time with `--force-with-lease`: 3.2d and the amended prepare commit, then v3.3 and v3.4 replayed
   on top (3.4c's change-log read moved into the same "the hall became ours" step as the ledger's push, fixing the same
   race there). What waits for Dima: v3.3.0's and v3.4.0's checks, then their tags (v3.2.0 passed its re-check and is released, 14 Nov).

9. v3.3.0's self-check (14 Nov), before Dima's part. Real runs in a throwaway project found the devs' report had no
   `npm run check: exit 0` (Claude Code shows no exit code on a pass), and a card whose gate failed going Done when the
   Lead's Agent call came back. Dima decided the report (3.3d: "passed", or "failed (exit N)" with a code seen), the card
   fix went in with it, and 3.4e gives the specialists the same rule. A later run had the dev chain the check with
   another command, which asked for approval; Dima decided they run it as one command on its own (3.3d, 3.4e), and the
   next run showed `npm run check: passed`, passed on by the Lead. `v3-next` was rebuilt a third, a fourth and a fifth time with
   `--force-with-lease` (all on 14 Nov); v3.3.0 is `cfc4200` (v3.4.0 then `6d97400`). Dima's desktop run of v3.3.0
   passed (in Auto); its one finding, a dev that broke another agent's file to prove its test could fail, became the
   rule that the devs and the specialists change only their task's files and leave no backup copies. Steps 6, 7 and 12 ran for real (docs/v3.3-plan.md,
   "3.3d"); woa-m2-test lost its two "Always allow" echo rules (Dima). What waits for Dima: v3.4.0's checks, then its tag (v3.3.0 is released, 14 Nov).

10. v3.4.0's self-check (14 Nov). Without a person: the team setup, the guard's rows and folder rules, the settings
    upgrade and the team editor in Edge (19 of 20, the one failure the script's own). Three small real runs never saw a
    specialist start, and agent memory clashed with the guard. Dima decided 3.4f: the Designer's files rule, the Lead
    passing a request for a specialist on, the guild leads handing work over, and memory off with the guard's own
    reason; and checklist steps 7, 10, 20 and 21 reworded. The next real run found why no specialist had ever started:
    the Lead's `Agent(...)` list became the whole session's list, which the guild leads inherit. Dima chose a bare
    `Agent` for the Lead, and a run then saw the Frontend dev start its React dev and the hall show "+ React dev".
    `v3-next` was rebuilt a sixth, a seventh, an eighth and a ninth time with `--force-with-lease` (14 Nov); v3.4.0 is `ee78885`. The
    seventh, Dima's three follow-ups: the engine has no pattern for an `Agent(...)` list (exact names only), so the bare
    `Agent` stays; the devs and the specialists run exactly `npm run check`, nothing added; the memory deny covers all
    three agent memory folders. woa-m2-test lost the
    two "Always allow" rules of Dima's v3.3.0 run, and an empty memory folder a v3.4 session had left. The eighth, 3.4g,
    after Dima's desktop test of v3.4.0 (the team setup, the deny without a team, the upgrade, the React dev's counter
    and the missing memory folder passed): the hall follows the session you type into, the devs and the specialists run
    tests only as `npm test` or `npm run check`, and the Lead's hand-off says who, not how. The ninth, 3.4h, after
    Dima's re-check (step 7 again and the new step 22 passed): the older-hall line names every other session, and the
    README says which reloads stop the hall. v3.4.0 is released (14 Nov). Next: v3.5.0, written only, in
    docs/v3.4-plan.md ("v3.5.0, written only"); nothing of it is built, and the editor's redesign waits for Dima's
    review of a mockup.

11. Long run 2, v3.5.0 to v3.7.0 (Dima's brief of 14 Nov), on `v3-next`, alone until a version is ready for his test.
    Same rules as the first long run: one commit per finished part, pushed to `v3-next`; never `main`, a tag or a
    release; `--force-with-lease` only on `v3-next`, only to fold fixes into a version. After each part: `npm run check`
    from `D:\`, `check:hall` when the hall changes, planted bugs, and this status. Dima's real team is
    `~/.world-of-agents/team`: tests use a throwaway HOME. Stop for Dima on a rule to loosen, new art, or Pro limits.
    v3.5.0 (docs/v3.5-plan.md): 3.5a done (TypeScript 6.0.3, typescript-eslint 8.72.2, ESLint 10.15.0, `npm audit` clean
    through the minimatch override; the hooks plugin keeps its two classic rules). 3.5b done (the hall starts detached
    through hall-start.mjs, stops itself after 30 idle minutes, and a newer pane stops an older one from 3.5.0 on
    through POST /api/stop; proven end to end in the terminal CLI on port 4329; the desktop app keeps its processes in
    its package job, which is for Dima's checklist). 3.5c done (the hall keeps the last 3 sessions' runs in memory, 500
    events each; going back to one sends it as one replay with the same start id; a kept session's own hooks keep it up
    to date; checked in Edge on the built page). 3.5d done (the check always, by every specialist with a shell, and
    never a `cd` first or anything chained; one real run, $0.26, saw both run exactly `npm run check`). v3.5.0 is prepared, not tagged (plugin.json 3.5.0,
    docs/release-notes/v3.5.0.md, README pins on `#v3.5.0`). v3.5.0 is `ed42ec6`; its checklist is
    docs/release-notes/v3.5.0-check.md. docs/v3.6-plan.md and docs/v3.7-plan.md are written. Stopped (15 Nov) for
    Dima: his v3.5.0 check (then its tag), and the approved Team panel mockup before anything of v3.6.0 is built.

12. v3.6.0 (docs/v3.6-plan.md), after Dima approved the Team page mockup and sent its spec (15 Nov); the plan follows the
    spec. Nothing is tagged until Dima says v3.5.0 passed. 3.6a done (team.json version 2: `preset`, `on`, `generator`;
    a version 1 team reads as version 2 with every tool it had, the 8 defaults' agent files byte for byte as 3.5.0's; 5
    per guild; no shell preset in the Design guild; the guard denies a specialist that is off, its file kept; the
    generated text pinned to `GENERATOR` by a hash in team.test.ts). 3.6b done (POST /api/team takes `add-specialist`,
    `change-specialist`, `delete-specialist` and `switch`; the page and team.mjs make the same ids, tested in step; the
    pane's lines say "Specialist added: Form builder (Frontend)", "React dev (Frontend) switched off"). 3.6c done (the
    Team page as the approved mockup shows it, its own view with the hall kept running behind it; the token set and Inter;
    search, tabs with arrow keys, the switch, chips with Undo, "+ Add skill", both forms with live refusals and a live
    preview; in Edge on a throwaway hall, keyboard only, every change and the tab order passed, no console errors, and
    the check found the hall view never hid behind the page: `.app[hidden]`). 3.6d done (team-check.mjs answers by exit
    code; the pane says when the team's files are older; `/world-of-agents:setup-team-write` refreshes only the generated
    files of an older team, a version 1 one included, and stops at a SKILL.md changed by hand). v3.6.0 is prepared, not
    tagged (plugin.json 3.6.0, docs/release-notes/v3.6.0.md, README pins on `#v3.6.0`). 3.6e done (Dima's review, 15 Nov:
    every frontmatter value from the team's data quoted, since Claude Code dropped a whole frontmatter, tools included,
    for a role starting with ' or -, seen with `claude plugin validate` and a no-login run; GENERATOR 2; tests parse it
    with the `yaml` package under YAML 1.2 and 1.1; Undo puts a skill back where it was; "Change skills" is "Open Team
    page"). 3.6f done (the guard holds the shell to the roles that have one, as it holds Edit and Write: the two devs
    and `edits-and-checks` specialists; the main thread unchanged; Dima's `!` commands, driven through ConPTY in an
    interactive session, reach no hook at all). Waits for Dima: v3.5.0's desktop
    check and its tag first, then v3.6.0's check (docs/release-notes/v3.6.0-check.md, on 377bfbb) and its tag.

13. v3.7.0 (docs/v3.7-plan.md): 3.7a, the spike, done (15 Nov, six real Haiku runs, $0.011): a main-thread agent, the
    Lead's case, never preloads its `skills:` (by `--agent` or `settings.json`, any plugin, prefixed or not); a subagent
    preloads another plugin's skill (`woa-team:<name>`), so the guild leads can have notes as planned; a missing skill
    is one `[WARN]` in the debug log and the agent starts. Stopped for Dima: notes for the Lead (A guild leads only, B a
    `SessionStart` context hook, C the Lead reads its file). Dima chose A (15 Nov): notes for the four guild leads only; B is in the plan's backlog, C is out.
    3.7b done (the four guild leads' prompts may end a final report with one line `Proposed note: <fact>`; `proposalIn()`
    in map.ts takes it only from a guild lead's own `SubagentStop`, never a gate retry, and the feed shows an ordinary
    `note` row; src/team/note.ts reads the line; the review parser sets it aside). 3.7c done (the hall keeps proposals in memory, 20 at most; POST /api/team takes
    `note-approve`, `note-reject` and `note-delete` by id only, the text written being the hall's own copy; team.mjs
    writes notes.json under a strict schema, 20 notes of 300 characters a guild lead, and one skill per guild lead with
    notes, `notes-<agent>`, ids no team skill may take; the four guild leads' agent files preload
    `woa-team:notes-<agent>`; the refresh rewrites those skills, never notes.json; the pane says "Note approved for the
    Frontend dev"). 3.7d done (the Notes tab, as mockup pages 1 and 6 show it: "Waiting for you" and "Kept", a note
    whole with its link, command-like and instruction-like flags, Approve and Reject, Remove this note after a question;
    search finds notes by text and guild lead; in Edge, keyboard only, every change landed on disk). v3.7.0 is prepared, not tagged (plugin.json 3.7.0,
    docs/release-notes/v3.7.0.md, README pins on `#v3.7.0`).

14. Dima's change of plan (15 Nov): Claude runs the desktop checks it can; Dima tests once, on v3.7.0. v3.5.0 and
    v3.6.0 are never tagged (their notes and checklists stay in docs as history); v3.7.0's notes and README cover 3.5
    and 3.6, updating from v3.4.0. The guard's agent start got its test for an agent id that is no string (458484b).
    docs/release-notes/v3.7.0-check.md merges the three checklists, each step marked "Claude: passed" or "failed" with
    what was seen (throwaway copies on ports 4391 and 4339, Edge, no-login sessions, three real runs, $0.71, and the real
    30-minute idle stop), and ends with Dima's short list, on ab54fc5. The first real run failed twice, fixed in 3.7e (docs/v3.7-plan.md):
    the guild leads never tell a specialist to skip its own check, and a note is proposed only as the last line, the
    Lead passing one on in the user's words. Claude Code 2.1.325 warns about the plugin setting the main agent and the
    template's `Write(~/.world-of-agents/**)` deny: Dima's decisions, unchanged. v3.7.0 is released (16 Nov, after Dima's
    test): tag `v3.7.0` on `d89cdf2`, main fast-forwarded to it, the GitHub release from docs/release-notes/v3.7.0.md.

15. v3.8.0 (docs/v3.8-plan.md, Dima's brief of 16 Nov): template version 4, for those two warnings. 3.8a done (the
    probe on 2.1.325 and 2.1.318 with the desktop app's own setting sources; the setup writes `agent`, the plugin's
    settings.json is gone, the Write deny is gone; the guard's own reason for a main thread that isn't the Lead; nine
    planted bugs caught; a real run, $0.003, saw the Edit deny stop the Write tool). v3.8.0 is prepared, not tagged
    (plugin.json 3.8.0, docs/release-notes/v3.8.0.md, README pins on `#v3.8.0`). The desktop app couldn't be driven or
    its code unpacked (auto mode refused that), so its step is first on Dima's list in docs/release-notes/v3.8.0-check.md,
    and a stop. Commits carry no Claude trailer (Dima, 16 Nov). Then the plans Dima asked for, not built, each waiting
    for his review and, for the Team page, the page and the art, a mockup from Claude (design) first: v3.9-plan.md (A, a
    team per project and one skill library; probed: a registered marketplace per project keeps `woa-team:` names, a
    project-declared one is ignored), v3.10-plan.md (B, three ways to add a skill; probed: his Claude skills are on disk
    in `~/.claude/skills/synced`, a 40,000-character preloaded skill loads whole at about 3.7 characters a token, and
    the description never reaches the agent), v3.11-plan.md (C) and v4.0-plan.md (D).
    Dima's review (16 Nov): the guard's reason, yes. 3.8b done (68cb1d4): `woa` sets subagent depth 2 like the template,
    held together by `woa.test.ts` (at 1 Claude Code takes the Agent tool from every subagent, so no specialist could start
    under `woa`; a real run through a copy of `woa`, $0.172, saw the Frontend dev start its React dev), and the README
    warns against catalog installers. His answers are worked into the plans: the library holds skills only, specialists
    per project; no fallback to the shared team, a one-time copy per project on his command, specialist starts denied
    until then with a reason naming the step, the guild leads working, the shared folder kept as an unused backup; notes
    per project, the shared ones reviewed one by one at each copy, none from a copied team or the starter team; caps of
    1,024, 20,000 and 40,000 characters with each specialist's total in tokens on its page; his skills from
    `~/.claude/skills` only, labelled mine or built-in from the app's manifest; `yaml` 2.9.1 for headers (core schema,
    unique keys, alias limit, no custom tags); C with a mockup first; D is v4.0.0. Mockups come from Claude in his review
    chat: the Team page one for A and B, then C's, then D's style. Nothing of A to D is built until he sends the approved
    mockup. v3.8.0 is released (16 Nov, after Dima's test): tag `v3.8.0` on `08084f2`, main fast-forwarded to it.

16. v3.9.0 and v3.10.0 (docs/v3.9-plan.md, docs/v3.10-plan.md), built to the Team page mockup Dima approved on 16 Nov
    (he described it, since Claude Code can't open it), in order, each self-checked, then his short list. 3.9a done (the
    probes: `CLAUDE_PROJECT_DIR` is the project folder for every caller, a worktree agent's included, and the pane's
    `$.session.cwd()` is the same folder). 3.9b done (team.mjs: the project key from the folder's real path, team.json
    version 3 per project with its own marketplace `woa-<key>`, the library with each skill's source, giveOwnTeam() for
    the one-time copy or an empty team, changeProject() for the starter team, a copy, the library and the shared notes'
    review; the shared team only read; six planted bugs, all caught after two tests were sharpened). 3.9c done (the
    guard reads the session's project team by `CLAUDE_PROJECT_DIR`, the one environment variable it reads, never the
    hook's cwd; a project not moved yet keeps its guild leads and its specialist starts name the step; five planted bugs
    caught, and the self-check found the Lead's start failing closed there, fixed before the commit). 3.9d done (the
    setup per project: /world-of-agents:setup-team-write gives the project in its folder its own team once, a copy of
    the shared team with its notes for review or an empty one, refreshes an older project team's files only, and prints
    the three commands Dima runs once; team-check.mjs and team-log.mjs take {"project"} on stdin; five planted bugs).
    3.9e done (the hall, the mod and the Team page per project: the key and the session bound to the pane's project, a
    stop's project key so a proposal shows and is approved only in its own project, the pane's "no team of its own"
    line and button, the Team page to the mockup: project chip, banner, empty panel, starter team, copy, Library tab,
    shared notes to review; eight planted bugs caught, and the pane's every-project line, wrong since v3.8, fixed).
    v3.9.0 is prepared, not tagged (plugin.json 3.9.0, docs/release-notes/v3.9.0.md, README pins on `#v3.9.0`). 3.9f done
    (the self-check, docs/v3.9-plan.md: the setup skills, the three commands, twenty marketplaces, two real runs, $0.24,
    and the Team page in Edge on the plugin's own hall; it found that hall answering 409 for every project, because the
    bundled `defaults()` looked for the starter team in `plugin/hall`; fixed with `teamFiles`, two planted bugs caught).
    Its checklist is docs/release-notes/v3.9.0-check.md, with Dima's short list.

17. v3.10.0 (docs/v3.10-plan.md), built to the same approved mockup, after v3.9.0's self-check. 3.10a done (the probes:
    the skill format's 1,024-character description, which Claude Code itself doesn't enforce; the header keys of 30
    catalog skills; raw.githubusercontent.com sends gzip, 404s a folder or a missing file, and answers an old owner's name
    with 200; the synced folder now has a manifest of its own, a question for Dima). 3.10b done (team.mjs: a text up to
    20,000 characters, a library description one printable line up to 1,024, a specialist's skills up to 40,000
    characters together, checked in this project and every other before anything is written; each library skill's
    source with its facts (GitHub owner, repository, ref, path and license; a Claude skill's label and file; a pasted
    one's license); the specialist's page says what its skills cost every start, with a bar that turns amber past 85%,
    and "+ Add from library" leaves out what no longer fits; eleven planted bugs caught after two tests were sharpened).
    3.10c done (`server/skill-check.ts`: a SKILL.md from outside, its header parsed with `yaml` 2.9.1, now a dependency,
    core schema, unique keys, at most 5 aliases, any tag refused whole; name, description and license kept, every other
    key named and dropped, allowed-tools and hooks with what they would have done; the files its text names that don't
    come along; on the page, a skill's lines flagged "overrides your rules?" by their own rule, a note's by its own;
    fourteen of fifteen planted bugs caught, the fifteenth a second lock no input can reach). 3.10d done (the hall's
    side of the three ways in: `POST /api/team/skill`, which only reads, a pasted SKILL.md, Dima's Claude skills with
    their labels, a GitHub link through the hall's one network call; each check kept in memory per project and taken once
    by `take-skill`, which saves the hall's copy; Check for update's hall side came with it, `recheck` and `update-skill`;
    the bundle takes yaml's ES module build; seventeen planted bugs in a throwaway worktree, fifteen caught after two tests
    were sharpened and one bounded, two second locks no input can reach. The first try planted with `sed -i` in the working
    tree, and the size-cap test's endless stream crashed VS Code twice: Testing notes has the rules that came of it).
    3.10e done (Check for update on the page: a GitHub skill's link fetched again through the hall, the differences line
    by line with the added lines' flags, a new license, the refusals, then "Take the update" by the check's id or "Keep
    what I have"; fifteen planted bugs, all caught once one test was sharpened). 3.10f's page done ("+ Add a skill" as
    the approved mockup shows it: four ways in, your Claude skills in Yours and Built-in, and a third group, Not labelled,
    only when the app's list couldn't label some, since an unlabelled one may be Anthropic's; From GitHub with the three
    shapes; Paste; one check screen with the name and what it's for to edit, the facts and cost against 20,000, the amber
    boxes, the red refusals and the whole text, whose Add sends the check's id; the library's facts box gets Repository
    and ref, File and License; an answer that comes after a step was left is dropped; seventeen planted bugs, all caught).
    v3.10.0 is prepared, not tagged (plugin.json 3.10.0, docs/release-notes/v3.10.0.md, README pins on `#v3.10.0`, and
    in "What it never does" the hall's one network call and the Claude skills read only when asked). The self-check, 29
    of 29 in Edge on the plugin's own bundled hall with a real GitHub skill, is docs/release-notes/v3.10.0-check.md.
    Dima's review (16 Nov, docs/v3.10-plan.md): Not labelled as its own group, yes; labels stay with the desktop app's
    manifest (`creatorType` says who made a skill); one tag, v3.10.0, as with v3.7.0: v3.9.0 is never tagged, its notes
    and checklist stay in docs as history, v3.10.0's notes update from v3.8.0 with the per-project move, the README has
    one "New in v3.10", and the two checklists are merged into v3.10.0-check.md, with the move of his projects
    (`woa-test` and `woa-v3-test`, on v3.0.1 from GitHub) after the tag. The throwaways are deleted. His answers, the
    same day: a personal skill outside `synced/` is Not labelled, always (8838fcf: only the app's manifest saying
    `user` makes a skill Yours); and folder trust: in VS Code, Claude Code 2.1.325 asks before the first session in an
    untrusted folder, and declining starts it with `--ignore-persisted-trust` and without the project setting source, so
    without World of Agents (its settings hold the plugin's switch, the Lead and the denies). Started as the desktop app
    starts it, Claude Code read the project's settings with no trust record (no-login probe); the app itself is a step on
    his list. The README's setup has "4. Trust the project", and both parts of the list a trust step. v3.10.0 is
    released (17 Nov, on Dima's report that his list passed): tag `v3.10.0` on `a323dea`,
    main fast-forwarded to it, the GitHub release from docs/release-notes/v3.10.0.md. `release:check` passed split in
    two: in a throwaway worktree its `check:hall` failed only on the bundle's path comments, which named the modules
    through the `node_modules` junction (every changed line a comment), so `check:hall` ran in the repo, whose code is
    a323dea's, and `check` in the worktree; under the PowerShell tool `bash` isn't on PATH, so woa.test.ts
    and setup-skill's bash tests skip, and they ran again with Git Bash first on PATH. The traces read after the tag
    showed that list ran v3.7.0: `npm run dev:refresh` hadn't run (the dev install still 3.7.0, 15 Nov), `woa-m2-test`
    kept template 3 and the shared team, and no project had a team of its own; check the traces before a tag next
    time. v3.10.0's own desktop test then ran on the GitHub install (17 Nov): step 3 in `woa-trust-check2` (the app
    asked for trust on opening the folder, yes recorded the trust Claude Code reads, the session after the setup was
    the Lead with the pane, but in Auto from the user settings, now in the README's trust step), and part 2 in
    `woa-test` and `woa-v3-test` (template 4, each its own team enabled). Dima reports the React dev started in both
    (17 Nov), which closes the list. The traces can't show it either way: the desktop app removes a deleted session's
    transcript (woa-test's one session after its setup, 22:55, was deleted), and the hall replays only the session it
    follows. `woa-trust-check` and `woa-trust-check2` are gone.

18. v4.0.0 changes direction (Dima, 16 Nov): the Forge Keep in 3D. three.js, pinned and bundled; an anime style with
    cel shading, ink outlines and chibi proportions; nine areas joined by paths; states mapped to places; idle life
    that never shows work that isn't happening; and the page as a HUD over the world in the Team page's tokens. The 2x
    pixel redraw is dropped, and v3.11.0 (C) folds into the HUD part, 4d; its plan stays as history. docs/v4.0-plan.md
    is a plan only (parts 4a to 4f, with Dima's decisions, Claude's proposals and the questions marked apart). It waits
    for his review, and nothing of it is built before he approves. His question on where project specialists appear
    comes before 4b, as do Claude's on the 3 s desk hold and the places that depend on the task. Packed GLB images need
    `blob:`, which the CSP doesn't allow, so models carry none. Dima's notes of 17 Nov: the Forge Keep already exists as
    a prototype on the branch `forge-keep` (`town/`, three r160, Tripo characters, Blender scenery); 4a and 4b port its
    layout, assets and logic into `src/world`, never grey boxes and never a merge of `town/`, and its models come into
    main once. The plan has what Claude checked there (b11020a), and Dima's answers the same day, all Decided: under
    16 MB of files and 9 MB compressed, a character under 2 MB with its texture; three's newest release, proven by a
    real-render comparison against r160; the 2D hall frozen as the fallback; no chibi, the Tripo cast as made; idle
    never in a work place, the Forge counted as one (agents still walk through it); the desk hold seated with the
    screen dark at once; the Reviewer at the dev's desk, a Lead reading a dev's task in the Workshop, a waiting Lead in
    the War room; specialists A for 4b, B later; a raised-hand clip made in Tripo for all five before 4c. Open: the
    HUD mockup and the label font (before 4d). Tripo's terms are
    answered (Dima, 17 Nov): the models are his, the characters made on a paid plan, all rights reserved and outside
    the MIT licence (docs/ASSETS.md, in the words of `town/models/LICENSE.md` at 89ae8b1); the README's licence section
    says it once models land, with use, not access, and the build writes the notice beside the plugin's copy. The clips
    are Tripo's presets and the concept images our own. Dima approved the plan (17 Nov) and 4a started, in five
    steps: the foundation, the map in `src/world/`, the scene, the camera and the React side, the checks. Step 1 is
    done: three 0.187.0 pinned; the 17 keep models as GLB in src/world/models (7.04 MB, every buffer view byte for
    byte as on forge-keep and the same geometry through three 0.187's GLTFLoader); `.glb` served as
    `model/gltf-binary`; tools/models with the runner's allowlist (tested with Blender's Python and a stand-in bpy,
    a planted job refused, and the check planted out let it run); tests/models.test.ts; docs/ASSETS.md's list; the
    README's credits; eleven planted bugs in a throwaway worktree, all caught. The notice beside the plugin's copy
    comes with the step that bundles the models. Dima starts the runner only from tools/models/blender, his old copies
    in Documents\WoA-models deleted (17 Nov). Step 2 is done: src/world/map.ts, the town's world.js in strict
    TypeScript, identical in every room, spot, road line, graph node and all 420 routes (both run and compared), with
    map.test.ts; six planted bugs caught, once a test was sharpened (a terrace is reached from outside its house).
    Step 3 is done: src/world/scene/, the town's scene modules in its build order (the seeded random numbers depend on
    it), on the path where every model is there, with no agents (4b). The real-render comparison passes view by view
    (docs/v4.0-plan.md, Tech, "Checked"): eleven views at most 0.044% of pixels and 0.19/255 off. It found what a render
    alone hid: the line and grade passes reading an empty depth (fixed: the real one), and 0.187's bloom (r160's put
    back, bloom.ts). What is left is written down: 0.187's new PCF shadows (gone with shadows off in both), the signs'
    font, the particles. Three look questions for Dima from it: bloom, crease lines, the signs' font. models.test.ts
    unpacks two models and finds every vertex where it was; six planted bugs, all caught.
    Step 4 is done: camera.ts (the limits and the town's room framing as numbers; camera.test.ts holds every room,
    from nine sides, to the limits; the port renders pixel for pixel as before the move), WorldView in App's stage
    (the WebGL 2 probe, the 2D hall while it loads and as the fallback, the hidden-tab pause, the context's grace;
    WorldView.test.tsx), and the plugin's hall carrying the 17 models with MODELS-LICENSE.md beside them
    (install.test.ts). Twenty planted bugs (twelve in WorldView, five in the camera, three in the notice), all caught.
    Until 4b the world has no agents and until 4d there is no agent list, so on v3-next the stage's agent buttons go
    once the world is ready (the canvas's label already names the HUD's list, as the plan has it).
    Step 5 is done, and with it 4a (docs/v4.0-plan.md, Security and Tech, "Checked"): under the hall's header a GLB's
    packed image is refused (connect-src blob, the model drawn without it) and a plain one loads, a control without the
    policy loading both; the Pages build shows the world with no violation (no eval) and so does the plugin's own page
    under the header; a frame takes 9 ms at 100%, 125% and 150% on this PC's RTX 5070 (the integrated Radeon not
    measured); three and the scene are an 860 KB chunk (235 KB gzipped).
    Dima's answers (18 Nov, docs/v4.0-plan.md): r160's bloom; the town's look, so no crease lines (a side-by-side
    render for him to judge later, outside the repo); M PLUS Rounded 1c on the signs and the task board, self-hosted,
    Latin 800 only (install.test.ts holds the bundle to that one file; three planted bugs caught); the checks' scripts
    in tools/world-check/ with playwright-core and pngjs pinned; no release before 4d brings back agent selection for
    the keyboard and screen readers. 4b in four steps (docs/v4.0-plan.md, Parts). Step 1 is done: the five characters
    as GLB with their JPEGs beside them (8.64 MB together, 1.66 to 1.84 MB each, the models 15.67 MB in all, under the
    budget), each in docs/ASSETS.md with its ProduceID; textureUrl() looks a texture up in the bundle's own table;
    the hall serves .jpg as image/jpeg; the plugin's hall carries all 27 files and its notice names the textures;
    eight planted bugs caught.
    Step 2 is done: scene/cast.ts (the town's m6b-glb.js with its rigs' heights and groundY(): loaded, toon, clips,
    the seats with two-bone IK) and places.ts (START, idle areas only); the render comparison with the figures in, 20
    views, passes, and with shadows off only outline pixels differ; it found the Reviewer's lantern belongs on its root
    (Dima: so for 4b, ask again in 4c whether it follows the hand) and 4a's light pass missing the town's figure's-light
    clause; seats.mjs: 40 of 40 with reduced motion in both, without it 38 of 40 in both (the Backend dev's toes 5 cm up
    at two seats, as in the town); 16 planted bugs caught after three tests were sharpened. After 4b, its own part: the
    tests' temp folders (docs/v4.0-plan.md, Parts). Step 3 is done: placeFor() in places.ts, the 2D hall's rules on
    the keep's spots with Dima's answers (a waiting Lead in the War room in Live too, a Lead checking in the Workshop,
    the Reviewer beside the desk), seven new spots in map.ts (the scrolls at the War hall's board, the visits, the
    check); places.test.ts against the 2D hall's kinds over 2,160 cases; spots.mjs: all 20 standing spots and their
    walks on clear floor; ten planted bugs caught. Step 4 is done: walkers.ts (the turn mid-path, the hurry, the desk
    hold, reduced motion), world.update() and restart() through WorldView, the dev screens and the sparks only while
    their dev works at its desk; walk.mjs plays the demo into the world with no fault in either mode; 13 planted bugs
    caught. With it 4b is done. Dima's answers (18 Nov): the demo plays slower in the keep (KEEP_STEP_MS, 40 s a step,
    the least for every walk 38; the 2D hall keeps 8 s; App takes the keep's pace where it can draw; pace.test.ts),
    and the walk clip speeds up with the hurry up to the town's 2.6x; five planted bugs caught. Then (his review of the
    six-minute run) a Next step button in Demo: the player's next(stepMs), the walkers' landed() through WorldView's
    `skips` and world.land(), so the figures land, then the run moves on a step; walk.mjs with NEXT=6 finds no fault;
    six planted bugs caught. The tests' temp folders done: the sweep before every Vitest run (213 leftovers on its
    first), guard.test.ts's leaked folder fixed, the browser checks closing Edge in finally; eight planted bugs caught.
    The lantern (Dima, 18 Nov): the town's light on the root, the town's green flame in the hand with a 0.25 m halo, lit
    with the light; six planted bugs caught. Next: 4c, which waits for the raised-hand clip from Tripo.

19. The v4.0.0 build plan (docs/v4-build-plan.md, Dima, 19 Nov): fast, the heavy checks in its phase T, every open
    question answered (D1 to D23), the order 4d, 4c, 4f; a step's commit ticks it, and a question the plan doesn't answer
    is decided by its rule and logged at its end. 4d is done (19 and 20 Nov, 4d.1 to 4d.10): the HUD over the world,
    tested by React and Vitest tests only; its Edge checks wait for T (docs/v4.0-plan.md, Parts, 4d). 4c is done (20 Nov,
    4c.1 to 4c.7): idle life, small talk, the furnace, the markers and the screens, tested the same way, not waiting for
    the raised-hand clip (D7). Next: 4f.
