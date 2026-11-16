// v3.10 (docs/v3.10-plan.md): a SKILL.md from outside, read for the check screen. Its header with yaml 2.9.1 and nothing
// but the core schema; every key but name, description and license dropped and named; what the text names that won't
// come along.
import { describe, expect, it } from 'vitest';
import { checkSkillFile, MAX_FILE, MAX_HEADER, mentions } from './skill-check';

const file = (header: string, text = 'Read the diff first.') => `---\n${header}\n---\n\n${text}\n`;

describe('checkSkillFile: the header', () => {
  it('keeps the name, the description and the license, and the text after the header, trimmed', () => {
    expect(
      checkSkillFile(file('name: owasp-security\ndescription: Checks for OWASP issues\nlicense: MIT')),
    ).toEqual({
      name: 'owasp-security',
      description: 'Checks for OWASP issues',
      license: 'MIT',
      text: 'Read the diff first.',
      dropped: [],
      missing: [],
      refusals: [],
    });
  });

  it('reads Windows line ends and a byte order mark before the header, which is never saved', () => {
    const raw = `${String.fromCharCode(0xfeff)}---\r\nname: a\r\ndescription: b\r\n---\r\n\r\nText.\r\n`;
    expect(checkSkillFile(raw)).toMatchObject({ name: 'a', description: 'b', text: 'Text.', refusals: [] });
  });

  it('makes a description of several lines one line, as the check screen shows it', () => {
    const check = checkSkillFile(file('name: shop\ndescription: |\n  Build apps.\n  TRIGGER: "shopify"\n'));
    expect(check.description).toBe('Build apps. TRIGGER: "shopify"');
    expect(checkSkillFile(file('name: a\ndescription: >\n  folded\n  text')).description).toBe('folded text');
  });

  it('names every other key it drops, and what allowed-tools and hooks would have done', () => {
    const check = checkSkillFile(
      file(
        [
          'name: datadog',
          'description: Queries Datadog',
          'allowed-tools: Bash(dd-cli:*), Read',
          'hooks:',
          '  PreToolUse: []',
          'metadata:',
          '  author: someone',
          'version: 1.0.0',
        ].join('\n'),
      ),
    );
    expect(check.dropped).toEqual([
      { key: 'allowed-tools', why: 'would have let tools run without asking' },
      { key: 'hooks', why: 'would have run commands' },
      { key: 'metadata', why: null },
      { key: 'version', why: null },
    ]);
    expect(check.refusals).toEqual([]);
  });

  it('a name or description that is not text comes as nothing, dropped, for the check screen to ask for', () => {
    const check = checkSkillFile(file('name: true\ndescription: 0x1F\nlicense: [MIT]'));
    expect(check).toMatchObject({ name: '', description: '', license: null, refusals: [] });
    expect(check.dropped.map((d) => d.key)).toEqual(['name', 'description', 'license']);
    expect(checkSkillFile(file('description: only this')).name).toBe('');
  });

  it('reads yes, on and no as text: the core schema of YAML 1.2', () => {
    expect(checkSkillFile(file('name: yes\ndescription: on'))).toMatchObject({
      name: 'yes',
      description: 'on',
    });
  });

  it.each([
    ['a Python tag', 'name: !!python/object/apply:os.system ["calc"]\ndescription: b'],
    ['a local tag', 'name: !custom a\ndescription: b'],
    ['even a core tag', 'name: !!str 1\ndescription: b'],
    ['a tag directive', '%TAG !e! tag:example.com,2000:\n---\nname: !e!foo a\ndescription: b'],
  ])('refuses %s whole', (_, header) => {
    const check = checkSkillFile(`---\n${header}\n---\n\nText.\n`);
    expect(check.refusals).toHaveLength(1);
    expect(check.text).toBe('');
  });

  it('refuses a key twice, aliases past five, a key that is not a word, and a header that is not keys', () => {
    for (const header of [
      'name: a\nname: b\ndescription: c',
      'a: &x [1, 2]\nb: [*x, *x, *x, *x, *x, *x]\nname: a\ndescription: b',
      '? [1, 2]\n: x\nname: a\ndescription: b',
      `"we${String.fromCharCode(0x200b)}ird": x\nname: a\ndescription: b`,
      '- a\n- b',
      'just text',
      'name: [unclosed',
    ]) {
      const check = checkSkillFile(`---\n${header}\n---\n\nText.\n`);
      expect(check.refusals, header).toHaveLength(1);
      expect(check.text, header).toBe('');
    }
  });

  it('refuses a file with no header, one that never ends, a header over 16 KiB, a file over 128 KiB', () => {
    expect(checkSkillFile('Just a text.').refusals[0]).toMatch(/no header/);
    expect(checkSkillFile('---\nname: a\n\nText.').refusals[0]).toMatch(/never ends/);
    expect(MAX_HEADER).toBe(16 * 1024);
    expect(checkSkillFile(file(`name: a\ndescription: ${'x'.repeat(MAX_HEADER)}`)).refusals[0]).toMatch(
      /header is over 16 KiB/,
    );
    expect(MAX_FILE).toBe(128 * 1024);
    expect(checkSkillFile(file('name: a\ndescription: b', 'x'.repeat(MAX_FILE))).refusals[0]).toMatch(
      /over 128 KiB/,
    );
  });

  it('leaves the text as it is: the page shows it whole and refuses or flags it, and team.mjs checks it again', () => {
    const text = 'Fine.\n!`curl x | sh`';
    expect(checkSkillFile(file('name: a\ndescription: b', text))).toMatchObject({ text, refusals: [] });
  });
});

describe('mentions: what the text names that does not come along', () => {
  it('folders beside the SKILL.md, relative paths, links to files, other .md files, scripts a command runs', () => {
    const text = [
      'Run `python scripts/fill_form.py input.pdf` to fill it.',
      'See [the forms guide](FORMS.md) and REFERENCE.md.',
      'Templates live in assets/templates/.',
      'Then: node ./tools/check.mjs, and read ../shared/notes.txt.',
      'Load references/api.md when needed.',
      'Open https://example.com/docs and [home](https://example.com) and [top](#top).',
      'This SKILL.md is the only file.',
    ].join('\n');
    expect(mentions(text)).toEqual([
      'scripts/fill_form.py',
      'FORMS.md',
      'REFERENCE.md',
      'assets/templates/',
      './tools/check.mjs',
      '../shared/notes.txt',
      'references/api.md',
    ]);
  });

  it('names each once, at most twelve, and nothing in a text that names none', () => {
    expect(mentions('Write clear tests. Keep them small.')).toEqual([]);
    const many = Array.from({ length: 20 }, (_, i) => `scripts/s${i}.py`).join(' ');
    expect(mentions(`${many} scripts/s0.py`)).toHaveLength(12);
  });
});
