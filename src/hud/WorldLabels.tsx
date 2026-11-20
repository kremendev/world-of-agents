import { useEffect, useRef, useState } from 'react';
import type { AgentId } from '../events/schema';
import { bubbleText, say, SILENT, speak, type Speech } from '../office/hall/talk';
import { ROSTER } from '../office/roster';
import { STATE_STYLE } from '../office/states';
import { AgentText } from '../page/AgentText';
import type { Message, OfficeState } from '../state/office';
import type { World } from '../world/scene/world';
import type { RoomId } from '../world/map';
import { leaderLine, settleTags, tagText, tagTone, toScreen, type TagBox } from './labels';
import { keepSmallTalk } from './smallTalk';

type Props = {
  world: Pick<World, 'onFrame'>;
  office: OfficeState;
  card: AgentId | null;
  /** A new run (Restart): nobody says what was said before. */
  run: number;
  /** The office's messages are old news (a replay): nobody says them. */
  hushed: boolean;
  /** The box the world fills, in CSS px. */
  width: number;
  height: number;
};

type Said = Partial<Record<AgentId, string | null>>;

/** The raised hand, as the needs-you banner draws it. */
export const HAND =
  'M8 12V5.5a1.5 1.5 0 0 1 3 0V11m0-1V4a1.5 1.5 0 0 1 3 0v6.5m0-.5V5.5a1.5 1.5 0 0 1 3 0V14c0 4-2.7 7-6.5 7-2.8 0-4.4-1.6-5.6-3.6L3.6 14.3a1.5 1.5 0 0 1 2.5-1.6L8 15';

/**
 * The world's labels (4d.6, D2, D16): a name tag over each figure's head and its speech bubble over the tag, HTML over
 * the canvas at a fixed size, moved each frame to where the world projects the head, hidden off screen or behind the
 * camera. The whole layer is hidden from screen readers: the agent list says everything a tag does, and the page's
 * live region what a bubble must not miss. A bubble follows the 2D hall's rules (talk.ts): a message's first sentence,
 * after the ones before it, never while its agent walks, and its time runs only while it shows, so also not while its
 * agent is off screen. Agent text is React text through AgentText. Tags never overlap: settleTags() stacks one that would
 * cover another above it, a needs-you or failed agent's keeping its spot, and holds each tag with its marker 4 px inside
 * the window (Dima, 20 Nov); a bubble rides with its tag. A tag moved more than 12 px from its figure's head has a thin
 * line down to it, in its border's colour (leaderLine()).
 * Where no message shows, idle agents standing together in an idle area trade our own small talk now and then
 * (smallTalk.ts, D10). Over the tag of an agent that needs you, an
 * amber raised hand (D7); of one that failed, a red "!" (D8); both bob gently, and stand still with reduced motion.
 */
export function WorldLabels({ world, office, card, run, hushed, width, height }: Props) {
  const els = useRef<Partial<Record<AgentId, HTMLDivElement | null>>>({});
  const size = useRef({ width, height });
  size.current = { width, height };
  const officeNow = useRef(office);
  officeNow.current = office;
  const speech = useRef<Partial<Record<AgentId, Speech>>>({});
  // what was said before this layer came is not news, as when the 2D hall's view changes
  const [heard] = useState(() => new WeakSet<Message>(office.messages));
  const lastRun = useRef(run);
  const [said, setSaid] = useState<Said>({});

  useEffect(() => {
    const newRun = lastRun.current !== run;
    if (newRun) {
      lastRun.current = run;
      speech.current = {};
    }
    for (const m of office.messages) {
      if (heard.has(m)) continue;
      heard.add(m);
      if (!newRun && !hushed)
        speech.current[m.from] = say(speech.current[m.from] ?? SILENT, bubbleText(m.text));
    }
  }, [office, run, hushed, heard]);

  useEffect(() => {
    let shown: Said = {};
    return world.onFrame((heads) => {
      const now = performance.now();
      const next: Said = {};
      // the small talk (4c.3, D10): idle agents standing together in an idle area
      const together = new Map<RoomId, AgentId[]>();
      for (const { id } of ROSTER) {
        const room = heads[id]?.room;
        if (!room || heads[id]?.walking || officeNow.current.agents[id].state !== 'idle') continue;
        together.set(room, [...(together.get(room) ?? []), id]);
      }
      const chat = keepSmallTalk(together, now);
      // where each shown tag lands and how big it is, all read before anything is written
      const boxes: TagBox[] = [];
      for (const { id } of ROSTER) {
        const head = heads[id];
        const el = els.current[id];
        if (!head || !el) continue;
        const at = toScreen(head, size.current.width, size.current.height);
        if (!at.shown) continue;
        const tag = el.querySelector<HTMLElement>('.hud-tag');
        const marker = el.querySelector<HTMLElement>('.hud-marker');
        // a marker belongs to its tag: from the marker's top to the tag's bottom
        const top = marker?.offsetTop ?? tag?.offsetTop ?? 0;
        const bottom = (tag?.offsetTop ?? 0) + (tag?.offsetHeight ?? 0);
        const { state } = officeNow.current.agents[id];
        boxes.push({
          id,
          x: at.x,
          y: at.y,
          width: tag?.offsetWidth ?? 0,
          height: bottom - top,
          fixed: state === 'needs-you' || state === 'error',
        });
      }
      const settled = settleTags(boxes, size.current);
      for (const { id } of ROSTER) {
        const head = heads[id];
        const el = els.current[id];
        if (!head || !el) continue;
        const at = toScreen(head, size.current.width, size.current.height);
        const { x, y } = settled[id] ?? at;
        el.style.visibility = at.shown ? 'visible' : 'hidden';
        el.style.transform = `translate(${x.toFixed(1)}px, ${y.toFixed(1)}px) translate(-50%, -100%)`;
        const leader = el.querySelector<HTMLElement>('.hud-leader');
        const line = at.shown ? leaderLine({ x, y }, at) : null;
        if (leader) {
          leader.style.display = line ? 'block' : 'none';
          if (line) {
            leader.style.height = `${line.length.toFixed(1)}px`;
            leader.style.transform = `rotate(${line.angle.toFixed(4)}rad)`;
          }
        }
        const talk = speak(speech.current[id] ?? SILENT, now, head.walking || !at.shown);
        speech.current[id] = talk.speech;
        // a message beats small talk, as in the 2D hall
        next[id] = talk.text ?? (at.shown ? (chat[id] ?? null) : null);
      }
      // a render only when a bubble comes, goes or changes
      if (ROSTER.some(({ id }) => (next[id] ?? null) !== (shown[id] ?? null))) {
        shown = next;
        setSaid(next);
      }
    });
  }, [world]);

  return (
    <div className="hud-labels" aria-hidden="true">
      {ROSTER.map(({ id }) => {
        const { name, plus } = tagText(office, id);
        const tone = tagTone(office, id, card);
        const dot = STATE_STYLE[office.agents[id].state].text;
        const text = said[id];
        const { state } = office.agents[id];
        return (
          <div
            key={id}
            className="hud-label"
            data-agent={id}
            ref={(el) => {
              els.current[id] = el;
            }}
          >
            {text && (
              <p className="hud-bubble">
                <AgentText text={text} />
              </p>
            )}
            {state === 'needs-you' && (
              <span className="hud-marker needs">
                <svg viewBox="0 0 24 24" width="18" height="18" focusable="false">
                  <path
                    d={HAND}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            )}
            {state === 'error' && <span className="hud-marker error">!</span>}
            <span className={tone ? `hud-tag ${tone}` : 'hud-tag'}>
              <span className="hud-dot" style={{ background: dot }} />
              {name}
              {plus && <span className="hud-tag-plus">{plus}</span>}
            </span>
            <span className={tone ? `hud-leader ${tone}` : 'hud-leader'} aria-hidden="true" />
          </div>
        );
      })}
    </div>
  );
}
