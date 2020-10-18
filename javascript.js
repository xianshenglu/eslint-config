module.exports = {
  root: true,
  // parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  env: {
    node: true,
    es6: true,
    browser: true,
  },
  extends: [
    // https://github.com/standard/standard/blob/master/docs/RULES-en.md
    'airbnb-base',
    // turn off ESLint default stylistic rules
    // https://github.com/prettier/eslint-config-prettier/blob/master/index.js
    'prettier',
  ],
  settings: {
    // todo dedupe with same named rule
    'import/extensions': ['off'],
  },
  // add your custom rules here
  rules: {
    //! avoid add stylistic rules
    // non stylistic rules which are conflict with airbnb-base
    'import/prefer-default-export': ['off'],
    /**
     * todo find options to support ignore ./index.js, ./index.vue
     * todo integrating with webpack, for example webpack alias
     */
    'import/no-unresolved': ['off'],
    // todo support
    'import/extensions': ['off'],
    'no-use-before-define': [
      'error',
      { functions: false, classes: true, variables: true },
    ],
    // wait for support checkForEach
    'array-callback-return': [
      'error',
      { allowImplicit: true, checkForEach: true },
    ],
    // not compatible with airbnb yet
    'func-names': 'off',
    'no-plusplus': 'off',
    'no-param-reassign': 'off',
    'require-atomic-updates': 'error',
    'no-implicit-coercion': 'error',
    'no-eq-null': 'error',
    'require-await': 'error',
  },
}
