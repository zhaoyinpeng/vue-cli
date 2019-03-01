<template>
  <div>
    <h1>home页面</h1>
    <p>{{msg}}</p>
    <h3>router.js中定义嵌套路由</h3>
    <p>
      <router-link to="/home/phone">手机</router-link>
      <router-link to="/home/tablet">平板</router-link>
      <router-link to="/home/computer">电脑</router-link>
    </p>
    <router-view></router-view>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        msg: "我是home 组件"
      }
    }
  }

</script>
