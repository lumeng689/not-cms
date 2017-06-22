import Vue from 'vue'
import Vuex from 'vuex'
import * as types from './mutation-types'
import * as actions from './actions'
import * as getters from './getters'
import login from './modules/login'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

const state = {
  loading: false,
  menuList: {},
  sidebar: {
    opened: true
  },
  userInfo: {name: '佚名'}
}

const mutations = {
  // 只能同步的函数
  [types.TOGGLE_DEVICE] (state, isMobile) {
    state.device.isMobile = isMobile
  },
  [types.TOGGLE_LOADING] (state) {
    state.loading = !state.loading
  },
  [types.LOAD_MENU] (state, menu) {
    state.menuList = menu
  },
  [types.SET_USER_INFO] (state, info) {
    state.userInfo = info
  },
  [types.TOGGLE_SIDEBAR] (state, open) {
    if (open == null) open = !state.sidebar.opened
    state.sidebar.opened = open
  }
}

export default new Vuex.Store({
  state,
  actions,
  getters,
  mutations,
  modules: {
    login
  },
  strict: debug
})
