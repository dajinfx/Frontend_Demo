<template>
    <div class="person">
        <div><h2>买了一辆{{ car.brand }}车，价格是{{ car.price }}万</h2></div>
        <div>
            <button @click="changePrice">修改价格</button>
        </div>
        <br>
        <hr>
        <br>
        <div><h2>游戏列表</h2></div>
        <div>
            <ul>
                <li v-for="g in games" :key="g.id">{{ g.name }}</li>
            </ul>
        </div>
        <div>
            <button @click="changeFirstGame">修改第一个游戏名</button>
        </div>
        <br>
        <hr>
        <br>
        <div><h2>{{obj.a.b.c}}</h2></div>
        <div>
            <button @click="changeObj">修改c的值</button>
        </div>
        <br>
        <hr>
        <br>
        <div><h2>{{obj_2.a.b.c}}</h2></div>
        <div>
            <button @click="changeObj2">修改obj_2的值</button>
        </div>
        <br>
        <hr>
        <br>
        <div><h2>买了一辆{{ car.brand }}车，价格是{{ car.price }}万</h2></div>
        <div>
            <button @click="changeCar">修改汽车</button>
        </div>
    </div>

</template>
<script lang="ts">
    export default{
        name:'Person'
    }
</script>
<script lang="ts" setup>
    //ref ===>   基本类型、对象型响应式数据
    //reactive ===> 只能定义对象类型 响应式数据
    import {reactive,ref} from 'vue'
    let car = reactive({brand:"奔驰", price:100})
    let games = reactive([
        {id:'123',name:'帝国时代'},
        {id:'124',name:'星际争霸'},
        {id:'125',name:'红色警报'},
    ])
    let obj = reactive({
        a:{
            b:{
                c:666
            }
        }
    })

    let obj_2 = ref({
        a:{
            b:{
                c:'hello world'
            }
        }
    }) 

    function changePrice(){
        car.price +=10;
        console.log( car.price)
    }
    function changeFirstGame(){
        games[0].name = "王者荣耀"
    }
    function changeObj(){
        obj.a.b.c = '222'
    }
    function changeObj2(){
        obj_2.value.a.b.c = '变了，变了！'
    }
    function changeCar(){   //修改整体对象
        Object.assign(car,{brand:"夏利",price:1})
        //如果 ref 的话
        //car.value = {brand:"夏利",price:1}
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