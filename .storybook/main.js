const path = require('path');module.exports = {
  stories: [
    "../src/docs/Intro.stories.mdx",
    "../src/docs/getting-started.stories.mdx",
    "../src/docs/whats-new.stories.mdx",
    // "../src/**/*.stories.(js|mdx)"
  ],
  addons: [
    "@storybook/addon-a11y",
    "@storybook/addon-actions",
    "@storybook/addon-backgrounds",
    "@storybook/addon-events",
    "@storybook/addon-jest",
    "@storybook/addon-knobs",
    "@storybook/addon-links",
    "@storybook/addon-viewport",
    {
      name: "@storybook/addon-docs",
      options: {
        configureJSX: true,
        // https://github.com/storybookjs/storybook/issues/8096
        babelOptions: {
          presets: [
            [
              '@vue/cli-plugin-babel/preset',
              {
                jsx: false
              }
            ]
          ]
        }
      }
    }
  ],
  // webpackFinal: (config) => console.dir(config, { depth: null }) || config,
  webpackFinal: async (config, { configType }) => {
    // `configType` has a value of 'DEVELOPMENT' or 'PRODUCTION'
    // You can change the configuration based on that.
    // 'PRODUCTION' is used when building the static version of storybook.

    // Make whatever fine-grained changes you need
    config.module.rules.push({
      test: /\.s[ac]ss$/i,
      use: ['vue-style-loader', 'css-loader', 'sass-loader'],
      include: path.resolve(__dirname, '../'),
    });

    // config.module.rules.push({
    //   test: /\.s[ac]ss$/,
    //   use: ["vue-style-loader", "css-loader", "sass-loader"]
    // });

    // config.module.rules.push({
    //   test: /\.pug$/,
    //   use: "pug-plain-loader"
    // });

    // Return the altered config
    return config;
  },
};
