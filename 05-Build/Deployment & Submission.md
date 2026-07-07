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
- Required: **deployed link**. Optional but recommended: team/entry name, techniques used, slides link.
- Entries appear **anonymously**; you can **edit until deadline** — so submit early, keep polishing.

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
