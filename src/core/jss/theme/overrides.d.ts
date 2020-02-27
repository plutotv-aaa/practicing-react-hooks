import { StyleRules } from './withStyles';

//List PlutoTV UI Components here.
// Example - import { ButtonClassKey } from "../Button";

// In file '../Button' there should live a type, example below:
// export type ButtonClassKey =
//   | 'root'
//   | 'label'
//   | 'text'
//   | 'textPrimary'
//   | 'textSecondary'
//   | 'outlined'
//   | 'outlinedPrimary'
//   | 'outlinedSecondary'
//   | 'contained'
//   | 'containedPrimary'
//   | 'containedSecondary'
//   | 'disableElevation'
//   | 'focusVisible'
//   | 'disabled'
//   | 'colorInherit'
//   | 'textSizeSmall'
//   | 'textSizeLarge'
//   | 'outlinedSizeSmall'
//   | 'outlinedSizeLarge'
//   | 'containedSizeSmall'
//   | 'containedSizeLarge'
//   | 'sizeSmall'
//   | 'sizeLarge'
//   | 'fullWidth'
//   | 'startIcon'
//   | 'endIcon'
//   | 'iconSizeSmall'
//   | 'iconSizeMedium'
//   | 'iconSizeLarge';

export type Overrides = {
  [Name in keyof ComponentNameToClassKey]?: Partial<StyleRules<ComponentNameToClassKey[Name]>>;
};

export interface ComponentNameToClassKey {
  // PlutoTVButton: ButtonClassKey;
}
