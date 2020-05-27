import * as React from 'react';
import { Omit } from './types';
import { StyledComponentProps } from './theme';
export { StyledComponentProps };
export { Omit };

/**
 * All standard components exposed by `material-ui` are `StyledComponents` with
 * certain `classes`, on which one can also set a top-level `className` and inline
 * `style`.
 */
export type StandardProps<C, ClassKey extends string, Removals extends keyof C = never> = Omit<
  C,
  'classes' | Removals
> &
  StyledComponentProps<ClassKey> & {
    className?: string;
    ref?: C extends { ref?: infer RefType } ? RefType : React.Ref<unknown>;
    style?: React.CSSProperties;
  };

export type PaletteType = 'light' | 'dark';
export interface Color {
  50: string;
  100: string;
  200: string;
  300: string;
  400: string;
  500: string;
  600: string;
  700: string;
  800: string;
  900: string;
  A100: string;
  A200: string;
  A400: string;
  A700: string;
}

export namespace PropTypes {
  type Alignment = 'inherit' | 'left' | 'center' | 'right' | 'justify';
  type Color = 'inherit' | 'primary' | 'secondary' | 'default';
  type Margin = 'none' | 'dense' | 'normal';
}

export { default as createGenerateClassName } from './create/createGenerateClassName';
export * from './create/createGenerateClassName';

export { default as getThemeProps } from './getThemeProps';
export * from './getThemeProps';

export { default as jssPreset } from './jssPreset';
export * from './jssPreset';

export { default as makeStyles } from './makeStyles';
export * from './makeStyles';

export { default as mergeClasses } from './mergeClasses';
export * from './mergeClasses';

export { default as StylesProvider } from './StylesProvider';
export * from './StylesProvider';

export { default as ThemeProvider } from './ThemeProvider';
export * from './ThemeProvider';

export { default as useTheme } from './useTheme';
export * from './useTheme';

export { default as withStyles } from './withStyles';
export * from './withStyles';

export { default as withTheme } from './theme/withTheme';
export * from './theme/withTheme';

export { DefaultTheme } from './theme/defaultTheme';
