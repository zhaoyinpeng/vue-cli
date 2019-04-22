import Vue from 'vue'
import VueRouter from 'vue-router'
import router from '../../router.js'
import Index from './index.vue'
import store from '../../store/index.js'
import VueBus from 'vue-bus'
import myMixin from '../../mixin/mixin.js'
import vMsg from '../../plugins/msg.js'

Vue.use(VueRouter)
Vue.use(VueBus)
Vue.use(vMsg)

// 全局引入mixin。不需要引入 这里要注意，全局引入后，在单个模块改变data中的值，并不会改变全局mixin中data的值！
Vue.mixin({
  data: function() {
    return {
      page: 'main'
    }
  },
  created: function () {
    console.log('全局引入mixin，直接用vue.mixin()');
    console.log(this.page);
  }
})

new Vue({
  el: '#app',
  mixins: [myMixin],//局部引入mixin
  router,
  store,
  render: h => h(Index)
})

