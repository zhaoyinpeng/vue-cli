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
    <div class="swiper-box">
      <div :key="index" v-for="(item,index) in dataList" :class="calculate(item)" @mouseenter="mouseEnter(item)" @mouseleave="autoPlay()">{{item.bgc}}</div>
      <span class="swiper-btn prev" @click="prev()"></span>
      <span class="swiper-btn next" @click="next()"></span>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      msg: "我是home 组件",
      timer: null,
      dataList: [
        {
          index: 1,
          bgc: "red"
        },
        {
          index: 2,
          bgc: "yellow"
        },
        {
          index: 3,
          bgc: "green"
        }
      ]
    };
  },
  mounted() {
    this.autoPlay();
  },
  methods: {
    calculate(item) {
      return "s" + item.index;
    },
    next() {
      this.stopPlay();
      this.dataList.forEach((element, i) => {
        if (element.index === 1) {
          this.$set(this.dataList[i], "index", this.dataList.length);
        } else {
          this.$set(this.dataList[i], "index", element.index - 1);
        }
      });
      this.autoPlay();
    },
    prev() {
      this.stopPlay();
      this.dataList.forEach((element, i) => {
        if (element.index === this.dataList.length) {
          this.$set(this.dataList[i], "index", 1);
        } else {
          this.$set(this.dataList[i], "index", element.index + 1);
        }
      });
      this.autoPlay();
    },
    autoPlay() {
      this.timer = setTimeout(() => {
        this.next();
      }, 3000);
    },
    stopPlay() {
      clearTimeout(this.timer);
    },
    mouseEnter(item) {
      this.stopPlay();
      if (item.index === 2) {
        return;
      } else {
        
      }
    }
  }
};
</script>
<style lang="less">
.swiper-box {
  width: 800px;
  height: 500px;
  position: relative;
  span{
    width: 50px;
    height: 50px;
    background-color: coral;
    position: absolute;
    top: calc(50% - 25px);
    z-index: 10;
  }
  .next{
    right: 0px;
  }
  .prev{
    left: 0px;
  }

  div {
    width: 250px;
    height: 400px;
    position: absolute;
    top: 40px;
    background-color: aqua;
    z-index: 1;
    transition: all 1s linear;
  }
  .s1 {
    left: 100px;
    background-color: pink;
  }
  .s2 {
    left: 250px;
    top: 30px;
    z-index: 2;
    width: 300px;
    background-color: darkblue;
  }
  .s3 {
    left: 450px;
    background-color: saddlebrown;
  }
}
</style>

