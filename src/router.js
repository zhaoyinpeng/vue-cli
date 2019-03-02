import Vue from 'vue'
import VueRouter from 'vue-router'
// 引入组件
import main from './pages/main.vue'
import home from './pages/home.vue'
import about from './pages/about.vue'
import user from './pages/user.vue'
import phone from './pages/phone.vue'
import vuexpage from './pages/vuex.vue'
import technologyTree from './pages/technologyTree.vue'
import designModule from './pages/technology/designModule.vue'
import cookie from './pages/technology/cookie.vue'
import canvas from './pages/technology/canvas.vue'
import xss from './pages/technology/xss.vue'
import websocket from './pages/technology/websocket.vue'
// 要告诉 vue 使用 vueRouter
Vue.use(VueRouter)
const routes = [{
  path: '/',
  name: '主页',
  component: main
}, {
  path: '/home/',
  // 下面这个属性也不少，因为，我们是先进入home页面，才能进入子路由
  component: home,
  // 子路由
  children: [{
    path: 'phone',
    component: phone
  }, {
    path: 'tablet',
    component: phone
  }, {
    path: 'computer',
    component: phone
  }]
}, {
  path: '/about',
  name: '关于',
  component: about
},
  //科技树
  {
    path: '/technologyTree/',
    name: '科技树',
    component: technologyTree,
    // 子路由
    children: [{
      path: 'designModule',
      component: designModule
    }, {
      path: 'cookie',
      component: cookie
    }, {
      path: 'canvas',
      component: canvas
    }, {
      path: 'xss',
      component: xss
    }, {
      path: 'websocket',
      component: websocket
    }]
  },
  {
    path: '/vuex',
    name: 'vuex',
    component: vuexpage
  },
// 重定向
  {
    path: '/',
    redirect:
      '/home'
  }
  ,
  {
    path: '/index.html',
    redirect:
      '/home'
  }
  ,
  /*新增user路径，配置了动态的id*/
  {
    path: '/user/:id',
    component:
    user
  }
]
var router = new VueRouter({
  mode: 'history',
  routes: routes
})
export default router
