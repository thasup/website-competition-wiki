---
title: Live Site Cross-Check
type: verification
tags: [brand, verification, research]
source: https://www.terradigitalventures.com/
verified: 2026-07-07
updated: 2026-07-07
---

# Live Site Cross-Check — terradigitalventures.com vs. wiki

**Verified 2026-07-07.** Method: raw fetch of all routes **plus** JavaScript-rendered capture (Claude in Chrome) of `/about`, `/careers`, `/contact-us` to defeat the client-side rendering that previously blocked verification. This resolves the "live site blocks automated fetching" caveat in [[TDV Brand Fact Sheet]] — it no longer blocks; it is a client-rendered Next.js SPA.

> [!danger] Headline finding
> **The live site is effectively a single page.** Every nav route — `/`, `/experiences`, `/about`, `/careers`, `/contact-us` — renders the **identical homepage**. There is currently **no live About page, Careers page, or Contact page content.** The founding-story, mission statement, careers EVP, and contact details quoted in [[TDV Brand Fact Sheet]] are **not present on the live site today** — they came from search-engine snippets (likely an older site version) and third-party profiles. Treat them as *source material to verify with stakeholders*, not as current live copy.

## 1. Confirmed — wiki matches live exactly ✅
| Item | Live evidence | Wiki claim | Verdict |
|---|---|---|---|
| Hero headline | "Redefine your potential" | [[TDV Brand Fact Sheet#2. Positioning line(s)]] | ✅ exact |
| Hero subheadline | "At Terra, we provide comprehensive end-to-end support to help our clients realize their ambitions." | Fact Sheet §2 | ✅ exact |
| Primary CTA | "GET STARTED" → links to `/contact-us` | Fact Sheet §6 | ✅ (+ new: link target) |
| Nav | SERVICES (`/`) · EXPERIENCES · ABOUT US · CAREERS · CONTACT | Fact Sheet §6 | ✅ exact |
| Pillars | Strategy / Technology / Data Analytics as tabs, image + bullet list | Fact Sheet §3 | ✅ exact |
| Sub-services | All 10 Strategy / 13 Technology / 5 Data Analytics, verbatim & in order | Fact Sheet §3 | ✅ exact |
| Experience cards | All **12** cards, titles + descriptions verbatim, same order | Fact Sheet §5, [[Content Inventory#Case study bank]] | ✅ exact |
| Live typos | "IT acrhictecture design", "centralize war room" | Fact Sheet §3/§5 | ✅ confirmed present |
| Footer | "© 2024 TERRA CONSULTANT"; PRIVACY / TERMS / COOKIES all → `/terms-and-conditions` | Fact Sheet §6 | ✅ (+ new: COOKIES link) |

## 2. Corrected / newly confirmed — updates the Fact Sheet's open caveats
| Fact Sheet said | Live reality (2026-07-07) | Action |
|---|---|---|
| Per-pillar narrative copy "cannot be 100% confirmed absent" | **Confirmed absent** — pillars are only a tab label + image + bullet list, zero narrative | Opportunity confirmed → [[Messaging & Copy Deck#The 3 pillars — LOCKED narrative copy]] |
| "How we helped our clients" heading "could not be confirmed" | **Confirmed present**, exactly, above the 12 cards; each row has a "VIEW ALL" | Update caveat ✅ |
| — (not noted) | **Closing band: "Ready to work with us?" + a second "GET STARTED"** | New — add to copy inventory |
| — (not noted) | Imagery is **photography** (`hero.jpg`, `strategy.jpg`, `crypto-trading.jpg`, …); logo is `logo-light.svg` | Design contrast (see §4) |

## 3. Discrepancy — wiki treats as live, but is NOT live ⚠️
These are the highest-consistency-risk items. All were attributed in the Fact Sheet to Terra's own pages but are **absent from the live site**, which serves the homepage on those routes.

| Wiki content | Where in wiki | Live status | Reliability |
|---|---|---|---|
| About Us founding story ("20+ years… 75+ combined", "That's how Terra Digital Ventures was born") | Fact Sheet §1, §5; underpins [[Differentiation & Positioning Brief]] | **Not on live `/about`** (renders homepage) | Search-snippet / cached — **verify with stakeholders** |
| Mission statement paragraph ("Thailand's most influential advisor…") | Fact Sheet §1 | **Not live** | Search-snippet / cached |
| Careers EVP quote, roles list, "VIEW JOB OPENNING" typo, careers@ email | Fact Sheet §5; [[Content Inventory#Team & people]] | **Not live** | Search-snippet / third-party |
| Contact address, phone, form | Fact Sheet §6; [[Content Inventory#Company facts]] | **Not live** | Third-party directories |
| Named leadership (RocketReach) | Fact Sheet §5 | Never on-site (already flagged) | Third-party — do not publish unverified |

## 4. What this means for our project (opportunities > risks)
1. **Every one of the 8 [[Mandatory Requirements Tracker|mandatory requirements]] is currently absent or weak on the live site** — no narrative differentiation, no metrics/proof, no testimonials, no team, no per-pillar copy, broken sub-pages, photography-only. Our redesign is unambiguously value-additive; the contrast is a gift for the **Business Story (25%)** score. Show a before/after at the demo.
2. **Our locked proof stats rely on non-live sources.** "75+ years combined" and the founding-story arc — central to [[Messaging & Copy Deck#Hero — LOCKED]] and [[Differentiation & Positioning Brief]] — are **not on the current site**. Keep them (they're strong and plausibly true), but flag them `source: to verify` and confirm with a Terra stakeholder before they go on the deployed site as fact. The "6 months / SEC-approved" stat **is** live-verified (homepage card #1). ✅
3. **Design contrast is real.** Current site = photography + tabbed services + card grid. Our system (mesh, orb, product-UI composites, tabular metrics) is a clear visual upgrade — lean into it for **UI & Creativity (15%)**.
4. **Legal-entity discrepancy persists** ("TERRA CONSULTANT" © vs. "Terra Digital Ventures Co., Ltd."). Reconcile before publishing footer copy.

## 5. Actions
- [ ] Add `source: to verify` flags to the founding-story / "75+ years" claims (done in dependent docs — see below).
- [ ] Confirm founding story, combined-experience figure, and any client names/logos with a Terra stakeholder before they go live (mandatory req #4 social proof depends on this).
- [ ] Capture a screenshot of the current homepage for the Demo Day before/after ([[Demo Day Plan]]).
- [ ] Decide footer legal entity wording.

## Related
[[TDV Brand Fact Sheet]] · [[Differentiation & Positioning Brief]] · [[Messaging & Copy Deck]] · [[Content Inventory]] · [[Competitor Research & Positioning Analysis]]
