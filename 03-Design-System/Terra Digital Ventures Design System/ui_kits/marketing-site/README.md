# Terra Marketing Site — UI Kit

A high-fidelity, interactive recreation of the Terra Digital Ventures marketing website, composed entirely from this design system's components (`Button`, `Card`, `Tag`, `Metric`, `Orb`, `GradientMesh`).

## Screens
- **Home** (`HomeScreen.jsx`) — orb-mesh hero, floating dashboard mockup, customer logo strip, tabular metrics band, feature grid (Lucide icons), warm Light-Tawny customer-story interlude, and a Viridian dark CTA band with the orb.
- **Platform** (`PlatformScreen.jsx`) — feature deep-dive with a dark code panel composite, developer copy, and a numbered capabilities grid.
- **Pricing** (`PricingScreen.jsx`) — three tiers with the inverted dark `featured` tier, tabular pricing, and a reassurance metrics band.

## Structure
- `index.html` — mounts `App`, a sticky `Nav`, page switching (Home / Platform / Pricing), and `Footer`. Click any nav item or CTA to move between pages.
- `Nav.jsx`, `Footer.jsx` — shared chrome.
- Icons: **Lucide** via CDN (`lucide.createIcons()` runs on each page change). Flagged substitution — Terra ships no official icon set.

## Notes
- Every money/numeric cell uses tabular figures.
- Cerulean is the only filled button; earth tones appear only in the mesh, code panel, and data-viz.
- Loads the compiled bundle from `../../_ds_bundle.js` and tokens from `../../styles.css`.
