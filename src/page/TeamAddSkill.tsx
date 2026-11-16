import { useId, useRef, useState, type ReactNode } from 'react';
import {
  MAX_PASTE,
  skillIdOf,
  type ClaudeSkillView,
  type SkillCheckView,
  type TeamView,
} from '../team/schema';
import {
  checkCost,
  claudeGroups,
  droppedLine,
  flagged,
  flagSummary,
  LINK_SHAPES,
  plural,
  skillLines,
  sourceFacts,
  sourceFrom,
  takeRefusals,
  type TeamActions,
} from '../team/view';
import { TextLines } from './TextLines';

/** The three ways in that end on the check screen. */
type Way = 'claude' | 'github' | 'paste';
type Step = { at: 'choose' } | { at: Way } | { at: 'check'; check: SkillCheckView; from: Way };

/**
 * "+ Add a skill" (v3.10f, the approved mockup of 16 Nov): four ways in, three of them read by the hall (which writes
 * nothing then) and ending on one check screen; Add to library takes that check by its id, so what is saved is the text
 * the hall read and showed here, never the page's. Every word from a file is React text.
 */
export function AddSkill({
  view,
  actions,
  headingId,
  onWrite,
  onAdded,
  onCancel,
}: {
  view: TeamView;
  actions: TeamActions;
  headingId: string;
  onWrite: () => void;
  onAdded: (id: string) => void;
  onCancel: () => void;
}) {
  const own = useId();
  const [step, setStep] = useState<Step>({ at: 'choose' });
  const [asking, setAsking] = useState(false);
  const [failed, setFailed] = useState<string | null>(null);
  const [claude, setClaude] = useState<{ list: ClaudeSkillView[]; tooBig: number } | null>(null);
  const [link, setLink] = useState('');
  const [pasted, setPasted] = useState('');
  // Only the newest question's answer counts: one asked before a step was left is dropped.
  const asked = useRef(0);

  const go = (next: Step) => {
    setStep(next);
    setFailed(null);
    actions.focus(headingId);
  };

  /** Asks the hall to read one SKILL.md, and opens the check screen with what it read, or says why not. */
  const check = async (from: Way, ask: Parameters<TeamActions['ask']>[0]) => {
    const n = ++asked.current;
    setAsking(true);
    setFailed(null);
    const reply = await actions.ask(ask);
    if (n !== asked.current) return;
    setAsking(false);
    if (reply.ok && 'check' in reply.answer) go({ at: 'check', check: reply.answer.check, from });
    else setFailed(reply.ok ? "The hall's answer wasn't a check." : reply.message);
  };

  const openClaude = async () => {
    go({ at: 'claude' });
    setClaude(null);
    const n = ++asked.current;
    setAsking(true);
    const reply = await actions.ask({ ask: 'claude-list' });
    if (n !== asked.current) return;
    setAsking(false);
    if (reply.ok && 'claude' in reply.answer)
      setClaude({ list: reply.answer.claude, tooBig: reply.answer.tooBig });
    else setFailed(reply.ok ? "The hall's answer wasn't a list." : reply.message);
  };

  const back = (to: Step) => {
    asked.current++;
    setAsking(false);
    go(to);
  };

  const problem = failed !== null && (
    <p className="tp-problem" role="alert">
      {failed}
    </p>
  );
  const heading = (text: string) => (
    <h2 id={headingId} tabIndex={-1}>
      {text}
    </h2>
  );
  const footer = (more?: ReactNode) => (
    <div className="tp-buttons">
      {more}
      {step.at !== 'choose' && (
        <button type="button" className="tp-button" onClick={() => back({ at: 'choose' })}>
          ‹ Other ways
        </button>
      )}
      <button type="button" className="tp-button" onClick={onCancel}>
        Cancel
      </button>
    </div>
  );

  if (step.at === 'check')
    return (
      <CheckScreen
        key={step.check.id}
        view={view}
        check={step.check}
        actions={actions}
        headingId={headingId}
        onAdded={onAdded}
        onCancel={() => back({ at: step.from })}
      />
    );

  if (step.at === 'choose')
    return (
      <section className="tp-details" aria-labelledby={headingId}>
        {heading('Add a skill')}
        <p className="tp-sub">Every skill is checked on one screen before it goes into your library.</p>
        <div className="tp-big-buttons">
          <WayButton title="From your Claude skills" onClick={() => void openClaude()}>
            The skills in ~/.claude/skills: yours and the built-in ones.
          </WayButton>
          <WayButton title="From GitHub" onClick={() => go({ at: 'github' })}>
            A link to one SKILL.md. The hall fetches that file and nothing else.
          </WayButton>
          <WayButton title="Paste a SKILL.md" onClick={() => go({ at: 'paste' })}>
            The whole file, its header included.
          </WayButton>
          <WayButton title="Write a new one" onClick={onWrite}>
            Its name, what it&apos;s for and its text, written here.
          </WayButton>
        </div>
        {footer()}
      </section>
    );

  if (step.at === 'claude') {
    const groups = claude ? claudeGroups(claude.list, view.library) : [];
    return (
      <section className="tp-details" aria-labelledby={headingId}>
        {heading('Your Claude skills')}
        <p className="tp-sub">
          The SKILL.md files in ~/.claude/skills. Only the one you pick is read, and only its SKILL.md.
        </p>
        {claude === null && failed === null && <p className="tp-muted">Reading ~/.claude/skills...</p>}
        {claude !== null && claude.list.length === 0 && (
          <p className="tp-muted">No skills found in ~/.claude/skills.</p>
        )}
        {groups.map((g) => (
          <section key={g.label} className="tp-group" aria-labelledby={`${own}-${g.label}`}>
            <h3 id={`${own}-${g.label}`} className="tp-group-head">
              <span>{g.title}</span>
            </h3>
            {g.note && <p className="tp-flagline">{g.note}</p>}
            <ul>
              {g.rows.map((s) => (
                <li key={s.file}>
                  <button
                    type="button"
                    className="tp-row"
                    aria-disabled={asking || undefined}
                    onClick={() => {
                      if (!asking) void check('claude', { ask: 'claude', file: s.file });
                    }}
                  >
                    <span className="tp-row-main">
                      <span className="tp-row-name">{s.name}</span>
                      <span className="tp-row-sub">{s.description}</span>
                      <span className="tp-row-sub tp-file">{s.file}</span>
                    </span>
                    {s.inLibrary && <span className="tp-used">In your library</span>}
                  </button>
                </li>
              ))}
            </ul>
          </section>
        ))}
        {claude !== null && claude.tooBig > 0 && (
          <p className="tp-muted">{plural(claude.tooBig, 'skill')} over 64 KiB left out.</p>
        )}
        {problem}
        {footer()}
      </section>
    );
  }

  if (step.at === 'github')
    return (
      <form
        className="tp-form"
        aria-labelledby={headingId}
        onSubmit={(e) => {
          e.preventDefault();
          if (!asking && link.trim() !== '') void check('github', { ask: 'github', link: link.trim() });
        }}
      >
        {heading('From GitHub')}
        <div className="tp-field">
          <label htmlFor={`${own}-link`}>A link to a SKILL.md, or to its folder</label>
          <input
            id={`${own}-link`}
            className="tp-input"
            value={link}
            spellCheck={false}
            autoComplete="off"
            aria-describedby={`${own}-shapes`}
            onChange={(e) => setLink(e.target.value)}
          />
          <div id={`${own}-shapes`} className="tp-hint">
            <p>The hall takes these three, and fetches that one file from raw.githubusercontent.com:</p>
            <ul className="tp-shapes">
              {LINK_SHAPES.map((s) => (
                <li key={s}>
                  <code>{s}</code>
                </li>
              ))}
            </ul>
          </div>
        </div>
        {problem}
        {footer(
          <button
            type="submit"
            className="tp-button tp-primary"
            aria-disabled={asking || link.trim() === '' || undefined}
          >
            {asking ? 'Fetching...' : 'Fetch'}
          </button>,
        )}
      </form>
    );

  const tooLong = pasted.length > MAX_PASTE;
  return (
    <form
      className="tp-form"
      aria-labelledby={headingId}
      onSubmit={(e) => {
        e.preventDefault();
        if (!asking && pasted.trim() !== '' && !tooLong) void check('paste', { ask: 'paste', text: pasted });
      }}
    >
      {heading('Paste a SKILL.md')}
      <div className="tp-field">
        <label htmlFor={`${own}-paste`}>The whole file, its header included</label>
        <textarea
          id={`${own}-paste`}
          className="tp-input tp-textarea"
          rows={16}
          value={pasted}
          spellCheck={false}
          onChange={(e) => setPasted(e.target.value)}
        />
      </div>
      {tooLong && (
        <ul className="tp-refusals">
          <li>It is over 128 KiB.</li>
        </ul>
      )}
      {problem}
      {footer(
        <button
          type="submit"
          className="tp-button tp-primary"
          aria-disabled={asking || pasted.trim() === '' || tooLong || undefined}
        >
          {asking ? 'Checking...' : 'Check it'}
        </button>,
      )}
    </form>
  );
}

function WayButton({
  title,
  onClick,
  children,
}: {
  title: string;
  onClick: () => void;
  children: ReactNode;
}) {
  return (
    <button type="button" className="tp-big-button" onClick={onClick}>
      <strong>{title}</strong>
      <span className="tp-muted">{children}</span>
    </button>
  );
}

/**
 * The one check screen (v3.10f) for all three ways: the name and what it's for as Dima leaves them, the facts and cost,
 * what its header held that the library leaves out, the files it names that don't come along, the refusals, and the
 * whole text with its flags. Add to library sends the check's id, the new id and those two fields, nothing else.
 */
function CheckScreen({
  view,
  check,
  actions,
  headingId,
  onAdded,
  onCancel,
}: {
  view: TeamView;
  check: SkillCheckView;
  actions: TeamActions;
  headingId: string;
  onAdded: (id: string) => void;
  onCancel: () => void;
}) {
  const own = useId();
  const [name, setName] = useState(check.name);
  const [description, setDescription] = useState(check.description);
  const refusals = takeRefusals(check, name, description, view);
  const lines = skillLines(check.text);
  const id = skillIdOf(name);
  const builtIn = check.source.kind === 'claude' && check.source.label === 'built-in';

  const add = async () => {
    if (
      await actions.send(
        { action: 'take-skill', check: check.id, id, name, description },
        `Added ${name} to the library.`,
      )
    )
      onAdded(id);
  };

  return (
    <form
      className="tp-form"
      aria-labelledby={headingId}
      onSubmit={(e) => {
        e.preventDefault();
        if (refusals.length === 0 && !actions.busy) void add();
      }}
    >
      <h2 id={headingId} tabIndex={-1}>
        Check before adding
      </h2>
      <div className="tp-field">
        <label htmlFor={`${own}-name`}>Name</label>
        <input
          id={`${own}-name`}
          className="tp-input tp-input-half"
          value={name}
          aria-describedby={`${own}-id`}
          onChange={(e) => setName(e.target.value)}
        />
        <p id={`${own}-id`} className="tp-hint">
          {id === '' ? 'Its id comes from its name.' : `Its id will be woa-team:${id}`}
        </p>
      </div>
      <div className="tp-field">
        <label htmlFor={`${own}-for`}>What it&apos;s for</label>
        <input
          id={`${own}-for`}
          className="tp-input"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>

      <dl className="tp-facts">
        <div>
          <dt>From</dt>
          <dd>{sourceFrom(check.source)}</dd>
        </div>
        {sourceFacts(check.source).map((f) => (
          <div key={f.label}>
            <dt>{f.label}</dt>
            <dd>{f.value}</dd>
          </div>
        ))}
        <div>
          <dt>Cost</dt>
          <dd>{checkCost(check.text)}</dd>
        </div>
      </dl>

      {builtIn && (
        <p className="tp-flagline">
          A built-in Claude skill keeps Anthropic&apos;s license: read it before you copy one. Most need their
          scripts, which don&apos;t come along.
        </p>
      )}

      {check.dropped.length > 0 && (
        <section className="tp-warn" aria-labelledby={`${own}-dropped`}>
          <h3 id={`${own}-dropped`}>Left out of its header</h3>
          <ul>
            {check.dropped.map((d) => (
              <li key={d.key}>{droppedLine(d)}</li>
            ))}
          </ul>
        </section>
      )}
      {check.missing.length > 0 && (
        <section className="tp-warn" aria-labelledby={`${own}-missing`}>
          <h3 id={`${own}-missing`}>It mentions files that don&apos;t come along</h3>
          <ul>
            {check.missing.map((m) => (
              <li key={m}>
                <code>{m}</code>
              </li>
            ))}
          </ul>
          <p>Only this SKILL.md comes into the library.</p>
        </section>
      )}

      {refusals.length > 0 && (
        <ul id={`${own}-refusals`} className="tp-refusals">
          {refusals.map((r) => (
            <li key={r}>{r}</li>
          ))}
        </ul>
      )}

      <section className="tp-section" aria-labelledby={`${own}-text`}>
        <h3 id={`${own}-text`}>The whole text, as a specialist would read it</h3>
        <TextLines lines={lines} />
        <p className={flagged(lines) ? 'tp-flagline' : 'tp-muted'}>{flagSummary(lines)}</p>
      </section>

      <div className="tp-buttons">
        <button
          type="submit"
          className="tp-button tp-primary"
          disabled={actions.busy || refusals.length > 0}
          aria-describedby={refusals.length > 0 ? `${own}-refusals` : undefined}
        >
          Add to library
        </button>
        <button type="button" className="tp-button" onClick={onCancel}>
          Cancel
        </button>
      </div>
    </form>
  );
}
