import { useEffect, useRef, useState, type ComponentProps } from 'react';
import { HallView } from '../office/hall/HallView';
import type { World } from './scene/world';
import { CONTEXT_GRACE_MS, canDrawWorld } from './support';

type Props = ComponentProps<typeof HallView>;
type Phase = 'loading' | 'ready' | 'fallback';

/**
 * The Forge Keep in 3D (v4.0.0, 4a), where the browser can draw it; else, or if it fails, today's 2D hall (frozen as the
 * fallback, docs/v4.0-plan.md). three.js and the scene come in through a dynamic import, so nothing waits for them, and
 * the 2D hall stays on screen until the world is ready. The world pauses while the tab is hidden; a lost context that
 * doesn't come back within CONTEXT_GRACE_MS hands over to the 2D hall. The props are HallView's, so the page swaps one
 * for the other. 4a's world has no agents yet (4b).
 */
export function WorldView(props: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const worldRef = useRef<World | null>(null);
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
      }
    };
  }, [supported, hasRoom]);

  useEffect(() => {
    if (phase === 'ready' && hasRoom) worldRef.current?.resize(width, height);
  }, [phase, hasRoom, width, height]);

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
        aria-label="The Forge Keep, where the agents work. Their states are in the agent list."
        hidden={phase !== 'ready'}
      />
    </>
  );
}
