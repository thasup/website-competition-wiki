import * as React from 'react';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Surface treatment. */
  variant?: 'feature' | 'featured' | 'warm' | 'mockup';
  /** Adds hover lift + deeper shadow when the whole card is clickable. */
  interactive?: boolean;
  children?: React.ReactNode;
}

/**
 * Surface container. `feature` on white with a hairline, `featured` inverted on Taupe
 * (the distinctive dark tier), `warm` for Light-Tawny interludes, `mockup` for product-UI chrome.
 *
 * @startingPoint section="Surfaces" subtitle="Feature / featured / warm / mockup cards" viewport="700x260"
 */
export function Card(props: CardProps): JSX.Element;
