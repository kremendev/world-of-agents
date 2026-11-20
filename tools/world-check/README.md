# World checks

The Forge Keep's checks in a real browser (v4.0.0, docs/v4.0-plan.md): what Vitest can't see, since jsdom has no
WebGL. They drive the installed Microsoft Edge through `playwright-core` (no browser download) and read PNGs with
`pngjs`, both pinned dev dependencies. They are run by hand in the self-checks, never in `npm run check`: in software
WebGL a full render takes minutes.

| Script            | What it does                                                                                                           |
| ----------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `render.mjs`      | Renders the views in `views.json` of the port or of the town, the same way for both                                    |
| `compare.mjs`     | Compares two folders of renders view by view against the rule set on 17 Nov; writes a diff image each                  |
| `policy.mjs`      | Reports what a page's Content-Security-Policy refused, and whether the world or the 2D hall came up                    |
| `spots.mjs`       | Every standing spot, and the walk to it from its room's hub, on clear floor; the seats as its control                  |
| `walk.mjs`        | The demo run played into the world: every figure at its place (at rest, one of its idle spots), no walk over furniture |
| `idle-walks.mjs`  | Every walk idle life can take, between each agent's idle spots and its rest spot, on clear floor                       |
| `seats.mjs`       | Every figure on every seated spot, in the town or the port: hips and toes against the town's rule                      |
| `frames.mjs`      | A frame's time on this PC's GPU, at one Windows scaling                                                                |
| `serve.ts`        | A static server on 127.0.0.1 with the hall's own policy header, or none (the control). Never port 4319                 |
| `models-page.mjs` | Builds the page that loads a plain GLB and one with a packed image, for `policy.mjs models`                            |
| `town.mjs`        | Makes the town's test copy from `forge-keep`, with the camera hook `render.mjs town` needs                             |

## The render comparison

```bash
npm run dev    # the port's check page: http://localhost:5173/src/world/check/index.html
node tools/world-check/render.mjs port http://localhost:5173/src/world/check/index.html tools/world-check/views.json <scratch>/port

git archive origin/forge-keep town | tar -x -C <scratch>
node tools/world-check/town.mjs <scratch>/town <scratch>/town-copy
npx tsx tools/world-check/serve.ts <scratch>/town-copy 8765 none
(cd <scratch> && npm pack three@0.160.0 && mkdir three160 && tar -xzf three-0.160.0.tgz -C three160)
THREE_DIR=<scratch>/three160/package node tools/world-check/render.mjs town http://127.0.0.1:8765/ tools/world-check/views.json <scratch>/town

node tools/world-check/compare.mjs <scratch>/town <scratch>/port <scratch>/diff
```

With `CAST=<placements.json>` (`{ "lead": "war-table", ... }`) on both renders the figures stay, each on the same spot in
both, every clip at its first frame, since the town starts each at a random time.

`cast/` holds 4b's two placements, all five at work and all five at rest, each with its views: two close ones of every
figure, from the front and from behind (`CAST=tools/world-check/cast/cast-work.json` with `cast/views-cast-work.json`).

Passing the numbers isn't the end of it: look at every diff image, and explain or fix each difference left. With
`NOSHADOW=1` on both renders no light casts a shadow, which tells three's shadow sampling apart from the rest.

## The policy checks

```bash
node tools/world-check/models-page.mjs <scratch>/models
npx tsx tools/world-check/serve.ts <scratch>/models 4381 header        # and again on another port with none
node tools/world-check/policy.mjs models http://127.0.0.1:4381/

npm run build:plugin-hall
npx tsx tools/world-check/serve.ts plugin/hall/page 4382 header
node tools/world-check/policy.mjs page http://127.0.0.1:4382/
```

For the Pages build, its meta policy instead of the header (Git Bash rewrites the base path without the first variable):
`MSYS_NO_PATHCONV=1 VITE_LIVE=false npx vite build --base=/world-of-agents/ --outDir <scratch>/pages`, then
`serve.ts <scratch>/pages 4383 none /world-of-agents/`. That overwrites nothing in `dist/`.

## The seats

```bash
node tools/world-check/seats.mjs port http://localhost:5173/src/world/check/index.html          # and again with reduce
THREE_DIR=<scratch>/three160/package node tools/world-check/seats.mjs town http://127.0.0.1:8765/
```

The town's rule (forge-keep): every figure's hips within 0.4 cm of their target, 5.5% of its height above the seat, and
its toes within 5 cm of the floor, with and without reduced motion.

## The spots

```bash
node tools/world-check/spots.mjs http://localhost:5173/src/world/check/index.html
```

Rays straight down in the real scene: anything more than 8 cm above the height a figure stands at blocks. A seat must
be found under every seated spot, or the check itself is broken.

## The walks

```bash
node tools/world-check/walk.mjs http://localhost:5173/src/world/check/index.html          # and again with reduce
```

The check page's `?demo` plays the demo run into the world as the page does. A figure standing still, not held, must
stand where `placeFor()` puts it; every walk's whole path is checked once for furniture. `NEXT=6` presses the demo's
Next step every 6 s, the figures landing first, as the page does. From T a figure at rest may stand at any of its idle
spots (4c's idle life), never two on one; the demo plays only some of idle life's walks, so:

```bash
node tools/world-check/idle-walks.mjs http://localhost:5173/src/world/check/index.html
```

## A frame's time

```bash
node tools/world-check/frames.mjs http://127.0.0.1:4382/ 2560 1300 1
```

Headless Edge draws on the GPU when no software flag is given. Keep everything else on the PC quiet while it counts.
