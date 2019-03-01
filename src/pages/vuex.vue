<template>
  <div>
    <h3>vuex测试</h3>
    <p>两种赋值方式</p>
    <p>{{$store.state.age}}</p>
    <p>{{name}}</p>
    <button @click="setName">修改Name状态</button>
  </div>
</template>
<script>
  export default {
    computed: {
      name(){
        return this.$store.state.name;
      }
    },
    methods: {
      setName:function(){
        //改变状态值 方法需在mutations.js中 定义
        this.$store.commit('SET_NAME','changeName')
      }
    },
    mounted() {
      console.log(this.$store.state);
    }
  }
</script>
<style>

</style>
