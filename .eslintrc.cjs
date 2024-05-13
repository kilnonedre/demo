/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-typescript',
    '@vue/eslint-config-prettier/skip-formatting',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
  },
  plugins: ['@typescript-eslint', 'vue', 'prettier'],
  rules: {
    'no-unused-vars': ['error', { args: 'none' }],
    'no-console': 'off',
    'no-debugger': 'off',
    'array-bracket-spacing': 2,
    'no-var': 2,
    'no-eval': 2,
    'arrow-spacing': 2,
    'block-spacing': 2,
    'key-spacing': 2,
    'brace-style': 2,
    'comma-dangle': 0, // 禁用:和 prettier 冲突
    'object-curly-spacing': [2, 'always'],
    'vue/multi-word-component-names': 'off',
    'vue/define-emits-declaration': 2,
    complexity: ['error', { max: 10 }],
    'prefer-const': [
      'error',
      {
        destructuring: 'all',
        ignoreReadBeforeAssign: false,
      },
    ],
  },
}
