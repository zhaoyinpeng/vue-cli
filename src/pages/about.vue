<template>
  <div>
    <h1>{{aboutMsg}}</h1>
    <p>组件</p>
    <img-component @fromchildren="showMsg" :imgWidth="50" :imgHeight="50"></img-component>
    <img-component :imgWidth="150" :imgHeight="150"></img-component>
    <p>插件</p>
    <button class="btn" @click="msgPlugin('info弹窗','info')">info弹窗</button>
    <button class="btn" @click="msgPlugin('success弹窗','success')">success弹窗</button>
    <button class="btn" @click="msgPlugin('warning弹窗','warning')">warning弹窗</button>
    <button class="btn" @click="msgPlugin('error弹窗','error')">error弹窗</button>
  </div>
</template>
<script>
import imgComponent from "../components/image.vue";
export default {
  data() {
    return {
      aboutMsg: "插件，组件"
    };
  },
  components: {
    imgComponent
  },
  methods: {
    showMsg: function(msg) {
      this.msg = msg;
      console.log(msg);
    },
    msgPlugin(text,type) {
      this.$message[type](text,()=>{
        alert('回调函数');
      });
    }
  }
};
</script>
<style lang="less" scoped>
.btn {
  padding: 10px;
  display: inline-block;
  border: 1px solid #ccc;
  background-color: blueviolet;
  cursor: pointer;
  outline: none;
}
</style>

