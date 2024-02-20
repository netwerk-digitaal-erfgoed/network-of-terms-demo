module.exports = {
  root: true,
  parser: 'vue-eslint-parser',

  env: {
    browser: true,
    es2021: true
  },

  plugins: [
    '@typescript-eslint',
    'vue',
  ],

  extends: [
    '@vue/typescript',
    'plugin:@typescript-eslint/recommended',
    'plugin:vue/vue3-recommended',
  ],

  parserOptions: {
    ecmaVersion: 'latest',
    parser: '@typescript-eslint/parser',
  },

  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'vue/object-curly-spacing': ['error'],
    'object-curly-spacing': ['error'],
    'comma-dangle': ['error', 'always-multiline'],
  },
};
