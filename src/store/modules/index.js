import camelCase from 'lodash/camelCase'
const requireModule = require.context('.', false, /\.js$/)
const modules = {}

requireModule.keys().forEach(fileName => {
  // Don't register this file as a Vuex module
  if (fileName === './index.js') return

  const moduleName = camelCase(
    fileName.replace(/^\.\//, '')
  )
  modules[moduleName] = requireModule(fileName)
  // modules[moduleName] = {
  //   namespaced: true,
  //   ...requireModule(fileName),
  // }
})

export default modules
