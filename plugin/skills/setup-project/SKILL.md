---
name: setup-project
description: Shows what World of Agents would write into this project's .claude/settings.local.json (Manual permission mode, subagent depth 2 and a safe-command list). Writes nothing. Only the user starts it.
disable-model-invocation: true
allowed-tools: Bash(node '${CLAUDE_PLUGIN_ROOT}/skills/setup-project/setup.mjs')
---

# World of Agents project setup: what it would write

Claude Code ran the setup script before you saw this, and its output is below. You run nothing yourself: no command, no
file edit, no agent. You decide nothing either.

!`node '${CLAUDE_PLUGIN_ROOT}/skills/setup-project/setup.mjs'`

Explain the output to the user in a few plain sentences, then name the next step:

- If it ends with "Nothing has been written.", the next step is to type `/world-of-agents:setup-project-write`, which
  writes exactly what is shown. Typing it is the yes.
- If it says the file holds an earlier version of the template's settings, name the version and the rules the upgrade
  adds and removes, exactly as listed, and say that every other setting stays as it is.
- If it lists "Rules you added", say that those rules stay as they are, and name them exactly as listed.
- If it says "Already set up", the file already holds exactly these settings. Nothing changed and nothing is needed.
- If it says "Stopped", nothing was changed. Say why, name the settings it lists, and say that the template's keys can be
  added to the file by hand. Don't guess at values: the script compared them and shows only names.
- If it shows "[shell command execution disabled by policy]" instead, the script did not run, because a setting
  (`disableSkillShellExecution`) turns off shell commands in skills. Nothing was written. The user can run
  `node '${CLAUDE_PLUGIN_ROOT}/skills/setup-project/setup.mjs'` in a terminal, in the project folder, instead.

If you explain the `.env` denies, say exactly this, and add nothing: they cover Claude Code's file tools and the file
commands it recognises in shell commands, like `cat`, `head` and `tail`. They don't cover `grep -r` over a folder, or a
script that opens files itself.
