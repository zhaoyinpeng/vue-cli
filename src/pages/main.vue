<template>
  <div id="app">
    <h1>{{ myTest }}</h1>
    <p>
      <router-link to="/technologyTree">我的科技树页面</router-link>
    </p>
    <h1>{{ msg }}</h1>
    <p>
      <router-link to="/home">vue骚技术+动态效果</router-link>
      <router-link to="/about">about</router-link>
      <router-link :to="{name:'关于',param:{id:123}}">关于</router-link>
      <router-link :to="{name:'vuex',param:{id:123}}">vuex</router-link>
      <router-link to="/user/123">User123</router-link>
      <router-link to="/user/456">User456</router-link>
      <a href="http://localhost:8081/login.html">进入login页面</a>
    </p>
    <router-view></router-view>
  </div>
</template>
<script>
  export default {
    name: 'app',
    data () {
      return {
        msg: '导航路由',
        myTest: '科技树 technologyTree'
      }
    }
  }

</script>
<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }

  h1,
  h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }

</style>
