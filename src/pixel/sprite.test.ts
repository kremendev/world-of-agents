import { describe, expect, it } from 'vitest';
import * as characters from '../assets/characters';
import * as hall from '../assets/hall';
import * as workstation from '../assets/workstation';
import { spriteSize, toRuns, validateSprite, type PixelSprite } from './sprite';

const ALL: Record<string, PixelSprite> = { ...characters, ...workstation, ...hall };

describe('sprite assets', () => {
  it.each(Object.entries(ALL))('%s has equal-width rows and a colour for every key', (_name, sprite) => {
    expect(validateSprite(sprite)).toEqual([]);
  });

  it('keeps the size order of the cast: orcs biggest, goblin smallest', () => {
    const height = (s: PixelSprite) => spriteSize(s).height;
    expect(height(characters.ORC_FRONTEND)).toBeGreaterThan(height(characters.ELF_DESIGNER));
    expect(height(characters.ORC_BACKEND)).toBeGreaterThan(height(characters.SKELETON_REVIEWER));
    expect(height(characters.GOBLIN_LEAD)).toBeLessThan(height(characters.SKELETON_REVIEWER));
  });
});

describe('validateSprite', () => {
  it('reports ragged rows and missing colours', () => {
    const bad: PixelSprite = { rows: ['ab', 'a'], palette: { a: '#000000' } };
    expect(validateSprite(bad)).toEqual([
      "row 0 uses 'b' which has no colour",
      'row 1 is 1 wide, expected 2',
    ]);
  });
});

describe('toRuns', () => {
  it('merges same-coloured pixels and skips transparent ones', () => {
    const sprite: PixelSprite = { rows: ['aab.', '.bbb'], palette: { a: '#111111', b: '#222222' } };
    expect(toRuns(sprite)).toEqual([
      { x: 0, y: 0, length: 2, color: '#111111' },
      { x: 2, y: 0, length: 1, color: '#222222' },
      { x: 1, y: 1, length: 3, color: '#222222' },
    ]);
  });
});
