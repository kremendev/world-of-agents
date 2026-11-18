# The Forge Keep's models: how they are made

The models in `src/world/models/` are Dima's, all rights reserved, not under the repository's MIT licence (see
`docs/ASSETS.md`). This folder holds what makes them: the Blender jobs for the keep, and the steps that slim and pack a
model into the GLB the page loads. It came from `town/` on the branch `forge-keep` (89ae8b1). Nothing here runs in
`npm run check`; ESLint lints `to-glb.mjs`, the rest is Python.

Python: none is on PATH on Dima's PC. Blender's own runs these, numpy included:
`"C:\Program Files\Blender Foundation\Blender 5.3\5.3\python\bin\python.exe"`.

## The keep: Blender jobs

They run on Dima's PC through a headless runner, so the PC stays free: `blender/woa_watch.bat` starts
`blender -b --python woa_watch.py`, which runs each job dropped into `D:\Dev\assets\world-of-agents\woa-models\jobs` in a clean scene, moves
it to `jobs\done` and logs to `jobs\status.txt`.

**Only its own jobs run (4a).** When the runner starts it takes the SHA-256 of each `woa_b*.py` beside it; a file in
`jobs\` whose bytes match none of them is refused, logged and moved to `jobs\refused`, never run. Start it from this
folder, `tools/models/blender/woa_watch.bat`, so the jobs it trusts are the repository's. To run a changed job, change it
here and start the runner again. Before each job it writes its own `woa_kit.py` into that folder and hands the job the
folder as `WOA_HOME`, from which it loads the kit. The folder is named in one place, `HOME` in `woa_watch.py`, so a move is
one line there. Still close its window when a batch is done (or create `jobs\STOP`).

| Job                | Makes                                                                                   |
| ------------------ | --------------------------------------------------------------------------------------- |
| `woa_b1_shell.py`  | underside (closed, outward-facing), walls with the water gate and banners, towers, gate |
| `woa_b2_houses.py` | house_war, house_workshop, house_tavern, and the Forge (b4 rebuilds it)                 |
| `woa_b3_town.py`   | house_library, house_studio, yard, watch, dock                                          |
| `woa_b4_garden.py` | forge (with its entrances), altar, garden, bridge, flora (10 trees, 5 bushes)           |

Jobs write models to `woa-models\keep` and previews to `woa-models\renders`. Coordinates: the world's
(x, y up, z) is Blender's (x, -z, y); a `rotation.y` of a is a Blender Z rotation of a.

## From a .glb to the page

```bash
PY="/c/Program Files/Blender Foundation/Blender 5.3/5.3/python/bin/python.exe"
"$PY" tools/models/to_gltf_json.py <in.glb> <work_dir>                  # the packer's input: glTF JSON, texture out as .jpg
"$PY" tools/models/pack_gltf.py <work_dir>/<name>.gltf.json <packed.gltf.json>
node tools/models/to-glb.mjs src/world/models <packed.gltf.json>          # the GLB the page loads, the .jpg beside it
```

`pack_gltf.py` packs about half the size and stays plain glTF (`KHR_mesh_quantization`: no decoder, no WebAssembly).
`to-glb.mjs` puts every buffer into the GLB's binary chunk, so nothing loads from a `data:` URI, and refuses an image
packed into the model: an image is a file beside it. Then list the file in `docs/ASSETS.md`;
`tests/models.test.ts` holds every model to the format and the budget.

## The characters (4b)

Made in Tripo Studio from our own concept images: image to 3D, Tripo's Mixamo-compatible rig, its preset clips, exported
as GLB with the skeleton. Then `slim_chars.py` (keeps the mesh, the skin, every animation and the colour texture), and
the three steps above. Each file keeps Tripo's AIGC label in `asset.extras`, and `docs/ASSETS.md` lists its ProduceID.
