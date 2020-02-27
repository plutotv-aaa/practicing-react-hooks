import { Breakpoints } from "./createBreakpoints";
import { Spacing } from "./createSpacing";
import { CSSProperties } from "../theme/withStyles";

export interface Mixins {
  gutters: (styles?: CSSProperties) => CSSProperties;
  toolbar: CSSProperties;
  // ... use interface declaration merging to add custom mixins
}

export interface MixinsOptions extends Partial<Mixins> {
  // ... use interface declaration merging to add custom mixin options
}

export default function createMixins(
  breakpoints: Breakpoints,
  spacing: Spacing,
  mixins: MixinsOptions
): Mixins;
