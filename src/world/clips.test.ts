import { describe, expect, it } from 'vitest';
import { CLIP_FOR, SEATED, clipFor, figureMode } from './clips';

const base = { walking: false, held: false, needsYou: false, hasRaise: false };

describe("the figures' clips (4b, 4c.5)", () => {
  it('plays each pose its clip, and idle for any pose not named', () => {
    expect(clipFor('type')).toBe('play_mobile_game');
    expect(clipFor('drink')).toBe('sit');
    expect(clipFor('spar')).toBe('idle');
    expect(clipFor('raise')).toBe('raise_hand');
    expect(CLIP_FOR.walk).toBe('walk');
  });

  it('a needs-you agent raises its hand where its model has the clip (D7)', () => {
    expect(figureMode({ ...base, pose: 'type', needsYou: true, hasRaise: true })).toBe('raise');
    expect(figureMode({ ...base, pose: 'plan', needsYou: true, hasRaise: true })).toBe('raise');
  });

  it('and without the clip rests where it is: seated in a chair, standing elsewhere', () => {
    expect(figureMode({ ...base, pose: 'type', needsYou: true })).toBe('sit');
    expect(figureMode({ ...base, pose: 'readsit', needsYou: true })).toBe('sit');
    expect(figureMode({ ...base, pose: 'plan', needsYou: true })).toBe('idle');
    expect(SEATED.has('raise')).toBe(false);
  });

  it('walks while it walks, rests while held, and else plays its pose', () => {
    expect(figureMode({ ...base, pose: 'type', walking: true, needsYou: true, hasRaise: true })).toBe('walk');
    expect(figureMode({ ...base, pose: 'smash', held: true })).toBe('sit');
    expect(figureMode({ ...base, pose: 'point', held: true })).toBe('idle');
    expect(figureMode({ ...base, pose: 'smash' })).toBe('smash');
  });
});
