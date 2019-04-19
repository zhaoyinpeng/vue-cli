/**
 * 自定义风格
 * 运用vue-bus
 * @author zyp
 * @created 2019/04/19 15:59:15
 */
<template>
  <div class="vue-style" :class="isShow" @mouseenter="showBtn" @mouseleave="hideBtn">
    <div v-for="(item, index) in styleList" :key="index" @click="changeStyle(item)">{{item.name}}</div>
  </div>
</template>
<script>
export default {
  name: "vueStyle",
  components: {},
  data() {
    return {
      styleList: [
        {
          name: "style1",
          bgc: "rgba(131,175,155,0.8)",
          color: "#fff"
        },
        {
          name: "style2",
          bgc: "rgba(222,156,83,0.8)",
          color: "#fff"
        }
      ],
      isShow: ""
    };
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {},
  //方法集合
  methods: {
    changeStyle(item) {
      this.$bus.emit("vue-style", item);
    },
    showBtn() {
      this.isShow = "show-btn";
    },
    hideBtn() {
      this.isShow = "";
    }
  },
  //监控data中的数据变化
  watch: {},
  destroyed() {} //生命周期 - 销毁完成
};
</script>
<style lang='less' scoped>
.vue-style {
  display: inline-block;
  position: fixed;
  top: 80px;
  right: -95px;
  background: darkolivegreen;
  border-radius: 30px 0 0 30px;
  padding: 20px;
  transition: all 0.5s;

  div {
    border: 1px solid #ccc;
    border-radius: 5px;
    width: 70px;
    height: 20px;
    line-height: 20px;
    text-align: center;
    margin: 10px 0;
    cursor: pointer;
    background-color: aquamarine;
  }
  &.show-btn {
    right: 0;
  }
}
</style>