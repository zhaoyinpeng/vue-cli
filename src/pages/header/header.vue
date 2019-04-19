<template>
  <div id="header" :style="headerStyle">
    <logo></logo>
    {{title}}
    <vue-nav />
  </div>
</template>
<script>
import logo from "../../components/image.vue";
import vueNav from "../nav/nav.vue";
export default {
  name: "vueHeader",
  data() {
    return {
      title: "vue-cli",
      headerStyle: {}
    };
  },
  mounted() {
    this.changeStyle();
  },
  components: {
    logo,
    vueNav
  },
  methods: {
    //vue-bus改变样式
    changeStyle(item) {
      this.$bus.on("vue-style", style => {
        this.headerStyle = {
          backgroundColor: style.bgc,
          color: style.color
        };
      });
    }
  },
};
</script>
<style lang="less">
#header {
  width: 100%;
  height: 60px;
  position: fixed;
  top: 0;
  left: 0;
  border-bottom: 1px solid #ccc;
  text-align: left;
  line-height: 60px;
  font-size: 20px;
  z-index: 666;
  background-color: #fff;
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.25);
  overflow: hidden;
  .imgIcon {
    width: 40px;
    height: 40px;
    margin: 10px 20px;
    float: left;
    img {
      width: 100%;
      height: 100%;
      vertical-align: middle;
    }
  }
  #nav{
    float: right;
    margin: 10px 40px 10px 0;
    span:hover{
      color: rebeccapurple;
    }
  }
}
</style>
