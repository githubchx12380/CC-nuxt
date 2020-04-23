<template>
  <div v-if="$route.params.id" class="detail" :class="{backopa:$store.state.todos.themeStyle}">
    <posi-tion :componen="model.chrome_name"></posi-tion>
    <div class="detail-title">
      <p :class="{textcolor:$store.state.todos.themeStyle}">{{model.chrome_name}}</p>
    </div>

    <el-row class="detail-content">
      <el-col :span="12" style="padding:0 10px" :xs="{span:24}">
        <cont-item class="detail-url" title="下载链接：">
          <a :href="model.chrome_url" slot="detail-jieshao">点击下载</a>
        </cont-item>
        <cont-item title="安装方法：">
          <div slot="detail-jieshao" style="padding-left:10px">
            <a
              href="/jiaocheng"
              target="_blank"
              style="color:#337ab7"
            >Chrome插件安装方法!解决CRX_HEADER_INVALID</a>
          </div>
        </cont-item>
        <cont-item title="截图：">
          <div slot="detail-jieshao">
            <img :src="model.chrome_img" alt style="width:90%;border-radius:5px;" />
          </div>
        </cont-item>
      </el-col>
      <el-col :span="12" :xs="{span:24}" style="margin-top:10px;">
        <cont-item title="简介：">
          <div slot="detail-jieshao">
            <p class="detail-content" :class="{textcolor:$store.state.todos.themeStyle}">{{chinaText}}</p>
          </div>
        </cont-item>
        <cont-item title="收录时间：">
          <div slot="detail-jieshao">
            <div style="color:#888">{{model.date}}</div>
          </div>
        </cont-item>
        <cont-item title="标签：">
          <div slot="detail-jieshao">
            <div class="categoryBtn">
              <span>{{model.chrome_category_title}}</span>
            </div>
          </div>
        </cont-item>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import posiTion from "@/components/categoryChild/position";
import contItem from "@/components/DetailChild/cont_item";
import { detailDatas } from "@/plugins/http.js";
export default {
  head() {
    return {
      title:this.model.chrome_name
    }
  },
  components: {
    posiTion,
    contItem
  },
  props: ["id"],
  data() {
    return {};
  },
  computed: {
    chinaText() {
      function GetChinese(strValue) {
        if (strValue != null && strValue != "") {
          var reg = /[\u4e00-\u9fa5\u3002|\uff1f|\uff01|\uff0c|\u3001|\uff1b|\uff1a|\u201c|\u201d|\u2018|\u2019|\uff08|\uff09|\u300a|\u300b|\u3008|\u3009|\u3010|\u3011|\u300e|\u300f|\u300c|\u300d|\ufe43|\ufe44|\u3014|\u3015|\u2026|\u2014|\uff5e|\ufe4f|\uffe5]/g;
          return strValue.match(reg).join("");
        } else return "";
      }
      return GetChinese(this.model.chrome_content).substring(0, 500);
    }
  },
  async asyncData({ params }) {
    const res = await detailDatas(params.id);
    return { model: res.data[0] };
  },
    watch:{
      $route() {
        this.$refs.postion.fenlei = this.model.chrome_name
      }
    }
};
</script>

<style lang="less">
.detail {
  padding-bottom: 30px;
  width: 100%;
  background-color: white;

  .detail-title {
    display: flex;
    padding: 5px 10px;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    position: relative;
    p:nth-child(1) {
      padding: 0 10px;
      font-size: 20px;
      color:#555;
    }
   
  }
  .detail-url {
    padding: 5px 0;
    a {
      margin-left: 10px;
      color: #76bdff;
      font-weight: 700;
      text-decoration: underline;
    }
    a:hover {
      color: #ff5e52;
      transition: all 0.5s;
    }
  }
  .detail-content {
    padding: 0 25px;
      color: #888;
  }
  .categoryBtn {
    span {
      display: inline-block;
      color: white;
      background-color: #5cb85c;
      padding: 5px 10px;
      border-radius: 5px;
    }
  }
}
</style>