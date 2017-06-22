// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ElementUI from 'element-ui'
import VueProgressBar from 'vue-progressbar'
import 'element-ui/lib/theme-default/index.css'
import App from './App'

import store from './store'
import router from './router'

Vue.config.productionTip = false

Vue.use(ElementUI)

const options = {
  color: '#eeeeee',
  failedColor: '#874b4b',
  thickness: '2px',
  transition: {
    speed: '0.2s',
    opacity: '0.6s'
  },
  autoRevert: true,
  location: 'top',
  inverse: false
}

Vue.use(VueProgressBar, options)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: {App}
})
