/**
 * The keep's Blender models (v4.0.0, 4a): loaded from the page's own bundle, unpacked, and given the town's materials.
 * Ported from `town/src/m1-kit.js` (forge-keep, 89ae8b1), the path the town takes when every model is there: no
 * hand-built stand-ins and no deadline. The models ship with the page, so one that fails to load is a fault, and the
 * whole load fails with it (the page then shows the 2D hall). Every URL is a fixed one from the bundle, never from an
 * event. The files are GLB with every buffer in the binary chunk and no image (tests/models.test.ts), so nothing loads
 * from a data: or blob: URL.
 */
import * as THREE from 'three';
import { GLTFLoader, type GLTF } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js';
import type { Kit } from './kit';

const URLS = import.meta.glob('../models/*.glb', { query: '?url', import: 'default', eager: true }) as Record<
  string,
  string
>;

/** Static models arrive merged by material; the others whole, since their parts move or are placed one by one. */
export const KIT_FILES = {
  underside: 'static',
  walls: 'static',
  towers: 'static',
  gate: 'static',
  forge: 'static',
  house_war: 'parts',
  house_workshop: 'parts',
  house_tavern: 'parts',
  house_library: 'parts',
  house_studio: 'parts',
  yard: 'static',
  watch: 'static',
  dock: 'static',
  bridge: 'static',
  altar: 'static',
  garden: 'static',
  flora: 'parts',
} as const;

export type KitName = keyof typeof KIT_FILES;
type StaticName = { [K in KitName]: (typeof KIT_FILES)[K] extends 'static' ? K : never }[KitName];
type PartsName = Exclude<KitName, StaticName>;
export type KitModels = { readonly [K in StaticName]: THREE.Group } & { readonly [K in PartsName]: GLTF };

/** A model's URL in the bundle, by its name. */
export function modelUrl(name: string): string {
  const url = URLS[`../models/${name}.glb`];
  if (!url) throw new Error(`no model ${name} in the bundle`);
  return url;
}

// The files are packed (tools/models/pack_gltf.py): integer positions, normals, texture coordinates and weights, and
// no normals where they were flat. The scene merges and bakes plain Float32 geometry, so each model is unpacked once,
// here: every attribute back to Float32 (skin indices stay), a node's dequantization (extras.woa_q = [x, y, z, step])
// moved out of its transform into its geometry, and flat normals computed again.
const _dq = new THREE.Matrix4();
const _dqInv = new THREE.Matrix4();
type Quant = readonly [number, number, number, number];
export function plainModel(g: GLTF): GLTF {
  const done = new Set<THREE.BufferGeometry>();
  g.scene.traverse((o) => {
    const q = o.userData.woa_q as Quant | undefined;
    if (q) {
      _dq.makeScale(q[3], q[3], q[3]).setPosition(q[0], q[1], q[2]);
      o.matrix.compose(o.position, o.quaternion, o.scale).multiply(_dqInv.copy(_dq).invert());
      o.matrix.decompose(o.position, o.quaternion, o.scale);
    }
    if (!(o instanceof THREE.Mesh) || done.has(o.geometry)) return;
    const geo = o.geometry as THREE.BufferGeometry;
    done.add(geo);
    for (const [k, a] of Object.entries(geo.attributes)) {
      if (k === 'skinIndex' || (a.array instanceof Float32Array && !('isInterleavedBufferAttribute' in a)))
        continue;
      const n = a.itemSize;
      const out = new Float32Array(a.count * n);
      for (let i = 0; i < a.count; i++) {
        out[i * n] = a.getX(i);
        if (n > 1) out[i * n + 1] = a.getY(i);
        if (n > 2) out[i * n + 2] = a.getZ(i);
        if (n > 3) out[i * n + 3] = a.getW(i);
      }
      geo.setAttribute(k, new THREE.BufferAttribute(out, n));
    }
    const dq = q || (o.parent?.userData.woa_q as Quant | undefined); // a mesh of several materials is a group of meshes
    if (dq) geo.applyMatrix4(_dq.makeScale(dq[3], dq[3], dq[3]).setPosition(dq[0], dq[1], dq[2]));
    if (!geo.attributes.normal) geo.computeVertexNormals();
    geo.computeBoundingBox();
    geo.computeBoundingSphere();
  });
  return g;
}

// Blender materials become the town's own: parts that glow in Blender (windows, fire, crystals) take its glow,
// at a strength scaled from Blender's; everything else its toon shading in the same colour, so they batch with the rest.
export function kitMat(kit: Kit, src: THREE.Material): THREE.Material {
  const s = src as THREE.MeshStandardMaterial;
  const e = s.emissive;
  if (e && e.r + e.g + e.b > 0.01)
    return kit.glow('#' + e.getHexString(), Math.min(2.6, Math.round((s.emissiveIntensity || 1) * 40) / 100));
  return kit.toon('#' + s.color.getHexString());
}

const isGlow = (m: THREE.Material) => (m as THREE.MeshStandardMaterial).isMeshStandardMaterial === true;

/** Each mesh under a node as plain geometry in the node's world frame, grouped by the town's material for it. */
export function byKitMaterial(kit: Kit, node: THREE.Object3D): Map<THREE.Material, THREE.BufferGeometry[]> {
  const byMat = new Map<THREE.Material, THREE.BufferGeometry[]>();
  node.traverse((o) => {
    if (!(o instanceof THREE.Mesh)) return;
    const mat = kitMat(kit, o.material as THREE.Material);
    const g0 = o.geometry as THREE.BufferGeometry;
    const geo = g0.index ? g0.toNonIndexed() : g0.clone();
    for (const k of Object.keys(geo.attributes))
      if (k !== 'position' && k !== 'normal') geo.deleteAttribute(k);
    geo.applyMatrix4(o.matrixWorld);
    const list = byMat.get(mat);
    if (list) list.push(geo);
    else byMat.set(mat, [geo]);
  });
  return byMat;
}

// A static Blender model, merged to one mesh per material.
function shellPart(kit: Kit, g: GLTF): THREE.Group {
  g.scene.updateMatrixWorld(true);
  const out = new THREE.Group();
  for (const [mat, geos] of byKitMaterial(kit, g.scene)) {
    const merged = geos.length === 1 ? geos[0] : mergeGeometries(geos, false);
    if (!merged) continue;
    const m = new THREE.Mesh(merged, mat);
    m.castShadow = !isGlow(mat); // glowing parts (the town's glow material) cast no shadow
    m.receiveShadow = true;
    m.matrixAutoUpdate = false;
    out.add(m);
  }
  return out;
}

/** A named part of a model: the first node with that name. */
export function kitNode(model: GLTF, name: string): THREE.Object3D | null {
  let hit: THREE.Object3D | null = null;
  model.scene.traverse((o) => {
    if (!hit && (o.userData.name === name || o.name === name)) hit = o;
  });
  return hit;
}

export type FetchedModels = Readonly<Record<KitName, GLTF>>;

/** Every keep model, fetched at once from the bundle and unpacked; no material is made yet. */
export async function fetchKitModels(): Promise<FetchedModels> {
  const loader = new GLTFLoader();
  const names = Object.keys(KIT_FILES) as KitName[];
  const loaded = await Promise.all(names.map((n) => loader.loadAsync(modelUrl(n)).then(plainModel)));
  return Object.fromEntries(names.map((n, i) => [n, loaded[i] as GLTF])) as FetchedModels;
}

/**
 * The fetched models with the town's materials, made where the town makes them (after the island's, when its land
 * awaits the kit) and in the files' fixed order, so a material's id, and with it the draw order, is the same each time.
 */
export function finishKitModels(kit: Kit, fetched: FetchedModels): KitModels {
  const out: Record<string, THREE.Group | GLTF> = {};
  for (const n of Object.keys(KIT_FILES) as KitName[]) {
    const g = fetched[n];
    out[n] = KIT_FILES[n] === 'static' ? shellPart(kit, g) : g;
  }
  return out as KitModels;
}
