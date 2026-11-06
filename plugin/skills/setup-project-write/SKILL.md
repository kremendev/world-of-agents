---
name: setup-project-write
description: Writes the World of Agents settings into this project's .claude/settings.local.json, as /world-of-agents:setup-project showed them. Only the user starts it, and typing it is the yes.
disable-model-invocation: true
allowed-tools: Bash(node '${CLAUDE_PLUGIN_ROOT}/skills/setup-project/setup.mjs' --write)
---

# World of Agents project setup: write

Claude Code ran the setup script with `--write` before you saw this, and its output is below. You run nothing yourself:
no command, no file edit, no agent. You decide nothing either.

!`node '${CLAUDE_PLUGIN_ROOT}/skills/setup-project/setup.mjs' --write`

Tell the user in a few plain sentences what happened:

- If it says "Written.", the settings are in place. They apply from the next new session in this project, which starts
  in Manual mode.
- If it says "Already set up", the file already holds exactly these settings. Nothing changed and nothing is needed.
- If it says "Stopped", nothing was changed. Say why and name the settings it lists. Don't guess at values: the script
  compared them and shows only names. Running it again changes nothing.
- If it shows "[shell command execution disabled by policy]" instead, the script did not run, because a setting
  (`disableSkillShellExecution`) turns off shell commands in skills. Nothing was written. The user can run
  `node '${CLAUDE_PLUGIN_ROOT}/skills/setup-project/setup.mjs' --write` in a terminal, in the project folder, instead.

If you explain the `.env` denies, say exactly this, and add nothing: they cover Claude Code's file tools and the file
commands it recognises in shell commands, like `cat`, `head` and `tail`. They don't cover `grep -r` over a folder, or a
script that opens files itself.
