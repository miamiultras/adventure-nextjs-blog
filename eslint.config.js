const { ESLint } = require('eslint');

module.exports = new ESLint({
  baseConfig: {
    extends: ['next/core-web-vitals', 'plugin:@typescript-eslint/recommended'],
    parser: '@typescript-eslint/parser',
    parserOptions: {
      ecmaVersion: 2020,
      sourceType: 'module'
    },
    plugins: ['@typescript-eslint'],
  }
});