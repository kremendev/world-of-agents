import { spawnSync } from 'node:child_process';
import { existsSync, readFileSync } from 'node:fs';
import { basename, join, resolve } from 'node:path';
import { describe, expect, it } from 'vitest';

/*
 * Every 3D model and texture in the repository (v4.0.0, 4f.1): a GLB or JPEG anywhere git knows of (tracked, or new and
 * not ignored, as the invisible-character test lists them) is either one of the keep's models in src/world/models,
 * listed in docs/ASSETS.md with its author under the document's one licence, or the bundled hall's copy of one, byte
 * for byte. A model carrying Tripo's AIGC label, rigged or not, has its ProduceID in its row. tests/models.test.ts holds
 * the models themselves (format, budget, packing); this holds where they may be and what the list says of each.
 */
const REPO = resolve(import.meta.dirname, '..');
const MODELS = 'src/world/models/';
const HALL = 'plugin/hall/page/assets/';
const ASSETS = readFileSync(join(REPO, 'docs/ASSETS.md'), 'utf8');
const ROWS = ASSETS.split('\n').filter((line) => line.startsWith('| `'));

const listed = spawnSync('git', ['ls-files', '-z', '--cached', '--others', '--exclude-standard'], {
  cwd: REPO,
  encoding: 'utf8',
});
const models = listed.stdout
  .split('\0')
  .filter((file) => /\.(glb|gltf|jpe?g)$/i.test(file))
  .filter((file) => existsSync(join(REPO, file)));

/** The row docs/ASSETS.md has for a file in src/world/models. */
const rowOf = (name: string) => ROWS.find((line) => line.startsWith(`| \`${name}\``));

/** A bundled copy's source name: Vite's `<name>-<hash>.<ext>`, the hash being 8 characters of [A-Za-z0-9_-]. */
const sourceOf = (file: string) => basename(file).replace(/-[\w-]{8}(\.[a-z]+)$/, '$1');

/** The Tripo label a GLB carries, if any. */
function aigcOf(file: string): { ProduceID?: string } | null {
  const bytes = readFileSync(join(REPO, file));
  if (bytes.toString('latin1', 0, 4) !== 'glTF') return null;
  const json = JSON.parse(bytes.toString('utf8', 20, 20 + bytes.readUInt32LE(12))) as {
    asset?: { extras?: { AIGC?: string } };
  };
  const label = json.asset?.extras?.AIGC;
  return label ? (JSON.parse(label) as { ProduceID?: string }) : null;
}

describe('every model and texture in the repository (4f.1)', () => {
  it("finds them all: the keep's, and the bundled hall's copies, nowhere else", () => {
    expect(listed.status).toBe(0);
    expect(models.filter((f) => f.startsWith(MODELS)).length).toBeGreaterThanOrEqual(27);
    for (const file of models) {
      expect(
        file.startsWith(MODELS) || file.startsWith(HALL),
        `${file}: a model outside the keep's folder`,
      ).toBe(true);
    }
  });

  it("lists each of the keep's in docs/ASSETS.md with its author, under the one licence the document states", () => {
    expect(ASSETS).toContain('Copyright (c) 2026 Dmitriy Kremen. All rights reserved.');
    expect(ASSETS).toContain("They are **not** covered by the repository's MIT licence");
    for (const file of models.filter((f) => f.startsWith(MODELS))) {
      const row = rowOf(basename(file));
      expect(row, `${file} is not in docs/ASSETS.md`).toBeDefined();
      expect(row?.split('|').at(-2)?.trim(), file).toBe('Dmitriy Kremen');
    }
  });

  it('takes every bundled copy byte for byte from a listed model', () => {
    for (const file of models.filter((f) => f.startsWith(HALL))) {
      const source = MODELS + sourceOf(file);
      expect(existsSync(join(REPO, source)), `${file}: no ${source}`).toBe(true);
      expect(rowOf(sourceOf(file)), file).toBeDefined();
      expect(readFileSync(join(REPO, file)).equals(readFileSync(join(REPO, source))), file).toBe(true);
    }
  });

  it("gives a model with Tripo's label its ProduceID in its row, rigged or not", () => {
    let tripo = 0;
    for (const file of models.filter((f) => f.startsWith(MODELS) && f.endsWith('.glb'))) {
      const label = aigcOf(file);
      const row = rowOf(basename(file)) ?? '';
      if (!label) {
        expect(row, `${file}: a Tripo row with no label in the model`).not.toMatch(/ProduceID/);
        continue;
      }
      tripo += 1;
      expect(label.ProduceID, file).toMatch(/^[0-9a-f-]{36}$/);
      expect(row, file).toContain(`Tripo, ProduceID ${label.ProduceID}`);
    }
    expect(tripo).toBe(5);
  });
});
