<template>
  <div class="index" :class="{backopa:$store.state.todos.themeStyle}">
    <el-row>
      <el-col :span="17" :xs="{span:24}">
        <div class="banner">
          <h2>
            <span :class="{textcolor:$store.state.todos.themeStyle}">C</span>
            <span :class="{textcolor:$store.state.todos.themeStyle}">C</span>
            <span :class="{textcolor:$store.state.todos.themeStyle}">插</span>
            <span :class="{textcolor:$store.state.todos.themeStyle}">件</span>
          </h2>
          <h5 :class="{textcolor:$store.state.todos.themeStyle}">___分享最优秀的chrome插件</h5>
        </div>
        <index-swiper></index-swiper>
      </el-col>
      <el-col :span="7" :xs="{span:24}" class="index-right">
        <news title="最新收录" :result="news"></news>
        <!-- 最新收录 -->
        <news title="人气最高" :result="hot"></news>
        <!-- 最新收录 -->
      </el-col>
    </el-row>
  </div>
</template>

<script>
import indexSwiper from "@/components/indexChild/indexSwiper";
import news from "@/components/indexChild/news";
import { newsIndex } from "@/plugins/http.js";
export default {
  components: {
    indexSwiper,
    news //最新收录
  },
  async asyncData() {
    const res = await newsIndex();
    return { news: res.data.news, hot: res.data.hot };
  }
};
</script>
<style lang="less">
.index {
  padding: 20px 10px;
  overflow: hidden;
  background-color: white;
  border-radius: 15px;
  .logos {
    a {
      width: 100%;
      display: flex;
      justify-content: center;
      img {
        width: 65%;
      }
    }
  }
  .banner {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 5px;
    h2 {
      padding: 10px 0;
      span {
        color: #949494;
        font-size: 40px;
        font-family: "KaiTi";
        font-weight: 700;
      }
    }
    h5 {
      font-size: 10px;
      margin-top: 15px;
      color: #999;
    }
  }
}
</style>
