# World checks

The Forge Keep's checks in a real browser (v4.0.0, docs/v4.0-plan.md): what Vitest can't see, since jsdom has no
WebGL. They drive the installed Microsoft Edge through `playwright-core` (no browser download) and read PNGs with
`pngjs`, both pinned dev dependencies. They are run by hand in the self-checks, never in `npm run check`: in software
WebGL a full render takes minutes.

| Script            | What it does                                                                                           |
| ----------------- | ------------------------------------------------------------------------------------------------------ |
| `render.mjs`      | Renders the views in `views.json` of the port or of the town, the same way for both                    |
| `compare.mjs`     | Compares two folders of renders view by view against the rule set on 17 Nov; writes a diff image each  |
| `policy.mjs`      | Reports what a page's Content-Security-Policy refused, and whether the world or the 2D hall came up    |
| `frames.mjs`      | A frame's time on this PC's GPU, at one Windows scaling                                                |
| `serve.ts`        | A static server on 127.0.0.1 with the hall's own policy header, or none (the control). Never port 4319 |
| `models-page.mjs` | Builds the page that loads a plain GLB and one with a packed image, for `policy.mjs models`            |
| `town.mjs`        | Makes the town's test copy from `forge-keep`, with the camera hook `render.mjs town` needs             |

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

## A frame's time

```bash
node tools/world-check/frames.mjs http://127.0.0.1:4382/ 2560 1300 1
```

Headless Edge draws on the GPU when no software flag is given. Keep everything else on the PC quiet while it counts.
