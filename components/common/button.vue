<template>
    <div class="btnbox">
        <button @click="themebtn" class="themeBtn icon-switch" :class="{btnclass:$store.state.todos.themeStyle}"></button>
    </div>
</template>

<script>

export default {
    data() {
        return {
            themeClas:false
        }
    },
    methods:{
        themebtn() {
            this.$emit('themebtn')
        }
    }
}
</script>

<style lang="less">
.btnbox{
    position: relative;
    width: 37px;
    height: 37px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 1);
    border-radius: 50%;
    overflow: hidden;
    .themeBtn{
        cursor: pointer;
        position: absolute;
        top: 0;
        left: 0;
        display: block;
        width: 100%;
        height: 100%;
        background-color: #1b1b1b;
        border:0;
        font-size: 20px;
        color: #aaa;
        text-shadow: 0 0 15px #00a1ff;
        text-align: center;
      
        text-shadow: 0 0 15px #00a1ff;
        box-shadow: 0 3px 4px rgba(0, 0, 0, 1),
         inset 0px -2px 1px rgba(0, 0, 0, 1),
         inset 0px 2px 2px rgba(255, 255, 255, 0.5),
      
    } 
    .btnclass{
        transition: all 0.5s;
        color:aqua;
        text-shadow: 0px 5px 15px aqua;
    }
}
</style>