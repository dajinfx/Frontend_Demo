<template>
    <div class="person">
        <div><h2>名字:{{ name }}</h2></div>
        <div><h2>年龄:{{ age }}</h2></div>
        <div><h2>电话:{{ tel }}</h2></div>
        <button @click="changeName">修改名字</button>
        <button @click="changeAge">修改年龄</button>
        <button @click="showTel">查看联系方式</button>
    </div>

</template>
<script lang="ts">
    export default{
        name:'Person',
        /* Vue2 的写法
        data(){
            return {
                name:"张三",
                age:20,
                tel: '123121234'
            }
        },
        methods:{
            changeName(){
                this.name = 'aaaa'
            },
            changeAge(){
                this.age += 1
            },
            showTel(){
                alert(this.tel)
            }
        },
        */
        setup(){
            //数据
            let name = "李四"
            let age = 18
            let tel ='9999999999999'

            //方法
            function changeName(){
                console.log('1111111')
                name = 'aaaa'
            }
            function changeAge(){
                console.log('22222222')
                age +=1
            }
            function showTel(){
                console.log('33333333333')
                alert('123123123')
            }
            return {name, age, tel,changeName,changeAge,showTel}
        }
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