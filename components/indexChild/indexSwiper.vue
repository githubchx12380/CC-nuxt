<template>
  <swiper class="swiper">
    <swiper-item>
      <img src="https://node.12380ch.com/upload/swiper/155317-1507103597a2cf.jpg" :class="{backopacity:$store.state.todos.themeStyle}" @click="$router.push()" alt />
    </swiper-item>
    <swiper-item>
      <img src="https://node.12380ch.com/upload/swiper/chrome_jc.jpg" :class="{backopacity:$store.state.todos.themeStyle}"  @click="$router.push()" alt />
    </swiper-item>
    <swiper-item>
      <img src="https://node.12380ch.com/upload/swiper/maxresdefault.jpg" :class="{backopacity:$store.state.todos.themeStyle}" @click="$router.push('/jiaocheng')" alt />
    </swiper-item>
  </swiper>
</template>

<script>
import { Swiper, SwiperItem } from "@/components/Swiper/swiper";
export default {
  components: {
    Swiper,
    SwiperItem
  },
};
</script>

<style lang="less">
.swiper{
    width: 100%;
    border-radius: 15px;
    img{
     
      max-height: 470px;
    }
}
</style>