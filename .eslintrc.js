module.exports = {
  root: true,
  parser: '@typescript-eslint/parser', // Specifies the ESLint parser
  env: {
    browser: true,
    node: true,
    jest: true,
    es6: true,
  },
  globals: {
    CONFIG: true,
    Hls: true,
    console: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
    // Uses the recommended rules from the @typescript-eslint/eslint-plugin
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:react-perf/recommended',
    'plugin:redux-saga/recommended',

    // Uses eslint-config-prettier to disable ESLint rules from
    // @typescript-eslint/eslint-plugin that would conflict with prettier.
    'prettier/@typescript-eslint',

    // Enables eslint-plugin-prettier and eslint-config-prettier.
    // This will display prettier errors as ESLint errors.
    // Make sure this is always the last configuration in the extends array.
    'plugin:prettier/recommended',
    'prettier/react',
  ],
  parserOptions: {
    ecmaVersion: 2018, // Allows for the parsing of modern ECMAScript features
    sourceType: 'module', // Allows for the use of imports
    ecmaFeatures: {
      jsx: true,
    },
    warnOnUnsupportedTypeScriptVersion: true,
  },
  settings: {
    react: {
      version: 'detect',
    },
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx', '.js', '.jsx'],
    },
    'import/core-modules': ['redux-saga', 'reselect', 'react-virtualized'],
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
      // Use <root>/tsconfig.json
      typescript: {
        // Always try to resolve types under `<root/>@types` directory
        // even it doesn't contain any source code, like `@types/unist`
        alwaysTryTypes: true,
      },
      // use <root>/path/to/folder/tsconfig.json
      typescript: {
        directory: './',
      },
    },
  },
  plugins: ['@typescript-eslint', 'import', 'react', 'prettier', 'react-hooks', 'redux-saga'],
  rules: {
    // Override individual rules from the above configs.
    'import/order': [
      'error',
      {
        'newlines-between': 'always-and-inside-groups',
        groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
      },
    ],
    'redux-saga/no-unhandled-errors': 0,
    'prettier/prettier': 1,
    'react/prop-types': 0,
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    '@typescript-eslint/explicit-function-return-type': 0,
    '@typescript-eslint/no-var-requires': 0,
    '@typescript-eslint/no-explicit-any': 0,
    '@typescript-eslint/ban-ts-ignore': 0,
    '@typescript-eslint/camelcase': 0,
    '@typescript-eslint/triple-slash-reference': 0,
    '@typescript-eslint/no-use-before-define': [2, { functions: false }],
    '@typescript-eslint/no-unused-vars': 0,
    '@typescript-eslint/no-non-null-assertion': 0,
    '@typescript-eslint/no-empty-interface': [
      0,
      {
        path: 'always',
        types: 'always',
        lib: 'always',
      },
    ],
  },
};
