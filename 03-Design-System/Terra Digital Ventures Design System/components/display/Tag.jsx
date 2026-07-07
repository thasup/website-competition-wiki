import React from 'react';

/**
 * Terra Tag — soft pill for labels, categories, and status.
 * Default is the subdued Cerulean; earth tones available for data-viz legends.
 */
export function Tag({ tone = 'cerulean', children, style, ...rest }) {
  const tones = {
    cerulean: { background: 'var(--tdv-cerulean-soft)', color: 'var(--tdv-cerulean-press)' },
    neutral:  { background: 'var(--tdv-frost)', color: 'var(--text-body)' },
    laurel:   { background: 'var(--tdv-laurel)', color: 'var(--tdv-viridian)' },
    tawny:    { background: 'var(--tdv-light-tawny)', color: 'var(--tdv-sienna)' },
    sienna:   { background: 'rgba(124,75,60,0.14)', color: 'var(--tdv-sienna)' },
  };
  const v = tones[tone] || tones.cerulean;
  const styles = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: 6,
    padding: '4px 10px',
    borderRadius: 'var(--radius-pill)',
    font: 'var(--fw-semibold) 11px/1.2 var(--font-sans)',
    letterSpacing: '0.06em',
    textTransform: 'uppercase',
    whiteSpace: 'nowrap',
    ...v,
    ...style,
  };
  return <span style={styles} {...rest}>{children}</span>;
}
