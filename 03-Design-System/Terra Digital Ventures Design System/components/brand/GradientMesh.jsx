import React from 'react';
import { Orb } from './Orb.jsx';

/**
 * Terra Orb Mesh — the signature hero backdrop.
 * An earth-to-sky wash (Viridian → Swamp → Cerulean → Light Tawny → Terra Cotta) of
 * layered organic blobs across the upper region, fading to the page canvas, with the
 * Orb as focal light. Wrap hero content as children.
 */
export function GradientMesh({
  height = 'auto',
  orb = true,
  orbSize = 132,
  orbTop = 48,
  orbLeft = 64,
  fade = '#ffffff',
  style,
  children,
  ...rest
}) {
  const mesh = {
    position: 'relative',
    height,
    overflow: 'hidden',
    background:
      'radial-gradient(58% 92% at 12% 4%, rgba(82,155,201,0.82) 0%, rgba(82,155,201,0) 60%),' +
      'radial-gradient(54% 82% at 40% -10%, rgba(53,120,135,0.70) 0%, rgba(53,120,135,0) 62%),' +
      'radial-gradient(62% 92% at 72% -2%, rgba(231,214,205,0.92) 0%, rgba(231,214,205,0) 60%),' +
      'radial-gradient(50% 82% at 97% 8%, rgba(117,42,25,0.50) 0%, rgba(117,42,25,0) 60%),' +
      `linear-gradient(180deg, rgba(0,56,73,0.10) 0%, ${fade} 60%)`,
    backgroundColor: fade,
    ...style,
  };

  return (
    <div style={mesh} {...rest}>
      {orb && (
        <div style={{ position: 'absolute', top: orbTop, left: orbLeft, pointerEvents: 'none' }}>
          <Orb size={orbSize} />
        </div>
      )}
      {children}
    </div>
  );
}
