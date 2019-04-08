<template>
  <div class="cookie">
    <h4>{{title}}</h4>
    <button @click="setCookie">添加cookie</button>
    <button @click="getCookie">获取cookie</button>
    <img src="./img/a.png" alt>
    <img :src="imgUrl" alt>
    <img style="width:200px;" :src="imgUrl2" alt>
  </div>
</template>
<script>
//引入图片不能直接 写绝对路径和相对路径，得用import引入
//或直接将图片放入static目录下，用相对路径去引入 ../../../static/xxx
import aImg from "@/pages/technology/img/a.png";
import bImg from "pages/technology/img/doge.jpg";
export default {
  data() {
    return {
      title: "cookie",
      // imgUrl: './img/a.png', 错误
      // imgUrl: '@/pages/technology/img/a.png', 错误
      imgUrl: aImg,
      imgUrl2: bImg
    };
  },
  mounted() {},
  methods: {
    setCookie: function() {
      this._setCookie("myCookie", "testCookie");
      console.log("已设置cookie：myCookie");
    },
    _setCookie: (name, value) => {
      let Days = 30;
      let exp = new Date();
      exp.setTime(exp.getTime() + Days * 24 * 60 * 60 * 1000); //存放时间
      document.cookie =
        name + "=" + escape(value) + ";expires=" + exp.toGMTString();
    },
    getCookie: function() {
      var value = this._getCookie("myCookie");
      console.log(value);
    },
    _getCookie: name => {
      let arr;
      let reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");

      if (arr === document.cookie.match(reg)) {
        return unescape(arr[2]);
      } else {
        return null;
      }
    }
  }
};
</script>
<style>
div.cookie {
  border: 1px solid #000066;
}
</style>
