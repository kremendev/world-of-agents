import { act, render } from '@testing-library/react';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import type { OfficeEvent } from '../events/schema';
import { speechMs } from '../office/hall/talk';
import { INITIAL_OFFICE, officeReducer, type OfficeState } from '../state/office';
import { fakeWorld, type FakeWorld } from '../test/fakeWorld';
import { KEEP_SMALL_TALK } from './smallTalk';
import { WorldLabels } from './WorldLabels';

const add = (office: OfficeState, ...events: OfficeEvent[]) => events.reduce(officeReducer, office);
const says = (text: string, at = 1): OfficeEvent => ({
  type: 'message',
  from: 'backend',
  to: 'lead',
  text,
  at,
});

let world: FakeWorld;
beforeEach(() => {
  vi.useFakeTimers();
  world = fakeWorld();
});
afterEach(() => vi.useRealTimers());

const labels = (
  office: OfficeState,
  extra: { run?: number; hushed?: boolean; card?: 'designer' | null } = {},
) => (
  <WorldLabels
    world={world}
    office={office}
    card={extra.card ?? null}
    run={extra.run ?? 0}
    hushed={extra.hushed ?? false}
    width={1000}
    height={500}
  />
);
const label = (c: HTMLElement, id: string) =>
  c.querySelector(`.hud-label[data-agent="${id}"]`) as HTMLElement;
const bubble = (c: HTMLElement, id: string) => label(c, id).querySelector('.hud-bubble');

describe("the world's labels (4d.6)", () => {
  it('has a tag per figure, hidden from screen readers, with its name, dot and border', () => {
    let office = add(INITIAL_OFFICE, { type: 'state', agent: 'backend', state: 'needs-you', at: 1 });
    office = add(office, { type: 'specialist', lead: 'frontend', name: 'react-dev', working: true, at: 2 });
    const { container } = render(labels(office, { card: 'designer' }));
    expect(container.querySelector('.hud-labels')).toHaveAttribute('aria-hidden', 'true');
    expect([...container.querySelectorAll('.hud-tag')].map((t) => t.textContent)).toEqual([
      'Lead/PM',
      'Designer',
      'Frontend dev+ React dev',
      'Backend dev',
      'Reviewer',
    ]);
    expect(label(container, 'backend').querySelector('.hud-tag')).toHaveClass('needs');
    expect(label(container, 'designer').querySelector('.hud-tag')).toHaveClass('selected');
    expect(label(container, 'lead').querySelector('.hud-tag')?.className).toBe('hud-tag');
  });

  it("moves each tag to its figure's head every frame, and hides it off screen", () => {
    const { container } = render(labels(INITIAL_OFFICE));
    act(() =>
      world.frame({
        lead: { x: 0.5, y: 0.5, z: 0.5, walking: false },
        reviewer: { x: 0, y: 0, z: 1.2, walking: false },
      }),
    );
    const lead = label(container, 'lead');
    expect(lead.style.transform).toBe('translate(750.0px, 125.0px) translate(-50%, -100%)');
    expect(lead.style.visibility).toBe('visible');
    expect(label(container, 'reviewer').style.visibility).toBe('hidden');
  });

  it('stacks tags that would overlap, a needs-you tag keeping its spot (Dima, 20 Nov)', () => {
    // jsdom lays nothing out: every tag 100 x 20 px here, the marker and the tag at the label's top
    const spies = [
      vi.spyOn(HTMLElement.prototype, 'offsetWidth', 'get').mockReturnValue(100),
      vi.spyOn(HTMLElement.prototype, 'offsetHeight', 'get').mockReturnValue(20),
      vi.spyOn(HTMLElement.prototype, 'offsetTop', 'get').mockReturnValue(0),
    ];
    const y = (c: HTMLElement, id: string) =>
      /translate\(500\.0px, ([\d.]+)px\)/.exec(label(c, id).style.transform)?.[1];
    const { container, rerender } = render(labels(INITIAL_OFFICE));
    // everyone on one spot: the first keeps it, each next one 24 px higher
    act(() => world.frame());
    expect(['lead', 'designer', 'frontend', 'backend', 'reviewer'].map((id) => y(container, id))).toEqual([
      '250.0',
      '226.0',
      '202.0',
      '178.0',
      '154.0',
    ]);
    // the Backend dev needs you: its tag keeps the spot, the others stack over it
    rerender(labels(add(INITIAL_OFFICE, { type: 'state', agent: 'backend', state: 'needs-you', at: 1 })));
    act(() => world.frame());
    expect(y(container, 'backend')).toBe('250.0');
    expect(y(container, 'lead')).toBe('226.0');
    expect(y(container, 'reviewer')).toBe('154.0');
    for (const s of spies) s.mockRestore();
  });

  it("says a new message's first sentence, as text: markup in it stays text", () => {
    const { container, rerender } = render(labels(INITIAL_OFFICE));
    rerender(labels(add(INITIAL_OFFICE, says('<img src=x onerror=alert(1)> is **done**. More later.'))));
    act(() => world.frame());
    const b = bubble(container, 'backend');
    expect(b).toHaveTextContent('<img src=x onerror=alert(1)> is done.');
    expect(container.querySelector('img')).toBeNull();
  });

  it('shows no bubble while its agent walks or is off screen, and its time runs only while it shows', () => {
    const { container, rerender } = render(labels(INITIAL_OFFICE));
    rerender(labels(add(INITIAL_OFFICE, says('Routes are up.'))));
    const time = speechMs('Routes are up.');
    act(() => world.frame({ backend: { x: 0, y: 0, z: 0.5, walking: true } }));
    expect(bubble(container, 'backend')).toBeNull();
    act(() => world.frame());
    expect(bubble(container, 'backend')).toHaveTextContent('Routes are up.');
    act(() => vi.advanceTimersByTime(time - 1000));
    act(() => world.frame({ backend: { x: 3, y: 0, z: 0.5, walking: false } }));
    expect(bubble(container, 'backend')).toBeNull();
    // twenty seconds off screen spend none of its time
    act(() => vi.advanceTimersByTime(20_000));
    act(() => world.frame());
    expect(bubble(container, 'backend')).toHaveTextContent('Routes are up.');
    act(() => vi.advanceTimersByTime(999));
    act(() => world.frame());
    expect(bubble(container, 'backend')).not.toBeNull();
    act(() => vi.advanceTimersByTime(2));
    act(() => world.frame());
    expect(bubble(container, 'backend')).toBeNull();
  });

  it('says nothing that was said before it came, in a replay, or before a new run', () => {
    const before = add(INITIAL_OFFICE, says('Old news.'));
    const { container, rerender } = render(labels(before));
    act(() => world.frame());
    expect(bubble(container, 'backend')).toBeNull();
    rerender(labels(add(before, says('A replayed line.', 2)), { hushed: true }));
    act(() => world.frame());
    expect(bubble(container, 'backend')).toBeNull();
    rerender(labels(add(INITIAL_OFFICE, says('From the last run.', 3)), { run: 1 }));
    act(() => world.frame());
    expect(bubble(container, 'backend')).toBeNull();
  });

  it('lets idle agents standing together in an idle area trade our own small talk, now and then (4c.3)', () => {
    const { container } = render(labels(INITIAL_OFFICE));
    const at = (room: 'tavern' | 'yard') => ({ x: 0, y: 0, z: 0.5, walking: false, room });
    const bubbles = () => [...container.querySelectorAll('.hud-bubble')].map((b) => b.textContent ?? '');
    const heard: string[] = [];
    // apart, for a minute: nothing
    for (let t = 0; t < 60_000; t += 500) {
      act(() => vi.advanceTimersByTime(500));
      act(() => world.frame({ frontend: at('tavern'), backend: at('yard') }));
      expect(bubbles()).toEqual([]);
    }
    // together in the Tavern, for two minutes: lines from the list, one at a time, from those two only
    for (let t = 0; t < 120_000; t += 500) {
      act(() => vi.advanceTimersByTime(500));
      act(() => world.frame({ frontend: at('tavern'), backend: at('tavern') }));
      expect(bubbles().length).toBeLessThanOrEqual(1);
      for (const b of bubbles()) heard.push(b);
      for (const id of ['lead', 'designer', 'reviewer']) expect(bubble(container, id)).toBeNull();
    }
    expect(heard.length).toBeGreaterThan(0);
    for (const line of heard) expect(KEEP_SMALL_TALK).toContain(line);
  });

  it('marks an agent that needs you with a raised hand and one that failed with a "!" over its tag (4c.5)', () => {
    let office = add(INITIAL_OFFICE, { type: 'state', agent: 'backend', state: 'needs-you', at: 1 });
    office = add(office, { type: 'state', agent: 'reviewer', state: 'error', at: 2 });
    const { container } = render(labels(office));
    const marker = (id: string) => label(container, id).querySelector('.hud-marker');
    expect(marker('backend')).toHaveClass('needs');
    expect(marker('backend')?.querySelector('svg')).not.toBeNull();
    expect(marker('reviewer')).toHaveClass('error');
    expect(marker('reviewer')).toHaveTextContent('!');
    for (const id of ['lead', 'designer', 'frontend']) expect(marker(id)).toBeNull();
    // above the tag, inside the layer screen readers skip
    expect(marker('backend')?.nextElementSibling).toHaveClass('hud-tag');
    expect(container.querySelector('.hud-labels')).toHaveAttribute('aria-hidden', 'true');
  });
});
