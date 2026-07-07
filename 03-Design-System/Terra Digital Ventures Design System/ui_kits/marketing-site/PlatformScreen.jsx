// Terra marketing site — Platform / feature deep-dive
const { Button, Card, Tag, GradientMesh } = window.TerraDigitalVenturesDesignSystem_f41591;

function CodePanel() {
  const line = (indent, content) => (
    <div style={{ paddingLeft: indent * 16 }}>{content}</div>
  );
  const c = {
    key: 'var(--tdv-laurel)', str: 'var(--tdv-light-tawny)', fn: 'var(--tdv-cerulean)',
    mute: 'rgba(255,255,255,0.45)', txt: 'rgba(255,255,255,0.86)',
  };
  return (
    <div style={{ background: 'var(--tdv-taupe)', borderRadius: 'var(--radius-xl)', overflow: 'hidden', boxShadow: 'var(--shadow-3)' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '14px 18px', borderBottom: '1px solid var(--tdv-on-dark-line)' }}>
        <span style={{ width: 10, height: 10, borderRadius: '50%', background: 'var(--tdv-terracotta)' }} />
        <span style={{ width: 10, height: 10, borderRadius: '50%', background: 'var(--tdv-light-tawny)' }} />
        <span style={{ width: 10, height: 10, borderRadius: '50%', background: 'var(--tdv-laurel)' }} />
        <span style={{ marginLeft: 8, font: 'var(--type-caption)', color: c.mute }}>settle.ts</span>
      </div>
      <pre style={{ margin: 0, padding: 20, font: 'var(--fw-regular) 13px/1.7 ui-monospace, SFMono-Regular, Menlo, monospace', color: c.txt, fontVariantNumeric: 'tabular-nums' }}>
{line(0, <span><span style={{color:c.key}}>const</span> terra = <span style={{color:c.fn}}>Terra</span>(<span style={{color:c.str}}>process.env.TERRA_KEY</span>);</span>)}
<div style={{height:12}}></div>
{line(0, <span><span style={{color:c.key}}>const</span> settlement = <span style={{color:c.key}}>await</span> terra.settlements.<span style={{color:c.fn}}>create</span>({'{'}</span>)}
{line(1, <span>amount: <span style={{color:c.cerulean||c.str}}>1_248_000</span>,</span>)}
{line(1, <span>currency: <span style={{color:c.str}}>"THB"</span>,</span>)}
{line(1, <span>rail: <span style={{color:c.str}}>"instant"</span>,</span>)}
{line(0, <span>{'}'});</span>)}
<div style={{height:12}}></div>
{line(0, <span style={{color:c.mute}}>// → settled in 1.8min</span>)}
      </pre>
    </div>
  );
}

function PlatformScreen({ setPage }) {
  const wrap = { maxWidth: 1200, margin: '0 auto', padding: '0 40px' };
  const capabilities = [
    ['Payments', 'Accept and disburse across 38 markets with a single API.'],
    ['Treasury', 'Hold, convert, and sweep balances with programmable rules.'],
    ['Settlement', 'Instant or scheduled settlement with full reconciliation.'],
    ['Data rails', 'Every event streamed to your warehouse in real time.'],
  ];
  return (
    <div>
      <GradientMesh fade="var(--surface-page)" orbLeft={64} orbTop={40}>
        <div style={{ ...wrap, paddingTop: 72, paddingBottom: 56 }}>
          <div style={{ maxWidth: 560 }}>
            <span className="eyebrow">Platform · Payments</span>
            <h1 style={{ font: 'var(--type-display-xl)', letterSpacing: 'var(--track-display)', color: 'var(--text-strong)', margin: '16px 0 20px' }}>
              One API, every market
            </h1>
            <p style={{ font: 'var(--type-body-lg)', color: 'var(--text-body)', marginBottom: 28 }}>
              Integrate once and route capital anywhere Terra operates. The same primitives power payments, treasury, and settlement.
            </p>
            <div style={{ display: 'flex', gap: 14 }}>
              <Button variant="primary" onClick={() => setPage('pricing')}>Start building</Button>
              <Button variant="secondary">Read the docs</Button>
            </div>
          </div>
        </div>
      </GradientMesh>

      {/* Code + copy split */}
      <div style={{ background: 'var(--surface-page)', padding: '80px 0' }}>
        <div style={{ ...wrap, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 56, alignItems: 'center' }}>
          <div>
            <span className="eyebrow">Developer first</span>
            <h2 style={{ font: 'var(--type-display-md)', letterSpacing: 'var(--track-heading)', color: 'var(--text-strong)', margin: '14px 0 16px' }}>
              Settle money in three lines
            </h2>
            <p style={{ font: 'var(--type-body-md)', color: 'var(--text-body)', marginBottom: 20 }}>
              Typed SDKs, idempotent requests, and predictable errors. Move from test mode to production without changing a line.
            </p>
            <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
              <Tag tone="neutral">TypeScript</Tag><Tag tone="neutral">Python</Tag><Tag tone="neutral">Go</Tag><Tag tone="neutral">REST</Tag>
            </div>
          </div>
          <CodePanel />
        </div>
      </div>

      {/* Capabilities grid */}
      <div style={{ background: 'var(--surface-soft)', padding: '96px 0', borderTop: '1px solid var(--border-default)' }}>
        <div style={wrap}>
          <span className="eyebrow">Capabilities</span>
          <h2 style={{ font: 'var(--type-display-lg)', letterSpacing: 'var(--track-display)', color: 'var(--text-strong)', margin: '14px 0 40px' }}>
            The full stack of financial primitives
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: 20 }}>
            {capabilities.map(([t, b], i) => (
              <Card key={i} variant="feature" interactive style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}>
                <span style={{ font: 'var(--type-metric)', fontSize: 22, color: 'var(--tdv-cerulean)', fontVariantNumeric: 'tabular-nums' }}>{String(i + 1).padStart(2, '0')}</span>
                <div>
                  <h3 style={{ font: 'var(--type-heading-md)', color: 'var(--text-strong)', marginBottom: 6 }}>{t}</h3>
                  <p style={{ font: 'var(--type-body-md)', color: 'var(--text-body)' }}>{b}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
window.PlatformScreen = PlatformScreen;
