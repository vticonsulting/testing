module.exports = {
  root: true,
  env: {
    node: true
  },
  globals: {
    dataLayer: true
  },
  extends: ["plugin:vue/essential", "@vue/prettier"],
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
    "vue/component-name-in-template-casing": [`error`, `PascalCase`],
    "vue/no-v-html": `off`
    // 'vue/html-closing-bracket-spacing': [`error`, {
    //   startTag: `never`,
    //   endTag: `never`,
    //   selfClosingTag: `never`,
    // }],
  },
  parserOptions: {
    parser: "babel-eslint"
  },
  overrides: [
    {
      files: [
        "**/__tests__/*.{j,t}s?(x)",
        "**/tests/unit/**/*.spec.{j,t}s?(x)"
      ],
      env: {
        jest: true
      }
    }
  ]
};
