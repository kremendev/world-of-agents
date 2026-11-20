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
import { CAMERA, roomView, viewOffset, type Insets } from '../camera';
import { SPOTS, type RoomId, type SpotId } from '../map';
import { FETCH, START, WORK, placeFor } from '../places';
import { workingCount, type OfficeState } from '../../state/office';
import { forgeFlicker, forgeLook } from '../forge';
import { figureMode } from '../clips';
import { screenLit } from '../screens';
import { idleTick, type IdleRuns, type Where } from '../idleRun';
import { isHeld, landed, sendTo, standingAt, step, whereIs, type Walker } from '../walkers';
import { createAreas } from './areas';
import { applyTownBloom } from './bloom';
import { FIGURES, SEATED, createCast, fetchCast, groundAt, type AgentKey, type Mode } from './cast';
import { createHouses, type HouseRec, type TaskStatus, type WallSide } from './houses';
import { configureRenderer, createKit, loadSignFont } from './kit';
import { createLand } from './land';
import { CAST_FILES, fetchKitModels } from './models';
import { createProps } from './props';
import { createScatter } from './scatter';

export type { AgentKey } from './cast';

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

/**
 * A figure's head on screen: x and y from -1 to 1 across the canvas (y up), z beyond 1 behind the camera; whether it
 * walks, and the room it stands in (null on the way), for the small talk (4c.3).
 */
export type Head = { x: number; y: number; z: number; walking: boolean; room?: RoomId | null };
export type Heads = Record<AgentKey, Head>;
/** The room each figure is in, or on its way to (T: the rooms rail counts from it, idle life included). */
export type FigureRooms = Record<AgentKey, RoomId>;

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
  const fetchedCast = fetchCast();
  // the signs' face loads beside the models; the houses and the areas paint their lettering once
  const font = loadSignFont();
  const props = createProps(kit);
  const land = await createLand(kit, props, fetched);
  await font;
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
  const agentPhase = Object.fromEntries(CAST_FILES.map((id) => [id, rnd() * 6])) as Record<AgentKey, number>;
  // the cast stands where the town builds its agents, its roots added to the scene in the town's order
  const groundY = groundAt(land.crossings);
  const cast = createCast(kit, scene, await fetchedCast, {
    reducedMotion: REDUCE,
    phases: agentPhase,
    start: START,
    groundY,
    flameTex: props.flameTex,
  });
  const actors = Object.values(cast.actors);
  /** Where each figure is and where it goes (../walkers.ts), the office it last heard of, and Live's fetched scrolls (scrolls). */
  const resting = () =>
    Object.fromEntries(CAST_FILES.map((id) => [id, standingAt(START[id])])) as Record<AgentKey, Walker>;
  let walkers = resting();
  let office: OfficeState | null = null;
  let live = false;
  const scrolls = new Set<string>();
  const atWork: Partial<Record<AgentKey, boolean>> = {};

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
    for (const a of actors) dyn.add(a.root);
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
  // A hand move (a drag past a few pixels, the wheel, an arrow key on the focused canvas) stops a flight and tells the
  // page, which then shows no room as the one in view (4d.3). A click alone stops a flight and nothing else.
  // A click on a figure picks it (4d.4, the town's picking): a ray through its skinned meshes, the agent from its root.
  // Follow keeps the followed figure in view until a hand move or the page stops it.
  let handMoved: (() => void) | null = null;
  let picked: ((id: AgentKey) => void) | null = null;
  let following: AgentKey | null = null;
  let down: { x: number; y: number; moved: boolean } | null = null;
  const raycaster = new THREE.Raycaster();
  const ndc = new THREE.Vector2();
  const pickables = actors.map((a) => a.root);
  function pickAt(e: PointerEvent): AgentKey | null {
    const rect = renderer.domElement.getBoundingClientRect();
    if (rect.width === 0 || rect.height === 0) return null;
    ndc.set(((e.clientX - rect.left) / rect.width) * 2 - 1, -((e.clientY - rect.top) / rect.height) * 2 + 1);
    raycaster.setFromCamera(ndc, camera);
    for (
      let o: THREE.Object3D | null = raycaster.intersectObjects(pickables, true)[0]?.object ?? null;
      o;
      o = o.parent
    ) {
      const id = (o.userData as { agentId?: AgentKey }).agentId;
      if (id) return id;
    }
    return null;
  }
  const handMove = () => {
    fly = null;
    following = null;
    handMoved?.();
  };
  let hoverAt = 0;
  const onPointerDown = (e: PointerEvent) => {
    fly = null;
    down = { x: e.clientX, y: e.clientY, moved: false };
  };
  const onPointerMove = (e: PointerEvent) => {
    // the mouse over a figure, a few times a second: the pointer says it can be clicked
    if (!down && e.pointerType === 'mouse' && e.timeStamp - hoverAt > 90) {
      hoverAt = e.timeStamp;
      renderer.domElement.style.cursor = pickAt(e) ? 'pointer' : '';
    }
    if (!down || down.moved || Math.hypot(e.clientX - down.x, e.clientY - down.y) <= 4) return;
    down.moved = true;
    handMove();
  };
  const onPointerUp = (e: PointerEvent) => {
    const click = down && !down.moved;
    down = null;
    if (e.type !== 'pointerup' || !click) return;
    const id = pickAt(e);
    if (id) picked?.(id);
  };
  const onKeyDown = (e: KeyboardEvent) => {
    if (e.key.startsWith('Arrow')) handMove();
  };
  const canvasListeners = [
    ['pointerdown', onPointerDown],
    ['pointermove', onPointerMove],
    ['pointerup', onPointerUp],
    ['pointercancel', onPointerUp],
    ['wheel', handMove],
    ['keydown', onKeyDown],
  ] as const;
  for (const [type, fn] of canvasListeners) {
    renderer.domElement.addEventListener(type, fn as EventListener, { passive: true });
  }
  // the arrow keys pan while the canvas has the focus
  controls.listenToKeyEvents(renderer.domElement);

  /* ---------------- houses open up as you come close, or when you open one.
     Two-storey houses show the ground floor (upper storey lifts away) or the upper floor (only the roof lifts). */
  // the house a followed figure is inside opens too (the town's rule)
  const followedIn = (H: HouseRec) => {
    if (!following) return false;
    const sp = SPOTS[walkers[following].spot];
    return sp.room === H.id && !sp.out;
  };
  const houseIsOpen = (H: HouseRec) => openHouses || focusRoom === H.id || !!H.near || followedIn(H);
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
  // Idle life's props (4c.2): an orc in the yard strikes the training dummy it faces, and sparks fly now and then; an
  // orc drinking in the Tavern holds a mug. Made here, after the bake, so they can show and hide.
  const sparkSprite = (i: number) => {
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
    sp.scale.setScalar(0.22);
    sp.raycast = () => {};
    return sp;
  };
  const YARD_SPARKS = (['yard-1', 'yard-2'] as const).map((spot, j) => {
    const sp = SPOTS[spot];
    const g = new THREE.Group();
    // between the orc and its dummy, 1.4 m ahead of the spot
    g.position.set(sp.x + Math.sin(sp.ry) * 1.1, 1.2, sp.z + Math.cos(sp.ry) * 1.1);
    const sprites = [0, 1, 2].map(sparkSprite);
    g.add(...sprites);
    scene.add(g);
    return { spot, sprites, ph: j * 1.7 };
  });
  const MUGS: Partial<Record<AgentKey, THREE.Object3D>> = {};
  for (const id of ['frontend', 'backend'] as const) {
    const hand = cast.actors[id].root.getObjectByName('mixamorigRightHand');
    if (!hand) continue;
    const mug = new THREE.Group();
    const body = new THREE.Mesh(new THREE.CylinderGeometry(0.055, 0.05, 0.13, 10), toon(COL.woodL));
    const foam = new THREE.Mesh(new THREE.CylinderGeometry(0.057, 0.057, 0.025, 10), toon('#f3ead2'));
    foam.position.y = 0.075;
    mug.add(body, foam);
    mug.position.set(0, 0.09, 0.05);
    hand.add(mug);
    cast.actors[id].root.updateMatrixWorld(true);
    mug.scale.setScalar(1 / hand.getWorldScale(new THREE.Vector3()).x);
    mug.visible = false;
    MUGS[id] = mug;
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
      let actor = false;
      for (let o = l.parent, d = 0; o && d < 40; o = o.parent, d++) {
        if (toggles.has(o)) anc.push(o);
        if (o.userData.agentId) actor = true;
      }
      // a figure's light (the Reviewer's lantern) goes where the figure goes
      if (actor) continue;
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
    frameView();
  }
  // the area the HUD's panels leave free (Dima, 20 Nov): what the camera looks at goes to its middle, the canvas's
  // size unchanged; the labels and the picking project through this camera, so they follow
  let free: Insets | null = null;
  function frameView() {
    const o = viewOffset(W, H0, free);
    if (o) camera.setViewOffset(W, H0, o.x, o.y, W, H0);
    else camera.clearViewOffset();
  }
  for (const u of [lineU, gradeU]) {
    uni(u, 'near').value = camera.near;
    uni(u, 'far').value = camera.far;
  }
  sizePost(W, H0);

  /* ---------------- loop */
  // the furnace follows the work (4c.4): how many agents work, from the office update() last gave
  let working = 0;
  let mouthColour = '';
  let t0 = -1;
  let last = 0;
  let frames = 0;
  let paused = false;
  const followAt = new THREE.Vector3();
  // the page's labels (4d.6): where each figure's head is on screen, after the camera has moved, every frame
  const walkingNow: Partial<Record<AgentKey, boolean>> = {};
  // idle life (4c.2): each resting agent's activity, run a few times a second; a fixed seed, so a check sees one keep
  let idleRuns: IdleRuns = {};
  let idleAt = Number.NEGATIVE_INFINITY;
  const IDLE_SEED = 0x5eed;
  const AT_REST: ReadonlySet<string> = new Set(['idle', 'done']);
  const seatedNow: Partial<Record<AgentKey, boolean>> = {};
  let framed: ((heads: Heads) => void) | null = null;
  let roomsTold: ((rooms: FigureRooms) => void) | null = null;
  let roomsWere = '';
  /** Each figure's room, where it stands or where it is going (its next stop after a hold), told when one changes. */
  function tellRooms() {
    if (!roomsTold) return;
    const rooms = {} as FigureRooms;
    for (const a of actors) {
      const w = walkers[a.id];
      rooms[a.id] = SPOTS[w.next ?? w.walk?.to ?? w.spot].room;
    }
    const key = actors.map((a) => rooms[a.id]).join();
    if (key === roomsWere) return;
    roomsWere = key;
    roomsTold(rooms);
  }
  const headAt = new THREE.Vector3();
  function tellHeads() {
    if (!framed) return;
    const heads = {} as Record<AgentKey, Head>;
    for (const a of actors) {
      a.root.getWorldPosition(headAt);
      // a little over the head; seated, the head is lower (about the town's seated eye line)
      headAt.y += FIGURES[a.id].H * (seatedNow[a.id] ? 0.74 : 1) + 0.25;
      headAt.project(camera);
      const walking = !!walkingNow[a.id];
      const room = walking ? null : SPOTS[walkers[a.id].spot].room;
      heads[a.id] = { x: headAt.x, y: headAt.y, z: headAt.z, walking, room };
    }
    framed(heads);
  }
  function frame(now: number) {
    if (t0 < 0) t0 = now;
    const t = (now - t0) / 1000;
    const dt = Math.min(0.05, t - last);
    last = t;
    // the cast, as the town's tick drives it: each figure where its walker is, turning towards where it goes, its root
    // easing to the ground under it; standing, the pose of its spot; held at its work spot, sitting with the work stopped
    for (const a of actors) {
      const speed = FIGURES[a.id].speed;
      let w = step(walkers[a.id], now, speed, REDUCE);
      // Live: a dev that has reached the board takes every scroll waiting for it and heads for its work
      if (
        office &&
        live &&
        !w.walk &&
        w.spot === FETCH[a.id] &&
        placeFor(a.id, office, live, scrolls) === w.spot
      ) {
        for (const tk of office.tasks) if (tk.owner === a.id) scrolls.add(tk.id);
        const to = placeFor(a.id, office, live, scrolls);
        if (to) w = sendTo(w, to, now, speed, REDUCE, WORK[a.id]);
      }
      walkers[a.id] = w;
      const p = whereIs(w, now);
      a.root.position.x = p.x;
      a.root.position.z = p.z;
      if (p.walking) {
        const diff = p.heading - a.root.rotation.y;
        a.root.rotation.y += Math.atan2(Math.sin(diff), Math.cos(diff)) * Math.min(1, dt * 10);
      } else a.root.rotation.y = p.heading;
      const gy = groundY(a.root.position.x, a.root.position.z);
      a.root.position.y += (gy - a.root.position.y) * Math.min(1, dt * 12);
      const held = isHeld(w, now);
      const pose = SPOTS[w.spot].pose;
      const mode: Mode = figureMode({
        walking: p.walking,
        pose,
        held,
        needsYou: office?.agents[a.id].state === 'needs-you',
        hasRaise: !!a.model.acts.raise_hand,
      });
      // at its own work spot doing its work: its screen lit, if it has one (../screens.ts, D12)
      atWork[a.id] = screenLit(a.id, {
        spot: w.spot,
        walking: p.walking,
        held,
        state: office?.agents[a.id].state ?? null,
      });
      walkingNow[a.id] = p.walking;
      seatedNow[a.id] = !p.walking && (mode === 'sit' || SEATED.has(pose));
      cast.lanternFor(a, mode, t);
      cast.drive(a, mode, dt, p.walking ? null : w.spot, w.walk ? w.walk.speed / speed : 1);
      const mug = MUGS[a.id];
      if (mug) {
        const run = idleRuns[a.id];
        mug.visible = !!run && run.act.prop === 'mug' && !p.walking && w.spot === run.act.spot;
      }
    }
    // idle life (4c.2): a few times a second, each resting agent's activity, and where the ones that move on go
    if (office && now - idleAt >= 250) {
      idleAt = now;
      const rest = new Set(CAST_FILES.filter((id) => AT_REST.has(office?.agents[id].state ?? 'idle')));
      const where = {} as Record<AgentKey, Where>;
      for (const id of CAST_FILES) {
        const w = walkers[id];
        where[id] = { spot: w.spot, to: w.walk?.to ?? null, walking: !!walkingNow[id] };
      }
      const tick = idleTick(idleRuns, rest, where, now, { seed: IDLE_SEED, reducedMotion: REDUCE });
      idleRuns = tick.runs;
      for (const [id, to] of Object.entries(tick.to) as [AgentKey, SpotId][]) {
        walkers[id] = sendTo(walkers[id], to, now, FIGURES[id].speed, REDUCE, WORK[id]);
      }
    }
    const smashing = !!atWork.frontend && office?.agents.frontend.state === 'writing';
    // the furnace burns as hard as the team works (D11): the 2D hall's mouth colours, the heat up to four working
    const forge = forgeLook(working);
    const heat = forge.heat;
    const flick = forgeFlicker(t, REDUCE);
    if (forge.mouth !== mouthColour) {
      mouthColour = forge.mouth;
      mouthMat.emissive.set(forge.mouth);
    }
    mouthMat.emissiveIntensity = 0.9 + heat * 1.4 + flick;
    coreMat.emissiveIntensity = 1.2 + heat * 1.8 + flick;
    fireLight.intensity = 8 + heat * 16 + flick * 20;
    for (const [dk, who] of [
      [deskF, 'frontend'],
      [deskB, 'backend'],
    ] as const) {
      const lit = !!atWork[who];
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
      for (const ys of YARD_SPARKS) {
        const striking = (['frontend', 'backend'] as const).some((id) => {
          const run = idleRuns[id];
          return (
            run?.act.prop === 'sparks' &&
            run.act.spot === ys.spot &&
            walkers[id].spot === ys.spot &&
            !walkingNow[id]
          );
        });
        // a strike now and then: a short burst at each peak, about every 3.5 s
        const k = Math.abs(Math.sin(t * 0.9 + ys.ph));
        ys.sprites.forEach((sp, i) => {
          const hit = striking && k > 0.97;
          sp.material.opacity = hit ? (k - 0.97) * 33 : 0;
          sp.position.set((i - 1) * 0.16, (i % 2) * 0.1 + (hit ? (1 - k) * 6 : 0), 0);
          sp.material.rotation = t * 3 + i;
        });
      }
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
    } else if (following) {
      // the town's follow: the point the camera orbits eases to the figure, and the camera moves with it
      cast.actors[following].root.getWorldPosition(followAt);
      followAt.y += 0.8;
      const delta = followAt.sub(controls.target).multiplyScalar(REDUCE ? 1 : Math.min(1, dt * 4));
      controls.target.add(delta);
      camera.position.add(delta);
    }
    updateParked();
    controls.update();
    clampTarget();
    tellHeads();
    tellRooms();
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
    /** Each house's parts: its walls, roof and upper storey as they open (the checks' own use). */
    houses: HOUSES,
    agentPhase,
    cast,
    /** The height a figure stands at, at a point: a floor, a terrace, the dais, a footbridge or grass. */
    groundY,
    /** Puts a figure on a spot at once, facing the spot's way, as reduced motion does (the checks' own use). */
    place(id: AgentKey, spot: SpotId) {
      const sp = SPOTS[spot];
      cast.actors[id].root.position.y = groundY(sp.x, sp.z);
      walkers[id] = standingAt(spot, performance.now());
    },
    /**
     * The office as it is now: each figure sent to its place (../places.ts). `live`: the office comes from a real run,
     * so the devs fetch their scrolls from the board first.
     */
    update(next: OfficeState, isLive: boolean) {
      office = next;
      live = isLive;
      working = workingCount(next);
      const now = performance.now();
      for (const id of CAST_FILES) {
        // at rest, an agent keeps the idle activity it is at (4c.2); placeFor() gives its rest spot
        const run = AT_REST.has(next.agents[id].state) ? idleRuns[id] : undefined;
        const to = run ? run.act.spot : placeFor(id, next, live, scrolls);
        if (to) walkers[id] = sendTo(walkers[id], to, now, FIGURES[id].speed, REDUCE, WORK[id]);
      }
    },
    /** The demo's "Next step": every figure at once where it is going, before the next step's places come in. */
    land() {
      const now = performance.now();
      for (const id of CAST_FILES) walkers[id] = landed(walkers[id], now);
    },
    /** A new run: everyone back at their start spot at once, no scroll fetched. */
    restart() {
      walkers = resting();
      scrolls.clear();
      idleRuns = {};
    },
    /**
     * Where a figure is, between frames too: the spot it stands at (a walk that has got there stands there), where it
     * walks to and the walk's path, and whether it is held at its work spot.
     */
    whereIs(id: AgentKey) {
      const now = performance.now();
      const w = step(walkers[id], now, FIGURES[id].speed, REDUCE);
      const walking = whereIs(w, now).walking;
      const walk = walking ? w.walk : null;
      return { spot: w.spot, to: walk?.to ?? null, path: walk?.path ?? null, walking, held: isHeld(w, now) };
    },
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
    /** The page's one listener for a hand move of the camera; returns its removal. */
    onHandMove(fn: () => void) {
      handMoved = fn;
      return () => {
        if (handMoved === fn) handMoved = null;
      };
    },
    /** The page's one listener for where the heads are, each frame (4d.6); returns its removal. */
    onFrame(fn: (heads: Heads) => void) {
      framed = fn;
      return () => {
        if (framed === fn) framed = null;
      };
    },
    /** The page's one listener for the room each figure is in or going to, told at once and on each change. */
    onRooms(fn: (rooms: FigureRooms) => void) {
      roomsTold = fn;
      roomsWere = '';
      return () => {
        if (roomsTold === fn) roomsTold = null;
      };
    },
    /** The page's one listener for a click on a figure; returns its removal. */
    onPick(fn: (id: AgentKey) => void) {
      picked = fn;
      return () => {
        if (picked === fn) picked = null;
      };
    },
    /**
     * Show me (4d.7, D17): the camera to a figure, from the side it looks from now, 14 m away, in about a second (a cut
     * with reduced motion); the house the figure is in opens.
     */
    flyToAgent(id: AgentKey) {
      following = null;
      const sp = SPOTS[walkers[id].spot];
      focusRoom = HOUSES[sp.room] && !sp.out ? sp.room : null;
      const target = cast.actors[id].root.getWorldPosition(new THREE.Vector3());
      target.y += 0.8;
      const dir = camera.position.clone().sub(controls.target);
      if (dir.lengthSq() < 1e-6) dir.set(0.45, 0.85, 0.9);
      dir.normalize();
      // never flatter than the town's room views look
      dir.y = Math.max(dir.y, 0.6);
      dir.normalize();
      flyTo(target, target.clone().addScaledVector(dir, 14));
    },
    /** Keeps a figure in view as it walks (null: stops), until a hand move; a flight in progress ends. */
    follow(id: AgentKey | null) {
      following = id;
      if (id) {
        fly = null;
        focusRoom = null;
      }
    },
    setOpenHouses(on: boolean) {
      openHouses = on;
    },
    /** How far the HUD's panels reach into the canvas (null: none); the view's middle goes to the free area's. */
    setFreeArea(insets: Insets | null) {
      free = insets;
      frameView();
    },
    setTasks(tasks: readonly TaskStatus[]) {
      houses.drawBoard(tasks);
    },
    dispose() {
      renderer.setAnimationLoop(null);
      for (const [type, fn] of canvasListeners)
        renderer.domElement.removeEventListener(type, fn as EventListener);
      handMoved = null;
      picked = null;
      framed = null;
      roomsTold = null;
      controls.dispose();
      composer.dispose();
      nTarget.dispose();
      renderer.dispose();
    },
  };
}
