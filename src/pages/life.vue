<template>

</template>
<script>
  export default {
    data () {
      return {}
    },
    mounted () {
    },
    beforeCreate: function () {
      console.log('创建前')
      console.log(this)
      /*返回的就是一个实例对象，为什么呢，因为根据官网生命周期图示，						此时已经完成了Vue实例的初始化工作，this指向的是实例对象本身，所以一定会返回值*/
      console.log(this.folder)
      /*undefined，这个为啥呢？同样的也是根据官网所给出的生命周期图示，								 此时还不没监控data属性，所以就更别提里面的值了*/
    },
    created: function () {
      console.log('创建后')
      console.log(this.folder)
      /*"Vuejs的生命周期究竟是什么样子？我真的很想知道！",因为根据官网生命周期的图									示，创建完成势力后，此时已经监控到data属性变化了，当然也就返回真值啦*/
      console.log(this.$el)
      /*undefined，还是同上，在这个阶段，势力还没检测到有没有el属性，所以也就无法识别$el了*/
    },
    beforeMount: function () {
      console.log('mount(挂载)之前')
      console.log(this.folder)
      /*返回预设值，理由同上*/
      console.log(this.$el)
      /*挂在开始之前被调用，（顾名思义还没挂在上嘛，当然不知道根元素在哪里，也就也就没法渲染和转译啦）返回真的实例所挂载的dom对象，还是同上，							因为在这个阶段之前，已经检测到了有el属性所以也就理所当然的返回真值啦。							但此时返回的还是纯生的DOM对象，{{folder}}并没有被转义，这就更加说明了							实例还没挂载上呢*/
    },
    mounted: function () {
      console.log('挂载之后')
      console.log(this.folder)
      /*返回预设值，理由同上*/
      console.log(this.$el)
      /*挂载之后，才回调用，既然已经挂载上了，那也就知道根元素在哪里了，当然也就能返回正确的值啊*/
    },
    beforeUpdate: function () {
      console.log('更新之前')
      console.log(this.folder)
      /*数据更新时调用，也就是说这个回到函数的触发是在数据更新的时候运行的，									在这里就是点击事件发生的时候，因为点击的时候改变了数据的值，但是*/
      console.log(this.$el)
      /*返回的是新的DOM对象，更新过后的*/
    },
    updated: function () {
      console.log('更新之后')
      console.log(this.folder)
      console.log(this.$el)
      /*数据更新后调用，由于数据更改导致的虚拟 DOM 重新渲染和打补丁，所以你现在可以执行依赖于 DOM 的操作。然而在大多数情况下，								你应该避免在此期间更改状态。如果要相应状态改变，通常最好使用计算属性或 watcher 取而代之*/
    },
    beforeDestroy: function () {
      console.log('销毁之前')
      /*实例销毁之前调用。在这一步，实例仍然完全可用，怎么让实例销毁呢？*/
      console.log(this.folder)
      console.log(this.$el)
    },
    destroyed: function () {
      console.log('销毁之后')
      /*Vue 实例销毁后调用。调用后，Vue 实例指示的所有东西都会解绑定，所有的事件监听器会被移除，所有的子实例也会被销毁。*/
      console.log(this.folder)
      console.log(this.$el)
    }
  }
</script>
<style>

</style>
