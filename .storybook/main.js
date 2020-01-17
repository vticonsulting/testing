const path = require('path');module.exports = {
  // webpackFinal: (config) => console.dir(config, { depth: null }) || config,
  webpackFinal: async (config, { configType }) => {
    // `configType` has a value of 'DEVELOPMENT' or 'PRODUCTION'
    // You can change the configuration based on that.
    // 'PRODUCTION' is used when building the static version of storybook.

    // Make whatever fine-grained changes you need
    config.module.rules.push({
      test: /\.scss$/,
      use: ['style-loader', 'css-loader', 'sass-loader'],
      include: path.resolve(__dirname, '../'),
    });

    // Return the altered config
    return config;
  },
  stories: [
    "../src/intro.stories.mdx", // load intro first
    "../src/typography.stories.mdx",
    "../src/color.stories.mdx",
    "../src/layouts/layout.stories.mdx",
    "../src/**/*.stories.(js|mdx)"],
  addons: [
    "@storybook/addon-actions",
    "@storybook/addon-links",
    "@storybook/addon-events",
    "@storybook/addon-knobs",
    "@storybook/addon-backgrounds",
    "@storybook/addon-a11y",
    "@storybook/addon-jest",
    "@storybook/addon-viewport",
    {
      name: "@storybook/addon-docs",
      options: { configureJSX: true }
    }
  ],
};