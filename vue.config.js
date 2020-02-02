const appConfig = require('./src/app.config')

/** @type import('@vue/cli-service').ProjectOptions */
module.exports = {
  chainWebpack: config => {
    // We provide the app's title in Webpack's name field, so that
    // it can be accessed in index.html to inject the correct title.
    config.set('name', appConfig.title)

    // // Set up all the aliases we use in our app.
    // config.resolve.alias.clear().merge(require('./aliases.config').webpack)

    // // Don't allow importing .vue files without the extension, as
    // // it's necessary for some Vetur autocompletions.
    // config.resolve.extensions.delete('.vue')

    // // Only enable performance hints for production builds,
    // // outside of tests.
    // config.performance.hints(
    //   process.env.NODE_ENV === 'production' &&
    //     !process.env.VUE_APP_TEST &&
    //     'warning'
    // )

    config.performance.maxEntrypointSize(900000).maxAssetSize(900000)
  },
  // outputDir: '../public',
  // css: {
  //   // Enable CSS source maps.
  //   sourceMap: true,
  // },
  devServer: {
    // proxy: 'http://titan.test',
    proxy: 'http://localhost:8080',
    host: '0.0.0.0',
    open: 'Google Chrome',
    openPage: 'dashboard',
  },
  // // Configure Webpack's dev server.
  // // https://cli.vuejs.org/guide/cli-service.html
  // devServer: {
  //   ...(process.env.API_BASE_URL
  //     ? // Proxy API endpoints to the production base URL.
  //     { proxy: { '/api': { target: process.env.API_BASE_URL } } }
  //     : // Proxy API endpoints a local mock API.
  //     { before: require('./tests/mock-api') }),
  // },
  pluginOptions: {
    i18n: {
      locale: 'en',
      fallbackLocale: 'en',
      localeDir: 'locales',
      enableInSFC: false,
    },
  },
}
