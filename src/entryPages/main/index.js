import Vue from 'vue'
import VueRouter from 'vue-router'
import router from '../../router.js'
import Index from './index.vue'
import store from '../../store/index.js'
import VueBus from 'vue-bus'

Vue.use(VueRouter)
Vue.use(VueBus)

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(Index)
})
