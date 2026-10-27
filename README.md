# World of Agents

A pixel-art office where five AI agents (Lead/PM, Designer, Frontend dev, Backend dev, Reviewer) sit at
desks in the Forge Hall and visibly work on the task you give them. Version 1 plays a scripted run with no AI
calls; version 2 connects real agents through a back-end that sends the same events.

Stack: React 19 + TypeScript (strict) + Vite, with the office drawn on Canvas 2D.

## Run it

Needs Node.js 20.19+ or 22.12+ (`node -v` to check).

```bash
npm install
npm run dev        # http://localhost:5173
```

| Script           | What it does                                        |
| ---------------- | --------------------------------------------------- |
| `npm run dev`    | Dev server with hot reload, on this machine only    |
| `npm run build`  | Type-checks, then builds to `dist/`                 |
| `npm run check`  | Type-check, lint, format check and tests in one go  |
| `npm test`       | Runs the tests once (`npm run test:watch` to watch) |
| `npm run lint`   | ESLint                                              |
| `npm run format` | Formats everything with Prettier                    |

## Folder layout

```
src/
  events/    the event contract (Zod schema + types); every event is validated here
  state/     the office state and the pure reducer that applies one event to it
  script/    the scripted demo run and the player that plays it on a timer
  pixel/     sprite format, crisp scaling for any screen, drawing helpers
  assets/    pixel art as text: one string per row, '.' is transparent
  office/    the roster, tasks and workstations
  office/hall/  the Forge Hall: room layout, prop placements, drawing, and the text on top
  page/      the page around the hall: task bar, task board, agent panel
  test/      test setup
```

## How the pixel art works

Sprites live in `src/assets/*.ts` as rows of characters, each character a key into the sprite's palette.
They are baked once into a small off-screen canvas and then drawn with `drawImage`, smoothing off.

The canvas is scaled in device pixels, not CSS pixels: at 125% Windows display scaling each art pixel is
still a whole number of screen pixels, so nothing blurs (`src/pixel/scale.ts`).

All art is original, drawn for this project from the v1 design. The only third-party asset is the
[Pixelify Sans](https://fontsource.org/fonts/pixelify-sans) font (SIL Open Font License 1.1), installed from npm
so the app makes no requests to Google Fonts.

## Security rules (from the v1 spec)

- **Agent output is untrusted text.** Render it as React text. ESLint blocks `dangerouslySetInnerHTML`.
- **Validate every event.** `parseEvent()` checks each event against the Zod schema: unknown agents,
  unknown keys, oversized text and odd ids are rejected, not rendered.
- **The API key never reaches the browser.** From v2 it lives in the back-end's `.env`, which git ignores.
  Never put it in a `VITE_` variable: Vite copies those into the browser bundle for anyone to read.
- **The dev server only listens on localhost.** Don't run it with `--host` unless you mean to share it.
