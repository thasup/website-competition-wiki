import React from 'react';

/**
 * Terra Metric — a big tabular-figure number with label and optional delta.
 * Every money/numeric cell uses tabular figures — the brand's financial-data signal.
 */
export function Metric({
  label,
  value,
  unit,
  delta,
  deltaDirection = 'up',
  align = 'left',
  onDark = false,
  style,
  ...rest
}) {
  const deltaColor = deltaDirection === 'down' ? 'var(--tdv-terracotta)' : 'var(--tdv-swamp)';
  return (
    <div style={{ textAlign: align, ...style }} {...rest}>
      {label && (
        <div style={{
          font: 'var(--type-eyebrow)',
          letterSpacing: 'var(--track-eyebrow)',
          textTransform: 'uppercase',
          color: onDark ? 'var(--tdv-on-dark-mute)' : 'var(--tdv-cerulean-ink)',
          marginBottom: 8,
        }}>{label}</div>
      )}
      <div style={{
        font: 'var(--type-metric)',
        letterSpacing: 'var(--track-metric)',
        color: onDark ? 'var(--text-on-dark)' : 'var(--text-strong)',
        fontVariantNumeric: 'tabular-nums',
        display: 'flex',
        alignItems: 'baseline',
        gap: 6,
        justifyContent: align === 'center' ? 'center' : align === 'right' ? 'flex-end' : 'flex-start',
      }}>
        <span>{value}</span>
        {unit && <span style={{ font: 'var(--type-heading-md)', color: onDark ? 'var(--tdv-on-dark-mute)' : 'var(--text-muted)' }}>{unit}</span>}
        {delta && (
          <span style={{ font: 'var(--fw-medium) 14px/1 var(--font-sans)', color: deltaColor, fontVariantNumeric: 'tabular-nums' }}>
            {deltaDirection === 'down' ? '▾' : '▴'} {delta}
          </span>
        )}
      </div>
    </div>
  );
}
