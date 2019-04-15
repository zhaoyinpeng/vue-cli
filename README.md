# vuecli

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test

# run dllplugin 加快打包方式，分离插件
npm run dll
```

```
#2019/4/3 
1.研究vue-cli npm run build 本地打包方法（本地可看）<br>  
2.vue 路由懒加载实现分模块加载不同js文件（按路由，打包后依然适用）<br>  
3.vue 加载css文件的两种方式 import @import（暂未遇到路径不对问题）<br>  
4.vue 路由懒加载实现某几个模块合并一起打包，从而减少小js数量（按路由，打包后依然适用）<br> 
#2019/4/8
1.vue中小图片自动转换成文字格式<br>  
2.使用配置别名 以后就可以直接引用该位置 相对文件位置

#2019/4/9
1.测试使用extract-text-webpack-plugin插件分模块打包css，失败

#2019/4/10
1.vue通过DllPlugin插件优化打包性能，减少打包时间（基于vue-cli） 查看此博客https://blog.csdn.net/przlovecsdn/article/details/82761912
2.less,sess在vue中使用
3.vue 中使用svg图片
4.vue-cli 搭建流程探索 m3模块（探索中）

#2019/4/12
1.vue实现多入口方法创建项目，实现大型应用分页面，遇到的主要的坑
（1）基本方法按照此博客https://www.cnblogs.com/jasonwang2y60/p/9247283.html 和 https://www.cnblogs.com/moqiutao/p/8522293.html，无错误，但是跟你在webpack.base.conf.js引用的插件有关。
（2）new webpack.optimize.CommonsChunkPlugin('common.js') 这个引入插件会导致npm run dev包webpackJsonp 错误，原因估计为跟HtmlWebpackPlugin html渲染插件中 chunks配置有关。
（3）多入口跟DllPlugin插件有部分冲突，如果各个模块都需要加载公共插件，可以使用，但要在各个模块html入口中引入vendor.dll.js。我觉的如果非硬性要求，不使用DllPlugin插件，可以在各模块html中直接引插件js。

#2019/4/15
1.vue实现简单轮播图效果（home.vue）
```

```
#计划解决问题
#4.分模块懒加载css文件 webpack.prod.conf.js配置模块（探索中） 2019/4/9
#5.合并加载多个css文件
#6.尝试找其他懒加载js模块的方法
#7.vue 多入口方法
#8.vue拖拽方法

```
For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
