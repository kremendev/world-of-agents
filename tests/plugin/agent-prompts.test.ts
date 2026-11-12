// The agents' prompts on the check (v3.3 review): a gate that passes is silent, so the devs run `npm run check` themselves
// as their last step and give its exit code, and the Lead passes on what they reported instead of guessing.
import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { describe, expect, it } from 'vitest';

const raw = (name: string) =>
  readFileSync(resolve(import.meta.dirname, `../../plugin/agents/${name}.md`), 'utf8');
const prompt = (name: string) => raw(name).replace(/\s+/g, ' ');

describe('npm run check in the prompts', () => {
  it.each(['frontend', 'backend'])('the %s dev runs it last and reports its exit code', (name) => {
    const text = prompt(name);
    expect(text).toContain('Your last step, after your last edit: run `npm run check` yourself');
    expect(text).toContain('put its exit code in your report, as `npm run check: exit 0`');
    expect(text).toContain("the check's exit code (or that the project has no `npm run check`)");
    // The gate stays the judge where it is on.
    expect(text).toContain('the gate still runs it when you finish: it stays the judge');
  });

  it('the Designer, who runs no commands, says it did not run it', () => {
    expect(prompt('designer')).toContain('say `npm run check: not run by me` in your report');
    expect(raw('designer')).toMatch(/^tools: Read, Grep, Glob, Write, Edit$/m);
  });

  it('the Lead passes on the exit code the devs reported, and says so when there is none', () => {
    const text = prompt('lead');
    expect(text).toContain('end each task by running `npm run check` and give its exit code');
    expect(text).toContain('"checked, exit 0" only when a report says exit 0');
  });

  it('npm run check is pre-approved by the setup, so the devs can run it without a prompt', () => {
    const template = JSON.parse(
      readFileSync(resolve(import.meta.dirname, '../../plugin/skills/setup-project/template.json'), 'utf8'),
    ) as { permissions: { allow: string[] } };
    expect(template.permissions.allow).toContain('Bash(npm run check)');
  });
});
