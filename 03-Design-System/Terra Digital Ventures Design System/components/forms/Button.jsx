import React from 'react';

/**
 * Terra Button — the single-accent CTA.
 * Cerulean is the ONLY filled color; one filled button per band.
 */
export function Button({
  variant = 'primary',
  size = 'md',
  disabled = false,
  fullWidth = false,
  as = 'button',
  href,
  children,
  onClick,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const [active, setActive] = React.useState(false);

  const sizes = {
    md: { padding: '11px 22px', font: 'var(--type-button)', minHeight: 44 },
    sm: { padding: '8px 16px', font: 'var(--fw-medium) 14px/1 var(--font-sans)', minHeight: 36 },
  };

  const variants = {
    primary: {
      background: active ? 'var(--color-primary-press)'
        : hover ? 'var(--color-primary-hover)' : 'var(--color-primary)',
      color: 'var(--color-on-primary)',
      border: '1px solid transparent',
    },
    secondary: {
      background: hover ? 'var(--tdv-cerulean-subtle)' : 'var(--surface-card)',
      color: 'var(--tdv-cerulean-ink)',
      border: '1px solid ' + (hover ? 'var(--color-primary)' : 'var(--tdv-cerulean-ink)'),
    },
    ghost: {
      background: hover ? 'var(--surface-frost)' : 'transparent',
      color: 'var(--text-strong)',
      border: '1px solid transparent',
    },
    'on-dark': {
      background: active ? 'rgba(255,255,255,0.16)'
        : hover ? 'rgba(255,255,255,0.12)' : 'rgba(255,255,255,0.08)',
      color: 'var(--text-on-dark)',
      border: '1px solid var(--tdv-on-dark-line)',
    },
  };

  const v = variants[variant] || variants.primary;
  const s = sizes[size] || sizes.md;

  const styles = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    padding: s.padding,
    font: s.font,
    minHeight: s.minHeight,
    width: fullWidth ? '100%' : 'auto',
    borderRadius: 'var(--radius-pill)',
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.45 : 1,
    textDecoration: 'none',
    whiteSpace: 'nowrap',
    transition: 'background var(--dur-fast) var(--ease-out), border-color var(--dur-fast) var(--ease-out), transform var(--dur-fast) var(--ease-out)',
    transform: active && !disabled ? 'translateY(1px)' : 'none',
    ...v,
    ...style,
  };

  const Tag = href ? 'a' : as;
  return (
    <Tag
      href={href}
      style={styles}
      onClick={disabled ? undefined : onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => { setHover(false); setActive(false); }}
      onMouseDown={() => setActive(true)}
      onMouseUp={() => setActive(false)}
      aria-disabled={disabled || undefined}
      {...rest}
    >
      {children}
    </Tag>
  );
}
