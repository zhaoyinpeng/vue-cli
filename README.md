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

```

```
#计划解决问题
#3.vue 中使用svg图片
#4.分模块懒加载css文件 webpack.prod.conf.js配置模块（探索中） 2019/4/9
#5.合并加载多个css文件
#6.尝试找其他懒加载js模块的方法
#7.vue 多入口方法
#8.vue-cli 搭建流程探索 m3模块（探索中）2019/4/10
```
For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
