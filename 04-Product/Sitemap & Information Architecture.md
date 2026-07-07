---
title: Sitemap & Information Architecture
type: spec
tags: [product, ia, sitemap, ux]
updated: 2026-07-07
---

# Sitemap & Information Architecture

*Structure that guarantees all 8 [[Mandatory Requirements Tracker|mandatory requirements]] land. A single strong landing page can satisfy every requirement; extra pages are stretch.*

## Recommended structure (single-page-first)
```mermaid
flowchart TD
    Home["🏠 Home (single-page scroll)"]
    Home --> Hero["1 · Hero — first scroll<br/>Strategy that ships (req #1)"]
    Home --> Proof["2 · Proof strip<br/>6mo / 75yrs / logos (req #1,#4)"]
    Home --> Pillars["3 · Three pillars<br/>Strategy · Tech · Data (req #2)"]
    Home --> Portfolio["4 · Portfolio<br/>Industry + Outcome (req #3)"]
    Home --> Social["5 · Social proof<br/>testimonials/logos (req #4)"]
    Home --> Team["6 · People<br/>consultant + technologist (req #6)"]
    Home --> CTA["7 · CTA band (req #5)"]
    Home --> Footer["Footer — nav, contact, CTA"]

    Home -.stretch.-> About["About / founding story"]
    Home -.stretch.-> Careers["Careers"]
    Home -.stretch.-> CaseDetail["Case study detail pages"]
```

## Section-by-section map
| # | Section | Mandatory req | Content source | Design system parts |
|---|---|---|---|---|
| 1 | Hero (first scroll) | #1, #8 | [[Messaging & Copy Deck#Locked / candidate hero]] | GradientMesh + Orb + Button |
| 2 | Proof strip | #1, #4 | [[Messaging & Copy Deck#Reusable proof stats]] | Metric (tabular) |
| 3 | Three pillars | #2 | [[Messaging & Copy Deck#The 3 pillars]] | Card, Tag |
| 4 | Portfolio | #3 | [[Content Inventory#Case study bank]] | Card (mockup), Tag |
| 5 | Social proof | #4 | [[Content Inventory#Social proof]] | Card (warm), logo strip |
| 6 | People | #6 | [[Content Inventory#Team & people]] | Card |
| 7 | CTA band | #5 | [[Messaging & Copy Deck#CTAs]] | dark band + Button |
| 8 | Footer | #5 | [[Content Inventory#Company facts]] | Footer (ui_kit) |

## IA principles
- **First scroll carries the argument.** A visitor who only sees the hero + proof strip must already understand: Terra does *both* strategy and delivery, and here's proof. Everything below is elaboration.
- **One idea per section**, alternating white → cool → warm-tawny → dark bands (design-system rhythm) for visual pacing.
- **One filled Cerulean CTA per band** — discipline drives the UI score.

## Related
[[Page-Specs/Home (Landing) Spec]] · [[UX Principles & Notes]] · [[Design System Overview]] · [[Mandatory Requirements Tracker]]
