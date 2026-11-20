import { useId, useMemo, type Ref } from 'react';
import type { AgentId } from '../events/schema';
import { spriteSize, toRuns, type PixelSprite } from '../pixel/sprite';
import type { OfficeState } from '../state/office';
import { agentById, specialistWords } from '../office/roster';
import { STATE_STYLE } from '../office/states';
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

/**
 * Everything about the selected agent: who it is and what it is doing.
 * `live`: a real run, so the model and tools are the real ones.
 * The HUD's card (4d.4) shows it without the 2D sprite (`portrait`, D14), with a guild lead's specialists at work
 * (`specialists`, D13), with a heading the focus can be moved to (`headingRef`, D17), and with the look of the
 * Forge Keep's model instead of the sprite's (`keepLook`, Dima, 20 Nov).
 */
export function AgentPanel({
  office,
  agent: id,
  live = false,
  portrait = true,
  specialists = false,
  keepLook = false,
  headingRef,
}: {
  office: OfficeState;
  agent: AgentId;
  live?: boolean;
  portrait?: boolean;
  specialists?: boolean;
  keepLook?: boolean;
  headingRef?: Ref<HTMLHeadingElement>;
}) {
  const agent = agentById(id);
  const { state, taskId, copies } = office.agents[id];
  const helping = specialists && id !== 'lead' ? office.specialists[id] : [];
  const task = office.tasks.find((t) => t.id === taskId);
  const chip = STATE_STYLE[state];
  const headingId = useId();

  return (
    <section className="panel agent-panel" aria-labelledby={headingId}>
      <div className="agent-card">
        {portrait && (
          <div className="sprite-tile">
            <SpritePreview sprite={agent.sprite} scale={3} />
          </div>
        )}
        <div className="agent-intro">
          <h2 id={headingId} ref={headingRef} tabIndex={headingRef ? -1 : undefined}>
            {agent.name}
          </h2>
          <p className="muted">
            {agent.race} · {live ? 'model' : 'model in v2'}: {agent.model}
          </p>
          <p>{keepLook ? agent.keepLook : agent.look}</p>
          <div className="agent-chips">
            <span className="chip" style={{ background: chip.bg, color: chip.text }}>
              {chip.label}
            </span>
            {copies && <span className="chip copies-chip">x{copies}</span>}
            {helping.length > 0 && (
              <span className="chip specialists-chip">+ {helping.map(specialistWords).join(', ')}</span>
            )}
          </div>
        </div>
      </div>

      <dl className="details">
        <dt>Current task</dt>
        <dd>{task?.title ?? 'None'}</dd>
        <dt>Task status</dt>
        <dd>{task ? STATUS_CHIP[task.status].label : 'None'}</dd>
        <dt>{live ? 'Tools' : 'Tools in v2'}</dt>
        <dd>{agent.tools}</dd>
      </dl>

      {state === 'waiting' && (
        <p className="waiting-note">Waiting for {agent.waitingFor}. Not working while it waits.</p>
      )}
    </section>
  );
}
