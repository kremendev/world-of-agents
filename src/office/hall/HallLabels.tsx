import type { CSSProperties } from 'react';
import type { AgentId, AgentState } from '../../events/schema';
import { doneCount, workingCount, type OfficeState } from '../../state/office';
import { agentById } from '../roster';
import { STATE_STYLE, stateWords } from '../states';
import type { Station } from '../stations';
import { STATUS_COLOR, TILE_LETTER } from '../tasks';
import { DASHBOARD, FURNACE, YOU_SIGN } from './layout';
import { PLAQUES } from './placements';

/** Positions are given in art pixels; the stylesheet multiplies them by --u (CSS px per art pixel). */
function at(x: number, y: number, w: number, h?: number): CSSProperties {
  const vars: Record<string, number> = { '--x': x, '--y': y, '--w': w };
  if (h !== undefined) vars['--h'] = h;
  return vars as unknown as CSSProperties;
}

/** The dashboard has room for five tiles. With more tasks, the last slot shows how many are hidden. */
const MAX_TILES = 5;

/** What the bubbles and the button over one agent need: its feet and size in art pixels, its state and what it says. */
export type AgentTag = {
  id: AgentId;
  x: number;
  y: number;
  width: number;
  height: number;
  state: AgentState;
  /** An orc smashing its keyboard: shows "!!". */
  smashing: boolean;
  /** Agent output or small talk. Plain React text only. */
  speech: string | null;
};

/**
 * Text and controls over the hall canvas, as HTML so the text stays sharp at any zoom.
 * Plaques, name plates, the dashboard, the furnace, the "You" sign and the bubbles are hidden from screen
 * readers: the canvas label describes the hall, and the agent panel and live region carry the same news.
 * The agent buttons are not: they are how keyboard and screen-reader users pick an agent.
 */
export function HallLabels({
  u,
  stations,
  office,
  agents,
  selected,
  onSelect,
}: {
  u: number;
  stations: readonly Station[];
  office: OfficeState;
  agents: readonly AgentTag[];
  selected: AgentId;
  onSelect: (id: AgentId) => void;
}) {
  const { tasks } = office;
  const done = doneCount(office);
  const progress = tasks.length === 0 ? 0 : Math.round((done / tasks.length) * 100);
  const tiles = tasks.length > MAX_TILES ? tasks.slice(0, MAX_TILES - 1) : tasks;
  const hidden = tasks.length - tiles.length;
  const working = workingCount(office);

  return (
    <div className="hall-labels" style={{ '--u': u } as unknown as CSSProperties}>
      <div aria-hidden="true">
        {PLAQUES.map((p) => (
          <div key={p.text} className="hall-row" style={at(p.x, p.y, p.width)}>
            <span className="plaque">{p.text}</span>
          </div>
        ))}

        {stations.map((s) => (
          <div key={s.agent.id} className="hall-row" style={at(s.x, s.plateY, s.width)}>
            <span className="nameplate">
              {s.agent.name} · {s.agent.race}
            </span>
          </div>
        ))}

        <div className="dashboard" style={at(DASHBOARD.x, DASHBOARD.y, DASHBOARD.w, DASHBOARD.h)}>
          <div className="dashboard-head">
            <span className="dashboard-title">Dashboard</span>
            <span>{tasks.length === 0 ? 'No tasks yet' : `${done}/${tasks.length} done`}</span>
          </div>
          <div className="dashboard-tiles">
            {tiles.map((t) => (
              <span key={t.id} className="dashboard-tile" style={{ background: STATUS_COLOR[t.status] }}>
                {TILE_LETTER[t.owner]}
              </span>
            ))}
            {hidden > 0 && <span className="dashboard-tile dashboard-more">+{hidden}</span>}
          </div>
          <div className="dashboard-bar">
            <span style={{ width: `${progress}%` }} />
          </div>
        </div>

        <div className="hall-row" style={at(FURNACE.x, FURNACE.y + 4, FURNACE.w)}>
          <span className="furnace-label">Furnace · {working === 0 ? 'cold' : `${working} working`}</span>
        </div>

        <div className="hall-row" style={at(YOU_SIGN.x, YOU_SIGN.y, YOU_SIGN.w)}>
          <span className="you-sign">You</span>
        </div>

        {agents.map((t) => {
          const bubble = t.state === 'walking' ? null : STATE_STYLE[t.state];
          return (
            <div key={t.id} className="agent-tag" data-agent={t.id} style={at(t.x, t.y, 0, t.height)}>
              {t.speech && <span className="speech">{t.speech}</span>}
              {bubble && (
                <span className="state-bubble" style={{ background: bubble.bg, color: bubble.text }}>
                  {bubble.label}
                  {t.smashing && <span className="smash">!!</span>}
                </span>
              )}
            </div>
          );
        })}
      </div>

      {agents.map((t) => {
        const agent = agentById(t.id);
        return (
          <button
            key={t.id}
            type="button"
            className="agent-button"
            data-agent={t.id}
            style={at(t.x, t.y, t.width, t.height)}
            aria-pressed={t.id === selected}
            aria-label={`${agent.name}, ${agent.race}, ${stateWords(t.state)}. Show details`}
            onClick={() => onSelect(t.id)}
          />
        );
      })}
    </div>
  );
}
