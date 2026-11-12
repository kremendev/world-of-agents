---
name: setup-gates-write
description: Turns World of Agents quality gates on in this project, so npm run check runs after each dev's task, without asking. Only the user starts it, and typing it is the yes.
disable-model-invocation: true
allowed-tools: Bash(node '${CLAUDE_PLUGIN_ROOT}/skills/setup-gates/gates.mjs' --on)
---

# World of Agents quality gates: turn on

Claude Code ran the gates script before you saw this, and its output is below. You run nothing yourself: no command, no
file edit, no agent. You decide nothing either.

!`node '${CLAUDE_PLUGIN_ROOT}/skills/setup-gates/gates.mjs' --on`

Tell the user in a few plain sentences what happened. If it says "Turned on", gates apply from the next new session in
this project, and npm run check then runs without asking each time the Designer or a dev finishes a task. If it says
"Already on" or "Not set up yet", say so; nothing changed.

If it shows "[shell command execution disabled by policy]" instead, the script did not run, because a setting
(`disableSkillShellExecution`) turns off shell commands in skills. Nothing changed. The user can run
`node '${CLAUDE_PLUGIN_ROOT}/skills/setup-gates/gates.mjs' --on` in a terminal, in the project folder, instead.
