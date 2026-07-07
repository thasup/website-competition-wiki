import React from 'react';

/**
 * Terra Orb — the signature light source.
 * Rendered as a CSS sphere (white hotspot → Cerulean → Viridian edge) with a soft glow,
 * so it is fully portable. Pass `src` to use the exact brand image instead.
 * `drift` adds the slow ambient float that covers the signature animated moment.
 */
export function Orb({ size = 120, drift = true, glow = true, src, style, ...rest }) {
  const sphere = src ? {
    backgroundImage: `url(${src})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  } : {
    background:
      'radial-gradient(circle at 32% 26%, #ffffff 0%, #dbe9f2 12%, #7cb0d3 38%, #529bc9 58%, #2e6e99 78%, #003849 100%)',
  };

  const styles = {
    width: size,
    height: size,
    borderRadius: '50%',
    flex: 'none',
    filter: glow ? 'drop-shadow(var(--orb-glow))' : 'none',
    animation: drift ? 'tdv-orb-drift 9s var(--ease-inout, ease-in-out) infinite' : 'none',
    ...sphere,
    ...style,
  };

  return (
    <React.Fragment>
      <style>{`@keyframes tdv-orb-drift {
        0%,100% { transform: translate(0,0); }
        50% { transform: translate(10px, 12px); }
      }
      @media (prefers-reduced-motion: reduce) {
        [data-tdv-orb] { animation: none !important; }
      }`}</style>
      <div data-tdv-orb style={styles} aria-hidden="true" {...rest} />
    </React.Fragment>
  );
}
