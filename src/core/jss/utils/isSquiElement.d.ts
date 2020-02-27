import * as React from 'react';
import { StandardProps } from '../';

export type NamedSquiComponent = React.ComponentType & { squiName: string };

export interface NamedSquiElement {
  type: NamedSquiComponent;
  props: StandardProps<{}, never>;
  key: string | number | null;
}

export default function isSquiElement(element: any, squiNames: string[]): element is NamedSquiElement;
