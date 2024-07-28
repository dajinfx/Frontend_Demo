<template>
    <div class="count">
        <!--<h2>当前求和为：{{ sum }}</h2>-->
        <h2>当前求和为：{{ countStore.sum }}</h2>
        <h2>国家为: {{ countStore.country }}</h2>
        <h2>城市为: {{ countStore.city }}</h2>
        <h2>名字: {{ firstName }}</h2><!--用了storeToRefs 省去了 countStore-->
        <h2>姓: {{ secondName }}</h2>
        <select v-model.number="n">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
        </select>
        <button @click="add">加</button>
        <button @click="minus">减</button>
    </div>
    
    
</template>

<script setup lange="ts" name="Count">
    import {ref,reactive,toRefs} from 'vue';

    //引入useCountStore  使用pinia 的情况
    import { useCountStore } from '@/store/count';
    import { storeToRefs } from 'pinia';
    //使用 useCountStore，得到专门保存count 相关的store
    const countStore = useCountStore()
    const {firstName,secondName}=storeToRefs(countStore)  //为了组件减少countStore字样的写法，storeToRefs只会关注数据而非方法
    //以下2种sum, city, country,方式都可以拿到state 的数据
    //console.log("countValue1: ",countStore.sum)
    //console.log("countValue2: ",countStore.$state.sum)

    //let sum = ref(1)
    let n =ref(1)

    //pinia  
    function add(){
        //第一种修改方式
        //countStore.sum +=1
        //countStore.city = '首尔'
        //countStore.country = '韩国'
        
        //第二种修改方式
        /*
        countStore.$patch({
            sum:'123',
            country:'America',
            city:'NY'
        })
            */
        
        //第三种修改方式
        countStore.increment(n.value)

    }
    function minus(){
        countStore.minus(n.value)
    }


    /* 普通的数据修改方法

    function add(){
        sum.value +=n.value
    }
    function minus(){
        sum.value -=n.value
    }
    */
</script>

<style scoped>
    .count{
        margin: 50px;
        background-color:antiquewhite;
        padding: 10px;
        border-radius: 10px;
        box-shadow: 0 0 10px;
    }
    .select,  button{
        margin:0 5px;
        height:25px;
        width: 100px
    }
</style>