module.exports = {
  chainWebpack: config => {
    config.performance.maxEntrypointSize(900000).maxAssetSize(900000)
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
