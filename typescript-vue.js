module.exports = {
  extends: ['./typescript.js', './vue.js'],
  parserOptions: {
    parser: '@typescript-eslint/parser',
    extraFileExtensions: ['.vue'],
  },
  rules: {},
}
