// Terra marketing site — top navigation
const { Button } = window.TerraDigitalVenturesDesignSystem_f41591;

function Nav({ page, setPage, onDark = false }) {
  const link = {
    font: 'var(--type-body-sm)',
    color: onDark ? 'var(--tdv-on-dark-mute)' : 'var(--text-body)',
    cursor: 'pointer',
    padding: '6px 2px',
    background: 'none', border: 'none',
    fontFamily: 'var(--font-sans)',
  };
  const links = [['Platform','platform'],['Pricing','pricing'],['Developers','platform'],['Company','home']];
  return (
    <nav style={{
      display: 'flex', alignItems: 'center', gap: 32,
      padding: '18px 40px', maxWidth: 1200, margin: '0 auto',
    }}>
      <img
        src={onDark ? '../../assets/terra-logo-light.png' : '../../assets/terra-logo-dark.png'}
        alt="terra" style={{ height: 26, cursor: 'pointer' }} onClick={() => setPage('home')} />
      <div style={{ display: 'flex', gap: 26, marginLeft: 8 }}>
        {links.map(([label, target], i) => (
          <button key={i} style={{ ...link, color: page === target && !onDark ? 'var(--tdv-cerulean-ink)' : link.color }}
            onClick={() => setPage(target)}>{label}</button>
        ))}
      </div>
      <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: 16 }}>
        <button style={{ ...link, fontWeight: 500 }} onClick={() => setPage('pricing')}>Sign in</button>
        <Button variant={onDark ? 'on-dark' : 'primary'} size="sm" onClick={() => setPage('pricing')}>Start building</Button>
      </div>
    </nav>
  );
}
window.Nav = Nav;
