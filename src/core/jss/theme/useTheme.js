import { useTheme as useThemeWithoutDefault } from "../";
import defaultTheme from "./defaultTheme";

export default function useTheme() {
  return useThemeWithoutDefault() || defaultTheme;
}
