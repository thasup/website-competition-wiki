---
title: MCP, Skills & Subagents
type: reference
tags: [claude, mcp, skills, subagents, reference]
updated: 2026-07-07
---

# MCP, Skills & Subagents

*The advanced Claude dimensions that separate a high Claude-Utilization score from a basic one. Use at least a couple genuinely, and narrate them at the demo.*

## MCP (connect external tools)
Connecting Claude to real tools is a highlighted technique. Candidates:
- **Figma MCP** — design → code or push components to Figma. Relevant if we mock the hero/pillars in Figma first. (Available; needs auth.)
- **GitHub MCP** — PRs, issues, reviews from within Claude.
- Others available in this workspace (Atlassian, Slack, Linear, Notion) — only use if they genuinely help; don't force it.

> [!note] Auth
> Several connectors need authorization before use (claude.ai connector settings, or `/mcp` in an interactive session). Set up the ones you'll actually demo early.

## Skills (prebuilt specialized capabilities)
Directly useful skills already available here:
| Skill | Use for |
|---|---|
| **terra-slides-v2** | Build the TDV-branded Demo Day deck → [[Slides Outline]] |
| **design:design-critique** | Critique the hero/pillars before submit |
| **design:accessibility-review** | WCAG pass for [[UX Principles & Notes#Accessibility quick pass]] |
| **design:ux-copy** | Microcopy, CTA wording, empty states |
| **engineering:code-review** | PR review pre-merge |
| **engineering:deploy-checklist** | Pre-ship verification |
| **web-artifacts-builder** | Rapid prototyping of complex components |

## Subagents (parallelize)
With a small team + tight clock, split independent work across subagents:
- One agent builds the **hero**, another the **portfolio grid**, another drafts **copy** — in parallel.
- Use a subagent for **verification** (accessibility/mobile audit) while the main thread keeps building.
- Great story for the demo: "we ran build + QA concurrently with subagents."

## Demo angle
For each of MCP / Skills / Subagents, capture *one concrete before/after* in [[Claude Utilization Log]] so the Knowledge-Sharing segment has real, reusable examples — not "we used Claude a lot."

## Related
[[Claude Utilization Log]] · [[Prompt Library]] · [[Demo Day Plan]]
