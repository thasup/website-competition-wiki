import * as React from 'react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Visual style. `primary` is the filled Cerulean CTA — use one per band. */
  variant?: 'primary' | 'secondary' | 'ghost' | 'on-dark';
  /** Size. `md` is the default 44px touch target. */
  size?: 'md' | 'sm';
  disabled?: boolean;
  /** Stretch to fill the container width. */
  fullWidth?: boolean;
  /** Render as another element; `a` when `href` is set. */
  as?: 'button' | 'a';
  href?: string;
  children?: React.ReactNode;
}

/**
 * The single-accent CTA. Cerulean is the only filled button color in the system —
 * limit to one filled `primary` per band; pair with `secondary` for the lesser action.
 *
 * @startingPoint section="Forms" subtitle="Cerulean single-accent CTA" viewport="700x150"
 */
export function Button(props: ButtonProps): JSX.Element;
