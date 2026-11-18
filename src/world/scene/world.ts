/**
 * The Forge Keep in 3D (v4.0.0, 4a): the world built in the town's order, baked, lit, composited and run. Ported from
 * `town/src/m7-run.js` (forge-keep, 89ae8b1) without the agents (4b) and the HTML labels (the page's own). The
 * compositing is the town's to the letter, quirks included. In the town, `ShaderPass` cloned its uniforms: the normals
 * (a render target's texture) can't be cloned, so the line pass never had them and no crease line ever drew; the depth
 * texture's clone shared the original's source in r160, so both passes read the real depth (the silhouettes and the
 * depth of field work). three 0.187 gives a clone its own, empty source (three#30540), so here both passes get the real
 * depth texture directly and the normals stay null, as in the town Dima approved. Drawing the creases is a look change,
 * his to decide.
 */
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { OutputPass } from 'three/examples/jsm/postprocessing/OutputPass.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { ShaderPass } from 'three/examples/jsm/postprocessing/ShaderPass.js';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js';
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js';
import { CAMERA, roomView } from '../camera';
import type { RoomId } from '../map';
import { createAreas } from './areas';
import { applyTownBloom } from './bloom';
import { createHouses, type HouseRec, type TaskStatus, type WallSide } from './houses';
import { configureRenderer, createKit } from './kit';
import { createLand } from './land';
import { fetchKitModels } from './models';
import { createProps } from './props';
import { createScatter } from './scatter';

const AGENT_ORDER = ['lead', 'designer', 'frontend', 'backend', 'reviewer'] as const;
export type AgentKey = (typeof AGENT_ORDER)[number];

export type WorldOptions = {
  canvas: HTMLCanvasElement;
  width: number;
  height: number;
  dpr: number;
  reducedMotion: boolean;
  /** The task board's five tiles, as the town's demo starts them. */
  tasks?: readonly TaskStatus[];
};

export type World = Awaited<ReturnType<typeof createWorld>>;

export async function createWorld(opts: WorldOptions) {
  const REDUCE = opts.reducedMotion;
  let W = opts.width;
  let H0 = opts.height;
  const renderer = new THREE.WebGLRenderer({
    canvas: opts.canvas,
    antialias: true,
    powerPreference: 'high-performance',
  });
  configureRenderer(renderer, W, H0, opts.dpr);
  const scene = new THREE.Scene();

  // the town's order: the kit (m1) starts every model loading, the props (m3), the land waits for the models (m2),
  // then the houses (m4), the areas (m5) and the scatter (m5b)
  const kit = createKit(renderer, scene);
  const fetched = fetchKitModels();
  const props = createProps(kit);
  const land = await createLand(kit, props, fetched);
  const houses = createHouses(
    kit,
    props,
    land,
    land.models,
    opts.tasks ?? ['todo', 'todo', 'todo', 'todo', 'todo'],
  );
  const areas = createAreas(kit, props, land, houses, land.models);
  const scatter = createScatter(kit, props, houses, land.models);
  const { TEX, COL, toon, rnd, rr, pick, _c } = kit;
  const { FLAMES, SPINNERS, FLAGS, FIRE_LIGHTS } = props;
  const { HOUSES, deskF, deskB, hearthLight } = houses;
  const { mouthMat, coreMat, fireLight, chimneyTop, emberBase, waterTex, fallTex, mists, skyBoat, airship } =
    areas;
  const { CROWS } = scatter;
  const { skyDome, cloudRing } = land;

  // Each agent's phase draws on the shared generator here, where the town builds its agents, so everything after it
  // (the falling leaves) is placed as in the town. 4b gives the agents these phases.
  const agentPhase = Object.fromEntries(AGENT_ORDER.map((id) => [id, rnd() * 6])) as Record<AgentKey, number>;

  /* ---------------- bake: everything that never moves is merged by material,
     so the town draws in a few hundred calls instead of thousands */
  const housePicks: THREE.Mesh[] = [];
  {
    const dyn = new Set<THREE.Object3D>();
    for (const H of Object.values(HOUSES)) {
      // only the part of a wall that folds away moves; the stone band and everything low is baked
      for (const sd of Object.values(H.sides)) dyn.add(sd.up);
      dyn.add(H.roof.R);
      if (H.upper) {
        const upper = H.upper;
        dyn.add(upper.U);
        const cache = new Map<THREE.Material, THREE.Material>();
        upper.U.traverse((ob) => {
          if (!(ob instanceof THREE.Mesh)) return;
          const src = ob.material as THREE.Material;
          let cm = cache.get(src);
          if (!cm) {
            cm = src.clone();
            cache.set(src, cm);
            upper.mats.push(cm);
          }
          ob.material = cm;
        });
      }
    }
    for (const { f } of FLAMES) dyn.add(f);
    for (const s of SPINNERS) dyn.add(s.o);
    for (const f of FLAGS) dyn.add(f);
    for (const c of CROWS) dyn.add(c);
    [deskF.g, deskB.g, skyBoat, airship, cloudRing, skyDome].forEach((o) => dyn.add(o));
    scene.updateMatrixWorld(true);
    const buckets = new Map<string, { m: THREE.Material; cast: boolean; geos: THREE.BufferGeometry[] }>();
    const KEEP = ['position', 'normal', 'uv'];
    const walk = (o: THREE.Object3D) => {
      if (dyn.has(o)) return;
      for (const ch of [...o.children]) walk(ch);
      if (
        !(o instanceof THREE.Mesh) ||
        o instanceof THREE.InstancedMesh ||
        o.children.length ||
        Array.isArray(o.material)
      )
        return;
      const m = o.material as THREE.MeshToonMaterial;
      const g0 = o.geometry as THREE.BufferGeometry;
      if (
        m.transparent ||
        m.vertexColors ||
        (m as unknown as THREE.ShaderMaterial).isShaderMaterial ||
        m.depthWrite === false ||
        !g0.attributes.uv ||
        !g0.attributes.normal ||
        g0.attributes.color
      )
        return;
      const g = g0.index ? g0.toNonIndexed() : g0.clone();
      for (const k of Object.keys(g.attributes)) if (!KEEP.includes(k)) g.deleteAttribute(k);
      g.morphAttributes = {};
      g.clearGroups();
      g.applyMatrix4(o.matrixWorld);
      const key = m.uuid + (o.castShadow ? 's' : 'n');
      const bucket = buckets.get(key);
      if (bucket) bucket.geos.push(g);
      else buckets.set(key, { m, cast: o.castShadow, geos: [g] });
      o.parent?.remove(o);
    };
    walk(scene);
    for (const { m, cast, geos } of buckets.values()) {
      const merged = mergeGeometries(geos, false);
      if (!merged) {
        console.warn('could not merge', m.type);
        continue;
      }
      const mm = new THREE.Mesh(merged, m);
      mm.castShadow = cast;
      mm.receiveShadow = true;
      mm.matrixAutoUpdate = false;
      scene.add(mm);
    }
    const pickMat = new THREE.MeshBasicMaterial({ visible: false });
    for (const [id, H] of Object.entries(HOUSES)) {
      const h = H.top + H.roof.hR;
      const box = new THREE.Mesh(new THREE.BoxGeometry(H.r.w + 0.6, h, H.r.d + 0.6), pickMat);
      box.position.set(H.r.x, h / 2, H.r.z);
      box.rotation.y = H.r.ry || 0;
      box.userData.houseId = id;
      scene.add(box);
      box.updateMatrixWorld(true);
      housePicks.push(box);
    }
  }

  /* ---------------- camera */
  const camera = new THREE.PerspectiveCamera(CAMERA.fov, W / H0, CAMERA.near, CAMERA.far);
  const HOME = { t: new THREE.Vector3(...CAMERA.home.target), p: new THREE.Vector3(...CAMERA.home.position) };
  camera.position.copy(HOME.p);
  const controls = new OrbitControls(camera, renderer.domElement);
  controls.target.copy(HOME.t);
  controls.enableDamping = true;
  controls.dampingFactor = 0.08;
  controls.minDistance = CAMERA.minDistance;
  controls.maxDistance = CAMERA.maxDistance;
  controls.maxPolarAngle = CAMERA.maxPolarAngle;
  controls.minPolarAngle = CAMERA.minPolarAngle;
  controls.screenSpacePanning = false;
  controls.zoomSpeed = 0.8;
  controls.update();
  // keep the point you orbit around on the island, at ground level
  function clampTarget() {
    const t = controls.target;
    const r = Math.hypot(t.x, t.z);
    const max = CAMERA.targetRadius;
    if (r > max) {
      const k = max / r;
      camera.position.x -= t.x * (1 - k);
      camera.position.z -= t.z * (1 - k);
      t.x *= k;
      t.z *= k;
    }
    if (t.y < CAMERA.targetMinY || t.y > CAMERA.targetMaxY) {
      const ny = Math.max(CAMERA.targetMinY, Math.min(CAMERA.targetMaxY, t.y));
      camera.position.y += ny - t.y;
      t.y = ny;
    }
    if (camera.position.y < CAMERA.minHeight) camera.position.y = CAMERA.minHeight;
  }
  let fly: {
    t0: number;
    dur: number;
    ft: THREE.Vector3;
    fp: THREE.Vector3;
    tt: THREE.Vector3;
    tp: THREE.Vector3;
  } | null = null;
  let focusRoom: string | null = null;
  let openHouses = false;
  function flyTo(target: THREE.Vector3, pos: THREE.Vector3) {
    if (REDUCE) {
      controls.target.copy(target);
      camera.position.copy(pos);
      controls.update();
      return;
    }
    fly = {
      t0: performance.now(),
      dur: 1100,
      ft: controls.target.clone(),
      fp: camera.position.clone(),
      tt: target,
      tp: pos,
    };
  }
  /** The camera to the overview, or to a room the way the town frames one (and that house opens). */
  function flyToRoom(id: RoomId | 'overview') {
    if (id === 'overview') {
      focusRoom = null;
      flyTo(HOME.t.clone(), HOME.p.clone());
      return;
    }
    const H = HOUSES[id];
    focusRoom = id;
    if (H) H.view = 'ground';
    const view = roomView(id, [camera.position.x - controls.target.x, camera.position.z - controls.target.z]);
    flyTo(new THREE.Vector3(...view.target), new THREE.Vector3(...view.position));
  }
  const stopFly = () => {
    fly = null;
  };
  renderer.domElement.addEventListener('pointerdown', stopFly);
  renderer.domElement.addEventListener('wheel', stopFly, { passive: true });

  /* ---------------- houses open up as you come close, or when you open one.
     Two-storey houses show the ground floor (upper storey lifts away) or the upper floor (only the roof lifts). */
  const houseIsOpen = (H: HouseRec) => openHouses || focusRoom === H.id || !!H.near;
  // whether the camera is close enough to open a house, with a margin so it doesn't flip at the edge
  function nearHouse(H: HouseRec, dist: number) {
    const t = controls.target;
    const td = Math.hypot(H.r.x - t.x, H.r.z - t.z);
    const rad = Math.max(H.r.w, H.r.d) * 0.8 + 9;
    H.near = H.near ? dist < 72 && td < rad + 4 : dist < 64 && td < rad;
  }
  function setFade(mats: THREE.Material[], on: boolean, state: { fading?: boolean }) {
    if (state.fading === on) return;
    state.fading = on;
    for (const m of mats) {
      m.transparent = on;
      m.needsUpdate = true;
    }
  }
  // the upper part of a wall folds down into its lower part
  function fold(side: WallSide, cut: boolean, kw: number) {
    const t = cut ? 0 : 1;
    side.s += (t - side.s) * kw;
    if (Math.abs(side.s - t) < 0.004) side.s = t;
    side.up.scale.y = Math.max(0.001, side.s);
    side.up.visible = side.s > 0.03;
  }
  function updateHouses(dt: number) {
    const dist = camera.position.distanceTo(controls.target);
    const k = REDUCE ? 1 : Math.min(1, dt * 5);
    const kw = REDUCE ? 1 : Math.min(1, dt * 6);
    for (const H of Object.values(HOUSES)) {
      nearHouse(H, dist);
      const open = houseIsOpen(H);
      const upperView = open && !!H.upper && H.view === 'upper';
      const goal = open ? 1 : 0;
      H.lift += (goal - H.lift) * k;
      if (Math.abs(H.lift - goal) < 0.002) H.lift = goal;
      const R = H.roof;
      R.R.position.y = R.base + H.lift * 3.4;
      R.R.visible = H.lift < 0.97;
      for (const m of R.mats) m.opacity = 1 - H.lift;
      const dx = camera.position.x - H.r.x;
      const dz = camera.position.z - H.r.z;
      const l = Math.hypot(dx, dz) || 1;
      const c = Math.cos(H.r.ry || 0);
      const s = Math.sin(H.r.ry || 0);
      // a wall folds once it clearly faces the camera and stands again only once it clearly doesn't
      const facing = (side: WallSide) => {
        const d = ((side.n[0] * c + side.n[1] * s) * dx + (-side.n[0] * s + side.n[1] * c) * dz) / l;
        if (d > 0.32) side.wish = true;
        else if (d < 0.06) side.wish = false;
        return !!side.wish;
      };
      for (const side of Object.values(H.sides)) fold(side, open && !upperView && facing(side), kw);
      if (H.upper) {
        const U = H.upper;
        const ug = open && !upperView ? 1 : 0;
        U.lift += (ug - U.lift) * k;
        if (Math.abs(U.lift - ug) < 0.002) U.lift = ug;
        setFade(U.mats, U.lift > 0, U);
        U.U.position.y = U.top + U.lift * 3.4;
        U.U.visible = U.lift < 0.97;
        for (const m of U.mats) m.opacity = 1 - U.lift;
        for (const side of Object.values(U.sides)) fold(side, upperView && facing(side), kw);
      }
    }
  }

  /* ---------------- smoke, embers, sparks */
  type Puffs = THREE.Points<THREE.BufferGeometry, THREE.PointsMaterial>;
  function points(
    n: number,
    color: string,
    size: number,
    map: THREE.Texture | null,
    opacity: number,
    height: number,
  ): Puffs {
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(new Float32Array(n * 3), 3));
    const p = new THREE.Points(
      geo,
      new THREE.PointsMaterial({
        color,
        size,
        map,
        transparent: true,
        opacity,
        depthWrite: false,
        blending: map ? THREE.NormalBlending : THREE.AdditiveBlending,
      }),
    );
    p.frustumCulled = false;
    p.userData.seed = Float32Array.from({ length: n }, () => Math.random());
    p.userData.h = Float32Array.from({ length: n }, () => Math.random() * height);
    p.userData.top = height;
    p.visible = !REDUCE;
    scene.add(p);
    return p;
  }
  const SMOKES: { at: THREE.Vector3; p: Puffs; heat?: boolean; house?: HouseRec }[] = [
    { at: chimneyTop, p: points(30, '#d8cfc6', 2.2, TEX.soft, 0.5, 9), heat: true },
  ];
  for (const H of Object.values(HOUSES)) {
    if (!H.roof.smokeAt) continue;
    H.g.updateMatrixWorld(true);
    const w = H.roof.R.localToWorld(new THREE.Vector3(...H.roof.smokeAt));
    SMOKES.push({ at: w, p: points(14, '#d8cfc6', 1.4, TEX.soft, 0.45, 5), house: H });
  }
  const embers = points(60, '#ffb04a', 0.11, null, 0.9, 4);
  const sparks: THREE.Sprite[] = [];
  for (let i = 0; i < 4; i++) {
    const sp = new THREE.Sprite(
      new THREE.SpriteMaterial({
        map: TEX.spark,
        color: i % 2 ? '#ffd27a' : '#ffffff',
        transparent: true,
        opacity: 0,
        depthWrite: false,
        blending: THREE.AdditiveBlending,
      }),
    );
    sp.scale.setScalar(0.25);
    deskF.g.add(sp);
    sparks.push(sp);
  }

  /* ---------------- lights stay put
     three.js rebuilds every material when the number of visible lights changes. Lights that hung on folding walls,
     lifting roofs or upper floors switched with them, and the whole town flickered while the camera moved.
     So every static light lives at the scene root; one whose part of a house is hidden is dimmed to zero instead. */
  const PARKED: { l: THREE.PointLight; anc: THREE.Object3D[]; base: number }[] = [];
  {
    const toggles = new Set<THREE.Object3D>();
    for (const H of Object.values(HOUSES)) {
      toggles.add(H.roof.R);
      for (const sd of Object.values(H.sides)) toggles.add(sd.up);
      if (H.upper) {
        toggles.add(H.upper.U);
        for (const sd of Object.values(H.upper.sides)) toggles.add(sd.up);
      }
    }
    scene.updateMatrixWorld(true);
    const found: THREE.PointLight[] = [];
    scene.traverse((o) => {
      if (o instanceof THREE.PointLight) found.push(o);
    });
    for (const l of found) {
      const anc: THREE.Object3D[] = [];
      for (let o = l.parent, d = 0; o && d < 40; o = o.parent, d++) if (toggles.has(o)) anc.push(o);
      scene.attach(l);
      if (anc.length) PARKED.push({ l, anc, base: l.intensity });
    }
  }
  function updateParked() {
    for (const p of PARKED) {
      const on = p.anc.every((g) => g.visible);
      if (!on) p.l.intensity = 0;
      else if (p.l.intensity === 0) p.l.intensity = p.base;
    }
  }

  /* ---------------- effects: fire glow and embers from every brazier, dust in the sunlight, falling leaves.
     They live on their own layer, so the line pass never draws them. */
  const FX = 1;
  scene.updateMatrixWorld(true);
  const EMBER_SRC: THREE.Vector3[] = [];
  for (const { f, s } of FLAMES) {
    if (s < 1.3) continue;
    let o: THREE.Object3D | null = f;
    let moving = false;
    for (let d = 0; o && d < 40; d++) {
      if (o.userData.movesWithWall === true) moving = true;
      o = o.parent;
    }
    if (!moving) EMBER_SRC.push(f.getWorldPosition(new THREE.Vector3()));
  }
  function emberCloud(n: number) {
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(new Float32Array(n * 3), 3));
    geo.setAttribute('color', new THREE.BufferAttribute(new Float32Array(n * 3), 3));
    const p = new THREE.Points(
      geo,
      new THREE.PointsMaterial({
        size: 0.09,
        map: TEX.soft,
        vertexColors: true,
        transparent: true,
        depthWrite: false,
        blending: THREE.AdditiveBlending,
        toneMapped: false,
      }),
    );
    p.frustumCulled = false;
    p.visible = !REDUCE;
    scene.add(p);
    return p;
  }
  const fireEmbers = emberCloud(Math.max(1, EMBER_SRC.length * 7));
  const emberCount = (fireEmbers.geometry.attributes.position as THREE.BufferAttribute).count;
  const fe = {
    src: Float32Array.from({ length: emberCount }, (_, i) => i % Math.max(1, EMBER_SRC.length)),
    life: Float32Array.from({ length: emberCount }, () => Math.random()),
    sd: Float32Array.from({ length: emberCount }, () => Math.random()),
  };
  // motes of dust that catch the low sun, drifting in a box that follows the camera's target
  const MOTES = 240;
  const motes = new THREE.Points(
    new THREE.BufferGeometry(),
    new THREE.PointsMaterial({
      size: 0.07,
      map: TEX.soft,
      color: '#ffe2b0',
      transparent: true,
      opacity: 0.75,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    }),
  );
  motes.geometry.setAttribute('position', new THREE.BufferAttribute(new Float32Array(MOTES * 3), 3));
  const moteSeed = Float32Array.from({ length: MOTES * 3 }, () => Math.random());
  motes.frustumCulled = false;
  motes.visible = !REDUCE;
  scene.add(motes);
  // leaves falling, red and gold like the groves inside the walls
  const LEAVES = 80;
  const leafGeo = new THREE.PlaneGeometry(0.16, 0.1);
  const leaves = new THREE.InstancedMesh(leafGeo, toon('#ffffff', { side: THREE.DoubleSide }), LEAVES);
  const leafState: { x: number; y: number; z: number; r: number; v: number; w: number }[] = [];
  for (let i = 0; i < LEAVES; i++) {
    leaves.setColorAt(i, _c.set(pick([COL.autumn1, COL.autumn2, COL.autumn3, '#c9a03a'])));
    leafState.push({
      x: rr(-30, 30),
      y: rr(0, 12),
      z: rr(-30, 30),
      r: rr(0, 6),
      v: rr(0.5, 0.9),
      w: rr(1, 3),
    });
  }
  if (leaves.instanceColor) leaves.instanceColor.needsUpdate = true;
  leaves.frustumCulled = false;
  leaves.visible = !REDUCE;
  scene.add(leaves);
  const leafM = new THREE.Matrix4();
  const leafQ = new THREE.Quaternion();
  const leafE = new THREE.Euler();
  const leafP = new THREE.Vector3();
  const leafS = new THREE.Vector3(1, 1, 1);
  function updateFX(t: number, dt: number) {
    const fp = fireEmbers.geometry.attributes.position as THREE.BufferAttribute;
    const fc = fireEmbers.geometry.attributes.color as THREE.BufferAttribute;
    for (let i = 0; i < fp.count; i++) {
      const s = EMBER_SRC[fe.src[i] as number];
      if (!s) break;
      fe.life[i] = (fe.life[i] as number) + dt * (0.35 + (fe.sd[i] as number) * 0.4);
      if ((fe.life[i] as number) > 1) fe.life[i] = (fe.life[i] as number) - 1;
      const l = fe.life[i] as number;
      const sd = fe.sd[i] as number;
      fp.setXYZ(
        i,
        s.x + Math.sin(t * (1 + sd) + sd * 20) * 0.25 * l,
        s.y + 0.2 + l * 2.2,
        s.z + Math.cos(t * (0.8 + sd) + sd * 9) * 0.25 * l,
      );
      const k = (1 - l) * (0.6 + 0.4 * Math.sin(t * 13 + sd * 30)) * 2.2;
      fc.setXYZ(i, k, k * 0.48, k * 0.16);
    }
    fp.needsUpdate = true;
    fc.needsUpdate = true;
    const mp = motes.geometry.attributes.position as THREE.BufferAttribute;
    const c = controls.target;
    for (let i = 0; i < MOTES; i++) {
      const a = moteSeed[i * 3] as number;
      const b = moteSeed[i * 3 + 1] as number;
      const h = moteSeed[i * 3 + 2] as number;
      const x = ((((a * 44 + t * 0.25 * (b - 0.5) - c.x) % 44) + 66) % 44) - 22;
      const z = ((((b * 44 + t * 0.18 * (a - 0.3) - c.z) % 44) + 66) % 44) - 22;
      mp.setXYZ(i, c.x + x, 0.6 + h * 9 + Math.sin(t * 0.5 + a * 20) * 0.4, c.z + z);
    }
    mp.needsUpdate = true;
    for (let i = 0; i < LEAVES; i++) {
      const L = leafState[i] as (typeof leafState)[number];
      L.y -= dt * L.v;
      if (L.y < 0.05) {
        L.y = rr(8, 13);
        L.x = c.x + rr(-28, 28);
        L.z = c.z + rr(-28, 28);
      }
      leafP.set(L.x + Math.sin(t * 0.9 + L.r) * 0.9, L.y, L.z + Math.cos(t * 0.7 + L.r) * 0.6);
      leafE.set(t * L.w + L.r, t * 0.6 + L.r, Math.sin(t * 2 + L.r) * 1.2);
      leafM.compose(leafP, leafQ.setFromEuler(leafE), leafS);
      leaves.setMatrixAt(i, leafM);
    }
    leaves.instanceMatrix.needsUpdate = true;
  }
  // everything that is light, smoke, water or air goes on the effects layer
  scene.traverse((o) => {
    const m = (o as THREE.Mesh).material;
    if (
      o instanceof THREE.Points ||
      o instanceof THREE.Sprite ||
      o.userData.noLine ||
      (m &&
        !Array.isArray(m) &&
        ((m as THREE.Material).blending === THREE.AdditiveBlending ||
          (m as THREE.Material).depthWrite === false))
    )
      o.layers.set(FX);
  });
  for (const ob of [cloudRing, leaves, skyDome]) ob.traverse((o) => o.layers.set(FX));
  camera.layers.enable(FX);

  /* ---------------- compositing, after the way anime is shot:
     1. a pre-pass of normals and depth (effects left out) feeds a screen-space line pass;
     2. the colour pass with MSAA; 3. lines; 4. bloom for fire, glass and magic; 5. tone map;
     6. grade: depth of field, a little chromatic fringe, teal in the shade and gold in the light, contrast, vignette, grain. */
  const NMAT = new THREE.MeshNormalMaterial({ side: THREE.DoubleSide });
  const nTarget = new THREE.WebGLRenderTarget(1, 1, { type: THREE.HalfFloatType });
  nTarget.depthTexture = new THREE.DepthTexture(1, 1);
  nTarget.depthTexture.type = THREE.UnsignedIntType;
  const clearN = new THREE.Color(0.5, 0.5, 1.0);
  const prevClear = new THREE.Color();
  function renderNormals() {
    scene.overrideMaterial = NMAT;
    camera.layers.disable(FX);
    const au = renderer.shadowMap.autoUpdate;
    renderer.shadowMap.autoUpdate = false;
    renderer.getClearColor(prevClear);
    const pa = renderer.getClearAlpha();
    renderer.setClearColor(clearN, 1);
    renderer.setRenderTarget(nTarget);
    renderer.clear();
    renderer.render(scene, camera);
    renderer.setRenderTarget(null);
    renderer.setClearColor(prevClear, pa);
    renderer.shadowMap.autoUpdate = au;
    camera.layers.enable(FX);
    scene.overrideMaterial = null;
  }
  const composer = new EffectComposer(
    renderer,
    new THREE.WebGLRenderTarget(1, 1, { type: THREE.HalfFloatType, samples: 4 }),
  );
  composer.setPixelRatio(renderer.getPixelRatio());
  composer.addPass(new RenderPass(scene, camera));
  const VSQ =
    'varying vec2 vUv; void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }';
  const linePass = new ShaderPass({
    uniforms: {
      tDiffuse: { value: null },
      // null, as the town's clone left it: no crease line draws (see the top of this file)
      tNormal: { value: null },
      tDepth: { value: null },
      texel: { value: new THREE.Vector2() },
      width: { value: 1 },
      near: { value: 0.5 },
      far: { value: 900 },
    },
    vertexShader: VSQ,
    fragmentShader: `#include <packing>
    uniform sampler2D tDiffuse, tNormal, tDepth; uniform vec2 texel; uniform float width, near, far; varying vec2 vUv;
    float vz(vec2 uv) { return -perspectiveDepthToViewZ(texture2D(tDepth, uv).x, near, far); }
    vec3 nr(vec2 uv) { return texture2D(tNormal, uv).xyz * 2.0 - 1.0; }
    void main() {
      vec4 c = texture2D(tDiffuse, vUv);
      float z = vz(vUv);
      if (z > far * 0.98) { gl_FragColor = c; return; }
      vec2 ox = vec2(texel.x * width, 0.0), oy = vec2(0.0, texel.y * width);
      float zl = vz(vUv - ox), zr = vz(vUv + ox), zu = vz(vUv + oy), zd = vz(vUv - oy);
      // silhouettes: neighbours fall away behind this pixel (second difference, so flat ground stays clean)
      float d2 = max(zl + zr - 2.0 * z, zu + zd - 2.0 * z) / z;
      float sil = smoothstep(0.012, 0.03, d2);
      // creases: the surface turns sharply
      vec3 n = nr(vUv);
      float cr = max(1.0 - dot(n, nr(vUv + ox)), 1.0 - dot(n, nr(vUv + oy)));
      float crease = smoothstep(0.28, 0.5, cr);
      float line = max(sil, crease) * (1.0 - 0.6 * smoothstep(70.0, 260.0, z));
      vec3 ink = c.rgb * vec3(0.26, 0.2, 0.24) + vec3(0.012, 0.004, 0.01);
      gl_FragColor = vec4(mix(c.rgb, ink, line * 0.9), c.a);
    }`,
  });
  composer.addPass(linePass);
  const bloom = new UnrealBloomPass(new THREE.Vector2(W, H0), 0.42, 0.55, 0.88);
  // the town's r160 bloom, not three 0.187's (see bloom.ts); sizePost() below sets the blur materials' sizes
  applyTownBloom(bloom);
  composer.addPass(bloom);
  composer.addPass(new OutputPass());
  const gradePass = new ShaderPass({
    uniforms: {
      tDiffuse: { value: null },
      tDepth: { value: null },
      texel: { value: new THREE.Vector2() },
      near: { value: 0.5 },
      far: { value: 900 },
      focus: { value: 100 },
      dof: { value: 3 },
      time: { value: 0 },
      ca: { value: 0.0024 },
    },
    vertexShader: VSQ,
    fragmentShader: `#include <packing>
    uniform sampler2D tDiffuse, tDepth; uniform vec2 texel; uniform float near, far, focus, dof, time, ca; varying vec2 vUv;
    float hash(vec2 p) { return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453); }
    void main() {
      float z = -perspectiveDepthToViewZ(texture2D(tDepth, vUv).x, near, far);
      float coc = clamp((abs(z - focus) / focus - 0.35) * 1.3, 0.0, 1.0) * dof;
      vec2 dc = vUv - 0.5, cao = dc * dot(dc, dc) * ca * 4.0;
      vec3 col;
      if (coc < 0.5) col = vec3(texture2D(tDiffuse, vUv + cao).r, texture2D(tDiffuse, vUv).g, texture2D(tDiffuse, vUv - cao).b);
      else {
        col = vec3(0.0);
        for (int i = 0; i < 12; i++) {
          float fi = float(i), r = sqrt((fi + 0.5) / 12.0) * coc, a = fi * 2.39996;
          vec2 o = vec2(cos(a), sin(a)) * r * texel;
          col += vec3(texture2D(tDiffuse, vUv + o + cao).r, texture2D(tDiffuse, vUv + o).g, texture2D(tDiffuse, vUv + o - cao).b);
        }
        col /= 12.0;
      }
      float l = dot(col, vec3(0.299, 0.587, 0.114));
      col = mix(vec3(l), col, 1.12);
      col = (col - 0.5) * 1.07 + 0.5;
      col *= mix(vec3(0.9, 0.97, 1.08), vec3(1.05, 1.0, 0.93), smoothstep(0.15, 0.75, l));
      col *= mix(0.8, 1.0, 1.0 - smoothstep(0.35, 0.95, length(dc * vec2(1.0, 0.8))));
      col += (hash(vUv / texel + fract(time) * 91.0) - 0.5) * 0.028;
      gl_FragColor = vec4(clamp(col, 0.0, 1.0), 1.0);
    }`,
  });
  composer.addPass(gradePass);
  const lineU = linePass.uniforms as Record<string, THREE.IUniform>;
  const gradeU = gradePass.uniforms as Record<string, THREE.IUniform>;
  const uni = (u: Record<string, THREE.IUniform>, k: string) => u[k] as THREE.IUniform;
  // the real depth, which the town's r160 clone read through its shared source (see the top of this file)
  uni(lineU, 'tDepth').value = nTarget.depthTexture;
  uni(gradeU, 'tDepth').value = nTarget.depthTexture;
  function sizePost(w: number, h: number) {
    const pr = renderer.getPixelRatio();
    renderer.setSize(w, h);
    composer.setSize(w, h);
    bloom.setSize(w, h);
    nTarget.setSize(Math.floor(w * pr), Math.floor(h * pr));
    (uni(lineU, 'texel').value as THREE.Vector2).set(1 / (w * pr), 1 / (h * pr));
    (uni(gradeU, 'texel').value as THREE.Vector2).copy(uni(lineU, 'texel').value as THREE.Vector2);
    uni(lineU, 'width').value = Math.max(1, pr * 0.85);
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
  }
  for (const u of [lineU, gradeU]) {
    uni(u, 'near').value = camera.near;
    uni(u, 'far').value = camera.far;
  }
  sizePost(W, H0);

  /* ---------------- loop */
  // nobody works yet (4a has no agents): the furnace idles and the dev desks' screens stay dim
  const working = 0;
  const deskLit = { frontend: false, backend: false };
  let t0 = -1;
  let last = 0;
  let frames = 0;
  let paused = false;
  const smashing = false;
  function frame(now: number) {
    if (t0 < 0) t0 = now;
    const t = (now - t0) / 1000;
    const dt = Math.min(0.05, t - last);
    last = t;
    // the furnace burns as hard as the team works
    const heat = 0.25 + working * 0.35;
    const flick = REDUCE ? 0 : Math.sin(t * 9) * 0.08 + Math.sin(t * 23) * 0.05;
    mouthMat.emissiveIntensity = 0.9 + heat * 1.4 + flick;
    coreMat.emissiveIntensity = 1.2 + heat * 1.8 + flick;
    fireLight.intensity = 8 + heat * 16 + flick * 20;
    for (const [dk, who] of [
      [deskF, 'frontend'],
      [deskB, 'backend'],
    ] as const) {
      const lit = deskLit[who];
      const sm = dk.screen?.material;
      if (sm) sm.opacity += ((lit ? 1 : 0.3) - sm.opacity) * Math.min(1, dt * 4);
      if (dk.light) dk.light.intensity = lit ? 3.5 : 0;
    }
    updateHouses(dt);
    if (!REDUCE) {
      for (const { f, ph } of FLAMES) {
        const k = 1 + Math.sin(t * 11 + ph) * 0.16 + Math.sin(t * 27 + ph * 2) * 0.08;
        f.scale.set(1 / Math.sqrt(k), k, 1 / Math.sqrt(k));
      }
      for (const fl of FIRE_LIGHTS)
        fl.l.intensity = fl.base * (1 + Math.sin(t * 9 + fl.ph) * 0.12 + Math.sin(t * 23 + fl.ph) * 0.06);
      hearthLight.intensity = 11 + Math.sin(t * 7) * 1.5;
      for (const s of SPINNERS) {
        s.o.rotation[s.axis] += dt * s.v;
        if (s.bob) s.o.position.y = (s.y0 ?? 0) + Math.sin(t * 1.6) * 0.06;
      }
      const k = Math.abs(Math.sin(t * 5.2 + agentPhase.frontend));
      sparks.forEach((sp, i) => {
        const hit = smashing && k < 0.25;
        sp.material.opacity = hit ? 1 - k * 4 : 0;
        sp.position.set(
          -0.4 + i * 0.19,
          0.95 + (i % 2) * 0.12 + (hit ? (0.25 - k) * 0.8 : 0),
          (i % 2) * 0.08 - 0.29,
        );
        sp.material.rotation = t * 3 + i;
      });
      if (deskF.kb) deskF.kb.position.y = (deskF.kb.userData.y0 as number) + (smashing && k < 0.2 ? 0.03 : 0);
      const ep = embers.geometry.attributes.position as THREE.BufferAttribute;
      const eh = embers.userData.h as Float32Array;
      const es = embers.userData.seed as Float32Array;
      for (let i = 0; i < ep.count; i++) {
        const sd = es[i] as number;
        eh[i] = (eh[i] as number) + dt * (0.5 + sd * 0.7) * (0.5 + heat);
        if ((eh[i] as number) > (embers.userData.top as number)) eh[i] = 0;
        ep.setXYZ(
          i,
          emberBase.x + Math.sin(t * (0.6 + sd) + sd * 10) * 0.8 * sd,
          emberBase.y + (eh[i] as number),
          emberBase.z + Math.cos(t * 0.7 + sd * 7) * 0.5 * sd,
        );
      }
      ep.needsUpdate = true;
      embers.material.opacity = Math.min(0.95, 0.2 + heat * 0.5);
      for (const S of SMOKES) {
        const P = S.p;
        const pa = P.geometry.attributes.position as THREE.BufferAttribute;
        const sh = P.userData.h as Float32Array;
        const ss = P.userData.seed as Float32Array;
        const lifted = S.house ? S.house.lift : 0;
        P.visible = lifted < 0.5;
        const speed = S.heat ? 0.6 + heat : 0.7;
        for (let i = 0; i < pa.count; i++) {
          const sd = ss[i] as number;
          sh[i] = (sh[i] as number) + dt * (0.5 + sd * 0.4) * speed;
          if ((sh[i] as number) > (P.userData.top as number)) sh[i] = 0;
          const hi = sh[i] as number;
          pa.setXYZ(
            i,
            S.at.x + Math.sin(hi * 0.8 + sd * 6) * hi * 0.16 + hi * 0.3,
            S.at.y + hi,
            S.at.z + Math.cos(hi * 0.6 + sd * 4) * hi * 0.14,
          );
        }
        pa.needsUpdate = true;
      }
      fallTex.offset.y = (fallTex.offset.y + dt * 1.6) % 1;
      waterTex.offset.x = (waterTex.offset.x + dt * 0.12) % 1;
      cloudRing.rotation.y += dt * 0.004;
      mists.forEach((m, i) => {
        m.material.opacity = 0.42 + Math.sin(t * 0.8 + i) * 0.1;
      });
      for (const b of CROWS) {
        const u = b.userData as { a: number; s: number; r: number; y: number };
        u.a += dt * u.s;
        b.position.set(Math.cos(u.a) * u.r, u.y + Math.sin(u.a * 3) * 0.8, Math.sin(u.a) * u.r);
        b.rotation.y = -u.a;
        (b.children[3] as THREE.Object3D).rotation.z = Math.sin(t * 10 + u.r) * 0.6;
        (b.children[4] as THREE.Object3D).rotation.z = -Math.sin(t * 10 + u.r) * 0.6;
      }
      FLAGS.forEach((f, i) => {
        f.rotation.y = Math.sin(t * 2 + i) * 0.3;
      });
      skyBoat.position.y = -0.4 + Math.sin(t * 0.9) * 0.2;
      skyBoat.rotation.x = Math.sin(t * 0.7) * 0.03;
      {
        const u = airship.userData as { a: number; r: number; y: number };
        u.a += dt * 0.022;
        airship.position.set(Math.cos(u.a) * u.r, u.y + Math.sin(t * 0.5) * 0.8, Math.sin(u.a) * u.r);
        airship.rotation.y = Math.atan2(-Math.cos(u.a), -Math.sin(u.a));
      }
    }
    if (fly) {
      const k = Math.min(1, (performance.now() - fly.t0) / fly.dur);
      const e = k < 0.5 ? 4 * k * k * k : 1 - Math.pow(-2 * k + 2, 3) / 2;
      controls.target.lerpVectors(fly.ft, fly.tt, e);
      camera.position.lerpVectors(fly.fp, fly.tp, e);
      if (k >= 1) fly = null;
    }
    updateParked();
    controls.update();
    clampTarget();
    if (!REDUCE) updateFX(t, dt);
    skyDome.position.copy(camera.position);
    uni(gradeU, 'focus').value = camera.position.distanceTo(controls.target);
    uni(gradeU, 'time').value = REDUCE ? 0 : t;
    renderNormals();
    composer.render();
    frames++;
  }

  return {
    renderer,
    scene,
    camera,
    controls,
    housePicks,
    agentPhase,
    get frames() {
      return frames;
    },
    /** Starts the loop; it stays off while the tab is hidden. */
    start() {
      paused = false;
      renderer.setAnimationLoop((now) => {
        if (!paused) frame(now);
      });
    },
    stop() {
      paused = true;
      renderer.setAnimationLoop(null);
    },
    resize(w: number, h: number) {
      W = w;
      H0 = h;
      sizePost(w, h);
    },
    flyToRoom,
    setOpenHouses(on: boolean) {
      openHouses = on;
    },
    setTasks(tasks: readonly TaskStatus[]) {
      houses.drawBoard(tasks);
    },
    dispose() {
      renderer.setAnimationLoop(null);
      renderer.domElement.removeEventListener('pointerdown', stopFly);
      renderer.domElement.removeEventListener('wheel', stopFly);
      controls.dispose();
      composer.dispose();
      nTarget.dispose();
      renderer.dispose();
    },
  };
}
