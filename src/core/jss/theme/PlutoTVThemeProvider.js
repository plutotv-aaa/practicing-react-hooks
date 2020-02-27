import * as React from 'react';
import { ThemeProvider } from '..';

/**
 * @ignore - internal component.
 *
 * TODO v5: remove
 */
export default function PlutoTVThemeProvider(props) {
  if (process.env.NODE_ENV !== 'production') {
    console.error(
      [
        'UI: you have imported a private module.',
        '',
        "Please replace the 'core/theme/PlutoTVThemeProvider' import with:",
        "`import { ThemeProvider as PlutoTVThemeProvider } from 'core/theme';`",
      ].join('\n'),
    );
  }

  return <ThemeProvider {...props} />;
}
