<template>
    <div class="person">
        <h2>当前求和为 {{ sum }}</h2>
        <button @click="add">点我sum +1</button>
        <br/>
        <img v-for="(car,index) in imglist" :src="car" :key="index"></img>
        <br/>
        <button @click="getCar">点我再来一辆车</button>
        <br/>
        
    </div>

</template>
<script lang="ts">
    export default{
        name:'Person'
    }
</script>
<script lang="ts" setup name="Person">
    //hooks  的用法
    import useSum from '@/hooks/useSum'
    import useCar from '@/hooks/useCar'

    const {sum, add } = useSum()
    const {imglist, getCar } = useCar()
</script>

<style scoped>
    .person{
        background-color: antiquewhite;
        box-shadow: 0 0 10px;
        border-radius:10px;
        padding: 20px;
    }
</style>