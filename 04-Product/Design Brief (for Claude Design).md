---
title: Design Brief (for Claude Design)
type: brief
tags: [product, design, brief, claude]
updated: 2026-07-07
---

# Design Brief — TDV Home / First Scroll

> [!important] How to use this
> This note is **self-contained on purpose** — paste the whole thing into a fresh Claude session (Claude Code in the repo, an artifact, or Figma-via-MCP) to generate the design in one pass. Point the session at the coded design system: `03-Design-System/Terra Digital Ventures Design System/` (tokens in `styles.css`, components in `components/`). Everything below is locked unless tagged _TBD_. Log the session in [[Claude Utilization Log]].

## 1. Objective
Design the **Terra Digital Ventures marketing home page**, single-scroll, whose **first viewport proves Terra does both strategic consulting *and* technology delivery**. Primary audience: Thai/ASEAN enterprise & bank decision-makers + hackathon judges skimming on a phone. Success = the differentiator is understood in <5 seconds and backed by proof in the same viewport.

## 2. Non-negotiable brand rules (hard constraints)
These are what make it look like Terra rather than generic. Breaking them reads as "off."
1. **One filled Cerulean CTA per band.** Cerulean `#529BC9` is the *only* filled-button color. Links/inline emphasis use `cerulean-ink #256187` (base Cerulean is too light on white).
2. **Every number uses tabular figures** (`font-variant-numeric: tabular-nums`) — metrics, stats, prices. Terra's "data DNA."
3. **Sentence case everywhere** (headlines, buttons, nav). Only the **eyebrow** label is UPPERCASE + letter-spaced.
4. **The orb-mesh hero is mandatory** — earth-to-sky organic radial wash (Viridian → Swamp → Cerulean → Light Tawny → Terra Cotta) fading to white, with the blue **orb** drifting ~9s ease-in-out as focal light. Not a flat linear gradient. Never recolor/flatten the orb.
5. **No emoji** in product copy. Icons = Lucide (line, ~2px, `currentColor`).
6. **Motion is restrained:** `cubic-bezier(0.2,0.7,0.2,1)`, 140–400ms; fades, gentle lifts, orb drift, scroll-reveals. No bounces/spins. **Honor `prefers-reduced-motion`.**

### Token quick-reference
| Token | Value | Use |
|---|---|---|
| Cerulean | `#529BC9` | the one filled CTA |
| Cerulean-ink | `#256187` | links, inline emphasis on white |
| Taupe | `#272428` | ink + dark bands (never pure black) |
| Frost | `#E7E7E7` | cool neutral surface |
| Earth palette | Tawny/Sienna/Terra Cotta/Laurel/Swamp/Viridian | **only** mesh + data-viz |
| Type (Latin) | Poppins — 600 head / 400–300 body | display scale 56→44→32→26px |
| Type (Thai) | Sarabun | bilingual stack falls through automatically |
| Metrics | 44px Poppins SemiBold, tabular | proof strip |
| Layout | ~1200px container, 4px grid, ~96px section rhythm | mesh extends edge-to-edge |
| Radii | inputs 6 · compact card 8 · feature card 12 · mockup chrome 16 · buttons/tags pill | |

Full system + component API: [[Design System Overview]].

## 3. Voice
Confident, plainspoken, infrastructural. Address the reader as **you**; the company as **Terra**. Verb-led headlines, one idea each. Show the figure, not the adjective. Full guidance: [[Design System Overview#Voice]].

## 4. Locked copy (drop in verbatim — no placeholders)

**Hero** (eyebrow `WHY TERRA`)
- **Headline:** Strategy that ships.
- **Subheadline:** Terra combines strategic consulting and technology delivery in one team — so transformation doesn't stall between the deck and the deployment.
- **Primary CTA:** Get started

**Proof strip** (3× Metric, tabular)
- `6 months` — SEC-approved platform, built & activated
- `75+ years` — combined consulting experience
- `12 ventures` — shipped across finance, energy & industry

**Three pillars** (narrative + sub-services) — full text in [[Messaging & Copy Deck#The 3 pillars — LOCKED narrative copy]]:
- **Strategy** — "Board-level thinking that already knows how it will be built…"
- **Technology** — "The team that turns the strategy into a running system…"
- **Data Analytics** — "Insight that feeds both the strategy and the build…"

**Hero portfolio cards** (Strategy→Delivery, full text in [[Content Inventory#Hero case studies — LOCKED]]):
1. Crypto trading platform — FinTech — "…strategy to live in 6 months…"
2. ICO subscription — FinTech — "…issuance strategy to a live secondary-market system…"
3. Sales tracking & CRM — Enterprise Sales — "…live visibility from field to forecast."

**CTAs:** hero + footer "Get started"; footer secondary "Contact sales". Sourced from [[Messaging & Copy Deck#CTAs]].

## 5. Section-by-section layout spec
Full IA: [[Sitemap & Information Architecture]]. Alternate band backgrounds: white → cool `canvas-soft` → warm Light-Tawny interlude → dark inverted (Taupe/Viridian).

| # | Section | Layout intent | DS components | Mandatory req |
|---|---|---|---|---|
| 1 | **Hero** | Full-bleed orb-mesh; eyebrow → headline → sub → CTA left/centered; orb as focal light | GradientMesh, Orb, Button | #1, #8 |
| 2 | **Proof strip** | 3 metrics in a row (stack on mobile), within/just below first viewport | Metric ×3 | #1, #4 |
| 3 | **Three pillars** | 3 cards side by side; each = title + narrative + sub-service tags | Card, Tag | #2 |
| 4 | **Portfolio** | Grid of mockup cards; industry Tag + outcome; 3 hero cards lead | Card (mockup), Tag | #3 |
| 5 | **Social proof** | Testimonial in warm band and/or logo strip (inset, no shadow) | Card (warm) | #4 |
| 6 | **People** | ≥1 consultant + ≥1 technologist; role-labeled | Card | #6 |
| 7 | **CTA band** | Dark inverted band, single on-dark CTA | Button (on-dark) | #5 |
| 8 | **Footer** | Nav, contact, secondary CTA | Footer (ui_kit) | #5 |

## 6. Acceptance criteria (design is "done" when)
- [ ] First viewport names **both** consulting + delivery in words; understood <5s on mobile.
- [ ] All 3 pillars present with narrative copy.
- [ ] ≥3 portfolio cards, each with **Industry + Outcome**.
- [ ] ≥1 testimonial or logo strip.
- [ ] Primary CTA in hero **and** footer.
- [ ] ≥1 consultant + ≥1 technologist shown.
- [ ] No horizontal scroll at **360px**; layout reflows cleanly.
- [ ] Orb drift + scroll-reveals work; `prefers-reduced-motion` respected.
- [ ] Exactly one filled Cerulean CTA per band; all numbers tabular.
Mirror of [[Mandatory Requirements Tracker]] + [[Page-Specs/Home (Landing) Spec]].

## 7. Reference direction
- **Steal:** ThoughtWorks' strategy+engineering narrative and case-study depth; Refactoring UI's hierarchy discipline (one dominant claim per view — "emphasize by de-emphasizing").
- **Avoid:** density that hurts scannability; more than one competing headline; generic big-consultancy stock imagery.
- Teardown notes: [[References & Inspiration]].

## 8. Output & generation instructions
- **Format:** single-file where possible (React/HTML per [[Tech Stack & Architecture]]); consume DS tokens/components — do **not** hardcode hex values, reference the tokens.
- **Imagery:** no photos required for hero (mesh + orb). Use faux product-UI composites in 12–16px rounded chrome for portfolio cards; generate via image-gen and log prompts in [[Content Inventory#Asset & image plan]].
- **No browser storage** (localStorage/sessionStorage) in any generated artifact.

### Generation → critique → iterate loop
1. Generate the **first scroll only** first (hero + proof strip) — validate the hardest part before building down.
2. Critique with the `design:design-critique` skill; contrast/keyboard/motion check with `design:accessibility-review`.
3. Iterate, then extend to sections 3–8.
4. Freeze → produce a handoff with `design:design-handoff`.
5. Log every pass + best prompts in [[Claude Utilization Log]] and [[Prompt Library]] (this is the 25% Claude score).

> [!note] Figma route
> If designing in Figma instead of code, the Figma connector must be **authorized first** (claude.ai connector settings) — it can't run unauthenticated. Same brief applies; see [[MCP, Skills & Subagents]].

## Related
[[Messaging & Copy Deck]] · [[Content Inventory]] · [[Sitemap & Information Architecture]] · [[Design System Overview]] · [[Page-Specs/Home (Landing) Spec]] · [[Prompt Library]]
