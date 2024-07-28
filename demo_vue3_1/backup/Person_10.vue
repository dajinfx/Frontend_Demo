<template>
    <div class="person">
        <div><h2>中国</h2></div>
        <div><h2 ref="title2">北京</h2></div>
        <div><h2>上海</h2></div>
        <div>
            <button @click="showlog">点击输出h2元素</button>
        </div>
    </div>

</template>
<script lang="ts">
    export default{
        name:'Person'
    }
</script>
<script lang="ts" setup>
    import {ref} from 'vue'
    //watch
    let title2 = ref()

    function showlog(){
        console.log(title2.value)
    }


</script>

<style scoped>
    .person{
        background-color: antiquewhite;
        box-shadow: 0 0 10px;
        border-radius:10px;
        padding: 20px;
    }
</style>