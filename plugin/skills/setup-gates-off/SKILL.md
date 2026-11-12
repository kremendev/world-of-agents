---
name: setup-gates-off
description: Turns World of Agents quality gates off in this project. Only the user starts it.
disable-model-invocation: true
allowed-tools: Bash(node '${CLAUDE_PLUGIN_ROOT}/skills/setup-gates/gates.mjs' --off)
---

# World of Agents quality gates: turn off

Claude Code ran the gates script before you saw this, and its output is below. You run nothing yourself: no command, no
file edit, no agent. You decide nothing either.

!`node '${CLAUDE_PLUGIN_ROOT}/skills/setup-gates/gates.mjs' --off`

Tell the user in a few plain sentences what happened. If it says "Turned off", gates stop from the next new session in
this project. If it says "Already off" or "Not set up yet", say so; nothing changed.

If it shows "[shell command execution disabled by policy]" instead, the script did not run, because a setting
(`disableSkillShellExecution`) turns off shell commands in skills. Nothing changed. The user can run
`node '${CLAUDE_PLUGIN_ROOT}/skills/setup-gates/gates.mjs' --off` in a terminal, in the project folder, instead.
