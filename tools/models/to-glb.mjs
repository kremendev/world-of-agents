// A packed model (pack_gltf.py's .gltf.json, its buffers as base64 data: URIs) to the .glb the page loads.
//
// The page needs GLB: a .gltf whose buffers are data: URIs makes three's GLTFLoader fetch them, and the page's
// connect-src 'self' refuses data:. Every buffer goes into the one binary chunk, each 4-byte aligned, and the buffer
// views are moved onto it. An image stays its own file beside the model (a JPEG for a character), never packed into the
// GLB: three loads a packed image from a blob: URL, which the policy refuses too. Everything else, asset.extras (Tripo's
// AIGC label) included, is kept as it is. Usage:
//   node tools/models/to-glb.mjs <out_dir> <in.gltf.json>...   ->  <out_dir>/<name>.glb (+ each image file, copied)
import { copyFileSync, readFileSync, realpathSync, writeFileSync } from 'node:fs';
import { basename, dirname, join } from 'node:path';
import { pathToFileURL } from 'node:url';

const DATA_URI = /^data:application\/(?:octet-stream|gltf-buffer);base64,/;
const pad4 = (n) => (n + 3) & ~3;

/** The GLB bytes for one glTF JSON object whose buffers are base64 data: URIs. */
export function toGlb(gltf) {
  const json = structuredClone(gltf);
  const parts = [];
  const starts = [];
  let length = 0;
  for (const buffer of json.buffers ?? []) {
    if (typeof buffer.uri !== 'string' || !DATA_URI.test(buffer.uri)) {
      throw new Error('every buffer must be a base64 data: URI');
    }
    const bytes = Buffer.from(buffer.uri.replace(DATA_URI, ''), 'base64');
    if (bytes.length !== buffer.byteLength) throw new Error('a buffer is not as long as its byteLength says');
    starts.push(length);
    parts.push(bytes);
    length = pad4(length + bytes.length);
  }
  for (const view of json.bufferViews ?? []) {
    view.byteOffset = (view.byteOffset ?? 0) + starts[view.buffer];
    view.buffer = 0;
  }
  for (const image of json.images ?? []) {
    if (image.bufferView !== undefined || typeof image.uri !== 'string' || image.uri.startsWith('data:')) {
      throw new Error('an image must be a file beside the model, never packed into it');
    }
  }
  json.buffers = length > 0 ? [{ byteLength: length }] : undefined;

  const bin = Buffer.alloc(length);
  parts.forEach((bytes, i) => bytes.copy(bin, starts[i]));
  const text = Buffer.from(JSON.stringify(json), 'utf8');
  const jsonChunk = Buffer.alloc(pad4(text.length), 0x20);
  text.copy(jsonChunk);

  const chunks = [chunk(0x4e4f534a, jsonChunk)];
  if (length > 0) chunks.push(chunk(0x004e4942, bin));
  const header = Buffer.alloc(12);
  header.writeUInt32LE(0x46546c67, 0);
  header.writeUInt32LE(2, 4);
  header.writeUInt32LE(12 + chunks.reduce((sum, c) => sum + c.length, 0), 8);
  return Buffer.concat([header, ...chunks]);
}

function chunk(type, data) {
  const head = Buffer.alloc(8);
  head.writeUInt32LE(data.length, 0);
  head.writeUInt32LE(type, 4);
  return Buffer.concat([head, data]);
}

function main([outDir, ...inputs]) {
  if (!outDir || inputs.length === 0)
    throw new Error('usage: node tools/models/to-glb.mjs <out_dir> <in.gltf.json>...');
  for (const input of inputs) {
    const gltf = JSON.parse(readFileSync(input, 'utf8'));
    const out = join(outDir, basename(input).replace(/\.gltf\.json$/, '') + '.glb');
    writeFileSync(out, toGlb(gltf));
    for (const image of gltf.images ?? [])
      copyFileSync(join(dirname(input), image.uri), join(outDir, image.uri));
    console.log(out);
  }
}

// Run only when Node was started on this very file, compared by real path (as the plugin's scripts do).
if (process.argv[1] && import.meta.url === pathToFileURL(realpathSync(process.argv[1])).href) {
  main(process.argv.slice(2));
}
