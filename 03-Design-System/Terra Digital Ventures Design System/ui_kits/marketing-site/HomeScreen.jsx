// Terra marketing site — Home
const { Button, Card, Tag, Metric, GradientMesh, Orb } = window.TerraDigitalVenturesDesignSystem_f41591;

function DashboardMockup() {
  const rows = [
    ['acq_9f2', 'Settled', '$12,480.00', 'Swamp'],
    ['acq_7b1', 'Pending', '$3,905.20', 'Cerulean'],
    ['acq_5c8', 'Settled', '$48,120.75', 'Swamp'],
    ['acq_2a4', 'Review', '$1,204.00', 'Sienna'],
  ];
  const dot = { Swamp: 'var(--tdv-swamp)', Cerulean: 'var(--tdv-cerulean)', Sienna: 'var(--tdv-sienna)' };
  const bars = [38, 52, 44, 68, 60, 82, 74, 96];
  return (
    <Card variant="mockup" style={{ width: 520, padding: 0, overflow: 'hidden' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '14px 18px', borderBottom: '1px solid var(--border-default)' }}>
        <span style={{ width: 10, height: 10, borderRadius: '50%', background: 'var(--tdv-terracotta)' }} />
        <span style={{ width: 10, height: 10, borderRadius: '50%', background: 'var(--tdv-light-tawny)' }} />
        <span style={{ width: 10, height: 10, borderRadius: '50%', background: 'var(--tdv-laurel)' }} />
        <span style={{ marginLeft: 8, font: 'var(--type-caption)', color: 'var(--text-muted)' }}>dashboard.terra.co / settlement</span>
      </div>
      <div style={{ display: 'flex' }}>
        <div style={{ flex: '1 1 60%', padding: 18, borderRight: '1px solid var(--border-default)' }}>
          <div style={{ font: 'var(--type-eyebrow)', letterSpacing: 'var(--track-eyebrow)', textTransform: 'uppercase', color: 'var(--tdv-cerulean-ink)', marginBottom: 12 }}>Recent settlements</div>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontVariantNumeric: 'tabular-nums' }}>
            <tbody>
              {rows.map((r, i) => (
                <tr key={i} style={{ borderTop: i ? '1px solid var(--border-default)' : 'none' }}>
                  <td style={{ padding: '9px 0', font: 'var(--type-body-sm)', color: 'var(--text-muted)' }}>{r[0]}</td>
                  <td style={{ padding: '9px 0' }}>
                    <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6, font: 'var(--type-caption)', color: 'var(--text-body)' }}>
                      <span style={{ width: 7, height: 7, borderRadius: '50%', background: dot[r[3]] }} />{r[1]}
                    </span>
                  </td>
                  <td style={{ padding: '9px 0', textAlign: 'right', font: 'var(--fw-medium) 14px/1.4 var(--font-sans)', color: 'var(--text-strong)', fontVariantNumeric: 'tabular-nums' }}>{r[2]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div style={{ flex: '1 1 40%', padding: 18 }}>
          <div style={{ font: 'var(--type-eyebrow)', letterSpacing: 'var(--track-eyebrow)', textTransform: 'uppercase', color: 'var(--tdv-cerulean-ink)', marginBottom: 12 }}>Volume · 7d</div>
          <div style={{ display: 'flex', alignItems: 'flex-end', gap: 6, height: 92 }}>
            {bars.map((h, i) => (
              <div key={i} style={{ flex: 1, height: h + '%', borderRadius: '3px 3px 0 0',
                background: i === bars.length - 1 ? 'var(--tdv-cerulean)' : 'var(--tdv-cerulean-soft)' }} />
            ))}
          </div>
          <div style={{ marginTop: 14, font: 'var(--type-metric)', fontSize: 26, color: 'var(--text-strong)', fontVariantNumeric: 'tabular-nums', letterSpacing: 'var(--track-metric)' }}>$3.48M</div>
          <div style={{ font: 'var(--type-caption)', color: 'var(--tdv-swamp)' }}>▴ 12.4% vs last week</div>
        </div>
      </div>
    </Card>
  );
}

function FeatureIcon({ name }) {
  return <i data-lucide={name} style={{ width: 22, height: 22, color: 'var(--tdv-cerulean-ink)' }}></i>;
}

function HomeScreen({ setPage }) {
  const features = [
    ['route', 'Unified rails', 'One integration for payments, treasury, and settlement across markets.'],
    ['bar-chart-3', 'Data analytics', 'Every flow instrumented — reconcile, forecast, and report in real time.'],
    ['shield-check', 'Compliance built in', 'KYC, sanctions, and audit trails handled at the infrastructure layer.'],
  ];
  const wrap = { maxWidth: 1200, margin: '0 auto', padding: '0 40px' };
  return (
    <div>
      {/* Hero */}
      <GradientMesh fade="#ffffff" style={{ paddingBottom: 40 }}>
        <div style={{ ...wrap, paddingTop: 64, paddingBottom: 8 }}>
          <div style={{ maxWidth: 620 }}>
            <span className="eyebrow">Financial infrastructure</span>
            <h1 style={{ font: 'var(--type-display-xxl)', letterSpacing: 'var(--track-display)', color: 'var(--text-strong)', margin: '16px 0 0' }}>
              Move capital on Terra rails
            </h1>
            <p style={{ font: 'var(--type-body-lg)', color: 'var(--text-body)', margin: '20px 0 28px', maxWidth: 520 }}>
              One set of rails for payments, treasury, and settlement — instrumented end to end, so every venture you back can compound.
            </p>
            <div style={{ display: 'flex', gap: 14, alignItems: 'center' }}>
              <Button variant="primary" onClick={() => setPage('pricing')}>Start building</Button>
              <Button variant="secondary" onClick={() => setPage('platform')}>Explore the platform</Button>
            </div>
            <p style={{ font: 'var(--type-caption)', color: 'var(--text-muted)', marginTop: 20 }}>
              Trusted by 240+ ventures · SOC 2 Type II · 99.99% uptime
            </p>
          </div>
          <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: -60 }}>
            <DashboardMockup />
          </div>
        </div>
      </GradientMesh>

      {/* Logo strip */}
      <div style={{ background: 'var(--surface-page)', padding: '8px 0 48px' }}>
        <div style={{ ...wrap, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 24, flexWrap: 'wrap' }}>
          {['NORTHWIND', 'Meridian', 'ARC Capital', 'Loomis', 'Verano', 'Halcyon'].map((n, i) => (
            <span key={i} style={{ font: 'var(--fw-semibold) 18px/1 var(--font-sans)', color: 'var(--text-faint)', letterSpacing: '0.02em' }}>{n}</span>
          ))}
        </div>
      </div>

      {/* Metrics band */}
      <div style={{ background: 'var(--surface-soft)', padding: '72px 0', borderTop: '1px solid var(--border-default)', borderBottom: '1px solid var(--border-default)' }}>
        <div style={{ ...wrap, display: 'flex', justifyContent: 'space-between', gap: 32 }}>
          <Metric label="Volume settled" value="$14.2B" delta="18%" />
          <Metric label="Ventures live" value="240" unit="+" />
          <Metric label="Markets" value="38" />
          <Metric label="Uptime" value="99.99" unit="%" />
        </div>
      </div>

      {/* Features */}
      <div style={{ background: 'var(--surface-page)', padding: '96px 0' }}>
        <div style={wrap}>
          <span className="eyebrow">Why Terra</span>
          <h2 style={{ font: 'var(--type-display-lg)', letterSpacing: 'var(--track-display)', color: 'var(--text-strong)', margin: '14px 0 40px', maxWidth: 640 }}>
            The product is the argument
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 24 }}>
            {features.map(([icon, title, body], i) => (
              <Card key={i} variant="feature" interactive>
                <div style={{ width: 44, height: 44, borderRadius: 'var(--radius-md)', background: 'var(--tdv-cerulean-subtle)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 18 }}>
                  <FeatureIcon name={icon} />
                </div>
                <h3 style={{ font: 'var(--type-heading-lg)', color: 'var(--text-strong)', marginBottom: 8 }}>{title}</h3>
                <p style={{ font: 'var(--type-body-md)', color: 'var(--text-body)' }}>{body}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Warm interlude */}
      <div style={{ background: 'var(--surface-warm)', padding: '80px 0' }}>
        <div style={{ ...wrap, maxWidth: 860, textAlign: 'center' }}>
          <Tag tone="tawny">Customer story</Tag>
          <p style={{ font: 'var(--type-display-md)', color: 'var(--text-strong)', letterSpacing: 'var(--track-heading)', margin: '20px 0 24px', lineHeight: 1.3 }}>
            "We replaced four vendors with Terra and cut settlement time from days to minutes."
          </p>
          <p style={{ font: 'var(--type-body-md)', color: 'var(--tdv-sienna)' }}>Priya N. · Head of Treasury, Meridian</p>
        </div>
      </div>

      {/* Dark CTA */}
      <div style={{ background: 'var(--surface-deep)', padding: '96px 0', position: 'relative', overflow: 'hidden' }}>
        <div style={{ ...wrap, position: 'relative', textAlign: 'center', maxWidth: 720 }}>
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 24 }}>
            {Orb && <Orb size={72} />}
          </div>
          <h2 style={{ font: 'var(--type-display-lg)', letterSpacing: 'var(--track-display)', color: 'var(--text-on-dark)', marginBottom: 16 }}>
            Build your next venture on Terra
          </h2>
          <p style={{ font: 'var(--type-body-lg)', color: 'var(--tdv-on-dark-mute)', marginBottom: 32 }}>
            Start in test mode in minutes. Go live when you're ready.
          </p>
          <div style={{ display: 'flex', gap: 14, justifyContent: 'center' }}>
            <Button variant="primary" onClick={() => setPage('pricing')}>Start building</Button>
            <Button variant="on-dark" onClick={() => setPage('platform')}>Talk to sales</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
window.HomeScreen = HomeScreen;
