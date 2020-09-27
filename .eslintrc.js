module.exports = {
  root: true,
  parser: 'vue-eslint-parser',

  env: {
    node: true
  },

  plugins: [
    '@typescript-eslint',
  ],

  extends: [
    '@vue/typescript',
    'plugin:@typescript-eslint/recommended',
    'plugin:vue/vue3-recommended',
  ],

  parserOptions: {
    ecmaVersion: 2020
  },

  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off'
  },
}
