<template>
  <div id="m3">
    测试打包模块3
    <hr>
    <h3>vue-cli npm run dev整个项目搭建流程深入</h3>
    <a href="https://blog.csdn.net/six_six_six_666/article/details/82633731">博客入口</a>
    <a href="https://blog.csdn.net/cerastes/article/details/85065037">整个过程</a>
    <ul>
      <li>
        1.运行npm run dev实际执行的是package.json文件中的webpack-dev-server --inline --progress --config build/webpack.dev.conf.js
        <br>--inline 热更新实现的方式，此方式会将webpack-dev-server客户端加入到webpack入口文件的配置中。还有一个 --iframe 不推荐的方式，通过iframe 来实现的。
        <br>--progress 是否显示在编译时候的进度条，一般都会有，看着编译的进度，体验好一些。
        <br>--config XXXX.js 通过这个参数指定一个新的配置文件。这里指定了 build/webpack.dev.conf.js
      </li>
      <li>
        2.webpack.dev.conf文件通过merge引用了webpack.base.conf.js文件。里面有基础配置，包括入口，出口，路径配置等
        <br>
        <i>
          entry: {
          app: './src/main.js'
          }
        </i>
      </li>
      <li>3.调用了入口文件中进入main.js,里面创建了一个vue实例，定义了一个html元素。</li>
      <li>
        4.创建的vue会插入到webpack.dev.config.js配置文件中的HtmlWebpackPlugin配置文件中，进行初始化？
        <i>
          new HtmlWebpackPlugin({
          filename: 'index.html',
          template: 'index.html',
          inject: true
          }),
        </i>
      </li>
      <li>
        5.main.js中配置了router-view,router-view会加载各个模块并插入到index.html中。
      </li>
      <li>
        6.页面渲染？
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  mounted() {},
  methods: {}
};
</script>
<style scoped>
  #m3 li{
    display: list-item;
  }
</style>