<template>
    <div class="person">
        <div><h2>监视情况三: 监视【reactive】定义的【对象类型】数据</h2></div>
        <div><h2>气温: {{ temp }}</h2></div>
        <div><h2>高度: {{ height }}</h2></div>
        <div>
            <button @click="changeTemp">修改温度</button>
        </div>
        <div>
            <button @click="changeHeight">修改高度</button>
        </div>
    </div>

</template>
<script lang="ts">
    export default{
        name:'Person'
    }
</script>
<script lang="ts" setup>
    import {ref,watch,watchEffect} from 'vue'
    //watch
    let temp = ref(10)
    let height = ref(100)

    function changeTemp(){
        temp.value +=1
    }

    function changeHeight(){
        height.value += 1
    }


    watch([temp, height],(newValue)=>{
        let [value1, value2] = newValue

        if(value1>11 && value2>103)
        {
            console.log(value1, value2)
        }
        
    })

    watchEffect(()=>{
        if(temp.value>15 || height.value>106){
            console.log("watchEffect ")
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