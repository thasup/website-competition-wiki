---
title: UX Principles & Notes
type: spec
tags: [product, ux]
updated: 2026-07-07
---

# UX Principles & Notes

*Targets the UX 20% score. Heuristics from [[References & Inspiration]] and Krug/"Don't Make Me Think".*

## Principles
1. **Clarity before cleverness** — the first-scroll message must be understood in <5 seconds on a phone.
2. **Progressive disclosure** — hero states the claim; sections below prove it. No wall of text up top.
3. **One primary action per view** — a single Cerulean CTA per band ([[Design System Overview]]).
4. **Scannability** — verb-led headlines, tabular metrics, industry tags on cards. A judge skims first, reads second.
5. **Bilingual calm** — EN (Poppins) / TH (Sarabun) in the same register; the stack falls through automatically.

## Responsive
Mandatory #7. Design system is responsive-ready (~1200px container, 4px grid, mesh edge-to-edge).
- [ ] No horizontal scroll at **360px**.
- [ ] Tap targets ≥44px; nav collapses to a usable mobile menu.
- [ ] Hero legible on mobile — headline doesn't wrap awkwardly; proof strip stacks.
- [ ] Test iPhone SE (small), a mid Android, and desktop.
- [ ] Run Lighthouse mobile — aim for green Performance + Accessibility.

## Interaction & motion
Mandatory #8 (≥1 interactive/animation). Design system gives these for free:
- **Orb drift** (~9s ease-in-out) — the signature ambient animation.
- **Scroll-reveals** — gentle fade/lift on section entry.
- **Hover/press** — buttons darken + depress 1px; cards lift `translateY(-2px)` with deeper shadow.
- Motion easing `cubic-bezier(0.2,0.7,0.2,1)`, 140–400ms. No bounces/spins.
- [ ] **Honor `prefers-reduced-motion`** — required for accessibility; judges may check.

Stretch interactive ideas (differentiators): animated pillar tabs, a Strategy→Delivery timeline that animates on scroll, an interactive metric counter, a portfolio filter by industry.

## Accessibility quick pass
- [ ] Color contrast — use `cerulean-ink` for links on white (base Cerulean is light).
- [ ] Keyboard navigable; visible focus rings.
- [ ] Alt text on all imagery/logos.
- [ ] Semantic headings (one h1 = the hero).

> Optional deeper audit available via the `design:accessibility-review` skill before submit.

## Related
[[Sitemap & Information Architecture]] · [[Design System Overview]] · [[Mandatory Requirements Tracker]]
