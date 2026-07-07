import * as React from 'react';

export interface GradientMeshProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Fixed height, or `auto` to size to content. */
  height?: number | string;
  /** Render the focal Orb. */
  orb?: boolean;
  orbSize?: number;
  orbTop?: number;
  orbLeft?: number;
  /** Color the wash fades into (match the section below). */
  fade?: string;
  children?: React.ReactNode;
}

/**
 * The signature hero backdrop — an earth-to-sky wash of layered organic blobs with the Orb
 * as focal light. Non-negotiable on marketing heroes; wrap hero content as children.
 *
 * @startingPoint section="Brand" subtitle="Signature orb-mesh hero backdrop" viewport="1200x520"
 */
export function GradientMesh(props: GradientMeshProps): JSX.Element;
