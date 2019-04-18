<template>
  <div>
    <h1 draggable="true">home页面</h1>
    <p>{{msg}}</p>
    <h3>router.js中定义嵌套路由</h3>
    <p>
      <router-link to="/home/phone">手机</router-link>
      <router-link to="/home/tablet">平板</router-link>
      <router-link to="/home/computer">电脑</router-link>
    </p>
    <router-view></router-view>

    <p>轮播图</p>
    <div class="swiper-box">
      <div
        :key="index"
        v-for="(item,index) in dataList"
        :class="calculate(item)"
        @mouseenter="mouseEnter(item)"
        @mouseleave="autoPlay()"
      >{{item.bgc}}</div>
      <span class="swiper-btn prev" @click="prev()"></span>
      <span class="swiper-btn next" @click="next()"></span>
    </div>
    <p>嵌入微信页面（失败，得结合后台）</p>
    <iframe :src="iframeUrl" frameborder="0" width="600px" height="700px" draggable="true"></iframe>
    <p>拖动插件</p>
    <transition-group tag="div" @dragover.prevent class="drag-box">
      <div
        class="drag-item"
        v-for="(item, index) in dragDomList"
        :key="item.index"
        draggable="true"
        @dragstart="dragstart(index)"
        @dragend="dragend(index)"
        @dragenter="dragenter($event, index)"
        @dragover.prevent="dragover($event, item)"
      >{{item.info}}</div>
    </transition-group>
    <p>拖动插件2</p>
    <transition-group tag="div" class="container">
      <div
        class="item"
        v-for="(item,index) in items"
        :key="item.key"
        :style="{background:item.color}"
        draggable="true"
        @dragstart="handleDragStart($event, item)"
        @dragover.prevent="handleDragOver($event, item)"
        @dragenter="handleDragEnter($event, item)"
        @dragend="handleDragEnd($event, item)"
      >{{item.key}}</div>
    </transition-group>
  </div>
</template>
<script>
import { explode } from "@turf/turf";
export default {
  data() {
    return {
      msg: "我是home 组件",
      timer: null,
      dataList: [
        {
          index: 1,
          bgc: "red"
        },
        {
          index: 2,
          bgc: "yellow"
        },
        {
          index: 3,
          bgc: "green"
        }
      ],
      iframeUrl: "",
      dragTarget: null,
      dragDomList: [
        {
          info: "1",
          index: 0
        },
        {
          info: "2",
          index: 1
        },
        {
          info: "3",
          index: 2
        },
        {
          info: "4",
          index: 3
        },
        {
          info: "5",
          index: 4
        },
        {
          info: "6",
          index: 5
        }
      ],
      items: [
        { key: 1, color: "#ffebcc" },
        { key: 2, color: "#ffb86c" },
        { key: 3, color: "#f01b2d" },
        { key: 4, color: "#ffb86c" },
        { key: 5, color: "#f01b2d" },
        { key: 6, color: "#ffb86c" }
      ],
      dragging: null,
      draggingTimer2: null
    };
  },
  mounted() {
    this.autoPlay();
    this.getURL("https://mp.weixin.qq.com/s/VVdHf0Zme9fr7D7UVhEMfg");
  },
  methods: {
    calculate(item) {
      return "s" + item.index;
    },
    // 轮播
    next() {
      this.stopPlay();
      this.dataList.forEach((element, i) => {
        if (element.index === 1) {
          this.$set(this.dataList[i], "index", this.dataList.length);
        } else {
          this.$set(this.dataList[i], "index", element.index - 1);
        }
      });
      this.autoPlay();
    },
    prev() {
      this.stopPlay();
      this.dataList.forEach((element, i) => {
        if (element.index === this.dataList.length) {
          this.$set(this.dataList[i], "index", 1);
        } else {
          this.$set(this.dataList[i], "index", element.index + 1);
        }
      });
      this.autoPlay();
    },
    autoPlay() {
      this.timer = setTimeout(() => {
        this.next();
      }, 3000);
    },
    stopPlay() {
      clearTimeout(this.timer);
    },
    mouseEnter(item) {
      this.stopPlay();
      if (item.index === 2) {
        return;
      } else {
      }
    },
    // 轮播结束

    // iframe嵌入微信页面
    getURL(url) {
      let http = window.location.protocol === "http:" ? "http:" : "https:";
      let realurl = http + "//cors-anywhere.herokuapp.com/" + url;
      let that = this;
      $.ajax({
        type: "get",
        url: realurl,
        success: function(res) {
          if (res) {
            let data = res;
            data = data.replace(/data-src/g, "src");
            let htmlSrc = "data:text/html;charset=utf-8," + data; // 解析码解决乱码
            that.iframeUrl = htmlSrc;
          }
        },
        error: function(err) {
          console.log(err);
          Toast("好像出错了...");
        }
      });
    },

    //拖拽
    dragstart(index) {
      console.log("dragstart", index);
      this.dragTarget = index;
    },
    dragend(index) {
      console.log("dragend", index);
      if (this.dragTarget === index) {
        return;
      }
      var tempOption = this.dragDomList[index];
      this.$set(this.dragDomList, index, this.dragDomList[this.dragTarget]);
      this.$set(this.dragDomList, this.dragTarget, tempOption);
      this.dragTarget = null;
    },
    dragenter(e, index) {
      e.dataTransfer.effectAllowed = "move"; //为需要移动的元素设置dragstart事件
      console.log("dragenter", index);
      this.dragTarget = index;
    },
    dragover(e, item) {
      e.dataTransfer.dropEffect = "move"; // e.dataTransfer.dropEffect="move";//在dragenter中针对放置目标来设置!
    },
    drop(event) {
      console.log("drop", event);
    },
    //拖动2
    handleDragStart(e, item) {
      this.dragging = item;
    },
    handleDragEnd(e, item) {
      this.dragging = null;
    },
    //首先把div变成可以放置的元素，即重写dragenter/dragover
    handleDragOver(e) {
      e.dataTransfer.dropEffect = "move"; // e.dataTransfer.dropEffect="move";//在dragenter中针对放置目标来设置!
    },
    handleDragEnter(e, item) {
      e.dataTransfer.effectAllowed = "move"; //为需要移动的元素设置dragstart事件
      if (item === this.dragging) {
        return;
      }
      if (this.draggingTimer2) {
        clearTimeout(this.draggingTimer2);
      }
      let dragging = this.dragging;
      this.draggingTimer2 = setTimeout(() => {
        this.draggingTimer2 = null;
        const newItems = [...this.items];
        console.log(newItems);
        console.log(dragging);
        const src = newItems.indexOf(dragging);
        const dst = newItems.indexOf(item);
        console.log('源',src);
        console.log('目标',dst);
        newItems.splice(dst, 0, ...newItems.splice(src, 1));

        this.items = newItems;
        let list = [];
        this.items.forEach(element => {
          list.push(element.key);
        });
        console.log(list);
      }, 500);
    }
  }
};
</script>
<style lang="less">
.swiper-box {
  width: 800px;
  height: 500px;
  position: relative;
  span {
    width: 50px;
    height: 50px;
    background-color: coral;
    position: absolute;
    top: calc(50% - 25px);
    z-index: 10;
  }
  .next {
    right: 0px;
  }
  .prev {
    left: 0px;
  }

  div {
    width: 250px;
    height: 400px;
    position: absolute;
    top: 40px;
    background-color: aqua;
    z-index: 1;
    transition: all 1s linear;
  }
  .s1 {
    left: 100px;
    background-color: pink;
  }
  .s2 {
    left: 250px;
    top: 30px;
    z-index: 2;
    width: 300px;
    background-color: darkblue;
  }
  .s3 {
    left: 450px;
    background-color: saddlebrown;
  }
}
.drag-box {
  width: 600px;
  height: 400px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;
  align-content: space-around;
  background-color: darkgrey;
  .drag-item {
    width: 180px;
    height: 180px;
    border: 1px solid #e3093c;
    transition: all 0.5s ease-in-out;
    &:nth-child(2n) {
      background-color: aquamarine;
    }
    &:nth-child(2n + 1) {
      background-color: greenyellow;
    }
  }
}
.container {
  padding: 0;
  width: 600px;
  height: 400px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;
  align-content: space-around;
  background-color: darkgrey;
  .item {
    transition: all 0.5s linear;
    border: 1px solid #e3093c;
    width: 180px;
    height: 180px;
  }
}
</style>
