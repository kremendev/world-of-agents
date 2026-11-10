import { describe, expect, it } from 'vitest';
import { SMALL_TALK } from './smalltalk';
import {
  SILENT,
  SMALL_TALK_MS,
  SPEECH_CHARS,
  bubbleText,
  say,
  smallTalk,
  speak,
  speechMs,
  type Speech,
} from './talk';

describe('speechMs', () => {
  it('is 4 s plus 60 ms for each shown character, at most 10 s', () => {
    expect(speechMs('')).toBe(4000);
    expect(speechMs('Done.')).toBe(4300);
    expect(speechMs('x'.repeat(SPEECH_CHARS))).toBe(9400);
    expect(speechMs(bubbleText('x'.repeat(200)))).toBe(9400); // 89 and the ellipsis
    expect(speechMs('x'.repeat(100))).toBe(10_000);
    expect(speechMs('x'.repeat(500))).toBe(10_000);
  });

  it('counts an emoji as one character', () => {
    expect(speechMs('😀😀')).toBe(4120);
  });
});

describe('bubbleText: the first sentence only, at most 90 characters', () => {
  it('ends at the first full stop, ! or ? that ends a sentence, or at the first line break', () => {
    expect(bubbleText('All done. The page is up.')).toBe('All done.');
    expect(bubbleText('Shipped v1.2 today! Next up: tests.')).toBe('Shipped v1.2 today!');
    expect(bubbleText('Ready? Yes.')).toBe('Ready?');
    expect(bubbleText('Fixed hello.js and the 2.5 s timer. Then more.')).toBe(
      'Fixed hello.js and the 2.5 s timer.',
    );
    expect(bubbleText('A heading\nThen text. More.')).toBe('A heading');
    expect(bubbleText('  No full stop at all  ')).toBe('No full stop at all');
    expect(bubbleText('Report sent to the Lead')).toBe('Report sent to the Lead');
  });

  it("skips a heading's #, a quote's > or a list marker at the very start", () => {
    expect(bubbleText('## Done\n\nAll routes are up.')).toBe('Done');
    expect(bubbleText('1. **What changed:** the routes. And more.')).toBe('What changed: the routes.');
    expect(bubbleText('* Starred item. Next.')).toBe('Starred item.');
    expect(bubbleText('- Fixed it. Also this.')).toBe('Fixed it.');
    expect(bubbleText('> Quoted. Then not.')).toBe('Quoted.');
    expect(bubbleText('- \nThe real first line.')).toBe('The real first line.');
  });

  it('shows a link as its text alone, its target never, a javascript: one included', () => {
    expect(bubbleText('See [the docs](https://evil.example/a.html) now. More.')).toBe('See the docs now.');
    expect(bubbleText('[click](javascript:alert(1)) here.')).toBe('click here.');
    // Cut raw, this would end inside the target: the link has to go before the cut.
    const cut = bubbleText(
      `word word [report](https://evil.example/${'x'.repeat(100)})${' tail'.repeat(20)}`,
    );
    expect(cut).toMatch(/^word word report tail/);
    expect(cut).not.toMatch(/evil|https|\]\(/);
  });

  it('cuts a longer sentence at a word, to 90 characters with the ellipsis', () => {
    // 89 characters would end mid-word ("abc a"): the cut goes back to the last space.
    const cut = bubbleText(`${'abc '.repeat(40)}end.`);
    expect(Array.from(cut).length).toBeLessThanOrEqual(SPEECH_CHARS);
    expect(cut).toMatch(/^(abc )+abc…$/);
    expect(Array.from(cut).length).toBeGreaterThan(80);
    // With no space in its last third, it is cut mid-word instead of losing most of the text.
    expect(bubbleText(`Hi ${'x'.repeat(200)}`)).toBe(`Hi ${'x'.repeat(86)}…`);
  });

  it('drops marks only where they work as Markdown: identifiers and plain symbols stay whole', () => {
    for (const plain of [
      'Renamed user_id to snake_case, so a > b still holds.',
      'my__private__var, trailing_ and _leading stay',
      '2*3*4 = 24, C# and #hashtag stay, and so do a - b and x+y',
      'a ** b ** c and a * b * c are spaced, not emphasis',
      '#1 priority and -5 degrees stay: no space after the mark, so no heading or list',
    ]) {
      expect(bubbleText(plain), plain).toBe(plain);
    }
    expect(bubbleText('an *emphasised phrase*, a lone ` backtick and ***both***')).toBe(
      'an emphasised phrase, a lone  backtick and both',
    );
    expect(bubbleText('> ## Quoted heading\nThen more.')).toBe('Quoted heading');
  });

  it('cleans Markdown the way the voice does: backticks, emphasis, and links as their text', () => {
    // From the 10 Nov desktop check, where the bubble showed the backticks.
    const answer =
      'Nothing changed: hello.js:5 already had `function add(a, b) { return a + b; }`, so the Reviewer had nothing to add.';
    expect(bubbleText(answer)).not.toMatch(/[`*_#>]/);
    expect(bubbleText(answer)).toMatch(
      /^Nothing changed: hello\.js:5 already had function add\(a, b\) \{ return/,
    );
    expect(bubbleText('Ran `npm test`: **all** *green* and __done__. More.')).toBe(
      'Ran npm test: all green and done.',
    );
    expect(bubbleText('[`code` in a link](https://evil.example) is fine.')).toBe('code in a link is fine.');
    expect(bubbleText(`Run \`${'x'.repeat(100)}\` now`)).not.toMatch(/`/);
  });

  it('never splits an emoji', () => {
    expect(bubbleText(`${'a'.repeat(88)}😀😀😀`)).toBe(`${'a'.repeat(88)}😀…`);
  });
});

/** Runs one agent's bubbles frame by frame, every 10 ms, and lists each change of what is on screen, with its time. */
function play(speech: Speech, until: number, walking: (t: number) => boolean = () => false) {
  const shown: { text: string | null; at: number }[] = [];
  let s = speech;
  for (let t = 0; t <= until; t += 10) {
    const frame = speak(s, t, walking(t));
    s = frame.speech;
    if (shown.length === 0 || shown.at(-1)!.text !== frame.text) shown.push({ text: frame.text, at: t });
  }
  return shown;
}

describe('say and speak: one agent, one bubble at a time, on screen only while it stands', () => {
  it('shows a bubble for exactly its time, in real time', () => {
    expect(play(say(SILENT, 'Done.'), 6000)).toEqual([
      { text: 'Done.', at: 0 },
      { text: null, at: 4300 },
    ]);
  });

  it('a second bubble waits for the first, and a third for the second', () => {
    const three = say(say(say(SILENT, 'First.'), 'Second.'), 'Third.');
    expect(play(three, 14_000)).toEqual([
      { text: 'First.', at: 0 },
      { text: 'Second.', at: 4360 },
      { text: 'Third.', at: 8780 },
      { text: null, at: 13_140 },
    ]);
  });

  it('waits while its agent walks, however fast, then shows its whole time once it stops', () => {
    expect(play(say(SILENT, 'Done.'), 7000, (t) => t < 2000)).toEqual([
      { text: null, at: 0 },
      { text: 'Done.', at: 2000 },
      { text: null, at: 6300 },
    ]);
  });

  it('hides when its agent starts walking, and shows the rest of its time once it stops', () => {
    expect(play(say(SILENT, 'Done.'), 7000, (t) => t >= 1000 && t < 3000)).toEqual([
      { text: 'Done.', at: 0 },
      { text: null, at: 1000 },
      { text: 'Done.', at: 3000 },
      { text: null, at: 6300 }, // 1000 ms before the walk, 3300 after it
    ]);
  });

  it('after a long gap between frames (a hidden tab) the bubbles that had their time are gone', () => {
    const first = speak(say(say(SILENT, 'First.'), 'Second.'), 0, false);
    expect(first.text).toBe('First.');
    expect(speak(first.speech, 20_000, false)).toEqual({ speech: SILENT, text: null });
  });
});

describe('smallTalk', () => {
  it('needs two or more idle agents', () => {
    expect(smallTalk([], 0)).toBeNull();
    expect(smallTalk(['lead'], 0)).toBeNull();
  });

  it('takes turns, each agent working through its own lines', () => {
    const said = [0, 1, 2, 3].map((slot) => smallTalk(['lead', 'backend'], slot * SMALL_TALK_MS));
    expect(said).toEqual([
      { agent: 'lead', text: SMALL_TALK.lead[0] },
      { agent: 'backend', text: SMALL_TALK.backend[0] },
      { agent: 'lead', text: SMALL_TALK.lead[1] },
      { agent: 'backend', text: SMALL_TALK.backend[1] },
    ]);
  });

  it('leaves a short pause between lines', () => {
    expect(smallTalk(['lead', 'backend'], SMALL_TALK_MS - 1)).toBeNull();
  });
});
