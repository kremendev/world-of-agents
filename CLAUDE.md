# World of Agents

A pixel-art web app where five AI agents work in a fantasy guild hall, the Forge Hall. You give a task
("Create a dashboard"); the Lead/PM splits it, the agents walk to their desks and visibly work, the Reviewer
checks the result. v1 plays a scripted run with no AI calls; v2 watches real Claude Code runs: the plugin's
hooks report what each agent does to a hall server on 127.0.0.1, which sends the page the same events.
v3 (started, `docs/v3-brief.md` is the source of truth) moves it into the Claude desktop app: a mod with a team pane,
guilds of specialists, a token ledger and scouts. Single user, runs locally, portfolio project.

## Commands

```bash
npm run dev      # http://localhost:5173 (localhost only, never --host)
npm run check    # typecheck + lint + prettier check + tests: run before saying anything is done
npm test         # vitest run
npm run format   # prettier --write .
npm run hall     # builds the page, then serves it and the API on http://127.0.0.1:4319
bin/woa          # Claude Code in the current folder, with the plugin and the Lead. bin/woa --version starts no session
```

The owner works on Windows in Git Bash. Give commands that work there.

## Stack and why

- React 19 + TypeScript (strict, `noUncheckedIndexedAccess`) + Vite 7, Vitest 5 + Testing Library, Zod 4.
- The office is drawn on **Canvas 2D**. Switch to PixiJS only if sprite handling gets painful.
- TypeScript is pinned to 5.9 on purpose: typescript-eslint 8 does not accept TS 6. Upgrade both together.
- ESLint 9 and Vite 7 are also one major behind on purpose. Upgrade as a separate task. Vitest is on 5.
- npm blocks dependency install scripts. `esbuild` is approved in `package.json` `allowScripts`. If a new
  package asks, review it and approve by name; never `npm install-scripts approve --all`.

## Layout

```
src/events/       Zod schema for OfficeEvent + parseEvent(): the gate every event passes
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
                  right of the hall: skips state events that change nothing), AgentText (agent text: `code` and **bold** as elements, the rest plain text)
src/live/         Live mode: hall.ts (health check, EventSource with its own reconnect, parseEvent() on every
                  message), useLiveHall.ts (status, office, the 5 s re-check in Demo), announce.ts (what the
                  aria-live region says, cut at the last full sentence)
server/           the v2 hall server, run with tsx: hall.ts (node:http: Host, Origin and token checks, POST
                  /api/handshake, POST /api/hook, SSE /api/events with a 500-event replay, /api/health, serves dist/), hook-input.ts
                  (Zod schema of the fields send.mjs forwards), map.ts (pure mapHook(): one hook to
                  OfficeEvents, following the run table in docs/v2-brief.md), token.ts, main.ts (npm run hall).
                  csp.ts: the Content-Security-Policy, for the hall's header and the Pages build's meta tag.
                  quiet-logger.ts: hides the dev proxy's "no hall" error. fixtures/: the recorded runs' hooks, redacted
.claude-plugin/   marketplace.json: the repo is its own marketplace, listing the plugin from ./plugin
plugin/           the v2 Claude Code plugin: .claude-plugin/plugin.json, settings.json (the Lead as main agent), agents/
                  (the five agents' prompts and tools), hooks/hooks.json (an async hook per event), hooks/send.mjs
                  (allowlists and scrubs each payload, checks the hall with a handshake, then posts it with the token;
                  send.test.ts, handshake.test.ts).
                  An install from GitHub is a copy in Claude Code's cache: nothing outside plugin/ comes with it
bin/              woa: the launcher, bash for Git Bash (finds the repo from its own location). woa.test.ts runs it
                  with a fake claude
.github/workflows/ pages.yml: builds the demo and hosts it on GitHub Pages
docs/             v3-brief.md (the v3 plan and milestones), step3-brief.md (v1 step 3 brief), v2-brief.md (the v2 plan, run
                  table and security controls), v2-hooks.md (real hook payload fields and what send.mjs forwards), media/ (the README's
                  screenshot and GIF, from a replay of run 3's redacted fixtures)
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
  formatting is `AgentText`: `code` and `strong` elements around plain strings.
- Every event goes through `parseEvent()` before it touches state. Strict objects, enums, length limits.
- v2 has no API key and no Agent SDK: it is observer mode. Claude Code runs on the user's own login, and the
  plugin's hooks post to the hall server on 127.0.0.1. An API key or token in this repo is a bug. Nothing
  secret ever goes in a `VITE_` variable: Vite bundles those into the browser.
- Least privilege per agent in v2: each agent gets only the tools its job needs; the Reviewer only reads. Change a
  model or tools in both `plugin/agents/*.md` and `roster.ts`: `roster.test.ts` fails if they differ, and checks the
  Lead can start exactly the other four.
- `bin/woa` always passes `--permission-mode default` and unsets `WOA_CAPTURE`, so normal use never saves raw payloads.
  It has no hardcoded paths. Captures use plain `claude`: see Still to capture in docs/v2-hooks.md.
- Enable the plugin per project: local scope (`--scope local`, `.claude/settings.local.json`, which git ignores), or
  project scope to share it. Never user scope: `plugin/settings.json` makes the Lead the main agent wherever the plugin is
  enabled, so every session everywhere would start as the Lead and report to the hall. An installed plugin can't set a
  permission mode or an environment variable, so only `woa` forces Manual and `CLAUDE_CODE_MAX_SUBAGENT_SPAWN_DEPTH`.
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
- To test an install without touching the real setup, set `CLAUDE_CONFIG_DIR`, `HOME` and `USERPROFILE` to a temp folder.
  With no login there, `claude -p` still fires SessionStart, UserPromptSubmit, StopFailure and SessionEnd before it stops,
  so it spends nothing, and `WOA_CAPTURE=1` counts the hooks. SessionStart's `agent_type` shows the main agent, and
  `--debug-file` shows which copy loaded. `marketplace add` refuses `file://`; to test the cached copy, serve a bare repo
  over HTTP through `git http-backend`, because Claude Code clones shallow.
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
   message speech bubbles for 4 s (80 chars, plain text), and rest-room small talk every 3 s.
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
   that only a new, cleared or resumed session switches it. A card goes Done at its agent's SubagentStop; a
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
   marketplace, so the plugin installs as `world-of-agents@world-of-agents` from `kremendev/world-of-agents#v2.1.0`, and
   its `settings.json` makes the Lead the main agent. `v2.1.0` is the first release with a marketplace file; `v2.0.0` has
   none, so it can't be pinned. Milestone 0's done-when, the install through the desktop app's Add plugins, is still
   unconfirmed. The handshake came after `v2.1.0`, so people on that tag don't have it until the next release.

Next: milestone 1 in docs/v3-brief.md (spike: prove the platform).
