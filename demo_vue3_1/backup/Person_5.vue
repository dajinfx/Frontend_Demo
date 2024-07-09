<template>
    <div class="person">
        <div><h2>监视情况一: 监视【ref】定义的【对象类型】数据</h2></div>
        <div><h2>当前求和为： {{ sum }}</h2></div>
        <div>
            <button @click="changeSum">点我sum + 1 </button>
        </div>
    </div>

</template>
<script lang="ts">
    export default{
        name:'Person'
    }
</script>
<script lang="ts" setup>
    import {ref,watch} from 'vue'
    //watch
    let sum = ref(0)

    function changeSum(){
        sum.value += 1
    }
    //监视  情况1
    const stopWatch = watch(sum,(newValue, oldValue)=>{
        console.log('sum 变化了',newValue, oldValue)

        if(newValue<10){
            console.log('newValue, oldvalue',newValue, oldValue)
        }
    })
    
</script>

<style scoped>
    .person{
        background-color: antiquewhite;
        box-shadow: 0 0 10px;
        border-radius:10px;
        padding: 20px;
    }
</style>