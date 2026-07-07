Button — the single filled CTA of the system. Use for the primary action in any band (`primary`), the lesser action (`secondary`/`ghost`), or actions on dark surfaces (`on-dark`).

```jsx
<Button variant="primary">Start building</Button>
<Button variant="secondary">Contact sales</Button>
<Button variant="on-dark" size="sm">View docs</Button>
<Button href="/pricing">See pricing</Button>
```

Variants: `primary` (filled Cerulean — one per band), `secondary` (Cerulean outline on light), `ghost` (quiet), `on-dark` (translucent, for Taupe/Viridian bands). Sizes: `md` (default, 44px) · `sm`. Props: `disabled`, `fullWidth`, `href`/`as`.
