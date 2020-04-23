<template>
  <div :class="{backimage:$store.state.todos.themeStyle}">
    <Nav/>
    <el-row class="rowbox">
       <tab-bar></tab-bar>  <!-- 左侧tabbar -->
       <el-col :span="19" :xs="{span:24}"  class="row-content" >  <!-- 右侧视图 -->
            <div class="grid-content bg-purple-light">
                <nuxt />
            </div>
        </el-col>
    </el-row>
    <foo-ter></foo-ter>
  </div>
</template>

<script>
import Nav from '@/components/Nav/Nav.vue'
import TabBar from '@/components/Nav/TabBar'
import fooTer from '@/components/common/footer'
export default {
   components:{
      Nav,
      TabBar,
      fooTer
    },
   
}
</script>

<style>
.backimg{
  background-color: red;
}
</style>