import auth from '../api/auth'
import common from '../api/common'
import defaultMenu from './default-menu'
import * as types from './mutation-types'

export const UserLogin = ({commit}, data) => {
  auth.login(data)
    .then(function (response) {
      if (response.data.type) {
        commit(types.USER_SIGNIN, response.data.token)
        window.location = '/person'
      } else {
        window.location = '/login'
      }
    })
    .catch(function (error) {
      console.log(error)
    })
}

export const UserLogout = ({commit}, data) => {
  auth.logout(data)
    .then(function (response) {
      commit(types.USER_SIGNOUT)
      window.location = '/login'
    })
    .catch(function (error) {
      console.log(error)
    })
}

export const UserReg = ({commit}, data) => {
  auth.register(data)
    .then(function (response) {
      if (response.data.type) {
        commit(types.USER_REG, response.data.token)
        window.location = '/person'
      }
    })
    .catch(function (error) {
      console.log(error)
    })
}

export const toggleLoading = ({commit}) => commit(types.TOGGLE_LOADING)

export const loadMenuList = ({commit}) => {
  common.getMenu()
    .then(res => {
      commit(types.LOAD_MENU, res.data.menuList)
    })
    .catch(exp => {
      commit(types.LOAD_MENU, defaultMenu)
    })
}
