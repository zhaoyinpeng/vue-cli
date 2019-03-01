<template>
  <div class="childrenDiv">
    <h4>子路由页面</h4>
    <div>{{childrenPage}}页面</div>
    <button @click="toHome">routerPush方法跳转到home</button>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        childrenPage: '手机'
      }
    },
    mounted() {
      console.log(this.$router);
    },
    methods: {
//      toHome: () => {
//
//        console.log(this);//使用箭头函数后 this指向vue实例
//        this.$router.push('home');
//      },
      toHome: function () {
        console.log(this);//不使用箭头函数，this指代组件全局对象
        this.$router.push('../home');
      }
    }
    // computed:{
    //     childrenPage(){
    //         return this.$router.params.id
    //     }
    // }
  }

</script>
<style>
  .childrenDiv {
    border: 1px solid #ccc;
    width: 500px;
    margin: 0 auto;
  }
</style>
