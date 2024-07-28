<template>
    <div class="person">
        <div><h2>监视情况三: 监视【reactive】定义的【对象类型】数据</h2></div>
        <div><h2>姓名: {{ person.name }}</h2></div>
        <div><h2>年龄: {{ person.age }}</h2></div>
        <div><h2>车1: {{ person.car.c1 }}</h2></div>
        <div><h2>车2: {{ person.car.c2 }}</h2></div>
        <div>
            <button @click="changeName">修改名字</button>
        </div>
        <div>
            <button @click="changeAge">修改年龄</button>
        </div>
        
        <br>
        
        <div>
            <button @click="changeC1">修改第一台车</button>
        </div>
        <div>
            <button @click="changeC2">修改第二台车</button>
        </div>
        <div>
            <button @click="changeCar">修改全部车</button>
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
        age:10,
        car: {
            c1:"宝马",
            c2:"奔驰"
        }
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
        //console.log(person.name)
    }

    function changeAge(){
        person.age +=1
        //console.log(person.age)
    }

    function changeC1(){
        person.car.c1 = "路虎"
    }

    function changeC2(){
        person.car.c2 = "特斯拉"
    }

    function changeCar(){
        person.car = {c1:"起亚",c2:"现代"}
    }


    // watch(person,(newValue, oldValue)=>{
    //     console.log('changed value: ',newValue,oldValue)
    // })
    //仅仅监控属性值
    // watch(()=>person.name,(newValue, oldValue)=>{
    //     console.log('changed obj value: ',newValue,oldValue)
    // })


    // watch(()=>person.car,(newValue, oldValue)=>{
    //     console.log('changed obj value 1: ',newValue,oldValue)
    // }, {deep:true})

    // watch([()=>person.name,()=>person.car],(newValue, oldValue)=>{
    //     console.log('changed obj value 2: ',newValue,oldValue)
    // }, {deep:true})

    watch([person.name, person.age],(newValue)=>{
        let [value1, value2] = newValue
        console.log(value1, value2)
    }, {deep:true})

</script>

<style scoped>
    .person{
        background-color: antiquewhite;
        box-shadow: 0 0 10px;
        border-radius:10px;
        padding: 20px;
    }
</style>