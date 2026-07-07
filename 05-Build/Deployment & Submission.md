---
title: Deployment & Submission
type: runbook
tags: [build, deploy, submission, runbook]
updated: 2026-07-07
---

# Deployment & Submission

## Deploy
- Platform: **Vercel** (auto-deploy from GitHub `main`).
- Prod URL is the submission artifact — keep it stable once submitted.
- Pre-deploy checklist → [[Mandatory Requirements Tracker#Verification pass (before submit)]].

## Submit
- **Deadline: Wed 15 Jul 23:59 ICT.** Target internal ship **Jul 14** (buffer day).
- Form: https://terra-web-hackathon.vercel.app/submit
- Team already registered under login `thanachon.s@terradigitalventures.com` → team name + roster in [[Team & Roles]].
- **You can submit multiple entries and keep editing any of them right up to the deadline** — no need to get it perfect on the first pass.
- Entries display **without the submitter's name** on the judging/gallery side, so voters and judges see the work, not who made it.

### Form fields (as of the live submit page)
| Field | Required? | Notes |
|---|---|---|
| Live URL (deployed link) | **Required** | Must be the working prod site |
| Project name / one-line concept | Optional | e.g. "TDV site focused on client outcomes" |
| Claude techniques used | Optional | Free text, hint text suggests: Planning, Claude Code, MCP, Subagents — tie back to [[Claude Utilization Log#Coverage tracker — the 6 techniques the site highlights]] |
| Short description (1–2 sentences) | Optional | What it does, what stands out |
| Slide/video link | Optional | For [[Demo Day Plan]] material |
| Screenshot link | Optional | Leave blank and the platform auto-generates a preview |

## Popular vote (♥, +10%)
- All entries show in the public [gallery](https://terra-web-hackathon.vercel.app/#gallery).
- Ship early → more time in the gallery → more hearts.
- Share the live link with colleagues (voting is open to everyone in the org). Anyone can heart multiple entries.
- The site quality itself drives votes — a working, fast, good-looking first scroll wins hearts.

## Post-submit
- [ ] Verify the submitted URL loads on mobile + desktop from an incognito window.
- [ ] Confirm the entry appears in the gallery.
- [ ] Lock the repo (avoid a bad last-minute push breaking prod).
- [ ] Prep the demo → [[Demo Day Plan]].

> Optional: run the `engineering:deploy-checklist` skill for a formal pre-ship pass.

## Related
[[Repo & Environment Setup]] · [[Timeline & Milestones]] · [[Demo Day Plan]]
