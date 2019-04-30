<template>
  <div class="technology-tree">
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
          name:'es6',
          url:'/technologyTree/es6'
        },{
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
        },{
          name:'m1',
          url:'/technologyTree/m1'
        },{
          name:'m2',
          url:'/technologyTree/m2'
        },{
          name:'m3',
          url:'/technologyTree/m3'
        }]
      }
    },
    mounted () {
    },
    methods: {}
  }
</script>
<style>
  .technology-tree{
    min-width: 100%;
    min-height: 100%;
  }
</style>
