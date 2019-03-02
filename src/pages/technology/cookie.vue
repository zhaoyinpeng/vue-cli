<template>
  <div class="cookie">
    <h4>{{title}}</h4>
    <button @click="setCookie">添加cookie</button>
    <button @click="getCookie">获取cookie</button>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        title: 'cookie'
      }
    },
    mounted () {

    },
    methods: {
      setCookie: function () {
        this._setCookie('myCookie', 'testCookie')
        console.log('已设置cookie：myCookie')
      },
      _setCookie: (name, value) => {
        let Days = 30
        let exp = new Date()
        exp.setTime(exp.getTime() + Days * 24 * 60 * 60 * 1000)//存放时间
        document.cookie = name + '=' + escape(value) + ';expires=' + exp.toGMTString()
      },
      getCookie: function () {
        var value = this._getCookie('myCookie')
        console.log(value)
      },
      _getCookie: (name) => {
        let arr
        let reg = new RegExp('(^| )' + name + '=([^;]*)(;|$)')

        if (arr === document.cookie.match(reg)) {
          return unescape(arr[2])
        } else {
          return null
        }
      }
    }
  }
</script>
<style>
  div.cookie {
    border: 1px solid #000066;
  }
</style>
