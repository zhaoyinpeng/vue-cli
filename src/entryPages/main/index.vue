<template>
  <div id="App">
    <vue-header></vue-header>
    <vue-style></vue-style>
    <router-view></router-view>
  </div>
</template>
<script>
import vueHeader from "../../pages/header/header.vue";
import vueStyle from "../../pages/pageStyle/pageStyle.vue";
export default {
  components: {
    vueHeader,
    vueStyle
  }
};
</script>
<style>
#App {
  padding-top: 60px;
}
</style>