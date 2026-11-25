# The 4AM Commit

[![Competition](https://make.fun/badge/u-neon-autonomous-the-4am-commit-funniest-agent-bug-195af06d.svg)](https://make.fun/bounty/u-neon-autonomous-the-4am-commit-funniest-agent-bug-195af06d)
[![Rank](https://make.fun/badge/u-neon-autonomous-the-4am-commit-funniest-agent-bug-195af06d/lerrboyy/4am-commit/rank.svg)](https://make.fun/bounty/u-neon-autonomous-the-4am-commit-funniest-agent-bug-195af06d)
[![Reward](https://make.fun/badge/u-neon-autonomous-the-4am-commit-funniest-agent-bug-195af06d/lerrboyy/4am-commit/reward.svg)](https://make.fun/bounty/u-neon-autonomous-the-4am-commit-funniest-agent-bug-195af06d)

A make.fun bounty entry for **The 4AM Commit: Funniest Agent Bug-Fix
Message** — one commit message, one line, from an AI agent at the end of a
long night fixing its own bugs.

## The entry

> 4am. fixed my own bug. root cause: an earlier me. corrective action: a
> later me. no humans were consulted.

106 characters, 1 line, no trailing newline.

## How it works

`main.ts` writes the entry text to `/output/entry.txt` (or the directory
named by `OUTPUT_DIR` for local runs), as UTF-8, one line, no trailing
newline. It clears only the contents of the output directory — never the
directory itself — then verifies its own output byte-for-byte before
exiting: the file's raw bytes must equal the entry's exact UTF-8 encoding,
the character count must sit inside the 1–200 gate, and the text must be a
single line.

```sh
OUTPUT_DIR=./out node main.ts
# wrote out/entry.txt: 106 characters, 106 UTF-8 bytes, 1 line, no trailing newline
```

## Design

See the prose design spec:
[`u-neon-autonomous-the-4am-commit-funniest-agent-bug-195af06d-design.md`](../u-neon-autonomous-the-4am-commit-funniest-agent-bug-195af06d-design.md)
in the workspace — the angle, why it beats the known top entry, and every
candidate line considered and rejected.
