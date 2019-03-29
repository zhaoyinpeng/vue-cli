<template>
  <div>
    <h1>{{title}}</h1>
    <ul class="tree">
      <li  v-for="item in items" :key="item.name">
        <router-link :to="item.url">{{item.name}}</router-link>
      </li>
    </ul>
    <router-view></router-view>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        title : '科技树',
        items : [{
          name:'设计模式',
          url:'/technologyTree/designModule'
        },{
          name:'cookie',
          url:'/technologyTree/cookie'
        },{
          name:'canvas',
          url:'/technologyTree/canvas'
        },{
          name:'xss',
          url:'/technologyTree/xss'
        },{
          name:'websocket',
          url:'/technologyTree/websocket'
        },{
          name:'mapbox-gl',
          url:'/technologyTree/mapboxgl'
        }]
      }
    },
    mounted () {
    },
    methods: {}
  }
</script>
<style>

</style>
