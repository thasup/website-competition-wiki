---
title: Repo & Environment Setup
type: runbook
tags: [build, setup, runbook]
updated: 2026-07-07
---

# Repo & Environment Setup

*Goal: a "hello world" deployed to Vercel today (M2 in [[Timeline & Milestones]]). Deploy the skeleton before building features — de-risks the ship.*

## Steps
1. **Create repo** on GitHub (private), clone locally.
2. **Scaffold** the app — per [[Tech Stack & Architecture]]:
   ```bash
   npx create-next-app@latest terra-hackathon --typescript --app --eslint
   ```
3. **Bring in the design system** — copy or symlink `03-Design-System/Terra Digital Ventures Design System/` into the app (e.g. `src/design-system/`); link `styles.css`; verify Poppins + Sarabun load.
4. **Connect Vercel** — import the GitHub repo; enable auto-deploy on push. Confirm a preview URL builds.
5. **Add adherence lint** — wire `_adherence.oxlintrc.json` from the DS so the two brand rules are enforced in CI.
6. **Commit an empty hero** with GradientMesh + Orb to prove the DS renders on Vercel.

## Definition of done (setup)
- [ ] Repo exists, `main` protected-ish (at least PR habit).
- [ ] `npm run dev` renders a page using a DS component.
- [ ] Push to `main` → Vercel builds → public URL loads.
- [ ] Fonts + orb render correctly on the deployed URL (not just locally).

## Conventions
- Branch per section (`feat/hero`, `feat/pillars`) → PR → merge. Small PRs review faster with Claude ([[Prompt Library#Code review]]).
- Keep secrets out of the repo (none expected — static site).
- Log notable Claude-assisted setup steps in [[Claude Utilization Log]].

## Related
[[Tech Stack & Architecture]] · [[Deployment & Submission]]
