module.exports = {
  chainWebpack: config => {
    config.performance.maxEntrypointSize(900000).maxAssetSize(900000)
  },
  // outputDir: '../public',
  devServer: {
    // proxy: 'http://titan.test',
    proxy: 'http://localhost:8080',
    host: '0.0.0.0',
    open: 'Google Chrome',
    // openPage: 'dashboard',
  },
  pluginOptions: {
    i18n: {
      locale: 'en',
      fallbackLocale: 'en',
      localeDir: 'locales',
      enableInSFC: false,
    },
  },
}
