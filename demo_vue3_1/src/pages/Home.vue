<template>
    <div class="home">
        这个是home
    </div>
    <div>
        <Count/>
        <Talk/>
    </div>
</template>

<script setup lange="ts" name="Home">
    import {onMounted} from 'vue'
    import { useRouter } from 'vue-router';
    import Count from '../components/Count.vue'
    import Talk from '../components/Talk.vue'

    const router = useRouter()
    onMounted(()=>{
        setTimeout(() => {
            //再次写一个代码，让路由器直接跳转
            router.push('/news')
        }, 3000000);
    })

</script>

<style scoped>
    .home{
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100px;
    }
</style>