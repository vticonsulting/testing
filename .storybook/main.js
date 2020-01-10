module.exports = {
  stories: [
    "../src/intro.stories.mdx", // load intro first
    "../src/**/*.stories.(js|mdx)"],
  addons: [
    "@storybook/addon-actions",
    "@storybook/addon-links",
    "@storybook/addon-events",
    "@storybook/addon-notes",
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