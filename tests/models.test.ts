import { existsSync, readdirSync, readFileSync } from 'node:fs';
import { join, resolve } from 'node:path';
import { gzipSync } from 'node:zlib';
import { describe, expect, it } from 'vitest';

// The Forge Keep's models (docs/v4.0-plan.md, Models and Security): our own GLB files, held here to what the page's
// policy can load and to Dima's budget (17 Nov). MB is 10^6 bytes, as in the plan.
const DIR = resolve(import.meta.dirname, '../src/world/models');
const ASSETS = readFileSync(resolve(import.meta.dirname, '../docs/ASSETS.md'), 'utf8');
const MB = 1_000_000;

/** Read with no decoder: plain glTF, so three's GLTFLoader needs no WebAssembly. */
const REQUIRED_OK = new Set(['KHR_mesh_quantization']);
const USED_OK = new Set(['KHR_mesh_quantization', 'KHR_materials_emissive_strength']);

type Gltf = {
  asset?: { extras?: { AIGC?: string } };
  extensionsUsed?: string[];
  extensionsRequired?: string[];
  buffers?: { uri?: string; byteLength: number }[];
  images?: { uri?: string; bufferView?: number }[];
  skins?: unknown[];
};

type Glb = { name: string; bytes: Buffer; json: Gltf; bin: number };

/** A GLB's JSON, after checking its header and chunks the way the glTF 2.0 spec lays them out. */
function readGlb(name: string): Glb {
  const bytes = readFileSync(join(DIR, name));
  expect(bytes.toString('latin1', 0, 4), name).toBe('glTF');
  expect(bytes.readUInt32LE(4), name).toBe(2);
  expect(bytes.readUInt32LE(8), name).toBe(bytes.length);
  const jsonLength = bytes.readUInt32LE(12);
  expect(bytes.toString('latin1', 16, 20), name).toBe('JSON');
  const json = JSON.parse(bytes.toString('utf8', 20, 20 + jsonLength)) as Gltf;
  let bin = 0;
  if (20 + jsonLength < bytes.length) {
    bin = bytes.readUInt32LE(20 + jsonLength);
    expect(bytes.toString('latin1', 24 + jsonLength, 28 + jsonLength), name).toBe('BIN\0');
    expect(28 + jsonLength + bin, name).toBe(bytes.length);
  }
  return { name, bytes, json, bin };
}

const files = readdirSync(DIR).sort();
const glbs = files.filter((f) => f.endsWith('.glb')).map(readGlb);
const characters = glbs.filter((g) => (g.json.skins ?? []).length > 0);
const imagesOf = (g: Glb) => (g.json.images ?? []).map((i) => i.uri ?? '');

describe('the models', () => {
  it('are GLB files and the JPEGs they name, nothing else', () => {
    expect(glbs.length).toBeGreaterThanOrEqual(17);
    const named = new Set(glbs.flatMap(imagesOf));
    for (const file of files) expect(file.endsWith('.glb') || named.has(file), file).toBe(true);
  });

  it('carry only extensions three reads with no decoder: no Draco, Meshopt or KTX2', () => {
    for (const { name, json } of glbs) {
      for (const e of json.extensionsRequired ?? [])
        expect(REQUIRED_OK.has(e), `${name} requires ${e}`).toBe(true);
      for (const e of json.extensionsUsed ?? []) expect(USED_OK.has(e), `${name} uses ${e}`).toBe(true);
    }
  });

  it('keep every buffer in the binary chunk, so nothing loads from a data: URI', () => {
    for (const { name, json, bin } of glbs) {
      expect(json.buffers?.every((b) => b.uri === undefined) ?? true, name).toBe(true);
      expect(json.buffers?.[0]?.byteLength ?? 0, name).toBe(bin);
      expect(json.buffers?.length ?? 0, name).toBeLessThanOrEqual(1);
    }
  });

  it('pack no image: each one is a JPEG file beside the model, since a packed one would load from blob:', () => {
    for (const { name, json } of glbs) {
      for (const image of json.images ?? []) {
        expect(image.bufferView, name).toBeUndefined();
        expect(image.uri ?? '', name).toMatch(/^[a-z0-9_-]+\.jpg$/);
        expect(existsSync(join(DIR, image.uri ?? '')), `${name}: ${image.uri}`).toBe(true);
      }
    }
  });

  it('are binary to the invisible-character test: a NUL in the first 8 KB', () => {
    for (const { name, bytes } of glbs) expect(bytes.subarray(0, 8000).includes(0), name).toBe(true);
  });

  it('fit the budget: under 16 MB of files, under 9 MB compressed, a character under 2 MB with its texture', () => {
    const all = files.map((f) => readFileSync(join(DIR, f)));
    const total = all.reduce((sum, b) => sum + b.length, 0);
    const compressed = all.reduce((sum, b) => sum + gzipSync(b).length, 0);
    expect(total).toBeLessThan(16 * MB);
    expect(compressed).toBeLessThan(9 * MB);
    for (const c of characters) {
      const size =
        c.bytes.length + imagesOf(c).reduce((sum, f) => sum + readFileSync(join(DIR, f)).length, 0);
      expect(size, c.name).toBeLessThan(2 * MB);
    }
  });

  it('are each listed in docs/ASSETS.md with their author, and a Tripo character with its ProduceID', () => {
    const rows = ASSETS.split('\n').filter((line) => line.startsWith('| `'));
    for (const file of files) {
      const row = rows.find((line) => line.startsWith(`| \`${file}\``));
      expect(row, `${file} is not in docs/ASSETS.md`).toBeDefined();
      expect(row, file).toContain('Dmitriy Kremen');
    }
    for (const c of characters) {
      const label = JSON.parse(c.json.asset?.extras?.AIGC ?? '{}') as { ProduceID?: string };
      expect(label.ProduceID, c.name).toMatch(/^[0-9a-f-]{36}$/);
      expect(
        rows.find((line) => line.startsWith(`| \`${c.name}\``)),
        c.name,
      ).toContain(label.ProduceID);
    }
  });

  it('say whose they are: all rights reserved, not under the MIT licence', () => {
    expect(ASSETS).toContain('Copyright (c) 2026 Dmitriy Kremen. All rights reserved.');
    expect(ASSETS).toContain("They are **not** covered by the repository's MIT licence");
  });
});
