---
title: Home (Landing) Spec
type: page-spec
tags: [product, page-spec, home]
route: /
status: draft
updated: 2026-07-07
---

# Page Spec — Home (Landing)

**Route:** `/` · **Status:** draft · **Owner:** Dev
This one page can satisfy **all 8** [[Mandatory Requirements Tracker|mandatory requirements]]. Built as a single scroll from [[Sitemap & Information Architecture]].

## Goal
A visitor understands within the first scroll that **Terra does both strategy and delivery**, sees proof, and can act (CTA).

## Section spec
### 1. Hero — first scroll `#req1 #req8`
- Backdrop: `GradientMesh` + drifting `Orb`.
- Headline: **"Strategy that ships."** · Sub: consulting + delivery in one team (full copy: [[Messaging & Copy Deck#Locked / candidate hero]]).
- Primary CTA: `Get started` (Cerulean filled — the only filled button here).
- Must name **both** halves in words, not just imply.

### 2. Proof strip `#req1 #req4`
- 3× `Metric` (tabular figures): `6-month build` · `75+ yrs combined` · `[logo strip]`.
- Sits within the first viewport if possible — turns the claim into evidence immediately.

### 3. Three pillars `#req2`
- 3× `Card` + `Tag`: Strategy · Technology · Data Analytics, each with a narrative sentence then sub-services ([[Messaging & Copy Deck#The 3 pillars]]).

### 4. Portfolio `#req3`
- Grid of `Card (mockup)` + industry `Tag`; each shows **Industry + Outcome**.
- Top 2–3 cards use the Strategy→Delivery framing ([[Content Inventory#Case study bank]]).

### 5. Social proof `#req4`
- Testimonial `Card (warm)` and/or client logo strip ([[Content Inventory#Social proof]]).

### 6. People `#req6`
- Show ≥1 consultant + ≥1 technologist ([[Content Inventory#Team & people]]).

### 7. CTA band `#req5`
- Dark inverted band (Taupe/Viridian) + single `Button (on-dark)`.

### 8. Footer
- Nav, contact, secondary CTA ([[Content Inventory#Company facts]]).

## Acceptance criteria
- [ ] First scroll communicates both halves + differentiation (<5s, mobile).
- [ ] All 3 pillars named with narrative copy.
- [ ] ≥3 portfolio items, each with industry + outcome.
- [ ] ≥1 testimonial or logo strip visible.
- [ ] Primary CTA in hero + footer.
- [ ] ≥1 consultant + ≥1 technologist shown.
- [ ] No horizontal scroll at 360px; Lighthouse mobile green.
- [ ] Orb drift + scroll-reveals work; `prefers-reduced-motion` honored.
- [ ] Exactly one filled Cerulean CTA per band; all numbers tabular.

## Related
[[Sitemap & Information Architecture]] · [[UX Principles & Notes]] · [[Design System Overview]] · [[_templates/Page Spec Template]]
