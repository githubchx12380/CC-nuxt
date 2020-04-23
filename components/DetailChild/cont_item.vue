<template>
    <div>
        <div class="detail-item" :class="{textcolor:$store.state.todos.themeStyle}">{{title}}</div>
        <slot name="detail-jieshao"></slot>
    </div>
</template>

<script>
export default {
    props:['title']
}
</script>

<style>
    .detail-item{
        font-weight: 700;
        margin: 10px 0;
    }
</style>