import { describe, expect, it } from 'vitest';
import { MAX_TASK_CHARS, cleanTask } from './task';

describe('cleanTask', () => {
  it('trims the text', () => {
    expect(cleanTask('  Build a forum \n')).toBe('Build a forum');
  });

  it('ignores empty or blank input', () => {
    expect(cleanTask('')).toBeNull();
    expect(cleanTask('   \t\n ')).toBeNull();
  });

  it(`caps the text at ${MAX_TASK_CHARS} characters`, () => {
    expect(cleanTask('x'.repeat(MAX_TASK_CHARS))).toHaveLength(MAX_TASK_CHARS);
    expect(cleanTask('x'.repeat(MAX_TASK_CHARS + 100))).toBe('x'.repeat(MAX_TASK_CHARS));
  });

  it('never cuts an emoji in half at the cap', () => {
    const text = `${'a'.repeat(MAX_TASK_CHARS - 1)}🔥🔥`;
    expect(cleanTask(text)).toBe(`${'a'.repeat(MAX_TASK_CHARS - 1)}🔥`);
  });

  it('keeps markup as plain characters: rendering decides it is text', () => {
    expect(cleanTask('<img src=x onerror=alert(1)>')).toBe('<img src=x onerror=alert(1)>');
  });
});
