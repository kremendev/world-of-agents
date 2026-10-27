import { describe, expect, it } from 'vitest';
import { SMALL_TALK } from './smalltalk';
import { SMALL_TALK_MS, SPEECH_CHARS, clip, smallTalk } from './talk';

describe('clip', () => {
  it('leaves text up to the limit alone', () => {
    const text = 'x'.repeat(SPEECH_CHARS);
    expect(clip(text)).toBe(text);
  });

  it('cuts longer text and adds an ellipsis', () => {
    expect(clip('x'.repeat(SPEECH_CHARS + 20))).toBe(`${'x'.repeat(SPEECH_CHARS)}…`);
  });

  it('counts an emoji as one character and never splits it', () => {
    const text = `${'a'.repeat(SPEECH_CHARS - 1)}😀😀😀`;
    expect(clip(text)).toBe(`${'a'.repeat(SPEECH_CHARS - 1)}😀…`);
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
