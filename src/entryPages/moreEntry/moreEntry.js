import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from './moreEntry.vue'

Vue.use(VueRouter)

new Vue({
  el: '#app',
  render: h => h(Index)
})
