/* eslint-disable import/export */
import { ponyfillGlobal } from "./utils";

/* Warning if there are several instances of ../../style */
if (
  process.env.NODE_ENV !== "production" &&
  process.env.NODE_ENV !== "test" &&
  typeof window !== "undefined"
) {
  ponyfillGlobal["__../../style-init__"] =
    ponyfillGlobal["__../../style-init__"] || 0;

  if (ponyfillGlobal["__../../style-init__"] === 1) {
    console.warn(
      [
        "It looks like there are several instances of `../../style` initialized in this application.",
        "This may cause theme propagation issues, broken class names, " +
          "specificity issues, and makes your application bigger without a good reason.",
        ""
      ].join("\n")
    );
  }

  ponyfillGlobal["__../../style-init__"] += 1;
}

export { default as createGenerateClassName } from "./create/createGenerateClassName";
export * from "./create/createGenerateClassName";

export { default as createStyles } from "./create/createStyles";
export * from "./create/createStyles";

export { default as getThemeProps } from "./getThemeProps";
export * from "./getThemeProps";

export { default as jssPreset } from "./jssPreset";
export * from "./jssPreset";

export { default as makeStyles } from "./makeStyles";
export * from "./makeStyles";

export { default as mergeClasses } from "./mergeClasses";
export * from "./mergeClasses";

export { default as StylesProvider } from "./StylesProvider";
export * from "./StylesProvider";

export { default as ThemeProvider } from "./ThemeProvider";
export * from "./ThemeProvider";

export { default as useTheme } from "./useTheme";
export * from "./useTheme";

export { default as withStyles } from "./withStyles";
export * from "./withStyles";
