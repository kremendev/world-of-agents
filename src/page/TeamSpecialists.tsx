import { useEffect, useId, useRef, useState } from 'react';
import { GUILDS, MAX_PRELOADED, PRESETS, type TeamSpecialist, type TeamView } from '../team/schema';
import {
  draftId,
  GUILD_NAME,
  LEAD_NAME,
  PRESET_LONG,
  PRESET_SENTENCE,
  PRESET_SHORT,
  presetAllowed,
  rowLine,
  specialistMatches,
  specialistRefusals,
  type Preset,
  type SpecialistDraft,
  type TeamActions,
} from '../team/view';

type Ids = { details: string; main: string; base: string };

/** What a specialist may do, as a pill; the shell preset with the mockup's prompt mark. */
function PresetPill({ preset, label }: { preset: Preset; label: string }) {
  return (
    <span className={`tp-pill tp-pill-${preset}`}>
      {preset === 'edits-and-checks' && <span aria-hidden="true">&gt;_</span>}
      {label}
    </span>
  );
}

/** The Specialists tab (v3.6): the list by guild on the left, one specialist or the form on the right. */
export function SpecialistsTab({
  view,
  query,
  selected,
  onSelect,
  draft,
  setDraft,
  actions,
  ids,
  onOpenSkill,
}: {
  view: TeamView;
  query: string;
  selected: string | null;
  onSelect: (id: string) => void;
  draft: SpecialistDraft | null;
  setDraft: (draft: SpecialistDraft | null) => void;
  actions: TeamActions;
  ids: Ids;
  onOpenSkill: (id: string) => void;
}) {
  const shown = view.team.specialists.filter((p) => specialistMatches(p, view.team.skills, query));
  const current = shown.find((p) => p.id === selected) ?? shown[0] ?? null;

  const save = async (d: SpecialistDraft) => {
    const change =
      d.mode === 'add'
        ? {
            action: 'add-specialist' as const,
            name: d.name,
            guild: d.guild!,
            role: d.role,
            preset: d.preset,
            skills: d.skills,
          }
        : {
            action: 'change-specialist' as const,
            id: d.id,
            role: d.role,
            preset: d.preset,
            skills: d.skills,
          };
    const said = d.mode === 'add' ? `Added specialist ${d.name}.` : `Saved ${d.name}.`;
    if (await actions.send(change, said)) {
      setDraft(null);
      onSelect(draftId(d));
      actions.focus(ids.details);
    }
  };

  return (
    <div className="tp-split-view">
      <nav className="tp-list" aria-label="Specialists">
        {shown.length === 0 && (
          <p className="tp-empty">{query.trim() ? 'Nothing matches' : 'No specialists yet.'}</p>
        )}
        {GUILDS.map((guild) => {
          const members = shown.filter((p) => p.guild === guild);
          if (members.length === 0) return null;
          const head = `${ids.base}-guild-${guild}`;
          return (
            <section key={guild} className="tp-group" aria-labelledby={head}>
              <h2 id={head} className="tp-group-head">
                <span>{GUILD_NAME[guild]} guild</span>
                <span className="tp-group-lead">led by {LEAD_NAME[guild]}</span>
              </h2>
              <ul>
                {members.map((p) => (
                  <li key={p.id}>
                    <button
                      type="button"
                      className="tp-row"
                      aria-current={!draft && current?.id === p.id ? 'true' : undefined}
                      onClick={() => onSelect(p.id)}
                    >
                      <span className="tp-row-main">
                        <span className={p.on ? 'tp-row-name' : 'tp-row-name off'}>{p.name}</span>
                        <span className="tp-row-sub">{rowLine(p)}</span>
                      </span>
                      {!p.on && <span className="tp-pill tp-pill-off">Off</span>}
                    </button>
                  </li>
                ))}
              </ul>
            </section>
          );
        })}
      </nav>
      <div className="tp-detail-pane">
        {draft ? (
          <SpecialistForm
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
            <SpecialistDetails
              key={current.id}
              p={current}
              view={view}
              actions={actions}
              ids={ids}
              onOpenSkill={onOpenSkill}
              onChange={() =>
                setDraft({
                  mode: 'change',
                  id: current.id,
                  name: current.name,
                  guild: current.guild,
                  role: current.role,
                  preset: current.preset,
                  skills: [...current.skills],
                })
              }
            />
          )
        )}
      </div>
    </div>
  );
}

/** One specialist: who starts it, the switch, its role, what it may do, its skills, and Change and Delete. */
function SpecialistDetails({
  p,
  view,
  actions,
  ids,
  onOpenSkill,
  onChange,
}: {
  p: TeamSpecialist;
  view: TeamView;
  actions: TeamActions;
  ids: Ids;
  onOpenSkill: (id: string) => void;
  onChange: () => void;
}) {
  const own = useId();
  const [picking, setPicking] = useState(false);
  const [deleting, setDeleting] = useState(false);
  const addSkill = `${own}-add-skill`;
  const pickHead = `${own}-pick`;
  const question = `${own}-question`;
  const deleteButton = `${own}-delete`;
  const lead = LEAD_NAME[p.guild];
  const nameOf = (id: string) => view.team.skills.find((s) => s.id === id)?.name ?? id;
  const free = view.team.skills.filter((s) => !p.skills.includes(s.id));
  const full = p.skills.length >= MAX_PRELOADED;

  const give = async (skill: string) => {
    const name = nameOf(skill);
    if (await actions.send({ action: 'attach', specialist: p.id, skill }, `Gave ${name} to ${p.name}.`)) {
      setPicking(false);
      // "+ Add skill" stays while it has room and a skill is left to give; else the heading takes the focus.
      const addStays = p.skills.length + 1 < MAX_PRELOADED && free.length > 1;
      actions.focus(addStays ? addSkill : ids.details);
    }
  };
  const take = async (skill: string) => {
    const name = nameOf(skill);
    // Undo puts it back where it was, as the mockup does (3.6e).
    const at = p.skills.indexOf(skill);
    const done = await actions.send(
      { action: 'detach', specialist: p.id, skill },
      `Took ${name} from ${p.name}.`,
      { change: { action: 'attach', specialist: p.id, skill, at }, said: `Gave ${name} back to ${p.name}.` },
    );
    if (done) actions.focus(addSkill);
  };
  const remove = async () => {
    if (await actions.send({ action: 'delete-specialist', id: p.id }, `Deleted ${p.name}.`)) {
      actions.focus(ids.main);
    }
  };

  return (
    <section className="tp-details" aria-labelledby={ids.details}>
      <div className="tp-details-head">
        <div>
          <h2 id={ids.details} tabIndex={-1}>
            {p.name}
          </h2>
          <p className="tp-sub">
            {GUILD_NAME[p.guild]} guild · started by the {lead}
          </p>
        </div>
        <button
          type="button"
          role="switch"
          aria-checked={p.on}
          aria-label={p.name}
          className="tp-switch"
          onClick={() =>
            void actions.send(
              { action: 'switch', id: p.id, on: !p.on },
              `Switched ${p.name} ${p.on ? 'off' : 'on'}.`,
            )
          }
        >
          <span className="tp-switch-track" aria-hidden="true">
            <span className="tp-switch-knob" />
          </span>
          <span aria-hidden="true">{p.on ? 'On' : 'Off'}</span>
        </button>
      </div>
      <p className="tp-role">{p.role}</p>

      <div className="tp-section">
        <h3>What it may do</h3>
        <p className="tp-may">
          <PresetPill preset={p.preset} label={PRESET_SHORT[p.preset]} />{' '}
          <span>{PRESET_SENTENCE[p.preset]}</span>
        </p>
      </div>

      <div className="tp-section">
        <div className="tp-section-head">
          <h3>Skills</h3>
          <span className="tp-muted">
            {p.skills.length} of {MAX_PRELOADED}
          </span>
        </div>
        <ul className="tp-chips">
          {p.skills.map((id) => (
            <li key={id} className="tp-chip">
              <button type="button" className="tp-chip-name" onClick={() => onOpenSkill(id)}>
                {nameOf(id)}
              </button>
              <button
                type="button"
                className="tp-chip-x"
                aria-label={`Take ${nameOf(id)} from ${p.name}`}
                onClick={() => void take(id)}
              >
                ×
              </button>
            </li>
          ))}
          {!full && free.length > 0 && (
            <li>
              <button
                id={addSkill}
                type="button"
                className="tp-chip-add"
                aria-expanded={picking}
                onClick={() => {
                  setPicking(!picking);
                  if (!picking) actions.focus(`${own}-pick-0`);
                }}
              >
                + Add skill
              </button>
            </li>
          )}
        </ul>
        {picking && !full && (
          <div
            className="tp-picker"
            role="group"
            aria-labelledby={pickHead}
            onKeyDown={(e) => {
              if (e.key !== 'Escape') return;
              e.preventDefault();
              setPicking(false);
              actions.focus(addSkill);
            }}
          >
            <div className="tp-picker-head">
              <p id={pickHead}>
                Give {p.name} a skill. It has {p.skills.length} of {MAX_PRELOADED}.
              </p>
              <button
                type="button"
                className="tp-link"
                onClick={() => {
                  setPicking(false);
                  actions.focus(addSkill);
                }}
              >
                Cancel
              </button>
            </div>
            <ul className="tp-picker-list">
              {free.map((s, i) => (
                <li key={s.id}>
                  <button
                    id={`${own}-pick-${i}`}
                    type="button"
                    className="tp-card"
                    onClick={() => void give(s.id)}
                  >
                    <span className="tp-card-title">{s.name}</span>
                    <span className="tp-card-text">{s.description}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <dl className="tp-facts">
        <div>
          <dt>Model</dt>
          <dd>Sonnet, like every specialist</dd>
        </div>
        <div>
          <dt>Started by</dt>
          <dd>{lead}</dd>
        </div>
        <div>
          <dt>Its id</dt>
          <dd>
            <code>woa-team:{p.id}</code>
          </dd>
        </div>
      </dl>

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
            Delete {p.name}? The {lead} can&apos;t start it any more. Its skills stay in the team. To stop it
            for now and keep it, switch it off instead.
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

/** Add or change a specialist (v3.6): name and guild only when it is new, since together they make its id. */
function SpecialistForm({
  draft,
  setDraft,
  view,
  busy,
  headingId,
  onSave,
  onCancel,
}: {
  draft: SpecialistDraft;
  setDraft: (draft: SpecialistDraft) => void;
  view: TeamView;
  busy: boolean;
  headingId: string;
  onSave: () => void;
  onCancel: () => void;
}) {
  const own = useId();
  const first = useRef<HTMLInputElement>(null);
  const adding = draft.mode === 'add';
  const refusals = specialistRefusals(draft, view);
  const id = draftId(draft);
  const set = (more: Partial<SpecialistDraft>) => setDraft({ ...draft, ...more });

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
        {adding ? 'New specialist' : `Change ${draft.name}`}
      </h2>

      {adding && (
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
            {id === '' ? 'Its id comes from its guild and its name.' : `Its id will be woa-team:${id}`}
          </p>
        </div>
      )}

      <fieldset className="tp-field">
        <legend>Guild</legend>
        <div className="tp-cards tp-cards-4">
          {GUILDS.map((guild) => (
            <label key={guild} className="tp-card tp-choice">
              <input
                type="radio"
                name={`${own}-guild`}
                value={guild}
                checked={draft.guild === guild}
                disabled={!adding}
                onChange={() =>
                  set({
                    guild,
                    // The Design guild runs no commands: its editors edit files only.
                    preset: presetAllowed(guild, draft.preset) ? draft.preset : 'edits',
                  })
                }
              />
              <span>
                <span className="tp-card-title">{GUILD_NAME[guild]}</span>
                <span className="tp-card-text">led by {LEAD_NAME[guild]}</span>
              </span>
            </label>
          ))}
        </div>
      </fieldset>

      <div className="tp-field">
        <label htmlFor={`${own}-role`}>What it does, in one line</label>
        <input
          ref={adding ? undefined : first}
          id={`${own}-role`}
          className="tp-input"
          value={draft.role}
          aria-describedby={`${own}-role-hint`}
          onChange={(e) => set({ role: e.target.value })}
        />
        <p id={`${own}-role-hint`} className="tp-hint">
          Shown in the list. Its guild lead reads it to decide when to call it.
        </p>
      </div>

      <fieldset className="tp-field">
        <legend>What it may do</legend>
        <div className="tp-cards tp-cards-3">
          {PRESETS.map((preset) => (
            <label key={preset} className="tp-card tp-choice">
              <input
                type="radio"
                name={`${own}-preset`}
                value={preset}
                checked={draft.preset === preset}
                disabled={!presetAllowed(draft.guild, preset)}
                onChange={() => set({ preset })}
              />
              <span>
                <PresetPill preset={preset} label={PRESET_LONG[preset]} />
                <span className="tp-card-text">{PRESET_SENTENCE[preset]}</span>
              </span>
            </label>
          ))}
        </div>
      </fieldset>

      <fieldset className="tp-field">
        <legend>
          Skills{' '}
          <span className="tp-muted">
            · {draft.skills.length} of {MAX_PRELOADED} chosen
          </span>
        </legend>
        <div className="tp-cards tp-cards-3">
          {view.team.skills.map((s) => {
            const on = draft.skills.includes(s.id);
            return (
              <label key={s.id} className="tp-card tp-choice">
                <input
                  type="checkbox"
                  checked={on}
                  disabled={!on && draft.skills.length >= MAX_PRELOADED}
                  onChange={() =>
                    set({ skills: on ? draft.skills.filter((x) => x !== s.id) : [...draft.skills, s.id] })
                  }
                />
                <span>
                  <span className="tp-card-title">{s.name}</span>
                  <span className="tp-card-text">{s.description}</span>
                </span>
              </label>
            );
          })}
        </div>
      </fieldset>

      <p className="tp-model">
        <span>Model</span> <span className="tp-muted">Sonnet, like every specialist</span>
      </p>

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
          {adding ? 'Add specialist' : 'Save'}
        </button>
        <button type="button" className="tp-button" onClick={onCancel}>
          Cancel
        </button>
      </div>
    </form>
  );
}
