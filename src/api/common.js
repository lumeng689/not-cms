import request from './request'
// import store from '../store'

export default {
  getMenu () {
    return new Promise((resolve, reject) => {
      request.get('/api/user/isLoggedIn').then(function (result) {
        resolve(result.data.loggedIn)
      }).catch((error) => {
        reject(error)
      })
    })
  }
}
