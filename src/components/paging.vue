<!-- 分页插件 -->
<template>
  <div class="paging">
    <span class="totalPage">总页数：{{totalPage}}</span>
    <span class="currentPage">当前页数：{{cPage}}</span>
    <a :class="[cPage === 1?'disableClick':'','prevPage']" @click="prevPage">上一页</a>
    <a href="javascript:void(0);" v-show="prevPageOmit">...</a>
    <a href="javascript:void(0);" v-for="item in prevPageList" :key="item" @click="gotoPage(item)">{{item}}</a>
    <a href="javascript:void(0);" class="aCurrentPage">{{cPage}}</a>
    <a href="javascript:void(0);" v-for="item in nextPageList" :key="item" @click="gotoPage(item)">{{item}}</a>
    <a href="javascript:void(0);" v-show="nextPageOmit">...</a>
    <a :class="[cPage === totalPage?'disableClick':'','nextPage']" @click="nextPage">下一页</a>
  </div>
</template>

<script>
export default {
  name: "paging",
  components: {},
  props: {
    currentPage: {
      type: Number,
      default: 1
    },
    totalPage: {
      type: Number,
      default: 1
    }
  },
  data() {
    return {
      cPage: 1,
      prevPageList: [],
      nextPageList: [],
      prevPageOmit: false,
      nextPageOmit: false,
      showPageNum: 2
    };
  },
  computed: {},
  watch: {
    cPage(newVal, oldVal) {
      this.cPageChange();
      this.calcPageList();
    }
  },
  //方法集合
  methods: {
    prevPage() {
      if (this.cPage !== 1) {
        this.cPage--;
      }
    },
    nextPage() {
      if (this.cPage !== this.totalPage) {
        this.cPage++;
      }
    },
    gotoPage(item) {
      this.cPage = item;
    },
    cPageChange() {
      this.$emit("cPageChange", this.cPage);
    },
    calcPageList() {
      //前半部分 当前页数之前
      if (this.cPage === 1) {
        this.prevPageList = [];
      }
      if (this.cPage > 1 && this.cPage <= this.showPageNum) {
        let array = [...Array(this.cPage).keys()].splice(1);
        this.prevPageList = array;
      }
      if (this.cPage > this.showPageNum) {
        let array = [];
        for (let index = this.cPage - this.showPageNum; index <= this.cPage - 1; index++) {
          array.push(index);
        }
        this.prevPageList = array;
      }
      //是否显示前面省略号
      if (this.prevPageList.length === this.showPageNum && this.prevPageList[0] > 1) {
        this.prevPageOmit = true;
      } else {
        this.prevPageOmit = false;
      }

      //后半部分
      if (this.cPage === this.totalPage) {
        this.nextPageList = [];
      }

      if (this.cPage < this.totalPage - this.showPageNum) {
        let array = [];
        for (let index = this.cPage + 1; index <= this.cPage + this.showPageNum; index++) {
          array.push(index);
        }
        this.nextPageList = array;
      }
      if (this.cPage < this.totalPage && this.cPage >= this.totalPage - this.showPageNum) {
        let array = [];
        for (let index = this.cPage + 1; index <= this.totalPage; index++) {
          array.push(index);
        }
        this.nextPageList = array;
      }

      //是否显示后面省略号
      if (this.nextPageList.length === this.showPageNum && this.nextPageList.slice(-1) < this.totalPage) {
        this.nextPageOmit = true;
      } else {
        this.nextPageOmit = false;
      }
    }
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {
    this.cPage = this.currentPage;
  },
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {
    this.calcPageList();
  }
};
</script>
<style lang='less' scoped>
.paging {
  display: flex;
  flex-direction: row;
  height: 30px;
  user-select: none;
  & > a {
    display: inline-block;
    height: 100%;
    border: 1px solid #ccc;
    border-radius: 5px;
    padding: 0 10px;
    line-height: 30px;
    cursor: pointer;
    box-sizing: border-box;
    text-decoration: none;
    color: #333;
  }
  & > a.disableClick {
    cursor: not-allowed;
    background-color: #ccc;
  }
  & > a.aCurrentPage {
    background-color: brown;
    cursor: not-allowed;
  }
  & > span {
    display: inline-block;
    height: 100%;
    padding: 0 10px;
    line-height: 30px;
  }
}
</style>