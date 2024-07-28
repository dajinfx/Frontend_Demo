<template>
    <div class="talk">
        <button @click="getTalk">获取一句话</button>
        <ul>
            <li v-for="talk in talkStore.talkList" :key="talk.id">{{ talk.title }}</li>
        </ul>
    </div>
</template>

<script setup lange="ts" name="Talk">
    import {reactive} from 'vue'
    import axios from 'axios'
    import {nanoid} from 'nanoid'
    import { useTalkStore } from '@/store/talk';

    const talkStore = useTalkStore()

    /*
    let talkList = reactive([
        {id:'1231',title:'今天你有点怪，哪里怪，怪恶心的'},
        {id:'1232',title:'苹果，哈密瓜，橘子'},
        {id:'1233',title:'今天是你的生日'}
    ])*/

    function getTalk(){
        talkStore.getTalk()
    }
    
    /*
    async function getTalk(){
        let result = await axios.get("https://api.uomg.com/api/rand.qinghua?format=json");
        let obj = {id:nanoid(),title:result.data.content}
        console.log(obj)
    }*/
</script>

<style scoped>
    .talk{
        margin: 50px;
        background-color:coral;
        padding: 10px;
        border-radius: 10px;
        box-shadow: 0 0 10px;
    }
</style>