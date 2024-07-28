<template>
    <ul class="news-list">
        <!--Query 写法
        <li>编号 {{route.query.id}} </li>
        <li>标题 {{route.query.title}} </li>
        <li>内容 {{route.query.content}} </li>-->

        <!--params 写法
        <li>编号 {{route.params.id}}</li>
        <li>标题 {{route.params.title}} </li>
        <li>内容 {{route.params.content}} </li>-->

        <!--Props 写法-->
        <li>编号: {{id}}</li>
        <li>标题: {{title}} </li>
        <li>内容: {{content}} </li>

    </ul>
</template>
<script setup lang="ts"  name="About">
    /* --Query 写法
    import {useRoute} from 'vue-router'
    let route = useRoute()
    console.log('@',route)*/

    /* --Param 写法
    import {useRoute} from 'vue-router'
    const route = useRoute()
    console.log(route)*/

    /* -- Props 写法 */
    defineProps(['id','title','content'])


</script>

<style scoped>
    .news-list{
        list-style: none;
        text-align: left;
        width: 100%;
        padding-left: 20px;
    }

</style>





