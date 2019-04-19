import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '@/store/index.js'
// // 引入组件
// import main from './pages/main.vue'
// import home from './pages/home.vue'
// import about from './pages/about.vue'
// import user from './pages/user.vue'
// import phone from './pages/phone.vue'
// import vuexpage from './pages/vuex.vue'
// import technologyTree from './pages/technologyTree.vue'
// import designModule from './pages/technology/designModule.vue'
// import cookie from './pages/technology/cookie.vue'
// import canvas from './pages/technology/canvas.vue'
// import xss from './pages/technology/xss.vue'
// import websocket from './pages/technology/websocket.vue'
// import mapboxgl from './pages/technology/mapbox_gl.vue'
let getTestBuild = componentName => resolve => require(['./pages/technology/testBuild/m.js'], components => resolve(components[componentName])) //这个是个函数啊！！！
// 要告诉 vue 使用 vueRouter
Vue.use(VueRouter)
const routes = [{
  path: '/',
  name: '主页',
  component: resolve => require(['./pages/main.vue'], resolve)
}, {
  path: '/home',
  // 下面这个属性也不少，因为，我们是先进入home页面，才能进入子路由
  component: resolve => require(['./pages/home.vue'], resolve),
  // 子路由
  children: [{
    path: 'phone',
    component: resolve => require(['./pages/phone.vue'], resolve)
  }, {
    path: 'tablet',
    component: resolve => require(['./pages/phone.vue'], resolve)
  }, {
    path: 'computer',
    component: resolve => require(['./pages/phone.vue'], resolve)
  }]
}, {
  path: '/about',
  name: '关于',
  component: resolve => require(['./pages/about.vue'], resolve)
},
//科技树
{
  path: '/technologyTree',
  name: '科技树',
  component: resolve => require(['./pages/technologyTree.vue'], resolve),
  // 子路由
  children: [{
    path: 'designModule',
    component: resolve => require(['./pages/technology/designModule.vue'], resolve)
  }, {
    path: 'cookie',
    component: resolve => require(['./pages/technology/cookie.vue'], resolve)
  }, {
    path: 'canvas',
    component: resolve => require(['./pages/technology/canvas.vue'], resolve)
  }, {
    path: 'xss',
    component: resolve => require(['./pages/technology/xss.vue'], resolve)
  }, {
    path: 'websocket',
    component: resolve => require(['./pages/technology/websocket.vue'], resolve)
  }, {
    path: 'mapboxgl',
    component: resolve => require(['./pages/technology/mapbox_gl.vue'], resolve)
  }, {
    path: 'm1',
    component: getTestBuild('m1')
  }, {
    path: 'm2',
    component: getTestBuild('m2')
  }, {
    path: 'm3',
    component: getTestBuild('m3')
  }]
},
{
  path: '/vuex',
  name: 'vuex',
  component: resolve => require(['./pages/vuex.vue'], resolve)
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
  component: resolve => require(['./pages/user.vue'], resolve)
}
]
var router = new VueRouter({
  // mode: 'history',
  routes: routes
})
router.beforeEach((to, from, next)=> {
  // ...
  if (store) {
    store.dispatch('setNavByRouter',to.path);
  }
  next();
})
export default router
