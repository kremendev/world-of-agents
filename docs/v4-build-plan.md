# v4.0.0 build plan: finish the Forge Keep

Written 19 Nov 2026 for Claude Code in VS Code, at Dima's request: **build as fast as possible, test later, and every
open question is answered here.** It sits beside `docs/v4.0-plan.md`, the design plan, and wins where they differ. Its
answers are Dima's decisions (he asked for the best choice to be taken for each). 4a and 4b are done; this plan covers
4d, 4c, 4f, the raised-hand clip, the test phase and the release prep.

## Progress (tick each step in the commit that finishes it)

- [x] S0 this plan in the repo, the decisions copied into `docs/v4.0-plan.md`
- [x] 4d.1 HUD shell and tokens
- [x] 4d.2 top bar
- [x] 4d.3 rooms rail and camera wiring
- [x] 4d.4 agent list, agent card, Follow
- [x] 4d.5 drawer
- [x] 4d.6 world labels: name tags and bubbles
- [x] 4d.7 needs-you banner and Show me
- [x] 4d.8 status line
- [x] 4d.9 narrow layouts
- [x] 4d.10 4d's docs and leftovers
- [x] 4c.1 idle life: the schedule
- [x] 4c.2 idle life: in the world
- [x] 4c.3 small talk
- [x] 4c.4 the furnace and the flames
- [x] 4c.5 needs-you and error markers
- [x] 4c.6 the screens
- [x] 4c.7 4c's docs
- [x] 4f.1 the assets test
- [x] 4f.2 the size budget test
- [x] 4f.3 the bundled hall's types
- [x] 4f.4 CLAUDE.md and the README text
- [ ] CLIP the raised-hand clip (whenever Dima's files are there; not blocking)
- [ ] T the test phase (later, with Dima)
- [ ] R the release prep (no tag)

## How to work

**The standing rules (unchanged, from CLAUDE.md):**

- Commits are Dima's only: `git -c user.name="Dmitriy Kremen" -c user.email="335452314+kremendev@users.noreply.github.com" commit`.
  No Co-Authored-By, no Claude-Session, no "Generated with Claude Code", anywhere.
- One commit per finished step, on `v3-next`, pushed. Never `main`, never a force-push, never a history rewrite.
- **No tag and no release** before Dima's desktop check. R prepares; Dima releases.
- A guard, hook or permission rule that blocks you is Dima's to switch: stop and say what blocks. Never turn off the
  plugin, a hook or a setting to get past it.
- Never run catalog installers. Never work around a network block or a classifier denial. Never touch credentials or
  payment details.
- The models are Dima's, all rights reserved, not MIT: never relicense them; `docs/ASSETS.md` lists each one.
- Agent role names never change (Lead/PM, Designer, Frontend dev, Backend dev, Reviewer). Original fantasy only: no
  game's or show's characters, names or emblems.
- Security rules of `docs/v4.0-plan.md` hold: the CSP stays as it is, no image packed into a GLB, no compressed models,
  nothing an agent sends becomes a model, texture, URL or 3D text, agent text is React text through `AgentText` (never
  `innerHTML`, never `dangerouslySetInnerHTML`).
- Rebuild the bundled hall in the same commit as a source change, as the repo does today.

**The speed rules (new, Dima's):**

- **Per commit:** `npm run check` from `D:\` (the drive-letter rule in CLAUDE.md), plus Vitest or React tests for the
  step's pure logic and new components. That's all.
- **Deferred to T:** the Edge checks in `tools/world-check/` (renders, compare, seats, walk, spots, policy, frames),
  planted-bug rounds, the Narrator pass, the three Windows scalings and frame times. Don't run them before T.
- **Don't stop for a question this plan answers.** For one it doesn't, take the option that (1) keeps every security
  and accessibility rule, (2) matches this plan and the mockup, (3) is smaller to build. Write it under "Decisions taken
  during the build" at the end of this file in the same commit, and carry on.
- **Stop only for:** a block (above), anything that can't be undone outside the repo, credentials, a network block, or
  `npm run check` failing for a reason outside your step that you can't fix in a few lines.
- Change only what a step needs. No refactors of code the step doesn't touch. `forge-keep` and `town/` stay frozen.
- If the session runs out, the next one starts from the first unticked step here.

## The decisions (19 Nov)

- **D1 The HUD mockup is approved** as drawn on Dima's "Forge Keep HUD" canvas (four boards: working overview, agent
  card with Follow, needs-you in Live, the label fonts). The spec below is that mockup in words; build from it.
- **D2 The world's label font:** name tags in **M PLUS Rounded 1c 700**, the self-hosted Latin subset the signs already
  use, falling back to Inter; bubbles in **Inter 500**. Tags are short names, and the rounded face makes them part of the
  keep; bubbles carry agent text in any language, which the Latin-only rounded subset can't, and keep the HUD's text
  rules. No new font file.
- **D3 Panels are solid** (`--ui-surface`), not glass: a stylesheet test can prove their contrast, which it can't over a
  moving 3D world.
- **D4 Demo controls** are icon buttons (Play, Pause, Next step, Restart) with `aria-label` and `title`. Before a run
  starts, the top bar's middle shows the task input ("e.g. Create a dashboard") as the task bar does today; once the
  run plays, the run line and the tiles replace it. Restart keeps the text, as today.
- **D5 The drawer** starts open when the window is at least 80rem (1280 px at 100%) wide, closed below; the viewer's
  last choice is kept in `localStorage` (every read and write in try/catch, the page fine without it).
- **D6 Order: 4d before 4c.** The labels layer and the agent list come first: 4c's markers and small talk draw on them,
  and 4d brings back agent selection for the keyboard and screen readers, which blocks any release.
- **D7 Needs-you doesn't wait for Tripo.** A needs-you agent always shows an amber raised-hand marker over its head
  (kept after the clip lands: it reads at the usual 21 m). The figure plays `raise_hand` if its GLB has it, its idle
  clip until then.
- **D8 Error:** a red "!" marker over the head (`--ui-danger-fill` disc, `--ui-on-danger` mark), the tag's border in
  `--ui-danger`, the agent at its work spot.
- **D9 Idle life** with the four clips there are (walk, idle, sit, play_mobile_game), by place and props: the two orcs
  at the Training yard anvil (idle clip, sparks from the anvil now and then) or drinking at the Tavern (sit, a mug);
  the Designer at the Garden easel or the pond (idle); the Reviewer reading on the Courtyard bench or by the Tavern fire
  (sit); the Lead wandering the outdoor paths between idle spots, pausing 8 to 15 s. Each idle agent changes activity
  every 45 to 90 s. Never a work room, never the Forge (they may walk through it).
- **D10 Small talk stays** (today's 2D hall has it): two or more idle agents in one idle area sometimes trade a line
  from our own fixed list, at most one bubble per area every 20 s. Never agent output.
- **D11 The furnace and flames** as `docs/v4.0-plan.md` proposes: the mouth's colour follows 0, 1 and 2+ working
  agents (the 2D hall's three colours), the glow grows up to 4, as one glowing material and one light; each fire and
  candle flickers in its own phase. Reduced motion stops the flicker; the colour still changes.
- **D12 Screens:** every lit screen in the keep belongs to a work spot and glows only while that spot's owner works
  there (4b did the two dev desks; 4c applies the rule to any other screen the scene has).
- **D13 Specialists stay A:** the guild lead's name tag and card add "+ React dev" (the running specialist's name).
- **D14 No portrait in the agent card** for v4.0: name, species and model, look, state, task, tools, as today's panel.
- **D15 Narrow windows:** under 70rem the rooms rail becomes a "Rooms" menu button in the top bar, the drawer
  overlays the world and starts closed, and the agent list scrolls sideways. Under 48rem (the Pages demo on a phone)
  the top bar wraps to two rows and the drawer and card take the full width.
- **D16 Name tags and bubbles are HTML** over the canvas, projected from each figure's head every frame, at a fixed
  screen size, hidden when off screen or behind the camera, no occlusion test. Name tags are `aria-hidden`; everything
  they say is in the agent list.
- **D17 Show me** flies the camera to the agent in about a second (cuts with reduced motion), opens its card and moves
  the focus to the card's heading.
- **D18 Several agents needing you:** one banner, a row per agent (up to 3), each with its own Show me, then "and N
  more".
- **D19 Esc** closes the card first, then the drawer, and puts the focus back where it came from.
- **D20 Status messages** that aren't needs-you (Live waiting for a task, Hall offline, Session ended, Hall restarted,
  the hosted line) show as a slim muted line under the top bar, not a banner.
- **D21 4e in this push is only the raised-hand clip.** The apprentice figures (B), more clips (read, smash, spar,
  drink, hammer, paint), the crease-lines render for Dima and the scrying orb's look come after v4.0.0.
- **D22 The README's pictures** are taken in T with the existing render tools at 1440 x 900.
- **D23 Testing:** per commit as in "How to work"; the rest in T.

## The HUD (4d): the mockup in words

**Look.** Only the existing `--ui-*` tokens (the Team page's, in the app's stylesheet) and Inter. The chips keep the colours they have
(`STATE_STYLE` in `src/office/states.ts`, `STATUS_CHIP` in `src/office/tasks.ts`); the needs-you banner uses the
needs-you chip's pair (`#4d3a0c` ground, `#ffd97a` text) with a `--ui-flag` border, made two tokens
(`--ui-needs-bg`, `--ui-needs`). The tag pill's ground is `rgba(20,18,16,.86)`, a token too (`--ui-tag-bg`). No other
new colour. Sizes in rem, nothing under 13 px (0.8125rem). Panels: `--ui-surface`, 1px `--ui-line-strong`, radius
0.75rem, shadow `0 10px 28px rgba(0,0,0,.38)`. Buttons 2.5rem high, radius 0.5rem, `--ui-raised` with
`--ui-line-strong`; primary: `--ui-accent` with `--ui-on-accent`. Chips 1.375rem high, radius 0.375rem, 13 px 600.
Focus ring 2px `--ui-link`, offset 2px, on everything focusable, always visible.

**Layout** (1440 x 900 reference, 1rem = 16 px; every panel inset 1rem from the window's edges):

- **World:** fills the window behind everything (`WorldView`, its fixed `role="img"` label unchanged).
- **Top bar** (top, full width, 4rem): left, the `h1` "World of Agents", the version chip (`v` + `VERSION`, muted on
  `--ui-raised`) and the mode chip (Demo in the thinking chip's colours, Live in the done chip's, Offline and Ended
  muted). A divider. The middle, growing, `min-width: 0`: line 1 (13 px, muted, ellipsis) "Run: <task text> · Tasks
  done: X of N", and in Live " · " plus today's `ledgerText` ("This PC: 48K tokens · about $0.62 at API prices"); line
  2 the task tiles, up to 5 chips "<owner> · <status>" in the status colours with the task title as `title`, then a
  "+N" chip. Before a Demo run, the task input in place of both lines (D4). Right: in Demo the four icon buttons in a
  `role="group"` "Demo run", their disabled states as today; in Live, "Play demo" where today's page offers it. A
  divider, then "Team" (opens the Team page, as today).
- **Status line** (D20): under the top bar, centred over the world, muted text on a slim panel, only when there is one.
- **Needs-you banner** (D18): under the top bar, across the world between the rail and the drawer. Raised-hand icon,
  the text of `whoIsWaiting()` ("Frontend dev needs your approval in Claude Code"), 15 px 600, and a primary
  "Show me". It takes the status line's place while it shows. The `aria-live` region says what it says today.
- **Rooms rail** (left, under the top bar, 11.75rem wide): the heading "Rooms" (13 px, uppercase, muted, letter
  spacing 0.04em), then a button per view: "Whole keep" and the rooms in the map's order, with the map's own names (the
  mockup drew War hall, Library, Design studio, Workshop, The Forge, Tavern, Training yard, Courtyard, Garden),
  2.25rem each. The current view's button is
  `aria-pressed="true"` (`--ui-selected` ground, `--ui-accent` border). A badge shows how many agents are in a room
  (`aria-hidden`; the button's label says "Workshop, 2 agents"); a room holding a needs-you agent shows its badge in
  the needs-you pair and adds ", one needs you" to the label. A divider, then the Cutaway toggle (`aria-pressed`,
  "On"/"Off" beside it). Moving the camera by hand, or Follow, clears the pressed room.
- **Agent list** (bottom left): a panel holding one button per agent: its name (14 px 600) and its state chip. Pressed
  while its card is open (`--ui-selected`, accent border); a needs-you agent's border in `--ui-flag`, an error's in
  `--ui-danger`. A click opens the card, the same as clicking the figure in the world.
- **Agent card** (above the agent list, right of the rail, 24.5rem wide): today's `AgentPanel` content (name as `h2`,
  species and model, look, state chip, the waiting note, current task, task status, tools, specialists per D13), a
  close button (icon, "Close the card"), then "Follow" (a toggle: `aria-pressed`, reads "Following" while on, primary
  colours) and "Show in Activity" (opens the drawer on Activity filtered to that agent, today's agent filter). Follow
  keeps the agent in view until the camera is moved by hand or Follow is pressed again.
- **Drawer** (right, under the top bar to the bottom, 24rem wide): a `role="tablist"` with "Activity" and "Task
  board" (arrow keys move between them), and a collapse button (chevron, "Close the drawer"). Closed, it leaves a
  handle at the right edge ("Activity", with the unread For-you count). Activity is today's `ActivityFeed` unchanged
  (For you strip, Only for me, Show everyone, Copy, the Review board); Task board is today's `TaskBoard`.
- **Name tags** (D2, D16): a pill per figure above its head: an 8 px dot in its state chip's text colour, then the
  name, 13 px M PLUS Rounded 1c 700, `--ui-text` on `--ui-tag-bg` with a 1px `rgba(242,235,225,.18)` border. The
  selected agent's border is `--ui-accent`, a needs-you agent's `--ui-flag`, an error's `--ui-danger`.
- **Bubbles:** `--ui-text` ground, `--ui-on-accent` text, Inter 500 14 px / 19 px, at most 16rem wide, radius 14 px, a
  tail to the tag. The message text through `AgentText`. Today's bubble rules: never while its agent walks, its time
  runs only while it is on screen.

**Keyboard and screen readers:** tab order top bar, banner, rail, world (arrow keys pan when the canvas has focus),
agent list, card, drawer. Esc per D19. Every state the world shows is in the agent list and the card. Narrator gets
its pass in T.

**Narrow** per D15.

## The steps

Each step: build, its tests, `npm run check`, tick it above, commit, push. Commit messages in the repo's style, the
step first: "4d.3 (docs/v4-build-plan.md): the rooms rail …".

**S0.** Save this file as `docs/v4-build-plan.md`. In `docs/v4.0-plan.md`, under Questions, add "Decided (Dima,
19 Nov): the HUD mockup, the label font and the remaining questions, in docs/v4-build-plan.md (D1 to D23)", and
under Parts, the order 4d, 4c, 4f (D6). Commit.

**4d.1 HUD shell and tokens.** A HUD component over `WorldView` with the five areas (top bar, rail, agent list, card
slot, drawer) as positioned panels, the new tokens (`--ui-needs-bg`, `--ui-needs`, `--ui-tag-bg`) and the panel,
button and chip styles. Today's components move into their places without changing behaviour. The 2D hall fallback
keeps today's layout. Extend the stylesheet contrast test to the new pairs (banner, tag on its pill, bubble, chips on
the panel).

**4d.2 Top bar.** As specified, with the task input before a Demo run, the tiles with "+N", the Live ledger, the icon
buttons (Next step included), Play demo and Team. React tests: the run line, the tiles' text and order, "+N", the
buttons' names and disabled states, the ledger only in Live.

**4d.3 Rooms rail.** Buttons fly the camera to the room's view (the views from 4a), "Whole keep" to the overview, a cut
with reduced motion. The counts come from where each agent is (`placeFor()` and the map's rooms), as a pure function
with its own test. Cutaway toggle wired to the scene's cutaway. A hand move or Follow clears the pressed button.

**4d.4 Agent list, card and Follow.** The list, the card (D13, D14), Follow, Show in Activity, Esc, focus back. A click
on a figure opens the same card: a raycast on its figure (port the town's picking if 4a didn't bring it). React tests for the list's names, chips and pressed state, the
card's content and Follow's toggle.

**4d.5 Drawer.** Tabs with arrow keys, the collapse and the handle with its count, D5's default and memory, Esc. React
tests.

**4d.6 World labels.** A labels layer over the canvas: name tags and bubbles per D2 and D16, projected each frame,
hidden off screen; the specialist's "+ name" per D13; the selected, needs-you and error borders. Self-host nothing new:
the tags use the signs' font file. Tests for the pure parts (projection to screen, the hide rule, a tag's text) and that
a bubble renders agent text as text.

**4d.7 Needs-you banner and Show me.** D17, D18. React tests: one row per agent up to 3 and "and N more", Show me opens
the card and moves the focus.

**4d.8 Status line.** D20, from today's mode and hosted states. React tests.

**4d.9 Narrow layouts.** D15, by CSS and a Rooms menu button (a disclosure). React test for the menu button's
`aria-expanded`.

**4d.10 4d's docs.** In `docs/v4.0-plan.md`, 4d: what was built, "Checked" only for what the tests prove (the Edge
checks wait for T). Remove the stage UI the HUD replaced. CLAUDE.md: the HUD's place in the page and its rules.

**4c.1 Idle life: the schedule.** A pure, seeded schedule of idle activities per D9 (where, which clip, which prop,
how long). Tests: no idle spot in a work room or at the Forge, every activity in an idle area, the change every 45 to
90 s, with reduced motion each idle agent stands at one idle spot.

**4c.2 Idle life in the world.** The schedule through the walkers (a work event still pulls the agent back at once,
from where it stands), the clips, the props (the yard anvil's sparks, the mug). Reduced motion: no wandering, no idle
animation. Tests on the walker side.

**4c.3 Small talk.** D10 through the bubbles layer, a fixed list of our own lines (a dozen, plain and in the keep's
voice; no agent output, no real names). Tests: lines only from the list, the rate, only between idle agents in one
area.

**4c.4 The furnace and the flames.** D11. Tests for the colour and glow by working count (a pure function) and that
reduced motion stops the flicker but not the colour.

**4c.5 Needs-you and error markers.** D7, D8, as HTML markers in the labels layer (`aria-hidden`), a gentle bob that
stops with reduced motion; `raise_hand` played when the character has it. Tests: the marker for needs-you and error,
the clip chosen when present and the idle clip when not.

**4c.6 The screens.** D12 for every screen in the scene. A test for the rule.

**4c.7 4c's docs.** `docs/v4.0-plan.md` 4c, CLAUDE.md where it describes what the world shows.

**4f.1 The assets test.** A test that fails on any GLB or JPEG in the repo not listed in `docs/ASSETS.md` with its
author and licence, and on a Tripo model without its ProduceID.

**4f.2 The size budget test.** All models under 16 MB of files and 9 MB compressed, each character under 2 MB with
its JPEG (`docs/v4.0-plan.md`, Models).

**4f.3 The bundled hall's types.** `.glb` and `.jpg` in `PAGE_TYPES` and in the hall's manifest, held by a test (skip
whatever 4a already holds; say so in the commit).

**4f.4 CLAUDE.md and the README.** CLAUDE.md's "Design: v1 is locked", "How the hall is drawn" and font rules: the 2D
part kept for the fallback, the 3D world and the HUD described; the cast's lines (the Frontend dev's female orc, the
Reviewer's reaper, the heights). The README's description and "Credits and license" checked; its pictures wait for T.

**CLIP The raised-hand clip** (any time Dima's files are there; check at the start of each step, never wait). Dima
exports each character from Tripo with the extra clip into `D:\Dev\assets\world-of-agents\tripo\raise-hand\` (the five
GLBs, the names saying which is which). Then: the same pipeline as 4b's characters (`tools/models/slim_chars.py`,
`to_gltf_json.py`, `pack_gltf.py`, `to-glb.mjs`, per `tools/models/README.md`), the clip named `raise_hand`, each
character still under 2 MB and the totals under budget, the AIGC label and ProduceID kept and listed in
`docs/ASSETS.md`, a test that every character carries `raise_hand`. The seats check runs again in T.

**T The test phase** (later, with Dima at his PC; one commit per check that finds and fixes something):

- `npm run check` and `check:hall` clean.
- `tools/world-check/`: the render comparison (world and cast), the seats (with and without reduced motion), walk.mjs
  over the demo, spots.mjs, the policy check on the plugin page and the Pages build, the frames.
- Planted bugs for 4d and 4c: at least one per new test file, each caught, then removed.
- A screenshot per room and of each HUD state (working, card, needs-you, narrow), in Edge, no console errors, nothing
  reported by the policy.
- Dima: Narrator over the HUD, the self-check at three Windows scalings (100, 125, 150 %), frame times in a real window
  on his GPU, the look against the mockup.
- The README's pictures (D22).

**R The release prep** (no tag, no release): `plugin.json` to 4.0.0 and the version wherever the repo keeps it,
`docs/release-notes/v4.0.0.md`, and a check list for Dima's desktop check in the shape of
`docs/release-notes/v3.10.0-check.md` (fresh install, Demo, Live, needs-you, Team page, the 2D fallback with WebGL off,
reduced motion). Then stop: Dima checks, then says tag.

## Later, after v4.0.0 (not in this push)

The apprentice figures (B); more clips (read, the keyboard smash, spar, drink, hammer, paint) through 4e's checks; the
crease-lines render for Dima; the scrying orb's flat look; frame-time tuning from T's numbers.

## Decisions taken during the build

(Add each one here, in the commit that takes it: the question, the choice, one line why.)

- **4d.1, when the HUD shows.** (Replaced by Dima's decision of 20 Nov below.) The world takes a second or two to
  load, and the 2D hall can take over later (a lost context). Choice: the HUD only while the world is on screen (`WorldView`'s `onWorld`); while it loads, and whenever
  the 2D hall draws, the page keeps the layout it had. Why: the 2D hall is fitted to that layout ("the 2D hall fallback
  keeps today's layout"), every existing page test keeps its meaning, and it is the smaller build.
- **4d.1, the world mounted once.** App keeps three slots (above the stage, the stage, below it) in both layouts, so a
  switch never mounts the world again; the HUD's parts sit in those slots in the spec's tab order (top bar, status,
  rooms, the world, agents, card, drawer). Why: a second mount would build the whole scene again.
- **4d.1, the contrast test.** The plan says to extend the stylesheet contrast test, but none existed (v3.11's was never
  built). Choice: `src/hud/contrast.test.ts`, new, reading `:root` from the stylesheet: text 4.5:1 and the focus ring and
  meaningful borders 3:1 on every ground the HUD uses, the name tag over the brightest and darkest world, every chip, and
  no colour in a HUD rule but the tokens, the panel shadow and the tag border. Why: the plan's rule, written once.
- **4d.2, "before a Demo run starts".** The demo starts playing as the page loads, so a run is never literally not
  started. Choice: the top bar shows the task input while the demo run has no tasks yet (before the Lead splits the work,
  and again after Restart or a send); once there are tasks, the run line and the tiles. Why: it is the moment the run
  line would only say "Tasks done: 0 of 0", and the input is reachable again by Restart, which keeps the text as today.
- **4d.2, "Back to live" and "Go live".** The spec's right side lists the four icon buttons for Demo; today's page also
  offers these two there while a hall answers. Choice: kept, as text buttons after the "Demo run" group. Why: removing
  them would take away the way back to a live run.
- **4d.2, the mode chip's class.** The classic page's `.mode-offline` and `.mode-ended` carry their own colours. Choice:
  the HUD's chip takes Demo's and Live's colours from the chips (inline, as every chip does) and has no `mode-*` class,
  so Offline and Ended stay muted as specified.
- **4d.3, the counts in Live.** `placeFor()` sends a Live dev to the War hall's board until the world has handed it its
  scroll, which only the world knows. Choice: the counts use `placeFor()` without Live's scroll stop, so a working dev
  counts at its desk from the start, and a figure on its way counts where it is going. Why: with the stop, the badge
  would keep a dev in the War hall for its whole task; without it, it is wrong only for the walk to the board.
- **4d.3, what a hand move is.** Choice: a drag past 4 px, the wheel, or an arrow key on the focused canvas; a click
  alone (picking a figure, 4d.4) stops a flight but leaves the pressed room. The world reports it through
  `onHandMove()`, one listener, the page's. Why: a click on a figure doesn't move the camera, so it shouldn't say it did.
- **4d.4, what a click on an agent does.** The 2D hall's click selects, filters the feed and, for the Reviewer, opens the
  review board. Choice: in the HUD a list button opens the card or closes it again (it is a pressed toggle), a click on
  a figure opens it and never closes it, and neither filters the feed: "Show in Activity" does that, and the
  Reviewer's opens the review board over it as the 2D click does (v3.1, D9). Why: the spec gives filtering its own
  button, and the board stays one click from the Reviewer.
- **4d.4, Follow.** Choice: primary colours whether on or off, the words and `aria-pressed` saying which; it stays on
  when the card closes or another card opens, until a hand move or a second press, as the spec says. A figure
  followed into a house opens that house (the town's rule). Why: the spec's words, and the town's behaviour.
- **4d.4, picking.** Choice: the town's: a ray through the figures' skinned meshes, the agent from the root's
  `agentId`, on a pointer up that didn't drag; the mouse over a figure shows the pointer cursor. The town's click on a
  house (fly to it) is left out: the rail does that. Why: the plan names agent picking only.
- **4d.5, the handle's count.** The unread "For you" count lives in the feed, with its read marks. Choice: the feed
  tells the page through one optional callback (`onUnread`), and both tab panels stay mounted while hidden, so the feed
  keeps its open rows, filter and marks, and counts while the drawer is closed. Why: the feed stays as it is; a second
  copy of its read marks would drift from the first.
- **4d.5, the focus.** Choice: closing with the drawer's own button or Esc from inside it puts the focus on the handle;
  opening from the handle puts it on the chosen tab. Every open or close the viewer makes is kept as the choice (D5),
  "Show in Activity" included. Why: the focus never falls to the page's start, and one rule is simpler than two.
- **4d.6, the tags' weight.** D2 asks for M PLUS Rounded 1c 700 with no new font file, but the signs' one file is the
  Latin subset at 800 (`loadSignFont()`). Choice: the tags ask for 700, and the browser draws the nearest face it
  has, the 800 one. Why: "no new font file" is the harder rule; the difference at 13 px is slight.
- **4d.6, "on screen" for a bubble.** Choice: a bubble's time runs only while it shows, and in the keep it doesn't show
  while its agent walks or while its figure's head is off the view, so a bubble waits for its agent to come into view.
  Messages already there when the layer comes (the world ready mid-run) are not news, as when the 2D hall's view
  changes. Why: the rule's own words; a bubble no one could see is a bubble missed.
- **4d.6, where the head is.** Choice: the figure's root plus its rig height (seated, 0.74 of it) plus 0.25 m, projected
  after the camera moves each frame. Why: no bone lookup per frame, and the cast's heights are already the town's.
- **4d.7, Show me's flight.** Choice: the camera keeps the side it looks from (never flatter than the room views) and
  goes to 14 m from the figure, the house it is in opening, Follow ending; a cut with reduced motion (the world's own
  `flyTo()`). Why: close enough to see the raised hand, and the same flight the rooms use.
- **4d.7, the buttons' names.** Several "Show me" buttons can show at once. Choice: each is named "Show me <agent>"
  (the visible words first), and the banner is a region named "Needs you". Why: a screen reader's list of buttons tells
  them apart. `whoIsWaiting()` keeps its words, now built from `waitingAgents()` and `waitingWords()`, which the banner
  uses too.
- **4d.8, which states get the line.** D20 lists Live's and the hosted demo's; the page also says something in a local
  Demo ("Demo · the hall keeps watching Claude Code", "Demo · a scripted run") and while it looks for the hall. Choice:
  the HUD shows the page's status line whenever nobody needs you, those included, as one muted line (the hosted one
  wraps for its link); the banner takes its place otherwise. Why: the same words in both layouts, and the local Demo's
  line is the only place that says a hall is still watching behind it.
- **4d.9, the wrapped top bar.** Under 48rem the top bar wraps, to two rows or more (the task input, long tiles, a big
  browser zoom). Choice: App measures the bar (`useBox`) and sets `--hud-top` to its height plus an edge each side, so
  the rail, the status line, the banner and the drawer always start under it; 6rem stays the fallback. Why: a fixed
  number for "two rows" would overlap at three, and the measurement is a few lines.
- **4d.9, the Rooms menu.** Choice: a disclosure (`aria-expanded`, `aria-controls` the rail), shown by CSS under 70rem
  only; the rail is the same component, hidden there unless the menu is open, over the other panels. A room chosen
  closes it, and Esc closes it before anything else, the focus back on the button. Why: one rail, no second list; Esc's
  order follows what was opened last.
- **4c.1, D9's places on the keep's spots.** The keep has no spot by a yard anvil or by the Tavern's fire, and new spots
  would need T's floor and seat checks first. Choice: the idle spots there are (`src/world/idle.ts`, `IDLE_SPOTS`): the
  orcs at yard-1 and yard-2 (the idle clip) or the Tavern's three seats (sit, a mug); the Designer at the easel or the
  pond; the Reviewer on the Courtyard bench or at tavern-1, the seat on the hearth's side; the Lead pausing at the pond,
  the well and the yard. Each agent's rest spot comes first and is its fallback; spots are shared where D9's places
  meet, and an activity never takes a spot another agent stands at or is going to. Why: the smaller build on spots
  already proven by 4b's checks.
- **4c.1, the sparks.** The yard has training dummies and no anvil (the keep's one anvil is in the Forge, which idle
  never uses). Choice: an orc in the yard shows sparks from the dummy it faces, now and then. Why: the nearest thing D9
  can mean there, and no new prop in the town's scene, which T's render comparison holds.
- **4c.1, when an activity's time runs.** Choice: from the moment the agent is there, so a long walk never eats the
  Lead's 8 to 15 s pause or anyone's 45 to 90 s. Why: D9's times describe what is seen. The pose-to-clip table moved to
  `src/world/clips.ts`, pure, which the figures and the schedule both read.
- **4c.2, how idle life runs.** Choice: `src/world/idleRun.ts`, pure, decides each resting agent's activity and who
  moves on; the world runs it four times a second, after the figures move, with a fixed seed (so a check sees the same
  keep each time), and sends the walkers there. A resting agent starts where it stands if that is one of its idle spots,
  so nobody walks off as the keep loads; `update()` keeps a resting agent at its activity's spot instead of its rest
  spot; Restart clears it all. A working agent has no idle activity, so a work event pulls it away at once, from where
  it is, as before. Why: the walker side stays pure and tested; the world only carries it out.
- **4c.2, the props.** Choice: the mug is our own small prop (a wooden cylinder and its foam, in the kit's toon
  materials) in the orc's right hand, shown only while it sits at a Tavern seat with the mug activity; the yard's sparks
  are three of the desk's spark sprites between the orc and its dummy, a short burst about every 3.5 s while it stands
  there, none with reduced motion. Why: no new asset files, and the same sprites the desk already uses.
- **4c.3, small talk's rhythm.** Choice: each idle area keeps a 20 s clock of its own (offset per area, so two areas
  seldom speak at once); in about two slots of three, the speaker (taking turns among the idle agents standing there)
  says one of our twelve lines for the slot's first 4 s. Only agents whose state is idle, standing (not walking) in an
  idle area, as the 2D hall's rest-room rule; a message beats it, and it shows only while its figure is on the view.
  The world's head reports carry the room each figure stands in for this. Why: D10's "at most one bubble per area every
  20 s", and a keep that isn't chattering every slot.
- **4c.4, the furnace at rest.** The town's furnace idles orange (`#ff7a24`); D11 gives the mouth the 2D hall's colours,
  dark (`#5a2a10`) with nobody working. Choice: D11's, so with nobody working the Forge is darker than the town's, and
  T's render comparison will show the Forge's mouth apart from the town's at rest: expected, not a fault. The flames,
  the fire lights and the hearth already flickered each in its own phase, none with reduced motion (4a), so they are
  unchanged; the core and the light follow the same heat as the mouth. Why: the furnace is the busy indicator.
- **4c.5, "its idle clip until then".** A needs-you agent waits at its work spot, mostly in a chair, where the standing
  idle clip would put it inside the chair. Choice: until its model has `raise_hand`, it plays its resting clip at that
  spot, seated in a chair and idle standing, as the desk hold does (`figureMode()` in `src/world/clips.ts`, pure, with
  `SEATED` moved there too). Whether `raise_hand` plays seated is for the CLIP step and T's seats check, once Dima's
  files are there. Why: the plan's intent (D7: the figure rests until it can raise its hand) without a figure in a chair.
- **4c.5, the markers.** Choice: the needs-you marker is the banner's raised hand in `--ui-needs-bg` on an
  `--ui-flag` disc (amber), the error marker a bold "!" in `--ui-on-danger` on `--ui-danger-fill`, both over the tag in
  the labels layer (hidden from screen readers with it), bobbing a quarter rem by CSS, still with reduced motion.
- **4c.6, which screens.** The keep has two lit screens, the dev desks' (4b already lit them by the rule); the Library's
  orb, the War hall's task board and the keyboards' red keys are not screens. Choice: the rule moves into
  `src/world/screens.ts`, pure (`SCREENS`, each at its owner's work spot, and `screenLit()`), the world lights both
  through it, and its test also reads the scene's source, so a third `desk('screen')` without an owner fails. Why: the
  rule then holds for any screen added later, and nothing new is drawn.
- **4f.1, what was there.** `tests/models.test.ts` (4a, 4b) already held every file in `src/world/models` to a row with
  its author, and each rigged character to its ProduceID. Choice: `tests/assets.test.ts` adds the rest: any GLB or
  JPEG anywhere git knows of must be one of those or the bundled hall's byte-for-byte copy of one, every row's author
  under the document's one licence, and any GLB with Tripo's label, rigged or not, its ProduceID in its row. Why: the
  plan's "any in the repo" without testing the same thing twice.
- **4f.2, what was there.** `tests/models.test.ts` (4a, 4b) already held the budget as the plan states it: all models
  under 16 MB of files and 9 MB gzipped, each character under 2 MB with its JPEG. Choice: kept as it is, with one
  assertion added: the characters it measures are exactly the five agents' models, so one exported without its skin
  can't skip the 2 MB check. The raised-hand clip (CLIP) is measured by the same test when it lands. Why: no second
  copy of a test that already holds.
- **4f.3, held since 4a.** `.glb` (`model/gltf-binary`) and `.jpg` (`image/jpeg`) are in `PAGE_TYPES`
  (`server/page.ts`); `server/hall.test.ts` serves a model and a texture with those types, byte for byte, and
  `server/install.test.ts` requires every model and texture of `src/world/models` once in the bundled hall's manifest,
  whose reader refuses a type its extension isn't served as. Choice: nothing added, as the plan says. Why: each part of
  the step already has its test.
- **4f.4, how much of the README.** The plan asks for its description and credits; its "What the hall shows" and "How
  it's built" also described only the pixel-art page. Choice: the opening lines, "What the hall shows" (the keep, the
  HUD's panels, the idle places, the markers, Show me, and the clicks that became "Show in Activity"), the page's line
  in "How it's built", and the credits (how the models were made, the fonts' new places) now describe v4; the pictures
  wait for T (D22), and "New in v4.0" for R with the release notes. CLAUDE.md: the design section names the keep's
  look and the HUD's mockup beside the frozen 2D hall, and the stack's font line the name tags; its cast lines already
  had the keep's cast and heights (4b). Why: a reader of v4's README would otherwise follow clicks the HUD doesn't have.
- **Dima, 20 Nov, the HUD from the first paint** (replaces 4d.1's choice). Where `canDrawWorld()` is true the page
  is the HUD from its first render; the world's area shows a quiet backdrop while it loads (the dark ground the scene
  already sits on, `--ui-bg`, and "Raising the keep…" in `--ui-muted`, an ember ring that turns and stands still with
  reduced motion), and the old layout with the 2D hall appears only on the fallback (no WebGL 2, a failed load, a lost
  context). React tests: the HUD while loading, the same HUD once ready, the old layout on a failed load.
- **Dima's HUD from the first paint, the details.** "The keep's dark ground": the scene's own ground, `--ui-bg`, since
  the sky dome is drawn by the world and has no colour the page could borrow. The backdrop line is a `role="status"`,
  so a screen reader hears it once. While loading, the rooms rail's buttons, Cutaway and the narrow window's Rooms
  button show disabled, Follow on the card shows disabled (no figure to follow yet), the name tags aren't there, and
  Show me opens the card without moving a camera that isn't there. Why: the rule's accessibility first (a control that
  can't act says so), then the smaller build; nothing in the HUD moves when the world arrives.
- **Dima, 20 Nov, tags that would overlap.** A pure function, `settleTags()` in `src/hud/labels.ts`: the shown tags
  sorted by screen y; one whose box would overlap a tag already placed moves up by its own height plus 4 px, again
  until it is clear; no tag is ever hidden; a needs-you or failed agent's tag keeps its own spot and the others move
  around it. Tests: side by side, two and three agents on one spot, a tag's own height, the fixed tags, and a seeded
  sweep of 500 layouts with no overlap left.
- **Dima's tag rule, the details.** Which end first: the lowest tag on the screen (the figure nearest the front) keeps
  its spot and the ones above it move up, so a stack reads from the front; ties keep the roster's order. A fixed tag's
  box runs from its marker's top to the tag's bottom, so nothing moves onto the raised hand or the "!". Two fixed tags
  that would overlap stack like the others (the rule says never hide one, and one covering the other would). The whole
  label moves, so a bubble rides with its tag; bubbles themselves are not part of the rule. Sizes are read each frame
  before any label is written (five tags, no layout forced between writes). Why: the rule's own words first, then the
  accessibility of the marker, then the smaller build.
- **Dima, 20 Nov, the card's look line.** When the keep draws, the card shows a look line per character that matches
  its 3D model, written from the concept images (`D:\Dev\assets\world-of-agents\concepts`), one short line each in
  the roster's style, original fantasy, no names of games or shows; the 2D roster's lines stay for the 2D fallback.
  The Designer's model matches no concept image: its line describes the model as rendered.
- **Dima's look lines, the details.** Each line names only what the concept image and the model share, checked against
  close renders of all five (the cast's rest views) and each model's own texture: the Lead's model has no hat, the
  Frontend dev's no fur collar, the Backend dev's coat is red and gold over dark plate without the concept's fur, and
  the Reviewer carries the green flame (the town's, in its hand) where the concept has a staff. The character sheet is a
  dark-haired figure with a purple sash; the Designer's model is a silver-haired elf in cream and gold, so its line is
  the model's. They live in `roster.ts` as `keepLook`, beside `look`; `AgentPanel` shows it when asked
  (`keepLook`), which only the HUD's card does. The race stays as it is (the Reviewer's "Skeleton" is still true of a
  reaper); the line starts "Reaper:". A test holds each line to the roster's style and 60 characters. Why: the rule's
  own words, then the smaller build.
- **T, the rooms' counts after idle life.** T's screenshots showed the Reviewer in the Tavern while the rail counted
  it on the Courtyard's bench: the counts came from `placeFor()` (4d.3), which knows only an agent's rest spot, and
  4c's idle life moves resting agents between the idle areas. Choice: the world tells the page each figure's room when
  one changes (`onRooms`: where it stands, or where it is going, its next stop after a desk hold included), and the
  rail counts from that once the world is ready; before, from `placeFor()` as 4d.3 had it. A Live dev on its way to
  the War hall's board now counts there, which is true. Why: the rail must say where the figures are; the world is the
  only one that knows.
- **T, the tiles in a narrow window.** T's shots at 1100 and 400 px cut the top bar's tiles mid-word ("Fronte"), the
  last ones gone with no "+N" (D15 doesn't say what the tiles do there). Choice: they wrap onto another row, and the top
  bar grows with them (`--hud-top` is measured, so what is under it follows). Why: every tile stays readable, the
  plan's own narrow rule is a top bar that wraps, and it is one CSS line, where hiding the tiles that don't fit would
  need measuring.
- **T, the beer garden out of idle life** (replaces part of 4c.1's mapping). walk.mjs found the Frontend dev walking
  under the Tavern's sign board on its way to tavern-3, and idle-walks.mjs found every walk to or from that spot doing
  the same (8 of 22): the map's way into the beer garden, from outside the Tavern's door to tavern-3's way-point, runs
  under the board, 1.64 to 2.06 m up, through the orcs' heads, and its last leg runs along the bench it sits on. The town
  has the same route; nobody walked it there before idle life. Choice: tavern-3 leaves the orcs' idle spots, so they
  drink at tavern-1 and tavern-2, inside (D9 asks for "drinking at the Tavern", nothing more); the map stays the town's.
  Why: the smaller build that leaves no walk through furniture, and the map's route-for-route match with the town (4a)
  kept. A way into the beer garden that clears the sign and the bench needs two way-points, a map change for later.
- **T, two at rest on one spot.** walk.mjs, taught idle life, found the Lead and the Designer both resting at the
  Garden pond at the demo's end: the Designer had gone to idle there while the Lead worked, and the place map sent the
  Lead back to its rest spot. Choice: an agent coming to rest goes to its rest spot as before, unless another agent
  stands there or is going there; then to its first free idle spot (`idleRun.ts`), the walker turning there mid-path.
  Why: the promise of 4c.2, never two agents on one spot, then the smaller build (the place map stays as it is).
