// The preset buttons' prompts. This is the only file that submits a prompt, and it submits only these fixed texts,
// as if Dima had typed them: never agent output, a file, the hall page or anything else (tests/plugin/mod.test.ts).

import type { EngineInterface } from 'claude-code';

export const PRESETS = [
  {
    key: 'plan',
    label: 'Plan the next milestone',
    text:
      "Plan the next milestone. Read the project's docs and code first, then give me a short plan: the tasks, who on " +
      "the team takes each one, and what you need from me. Don't start any work until I say go.",
  },
  {
    key: 'check',
    label: 'Run the quality check',
    text:
      "Have the team run npm run check, or npm test if there's no check script, and tell me what fails. If neither " +
      "script exists, say so and stop. Don't fix anything yet.",
  },
  {
    key: 'review',
    label: 'Review what changed',
    text:
      'Ask the Reviewer to review what changed since the last commit and report what it finds, with file and line ' +
      'for each. Change nothing.',
  },
] as const;

export type PresetKey = (typeof PRESETS)[number]['key'];

/** Sends one preset's fixed text. It takes a key, not a text, so no caller can hand it anything else to send. */
export async function sendPreset($: EngineInterface, key: PresetKey): Promise<void> {
  const preset = PRESETS.find((p) => p.key === key);
  if (preset) await $.prompt.submit({ text: preset.text, asUser: true });
}
