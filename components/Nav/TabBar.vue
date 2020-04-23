<template>
  <div>
    <el-col :span="4" :xs="{span:0}" class="tab-bar-left hidden-xs-only" :class="{backopa:$store.state.todos.themeStyle}">
      <div class="grid-content bg-purple">
        <nav-bar-parent :fontw="true" path="/">
          <span class="icon-home"></span>
          <span>首页</span>
        </nav-bar-parent>
        <nav-bar-parent :fontw="true" path="/category/3" @click.native="currentinit">
          <span class="icon-home"></span>
          <span>插件</span>
        </nav-bar-parent>
        <nav-bar-item path="/category" ref="navbaritem" :category="category"></nav-bar-item>
        <nav-bar-parent :fontw="true" path="/jiaocheng">
          <span class="icon-home"></span>
          <span>教程</span>
        </nav-bar-parent>
        <nav-bar-parent :fontw="true" path="/about">
          <span class="icon-home"></span>
          <span>关于</span>
        </nav-bar-parent>
      </div>
    </el-col>
    <el-col style="width:0" :sm="0">
      <drawer></drawer>
    </el-col>
  </div>
</template>

<script>
import NavBarParent from "../common/Nav_bar_parent";
import NavBarItem from "../common/Nav_bar_item";
import Drawer from "../Nav/Drawer";
import { categoryData } from "@/plugins/http.js";
export default {
  data() {
    return {
      category: []
    };
  },
  components: {
    NavBarParent,
    NavBarItem,
    Drawer
  },
  methods: {
    currentinit() {
      this.$refs.navbaritem.current = 0;
      this.$router.push("/category/" + this.category[0].chrome_category_id);
    }
  },
  async fetch() {
    const res = await categoryData();
    this.category = res.data;
  }
};
</script>

<style lang="less">
.tab-bar-left {
  height: 616px;
  padding: 10px;
  background-color: white; 
  margin: 0px 5px 0 25px;
  border-radius: 15px;
  color: white;
}
</style>