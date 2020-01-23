module.exports = {
  root: true,
  env: {
    node: true,
    jest: true,
  },
  globals: {
    dataLayer: true,
  },
  extends: ['plugin:vue/strongly-recommended', '@vue/standard'],
  rules: {
    camelcase: 'off',
    curly: 'off',
    eqeqeq: 'off',
    indent: [ 'error', 2 ],
    // semi: [ 'error', 'always' ],
    'comma-dangle': ['error', 'always-multiline'],
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    // 'vue/html-closing-bracket-spacing': [`error`, {
    //   startTag: `never`,
    //   endTag: `never`,
    //   selfClosingTag: `never`,
    // }],
    // 'vue/attributes-order': 'off',
    // 'vue/component-name-in-template-casing': [`error`, `PascalCase`],
    'vue/component-name-in-template-casing': ['error', 'PascalCase', {
      'registeredComponentsOnly': true,
      'ignores': [],
    }],
    'vue/html-indent': ['error', 2, {
      'attribute': 1,
      'closeBracket': 0,
      'ignores': [],
    }],
    'vue/match-component-file-name': ['error', {
      'extensions': ['jsx'],
      'shouldMatchCase': false,
    }],
    'vue/max-attributes-per-line': 'off',
    // 'vue/max-attributes-per-line': ['error', {
    //   'singleline': 1,
    //   'multiline': {
    //     'max': 1,
    //     'allowFirstLine': false,
    //   },
    // }],
    'vue/multiline-html-element-content-newline': 'off',
    'vue/no-template-shadow': 'off',
    'vue/no-unused-components': 'off',
    'vue/no-v-html': 'off',
    'vue/require-default-prop': 'off',
    'vue/require-prop-types': 'off',
    'vue/require-valid-default-prop': 'off',
    'vue/return-in-computed-property': 'off',
    'vue/v-bind-style': ['error', 'shorthand'],
    'vue/v-on-style': ['error', 'shorthand'],
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
  overrides: [
    {
      files: [
        '**/__tests__/*.{j,t}s?(x)',
        '**/tests/unit/**/*.spec.{j,t}s?(x)',
      ],
      env: {
        jest: true,
      },
    },
  ],
}
