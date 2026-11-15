import { useEffect, useId, useRef, useState } from 'react';
import type { TeamSkill, TeamView } from '../team/schema';
import { checkText, type TextCheck } from '../team/text';
import {
  flagged,
  flagSummary,
  skillDraftId,
  skillMatches,
  skillRefusals,
  usersOf,
  type SkillDraft,
  type TeamActions,
} from '../team/view';

type Ids = { details: string; main: string; base: string };

/** "A", "A and B", "A, B and C". */
const listed = (names: string[]) =>
  names.length < 2 ? (names[0] ?? '') : `${names.slice(0, -1).join(', ')} and ${names.at(-1)}`;

/** The Skills tab (v3.6): the list with who uses each, one skill's whole text, or the form. */
export function SkillsTab({
  view,
  query,
  selected,
  onSelect,
  draft,
  setDraft,
  actions,
  ids,
  onOpenSpecialist,
}: {
  view: TeamView;
  query: string;
  selected: string | null;
  onSelect: (id: string) => void;
  draft: SkillDraft | null;
  setDraft: (draft: SkillDraft | null) => void;
  actions: TeamActions;
  ids: Ids;
  onOpenSpecialist: (id: string) => void;
}) {
  const shown = view.team.skills.filter((s) => skillMatches(s, query));
  const current = shown.find((s) => s.id === selected) ?? shown[0] ?? null;

  const save = async (d: SkillDraft) => {
    const id = skillDraftId(d);
    const change = {
      action: d.mode === 'add' ? ('add-skill' as const) : ('change-skill' as const),
      id,
      name: d.name,
      description: d.description,
      text: d.text,
    };
    if (await actions.send(change, `${d.mode === 'add' ? 'Added' : 'Saved'} skill ${d.name}.`)) {
      setDraft(null);
      onSelect(id);
      actions.focus(ids.details);
    }
  };

  return (
    <div className="tp-split-view">
      <nav className="tp-list" aria-label="Skills">
        {shown.length === 0 && (
          <p className="tp-empty">{query.trim() ? 'Nothing matches' : 'No skills yet.'}</p>
        )}
        <ul>
          {shown.map((s) => {
            const used = usersOf(view, s.id).length;
            return (
              <li key={s.id}>
                <button
                  type="button"
                  className="tp-row"
                  aria-current={!draft && current?.id === s.id ? 'true' : undefined}
                  onClick={() => onSelect(s.id)}
                >
                  <span className="tp-row-main">
                    <span className="tp-row-name">{s.name}</span>
                    <span className="tp-row-sub">{s.description}</span>
                  </span>
                  <span className={used > 0 ? 'tp-used' : 'tp-used none'}>
                    {used > 0 ? `Used by ${used}` : 'Unused'}
                  </span>
                </button>
              </li>
            );
          })}
        </ul>
      </nav>
      <div className="tp-detail-pane">
        {draft ? (
          <SkillForm
            key={draft.mode === 'add' ? 'add' : draft.id}
            draft={draft}
            setDraft={setDraft}
            view={view}
            busy={actions.busy}
            headingId={ids.details}
            onSave={() => void save(draft)}
            onCancel={() => {
              setDraft(null);
              actions.focus(current ? ids.details : ids.main);
            }}
          />
        ) : (
          current && (
            <SkillDetails
              key={current.id}
              s={current}
              view={view}
              actions={actions}
              ids={ids}
              onOpenSpecialist={onOpenSpecialist}
              onChange={() =>
                setDraft({
                  mode: 'change',
                  id: current.id,
                  name: current.name,
                  description: current.description,
                  text: view.texts[current.id] ?? '',
                })
              }
            />
          )
        )}
      </div>
    </div>
  );
}

/** A text line by line, numbered, with checkText()'s link and command-like flags. */
function TextLines({ lines }: { lines: TextCheck['lines'] }) {
  return (
    <ol className="tp-lines">
      {lines.map((line, i) => (
        <li key={i} className={line.flags.length > 0 ? 'flagged' : undefined}>
          <span className="tp-num" aria-hidden="true">
            {i + 1}
          </span>
          <code>{line.text === '' ? ' ' : line.text}</code>
          {line.flags.map((flag) => (
            <span key={flag} className="tp-pill tp-pill-flag">
              {flag === 'link' ? 'link' : 'command-like'}
            </span>
          ))}
        </li>
      ))}
    </ol>
  );
}

/** One skill: what it's for, who uses it, its whole text, Change and Delete. */
function SkillDetails({
  s,
  view,
  actions,
  ids,
  onOpenSpecialist,
  onChange,
}: {
  s: TeamSkill;
  view: TeamView;
  actions: TeamActions;
  ids: Ids;
  onOpenSpecialist: (id: string) => void;
  onChange: () => void;
}) {
  const own = useId();
  const [deleting, setDeleting] = useState(false);
  const users = usersOf(view, s.id);
  const { lines } = checkText(view.texts[s.id] ?? '');
  const question = `${own}-question`;
  const deleteButton = `${own}-delete`;
  const loses =
    users.length === 0
      ? 'No specialist has it.'
      : `${listed(users.map((p) => p.name))} ${users.length === 1 ? 'loses' : 'lose'} it.`;

  const remove = async () => {
    if (await actions.send({ action: 'delete-skill', id: s.id }, `Deleted skill ${s.name}.`)) {
      actions.focus(ids.main);
    }
  };

  return (
    <section className="tp-details" aria-labelledby={ids.details}>
      <div>
        <h2 id={ids.details} tabIndex={-1}>
          {s.name}
        </h2>
        <p className="tp-sub">{s.description}</p>
      </div>

      <div className="tp-section">
        <h3>Used by</h3>
        {users.length > 0 ? (
          <ul className="tp-chips">
            {users.map((p) => (
              <li key={p.id}>
                <button type="button" className="tp-chip-link" onClick={() => onOpenSpecialist(p.id)}>
                  {p.name}
                </button>
              </li>
            ))}
          </ul>
        ) : (
          <p className="tp-muted">No specialist has it.</p>
        )}
      </div>

      <div className="tp-section">
        <h3>The whole text, as a specialist reads it</h3>
        <TextLines lines={lines} />
        <p className={flagged(lines) ? 'tp-flagline' : 'tp-muted'}>{flagSummary(lines)}</p>
      </div>

      {deleting ? (
        <div
          className="tp-confirm"
          role="group"
          aria-labelledby={question}
          onKeyDown={(e) => {
            if (e.key !== 'Escape') return;
            e.preventDefault();
            setDeleting(false);
            actions.focus(deleteButton);
          }}
        >
          <p id={question}>
            Delete {s.name}? {loses}
          </p>
          <div className="tp-buttons">
            <button type="button" className="tp-button tp-danger" onClick={() => void remove()}>
              Delete
            </button>
            <button
              id={`${own}-keep`}
              type="button"
              className="tp-button"
              onClick={() => {
                setDeleting(false);
                actions.focus(deleteButton);
              }}
            >
              Keep
            </button>
          </div>
        </div>
      ) : (
        <div className="tp-buttons">
          <button type="button" className="tp-button" onClick={onChange}>
            Change
          </button>
          <button
            id={deleteButton}
            type="button"
            className="tp-button tp-danger-outline"
            onClick={() => {
              setDeleting(true);
              actions.focus(`${own}-keep`);
            }}
          >
            Delete
          </button>
        </div>
      )}
    </section>
  );
}

/** Add or change a skill: name, what it's for, the text, and a live preview with its flags beside it (v3.4c's rules). */
function SkillForm({
  draft,
  setDraft,
  view,
  busy,
  headingId,
  onSave,
  onCancel,
}: {
  draft: SkillDraft;
  setDraft: (draft: SkillDraft) => void;
  view: TeamView;
  busy: boolean;
  headingId: string;
  onSave: () => void;
  onCancel: () => void;
}) {
  const own = useId();
  const first = useRef<HTMLInputElement>(null);
  const adding = draft.mode === 'add';
  const refusals = skillRefusals(draft, view);
  const { lines } = checkText(draft.text);
  const id = skillDraftId(draft);
  const original = view.team.skills.find((s) => s.id === draft.id)?.name ?? draft.name;
  const set = (more: Partial<SkillDraft>) => setDraft({ ...draft, ...more });

  useEffect(() => first.current?.focus(), []);

  return (
    <form
      className="tp-form"
      aria-labelledby={headingId}
      onSubmit={(e) => {
        e.preventDefault();
        if (refusals.length === 0 && !busy) onSave();
      }}
    >
      <h2 id={headingId} tabIndex={-1}>
        {adding ? 'New skill' : `Change ${original}`}
      </h2>
      <div className="tp-field">
        <label htmlFor={`${own}-name`}>Name</label>
        <input
          ref={first}
          id={`${own}-name`}
          className="tp-input tp-input-half"
          value={draft.name}
          aria-describedby={`${own}-id`}
          onChange={(e) => set({ name: e.target.value })}
        />
        <p id={`${own}-id`} className="tp-hint">
          {adding
            ? id === ''
              ? 'Its id comes from its name.'
              : `Its id will be woa-team:${id}`
            : `Its id stays woa-team:${id}`}
        </p>
      </div>
      <div className="tp-field">
        <label htmlFor={`${own}-for`}>What it&apos;s for</label>
        <input
          id={`${own}-for`}
          className="tp-input"
          value={draft.description}
          onChange={(e) => set({ description: e.target.value })}
        />
      </div>
      <div className="tp-text-split">
        <div className="tp-field">
          <label htmlFor={`${own}-text`}>Text</label>
          <textarea
            id={`${own}-text`}
            className="tp-input tp-textarea"
            rows={14}
            value={draft.text}
            onChange={(e) => set({ text: e.target.value })}
          />
        </div>
        <section className="tp-preview" aria-labelledby={`${own}-preview`}>
          <h3 id={`${own}-preview`}>Preview, as a specialist reads it</h3>
          <TextLines lines={lines} />
          <p className={flagged(lines) ? 'tp-flagline' : 'tp-muted'}>{flagSummary(lines)}</p>
        </section>
      </div>
      {refusals.length > 0 && (
        <ul id={`${own}-refusals`} className="tp-refusals">
          {refusals.map((r) => (
            <li key={r}>{r}</li>
          ))}
        </ul>
      )}
      <div className="tp-buttons">
        <button
          type="submit"
          className="tp-button tp-primary"
          disabled={busy || refusals.length > 0}
          aria-describedby={refusals.length > 0 ? `${own}-refusals` : undefined}
        >
          {adding ? 'Add skill' : 'Save'}
        </button>
        <button type="button" className="tp-button" onClick={onCancel}>
          Cancel
        </button>
      </div>
    </form>
  );
}
