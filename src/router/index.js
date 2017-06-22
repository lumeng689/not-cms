import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/views/Hello'
import Login from '@/views/Login'

Vue.use(Router)

const routes = [
  {
    path: '/',
    name: 'Hello',
    component: Hello
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  }
]

export default new Router({
  mode: 'history',
  saveScrollPosition: true,
  routes
})
