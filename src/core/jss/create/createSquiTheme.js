import { deepmerge } from '../utils';
import createBreakpoints from './createBreakpoints';
import createMixins from './createMixins';
import createPalette from './createPalette';
import createTypography from './createTypography';
import shadows from '../theme/shadows';
import shape from '../theme/shape';
import createSpacing from './createSpacing';
import transitions from '../theme/transitions';
import zIndex from '../theme/zIndex';

function createSquiTheme(options = {}, ...args) {
  const {
    breakpoints: breakpointsInput = {},
    mixins: mixinsInput = {},
    palette: paletteInput = {},
    spacing: spacingInput,
    typography: typographyInput = {},
    ...other
  } = options;

  const palette = createPalette(paletteInput);
  const breakpoints = createBreakpoints(breakpointsInput);
  const spacing = createSpacing(spacingInput);

  let squiTheme = deepmerge(
    {
      breakpoints,
      direction: 'ltr',
      mixins: createMixins(breakpoints, spacing, mixinsInput),
      overrides: {}, // Inject custom style
      palette,
      props: {}, // Provide default props
      shadows,
      typography: createTypography(palette, typographyInput),
      spacing,
      shape,
      transitions,
      zIndex,
    },
    other,
  );

  squiTheme = args.reduce((acc, argument) => deepmerge(acc, argument), squiTheme);

  if (process.env.NODE_ENV !== 'production') {
    const pseudoClasses = [
      'checked',
      'disabled',
      'error',
      'focused',
      'focusVisible',
      'required',
      'expanded',
      'selected',
    ];
    const traverse = (node, parentKey, depth = 1) => {
      let key;

      // eslint-disable-next-line guard-for-in, no-restricted-syntax
      for (key in node) {
        const child = node[key];
        if (depth === 1) {
          if (key.indexOf('Squi') === 0 && child) {
            traverse(child, key, depth + 1);
          }
        } else if (pseudoClasses.indexOf(key) !== -1 && Object.keys(child).length > 0) {
          if (process.env.NODE_ENV !== 'production') {
            console.error(
              [
                `UI: the \`${parentKey}\` component increases ` +
                  `the CSS specificity of the \`${key}\` internal state.`,
                'You can not override it like this: ',
                JSON.stringify(node, null, 2),
                '',
                'Instead, you need to use the $ruleName syntax:',
                JSON.stringify(
                  {
                    root: {
                      [`&$${key}`]: child,
                    },
                  },
                  null,
                  2,
                ),
                '',
                'https://UI.com/r/pseudo-classes-guide',
              ].join('\n'),
            );
          }
          // Remove the style to prevent global conflicts.
          node[key] = {};
        }
      }
    };

    traverse(squiTheme.overrides);
  }

  return squiTheme;
}

export default createSquiTheme;
