import { useEffect, useRef, useState, type ComponentProps } from 'react';
import { HallView } from '../office/hall/HallView';
import type { World } from './scene/world';
import { CONTEXT_GRACE_MS, canDrawWorld } from './support';

/**
 * HallView's props, and `skips`: how many times the demo's "Next step" was pressed (each one lands the figures), and
 * `onWorld`: the world once it is on screen, and null when the 2D hall takes over again (the page lays its HUD over the
 * world only, 4d).
 */
type Props = ComponentProps<typeof HallView> & { skips?: number; onWorld?: (world: World | null) => void };
type Phase = 'loading' | 'ready' | 'fallback';

/**
 * The Forge Keep in 3D (v4.0.0, 4a), where the browser can draw it; else, or if it fails, today's 2D hall (frozen as the
 * fallback, docs/v4.0-plan.md). three.js and the scene come in through a dynamic import, so nothing waits for them, and
 * the 2D hall stays on screen until the world is ready. The world pauses while the tab is hidden; a lost context that
 * doesn't come back within CONTEXT_GRACE_MS hands over to the 2D hall. The props are HallView's, so the page swaps one
 * for the other; the world gets the office as it changes and walks the figures there (4b).
 */
export function WorldView({ skips = 0, onWorld, ...props }: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const worldRef = useRef<World | null>(null);
  const tell = useRef(onWorld);
  tell.current = onWorld;
  const [supported] = useState(canDrawWorld);
  const [phase, setPhase] = useState<Phase>(supported ? 'loading' : 'fallback');
  const width = props.room?.width ?? 0;
  const height = props.room?.height ?? 0;
  const hasRoom = width > 0 && height > 0;
  // the size the world is first built at; later sizes go to resize()
  const size = useRef({ width, height });
  size.current = { width, height };

  // build the world once, when the stage first has a size; dispose of it on unmount (or at the handover below)
  useEffect(() => {
    if (!supported || !hasRoom) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    let cancelled = false;
    let world: World | null = null;
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    import('./scene/world')
      .then(({ createWorld }) =>
        createWorld({ canvas, ...size.current, dpr: window.devicePixelRatio || 1, reducedMotion }),
      )
      .then((made) => {
        if (cancelled) {
          made.dispose();
          return;
        }
        world = made;
        worldRef.current = made;
        if (!document.hidden) made.start();
        setPhase('ready');
        tell.current?.(made);
      })
      .catch((err: unknown) => {
        if (cancelled) return;
        console.warn('The Forge Keep did not load; showing the 2D hall.', err);
        setPhase('fallback');
      });
    return () => {
      cancelled = true;
      if (world && worldRef.current === world) {
        world.dispose();
        worldRef.current = null;
        tell.current?.(null);
      }
    };
  }, [supported, hasRoom]);

  useEffect(() => {
    if (phase === 'ready' && hasRoom) worldRef.current?.resize(width, height);
  }, [phase, hasRoom, width, height]);

  // the demo's "Next step": every figure where it is going, before the next step's office comes in (declared before
  // the office's effect, so when both change in one render the figures land first)
  const lastSkips = useRef(skips);
  useEffect(() => {
    const world = worldRef.current;
    if (phase !== 'ready' || !world || lastSkips.current === skips) return;
    lastSkips.current = skips;
    world.land();
  }, [phase, skips]);

  // the office as it is: each figure to its place (4b); a new run (Restart) puts everyone back at once first
  const { office, run, live = false } = props;
  const lastRun = useRef(run);
  useEffect(() => {
    const world = worldRef.current;
    if (phase !== 'ready' || !world) return;
    if (lastRun.current !== run) {
      lastRun.current = run;
      world.restart();
    }
    world.update(office, live);
  }, [phase, office, run, live]);

  // no drawing while the tab is hidden
  useEffect(() => {
    if (phase !== 'ready') return;
    const onVisibility = () => {
      const world = worldRef.current;
      if (!world) return;
      if (document.hidden) world.stop();
      else world.start();
    };
    document.addEventListener('visibilitychange', onVisibility);
    return () => document.removeEventListener('visibilitychange', onVisibility);
  }, [phase]);

  // a lost context that doesn't come back hands over to the 2D hall
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || phase === 'fallback') return;
    let timer: ReturnType<typeof setTimeout> | undefined;
    const onLost = () => {
      timer = setTimeout(() => {
        const world = worldRef.current;
        worldRef.current = null;
        world?.dispose();
        setPhase('fallback');
        tell.current?.(null);
      }, CONTEXT_GRACE_MS);
    };
    const onRestored = () => clearTimeout(timer);
    canvas.addEventListener('webglcontextlost', onLost);
    canvas.addEventListener('webglcontextrestored', onRestored);
    return () => {
      clearTimeout(timer);
      canvas.removeEventListener('webglcontextlost', onLost);
      canvas.removeEventListener('webglcontextrestored', onRestored);
    };
  }, [phase]);

  if (phase === 'fallback') return <HallView {...props} />;
  return (
    <>
      {phase === 'loading' && <HallView {...props} />}
      <canvas
        ref={canvasRef}
        className="world"
        role="img"
        // the arrow keys pan the view while it has the focus (4d.3)
        tabIndex={0}
        aria-label="The Forge Keep, where the agents work. Their states are in the agent list."
        hidden={phase !== 'ready'}
      />
    </>
  );
}
