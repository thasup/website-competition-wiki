import * as React from 'react';

export interface MetricProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Eyebrow label above the number. */
  label?: string;
  /** The figure — rendered with tabular numerics. */
  value: React.ReactNode;
  /** Trailing unit (%, ms, /mo). */
  unit?: string;
  /** Optional change indicator (e.g. "12.4%"). */
  delta?: string;
  deltaDirection?: 'up' | 'down';
  align?: 'left' | 'center' | 'right';
  /** Invert colors for dark bands. */
  onDark?: boolean;
}

/** A large tabular-figure metric with label and optional delta — the financial-data signal. */
export function Metric(props: MetricProps): JSX.Element;
