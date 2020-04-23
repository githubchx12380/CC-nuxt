<template>
      <div class="title">
          <div class="position-content">
            <span @click="$router.push('/')"><a href="javascript:;">首页</a></span>/
            <span @click="$router.push('/category/3')"><a href="javascript:;">插件</a></span>/
            <span><a href="javascript:;"> {{fenlei}}</a></span>
            <div @click="$router.back()" v-if="$route.path.indexOf('detail') != -1" :class="{textcolor:$store.state.todos.themeStyle}">
                <span class="icon-arrow-left2" v-if="$route.path.indexOf('detail') != -1"></span>
                <span>返回</span>
            </div>
          </div>
          <div class="newthemes">
             <btn @themebtn="themebtn"></btn>
          </div>
      </div>
</template>

<script>
import btn from '@/components/common/button'
export default {
    props:['componen'],
    components:{
        btn
    },
    data() {
        return {
            currentChild:0,
            fenlei1:''
        }
    },
    computed:{
        fenlei() {
           if(this.fenlei1 != ''){
               return '搜索结果'
           }
           if(this.$route.path == '/category/3'){
               return '效率'
           }
           if(this.componen){
               return this.componen.split(' ')[0] + this.componen.split(' ')[1]
           }
            return this.$route.meta.fenlei
        }
    },
    methods:{
        newTitle(index) {
            this.currentChild = index
            this.$emit('newcontent',index)   //取数据使用
        },
      
      themebtn(){
        this.$store.commit('increment')
      }
  
    }
}
</script>

<style lang="less">
.title{
    padding: 10px 30px;
    display: flex;
    >div:nth-child(1){
        flex: 1;
    }
    .position-content{
        display: flex;
        align-items: center;
        font-size: 14px;
        color: #aaa;
        
        >span{
            padding: 0 .433333rem;
            a{
                color: #337ab7;
            }
        }
        div{
            display: flex;
               font-weight: 700;
              cursor: pointer;
              color: #1a0dab;
            .icon-arrow-left2{
                padding-right: 2px;
         
            font-size: 20px;
            }
        }
        div:hover{
transition: all 0.5s;
                color: tomato;
        }
    }
    .newthemes{
        display: flex;
        justify-content:flex-end;
    }
  }
  
</style>