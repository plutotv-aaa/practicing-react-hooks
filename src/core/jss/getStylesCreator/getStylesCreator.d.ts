import { StyleRules, Styles } from "../theme/withStyles";

export interface StylesCreator<
  Theme,
  Props extends object,
  ClassKey extends string = string
> {
  create: (theme: Theme, name: string) => StyleRules<ClassKey, Props>;
  options: {};
  themingEnabled: boolean;
}

export default function getStylesCreator<S extends Styles<any, any>>(
  style: S
): StylesCreator<any, any>;
