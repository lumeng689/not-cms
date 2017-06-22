import axios from 'axios'

const handleStatus = (res) => {
  return res.data
}

const handleResponse = (res) => {
  return Promise.resolve(res)
}

const handleError = (error) => {
  console.error(error)
}

axios.interceptors.request.use(function (config) {
  if (localStorage.token) {
    config.headers['X-Access-Token'] = localStorage.token
  }
  // fix ie cache
  if (config.params) {
    config.params['_t'] = new Date().getTime()
  } else {
    config.params = {
      '_t': new Date().getTime()
    }
  }
  return config
}, function (error) {
  return Promise.reject(error)
})

axios.interceptors.response.use(undefined, err => {
  let res = err.response
  if (res.status === 401 && res.config && !res.config.__isRetryRequest) {
    window.location = '/login'
  }
})

export default {
  get (url, params) {
    let queryString = []

    if (params) {
      Object.keys(params)
        .forEach((key) => params[key] && queryString.push(`${key}=${params[key]}`))
    }
    if (queryString.length > 0) {
      queryString = queryString.join('&')
      url += `?${queryString}`
    }
    return axios
      .get(url)
      .then(handleStatus)
      .then(handleResponse)
      .catch(handleError)
  },
  post (url, params) {
    return axios
      .post(url, params)
      .then(handleStatus)
      .then(handleResponse)
      .catch(handleError)
  },
  put (url, params) {
    return axios
      .put(url, params)
      .then(handleStatus)
      .then(handleResponse)
      .catch(handleError)
  },
  delete (url, params) {
    return axios
      .delete(url, params)
      .then(handleStatus)
      .then(handleResponse)
      .catch(handleError)
  }
}
