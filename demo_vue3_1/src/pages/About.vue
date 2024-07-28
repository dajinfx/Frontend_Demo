<template>
    <div class="about">
        这个是about
    </div>
</template>

<script setup lange="ts" name="About">
    import {onMounted,onUnmounted} from 'vue'
    onMounted(()=>{
        console.log('About组件挂载了')
    })
    onUnmounted(()=>{
        console.log('About组件卸载了')
    })
</script>

<style scoped>
    .about{
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100px;
    }
</style>