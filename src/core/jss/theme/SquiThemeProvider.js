import * as React from "react";
import { ThemeProvider } from "../";

/**
 * @ignore - internal component.
 *
 * TODO v5: remove
 */
export default function SquiThemeProvider(props) {
  if (process.env.NODE_ENV !== "production") {
    console.error(
      [
        "UI: you have imported a private module.",
        "",
        "Please replace the 'core/containers/SquiThemeProvider' import with:",
        "`import { ThemeProvider as SquiThemeProvider } from 'core/containers';`"
      ].join("\n")
    );
  }

  return <ThemeProvider {...props} />;
}
