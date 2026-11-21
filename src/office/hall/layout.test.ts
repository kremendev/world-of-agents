import css from '../../index.css?raw';
import { describe, expect, it } from 'vitest';
import { spriteSize } from '../../pixel/sprite';
import { stationBounds } from '../stations';
import { HALL, ROOMS, hallStations, type Rect } from './layout';
import { HALOS, PLAQUES, PROPS } from './placements';

const stations = hallStations();

const inside = (inner: Rect, outer: Rect) =>
  inner.x >= outer.x &&
  inner.y >= outer.y &&
  inner.x + inner.w <= outer.x + outer.w &&
  inner.y + inner.h <= outer.y + outer.h;

const overlaps = (a: Rect, b: Rect) =>
  a.x < b.x + b.w && b.x < a.x + a.w && a.y < b.y + b.h && b.y < a.y + a.h;

const propRect = (p: (typeof PROPS)[number]): Rect => {
  const { width, height } = spriteSize(p.sprite);
  return { x: p.x, y: p.y, w: width, h: height };
};

const hall: Rect = { x: 0, y: 0, w: HALL.width, h: HALL.height };

describe('Forge Hall layout', () => {
  it('keeps every prop, light and sign inside the hall', () => {
    for (const p of PROPS) expect(inside(propRect(p), hall)).toBe(true);
    for (const h of HALOS) expect(inside({ x: h.x, y: h.y, w: 0, h: 0 }, hall)).toBe(true);
    for (const p of PLAQUES) expect(inside({ x: p.x, y: p.y, w: p.width, h: 0 }, hall)).toBe(true);
  });

  it('puts the Lead/PM in their room and everyone else in the dev room', () => {
    for (const s of stations) {
      const room = s.agent.id === 'lead' ? ROOMS.lead : ROOMS.dev;
      expect(inside(stationBounds(s), room)).toBe(true);
    }
  });

  it('does not let workstations overlap', () => {
    for (const a of stations) {
      for (const b of stations) {
        if (a !== b) expect(overlaps(stationBounds(a), stationBounds(b))).toBe(false);
      }
    }
  });

  it('keeps props out of the workstations', () => {
    for (const s of stations) {
      for (const p of PROPS) expect(overlaps(stationBounds(s), propRect(p))).toBe(false);
    }
  });
});

describe('text sizes and fonts', () => {
  const rules = [...css.replace(/\/\*[\s\S]*?\*\//g, '').matchAll(/([^{}]+)\{([^{}]*)\}/g)].map((m) => ({
    selector: m[1]!.trim(),
    body: m[2]!,
  }));
  const sizes = rules.flatMap((r) =>
    [...r.body.matchAll(/font-size:\s*([^;]+);/g)].map((m) => ({ selector: r.selector, size: m[1]! })),
  );
  const rem = (size: string) => Number(/^(?:max\()?([\d.]+)rem/.exec(size)?.[1]);

  it('every size is in rem, or follows the hall from a minimum in rem: all of it grows with browser zoom', () => {
    expect(sizes.length).toBeGreaterThan(10);
    for (const { selector, size } of sizes) {
      if (size === 'inherit') continue;
      expect(rem(size), `${selector}: ${size}`).not.toBeNaN();
    }
  });

  it('nothing is under 13 px, and the body is 15 px', () => {
    for (const { selector, size } of sizes) {
      if (size !== 'inherit') expect(rem(size), `${selector}: ${size}`).toBeGreaterThanOrEqual(13 / 16);
    }
    expect(sizes.find((s) => s.selector === 'body')?.size).toBe('0.9375rem');
  });

  // v3.6 (E13): until the rest of the page moves to the tokens (after v3.7), the hall view keeps Pixelify where it had it.
  it('Pixelify Sans stays in the hall view (its title, badges, room plaques and name plates), never under 14 px', () => {
    const pixel = rules.filter((r) => r.body.includes('var(--pixel-font)'));
    expect(pixel.map((r) => r.selector).sort()).toEqual(['.badge', '.nameplate', '.plaque', 'h1']);
    for (const r of pixel) {
      const size = /font-size:\s*([^;]+);/.exec(r.body)?.[1] ?? '';
      expect(rem(size), r.selector).toBeGreaterThanOrEqual(14 / 16);
    }
  });

  it('the Team page is Inter, never Pixelify: 14 px base, nothing under 13 px, and its h1 drops the hall view font', () => {
    const team = rules.filter((r) => /\.team-page|(^|[\s,])\.tp-/.test(r.selector));
    expect(team.length).toBeGreaterThan(40);
    for (const r of team) expect(r.body, r.selector).not.toMatch(/pixel-font|Pixelify/);
    const page = rules.find((r) => r.selector === '.team-page')!.body;
    expect(page).toMatch(/font-family: var\(--ui-font\);/);
    expect(page).toMatch(/font-size: 0\.875rem;/);
    expect(css).toMatch(/--ui-font: 'Inter Variable',/);
    // The global h1 is Pixelify: the Team page's own heading takes the page's font back.
    expect(rules.find((r) => r.selector === '.team-page h1')!.body).toMatch(/font-family: inherit;/);
  });

  it('the hall view behind the Team page is really hidden: its display: flex would beat the hidden attribute', () => {
    // jsdom reads only the attribute; in Edge the Tab key went on from the Team page into "Play demo" (3.6c).
    expect(rules.find((r) => r.selector === '.app')!.body).toMatch(/display: flex/);
    expect(rules.find((r) => r.selector === '.app[hidden]')!.body).toMatch(/display: none;/);
  });

  it('the status line has no box until someone waits for approval: it must not look like an input', () => {
    const line = rules.find((r) => r.selector === '.status-line')!.body;
    expect(line).toMatch(/border: 2px solid transparent/);
    expect(line).not.toMatch(/background/);
    expect(rules.find((r) => r.selector === '.status-line.needs-you')!.body).toMatch(/background/);
  });

  it("the HUD reaches the window's edge: no scrollbar gutter kept while it shows, the Team page's kept (T)", () => {
    // T's shots: a 15 px strip down the right edge, the world short of it
    expect(rules.find((r) => r.selector === 'html')!.body).toMatch(/scrollbar-gutter: stable/);
    expect(rules.find((r) => r.selector === 'html:has(.app.keep:not([hidden]))')!.body).toMatch(
      /scrollbar-gutter: auto/,
    );
  });

  it("the top bar's task tiles wrap where they don't fit, never cut mid-word (T)", () => {
    expect(rules.find((r) => r.selector === '.hud-tiles')!.body).toMatch(/flex-wrap: wrap/);
  });

  // a media block's rules, by its braces: the 48rem one's by default
  const phoneRules = (query = '(max-width: 48rem)') => {
    const from = css.indexOf(`@media ${query} {`);
    expect(from).toBeGreaterThan(-1);
    let depth = 0;
    let end = from;
    for (let i = css.indexOf('{', from); i < css.length; i++) {
      if (css[i] === '{') depth++;
      if (css[i] === '}' && --depth === 0) {
        end = i;
        break;
      }
    }
    return [...css.slice(css.indexOf('{', from) + 1, end).matchAll(/([^{}]+)\{([^{}]*)\}/g)].map((m) => ({
      selectors: m[1]!
        .replace(/\/\*[\s\S]*?\*\//g, '')
        .split(',')
        .map((s) => s.trim()),
      body: m[2]!,
    }));
  };

  it('on a phone the top bar is three rows: the title and chips, the buttons, the run (Dima, 20 Nov)', () => {
    const rows = phoneRules().find((r) => r.selectors.includes('.hud-top .hud-brand'));
    expect(rows?.selectors).toContain('.hud-top .hud-run');
    expect(rows?.body).toMatch(/flex: 1 0 100%/);
  });

  it('on a phone the banner spans the window under the top bar, the drawer and its handle under it (Dima, 20 Nov)', () => {
    const phone = phoneRules();
    const under = phone.find((r) => r.selectors.includes('.hud-under'));
    expect(under?.body).toMatch(/right: var\(--hud-edge\);/);
    const drawer = phone.find((r) => r.selectors.includes('.hud-handle'));
    expect(drawer?.selectors).toContain('.hud-drawer');
    expect(drawer?.body).toMatch(/top: calc\(var\(--hud-top\) \+ var\(--hud-under, 0px\)\);/);
    // wider, the drawer keeps beside what is under the top bar, from the top bar's edge
    expect(rules.find((r) => r.selector === '.hud-handle')!.body).toMatch(/top: var\(--hud-top\);/);
    expect(rules.find((r) => r.selector === '.hud-under')!.body).toMatch(
      /right: calc\(var\(--hud-edge\) \* 2 \+ var\(--hud-drawer-w\)\);/,
    );
  });

  it('the title stays on one line at every width; under 22.5rem the version chip goes (Dima, 21 Nov)', () => {
    const title = rules.find((r) => r.selector === '.hud-top h1')!.body;
    expect(title).toMatch(/white-space: nowrap;/);
    expect(title).toMatch(/flex: none;/);
    // its chips go under it instead
    expect(rules.find((r) => r.selector === '.hud-brand')!.body).toMatch(/flex-wrap: wrap;/);
    const version = phoneRules('(max-width: 22.5rem)').find((r) => r.selectors.includes('.hud-version'));
    expect(version?.body).toMatch(/display: none;/);
  });

  it('the hall clips: a hidden label past its edge must not make the page scroll sideways', () => {
    expect(rules.find((r) => r.selector === '.hall')!.body).toMatch(/overflow: clip/);
  });

  it("the feed's long rows: a visible focus ring, line breaks kept once open, flagged rows with a border", () => {
    // The "Show all" toggle is a .link (ActivityFeed.test checks the class), so it has the links' focus ring.
    expect(rules.find((r) => r.selector === '.link:focus-visible')!.body).toMatch(
      /outline: 2px solid var\(--focus\)/,
    );
    const full = rules.find((r) => r.selector === '.feed-full')!.body;
    expect(full).toMatch(/white-space: pre-wrap/);
    expect(full).not.toMatch(/display/); // or it would beat the `hidden` that keeps it shut
    expect(rules.find((r) => r.selector === '.feed-line.flagged')!.body).toMatch(
      /border-left: 3px solid var\(--flag\)/,
    );
    // The "For you" strip's items share each flag's colour with its row.
    for (const flag of ['to-you', 'needs-you', 'failed']) {
      const rule = rules.find((r) => r.selector.split(/,\s*/).includes(`.feed-line.${flag}`))!;
      expect(rule.body, flag).toMatch(/--flag:/);
      expect(rule.selector.split(/,\s*/), flag).toContain(`.for-you-item.${flag}`);
    }
  });

  it('the hosted demo status line can wrap: an ellipsis could hide its link to the README', () => {
    const line = rules.find((r) => r.selector === '.status-line.hosted')!.body;
    expect(line).toMatch(/white-space: normal/);
    expect(line).toMatch(/height: auto/);
    expect(line).toMatch(/overflow: visible/);
  });
});
