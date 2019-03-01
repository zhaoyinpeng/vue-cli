import Vue from 'vue'
import VueRouter from 'vue-router'
import router from './router.js'
import App from './App.vue'
import store from './store/index.js'

Vue.use(VueRouter)

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
