<!-- 导航模块 -->
<template>
  <div id="nav" :style="navStyle">
    <div v-for="(item, index) in navList" :key="index">
      <span @click="changeNav(item)">{{item.name}}</span>
    </div>
  </div>
</template>

<script>
import navJson from "./navList.js";
import { mapState, mapActions } from "vuex";
export default {
  //import引入的组件需要注入到对象中才能使用
  components: {},
  data() {
    //这里存放数据
    return {
      navList: [],
      navStyle: {}
    };
  },
  //监听属性 类似于data概念
  computed: {
    ...mapState({
      currentNav: state => state.nav.currentNav
    })
  },
  //监控data中的数据变化
  watch: {
    currentNav(newVal, oldVal) {
      this.showNavName();
    }
  },
  //方法集合
  methods: {
    ...mapActions(["setNav"]),
    changeNav(item) {
      // let array = this.getIdList([], item.id);
      this.$router.push(item.url);
    },
    getIdList(array, id) {
      let _this = this;
      navJson.forEach(nav => {
        if (nav.id === id) {
          array.unshift(nav.id);
          if (nav.parent || nav.parent === 0) {
            _this.getIdList(array, nav.parent);
          }
        }
      });
      return array;
    },
    showNavName() {
      this.navList = [];
      this.currentNav.forEach(element => {
        navJson.forEach(nav => {
          if (nav.id === element) {
            this.navList.push(nav);
          }
        });
      });
    }
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {
    if (this.currentNav) {
      this.showNavName();
    }
  },
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {
    console.log(this.$store.state.nav.currentNav);
  },
  beforeCreate() {}, //生命周期 - 创建之前
  beforeMount() {}, //生命周期 - 挂载之前
  beforeUpdate() {}, //生命周期 - 更新之前
  updated() {}, //生命周期 - 更新之后
  beforeDestroy() {}, //生命周期 - 销毁之前
  destroyed() {}, //生命周期 - 销毁完成
  activated() {} //如果页面有keep-alive缓存功能，这个函数会触发
};
</script>
<style lang='less' scoped>
//@import url(); 引入公共css类
#nav {
  height: 30px;
  line-height: 30px;
  display: inline-block;
  div {
    display: inline-block;
    position: relative;
    margin-right: 20px;
    &::after {
      content: ">";
      position: absolute;
      top: 0;
      left: 100%;
      width: 20px;
      height: 30px;
      text-align: center;
      line-height: 30px;
    }
    span {
      cursor: pointer;
      display: inline-block;
      position: relative;
    }
  }

  div:last-child {
    margin-right: 0;
    &::after {
      display: none;
    }
  }
}
</style>