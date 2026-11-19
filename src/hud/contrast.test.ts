import css from '../index.css?raw';
import { describe, expect, it } from 'vitest';
import { STATE_STYLE } from '../office/states';
import { STATUS_CHIP } from '../office/tasks';

/*
 * The HUD's colours (v4.0.0, 4d), read from the stylesheet itself: every pair it puts text on holds 4.5:1, and every line
 * it draws to mean something (a focus ring, a pressed or flagged border) 3:1 against what it sits on (WCAG 2.2, 1.4.3
 * and 1.4.11). The panels are solid (D3), so their pairs are exact; the name tags' ground is see-through, so a tag is
 * checked over the brightest and the darkest world there can be.
 */

type Rgba = readonly [number, number, number, number];

const root = /:root\s*\{([^}]*)\}/.exec(css.replace(/\/\*[\s\S]*?\*\//g, ''))?.[1] ?? '';
const tokens = new Map([...root.matchAll(/(--ui-[\w-]+):\s*([^;]+);/g)].map((m) => [m[1]!, m[2]!.trim()]));

function parse(value: string): Rgba {
  const hex = /^#([0-9a-f]{6})$/i.exec(value);
  if (hex) {
    const n = parseInt(hex[1]!, 16);
    return [(n >> 16) & 255, (n >> 8) & 255, n & 255, 1];
  }
  const rgba = /^rgba\((\d+),\s*(\d+),\s*(\d+),\s*([\d.]+)\)$/.exec(value);
  if (rgba) return [Number(rgba[1]), Number(rgba[2]), Number(rgba[3]), Number(rgba[4])];
  throw new Error(`not a colour: ${value}`);
}

const token = (name: string): Rgba => {
  const value = tokens.get(name);
  if (!value) throw new Error(`no token ${name}`);
  return parse(value);
};

/** A see-through colour laid over an opaque one. */
const over = (top: Rgba, under: Rgba): Rgba => {
  const a = top[3];
  return [0, 1, 2].map((i) => top[i]! * a + under[i]! * (1 - a)).concat(1) as unknown as Rgba;
};

const luminance = ([r, g, b]: Rgba) => {
  const lin = (c: number) => {
    const s = c / 255;
    return s <= 0.04045 ? s / 12.92 : ((s + 0.055) / 1.055) ** 2.4;
  };
  return 0.2126 * lin(r) + 0.7152 * lin(g) + 0.0722 * lin(b);
};

const contrast = (a: Rgba, b: Rgba) => {
  const [hi, lo] = [luminance(a), luminance(b)].sort((x, y) => y - x) as [number, number];
  return (hi + 0.05) / (lo + 0.05);
};

const WHITE: Rgba = [255, 255, 255, 1];
const BLACK: Rgba = [0, 0, 0, 1];
// the tag's ground over the brightest and the darkest world
const tagGrounds = () => [over(token('--ui-tag-bg'), WHITE), over(token('--ui-tag-bg'), BLACK)];

describe("the HUD's colours", () => {
  it('has the three tokens the mockup added, and the token set it builds on', () => {
    expect(tokens.get('--ui-needs-bg')).toBe('#4d3a0c');
    expect(tokens.get('--ui-needs')).toBe('#ffd97a');
    expect(tokens.get('--ui-tag-bg')).toBe('rgba(20, 18, 16, 0.86)');
    expect(tokens.size).toBeGreaterThanOrEqual(20);
  });

  it('text holds 4.5:1 on every ground it sits on', () => {
    const pairs: [string, Rgba, Rgba][] = [
      ['text on a panel', token('--ui-text'), token('--ui-surface')],
      ['muted on a panel', token('--ui-muted'), token('--ui-surface')],
      ['text on a button', token('--ui-text'), token('--ui-raised')],
      ['muted on a button', token('--ui-muted'), token('--ui-raised')],
      ['text on a pressed button', token('--ui-text'), token('--ui-selected')],
      ['a link on a panel', token('--ui-link'), token('--ui-surface')],
      ['the task input', token('--ui-text'), token('--ui-bg')],
      ["the task input's placeholder", token('--ui-muted'), token('--ui-bg')],
      ['a primary button', token('--ui-on-accent'), token('--ui-accent')],
      ['the needs-you banner', token('--ui-needs'), token('--ui-needs-bg')],
      ['a bubble', token('--ui-on-accent'), token('--ui-text')],
      ['the error marker', token('--ui-on-danger'), token('--ui-danger-fill')],
      ...tagGrounds().map((g, i): [string, Rgba, Rgba] => [`a name tag (${i})`, token('--ui-text'), g]),
    ];
    for (const [what, fg, bg] of pairs) expect(contrast(fg, bg), what).toBeGreaterThanOrEqual(4.5);
  });

  it("every state and task chip's text holds 4.5:1 on the chip", () => {
    for (const chip of [...Object.values(STATE_STYLE), ...Object.values(STATUS_CHIP)]) {
      expect(contrast(parse(chip.text), parse(chip.bg)), chip.label).toBeGreaterThanOrEqual(4.5);
    }
  });

  it('the focus ring and the borders that mean something hold 3:1 against what they sit on', () => {
    const grounds = ['--ui-surface', '--ui-raised', '--ui-selected', '--ui-needs-bg'].map(token);
    for (const g of grounds) expect(contrast(token('--ui-link'), g), 'focus ring').toBeGreaterThanOrEqual(3);
    for (const line of ['--ui-accent', '--ui-flag', '--ui-danger']) {
      for (const g of [token('--ui-surface'), ...tagGrounds()]) {
        expect(contrast(token(line), g), line).toBeGreaterThanOrEqual(3);
      }
    }
  });

  it('the HUD names no colour of its own: tokens only, but for the panel shadow and the tag border', () => {
    const rules = [...css.replace(/\/\*[\s\S]*?\*\//g, '').matchAll(/([^{}]+)\{([^{}]*)\}/g)]
      .map((m) => ({ selector: m[1]!.trim(), body: m[2]! }))
      .filter((r) => /\.hud|\.app\.keep/.test(r.selector));
    expect(rules.length).toBeGreaterThan(10);
    const allowed = new Set(['rgba(0, 0, 0, 0.38)', 'rgba(242, 235, 225, 0.18)']);
    for (const r of rules) {
      for (const m of r.body.matchAll(/#[0-9a-f]{3,8}\b|rgba?\([^)]*\)/gi)) {
        expect(allowed.has(m[0]), `${r.selector}: ${m[0]}`).toBe(true);
      }
    }
  });
});
