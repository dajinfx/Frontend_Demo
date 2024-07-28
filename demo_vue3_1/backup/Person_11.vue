<template>
    <div class="person">
        <ul>
            <li v-for="item in list" :key="item.id">
                {{ item.name }} -- {{ item.age }}
            </li>
        </ul>
    </div>

</template>
<script lang="ts">
    export default{
        name:'Person'
    }
</script>
<script lang="ts" setup>
    import {ref} from 'vue'
    import {type PersonInter} from '@/types'
    import { defineProps } from 'vue';

    //let x = defineProps(['a','list'])

    //接收 + 限制类型
    //defineProps<{list?:PersonInter}>()
   
    //接收 + 限制类型 + 限制必要性 + 指定默认值
    const props = withDefaults(defineProps<{ list?: PersonInter}>(), {
        list: () => [{ id: "ffff", name: "bvvv", age: 100 }]
    });

    //let person:PersonInter = {id:"aaaa", name:"张三",age:23}

    // let personList:Array<PersonInter> = [
    //     {id:"aaaa", name:"张三",age:23},
    //     {id:"bbbb", name:"张四",age:40},
    //     {id:"cccc", name:"张五",age:58}
    // ]
</script>

<style scoped>
    .person{
        background-color: antiquewhite;
        box-shadow: 0 0 10px;
        border-radius:10px;
        padding: 20px;
    }
</style>