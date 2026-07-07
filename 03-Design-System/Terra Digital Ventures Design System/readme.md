# Terra Digital Ventures — Design System

A fused design system for the **TDV Website Hackathon 2026** demo. It carries Terra's official brand kit — **Cerulean / Taupe / Frost** primaries, the earthy secondary palette, **Poppins + Sarabun** type, and the signature blue **orb** — on top of the structural grammar of a polished financial‑infrastructure marketing site: single‑accent CTA discipline, a gradient‑mesh hero, tabular‑figure metrics, warm‑band interludes, and dark inverted feature bands.

> Terra Digital Ventures is a (fictional/demo) financial‑infrastructure venture. The product surface here is a **marketing website** for that platform. Layer real TDV copy, case studies, and team content on top.

---

## Sources

This system was assembled from materials supplied by the user — kept here so a future reader can retrace or extend the work:

- **Brand kit** (`uploads/`): official logo (dark + reversed), primary & secondary corporate color sheets, color‑usage grid, and English (Poppins) + Thai (Sarabun) typography specimens. All brand values in this system are transcribed directly from those sheets.
- **Structural DESIGN.md** (`uploads/DESIGN.md`): a financial‑infrastructure marketing‑site design analysis. We borrowed its *grammar* (single‑accent CTA, gradient‑mesh hero, tabular numerics, warm/dark bands) — **not** its indigo/Sohne visual identity, which was replaced wholesale by Terra's brand.
- **Reference repo**: [`VoltAgent/awesome-design-md`](https://github.com/VoltAgent/awesome-design-md) → [`design-md/stripe/`](https://github.com/VoltAgent/awesome-design-md/tree/main/design-md/stripe). Explore this repo to understand the structural conventions the layout grammar is drawn from; the fused DESIGN.md in `uploads/` is the same content.

---

## Content fundamentals — how Terra writes

**Voice.** Confident, plainspoken, infrastructural. Terra sells *rails* — the argument is "look at the actual product," so copy stays concrete and unshowy. Never breathless, never salesy.

- **Person.** Address the reader as **you**; refer to the company as **Terra** or **we** sparingly. ("Move capital on Terra rails." "You ship; we settle.")
- **Casing.** Sentence case for everything — headlines, buttons, nav. The only uppercase is the **eyebrow** label (letter‑spaced) and short status pills. No Title Case Headlines.
- **Headlines** are short, declarative, and often verb‑led: *"Infrastructure that compounds." "Built on Terra rails."* One idea per headline.
- **Body** is unhurried and specific — favor a concrete number or capability over an adjective. Where a claim involves money, volume, latency, or uptime, show the **figure** (in tabular numerics), not a vague superlative.
- **Buttons** are 1–2 words, decisive, verb‑first: *Start building · Contact sales · View docs · See pricing.*
- **Eyebrows** are 1–3 words, uppercase, letter‑spaced — they name the section ("PLATFORM", "PRICING", "WHY TERRA").
- **No emoji.** Terra's tone is institutional; iconography does the visual lifting. Emoji never appear in product or marketing copy.
- **Bilingual.** Pages may run English (Poppins) and Thai (Sarabun) together; the global stack falls through automatically. Keep Thai copy in the same calm register.

---

## Visual foundations

**Color.** Three primaries anchor everything: **Cerulean** `#529BC9` (the one blue), **Taupe** `#272428` (ink + dark bands, never pure black), **Frost** `#E7E7E7` (cool neutral). The earthy secondary palette — Light Tawny, Sienna, Terra Cotta, Laurel, Swamp, Viridian — is reserved **exclusively** for the gradient mesh and data‑visualization. **Two hard rules:**
1. **Cerulean is the only filled‑button color** — one filled CTA per band. Because base Cerulean is light, links and inline emphasis use the darker `cerulean-ink` (`#256187`) for legible contrast on white; fills darken to `hover`/`press` on interaction.
2. **Every money/numeric cell uses tabular figures** (`font-variant-numeric: tabular-nums`) — the quiet signal of Terra's data DNA, and it keeps figures aligned.

**Type.** Poppins (Latin) + Sarabun (Thai). Headlines/sub‑heads are Poppins **SemiBold (600)** with slightly tightened tracking; body is Poppins **Regular (400) / Light (300)**. Display scale runs 56 → 44 → 32 → 26px. Metrics render at 44px SemiBold, tabular.

**Backgrounds.** The hero is the **orb‑mesh**: an earth‑to‑sky wash (Viridian → Swamp → Cerulean → Light Tawny → Terra Cotta) built from layered organic radial blobs — *not* a flat linear‑gradient — fading to white, with the blue **orb** as focal light. Below the hero, sections alternate white → cool `canvas-soft` → a **warm Light‑Tawny interlude** → occasional **dark inverted bands** (Taupe or Viridian). The mesh is non‑negotiable on marketing heroes.

**The orb.** White hotspot → Cerulean → Viridian edge, with a soft outer glow. It drifts slowly (≈9s ease‑in‑out) — this ambient float is the signature animated moment. Never recolored, flattened, or outlined.

**Motion.** Restrained and soft. Transitions use `cubic-bezier(0.2,0.7,0.2,1)` at 140–400ms — fades, gentle lifts, the orb drift, section scroll‑reveals. No bounces, no spins. Honors `prefers-reduced-motion`.

**Hover / press.** Buttons darken (Cerulean → hover → press) and depress 1px on press. Cards lift with a slightly deeper shadow (`shadow‑1 → shadow‑2`) and `translateY(-2px)`. Links deepen in color. No opacity‑fade hovers.

**Borders & hairlines.** 1px `hairline` (`#E4E2E5`) on cards and tables; a cooler `hairline-cool` on inputs. Corners: inputs 6px, compact cards 8px, feature/pricing cards **12px**, product‑UI mockup chrome 16px, buttons & tags full **pill**.

**Shadows.** Viridian‑tinted, deliberately subtle — the mesh, not shadow, carries depth. `shadow‑1` for card lift, `shadow‑2` for floating panels/mockups, `shadow‑3` for hero composites. The **orb glow** is a separate soft radial bloom.

**Transparency & blur.** Used sparingly — translucent white lines/fills (`on-dark-line`, `on-dark-mute`) on dark bands, and translucent color stops inside the mesh. No heavy glassmorphism.

**Imagery.** Terra leans on **product‑UI composites** (faux dashboard/console panels) over photography, rendered inside 12–16px rounded chrome with subtle shadow. When photography appears it is cool‑toned and calm; logos in customer strips sit inset with no shadow.

**Layout.** ~1200px centered container; mesh extends edge‑to‑edge above. Section rhythm ≈96px (64px on denser pages). 4px base spacing grid.

---

## Iconography

Terra's supplied brand kit contains **no icon set** — the only fixed mark is the **orb** (`assets/terra-orb.png`, also available as a portable CSS sphere via the `Orb` component) and the **terra wordmark** logo. There is no custom icon font, SVG sprite, or emoji usage in the brand.

- **Substitution (flagged):** for UI glyphs (nav, feature bullets, arrows), use **[Lucide](https://lucide.dev)** via CDN — a thin, geometric, 2px‑stroke line set that matches Poppins' clean geometry and Terra's calm register. This is a substitution, not an official Terra choice; swap for a licensed set if the brand adopts one.
- **Rules if you add icons:** line (not filled), ~2px stroke, `currentColor` so they inherit text color; size 16–24px inline, up to 40px in feature tiles. Never use emoji. Never recolor icons into the earth palette except in data‑viz legends.
- **Logo:** `assets/terra-logo-dark.png` (dark ink — on light/Frost/warm surfaces) and `assets/terra-logo-light.png` (Frost ink — on Cerulean/Taupe/Viridian). Never redraw or recolor the wordmark or orb.

---

## Index / manifest

**Root**
- `styles.css` — the single entry point consumers link (import list only).
- `tokens/` — `fonts.css`, `colors.css`, `typography.css`, `spacing.css`, `elevation.css`, `base.css`.
- `assets/` — `terra-logo-dark.png`, `terra-logo-light.png`, `terra-orb.png`.
- `guidelines/` — foundation specimen cards (Brand, Colors, Type, Spacing, Effects).
- `components/` — reusable primitives (below).
- `ui_kits/marketing-site/` — the Terra marketing‑website UI kit.
- `SKILL.md` — Agent‑Skill wrapper for use in Claude Code.

**Components** (`window.TerraDigitalVenturesDesignSystem_f41591`)
- **Button** (`components/forms/`) — the single‑accent Cerulean CTA (`primary` / `secondary` / `ghost` / `on-dark`, sizes `md`/`sm`).
- **Input** (`components/forms/`) — text field with Cerulean focus ring; tabular numerics.
- **Card** (`components/display/`) — surface container (`feature` / `featured` / `warm` / `mockup`).
- **Tag** (`components/display/`) — soft uppercase pill (Cerulean + earth tones).
- **Metric** (`components/display/`) — big tabular‑figure number with label + delta.
- **Orb** (`components/brand/`) — the signature light source (portable CSS sphere or brand image).
- **GradientMesh** (`components/brand/`) — the signature earth‑to‑sky hero backdrop with orb.

**Intentional additions.** Beyond the DESIGN.md component list we added **Orb**, **GradientMesh**, and **Metric** as first‑class components — the source names all three as signature elements ("Terra Orb Mesh", "Tabular‑Figure Money Type") but only as descriptions; promoting them to components makes the brand's signatures reusable.

---

## Font substitution note

Poppins and Sarabun are both free on Google Fonts and load via `tokens/fonts.css` — these are the brand's actual specified faces, so **no substitution was required**. Icons are the one flagged substitution (Lucide, see Iconography).
