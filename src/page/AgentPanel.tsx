import { useId, useMemo } from 'react';
import type { AgentId } from '../events/schema';
import { spriteSize, toRuns, type PixelSprite } from '../pixel/sprite';
import { logFor, type LogEntry, type OfficeState } from '../state/office';
import { agentById } from '../office/roster';
import { STATE_STYLE, stateWords } from '../office/states';
import { STATUS_CHIP } from '../office/tasks';

/** A sprite as SVG rects, `scale` CSS px per art pixel. crispEdges keeps the pixels square at any zoom. */
function SpritePreview({ sprite, scale }: { sprite: PixelSprite; scale: number }) {
  const { width, height } = spriteSize(sprite);
  const runs = useMemo(() => toRuns(sprite), [sprite]);
  return (
    <svg
      className="sprite-preview"
      width={width * scale}
      height={height * scale}
      viewBox={`0 0 ${width} ${height}`}
      shapeRendering="crispEdges"
      aria-hidden="true"
    >
      {runs.map((r, i) => (
        <rect key={i} x={r.x} y={r.y} width={r.length} height={1} fill={r.color} />
      ))}
    </svg>
  );
}

const nameOf = (id: AgentId | 'you') => (id === 'you' ? 'you' : agentById(id).name);

/** One activity line, from `viewer`'s side. Agent output stays plain text. */
function describe(entry: LogEntry, viewer: AgentId, office: OfficeState): string {
  if (entry.kind === 'message') {
    return entry.from === viewer
      ? `To ${nameOf(entry.to)}: ${entry.text}`
      : `From ${nameOf(entry.from)}: ${entry.text}`;
  }
  const task = office.tasks.find((t) => t.id === entry.taskId);
  return task ? `${stateWords(entry.state)} · ${task.title}` : stateWords(entry.state);
}

/** Everything about the selected agent: who it is, what it is doing, and what it has done this run. */
export function AgentPanel({ office, agent: id }: { office: OfficeState; agent: AgentId }) {
  const agent = agentById(id);
  const { state, taskId } = office.agents[id];
  const task = office.tasks.find((t) => t.id === taskId);
  const chip = STATE_STYLE[state];
  const log = logFor(office, id);
  const headingId = useId();

  return (
    <section className="panel agent-panel" aria-labelledby={headingId}>
      <div className="agent-card">
        <div className="sprite-tile">
          <SpritePreview sprite={agent.sprite} scale={3} />
        </div>
        <div className="agent-intro">
          <h2 id={headingId}>{agent.name}</h2>
          <p className="muted">
            {agent.race} · model in v2: {agent.model}
          </p>
          <p>{agent.look}</p>
          <span className="chip" style={{ background: chip.bg, color: chip.text }}>
            {chip.label}
          </span>
        </div>
      </div>

      <dl className="details">
        <dt>Current task</dt>
        <dd>{task?.title ?? 'None'}</dd>
        <dt>Task status</dt>
        <dd>{task ? STATUS_CHIP[task.status].label : 'None'}</dd>
        <dt>Tools in v2</dt>
        <dd>{agent.tools}</dd>
        <dt>Tokens</dt>
        <dd>0 · real numbers from v2</dd>
      </dl>

      {state === 'waiting' && (
        <p className="waiting-note">
          Waiting for {agent.waitingFor}. Not running while it waits, so it uses 0 tokens.
        </p>
      )}

      <h3>Activity</h3>
      {log.length === 0 ? (
        <p className="muted">Nothing yet.</p>
      ) : (
        <ol className="activity">
          {log.map((entry, i) => (
            <li key={log.length - i}>{describe(entry, id, office)}</li>
          ))}
        </ol>
      )}
    </section>
  );
}
