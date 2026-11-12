// The agents' prompts on the check (v3.3 review, 3.3d): a gate that passes is silent, so the devs run `npm run check`
// themselves as their last step and report what they saw, and the Lead passes on what they reported instead of guessing.
// Claude Code shows no exit code for a command that passes (3.3d, a real run on 14 Nov): the devs then ran a second
// command to read one, which asks for approval, so they report "passed", and a number only when they saw it.
import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { describe, expect, it } from 'vitest';

const raw = (name: string) =>
  readFileSync(resolve(import.meta.dirname, `../../plugin/agents/${name}.md`), 'utf8');
const prompt = (name: string) => raw(name).replace(/\s+/g, ' ');

describe('npm run check in the prompts', () => {
  it.each(['frontend', 'backend'])(
    'the %s dev runs it last and reports what it saw, passed or failed',
    (name) => {
      const text = prompt(name);
      expect(text).toContain('Your last step, after your last edit: run `npm run check` yourself');
      // On its own (Dima, 14 Nov): the setup's `Bash(npm run check)` covers only that command, so a chained one asked him.
      expect(text).toContain(
        'as one command on its own: never chained with another (no `&&`, `;`, `|` or `cd` before it), because the setup lets exactly that command run without asking.',
      );
      expect(text).toContain('`npm run check: passed` when it ends without an error');
      expect(text).toContain(
        '`npm run check: failed (exit N)` with the exit code Claude Code shows you (`npm run check: failed` when it shows none)',
      );
      expect(text).toContain(
        "Never run another command just to read the exit code, and never write a number you didn't see.",
      );
      expect(text).toContain("the check's result (or that the project has no `npm run check`)");
      // 3.3d: the old form asked for a number Claude Code doesn't show on a pass.
      expect(text).not.toContain('npm run check: exit 0');
      // The gate stays the judge where it is on.
      expect(text).toContain('the gate still runs it when you finish: it stays the judge');
    },
  );

  // Dima's v3.3.0 desktop run (14 Nov): the Frontend dev broke the Designer's index.html on purpose to prove its test
  // could fail, then put it back from a backup copy it had made.
  it.each(['frontend', 'backend'])(
    'the %s dev changes only the files its task names, and leaves no backup copies',
    (name) => {
      expect(prompt(name)).toContain(
        "- Change only the files your task names. To show a test can fail, use a temporary copy (removed when you're done) or a test fixture, never edit project files outside your task. Never leave backup copies.",
      );
    },
  );

  it('the Designer, who runs no commands, says it did not run it', () => {
    expect(prompt('designer')).toContain('say `npm run check: not run by me` in your report');
    const tools = /^tools: (.*)$/m.exec(raw('designer'))?.[1]?.split(', ');
    expect(tools).toContain('Edit');
    expect(tools).not.toContain('Bash');
  });

  it('the Lead passes on what the devs reported, and says so when there is none', () => {
    const text = prompt('lead');
    expect(text).toContain(
      'end each task by running `npm run check` and report `npm run check: passed` or `npm run check: failed (exit N)`',
    );
    expect(text).toContain('"checked, passed" only when a report says passed, and a failure as reported');
    expect(text).toContain('say so plainly rather than "tested" or "not tested"');
    expect(text).not.toContain('exit 0');
  });

  it('npm run check is pre-approved by the setup, so the devs can run it without a prompt', () => {
    const template = JSON.parse(
      readFileSync(resolve(import.meta.dirname, '../../plugin/skills/setup-project/template.json'), 'utf8'),
    ) as { permissions: { allow: string[] } };
    expect(template.permissions.allow).toContain('Bash(npm run check)');
  });
});
