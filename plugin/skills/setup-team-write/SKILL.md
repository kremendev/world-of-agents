---
name: setup-team-write
description: Gives this project its own World of Agents team once, a copy of the shared team or an empty one, never over one it has, or refreshes the files it generates for the project's team after a plugin update, never touching its specialists, skills or notes. Only the user starts it, and typing it is the yes.
disable-model-invocation: true
allowed-tools: Bash(node '${CLAUDE_PLUGIN_ROOT}/skills/setup-team/team-setup.mjs' --write)
---

# World of Agents team: give this project its own, or refresh its files

Claude Code ran the team setup script before you saw this, and its output is below. You run nothing yourself: no command,
no file edit, no agent. You decide nothing either.

!`node '${CLAUDE_PLUGIN_ROOT}/skills/setup-team/team-setup.mjs' --write`

Tell the user in a few plain sentences what happened. If it says "Gave this project its own team", repeat the commands
it lists, exactly, and say the team applies after them and a /reload-plugins; if it mentions notes, say they wait on the
Team page to keep or drop one by one. If it says "Refreshed", say the project's team files now match this plugin, every
specialist, skill and note kept as it was, and that an open session needs /reload-plugins. If it says the project has its
own team already or "Stopped", say so, and why when it gives a reason; nothing changed.

If it shows "[shell command execution disabled by policy]" instead, the script did not run, because a setting
(`disableSkillShellExecution`) turns off shell commands in skills. Nothing changed. The user can run
`node '${CLAUDE_PLUGIN_ROOT}/skills/setup-team/team-setup.mjs' --write` in a terminal instead.
