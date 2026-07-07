---
title: Alethia — Narrative & Animation Teardown
type: inspiration
tags: [inspiration, animation, narrative, reference, claude]
updated: 2026-07-08
---

# Alethia — Narrative & Animation Teardown

Source: uploaded screen recording of an environmental-intelligence / carbon-MRV marketing site ("alethia" — climate data + blockchain traceability, Buenos Aires/Utah). Reconstructed by sampling ~30 frames across the full 56s scroll. Use this as the brief you paste into Claude (or Claude Design / a coding agent) when asking for a prototype "as close as it can get."

> [!tip] Why this teardown is structured this way
> Aspirational reference sites are usually copied at the wrong level — either "make it green and mossy" (too vague) or pixel-cloned (wrong for our content). The reusable unit is the **motion pattern**, not the pixels. Section 2 gives you the story beats; Section 3 gives you the transferable animation vocabulary; Section 4 is the paste-ready prompt.

## 1. Overall narrative arc

The site tells a **credibility escalation** story in five acts, alternating dark/moody and light/clean sections as a pacing device (dark = "the problem / the tech," light = "the proof / the product"):

1. **Hook (dark, hero):** bold claim + 3D hero object → "we sit at the intersection of two worlds" positioning statement.
2. **Sensory proof (dark → foggy macro nature footage):** slow, textural, almost ASMR — establishes the *real-world* half of the credibility claim (nature-based, tangible).
3. **Technical proof (black, hardware):** rotating 3D sensor hardware + data-card overlays — establishes the *scientific/technology* half of the claim.
4. **Product proof (white/light):** solution cards, case studies, press — converts credibility into concrete offerings and social proof.
5. **Close (dark green, oversized wordmark):** emotional/brand payoff + single CTA, then a billboard-scale logo as the last thing you see.

Every section pairs **one bold claim (headline)** with **one visual proof (3D object, data card, or photo)** — never claim alone, never visual alone.

## 2. Section-by-section breakdown

| # | Section | Copy / narrative beat | Visual composition | Animation mechanic |
|---|---|---|---|---|
| 1 | **Hero** | "Where Ecosystem Science and Enterprise Strategy Meet" + subhead + CTA | Dark green-black bg; photoreal 3D scanned rock/moss cluster center-stage, smaller rock fragments floating at corners; small floating data-tag near the model | Object likely idles/rotates slowly in place (scroll-independent ambient motion); floating fragments = parallax depth cue; "Scroll to discover" prompt bottom-right |
| 2 | **Sensory transition** | "Our Ecosystem-Level Accounting Solutions translate complex scientific data into verifiable, compliance-ready metrics" | Full-bleed macro video: fern leaves + moss + soil, heavy fog/blur at edges, tiny green "+"-tag callouts pinned to specific leaves | Background video plays continuously (Ken Burns/slow dolly); text block **crossfades in place** (no slide) over the footage; tag callouts fade in staggered, one after another |
| 3 | **Technical proof 1** | "Scientific Credibility to Corporate Climate Action" + 5-item numbered capability list | Weather-station pole with sensor domes (3D/photoreal), floating "Accumulated carbon balance" chart card lower-left, numbered feature list right, still over the mossy background | Camera/model **holds position while scrolling** (pinned), list items and chart card appear to build in as a secondary scroll happens within the pin — i.e. **scroll-scrubbed reveal**, not scroll-to-next-section yet |
| 4 | **Solutions (cards)** | "Validating What the Ecosystem Does Naturally" → 2-up cards: Nature-Based / Supply Chain | White bg; two large cards side by side, each starts as a **solid lime-green block** with only a label + arrow, then a **circular mask wipes open from the top-right corner** to reveal the real photo (leaf droplets / aerial farmland) underneath, headline copy fades in after the reveal | Classic "color-block → circle-reveal → photo" card entrance, staggered left-then-right; cards are pinned briefly while the reveal plays, then release to normal scroll |
| 5 | **Technology (dark)** | "Scientific Rigor. Commercial Precision. Unmatched Trust." → "Atmospheric-Based MRV" → "Blockchain Technology" | Full black bg; oversized dark silhouette of sensor domes behind headline; then camera moves to a **rotating 3D hardware model** (sensor arms) as copy panels swap beside it; dark UI-style data cards slide in (accumulated balance, "no spreadsheets / no guesswork" tags) | **Pin + scrub**: one 3D object stays centered/rotating while 3–4 different headline/copy pairs cycle past it as you scroll — the object doesn't change, only camera angle + copy does. One deliberate **hard cut to near-black** as a beat/breath between sub-claims (not a bug — a rhythm device) |
| 6 | **Insight payoff** | "Just Real, Measured Insight. Delivered with Integrity." | Same hardware model, now on transitional black→white gradient | Section boundary crossfades from black to a light background as the pin releases |
| 7 | **Trust problem (scattered bento)** | "ALETHIA SOLVES — The Biggest Problem in Climate Action: Trust" | Light bg; **staggered/masonry grid** of mixed-size cards at different vertical offsets: hardware photo, line-chart card, aerial photo, topographic line-art icon, moss macro photo, green "carbon balance" stat card, bar-chart card | Cards **drift upward + fade in with staggered delay** per card (each starts slightly lower/more transparent, animates to final position) — no strict grid alignment, deliberately organic/scattered |
| 8 | **Manifesto (2×2 list)** | "We're Not Just Evolving the System. We're Redefining It." + 4 numbered capability rows | Clean white bg, centered heading, 2×2 numbered card grid below | Simple fade/slide-up per row, likely staggered top-to-bottom or all together on section entry |
| 9 | **Case studies (carousel)** | "Explore how leading organizations are using alethia…" | Horizontal row of case-study cards (photo left, title+role right); one card shows a green topographic/contour-line texture as its image | **Horizontal-scroll carousel** decoupled from vertical scroll — arrows top-right, cards slide left to reveal the next as you continue scrolling or dragging |
| 10 | **News/insights** | "Latest News & Insights → Insights that Move the Market" | Single teaser card (image + date + title + "Full story"), "See all" link top-right | Simple fade-in, sets up the transition into the closing CTA |
| 11 | **Closing CTA** | "Turn Climate Data Into Business Results" + CTA button | Full-bleed dark green forest-aerial background, lime headline, dark pill CTA | Background photo likely has a slow zoom/pan; headline fades/slides up on entry |
| 12 | **Footer billboard** | Wordmark + footer nav | Blurred macro-moss video continues behind; **giant oversized "alethia" wordmark** spans full viewport width, footer link columns + address + socials sit below/inside it | Wordmark is likely **pinned and scales/reveals** as the very last scroll beat — the "billboard logo" closing trend; no further scroll after this (end of page) |

## 3. Reusable motion pattern library

Naming these so you can reference them precisely when briefing a build:

- **Pin-and-scrub swap**: one hero visual (3D object or photo) stays fixed on screen while scroll position drives *secondary* content (headline, list, data card) cycling beside it. (Sections 3, 5.)
- **Circle-reveal card**: a solid color block masks a card's image; a circular clip-path/mask expands from a corner to reveal the photo underneath. (Section 4.)
- **Staggered bento drift**: a scattered, non-grid card layout where each card fades in + translates from a slightly offset position, with per-card animation delay. (Section 7.)
- **Hard cut to black beat**: a deliberate near-instant fade to a near-blank frame between two sub-claims in the same pinned section — a rhythm/breathing device, not a loading glitch. (Section 5→6.)
- **Ambient idle rotation**: hero 3D object subtly rotates/drifts independent of scroll, signaling "this is alive/interactive" before the user even scrolls. (Section 1.)
- **Text crossfade-in-place over locked video**: background footage keeps playing continuously; only the text layer crossfades — text never competes with camera movement. (Section 2.)
- **Horizontal scroll-jack carousel**: vertical scroll temporarily drives horizontal card movement within a bounded section, with explicit prev/next arrows as an escape hatch. (Section 9.)
- **Billboard wordmark outro**: closing footer scales the brand name to fill the viewport width as the last visual beat, functioning as a full-stop rather than a typical link-list footer. (Section 12.)

## 4. Paste-ready brief for Claude / a coding agent

> Build a single-page marketing site prototype using this scroll narrative and motion vocabulary, adapted to Terra Digital Ventures content (Strategy, Technology, Data Analytics pillars — see [[Messaging & Copy Deck]]):
>
> 1. **Hero** — full-viewport, dark background, one bold claim + subhead + CTA, one hero visual with a subtle ambient idle animation (rotate/drift) that plays before any scroll input, plus a "scroll to discover" cue.
> 2. **Sensory/credibility section** — full-bleed looping background video or slow pan photo; overlay copy crossfades in place (no slide-in) over the continuously-moving background.
> 3. **Pin-and-scrub proof section** — one visual stays fixed/centered while 2–4 supporting claims and a small data-card cycle in beside it as the user scrolls; include one deliberate hard-cut-to-black beat between sub-claims for pacing.
> 4. **Solution cards** — 2-up (or 3-up) cards that start as a solid brand-color block and reveal the real image via an expanding circular mask from a corner, staggered left-to-right.
> 5. **Trust/proof bento** — non-grid, staggered masonry of mixed-size cards (photos + stat cards) that fade + drift into position with per-card stagger delay on scroll-into-view.
> 6. **Manifesto list** — clean numbered 2×2 (or similar) grid, simple fade/slide-up.
> 7. **Case studies** — horizontal-scroll carousel decoupled from page scroll, with visible prev/next arrows.
> 8. **Closing CTA** — full-bleed background photo with slow zoom/pan, single bold claim + CTA button.
> 9. **Footer billboard** — oversized brand wordmark spanning the viewport width as the final scroll beat, with footer nav/contact links laid beneath or inside it.
>
> Respect [[../../03-Design-System/Terra Digital Ventures Design System/styles.css|the design-system tokens]] for color/type — do not import Alethia's palette, only its motion structure. Every section must satisfy the [[../../01-Project/Mandatory Requirements Tracker|8 mandatory requirements]] (mobile responsive, ≥1 interactive/animation element, etc.) — treat the pin-and-scrub and circle-reveal patterns as the primary candidates for requirement #8.

## Related
[[../../04-Product/Sitemap & Information Architecture|Sitemap & Information Architecture]] · [[../../04-Product/UX Principles & Notes|UX Principles & Notes]] · [[../../01-Project/Mandatory Requirements Tracker|Mandatory Requirements Tracker]]
