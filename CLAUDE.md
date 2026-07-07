# CLAUDE.md

Guidance for Claude Code when working in this repo.

## What this repo is

An **Obsidian vault**, not (yet) an application codebase. It's the planning/build wiki for the **TDV Website Hackathon 2026**: a 10-day competition to redesign the Terra Digital Ventures marketing site, judged equally on the business story *and* on how thoroughly Claude was used to build it.

- **Deadline:** Wed 15 Jul 2026 23:59 ICT (deployed link submitted)
- **Demo Day:** Thu 16 Jul 2026, 10:00–12:00
- Start here: [00-Home/00-Home.md](00-Home/00-Home.md) — the dashboard and full nav map.
- Rules/scoring source of truth: [01-Project/Competition Brief.md](01-Project/Competition Brief.md)
- Plan/objective/risks: [01-Project/Project Charter.md](01-Project/Project Charter.md)

The actual website codebase (Next.js app) has **not been scaffolded yet** — see [05-Build/Repo & Environment Setup.md](05-Build/Repo%20%26%20Environment%20Setup.md) for the planned steps. Once it exists, it will likely live in its own subfolder or repo; update this file when that happens.

## Folder structure (numbered = reading order: research → build → present)

| Folder | Contents |
|---|---|
| `00-Home` | Dashboard / map of everything |
| `01-Project` | Charter, competition rules, timeline, requirements tracker, roles |
| `02-Brand-Positioning` | Business story & positioning work (25% of score) |
| `03-Design-System` | Official TDV design system + brand kit (tokens, components, brand kit images) — treat as vendored/reference, don't restructure it |
| `04-Product` | Sitemap, IA, per-page specs, UX notes |
| `05-Build` | Tech stack decisions, repo setup runbook, deployment/submission mechanics |
| `06-Claude-Playbook` | Claude usage log + prompt library (25% of score — keep current) |
| `07-Presentation` | Demo Day plan & slide outline |
| `08-Resources` | Reference PDFs, inspiration teardowns |
| `09-Logs` | Daily standup / decision logs |
| `99-Archived` | Superseded material — **never delete a doc, move it here instead** |
| `_templates` | Note templates (page spec, daily log, case study) |

## Conventions

- **Never delete superseded notes** — move them to `99-Archived/` instead.
- Every note has YAML frontmatter (`title`, `type`, `tags`, `updated`). Update `updated` when you materially edit a note.
- Cross-link related notes with Obsidian `[[wikilinks]]` rather than duplicating content.
- Tag decisions `#decision`, mandatory-requirement items `#mandatory`, risks `#risk`, Claude-technique notes `#claude` — these are filtered on in the tag pane / graph view.
- New docs should follow the matching template in `_templates/` when one exists.
- Log any notable Claude-assisted work (planning, code, content, or presentation prep) in [06-Claude-Playbook/Claude Utilization Log.md](06-Claude-Playbook/Claude%20Utilization%20Log.md) as it happens — this is graded and easy to lose points on if left to the last night.

## Planned tech stack (for when the app is scaffolded)

Per [05-Build/Tech Stack & Architecture.md](05-Build/Tech%20Stack%20%26%20Architecture.md): Next.js (App Router) + TypeScript, styled from the design-system tokens in `03-Design-System/Terra Digital Ventures Design System/styles.css`, deployed on Vercel with auto-deploy from GitHub. No backend/auth/CMS in scope. Consume the design system rather than rebuilding it — components, tokens, and the `_adherence.oxlintrc.json` lint config are meant to be imported as-is.

## The 8 mandatory requirements

All must ship regardless of polish elsewhere (tracked with owners in [01-Project/Mandatory Requirements Tracker.md](01-Project/Mandatory%20Requirements%20Tracker.md)):

1. Terra's differentiation clear on first scroll (Strategic Consulting **and** Technology Delivery)
2. All 3 pillars shown: Strategy, Technology, Data Analytics
3. Portfolio page with Industry + Outcome per project
4. Social proof (testimonials or client logos)
5. Clear CTA
6. People diversity shown (Consultant + Technology Specialist)
7. Mobile responsive
8. ≥1 interactive/animation element
