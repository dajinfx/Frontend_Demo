import axios from 'axios';
import { nanoid } from 'nanoid';
import { defineStore } from 'pinia'

export const useTalkStore = defineStore('talk', {
    //真正存储的地方
    state() {
        return {
            talkList: [
                { id: '1231', title: '今天你有点怪，哪里怪，怪恶心的' },
                { id: '1232', title: '苹果，哈密瓜，橘子' },
                { id: '1233', title: '今天是你的生日' }
            ]
        }
    },


    actions: {
        async getTalk() {
            console.log("getTalk works!")
            let result = await axios.get("https://api.uomg.com/api/rand.qinghua?format=json");
            let obj = { id: nanoid(), title: result.data.content }

            this.talkList.unshift(obj)
            console.log(obj)
        }
    }
})