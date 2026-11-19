import { act, render } from '@testing-library/react';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import type { OfficeEvent } from '../events/schema';
import { speechMs } from '../office/hall/talk';
import { INITIAL_OFFICE, officeReducer, type OfficeState } from '../state/office';
import { fakeWorld, type FakeWorld } from '../test/fakeWorld';
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
});
