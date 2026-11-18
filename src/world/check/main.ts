// The render check (v4.0.0, 4a): mounts the Forge Keep full window and hands the comparison script the camera, the
// controls and a frame count, as the town's test copy does (town/test/serve.sh). Dev server only; see index.html.
import '@fontsource-variable/inter/wght.css';
import { createWorld } from '../scene/world';

declare global {
  interface Window {
    __world?: {
      scene: import('three').Scene;
      camera: import('three').PerspectiveCamera;
      controls: import('three/examples/jsm/controls/OrbitControls.js').OrbitControls;
      readonly frames: number;
      ready: boolean;
    };
  }
}

document.documentElement.style.cssText = 'margin:0;height:100%;overflow:hidden;background:#000';
document.body.style.cssText = 'margin:0;height:100%;overflow:hidden';
const canvas = document.getElementById('world') as HTMLCanvasElement;
canvas.style.display = 'block';
// the signs and the task board paint their lettering once, so the font has to be there first
await document.fonts.load('800 40px "Inter Variable"');
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
  ready: true,
};
