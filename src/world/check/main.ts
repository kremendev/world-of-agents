// The render check (v4.0.0, 4a): mounts the Forge Keep full window and hands the comparison script the camera, the
// controls and a frame count, as the town's test copy does (town/test/serve.sh); from 4b also the cast, a way to put
// a figure on a spot, and the spots, for the cast's comparison and the seats check. Dev server only; see index.html.
import * as THREE from 'three';
import { ROOM, SPOTS } from '../map';
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
  THREE,
  ready: true,
};
