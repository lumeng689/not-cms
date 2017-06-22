import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/views/Hello'
import OnlyRouter from '@/views/OnlyRouter'
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
  },
  {
    path: '/admin',
    component: resolve => require(['@/views/AdminLayout'], resolve),
    children: [
      {path: '', redirect: {path: '/admin/dashboard'}},
      {
        path: 'dashboard',
        name: 'Dashboard',
        component: resolve => require(['@/views/dashboard/Dashboard'], resolve)
      },
      {
        path: 'operators',
        component: OnlyRouter,
        children: [
          {
            path: '',
            name: 'Operators',
            component: resolve => require(['@/views/sys/Operators'], resolve)
          },
          {
            path: 'add',
            name: 'OperatorForm',
            component: resolve => require(['@/views/sys/OperatorForm'], resolve)
          }
        ]
      },
      {
        path: 'groups',
        name: 'Groups',
        component: resolve => require(['@/views/sys/Groups'], resolve)
      },
      {
        path: 'ads',
        name: 'Ads',
        component: resolve => require(['@/views/sys/Advertises'], resolve)
      },
      {
        path: 'files',
        name: 'Files',
        component: resolve => require(['@/views/sys/Files'], resolve)
      },
      {
        path: 'backup',
        name: 'Backup',
        component: resolve => require(['@/views/sys/Backup'], resolve)
      },
      {
        path: 'logs',
        name: 'Logs',
        component: resolve => require(['@/views/sys/Logs'], resolve)
      }
    ]
  }
]

export default new Router({
  mode: 'history',
  saveScrollPosition: true,
  routes
})
