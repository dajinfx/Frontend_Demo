<template>
    <div class="person">
        <div><h2>监视情况二: 监视【ref】定义的【对象类型】数据</h2></div>
        <div><h2>姓名: {{ person.name }}</h2></div>
        <div><h2>年龄: {{ person.age }}</h2></div>
        <div>
            <button @click="changeName">修改名字</button>
        </div>
        <div>
            <button @click="changeAge">修改年龄</button>
        </div>
        <div>
            <button @click="changePerson">修改整个人</button>
        </div>
    </div>

</template>
<script lang="ts" setup>
    import {ref,watch} from 'vue'
    //watch
    let person = ref({
        name:"张三",
        age:10
    })


    function changeName(){
        person.value.name +='~'
        console.log(person.value.name)
    }

    function changeAge(){
        person.value.age +=1
        console.log(person.value.age)
    }

    function changePerson(){
        person.value = {name:"李四",age:30}
    }

    //情况一  监视的时属性地址值， 要想监视对象内部的属性值，则需要手动开启深度值
    watch(person, (newValue,oldValue)=>{
        console.log("观察变化： ",newValue,oldValue )
    },{deep:true,immediate:true})

</script>

<style scoped>
    .person{
        background-color: antiquewhite;
        box-shadow: 0 0 10px;
        border-radius:10px;
        padding: 20px;
    }
</style>