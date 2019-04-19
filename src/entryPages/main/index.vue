<template>
  <div id="App">
    <vue-header></vue-header>
    <router-view></router-view>
  </div>
</template>
<script>
import vueHeader from "../../pages/header/header.vue";
export default {
  components: {
    vueHeader
  }
};
</script>
<style>
#App {
  padding-top: 60px;
}
</style>