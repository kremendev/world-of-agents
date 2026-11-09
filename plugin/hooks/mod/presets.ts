// The preset buttons' prompts. This is the only file that writes to the prompt box, and it writes only these fixed
// texts, after whatever Dima has typed: it never reads the box and never submits. Dima reads the text and presses Enter
// (tests/plugin/mod.test.ts).

import type { EngineInterface, PromptFilled } from 'claude-code';

import type { PaneFillRefusal } from './types';

// Each text starts with one space, so it doesn't run into a draft: the box appends it as it is.
export const PRESETS = [
  {
    key: 'plan',
    label: 'Plan the next milestone',
    text:
      " Plan the next milestone. Read the project's docs and code first, then give me a short plan: the tasks, who on " +
      "the team takes each one, and what you need from me. Don't start any work until I say go.",
  },
  {
    key: 'check',
    label: 'Run the quality check',
    text:
      " Have the team run npm run check, or npm test if there's no check script, and tell me what fails. If neither " +
      "script exists, say so and stop. Don't fix anything yet.",
  },
  {
    key: 'review',
    label: 'Review what changed',
    text:
      ' Ask the Reviewer to review what changed since the last commit and report what it finds, with file and line ' +
      'for each. Change nothing.',
  },
] as const;

export type PresetKey = (typeof PRESETS)[number]['key'];

/**
 * Why the box didn't take a fill, as the pane says it. Only the engine's own `no_composer` means there is no box; any
 * other refusal is `other`: a dialog holding the keys, or a hook's, which carries no cause.
 */
export function fillRefusal(filled: Pick<PromptFilled, 'isFilled' | 'refusal'>): PaneFillRefusal | null {
  if (filled.isFilled) return null;
  return filled.refusal === 'no_composer' ? 'no_composer' : 'other';
}

/**
 * Puts one preset's fixed text after Dima's draft. It takes a key, not a text, so no caller can hand it anything else to
 * write. Resolves to why the box didn't take it, or null when it did; a fill that throws didn't take it either.
 */
export async function fillPreset($: EngineInterface, key: PresetKey): Promise<PaneFillRefusal | null> {
  const preset = PRESETS.find((p) => p.key === key);
  if (!preset) return null;
  try {
    return fillRefusal(await $.prompt.fill({ text: preset.text, mode: 'append' }));
  } catch {
    return 'other';
  }
}
