// Terra marketing site — footer
const { Orb } = window.TerraDigitalVenturesDesignSystem_f41591;

function Footer() {
  const cols = [
    ['Platform', ['Payments', 'Treasury', 'Data rails', 'Settlement', 'Status']],
    ['Developers', ['Documentation', 'API reference', 'SDKs', 'Changelog']],
    ['Company', ['About', 'Careers', 'Newsroom', 'Contact']],
    ['Legal', ['Privacy', 'Terms', 'Compliance', 'Security']],
  ];
  const head = { font: 'var(--type-eyebrow)', letterSpacing: 'var(--track-eyebrow)', textTransform: 'uppercase', color: 'var(--text-faint)', marginBottom: 14 };
  const li = { font: 'var(--type-body-sm)', color: 'var(--text-muted)', marginBottom: 10, cursor: 'pointer' };
  return (
    <footer style={{ background: 'var(--surface-page)', borderTop: '1px solid var(--border-default)', padding: '64px 40px 40px' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', display: 'flex', gap: 48 }}>
        <div style={{ flex: '0 0 220px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
            <Orb size={28} drift={false} />
            <img src="../../assets/terra-logo-dark.png" alt="terra" style={{ height: 22 }} />
          </div>
          <p style={{ font: 'var(--type-body-sm)', color: 'var(--text-muted)', maxWidth: 200 }}>
            Financial infrastructure for ventures that compound.
          </p>
        </div>
        <div style={{ flex: 1, display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 32 }}>
          {cols.map(([h, items], i) => (
            <div key={i}>
              <div style={head}>{h}</div>
              {items.map((it, j) => <div key={j} style={li}>{it}</div>)}
            </div>
          ))}
        </div>
      </div>
      <div style={{ maxWidth: 1200, margin: '40px auto 0', paddingTop: 24, borderTop: '1px solid var(--border-default)', display: 'flex', justifyContent: 'space-between', font: 'var(--type-caption)', color: 'var(--text-faint)' }}>
        <span>© 2026 Terra Digital Ventures. All rights reserved.</span>
        <span>Bangkok · Singapore · London</span>
      </div>
    </footer>
  );
}
window.Footer = Footer;
