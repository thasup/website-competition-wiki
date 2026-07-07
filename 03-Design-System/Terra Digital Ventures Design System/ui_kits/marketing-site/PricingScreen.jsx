// Terra marketing site — Pricing
const { Button, Card, Tag, Metric } = window.TerraDigitalVenturesDesignSystem_f41591;

function Check({ onDark }) {
  return <i data-lucide="check" style={{ width: 16, height: 16, color: onDark ? 'var(--tdv-laurel)' : 'var(--tdv-swamp)', flex: 'none', marginTop: 3 }}></i>;
}

function PricingCard({ tier, price, unit, blurb, features, featured, cta }) {
  const onDark = featured;
  return (
    <Card variant={featured ? 'featured' : 'feature'} style={{ display: 'flex', flexDirection: 'column', position: 'relative' }}>
      {featured && <div style={{ position: 'absolute', top: 20, right: 20 }}><Tag tone="cerulean">Most popular</Tag></div>}
      <h3 style={{ font: 'var(--type-heading-lg)', color: onDark ? 'var(--text-on-dark)' : 'var(--text-strong)', marginBottom: 6 }}>{tier}</h3>
      <p style={{ font: 'var(--type-body-sm)', color: onDark ? 'var(--tdv-on-dark-mute)' : 'var(--text-muted)', marginBottom: 20, minHeight: 40 }}>{blurb}</p>
      <div style={{ display: 'flex', alignItems: 'baseline', gap: 6, marginBottom: 24 }}>
        <span style={{ font: 'var(--type-metric)', color: onDark ? 'var(--text-on-dark)' : 'var(--text-strong)', fontVariantNumeric: 'tabular-nums', letterSpacing: 'var(--track-metric)' }}>{price}</span>
        {unit && <span style={{ font: 'var(--type-body-md)', color: onDark ? 'var(--tdv-on-dark-mute)' : 'var(--text-muted)' }}>{unit}</span>}
      </div>
      <Button variant={featured ? 'primary' : 'secondary'} fullWidth>{cta}</Button>
      <div style={{ marginTop: 24, display: 'flex', flexDirection: 'column', gap: 12 }}>
        {features.map((f, i) => (
          <div key={i} style={{ display: 'flex', gap: 10 }}>
            <Check onDark={onDark} />
            <span style={{ font: 'var(--type-body-sm)', color: onDark ? 'var(--tdv-on-dark-mute)' : 'var(--text-body)' }}>{f}</span>
          </div>
        ))}
      </div>
    </Card>
  );
}

function PricingScreen() {
  const wrap = { maxWidth: 1200, margin: '0 auto', padding: '0 40px' };
  return (
    <div style={{ background: 'var(--surface-page)' }}>
      <div style={{ ...wrap, paddingTop: 72, textAlign: 'center', maxWidth: 720 }}>
        <span className="eyebrow">Pricing</span>
        <h1 style={{ font: 'var(--type-display-xl)', letterSpacing: 'var(--track-display)', color: 'var(--text-strong)', margin: '16px 0 16px' }}>
          Pay for what settles
        </h1>
        <p style={{ font: 'var(--type-body-lg)', color: 'var(--text-body)' }}>
          Transparent, volume-based pricing. No platform fees, no minimums — start in test mode for free.
        </p>
      </div>

      <div style={{ ...wrap, paddingTop: 48, paddingBottom: 40 }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 24, alignItems: 'stretch' }}>
          <PricingCard tier="Starter" price="$0" unit="/mo" cta="Start free"
            blurb="For prototypes and early ventures finding fit."
            features={['Up to $50k/mo volume', '0.9% per settlement', 'Core payments API', 'Community support']} />
          <PricingCard tier="Growth" price="$499" unit="/mo" featured cta="Start building"
            blurb="For ventures scaling across markets."
            features={['Up to $2M/mo volume', '0.6% per settlement', 'Treasury + data rails', 'Priority support', 'Sandbox & staging']} />
          <PricingCard tier="Scale" price="Custom" cta="Contact sales"
            blurb="For platforms with bespoke settlement needs."
            features={['Unlimited volume', 'Negotiated rates', 'Dedicated infrastructure', 'Named solutions engineer', 'Custom compliance']} />
        </div>
      </div>

      {/* Metrics reassurance */}
      <div style={{ background: 'var(--surface-soft)', padding: '64px 0', borderTop: '1px solid var(--border-default)' }}>
        <div style={{ ...wrap, display: 'flex', justifyContent: 'space-between', gap: 32 }}>
          <Metric label="Avg. settlement" value="1.8" unit="min" deltaDirection="down" delta="41%" />
          <Metric label="Effective rate" value="0.62" unit="%" />
          <Metric label="Volume settled" value="$14.2B" delta="18%" />
          <Metric label="Support SLA" value="< 4" unit="hr" />
        </div>
      </div>
    </div>
  );
}
window.PricingScreen = PricingScreen;
