// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint'
  },
  env: {
    browser: true,
  },
  extends: [
    // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
    // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
    'plugin:vue/essential',
    // https://github.com/standard/standard/blob/master/docs/RULES-en.md
    'standard'
  ],
  // required to lint *.vue files
  plugins: [
    'vue'
  ],
  // add your custom rules here
  rules: {
    // allow async-await
    'generator-star-spacing': 'off',
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    "semi": ["off", "never"],
    "indent": ["off", "never"],
    "quotes": ["off", "never"],
    "spaced-comment": ["off", "never"],
    "comma-style": ["off", "never"],
    "eol-last": ["off", "never"],
    "space-before-blocks": ["off", "never"],
    "key-spacing": ["off", "never"],
    "no-undef": ["off", "never"],
    "space-before-function-paren": ["off", "never"],
    "no-new": ["off", "never"],
    "padded-blocks": ["off", "never"],
    "comma-dangle": ["off", "never"],
    "comma-spacing": ["off", "never"],
    "arrow-spacing": ["off", { "before": false, "after": false }],
    "no-multiple-empty-lines": ["off", "never"],
    "no-trailing-spaces": ["off", "never"]
  }
}
