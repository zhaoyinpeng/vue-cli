<template>
  <div>
    <h1>about</h1>
    <p>{{aboutMsg}}</p>
    <img-component @fromchildren="showMsg" :imgWidth="50" :imgHeight="50"></img-component>
    <img-component :imgWidth="150" :imgHeight="150"></img-component>
  </div>
</template>
<script>
  import imgComponent from '../components/image.vue';

  export default {
    data() {
      return {
        aboutMsg: '我是about组件'
      }
    },
    components: {
      imgComponent
    },
    methods: {
      showMsg: function (msg) {
        this.msg = msg;
        console.log(msg);
      }
    }
  }
</script>
