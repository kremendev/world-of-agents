// The render check (v4.0.0, 4a): mounts the Forge Keep full window and hands the comparison script the camera, the
// controls and a frame count, as the town's test copy does (town/test/serve.sh); from 4b also the cast, a way to put
// a figure on a spot, and the spots, for the cast's comparison and the seats check. With ?demo it plays the demo run into
// the world, as the page does, for the walking check (tools/world-check/walk.mjs); from T also idle life's spots, the rest
// spots and the map's route, for walk.mjs and idle-walks.mjs; and the room views, the houses, the figures' heights and
// whose spot is whose, for spots.mjs's view check. Dev server only; see index.html.
import * as THREE from 'three';
import { IDLE_SPOTS } from '../idle';
import { ROOM, SPOTS, route } from '../map';
import { CHECK, FETCH, START, VISIT, WORK, placeFor } from '../places';
import { DEMO_TASK, KEEP_STEP_MS, demoRun } from '../../script/demoRun';
import { createPlayer } from '../../script/player';
import { INITIAL_OFFICE, officeReducer, type OfficeState } from '../../state/office';
import { FIGURES } from '../scene/cast';
import { createWorld, type World } from '../scene/world';

declare global {
  interface Window {
    __world?: {
      scene: import('three').Scene;
      camera: import('three').PerspectiveCamera;
      controls: import('three/examples/jsm/controls/OrbitControls.js').OrbitControls;
      readonly frames: number;
      actors: World['cast']['actors'];
      place: World['place'];
      spots: typeof SPOTS;
      rooms: typeof ROOM;
      groundY: World['groundY'];
      whereIs: World['whereIs'];
      update: World['update'];
      stop: World['stop'];
      start: World['start'];
      placeFor: typeof placeFor;
      idleSpots: typeof IDLE_SPOTS;
      restSpots: typeof START;
      route: typeof route;
      flyToRoom: World['flyToRoom'];
      houses: World['houses'];
      figures: typeof FIGURES;
      places: { work: typeof WORK; fetch: typeof FETCH; visit: typeof VISIT; check: typeof CHECK };
      readonly office: OfficeState;
      readonly ended: boolean;
      THREE: typeof THREE;
      ready: boolean;
    };
  }
}

document.documentElement.style.cssText = 'margin:0;height:100%;overflow:hidden;background:#000';
document.body.style.cssText = 'margin:0;height:100%;overflow:hidden';
const canvas = document.getElementById('world') as HTMLCanvasElement;
canvas.style.display = 'block';
const world = await createWorld({
  canvas,
  width: window.innerWidth,
  height: window.innerHeight,
  dpr: window.devicePixelRatio,
  reducedMotion: window.matchMedia('(prefers-reduced-motion: reduce)').matches,
});
world.start();
// ?demo: the demo run at the keep's pace, each event through the reducer into the world, as App and WorldView do
let office = INITIAL_OFFICE;
let ended = false;
const params = new URLSearchParams(location.search);
if (params.has('demo')) {
  world.update(office, false);
  const player = createPlayer(demoRun(DEMO_TASK, KEEP_STEP_MS), {
    onEvent: (event) => {
      office = officeReducer(office, event);
      world.update(office, false);
    },
    onRestart: () => {},
    onEnd: () => {
      ended = true;
    },
  });
  player.play();
  // &next=<s>: the demo's Next step every so many seconds, the figures landing first, as App and WorldView do
  const every = Number(params.get('next'));
  if (every > 0) {
    const timer = setInterval(() => {
      if (ended) return clearInterval(timer);
      world.land();
      player.next(KEEP_STEP_MS);
    }, every * 1000);
  }
}
window.__world = {
  scene: world.scene,
  camera: world.camera,
  controls: world.controls,
  get frames() {
    return world.frames;
  },
  actors: world.cast.actors,
  place: world.place,
  spots: SPOTS,
  rooms: ROOM,
  groundY: world.groundY,
  whereIs: world.whereIs,
  update: world.update,
  stop: () => world.stop(),
  start: () => world.start(),
  placeFor,
  idleSpots: IDLE_SPOTS,
  restSpots: START,
  route,
  flyToRoom: world.flyToRoom,
  houses: world.houses,
  figures: FIGURES,
  places: { work: WORK, fetch: FETCH, visit: VISIT, check: CHECK },
  get office() {
    return office;
  },
  get ended() {
    return ended;
  },
  THREE,
  ready: true,
};
