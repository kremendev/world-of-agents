---
name: setup-team-write
description: Creates the World of Agents team in ~/.world-of-agents/team from the plugin's defaults, never over one that is there. Only the user starts it, and typing it is the yes.
disable-model-invocation: true
allowed-tools: Bash(node '${CLAUDE_PLUGIN_ROOT}/skills/setup-team/team-setup.mjs' --write)
---

# World of Agents team: create it

Claude Code ran the team setup script before you saw this, and its output is below. You run nothing yourself: no command,
no file edit, no agent. You decide nothing either.

!`node '${CLAUDE_PLUGIN_ROOT}/skills/setup-team/team-setup.mjs' --write`

Tell the user in a few plain sentences what happened. If it says "Created", repeat the install commands it lists,
exactly, and say the team applies after them and a /reload-plugins. If it says the team is already there or "Stopped",
say so; nothing changed.

If it shows "[shell command execution disabled by policy]" instead, the script did not run, because a setting
(`disableSkillShellExecution`) turns off shell commands in skills. Nothing changed. The user can run
`node '${CLAUDE_PLUGIN_ROOT}/skills/setup-team/team-setup.mjs' --write` in a terminal instead.
