import { describe, expect, it } from 'vitest';
import { INITIAL_OFFICE, officeReducer } from '../state/office';
import { tagText, tagTone, toScreen } from './labels';

describe("the world's labels (4d.6)", () => {
  it('puts a projected point on the box: the middle, the corners, y down', () => {
    expect(toScreen({ x: 0, y: 0, z: 0.5 }, 1440, 900)).toEqual({ x: 720, y: 450, shown: true });
    expect(toScreen({ x: -1, y: 1, z: 0.5 }, 1440, 900)).toEqual({ x: 0, y: 0, shown: true });
    expect(toScreen({ x: 1, y: -1, z: 0.5 }, 1440, 900)).toEqual({ x: 1440, y: 900, shown: true });
    expect(toScreen({ x: 0.5, y: -0.5, z: 0.9 }, 800, 600)).toEqual({ x: 600, y: 450, shown: true });
  });

  it('hides a label off the box, behind the camera or past its far plane', () => {
    expect(toScreen({ x: 1.01, y: 0, z: 0.5 }, 1440, 900).shown).toBe(false);
    expect(toScreen({ x: 0, y: -1.2, z: 0.5 }, 1440, 900).shown).toBe(false);
    // three projects a point behind the camera to z beyond 1
    expect(toScreen({ x: 0.1, y: 0.1, z: 1.02 }, 1440, 900).shown).toBe(false);
    expect(toScreen({ x: 0, y: 0, z: 1 }, 1440, 900).shown).toBe(false);
    expect(toScreen({ x: 0, y: 0, z: -1.5 }, 1440, 900).shown).toBe(false);
  });

  it("says the name, and a guild lead's specialists at work after a +", () => {
    expect(tagText(INITIAL_OFFICE, 'frontend')).toEqual({ name: 'Frontend dev', plus: null });
    let office = officeReducer(INITIAL_OFFICE, {
      type: 'specialist',
      lead: 'frontend',
      name: 'react-dev',
      working: true,
      at: 1,
    });
    expect(tagText(office, 'frontend')).toEqual({ name: 'Frontend dev', plus: '+ React dev' });
    office = officeReducer(office, {
      type: 'specialist',
      lead: 'frontend',
      name: 'form-builder',
      working: true,
      at: 2,
    });
    expect(tagText(office, 'frontend').plus).toBe('+ React dev, Form builder');
    expect(tagText(office, 'lead')).toEqual({ name: 'Lead/PM', plus: null });
  });

  it('borders a tag for needs-you and error before the open card', () => {
    let office = officeReducer(INITIAL_OFFICE, {
      type: 'state',
      agent: 'backend',
      state: 'needs-you',
      at: 1,
    });
    office = officeReducer(office, { type: 'state', agent: 'reviewer', state: 'error', at: 2 });
    expect(tagTone(office, 'backend', 'backend')).toBe('needs');
    expect(tagTone(office, 'reviewer', null)).toBe('error');
    expect(tagTone(office, 'designer', 'designer')).toBe('selected');
    expect(tagTone(office, 'designer', 'lead')).toBeNull();
  });
});
