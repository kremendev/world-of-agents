# World of Agents

A pixel-art web app where five AI agents work in a fantasy guild hall, the Forge Hall. You give a task
("Create a dashboard"); the Lead/PM splits it, the agents walk to their desks and visibly work, the Reviewer
checks the result. v1 plays a scripted run with no AI calls; v2 watches real Claude Code runs: the plugin's
hooks report what each agent does to a hall server on 127.0.0.1, which sends the page the same events.
Single user, runs locally, portfolio project.

## Commands

```bash
npm run dev      # http://localhost:5173 (localhost only, never --host)
npm run check    # typecheck + lint + prettier check + tests: run before saying anything is done
npm test         # vitest run
npm run format   # prettier --write .
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
src/page/         the page around the hall: TaskBar (+ task.ts: cleanTask, 500-char cap), TaskBoard,
                  AgentPanel (details and activity of the selected agent)
docs/             step briefs from the v1 design (step3-brief.md)
```

## How the hall is drawn

- **Units are art pixels.** The hall is 672 x 480 art px; the design shows it at 2 CSS px per art px (1344 x 960).
- **Sprites** are `{ rows: string[], palette: Record<char, hex> }`. One string per row, `.` = transparent.
  `validateSprite()` and `sprite.test.ts` check every asset. Edit rows by hand; keep widths equal.
- **Scaling** is in device pixels (`pixelScale()`): every art pixel is a whole number of screen pixels, so
  125% / 150% Windows scaling stays sharp. Never scale the canvas with fractional CSS sizes.
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
- **Furnace**: the mouth (`FURNACE_MOUTH`) and its glow are drawn live by `furnaceDrawables(workingCount)`,
  not baked into the furnace surface. The glow flickers like any halo; the mouth colour never does
  (it is the busy indicator, so it keeps changing with reduced motion too).
- **Text** (room plaques, name plates, dashboard, furnace label, "You" sign, state and speech bubbles, "!!")
  is HTML in `HallLabels.tsx`, positioned in art px times `--u` (CSS px per art px), so it stays sharp.
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

- Agent output is untrusted text. Render it as React text. ESLint blocks `dangerouslySetInnerHTML`.
- Every event goes through `parseEvent()` before it touches state. Strict objects, enums, length limits.
- v2 has no API key and no Agent SDK: it is observer mode. Claude Code runs on the user's own login, and the
  plugin's hooks post to the hall server on 127.0.0.1. An API key or token in this repo is a bug. Nothing
  secret ever goes in a `VITE_` variable: Vite bundles those into the browser.
- Least privilege per agent in v2: each agent gets only the tools its job needs; the Reviewer only reads.
- The task bar text is user input. v1 only shows it (trimmed, capped at 500 chars, plain React text). In v2's
  Live mode the task bar is disabled: the task is typed in Claude Code, and the page never sends anything to
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
   flicker (off with reduced motion). Under the hall: the task bar (Send trims, ignores empty, caps at 500,
   labels the run and restarts it; v1 sends nothing anywhere), the task board, and the agent panel for the
   agent picked with the buttons over the sprites (Lead/PM by default): race, look, state, task, v2
   model and tools, waiting note, and its own activity newest first. The reducer keeps a `log` of state
   changes and messages (200 max) for that. An `aria-live` region reads out messages sent to you.

Next:

4. v2 (docs/v2-brief.md): observer mode, no Agent SDK and no API key. A Claude Code plugin (`plugin/`: the
   five agents and hooks) reports to a hall server on 127.0.0.1, which sends the same events to the page over
   Server-Sent Events. Milestone 1 (plugin and payload capture) is done; real payload fields are in
   docs/v2-hooks.md.
