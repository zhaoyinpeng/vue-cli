<template>
  <div>
    <h1>User</h1>
    <div>我是user组件, 动态部分是{{dynamicSegment}}</div>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        dynamicSegment: '1'
      }
    },
    mounted: function () {
      this.show$route()
    },
    methods: {
      show$route: function () {
        console.log(this.$route)
      }
    },
    created:function(){
      console.log('created');
    },
    beforeCreate:function(){
      console.log('beforeCreate');
    },
    watch: {
      dynamicSegment: {
        handler: function () {
          console.log('dynamicSegment发生了改变')
        },
        deep: true,
        immediate: true
      },
      $route: {
        handler: function () {
          this.dynamicSegment = this.$route.params.id;
          console.log(this.$route);
        },
        deep: true,
        immediate: true
      }
//      $route (to, from) {
//        // to表示的是你要去的那个组件，from 表示的是你从哪个组件过来的，它们是两个对象，你可以把它打印出来，它们也有一个param 属性
//        console.log(to)
//        console.log(from)
//        this.dynamicSegment = to.params.id
//      }
    }
  }
</script>
