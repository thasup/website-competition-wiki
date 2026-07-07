---
name: terra-design
description: Use this skill to generate well-branded interfaces and assets for Terra Digital Ventures (TDV), either for production or throwaway prototypes/mocks/etc. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping — Cerulean/Taupe/Frost brand, Poppins + Sarabun type, the signature orb-mesh, single-accent CTA discipline, and tabular-figure metrics.
user-invocable: true
---

Read the `readme.md` file within this skill, and explore the other available files (`styles.css` + `tokens/` for the color/type/spacing system, `components/` for reusable React primitives, `guidelines/` for foundation specimen cards, `ui_kits/marketing-site/` for a full interactive site recreation, `assets/` for the logo and orb).

If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets out and create static HTML files for the user to view. If working on production code, you can copy assets and read the rules here to become an expert in designing with this brand.

Non-negotiables when designing for Terra:
- **Cerulean (`#529BC9`) is the only filled-button color** — one filled CTA per band. Earth tones (Sienna, Terra Cotta, Laurel, Swamp, Viridian, Light Tawny) live only in the gradient mesh and data-viz.
- **Every money/numeric cell uses tabular figures** (`font-variant-numeric: tabular-nums`).
- **The orb-mesh hero is the signature move** — an earth-to-sky wash of layered organic blobs with the blue orb as focal light. Never a flat linear-gradient.
- **Type:** Poppins (Latin) + Sarabun (Thai), SemiBold headlines, Regular/Light body. Sentence case everywhere except letter-spaced uppercase eyebrows.
- **No emoji.** Use Lucide line icons (CDN) where glyphs are needed.

If the user invokes this skill without any other guidance, ask them what they want to build or design, ask some questions, and act as an expert designer who outputs HTML artifacts _or_ production code, depending on the need.
