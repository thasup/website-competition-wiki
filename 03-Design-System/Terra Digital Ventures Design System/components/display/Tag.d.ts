import * as React from 'react';

export interface TagProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Color tone. `cerulean` is the default; earth tones for data-viz legends. */
  tone?: 'cerulean' | 'neutral' | 'laurel' | 'tawny' | 'sienna';
  children?: React.ReactNode;
}

/** Soft uppercase pill for labels, categories, and status chips. */
export function Tag(props: TagProps): JSX.Element;
