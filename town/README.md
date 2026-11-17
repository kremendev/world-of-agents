# Forge Keep: the 3D town

The five agents in a walled anime town on a floating island, in three.js r160. It plays the same demo run as the hall
(no AI calls) and is published as a Claude artifact. It is separate from the v3 mod and the pixel-art hall: nothing in
`src/`, `server/` or `plugin/` uses it, and lint, Prettier and `npm run check` skip this folder.

## Layout

```
town/src/        the page: base.html (the HUD, the run), world.js (the map: rooms, spots, roads, the stream, decor),
                 and the 3D module in parts that build.py joins, in this order:
                 m1-kit.js     materials, textures, the model loader (embedded glTF), the Blender kit (KIT_P)
                 m3-props.js   props, trees, plantFlora() and growFlora() (the Blender flora set as instances)
                 m2-land.js    sky, island, underside, roads and their joins, the castle (awaits the Blender kit first)
                 m2b-gate.js   the hand-built gatehouse and water gate (fallbacks)
                 m4-houses.js  the houses and their cutaway; a Blender house fills the same groups
                 m5-areas.js   the Forge, courtyard, yard, garden water and pond, footbridges, decor, the dock
                 m5b-scatter.js trees, bushes, rocks, grass
                 m6-cast.js    the hand-built agents (also the invisible controllers of the Tripo models)
                 m6b-glb.js    the Tripo characters: loading, sizing, clips per pose
                 m7-run.js     agents in the world, the bake, camera, picking, labels, the loop
town/blender/    Blender jobs (see below) and woa_kit.py, the shared helpers
town/tools/      slim_chars.py (a Tripo export for the web), to_gltf_json.py (.glb to the .gltf.json the page loads),
                 pack_gltf.py (that .gltf.json about half as big, still plain glTF)
town/test/       check.sh (build + both page walks), serve.sh and shot.cjs (real renders), compare.cjs (packed against
                 unpacked models, vertex by vertex), seats.cjs (every agent on every seat), mock/ (the walks)
town/models/     chars/ (the five characters) and keep/ (the Blender models), packed, as the page loads them
```

## Build and check

```bash
python3 town/src/build.py town/dist/forge-keep.html   # the page; also writes town/src/module.mjs
town/test/check.sh                                    # build, node --check, both page walks (Playwright + Chromium)
```

The walks run on a stand-in three.js (`test/mock/gen.cjs`), so they prove the page runs end to end and every agent
reaches every spot, not how it looks. Over `file://` the model fetches fail by design and the hand-built fallbacks run.
For pictures: `town/test/serve.sh` (a test copy with a camera hook, never published), then
`THREE_DIR=<three.js checkout at tag r160> node town/test/shot.cjs http://127.0.0.1:8765/index.html views.json out/`
with views as `[{ "name": "garden", "p": [x, y, z], "t": [x, y, z] }]`. Software WebGL takes about a minute a shot.

After packing models again: `THREE_DIR=<r160 checkout> node town/test/compare.cjs <unpacked dir> town/models` loads
each unpacked and packed file with real three.js and the page's own unpacking, and fails a file whose vertices, normals,
triangles or posed skins moved past the limits (2 mm, 1 degree, 3 mm).

After a change to seating, furniture or a character: with `serve.sh` running,
`THREE_DIR=... node town/test/seats.cjs http://127.0.0.1:8765/index.html` puts every agent on every seated spot and
prints, by the bones, how far its hips sit from where they belong above the seat and where its toes are against the
floor; add `reduce` to run it with reduced motion. It counts frames, not seconds: software WebGL draws under one a
second, so a run takes about ten minutes.

To publish, the page goes up with `models/chars/*` as `chars/*` and `models/keep/*` as `keep/*` beside it.

## Models and fallbacks

Every model is optional. `KIT_FILES` in m1-kit.js lists the Blender files; all start loading at once, and each one
that arrives within 20 s replaces its hand-built part (the castle needs walls, towers and gate together). A file that
fails or is late leaves that part hand-built. The characters load on their own; a model that fails leaves the
hand-built figure. Artifacts serve JSON and JPEG but not .glb, hence `.gltf.json` (see tools/to_gltf_json.py).

The files are packed by `tools/pack_gltf.py` (39 MB of models became 19.5 MB): 16-bit positions with the
dequantization in the node's transform (KHR_mesh_quantization), no normals where the page can compute them flat
within 0.5 degree, 8- and 16-bit normals, texture coordinates and skin weights, animation keys that interpolation
reproduces dropped, and tracks that only hold the rest pose left out. It is plain glTF, so three.js reads it with no
decoder and no WebAssembly. `plainModel()` in m1-kit.js unpacks each model once as it loads (Float32 attributes, the
dequantization moved back into the geometry, flat normals computed), so everything after it sees what it always saw.
A host that gzips JSON sends about 10 MB of it; whether the artifact host does is not checked.

Lights and flames stay hand-built everywhere (torches, braziers, the furnace mouth, lamps): they animate, and the
furnace burns hotter the more agents work.

## The Blender jobs

They run on Dima's PC through a headless runner, so the PC stays free: `woa_watch.bat` starts
`blender -b --python woa_watch.py`, which runs every `.py` dropped into `Documents\WoA-models\jobs` in a clean scene,
moves it to `jobs\done` and logs to `jobs\status.txt`. **It runs any .py in that folder while it is open: close its
window when done** (or create `jobs\STOP`). Jobs exec `woa_kit.py` from `Documents\WoA-models`, write models to
`WoA-models\keep` and previews to `WoA-models\renders`. Each `.glb` then goes through `tools/to_gltf_json.py` and
`tools/pack_gltf.py` into `models/keep`.

| Job | Makes |
| --- | --- |
| woa_b1_shell.py | underside (closed, outward-facing), walls with the water gate and banners, towers, gate with the dragon skull |
| woa_b2_houses.py | house_war, house_workshop, house_tavern, and the Forge (b4 rebuilds it) |
| woa_b3_town.py | house_library, house_studio, yard, watch, dock |
| woa_b4_garden.py | forge (with its entrances), altar, garden, bridge, flora (10 trees, 5 bushes) |

Coordinates: town (x, y up, z) is Blender (x, -z, y); a town `rotation.y` of a is a Blender Z rotation of a.
Static models are in world coordinates (castle, underside, forge) or in the frame of the group the page already
places (yard, watch tower, dock, garden, altar, bridge). Houses are in house coordinates, in named parts the page puts
into the cutaway's groups: `<id>_base`, `<id>_<S|N|E|W>_lo` (stays) and `_hi` (folds), and for two storeys
`<id>_Ufloor` and `<id>_U<side>_lo/_hi`, then `<id>_roof`. Ground-floor walls are cut at 1.15 m (the stone band),
upper walls 0.9 m above their base, by the same rule as the hand-built walls (an upright box across the cut is cut in
two).

## The characters

Made in Tripo Studio: an anime concept image, image to 3D, the Mixamo rig, the presets walk, idle, sit and
play_mobile_game, exported as GLB with the skeleton, animations in place. Then `tools/slim_chars.py`,
`tools/to_gltf_json.py` and `tools/pack_gltf.py`. In town, desk work plays play_mobile_game (a seated clip with the
hands forward), chairs play sit, and the rest idle until there are more clips. Each model is sized to its hand-built
figure's height. The seated clips were made for a taller chair than the town's, and sit forward of it, so a seated
model is placed with its hips on the seat, over its middle (5.5% of its height above it, where a hip joint sits), and
each leg is bent by two-bone IK until its ankle stands at the height it has on the ground; a leg too short for that
hangs. With reduced motion, clips switch at once (the mixer's time stands still, so a crossfade would never end).

Each file keeps Tripo's AIGC label in `asset.extras` (the slim pass leaves it), so a model can be traced back:

| Role | File | Character | Tripo ProduceID |
| --- | --- | --- | --- |
| Lead/PM | lead | goblin | c85511cc-a168-4ab4-9ae7-04a3c1d717e7 |
| Designer | designer | elf | a948fe05-5274-4dce-b451-98cd177104b2 |
| Frontend dev | frontend | female orc | 8cf8b93b-34a9-4601-a16f-9c6f158c71ea |
| Backend dev | backend | male orc | 84460b45-5985-4f55-a795-bc28ea6f0adf |
| Reviewer | reviewer | reaper | 8e214826-ae65-4aec-8e49-dc712ce597b4 |
