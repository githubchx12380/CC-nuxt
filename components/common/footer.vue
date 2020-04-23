<template>
  <div class="footer">
      <div class="footer-item">
      <p>版权申明:本站资源均来源网络,仅供学习交流,版权归原作者所有,不代表我站观点.若侵犯到您的权利,请及时联系我们删除</p>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less">
  .footer{
    margin-top:20px;
    padding: 10px 0;
    height: 40px;
    width: 100%;
    background-color: red;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #2c3742;
    .footer-item{
      width: 70%;
      p{
        text-align: center;
        font-size: 12px;
        padding: 0 3px;
        color: white;
      }
    }
  }
</style>