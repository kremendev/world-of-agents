/**
 * The notice beside the plugin's copy of the models (v4.0.0, 4a): plugin/hall/MODELS-LICENSE.md, written by
 * scripts/build-plugin-hall.ts and checked by server/install.test.ts. An install from GitHub copies plugin/ alone, so
 * neither the README nor docs/ASSETS.md comes with the models; this does, in docs/ASSETS.md's words, naming each model
 * and each character's texture the page carries. It is not in the hall's manifest, so it is never served.
 */
export function modelsNotice(files: Readonly<Record<string, string>>): string {
  const models = Object.keys(files)
    .filter((path) => path.endsWith('.glb') || path.endsWith('.jpg'))
    .sort();
  return [
    '# The models in page/: all rights reserved',
    '',
    'Copyright (c) 2026 Dmitriy Kremen. All rights reserved.',
    '',
    "The Forge Keep's 3D models and its characters' textures that this hall's page carries, the files listed below,",
    'belong to Dmitriy Kremen.',
    "They are **not** covered by the repository's MIT licence, which applies to the code only.",
    '',
    'You may not copy, modify, redistribute, sell or use these models, in whole or in part, in any other work without',
    'his written permission. docs/ASSETS.md in the repository lists each one with how it was made.',
    '',
    ...models.map((path) => `- page${path}`),
    '',
  ].join('\n');
}
