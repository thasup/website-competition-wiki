---
title: Claude Utilization Log
type: log
tags: [claude, log]
updated: 2026-07-09
---

# Claude Utilization Log

> [!important] This IS 25% of the score
> Judges reward using Claude across *all* dimensions, and the demo is graded on sharing reusable techniques. **Fill one row per meaningful Claude session, the day it happens.** Reconstructing this on Jul 15 is the #1 avoidable mistake — see [[Timeline & Milestones#Risk register]].

## Coverage tracker — the 6 techniques the site highlights
Aim to genuinely use all six (the more dimensions, the higher the Claude Utilization score).

| Technique | Used? | Where / evidence |
|---|---|---|
| **Claude Code** (write/edit code) | 🟢 | Alethia replica built end-to-end at `~/git/poc/rich-animation-website` (canvas scrub, video pins, motion/lenis) — techniques transfer to the TDV build |
| **Planning** (IA, structure, concepts) | 🟢 | this vault + [[Sitemap & Information Architecture]] |
| **MCP** (connect tools e.g. Figma) | 🟡 | Claude in Chrome used for live-site render ([[Live Site Cross-Check]]); Figma still to do → [[MCP, Skills & Subagents]] |
| **Skills** (prebuilt specialized skills) | 🟡 | terra-slides-v2, design skills available |
| **Subagents** (parallel task splitting) | 🟡 | Explore subagent briefed the vault while main session dissected alethia.earth in parallel (2026-07-09) |
| **Image generation** (assets) | 🔴 | [[Content Inventory#Asset & image plan]] |

## Session log
| Date | Phase | What Claude did | Technique(s) | Reusable takeaway |
|---|---|---|---|---|
| 2026-07-07 | Plan | Read competition site; built research checklist | Planning | Fetch + digest rules into a scored checklist before building |
| 2026-07-07 | Plan | Restructured folder into this Obsidian vault | Claude Code, Planning | Numbered-folder vault keyed to the scoring rubric |
| 2026-07-07 | Content | Locked hero + pillar copy; rewrote 3 case studies Strategy→Delivery | Planning, Content | Positioning brief → locked copy in one pass |
| 2026-07-07 | Research | Live-site cross-check via JS render (Claude in Chrome) — found the site is a single-page SPA | **MCP/Browser** | Raw fetch misses client-rendered pages; render with Chrome to verify. Sub-pages ≠ their URLs. → [[Live Site Cross-Check]] |
| 2026-07-07 | Plan | Reviewed live submit-page screenshot; documented exact form fields and confirmed team registration | Planning | Screenshot-driven doc updates keep the vault in sync with the live competition site without re-deriving rules from memory |
| 2026-07-09 | Research + Build | Reverse-engineered alethia.earth end-to-end (HTML + Framer runtime modules + 55 sampled frames from a 110s screen recording), then built a working Next.js replica at `~/git/poc/rich-animation-website` | Claude Code, **MCP/Browser**, Subagents, Planning | The "3D" is fake: a 210-frame webp sequence scrubbed on canvas (80-frame locked intro @30fps, 0.55 lerp follow) + looping webm videos swapped with springs (damping 60, stiffness 266–500) over Lenis smooth scroll — all parameters extracted from the shipped JS. Full catalog: repo `docs/TEARDOWN.md` |
| 2026-07-09 | Build | Debugged Motion v12 + pinned sections: pure `useTransform` ranges compile to native WAAPI ScrollTimelines that mis-map on `sticky` pins (and throw on offsets > 1); function-form transforms force JS-driven values | Claude Code, MCP/Browser | When scroll effects "randomly" stop tracking on pinned sections, suspect the WAAPI optimization — `useTransform(v, transform(in, out))` opts out |
| _add rows daily_ | | | | |

## "What worked best" (for the demo)
Curate 3–5 standout techniques here as they emerge — this is literally the [[Demo Day Plan|Demo Day]] script for the Knowledge-Sharing score. Candidates so far:
- Turning the scoring rubric into the vault's folder structure so every doc maps to points.
- Reverse-engineering a reference site from its shipped JS instead of guessing: the exact animation constants (frame counts, lerp factors, spring params) were sitting in Framer's module files — copy the *parameters*, not just the vibe.

## Related
[[Prompt Library]] · [[MCP, Skills & Subagents]] · [[Demo Day Plan]]
