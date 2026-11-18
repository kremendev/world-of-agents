import * as THREE from 'three';
import { GLTFLoader, type GLTF } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { describe, expect, it } from 'vitest';
import { AGENT_IDS } from '../../events/schema';
import bridge from '../models/bridge.glb?url&inline';
import dock from '../models/dock.glb?url&inline';
import { CAST_FILES, KIT_FILES, modelUrl, plainModel, textureUrl } from './models';

// The page fetches each model by its bundle URL; here a model comes inline, as bytes, since a test has no server.
const parse = (dataUrl: string) =>
  new Promise<GLTF>((resolve, reject) => {
    const bytes = Uint8Array.from(atob(dataUrl.slice(dataUrl.indexOf(',') + 1)), (c) => c.charCodeAt(0));
    new GLTFLoader().parse(bytes.buffer, '', resolve, reject);
  });

/** Every vertex of every mesh, in the world, in traversal order. */
function worldVertices(root: THREE.Object3D): number[] {
  root.updateMatrixWorld(true);
  const out: number[] = [];
  const v = new THREE.Vector3();
  root.traverse((o) => {
    if (!(o instanceof THREE.Mesh)) return;
    const position = (o.geometry as THREE.BufferGeometry).attributes.position as THREE.BufferAttribute;
    for (let i = 0; i < position.count; i++)
      out.push(...v.fromBufferAttribute(position, i).applyMatrix4(o.matrixWorld));
  });
  return out;
}

describe('the keep models', () => {
  it('loads every model in src/world/models, and only those, each by its URL in the bundle', () => {
    const files = Object.keys(import.meta.glob('../models/*.glb'))
      .map((path) => path.slice('../models/'.length, -'.glb'.length))
      .sort();
    expect([...Object.keys(KIT_FILES), ...CAST_FILES].sort()).toEqual(files);
    for (const name of files) expect(modelUrl(name)).toMatch(new RegExp(`/${name}\\.glb$`));
    expect(() => modelUrl('missing')).toThrow('no model missing in the bundle');
  });

  it("has one character for each of the app's agents, in the app's order", () => {
    expect([...CAST_FILES]).toEqual([...AGENT_IDS]);
  });

  it("gives a character's texture only from the bundle's own JPEGs, whatever name the file gives", () => {
    const jpegs = Object.keys(import.meta.glob('../models/*.jpg'))
      .map((path) => path.slice('../models/'.length))
      .sort();
    expect(jpegs).toEqual(CAST_FILES.map((id) => `${id}.jpg`).sort());
    for (const file of jpegs) expect(textureUrl(file)).toMatch(new RegExp(`/${file.replace('.', '\\.')}$`));
    for (const file of [
      'missing.jpg',
      '../lead.jpg',
      'lead.glb',
      'https://example.com/lead.jpg',
      '/lead.jpg',
    ])
      expect(() => textureUrl(file), file).toThrow(`no texture ${file} in the bundle`);
  });

  // dock.glb has packed normals and bridge.glb none, so both of plainModel's paths run; each node of both is dequantized
  it.each([
    ['bridge', bridge],
    ['dock', dock],
  ])('unpacks %s to plain Float32 geometry without moving a vertex', async (_, url) => {
    const packed = worldVertices((await parse(url)).scene);
    const plain = plainModel(await parse(url));
    const moved = worldVertices(plain.scene);
    expect(moved).toHaveLength(packed.length);
    expect(packed.length).toBeGreaterThan(0);
    expect(Math.max(...moved.map((x, i) => Math.abs(x - (packed[i] ?? NaN))))).toBeLessThan(1e-4);
    plain.scene.traverse((o) => {
      if (!(o instanceof THREE.Mesh)) return;
      const geo = o.geometry as THREE.BufferGeometry;
      expect(geo.attributes.normal).toBeDefined();
      for (const [name, a] of Object.entries(geo.attributes))
        if (name !== 'skinIndex') expect(a.array, name).toBeInstanceOf(Float32Array);
    });
  });
});
