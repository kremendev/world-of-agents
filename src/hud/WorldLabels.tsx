import { useEffect, useRef, useState } from 'react';
import type { AgentId } from '../events/schema';
import { bubbleText, say, SILENT, speak, type Speech } from '../office/hall/talk';
import { ROSTER } from '../office/roster';
import { STATE_STYLE } from '../office/states';
import { AgentText } from '../page/AgentText';
import type { Message, OfficeState } from '../state/office';
import type { World } from '../world/scene/world';
import { tagText, tagTone, toScreen } from './labels';

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

/**
 * The world's labels (4d.6, D2, D16): a name tag over each figure's head and its speech bubble over the tag, HTML over
 * the canvas at a fixed size, moved each frame to where the world projects the head, hidden off screen or behind the
 * camera. The whole layer is hidden from screen readers: the agent list says everything a tag does, and the page's
 * live region what a bubble must not miss. A bubble follows the 2D hall's rules (talk.ts): a message's first sentence,
 * after the ones before it, never while its agent walks, and its time runs only while it shows, so also not while its
 * agent is off screen. Agent text is React text through AgentText.
 */
export function WorldLabels({ world, office, card, run, hushed, width, height }: Props) {
  const els = useRef<Partial<Record<AgentId, HTMLDivElement | null>>>({});
  const size = useRef({ width, height });
  size.current = { width, height };
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
      for (const { id } of ROSTER) {
        const head = heads[id];
        const el = els.current[id];
        if (!head || !el) continue;
        const at = toScreen(head, size.current.width, size.current.height);
        el.style.visibility = at.shown ? 'visible' : 'hidden';
        el.style.transform = `translate(${at.x.toFixed(1)}px, ${at.y.toFixed(1)}px) translate(-50%, -100%)`;
        const talk = speak(speech.current[id] ?? SILENT, now, head.walking || !at.shown);
        speech.current[id] = talk.speech;
        next[id] = talk.text;
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
            <span className={tone ? `hud-tag ${tone}` : 'hud-tag'}>
              <span className="hud-dot" style={{ background: dot }} />
              {name}
              {plus && <span className="hud-tag-plus">{plus}</span>}
            </span>
          </div>
        );
      })}
    </div>
  );
}
