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
          ctx.fillRect(10,10,20,10);

          ctx.beginPath();
          ctx.lineWidth = '5';
          ctx.strokeStyle = 'red';
          ctx.moveTo(100,100);
          ctx.lineTo(200,200);
          ctx.lineTo(300,200);
          ctx.closePath();
          ctx.stroke();
          ctx.fillStyle = 'blue';
          ctx.fill();

          ctx.beginPath();
          ctx.lineWidth = '3';
          ctx.strokeStyle = 'green';
          ctx.moveTo(250,250);
          ctx.lineTo(300,250);
          ctx.lineTo(300,270);
          ctx.closePath();
          ctx.fillStyle = 'yellow';
          ctx.fill();
          ctx.stroke();
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
