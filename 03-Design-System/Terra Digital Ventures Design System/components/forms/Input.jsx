import React from 'react';

/**
 * Terra Input — text field with Cerulean focus ring.
 * Pairs with Label; supports optional leading/trailing adornment.
 */
export function Input({
  type = 'text',
  size = 'md',
  invalid = false,
  disabled = false,
  prefix,
  suffix,
  style,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);

  const pad = size === 'sm' ? '7px 10px' : '10px 12px';
  const font = size === 'sm' ? 'var(--type-body-sm)' : 'var(--type-body-md)';

  const wrap = {
    display: 'flex',
    alignItems: 'center',
    gap: 8,
    background: disabled ? 'var(--surface-frost)' : 'var(--surface-card)',
    border: '1px solid ' + (invalid ? 'var(--tdv-terracotta)'
      : focus ? 'var(--border-focus)' : 'var(--border-input)'),
    borderRadius: 'var(--radius-sm)',
    padding: pad,
    boxShadow: focus ? 'var(--ring-focus)' : 'none',
    transition: 'border-color var(--dur-fast) var(--ease-out), box-shadow var(--dur-fast) var(--ease-out)',
    opacity: disabled ? 0.6 : 1,
    ...style,
  };

  const input = {
    flex: 1,
    minWidth: 0,
    border: 'none',
    outline: 'none',
    background: 'transparent',
    font,
    color: 'var(--text-strong)',
    fontVariantNumeric: type === 'number' ? 'tabular-nums' : undefined,
  };

  const adorn = { color: 'var(--text-muted)', font, display: 'inline-flex', alignItems: 'center' };

  return (
    <div style={wrap}>
      {prefix && <span style={adorn}>{prefix}</span>}
      <input
        type={type}
        disabled={disabled}
        style={input}
        onFocus={(e) => { setFocus(true); rest.onFocus && rest.onFocus(e); }}
        onBlur={(e) => { setFocus(false); rest.onBlur && rest.onBlur(e); }}
        {...rest}
      />
      {suffix && <span style={adorn}>{suffix}</span>}
    </div>
  );
}
