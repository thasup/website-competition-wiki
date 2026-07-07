import * as React from 'react';

export interface OrbProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Diameter in px. */
  size?: number;
  /** Slow ambient float (the signature animated moment). */
  drift?: boolean;
  /** Soft outer glow. */
  glow?: boolean;
  /** Use the exact brand image instead of the CSS sphere. */
  src?: string;
}

/** The signature Terra light source — a Cerulean-to-Viridian sphere with soft glow and slow drift. */
export function Orb(props: OrbProps): JSX.Element;
