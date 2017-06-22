import request from './request'
import store from '../store'

export default {
  login (form) {
    return new Promise((resolve, reject) => {
      request.post('/api/user/doLogin', form).then((result) => {
        if ((result.code - 0) === 0) {
          console.log('login ok ........')
          localStorage.token = result.data.aicloudToken
          resolve(result.data)
        } else {
          reject({'message': result.code, 'showVnum': result.showVnum})
          console.log('login error ........')
        }
      })
    })
  },

  logout () {
    store.dispatch('logoutSuccess')
    return new Promise((resolve, reject) => {
      request.post('/api/user/logout').then((result) => {
        resolve(true)
      })
    })
  },

  register (form) {
    return new Promise((resolve, reject) => {
      request.post('/api/user/doLogin', form).then((result) => {
        if ((result.code - 0) === 0) {
          console.log('login ok ........')
          localStorage.token = result.data.aicloudToken
          resolve(result.data)
        } else {
          reject({'message': result.code, 'showVnum': result.showVnum})
          console.log('login error ........')
        }
      })
    })
  },

  showVnum () {
    return new Promise((resolve, reject) => {
      request.get('/api/user/showVnum').then(function (result) {
        resolve(result.showVnum)
      }).catch((error) => {
        reject(error)
      })
    })
  },

  getAuthToken () {
    if (localStorage.token) {
      return localStorage.token
    }
  },

  isLoggedIn () {
    return new Promise((resolve, reject) => {
      request.get('/api/user/isLoggedIn').then(function (result) {
        resolve(result.data.loggedIn)
      }).catch((error) => {
        reject(error)
      })
    })
  }
}
