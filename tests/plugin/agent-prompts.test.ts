// The agents' prompts on the check (v3.3 review, 3.3d): a gate that passes is silent, so the devs run `npm run check`
// themselves as their last step and report what they saw, and the Lead passes on what they reported instead of guessing.
// Claude Code shows no exit code for a command that passes (3.3d, a real run on 14 Nov): the devs then ran a second
// command to read one, which asks for approval, so they report "passed", and a number only when they saw it.
import { readdirSync, readFileSync } from 'node:fs';
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
      // Nothing added either (3.4f): a specialist's `npm run check --prefix <project>` would have asked too.
      expect(text).toContain(
        'exactly that and as one command on its own: nothing added (no `--prefix`, no path, no flags) and never chained with another (no `&&`, `;`, `|` or `cd` before it), because the setup lets exactly that command run without asking.',
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
  // could fail, then put it back from a backup copy it had made. The Designer edits too (3.4f, Dima).
  it.each(['frontend', 'backend', 'designer'])(
    'the %s changes only the files its task names, and leaves no backup copies',
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

// 3.4f (Dima, 14 Nov): in three real runs no specialist ever started. The Frontend dev kept the work, the Lead dropped
// "the React dev" from its hand-off, and once the Lead refused, as only guild leads may start specialists.
describe('specialists: the Lead passes a request on, the guild leads hand work over', () => {
  const GUILD_LEADS = [
    ['designer', 'design', 'change', 'Small changes you make yourself.'],
    ['frontend', 'frontend', 'change', 'Small changes you make yourself.'],
    ['backend', 'backend', 'change', 'Small changes you make yourself.'],
    ['reviewer', 'review', 'check', 'Small checks you do yourself.'],
  ] as const;

  it('the Lead names the specialist in the hand-off to its guild lead, and never starts one itself', () => {
    const text = prompt('lead');
    expect(text).toContain(
      'only its guild lead may start them. When the user asks for a specialist, pass that on in the hand-off to its guild lead, naming the specialist: you never start one yourself.',
    );
    expect(text).toContain('the guilds are design, frontend, backend and review');
    // A bare Agent (3.4f, Dima): a list on the main thread became the whole session's list, which the guild leads
    // inherit, so they never saw a specialist. The guard holds the Lead to the four (roster.test.ts).
    expect(/^tools: (.*)$/m.exec(raw('lead'))?.[1]?.split(', ')).toContain('Agent');
    expect(raw('lead')).not.toMatch(/^tools: .*Agent\(/m);
  });

  it.each(GUILD_LEADS)(
    'the %s hands work to its %s specialists when asked, or when it is more than a small %s',
    (name, guild, small, own) => {
      const text = prompt(name);
      expect(text).toContain(`named \`woa-team:${guild}-<name>\``);
      expect(text).toContain(
        `Hand work to a specialist when the user asked for one (the Lead's hand-off says so), or when a piece of your task is clearly in a specialist's area and more than a small ${small}.`,
      );
      expect(text).toContain(own);
      expect(text).toContain('Your specialists start nobody, and you start no one outside your guild.');
      // The old line let a guild lead keep everything.
      expect(text).not.toContain('Do small work yourself.');
    },
  );
});

describe('agent memory is off (3.4f, Dima, 14 Nov)', () => {
  it('no agent file sets memory', () => {
    const dir = resolve(import.meta.dirname, '../../plugin/agents');
    const files = readdirSync(dir).filter((f) => f.endsWith('.md'));
    expect(files).toHaveLength(5);
    for (const file of files) {
      const front = /^---\n([\s\S]*?)\n---\n/.exec(
        readFileSync(resolve(dir, file), 'utf8').replace(/\r\n/g, '\n'),
      )?.[1];
      expect(front, file).toBeDefined();
      expect(front, file).not.toMatch(/^memory:/m);
    }
  });
});
