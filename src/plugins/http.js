import Vue from 'vue'
import axios from 'axios'
import { ToastProgrammatic as Toast } from 'buefy'
// LoadingProgrammatic as Loading,

const token = document.head.querySelector('meta[name="csrf-token"]')
const baseURL = 'https://jsonplaceholder.typicode.com/'
// const loadingComponent = Loading
const instance = axios.create({
  baseURL: baseURL,
  headers: {
    'X-Requested-With': 'XMLHttpRequest',
    'X-CSRF-TOKEN': token ? token.content : null,
  },
})

instance.defaults.headers.common['auth'] = 'specialToken'
instance.interceptors.request.use((request) => {
  if (request.loading && typeof (request.loading) === 'function') {
    // Callback for the request
  } else {
    // loadingComponent.open()
  }
  return request
})
instance.interceptors.response.use((response) => {
  // loadingComponent.close()
  // console.dir(response)
  return response
}, (error) => {
  if (error.config.error && typeof (error.config.error) === 'function') {
    // loadingComponent.close()
    error.config.error(error)
  } else {
    // loadingComponent.close()
    Toast.open({
      message: error,
      type: 'is-danger',
    })
  }
  // Reject promise and throw an error
  return Promise.reject(error)
})

Vue.use({
  install (Vue) {
    Vue.prototype.$http = instance
  },
})

export default instance
