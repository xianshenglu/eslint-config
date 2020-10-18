module.exports = {
  extends: ['./javascript-react.js', './typescript.js'].map(require.resolve),
  parserOptions: {
    parser: '@typescript-eslint/parser'
  }
}
