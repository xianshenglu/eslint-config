module.exports = {
  parser: 'vue-eslint-parser',
  extends: [
    // rules for vue, didn't include any js rules lib like standard or airbnb
    // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention.
    'plugin:vue/recommended',
    // turn off stylistic rules defined in plugin:vue/recommended
    // https://github.com/prettier/eslint-config-prettier/blob/master/vue.js
    'prettier/vue',
  ],
  plugins: ['vue'],
  // parserOptions: {
  //   parser: 'babel-eslint',
  // },
  rules: {
    'vue/v-on-function-call': ['error', 'never'],
    'vue/require-direct-export': ['error'],
    'vue/no-empty-pattern': 'error',
    'vue/dot-location': 'error',
    'vue/valid-v-slot': 'error',
    'vue/eqeqeq': 'error',
    'vue/comma-dangle': 'error',
    /**
     * if the version of your eslint-plugin-vue is lower than 6.0.0, you should
     * turn vue/prop-name-casing, vue/attribute-hyphenation off.
     * https://github.com/vuejs/eslint-plugin-vue/issues/862
     * https://github.com/vuejs/eslint-plugin-vue/issues/864
     */
    'vue/prop-name-casing': 'error',
    // https://github.com/vuejs/eslint-plugin-vue/issues/924
    'vue/attribute-hyphenation': 'error',
    // too many history errors
    'vue/name-property-casing': ['error', 'PascalCase'],
    // too many violations
    'vue/component-name-in-template-casing': [
      'error',
      'PascalCase',
      {
        registeredComponentsOnly: true,
        ignores: [],
      },
    ],
  },
}
