import { useEffect, useMemo, useRef, useState, useSyncExternalStore } from 'react';
import type { AgentId } from '../../events/schema';
import { pixelScale } from '../../pixel/scale';
import { spriteSize } from '../../pixel/sprite';
import { workingCount, type Message, type OfficeState } from '../../state/office';
import { ROSTER } from '../roster';
import { SEATS, destinationFor } from './destination';
import {
  FLOOR_Z,
  activityOf,
  agentDrawable,
  bakeFloor,
  drawHall,
  flickerAlpha,
  furnaceDrawables,
  motion,
  sceneryDrawables,
  stationDrawables,
} from './draw';
import { HallLabels, type AgentTag } from './HallLabels';
import { HALL, hallStations } from './layout';
import { SPEECH_MS, clip, smallTalk } from './talk';
import { restingWalkers, sendTo, step, walkerAt } from './walkers';

/** CSS pixels per art pixel we aim for, as in the design. The real scale is rounded so pixels stay crisp. */
const TARGET_SCALE = 2;

function currentDpr(): number {
  return typeof window === 'undefined' ? 1 : window.devicePixelRatio || 1;
}

const REDUCED_MOTION = '(prefers-reduced-motion: reduce)';

function subscribeReducedMotion(onChange: () => void): () => void {
  const query = window.matchMedia(REDUCED_MOTION);
  query.addEventListener('change', onChange);
  return () => query.removeEventListener('change', onChange);
}

const prefersReducedMotion = () => window.matchMedia(REDUCED_MOTION).matches;

/**
 * The Forge Hall: one canvas redrawn every animation frame, with HTML text on top.
 * `run` changes on Restart, which puts every agent back at its rest spot at once.
 * Each agent has a button over it; `selected` is the one the agent panel shows.
 */
export function HallView({
  office,
  run,
  selected,
  onSelect,
}: {
  office: OfficeState;
  run: number;
  selected: AgentId;
  onSelect: (id: AgentId) => void;
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [dpr, setDpr] = useState(currentDpr);
  const reducedMotion = useSyncExternalStore(subscribeReducedMotion, prefersReducedMotion);
  const stations = useMemo(() => hallStations(), []);
  // Memoised: the frame loop restarts whenever `scale` changes, so it must only change with the screen.
  const scale = useMemo(() => pixelScale(HALL.width, HALL.height, TARGET_SCALE, dpr), [dpr]);
  const cssPerArtPixel = scale.cssWidth / HALL.width;

  // Effects write these, the frame loop reads them.
  const officeRef = useRef(office);
  const walkers = useRef(restingWalkers());
  const speech = useRef<Partial<Record<AgentId, { text: string; until: number }>>>({});
  const heard = useRef(new WeakSet<Message>());
  const lastRun = useRef(run);
  const [tags, setTags] = useState<AgentTag[]>([]);

  // Browser zoom and moving the window to another monitor change devicePixelRatio and fire resize.
  useEffect(() => {
    const onResize = () => setDpr(currentDpr());
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  // New office state: send each agent where the state says, and give new messages a speech bubble.
  useEffect(() => {
    const now = performance.now();
    if (lastRun.current !== run) {
      lastRun.current = run;
      walkers.current = restingWalkers();
      speech.current = {};
    }
    officeRef.current = office;
    for (const { id } of ROSTER) {
      const to = destinationFor(id, office);
      if (to) walkers.current[id] = sendTo(walkers.current[id], to, now, reducedMotion);
    }
    for (const m of office.messages) {
      if (heard.current.has(m)) continue;
      heard.current.add(m);
      speech.current[m.from] = { text: clip(m.text), until: now + SPEECH_MS };
    }
  }, [office, run, reducedMotion]);

  // The one animation loop. The floor never changes, so it is drawn once into a cache.
  useEffect(() => {
    const ctx = canvasRef.current?.getContext('2d') ?? null;
    const per = scale.devicePixelsPerArtPixel;
    const { canvasWidth, canvasHeight } = scale;
    let now = performance.now();
    // Lights read `now` when they are drawn, so they flicker without rebuilding the scenery every frame.
    const lightAlpha = (phase: number) => flickerAlpha(now, phase, reducedMotion);
    const scenery = sceneryDrawables(lightAlpha);
    const floor = ctx
      ? bakeFloor(
          scenery.filter((d) => d.z <= FLOOR_Z),
          per,
          canvasWidth,
          canvasHeight,
        )
      : null;
    const above = scenery.filter((d) => d.z > FLOOR_Z);
    let frameId = 0;
    let shownTags = '';

    const frame = () => {
      now = performance.now();
      const latest = officeRef.current;
      const { agents } = latest;
      const drawables = [...above, ...furnaceDrawables(workingCount(latest), per, lightAlpha)];
      const keyboardDx: Partial<Record<AgentId, number>> = {};
      const idleInRest: AgentId[] = [];
      const next: AgentTag[] = [];

      for (const agent of ROSTER) {
        const w = (walkers.current[agent.id] = step(walkers.current[agent.id], now));
        const { point, walking } = walkerAt(w, now);
        const { state } = agents[agent.id];
        const seat = SEATS[agent.id];
        const seated = !walking && point.x === seat.x && point.y === seat.y;
        const activity = activityOf(agent, state, walking, seated);
        const move = motion(activity, now, reducedMotion);
        keyboardDx[agent.id] = move.keyboardDx;
        drawables.push(agentDrawable(agent, point, { x: move.dx, y: move.dy }));
        if (!walking && state === 'idle' && w.spot.room === 'rest') idleInRest.push(agent.id);
        next.push({
          id: agent.id,
          x: point.x,
          y: point.y,
          ...spriteSize(agent.sprite),
          state,
          smashing: activity === 'smashing',
          speech: null,
        });
      }
      for (const s of stations) drawables.push(...stationDrawables(s, keyboardDx[s.agent.id]));

      // A message beats small talk; small talk only ever comes from an agent idling in the rest room.
      const chat = smallTalk(idleInRest, now);
      for (const tag of next) {
        const said = speech.current[tag.id];
        tag.speech = said && said.until > now ? said.text : chat?.agent === tag.id ? chat.text : null;
      }

      if (ctx) {
        ctx.setTransform(1, 0, 0, 1, 0, 0);
        ctx.clearRect(0, 0, canvasWidth, canvasHeight);
        if (floor) ctx.drawImage(floor, 0, 0);
        ctx.setTransform(per, 0, 0, per, 0, 0);
        drawHall(ctx, drawables);
      }

      // Re-render the HTML labels only when something in them changed, not every frame.
      const key = JSON.stringify(next);
      if (key !== shownTags) {
        shownTags = key;
        setTags(next);
      }
      frameId = requestAnimationFrame(frame);
    };

    frame();
    return () => cancelAnimationFrame(frameId);
  }, [scale, stations, reducedMotion]);

  return (
    <div className="hall" style={{ width: `${scale.cssWidth}px`, height: `${scale.cssHeight}px` }}>
      <canvas
        ref={canvasRef}
        width={scale.canvasWidth}
        height={scale.canvasHeight}
        style={{ width: `${scale.cssWidth}px`, height: `${scale.cssHeight}px` }}
        role="img"
        aria-label="The Forge Hall: the Lead/PM room with the dashboard, the great hall with the furnace, the rest room, and the dev room with the library nook, where the Lead/PM, Designer, Frontend dev, Backend dev and Reviewer work."
      />
      <HallLabels
        u={cssPerArtPixel}
        stations={stations}
        office={office}
        agents={tags}
        selected={selected}
        onSelect={onSelect}
      />
    </div>
  );
}
