---
title: Design System Overview
type: moc
tags: [design-system, brand, moc, ui]
updated: 2026-07-07
---

# Design System Overview

> [!note] This note is the map. The system itself lives beside it.
> Full system: `03-Design-System/Terra Digital Ventures Design System/` (relocated intact — see its own [`readme.md`](Terra%20Digital%20Ventures%20Design%20System/readme.md) and `SKILL.md`). Original brand-kit images: `03-Design-System/terra-brand-kit/`.

## What we've been given
The organizer-provided **TDV brand kit** (logo / colors / fonts) has already been fused into a working design system with tokens, components, and a marketing-site UI kit. This is our single biggest head start — **do not rebuild it, consume it.**

## Brand foundations (quick reference)
| Token | Value | Rule |
|---|---|---|
| **Cerulean** | `#529BC9` | The *only* filled-button color. One filled CTA per band. |
| Cerulean-ink | `#256187` | Links / inline emphasis (legible on white) |
| **Taupe** | `#272428` | Ink + dark bands (never pure black) |
| **Frost** | `#E7E7E7` | Cool neutral surface |
| Earth secondary | Tawny, Sienna, Terra Cotta, Laurel, Swamp, Viridian | **Only** for gradient mesh + data-viz |
| Type — Latin | **Poppins** (600 head / 400–300 body) | Sentence case everywhere |
| Type — Thai | **Sarabun** | Bilingual stack falls through automatically |
| Numerics | tabular figures (`tabular-nums`) | Every money/metric cell — Terra's "data DNA" |

## Signature elements (our creativity + interaction points)
- **The orb** — white → Cerulean → Viridian light source; drifts ~9s ease-in-out. This ambient float **satisfies mandatory requirement #8** (interactive/animation) out of the box. Component: `components/brand/Orb.jsx`.
- **Gradient mesh hero** — earth-to-sky organic radial wash fading to white. Non-negotiable on marketing heroes. Component: `components/brand/GradientMesh.jsx`.
- **Metric** — big tabular-figure number + label + delta → perfect for the [[Differentiation & Positioning Brief#4. First-Scroll Message Architecture|first-scroll proof strip]].

## Component inventory (`window.TerraDigitalVenturesDesignSystem_f41591`)
| Component | Path | Use for |
|---|---|---|
| Button | `components/forms/Button.jsx` | Single-accent CTA (primary/secondary/ghost/on-dark) |
| Input | `components/forms/Input.jsx` | Forms (contact / CTA) |
| Card | `components/display/Card.jsx` | feature / featured / warm / mockup surfaces |
| Tag | `components/display/Tag.jsx` | industry/pill labels on portfolio cards |
| Metric | `components/display/Metric.jsx` | proof-strip stats |
| Orb | `components/brand/Orb.jsx` | hero focal light (animation) |
| GradientMesh | `components/brand/GradientMesh.jsx` | hero backdrop |

Foundation specimens (color/type/spacing/effects) live in `guidelines/*.html`. A ready marketing-site UI kit (Nav, Home, Platform, Pricing, Footer) lives in `ui_kits/marketing-site/`.

## Voice (from the system's content fundamentals)
Confident, plainspoken, infrastructural. Address reader as **you**; company as **Terra**. Sentence case; verb-led headlines; show the figure, not the adjective; **no emoji** in product copy. Full voice guidance → [[Messaging & Copy Deck]].

> [!warning] Brand discipline = the UI/Creativity 15%
> The two hard rules judges will feel even if they can't name them: **(1)** exactly one Cerulean filled CTA per band; **(2)** tabular figures on every number. Breaking these is what makes a site look "off."

## How to wire it into the build
See [[Tech Stack & Architecture#Consuming the design system]]. In short: link `styles.css` (token entry point) and import the JSX components; keep Poppins + Sarabun from Google Fonts via `tokens/fonts.css`.

## Related
[[UX Principles & Notes]] · [[Page-Specs/Home (Landing) Spec]] · [[References & Inspiration]]
