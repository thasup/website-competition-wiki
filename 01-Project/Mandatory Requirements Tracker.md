---
title: Mandatory Requirements Tracker
type: tracker
tags: [project, mandatory, tracker]
updated: 2026-07-07
---

# Mandatory Requirements Tracker

> [!danger] These are pass/fail
> Every entry **must** contain all 8. Missing one = incomplete entry, no matter how polished. Review this at the [[Timeline & Milestones|Jul 11 mid-point]] and before submit.

Status legend: 🔴 not started · 🟡 in progress · 🟢 done

| # | Requirement | Where it lives | Owner | Status | Notes |
|---|---|---|---|---|---|
| 1 | Differentiation clear on **first scroll** — shows **both** Strategic Consulting **and** Technology Delivery | [[Page-Specs/Home (Landing) Spec\|Home hero]] | — | 🔴 | Copy from [[Differentiation & Positioning Brief#4. First-Scroll Message Architecture]] |
| 2 | All **3 pillars**: Strategy · Technology · Data Analytics | [[Page-Specs/Home (Landing) Spec\|Pillars section]] | — | 🔴 | Needs 1–2 narrative sentences each (current site has none) — [[Messaging & Copy Deck]] |
| 3 | **Portfolio** page: each project has **Industry + Outcome** | [[Content Inventory#Case study bank]] | — | 🔴 | 12 blurbs exist; rewrite 2–3 as Strategy→Delivery |
| 4 | **Social proof** (testimonials and/or client logos) | [[Content Inventory#Social proof]] | — | 🔴 | Sourcing + permissions to confirm |
| 5 | Clear **Call-to-Action** | Global (hero + footer) | — | 🔴 | Reuse/upgrade "GET STARTED" — [[Messaging & Copy Deck#CTAs]] |
| 6 | Shows **people diversity** — Consultant **+** Technology Specialist | [[Content Inventory#Team & people]] | — | 🔴 | Names unverified on-site; see fact sheet caveats |
| 7 | **Mobile responsive** | [[UX Principles & Notes#Responsive]] | — | 🔴 | Design system is responsive-ready; verify each breakpoint |
| 8 | **≥1 interactive / animation** element | [[UX Principles & Notes#Interaction & motion]] | — | 🔴 | Design system ships the **orb drift** + scroll-reveals for free |

## Verification pass (before submit)
- [ ] Open the deployed link on a real phone — first scroll communicates both halves in <5s.
- [ ] Grep the live site: Strategy, Technology, Data Analytics all named.
- [ ] Every portfolio card shows an industry tag **and** a quantified/qualified outcome.
- [ ] At least one testimonial or a client-logo strip is visible.
- [ ] Primary CTA reachable from hero and footer.
- [ ] Team section shows ≥1 consultant and ≥1 technologist.
- [ ] Lighthouse mobile check passes; no horizontal scroll at 360px.
- [ ] At least one deliberate interaction/animation works (and respects `prefers-reduced-motion`).

> [!tip]
> Assign an owner to each row at kickoff. An unowned mandatory row is the #1 way teams get disqualified on a technicality.

## Related
[[Competition Brief#Mandatory requirements]] · [[Differentiation & Positioning Brief]] · [[Sitemap & Information Architecture]]
