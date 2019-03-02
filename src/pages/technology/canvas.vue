<template>
  <div class="canvas">
    <h4>{{title}}</h4>
    <canvas id="myCanvas" width="700" height="300">不支持</canvas>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        title: 'canvas',
        ctx: null
      }
    },
    mounted () {
      this.initCanvas();
    },
    methods: {
      initCanvas(){
        let _this = this;
        this.$nextTick(()=>{
          console.log(123);
          let myCanvas = document.getElementById('myCanvas');
          _this.ctx = myCanvas.getContext('2d');
          let ctx = _this.ctx;
          ctx.fillStyle = 'blue';
          ctx.fillRect(100,100,200,100);
        });
      }
    }
  }
</script>
<style>
div.canvas {
  border: 1px solid #000066;
}
canvas {
  border: 1px solid #000;
}
</style>
