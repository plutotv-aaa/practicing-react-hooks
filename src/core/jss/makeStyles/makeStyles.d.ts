import {
  ClassNameMap,
  PropsOfStyles,
  Styles,
  WithStylesOptions,
} from '../theme/withStyles';
import { Omit } from '../types';
import { DefaultTheme } from '../theme/defaultTheme';

/**
 * `makeStyles` where the passed `style` do not depend on props
 */
export default function makeStyles<Theme = DefaultTheme, ClassKey extends string = string>(
  style: Styles<Theme, {}, ClassKey>,
  options?: Omit<WithStylesOptions<Theme>, 'withTheme'>,
): (props?: any) => ClassNameMap<ClassKey>;
/**
 * `makeStyles` where the passed `style` do depend on props
 */
export default function makeStyles<
  Theme = DefaultTheme,
  Props extends {} = {},
  ClassKey extends string = string
>(
  style: Styles<Theme, Props, ClassKey>,
  options?: Omit<WithStylesOptions<Theme>, 'withTheme'>,
): (props: Props) => ClassNameMap<ClassKey>;
