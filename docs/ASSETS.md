# Assets

The models of the Forge Keep (v4.0.0, `docs/v4.0-plan.md`): who made them and who owns them.

## The models: all rights reserved

Copyright (c) 2026 Dmitriy Kremen. All rights reserved.

Every model of the Forge Keep, the five characters (made on a paid Tripo plan) and their textures, and the keep's
Blender models, belongs to Dmitriy Kremen. They are **not** covered by the repository's MIT licence, which applies to
the code only.

You may not copy, modify, redistribute, sell or use these models, in whole or in part, in any other work without his
written permission.

## How they were made

The characters: from concept images we made ourselves, in Tripo (image to 3D, its Mixamo-compatible rig, and its
preset clips `walk`, `idle`, `sit` and `play_mobile_game`), on Dima's paid plan. The keep: Blender scripts run on his
PC.

## The list

Every model is in `src/world/models/`, as GLB, and a test (`tests/models.test.ts`) fails on a file there that this
list doesn't name with its author. The keep's models came in with part 4a, from `town/models/keep/` on the branch
`forge-keep` (89ae8b1), made into GLB by `tools/models/to-glb.mjs` with every buffer view byte for byte as it was. The
characters come in with 4b, each with its ProduceID.

Each Blender model is made by a job in `tools/models/blender/`, run headless on Dima's PC, then packed (see
`tools/models/README.md`).

| File                 | What                                                     | Made by          | Author         |
| -------------------- | -------------------------------------------------------- | ---------------- | -------------- |
| `underside.glb`      | the floating island's underside                          | woa_b1_shell.py  | Dmitriy Kremen |
| `walls.glb`          | the castle walls, with the water gate and the banners    | woa_b1_shell.py  | Dmitriy Kremen |
| `towers.glb`         | the castle's towers                                      | woa_b1_shell.py  | Dmitriy Kremen |
| `gate.glb`           | the gatehouse, with the dragon skull                     | woa_b1_shell.py  | Dmitriy Kremen |
| `house_war.glb`      | the War hall, the Lead/PM's house                        | woa_b2_houses.py | Dmitriy Kremen |
| `house_workshop.glb` | the Workshop, the two devs' house                        | woa_b2_houses.py | Dmitriy Kremen |
| `house_tavern.glb`   | the Tavern                                               | woa_b2_houses.py | Dmitriy Kremen |
| `house_library.glb`  | the Library, the Reviewer's house                        | woa_b3_town.py   | Dmitriy Kremen |
| `house_studio.glb`   | the Design studio, the Designer's house                  | woa_b3_town.py   | Dmitriy Kremen |
| `yard.glb`           | the Training yard                                        | woa_b3_town.py   | Dmitriy Kremen |
| `watch.glb`          | the watch tower                                          | woa_b3_town.py   | Dmitriy Kremen |
| `dock.glb`           | the dock                                                 | woa_b3_town.py   | Dmitriy Kremen |
| `forge.glb`          | the Forge, with its entrances                            | woa_b4_garden.py | Dmitriy Kremen |
| `altar.glb`          | the altar                                                | woa_b4_garden.py | Dmitriy Kremen |
| `garden.glb`         | the Garden                                               | woa_b4_garden.py | Dmitriy Kremen |
| `bridge.glb`         | the footbridge                                           | woa_b4_garden.py | Dmitriy Kremen |
| `flora.glb`          | the flora set: 10 trees and 5 bushes, drawn as instances | woa_b4_garden.py | Dmitriy Kremen |
