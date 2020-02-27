import { Theme } from '../create/createPlutoTVTheme';
import { Breakpoint } from '../create/createBreakpoints';
import { Variant } from '../create/createTypography';

export interface ResponsiveFontSizesOptions {
  breakpoints?: Breakpoint[];
  disableAlign?: boolean;
  factor?: number;
  variants?: Variant[];
}

export default function responsiveFontSizes(
  theme: Theme,
  options?: ResponsiveFontSizesOptions,
): Theme;
