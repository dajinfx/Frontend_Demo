<template>
    <div class="person">
        <div><h2>监视情况三: 监视【reactive】定义的【对象类型】数据</h2></div>
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
        <br>
        <div><h2>测试:{{ obj.a.b.c }} </h2></div>
        <div>
            <button @click="changeObj">修改测试</button>
        </div>
    </div>

</template>
<script lang="ts">
    export default{
        name:'Person'
    }
</script>
<script lang="ts" setup>
    import {reactive,watch} from 'vue'
    //watch
    let person = reactive({
        name:"张三",
        age:10
    })

    let obj = reactive({
        a:{
            b:{
                c:666
            }
        }
    })

    function changeName(){
        person.name +='~'
        console.log(person.name)
    }

    function changeAge(){
        person.age +=1
        console.log(person.age)
    }

    function changePerson(){
        //person = {name:"李四",age:30}
        Object.assign(person,{name:"王五",age:50})
    }

    function changeObj(){
        obj.a.b.c = 888
    }

    watch(person,(newValue, oldValue)=>{
        console.log('changed value: ',newValue,oldValue)
    })

    watch(obj,(newValue, oldValue)=>{
        console.log('changed obj value: ',newValue,oldValue)
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