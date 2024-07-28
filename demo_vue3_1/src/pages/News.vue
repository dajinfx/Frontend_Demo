<template>
    <div class="news">
        <!--导航区-->
        <!--
        <ul>
            <li><a href="#">新闻001</a></li>
            <li><a href="#">新闻002</a></li>
            <li><a href="#">新闻003</a></li>
            <li><a href="#">新闻004</a></li>
        </ul>-->
        <div class="news-title">
            <ul>
                <li v-for="news in newsList" :key="news.id">
                    <button @click="showNewsDetail(news)">查看新闻</button>
                    <!--Query 第一种写法-->
                    <!--<RouterLink to="/news/detail?a=lalal&b=xxxx&c=lllqq">{{ news.title }}</RouterLink>-->
                    <!--<RouterLink :to="`/news/detail?id=${news.id}&title=${news.title}&content=${news.content}`">{{ news.title }}</RouterLink>-->
                    
                    <!--Query 第二种写法
                        <RouterLink 
                            :to="{
                                path:'/news/detail',
                                query:{
                                    id:news.id,
                                    title: news.title,
                                    content: news.content
                                }
                            }"  
                        >
                        {{ news.title }}
                        </RouterLink>-->

                    <!--Param 第一种写法-->
                    <!--<RouterLink :to="`/news/detail/${news.id}/${news.title}/${news.content}`">{{ news.title }}</RouterLink>-->
                    <!--Param 第二种写法
                    <RouterLink 
                            :to="{
                                name:'rname_detail',  //只能用name,  不能用path
                                params:{
                                    id:news.id,
                                    title: news.title,
                                    content: news.content
                                }
                            }"  
                    >
                    {{ news.title }}-->

                    <!--Props 第三种写法-->
                    <RouterLink 
                            :to="{
                                name:'rname_detail',  //只能用name,  不能用path
                                query:{   //params ->  query 
                                    id:news.id,
                                    title: news.title,
                                    content: news.content
                                }
                            }"  
                    >
                    {{ news.title }}


                    </RouterLink>

                    <!--传递params 参数时，若使用to对象写法，必须使用name 的配置项，不适用path-->
                    <!--传递params 参数时，需要提前在规则上占位-->
                </li>
            </ul>
        </div>
        

        <!--展示区-->
        <div class="news-content">
            <RouterView></RouterView>
        </div>
    </div>
</template>

<script setup lange="ts" name="News">
    //import { Interface } from 'readline';
    import {reactive} from 'vue'
    import {RouterView, useRouter} from 'vue-router'

    const newsList = reactive([
        {id:'aaa1', title:'特朗普遇刺了', content:'特朗普昨天差点被强杀，怎么就没射中, 没把他弄死'},
        {id:'aaa2', title:'Star ship 5 静态测试', content:'Star ship 5 据说进行了静态测试，很成功'},
        {id:'aaa3', title:'比特币涨了', content:'比特币涨了，要创新高了， 快点买呀！'},
        {id:'aaa3', title:'内网穿透成功', content:'11223'}//参数故意没传
    ])

    const userRouter = useRouter()

    function showNewsDetail(para){
        console.log("Para: ",parseFloat)
        userRouter.push({
            name:'rname_detail',  //只能用name,  不能用path
            query:{   //params ->  query 
                id: para.id,
                title: para.title,
                content: para.content
            }
        })
    }

</script>


<style scoped>
.news {
    padding:20px;
    display: flex;
    justify-content: space-between;
    height: 100%;
}

.news ul{
    margin-top: 30px;
    /*list-style: none;*/
    padding-left: 10px;
}

.news li>a {
    font-size: 18px;
    line-height: 40px;
    text-decoration: none;
    color:chocolate;
    text-shadow: 0 0 1px ;
}

.news-title{
    display: flex;
    text-align: left;
    width: 30%;
}


.news-content {
    border-radius: 10px;
    display: flex;
    border: 1px solid #932424; /* 设置边框 */
    padding: 20px;
    margin-left: 20px;
    flex-grow: 1; /* 让展示区占满剩余空间 */
    width: 80%;
    height: auto;
    
}
</style>
