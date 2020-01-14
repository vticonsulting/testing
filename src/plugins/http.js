import axios from 'axios'

const token = document.head.querySelector('meta[name="csrf-token"]')

const baseURL = 'https://jsonplaceholder.typicode.com/'

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
    // Do default loading here
    document.body.classList.add('loading')
  }
  return request
})

instance.interceptors.response.use((response) => {
  hideDefaultLoading()
  return response
}, (error) => {
  if (error.config.error && typeof (error.config.error) === 'function') {
    hideDefaultLoading()
    error.config.error(error)
  } else {
    hideDefaultLoading()
  }

  // Reject promise and throw an error
  return Promise.reject(error)
})

function hideDefaultLoading () {
  document.body.classList.remove('loading')
}

export default instance
