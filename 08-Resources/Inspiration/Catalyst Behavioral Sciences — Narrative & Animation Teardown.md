---
title: Catalyst Behavioral Sciences — Narrative & Animation Teardown
type: inspiration
tags: [inspiration, animation, narrative, reference, claude]
updated: 2026-07-08
---

# Catalyst Behavioral Sciences — Narrative & Animation Teardown

Source: uploaded screen recording (75s, 60fps) of a litigation-survey / expert-witness marketing site ("Catalyst Behavioral Sciences" — consumer-perception surveys for trademark, patent & false-advertising cases, led by Dr. David Neal). Reconstructed by sampling ~90 frames across the full scroll of two pages (Home + Expert/Bio). Use this as the brief you paste into Claude (or Claude Design / a coding agent) when asking for a prototype "as close as it can get."

> [!tip] Why this teardown is structured this way
> Aspirational reference sites are usually copied at the wrong level — either "make it clean and editorial" (too vague) or pixel-cloned (wrong for our content). The reusable unit is the **motion pattern**, not the pixels. Section 2 gives you the story beats; Section 3 gives you the transferable animation vocabulary; Section 4 is the paste-ready prompt.

## 1. Overall narrative arc

Where [[Alethia — Narrative & Animation Teardown|Alethia]] escalates credibility through **dark/light contrast and 3D spectacle**, Catalyst does the opposite: it builds authority through **restraint**. It's Swiss-editorial, almost entirely monochrome on an off-white page, and lets two "living data" set-pieces do all the visual talking. The story is a **credibility-by-proof** arc:

1. **Hook (hero):** one flat claim — "Research Designed for Scrutiny." — beside a living **data constellation** (people + data nodes that periodically bloom into portraits). Signals "we study real humans, rigorously," before any scroll.
2. **Authority (intro + logo wall):** who leads the firm + a "trusted by" wall of blue-chip logos (Apple, Disney, OpenAI, Google, amazon, AT&T, adidas, Samsung).
3. **Substance (services + deep-dive overlay):** an accordion of survey issues that opens into genuinely long-form, footnoted reading views — the proof that the expertise is real, not marketing.
4. **Systematisation (knowledge map):** an orbiting node-map of survey topics that settles into a card grid — "here's the whole domain, mapped."
5. **The expert (page 2):** a full CV page for Dr. Neal — bio, representative cases, publications, and the supporting team — converting firm credibility into a named human.

The through-line: **every claim is immediately backed by evidence of depth** (real faces, real logos, real case citations, real publications). Nothing is decorative except the two animated set-pieces, and even those encode meaning (people + data).

## 2. Section-by-section breakdown

### Page 1 — Home

| # | Section | Copy / narrative beat | Visual composition | Animation mechanic |
|---|---|---|---|---|
| 1 | **Hero** | "Research Designed for Scrutiny." (headline pinned left, 2 lines) | Off-white bg; left = headline; right = a vertical "data constellation" — stacked rounded-rect **tiles** of varying heights linked by thin curved bezier lines: muted gradient tiles (coral square, teal→green bars), tall solid-black pills, tiles holding small circular headshots, one dot-matrix column. A persistent small blue accent dot sits bottom-right | **Node-bloom loop**: ~every 2–3s one node scales up and morphs into a large rounded card revealing its content — a full portrait of a diverse person, or an abstract grey data-blob + dot pattern — holds ~0.5–0.8s, then eases back into the stack. Never all at once. Whole system drifts gently at rest (ambient float) |
| 2 | **Intro statement** | "Catalyst Behavioral Sciences is led by Dr. David Neal, a testifying survey expert…" | Right-aligned single editorial paragraph; hero recedes upward | Text **fades + rises** in on scroll; hero graphic fades as it scrolls off |
| 3 | **Trusted-by wall** | (caption) "Trusted by" | Monochrome logo grid: Apple, Disney, OpenAI, Google, amazon, AT&T, adidas, Samsung | Logos **stagger in row by row** (fade + slight rise) on scroll-into-view |
| 4 | **Services** | "Litigation Surveys in Trademark, Patent, and False Advertising Cases" | Left = heading + a small document-with-charts illustration (bar + pie); right = accordion "Survey Issues Frequently Addressed" (Likelihood of Confusion · Secondary Meaning · Genericness · False Advertising & Materiality · Apportionment · Class Certification · Survey Rebuttal) each with a circular +/toggle | **Accordion expand-in-place**: clicking a row eases its height open; toggle rotates |
| 5 | **Topic detail overlay** | "Likelihood of Confusion Surveys" → "What [X] Surveys Measure" → "Survey Formats" (Eveready / Squirt / Aided Eveready) → "Common Testable Scenarios" checklist → CTA band → closing text | A **full-screen reading view** slides up over the page with "×" close top-right; long-form footnoted article; CTA band pairs Dr. Neal's outdoor portrait with "contact for a confidential consultation"; a faint circular **orbit diagram drifts behind** the closing text | Overlay **slides up / fades in** over the page; internal smooth scroll; background orbit graphic parallax-drifts |
| 6 | **Knowledge map** | (survey-topic labels) | A floating white card (bar+pie chart) centered, **orbited** by circular nodes labelled with survey topics, joined by thin lines | **Orbit-settle**: a physics/force layout gently settles into place, then **transitions into a masonry grid** of topic cards (each with a + toggle) that reveal with stagger |
| 7 | **Footer** | "Catalyst Behavioral Sciences" + Office / Sitemap (Index·Services·Team·Contact) / Contact (Dr. David Neal, Managing Partner + email) | Quiet, text-only column layout | Simple fade-in |

### Page 2 — Expert / Bio (same motion language)

| # | Section | Copy / narrative beat | Visual composition | Animation mechanic |
|---|---|---|---|---|
| 8 | **Bio hero** | "David Neal, Ph.D. — Survey Expert Witness" + bio paragraphs | Headline left; portrait card enters from the right; bio below | Portrait **slides in from the right**; bio fades/rises |
| 9 | **Representative cases** | (list of case citations) | Clean list/table of legal citations | Rows **reveal on scroll** (staggered fade) |
| 10 | **Logo wall (extended)** | — | Apple, Disney, OpenAI, Google, amazon, AT&T, adidas, Samsung, intel, Netflix, P&G, Breitling | Staggered logo reveal |
| 11 | **Category cards** | Academic Appointments · Government & Institutional Research · Marketing Sciences Research · Media Coverage | 4 cards, each with "Read More" | Fade/rise, staggered |
| 12 | **Publications** | "author of 26 peer-reviewed publications … cited 8,000+ times (Google Scholar)" | Grid of publication cards | Staggered grid reveal |
| 13 | **Team** | "supported by a multidisciplinary team of behavioral scientists, research methodologists, and statisticians…" | **Staggered masonry grid** of ~9 B&W portrait cards (name + title): Connie Rodman, Cary Anderson, Don Clermont, Penny Scudder, Dan Bauer, Claudia Townsend, Daniel Epstein, Juliano Laran, Asaf Mazar | Cards **fade + rise with offset per-card timing** as they enter the viewport |
| 14 | **Footer** | (same as page 1) | — | Fade-in |

## 3. Reusable motion pattern library

Naming these so you can reference them precisely when briefing a build:

- **Node-bloom constellation** *(signature — hardest to reproduce)*: a cluster of small connected "data node" tiles where, on an ambient loop, individual nodes scale up and morph to reveal real content (a portrait or a data graphic), hold, then collapse back. Encodes "people + data" without a literal chart. Build in isolation first. (Section 1.)
- **Orbit-settle knowledge map** *(second signature)*: labelled topic nodes orbit a central artefact under a force/physics layout, settle, then transition into a static card grid. (Section 6.)
- **Accordion → full-screen reading overlay**: a compact accordion row expands to a long-form, footnoted article in a slide-up overlay with an escape "×" — lets a marketing page carry genuine depth without leaving it. (Sections 4–5.)
- **Staggered masonry reveal**: a non-strict grid of cards (team, publications, topics) that fade + rise into place with per-card delay on scroll-into-view. (Sections 6, 12, 13.)
- **Logo-wall stagger**: monochrome client logos fade in row-by-row rather than all at once, reading as accumulating proof. (Sections 3, 10.)
- **Portrait slide-in**: a person's photo card enters laterally (from the right) to introduce a named human. (Section 8.)
- **Ambient drift at rest**: the hero constellation and the overlay's orbit diagram keep drifting gently even with no scroll input — signals "alive/interactive." (Sections 1, 5.)
- **Editorial crossfade scroll**: everything enters via quiet fade + 16–24px rise on a smooth momentum (Lenis-style) scroll; no bounce, no fast pops — the restraint *is* the brand. (Global.)

## 4. Paste-ready brief for Claude / a coding agent

> Reproduce this reference as a faithful prototype. Editorial / Swiss-minimal: off-white background (~#F4F4F2), near-black text, neutral grotesk sans, very generous whitespace, soft rounded-rect cards (radius ~16–20px, faint border + light shadow). Colour is almost entirely monochrome — the ONLY saturated colour lives in the hero constellation (coral/peach square, teal→green gradient bars). One small blue accent dot bottom-right as a persistent scroll indicator. Minimal fixed top bar: left wordmark + right "Menu". Smooth momentum scroll; all entrances = fade + 16–24px rise; default easing ease-in-out ~500–800ms; nothing snappy.
>
> **Page 1 — Home**
> 1. **Hero** — headline pinned left ("Research Designed for Scrutiny."). Right = a living **data constellation**: stacked rounded-rect tiles of varying heights (muted gradient tiles, tall black pills, small circular-headshot tiles, one dot-matrix column) linked by thin curved bezier lines. Ambient loop: ~every 2–3s one node scales up and morphs into a large card revealing a portrait or an abstract data-blob, holds ~0.6s, collapses back — never all at once; whole system drifts gently at rest. **Build this component in isolation first.**
> 2. **Intro statement** — right-aligned editorial paragraph, fades/rises in as the hero recedes.
> 3. **Trusted-by wall** — monochrome logo grid, staggered row-by-row reveal.
> 4. **Services** — left heading + small document/chart illustration; right an accordion ("Survey Issues Frequently Addressed") whose rows expand in place.
> 5. **Topic detail overlay** — selecting a topic slides up a full-screen long-form reading view (× to close): title → "what it measures" → "survey formats" subsections → checklist → CTA band pairing a portrait with a "confidential consultation" prompt → closing text over a faint drifting orbit diagram.
> 6. **Knowledge map** — a central chart card orbited by labelled topic nodes on a force/physics layout that settles, then transitions into a staggered masonry grid of topic cards.
> 7. **Footer** — quiet text-only Office / Sitemap / Contact columns.
>
> **Page 2 — Expert / Bio** (same motion language)
> 8. Bio hero with headline + a portrait card that slides in from the right. 9. Representative-cases list, rows reveal on scroll. 10. Extended logo wall. 11. Four category cards. 12. Publications grid. 13. **Team** — staggered masonry of B&W portrait cards revealing with per-card offset. 14. Footer.
>
> Priority order: the two animated set-pieces (**node-bloom constellation**, **orbit-settle knowledge map**) are the wow moments — everything else is quiet and editorial. Placeholder copy/portraits are fine; the layout rhythm and the two set-pieces matter most.

> [!note] To make this Terra-ready instead of a faithful clone
> Keep the motion DNA but remap content: hero constellation nodes = Terra's people + data-analytics outputs; accordion/overlay = the 3 pillars (Strategy, Technology, Data Analytics) with case-study depth; knowledge map = portfolio-by-industry; team masonry = consultants + technology specialists (mandatory req #6). Respect [[../../03-Design-System/Terra Digital Ventures Design System/styles.css|the design-system tokens]] for colour/type — borrow structure and motion only. Treat the node-bloom and orbit-map as candidates for mandatory req #8 (interactive/animation element).

## Related
[[Alethia — Narrative & Animation Teardown]] · [[References & Inspiration]] · [[../../04-Product/Sitemap & Information Architecture|Sitemap & Information Architecture]] · [[../../04-Product/UX Principles & Notes|UX Principles & Notes]] · [[../../01-Project/Mandatory Requirements Tracker|Mandatory Requirements Tracker]]
