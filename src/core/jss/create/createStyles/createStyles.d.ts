import { StyleRules } from '../../theme/withStyles';

/**
 * This function doesn't really "do anything" at runtime, it's just the identity
 * function. Its only purpose is to defeat TypeScript's type widening when providing
 * style rules to `withStyles` which are a function of the `Theme`.
 *
 * @param style a set of style mappings
 * @returns the same style that were passed in
 */
// For TypeScript v3.5 Props has to extend {} instead of object
export default function createStyles<ClassKey extends string, Props extends {}>(
  style: StyleRules<ClassKey,Props>,
): StyleRules<ClassKey, Props>;
