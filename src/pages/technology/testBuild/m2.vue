<template>
  <div>
    测试打包模块2
    <h3>svg图片引入</h3>
    <p>方法一</p>
    <embed :src="svgImg" width="300" height="100" 
type="image/svg+xml"
pluginspage="http://www.adobe.com/svg/viewer/install/" />
  </div>
</template>
<script>
import svgImg from 'pages/technology/img/a.svg';
export default {
  data() {
    return {
      svgUrl: svgImg
    };
  },
  mounted() {},
  methods: {}
};
</script>
<style>
</style>