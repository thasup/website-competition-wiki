import React from 'react';

/**
 * Terra Card — surface container.
 * `feature` (white + hairline), `featured` (inverted Taupe), `warm` (Light-Tawny interlude),
 * `mockup` (product-UI chrome, deeper shadow).
 */
export function Card({
  variant = 'feature',
  interactive = false,
  style,
  children,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);

  const variants = {
    feature: {
      background: 'var(--surface-card)',
      color: 'var(--text-body)',
      border: '1px solid var(--border-default)',
      boxShadow: hover && interactive ? 'var(--shadow-2)' : 'var(--shadow-1)',
    },
    featured: {
      background: 'var(--surface-dark)',
      color: 'var(--tdv-on-dark-mute)',
      border: '1px solid transparent',
      boxShadow: 'var(--shadow-3)',
    },
    warm: {
      background: 'var(--surface-warm)',
      color: 'var(--text-body)',
      border: '1px solid transparent',
      boxShadow: 'none',
    },
    mockup: {
      background: 'var(--surface-card)',
      color: 'var(--text-body)',
      border: '1px solid var(--border-default)',
      boxShadow: hover && interactive ? 'var(--shadow-3)' : 'var(--shadow-2)',
    },
  };

  const v = variants[variant] || variants.feature;

  const styles = {
    borderRadius: variant === 'mockup' ? 'var(--radius-xl)' : 'var(--radius-lg)',
    padding: variant === 'mockup' ? 'var(--pad-mockup)' : 'var(--pad-card)',
    transition: 'box-shadow var(--dur-base) var(--ease-out), transform var(--dur-base) var(--ease-out)',
    transform: hover && interactive ? 'translateY(-2px)' : 'none',
    cursor: interactive ? 'pointer' : 'default',
    ...v,
    ...style,
  };

  return (
    <div
      style={styles}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      {...rest}
    >
      {children}
    </div>
  );
}
