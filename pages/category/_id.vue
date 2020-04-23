<template>
  <div class="content-box" :class="{backopa:$store.state.todos.themeStyle}">
    <posi-tion ref="resultIf"></posi-tion>
    <el-row v-if="model">
      <detail-col v-for="(item,index) in model" :key="index" :itemData="item"></detail-col>
    </el-row>
    <div class="pagenation">
      <el-pagination
        class="elPage"
        :pager-count="5"
        v-bind:current-page="pageNo"
        background
        layout="prev, pager, next"
        @current-change="currentPage"
        :hide-on-single-page="true"
        ref="pagination"
        v-if="currentKeep"
        :total="len * 10"
      ></el-pagination>
    </div>
  </div>
</template>

<script>
import posiTion from "@/components/categoryChild/position";
import detailCol from "@/components/categoryChild/detail_col";
import { viewData, inputLike } from "@/plugins/http.js";
export default {
  data() {
    return {
      currentKeep: true,
      pageNo:parseInt(this.$route.query.page) + 1
    };
  },
  components: {
    posiTion,
    detailCol
  },
 
  methods: {
    currentPage(elementPage) {
      if (this.$route.query.val) {
        var querys = {
          id: this.$route.query.id,
          page: elementPage - 1,
          val: this.$route.query.val
        };
      } else {
        var querys = {
          id: this.$route.query.id,
          page: elementPage - 1
        };
      }
      this.$router.push({
        path: this.$route.path,
        query:querys 
      });
      window.scroll(0, 0);
    },

  },
  async asyncData({ query, params, route }) {
    //发送请求,获取数据
    let obj;
    let page = query.page || 0;
    let val = query.val || ''
    obj = { page: page, pagesize: 16 ,val:val,...params};

    let str = "";
    for (let key in obj) {
      str += "&" + key + "=" + obj[key];
    }
    str = str.replace("&", "?");
    if (query.val != undefined) {
      var res = await inputLike(obj);
    } else {
      var res = await viewData(str);
    }
    return { model: res.data.data, len: res.data.pagelen };
  },
  watchQuery: true,
  created() {
    this.$bus.$on("inputVal", (res, val) => {
      this.model = res.data; //搜索结果的数据
      this.len = res.pagelen; //搜索结果的页数
      this.$route.query.val = val
      this.pageNo = 1
    });
  }
};
</script>

<style lang="less">
.content-box {

  background-color: white;
  padding: 10px 10px;
  border-radius: 15px;
  min-height: 595px;
  .pagenation {
    width: 100%;
    position: relative;
    height: 30px;
    .elPage {
      display: inline-block;
      position: absolute;
      left: 50%;
      transform: translate(-50%);
    }
  }
}
</style>