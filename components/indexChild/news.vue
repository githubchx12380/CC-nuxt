<template>
  <div>
    <div class="right-title">{{title}}</div>
    <div class="right-content">
      <ul>
        <common-item v-for="(item,index) in result" :key="index" :item="item"></common-item>
      </ul>
    </div>
  </div>
</template>

<script>
import commonItem from './commonItem'
export default {
  props:['title','result'],
  components: {
    commonItem
  }
};
</script>

<style lang="less">
.index-right {
  padding: 2px 30px;
}
.right-title {
  height: 100%;
  color: #aaa;
  font-size: 18px;
  font-weight: 600;
}
.right-content {
  ul {
    padding: 10px 0;
  }
}
</style>