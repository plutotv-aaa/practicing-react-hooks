//List PlutoTV UI Components here.
// Example - import { ButtonProps } from "../Button";

// In file '../Button' there should live a type, example below:
// export type ButtonProps<
//   D extends React.ElementType = ButtonTypeMap['defaultComponent'],
//   P = {}
// > = OverrideProps<ButtonTypeMap<P, D>, D>;

export type ComponentsProps = {
  [Name in keyof ComponentsPropsList]?: Partial<ComponentsPropsList[Name]>;
};

export interface ComponentsPropsList {
  // PlutoTVButton: ButtonProps;
}
