import type { CSSProperties } from 'react';
import type { AgentId, AgentState } from '../../events/schema';
import { workingCount, type OfficeState } from '../../state/office';
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

/** What the bubbles over one agent need: its feet and height in art pixels, its state and what it says. */
export type AgentTag = {
  id: AgentId;
  x: number;
  y: number;
  height: number;
  state: AgentState;
  /** An orc smashing its keyboard: shows "!!". */
  smashing: boolean;
  /** Agent output or small talk. Plain React text only. */
  speech: string | null;
};

/** State bubble colours from the v1 design (needs-you and error picked to match). Walking has no bubble. */
const STATE_BUBBLE: Record<Exclude<AgentState, 'walking'>, { label: string; bg: string; text: string }> = {
  idle: { label: 'idle', bg: '#2e2924', text: '#d6c9b3' },
  thinking: { label: 'thinking', bg: '#26314a', text: '#c9d6f5' },
  reading: { label: 'reading', bg: '#1f3d39', text: '#a9e6dc' },
  writing: { label: 'writing', bg: '#4a2a12', text: '#ffb27a' },
  waiting: { label: 'waiting', bg: '#3a342c', text: '#eadcc4' },
  'needs-you': { label: 'needs you', bg: '#4d3a0c', text: '#ffd97a' },
  done: { label: 'done', bg: '#2c4622', text: '#c4e8a8' },
  error: { label: 'error', bg: '#4a1616', text: '#ffb0a8' },
};

/**
 * Text in the hall: room plaques, name plates, the Lead's dashboard, the furnace, the "You" sign and the
 * bubbles over each agent. It is HTML on top of the canvas so the text stays sharp at any zoom.
 * Hidden from screen readers because the canvas label already describes the hall.
 */
export function HallLabels({
  u,
  stations,
  office,
  agents,
}: {
  u: number;
  stations: readonly Station[];
  office: OfficeState;
  agents: readonly AgentTag[];
}) {
  const { tasks } = office;
  const done = tasks.filter((t) => t.status === 'done').length;
  const progress = tasks.length === 0 ? 0 : Math.round((done / tasks.length) * 100);
  const tiles = tasks.length > MAX_TILES ? tasks.slice(0, MAX_TILES - 1) : tasks;
  const hidden = tasks.length - tiles.length;
  const working = workingCount(office);

  return (
    <div className="hall-labels" aria-hidden="true" style={{ '--u': u } as unknown as CSSProperties}>
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
        const bubble = t.state === 'walking' ? null : STATE_BUBBLE[t.state];
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
  );
}
