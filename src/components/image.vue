<template>
  <div class="imgIcon"><img @click="sendMsg" ref="img" src="../assets/logo.png" alt="logo"></div>
</template>
<script>
  export default {
    data() {
      return {}
    },
    props: ['imgWidth', 'imgHeight'],
    mounted() {
      console.log(this.$refs.img);
      $(this.$refs.img).css({
        width: this.imgWidth + 'px',
        height: this.imgHeight + 'px'
      });
    },
    methods: {
      sendMsg:function(){
        console.log('sendMsg');
        //向父组件传值
        this.$emit('fromchildren', '来自image.vue子组件');
      }
    }
  }
</script>
<style>
  .imgIcon {
    display: inline-block;
  }

  .imgIcon img {
    display: block;
  }
</style>
