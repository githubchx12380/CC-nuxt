<template>
  <div class="errcontainer">
    <div v-if="error.statusCode === 404">
        <img src="@/assets/images/404img.png" alt="">
        <div>找不到页面</div>
        <div>{{time}}秒后返回主页</div>
    </div>
     <div v-else>应用发生错误异常</div>
     <img src="../assets/images/404.png" alt="">
    
    <div></div>
  </div>
</template>

<script>
export default {
  props: ['error'],
  data() {
      return{
          time:3,
          timer:null
      }
  },
  layout: 'blog', 
  created() {
      this.timer = setInterval(() => {
          console.log(666);
          
        this.time--
         this.time == 0 ? this.$router.push('/') : null
      }, 1000);
  },
  destroyed() {
      if(this.time == 0){
          clearTimeout(this.timer)
         
      }
  }
}
</script>
<style lang="less">
.errcontainer{
    background-color:#f7f7f7;
    height: 90vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
   div:nth-child(1){
       display: flex;
        img{
            width: 200px;
        }
       flex-direction: column;
       div{
           text-align: center;
           font-size: 20px;
       }
   }
}
</style>