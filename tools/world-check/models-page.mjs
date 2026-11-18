// Builds the models policy check's page into <out_dir> (docs/v4.0-plan.md, Security): index.html, check.js
// (models-entry.js bundled with the repo's three by esbuild), plain.glb (a copy of the keep's bridge.glb) and
// packed.glb (one triangle whose texture is a 1 x 1 PNG packed inside the GLB, the case the policy has to refuse).
// Serve it with serve.ts, once with the header and once without, and read it with policy.mjs.
//
//   node tools/world-check/models-page.mjs <out_dir>
import { build } from 'esbuild';
import { PNG } from 'pngjs';
import { copyFileSync, mkdirSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const HERE = dirname(fileURLToPath(import.meta.url));
const out = process.argv[2];
if (!out) {
  console.error('usage: node models-page.mjs <out_dir>');
  process.exit(2);
}
mkdirSync(out, { recursive: true });

writeFileSync(
  join(out, 'index.html'),
  '<!doctype html><meta charset="utf-8"><title>GLB policy check</title><script type="module" src="./check.js"></script>\n',
);
await build({
  entryPoints: [join(HERE, 'models-entry.js')],
  bundle: true,
  format: 'esm',
  outfile: join(out, 'check.js'),
  logLevel: 'warning',
});
copyFileSync(join(HERE, '../../src/world/models/bridge.glb'), join(out, 'plain.glb'));

/** A GLB of one triangle whose material's texture is a PNG packed into its binary chunk. */
function packedGlb() {
  const png = new PNG({ width: 1, height: 1 });
  png.data.set([255, 0, 0, 255]);
  const image = PNG.sync.write(png);
  const pos = new Float32Array([0, 0, 0, 1, 0, 0, 0, 1, 0]);
  const uv = new Float32Array([0, 0, 1, 0, 0, 1]);
  const pad = (n) => (n + 3) & ~3;
  const bin = Buffer.alloc(pad(pos.byteLength + uv.byteLength + image.length));
  Buffer.from(pos.buffer).copy(bin, 0);
  Buffer.from(uv.buffer).copy(bin, pos.byteLength);
  image.copy(bin, pos.byteLength + uv.byteLength);
  const json = {
    asset: { version: '2.0' },
    scene: 0,
    scenes: [{ nodes: [0] }],
    nodes: [{ mesh: 0 }],
    meshes: [{ primitives: [{ attributes: { POSITION: 0, TEXCOORD_0: 1 }, material: 0 }] }],
    materials: [{ pbrMetallicRoughness: { baseColorTexture: { index: 0 } } }],
    textures: [{ source: 0 }],
    images: [{ bufferView: 2, mimeType: 'image/png' }],
    accessors: [
      { bufferView: 0, componentType: 5126, count: 3, type: 'VEC3', min: [0, 0, 0], max: [1, 1, 0] },
      { bufferView: 1, componentType: 5126, count: 3, type: 'VEC2' },
    ],
    bufferViews: [
      { buffer: 0, byteOffset: 0, byteLength: pos.byteLength },
      { buffer: 0, byteOffset: pos.byteLength, byteLength: uv.byteLength },
      { buffer: 0, byteOffset: pos.byteLength + uv.byteLength, byteLength: image.length },
    ],
    buffers: [{ byteLength: bin.length }],
  };
  let js = Buffer.from(JSON.stringify(json));
  js = Buffer.concat([js, Buffer.alloc(pad(js.length) - js.length, 0x20)]);
  const head = Buffer.alloc(12);
  head.write('glTF', 0);
  head.writeUInt32LE(2, 4);
  head.writeUInt32LE(12 + 8 + js.length + 8 + bin.length, 8);
  const chunk = (len, type) => {
    const b = Buffer.alloc(8);
    b.writeUInt32LE(len, 0);
    b.write(type, 4);
    return b;
  };
  return Buffer.concat([head, chunk(js.length, 'JSON'), js, chunk(bin.length, 'BIN\0'), bin]);
}
writeFileSync(join(out, 'packed.glb'), packedGlb());
console.log('built', out);
