/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
  root: true,
  env: {
    node: true,
  },
  plugins: ['prettier', 'vuejs-accessibility'],
  extends: [
    'plugin:vue/vue3-strongly-recommended',
    'eslint:recommended',
    '@vue/eslint-config-prettier',
    'prettier',
    'plugin:vuejs-accessibility/recommended',
    '@vue/typescript/recommended',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
  },
  ignorePatterns: ['**/plugins/*'],
  rules: {
    'no-undef: 'off',
    quotes: ['error', 'single'],
    'vue/component-name-in-template-casing': ['error', 'PascalCase'],
    'vue/component-tags-order': [
      'error',
      {
        order: ['script', 'template', 'style'],
      },
    ],
    'vue/multi-word-component-names': 'off',
  },
};
