# Step 3 brief: the page around the hall

Everything here comes from the locked v1 design. Ask before changing the look.

## 1. Lights

- **Furnace mouth** (it's the busy indicator) follows the number of working agents (thinking, reading, writing):
  - 0: fill `#5a2a10`, no glow.
  - 1: fill `#f08a3c`.
  - 2 or more: fill `#ffb15a`.
  - Glow around the mouth grows with the count: radius `7 + 6n` art px, strength `0.3 + 0.15n` (cap at n = 4),
    colour `rgb(240, 138, 60)`. Use a radial halo like the candles, drawn just under the mouth.
- **Flicker**: candles (sconces, candelabras), braziers, the fireplace fire and every halo.
  Opacity steps between 1 and 0.8 in 3 steps over 1.1 s. Give each light its own phase so they don't pulse in sync.
- `prefers-reduced-motion`: no flicker; the furnace still changes colour (that's information, not decoration).

## 2. Page layout (desktop first, wraps on narrow screens)

1. **Header**:
   - Left: "Agent Office" and the "Forge Hall · v1" badge.
   - Middle: `Run: <task text>`, `Tasks done: x of N`, `Tokens: 0`.
   - Right: Play / Pause / Restart.
2. **The hall**.
3. **Task bar** under the hall:
   - Label: "Task for the Lead/PM".
   - Input with the placeholder "Describe what to build, e.g. Create a dashboard".
   - A "Send" button.
   - Note under it: "Version 1 plays a scripted run with no AI calls. Sending restarts the run: the Lead/PM walks
     in and picks up your task."
4. **Task board and agent panel** side by side (board about 1/3, panel about 2/3), stacking on narrow screens.

## 3. Task bar

- Send restarts the demo run and shows the typed text as `Run: …` in the header. Nothing is sent anywhere in v1.
- Trim the input. Ignore empty input. Cap it at 500 characters (`maxLength` plus a check).
- Render it as plain React text only. In v2 this text goes to the Lead/PM, and that makes it a
  prompt-injection surface. Note that in CLAUDE.md for v2.

## 4. Selecting an agent

- Each agent in the hall is clickable. Use real HTML `<button>`s in the label layer, positioned over each agent
  the same way the bubbles are, so keyboard and screen-reader users can select agents too. No hit-testing on the
  canvas.
- `aria-pressed` on the selected agent.
- `aria-label`: "Backend dev, Orc, Writing. Show details".
- Selected agent: dashed 2 px outline `#f08a3c`. Focus ring `#ffd27a`.
- The Lead/PM is selected by default.

## 5. Agent panel

- Sprite preview at 3x on a dark tile.
- Name. Then `Race · model in v2: Opus/Sonnet`. Then the look line. Then the state chip in the state colours.
- A details list:
  - Current task.
  - Task status.
  - Tools in v2.
  - Tokens: "0 · real numbers from v2".
- When the agent is waiting: "Waiting for {waitingFor}. Not running while it waits, so it uses 0 tokens."
- **Activity**: newest first, built from that agent's events (state changes and messages). Plain text only.
  Show "Nothing yet." when empty.
- Add a visually hidden `aria-live="polite"` region that announces messages to "you". This fixes the gap where
  screen readers can't hear the bubbles.

Agent data to add to the roster:

| Agent        | Model (v2) | Tools (v2)                      | Look                                                     | Waiting for          |
| ------------ | ---------- | ------------------------------- | -------------------------------------------------------- | -------------------- |
| Lead/PM      | Opus       | Read, Write, start agents       | Strategist: patched cape, map case, quill behind the ear | every task to finish |
| Designer     | Sonnet     | Read, Write (design files only) | Artisan: work apron, brushes and pencils, brush in hand  | the Lead/PM          |
| Frontend dev | Sonnet     | Read, Edit, Write, Bash         | Two huge swords on the back, scar over the left eye      | the Designer         |
| Backend dev  | Sonnet     | Read, Edit, Write, Bash         | Huge forge hammer on the back, scars on jaw and arm      | the Lead/PM          |
| Reviewer     | Sonnet     | Read, Grep                      | Old scholar: hooded robe, spectacles, candle in hand     | both devs to finish  |

## 6. Task board

- Heading "Task board" and "x of N done".
- One row per task: a status chip (fixed width), the title, and the owner.
- Status colours (background / text):
  - Todo `#2e2924` / `#d6c9b3`
  - In progress `#4a2a12` / `#ffb27a`
  - In review `#1f3d39` / `#a9e6dc`
  - Done `#2c4622` / `#c4e8a8`
- "No tasks yet" when empty.

## 7. Page colours and type

- Page `#17130f`, panels `#241d17` with a 2 px `#3a2f25` border, text `#f3e9d8`, muted text `#b9a990`.
- Primary button `#f08a3c` on `#17130f`.
- Headings and chips in Pixelify Sans, body text in the system font.
- Touch targets at least 44 px. Text contrast at least 4.5:1.

## Tests

- Furnace colour per count.
- Reduced motion turns off flicker but keeps the furnace colour.
- Send: trims, ignores empty input, caps length, restarts the run, and the text renders as text (try an
  `<img onerror>` payload).
- Selecting an agent by click and by keyboard updates the panel.
- The activity log only shows that agent's events.
- The aria-live region announces a message to you.
