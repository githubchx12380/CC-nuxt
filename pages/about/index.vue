<template>
    <div class="about" :class="[{backopa:$store.state.todos.themeStyle}]">
        <posi-tion></posi-tion>
        <div>
            <img src="@/assets/images/230405-15073886458fbe.jpg" alt="">
           
        </div>
         <p :class="{textcolor:$store.state.todos.themeStyle}">CC插件网站是Chrome浏览器扩展插件的搬运工。严选有趣、实用、适合国内的Chrome扩展插件。致力于降低使用Chrome扩展插件的门槛，用非常简单的方式来提升用户体验。承蒙客官大驾光临。</p>
    </div>
</template>

<script>
import posiTion from '@/components/categoryChild/position'
export default {  
    components:{
        posiTion
    },
    created() {
        this.$route.meta.fenlei = '关于'
    }
}
</script>

<style lang="less">
.about{
    padding: 20px 0;
    background-color: white;
    border-radius: 15px;
    >div{
        display: flex;
        justify-content: center;
        img{
            width: 80%;
            border-radius: 10px;
        }
      
    }
      p{
            font-size: 20px;
            line-height: 35px;
            color: #555;
            padding: 10px 40px;
        }
}
</style>