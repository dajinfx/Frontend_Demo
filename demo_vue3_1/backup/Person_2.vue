<template>
    <div class="person">
        <div><h2>名字:{{ name }}</h2></div>
        <div><h2>年龄:{{ age }}</h2></div>
        <div><h2>电话:{{ tel }}</h2></div>
        <div><button @click="changeName">修改名字</button></div>
        <div><button @click="changeAge">修改年龄</button></div>
        <div><button @click="showTel">查看联系方式</button></div>
    </div>

</template>
<script lang="ts">
    export default{
        name:'Person'
    }
</script>
<script lang="ts" setup>
    import { ref } from 'vue';   //响应式数据
    //数据
    let name = ref("张三");  //响应式数据包装
    let age = ref(18);
    let tel = ref('wewerw');

    function changeName(){
        name.value = 'aaaa'
        console.log('1111111')
    }
    function changeAge(){
        console.log('22222222')
        age.value +=1
    }
    function showTel(){
        console.log('33333333333')
        alert('123123123')
        tel.value = '1212111'
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