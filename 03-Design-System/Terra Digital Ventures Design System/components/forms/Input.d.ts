import * as React from 'react';

export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'prefix' | 'size'> {
  type?: string;
  size?: 'md' | 'sm';
  /** Error state — border swaps to Terra Cotta. */
  invalid?: boolean;
  disabled?: boolean;
  /** Leading adornment (icon or text). */
  prefix?: React.ReactNode;
  /** Trailing adornment (icon or text). */
  suffix?: React.ReactNode;
}

/**
 * Text field with a Cerulean focus ring. Numeric inputs render tabular figures automatically.
 */
export function Input(props: InputProps): JSX.Element;
