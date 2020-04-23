<template>
  <li class="item-content">
    <a href='javascript:;' @click="$router.push(`/detail/${item.chrome_detail_id}`)">
      <img :src="item.chrome_img" alt />
      <div>
        <div class="content-title"  :class="{textcolor:$store.state.todos.themeStyle}">{{item.chrome_name}}</div>
        <div>
          <span >{{item.chrome_category_title}}</span>
          <span>{{item.date}}</span>
        </div>
      </div>
    </a>
  </li>
</template>

<script>
export default {
  props:['item']
};
</script>

<style lang="less">
.item-content {
  box-shadow: 0px 1px 10px rgba(0, 0, 0, 0.2);
  padding: 2px 5px;
  margin-bottom: 4px;
  border-radius: 5px;
  a {
    display: flex;
    img {
      margin-right: 20px;
      width: 65px;
      height: 45px;
      border-radius: 5px;
    }
    > div {
      width: 100%;

      .content-title {
        margin-top: 4px;
        font-size: 12px;
        font-weight: 700;
        margin-bottom: 0;
        line-height: 16px;
        color: #888;
        display: -webkit-box;
        overflow: hidden;
        white-space: normal!important;
        text-overflow: ellipsis;
        word-wrap: break-word;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;
      }
      span {
        padding-right: 5px;
        font-size: 12px;
        font-weight: 700;
        margin-bottom: 0;
        line-height: 16px;
        color: #999;
      }
    }
  }
}
.item-content:hover{
box-shadow: 0px 1px 10px rgba(0, 0, 0, 0.3);
}
</style>