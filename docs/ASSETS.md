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
characters came in with 4b, from `town/models/chars/` at the same commit, made into GLB the same way, each JPEG a file
beside its model, byte for byte. Each keeps Tripo's AIGC label (the producer's company code and the model's ProduceID,
nothing about the account), and its ProduceID is in its row.

Each Blender model is made by a job in `tools/models/blender/`, run headless on Dima's PC, then packed (see
`tools/models/README.md`).

| File                 | What                                                     | Made by                                               | Author         |
| -------------------- | -------------------------------------------------------- | ----------------------------------------------------- | -------------- |
| `underside.glb`      | the floating island's underside                          | woa_b1_shell.py                                       | Dmitriy Kremen |
| `walls.glb`          | the castle walls, with the water gate and the banners    | woa_b1_shell.py                                       | Dmitriy Kremen |
| `towers.glb`         | the castle's towers                                      | woa_b1_shell.py                                       | Dmitriy Kremen |
| `gate.glb`           | the gatehouse, with the dragon skull                     | woa_b1_shell.py                                       | Dmitriy Kremen |
| `house_war.glb`      | the War hall, the Lead/PM's house                        | woa_b2_houses.py                                      | Dmitriy Kremen |
| `house_workshop.glb` | the Workshop, the two devs' house                        | woa_b2_houses.py                                      | Dmitriy Kremen |
| `house_tavern.glb`   | the Tavern                                               | woa_b2_houses.py                                      | Dmitriy Kremen |
| `house_library.glb`  | the Library, the Reviewer's house                        | woa_b3_town.py                                        | Dmitriy Kremen |
| `house_studio.glb`   | the Design studio, the Designer's house                  | woa_b3_town.py                                        | Dmitriy Kremen |
| `yard.glb`           | the Training yard                                        | woa_b3_town.py                                        | Dmitriy Kremen |
| `watch.glb`          | the watch tower                                          | woa_b3_town.py                                        | Dmitriy Kremen |
| `dock.glb`           | the dock                                                 | woa_b3_town.py                                        | Dmitriy Kremen |
| `forge.glb`          | the Forge, with its entrances                            | woa_b4_garden.py                                      | Dmitriy Kremen |
| `altar.glb`          | the altar                                                | woa_b4_garden.py                                      | Dmitriy Kremen |
| `garden.glb`         | the Garden                                               | woa_b4_garden.py                                      | Dmitriy Kremen |
| `bridge.glb`         | the footbridge                                           | woa_b4_garden.py                                      | Dmitriy Kremen |
| `flora.glb`          | the flora set: 10 trees and 5 bushes, drawn as instances | woa_b4_garden.py                                      | Dmitriy Kremen |
| `lead.glb`           | the Lead/PM: a goblin, the smallest (1.32 m)             | Tripo, ProduceID c85511cc-a168-4ab4-9ae7-04a3c1d717e7 | Dmitriy Kremen |
| `lead.jpg`           | its texture                                              | Tripo, with the model                                 | Dmitriy Kremen |
| `designer.glb`       | the Designer: an elf (1.78 m)                            | Tripo, ProduceID a948fe05-5274-4dce-b451-98cd177104b2 | Dmitriy Kremen |
| `designer.jpg`       | its texture                                              | Tripo, with the model                                 | Dmitriy Kremen |
| `frontend.glb`       | the Frontend dev: a female orc (1.92 m)                  | Tripo, ProduceID 8cf8b93b-34a9-4601-a16f-9c6f158c71ea | Dmitriy Kremen |
| `frontend.jpg`       | its texture                                              | Tripo, with the model                                 | Dmitriy Kremen |
| `backend.glb`        | the Backend dev: a male orc, the biggest (2.18 m)        | Tripo, ProduceID 84460b45-5985-4f55-a795-bc28ea6f0adf | Dmitriy Kremen |
| `backend.jpg`        | its texture                                              | Tripo, with the model                                 | Dmitriy Kremen |
| `reviewer.glb`       | the Reviewer: a reaper (1.95 m)                          | Tripo, ProduceID 8e214826-ae65-4aec-8e49-dc712ce597b4 | Dmitriy Kremen |
| `reviewer.jpg`       | its texture                                              | Tripo, with the model                                 | Dmitriy Kremen |
