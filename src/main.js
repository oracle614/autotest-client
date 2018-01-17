// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './assets/global.scss'
import filedto from './components/FileDto'

axios.defaults.baseURL = 'http://127.0.0.1:5000'
Vue.use(VueAxios, axios)
Vue.use(ElementUI)

// 注册全局组件
Vue.component('filedto', filedto)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
