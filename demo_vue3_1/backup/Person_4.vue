<template>
    <div class="person">
        姓: <input type="text" v-model="firstName"> <br>
        名: <input type="text>" v-model="lastName"> <br>
        全名: <h3>---{{fullName}}---</h3>

        <div>
            <button @click="changeFullName">修改全名</button>
        </div>
    </div>

</template>
<script lang="ts">
    export default{
        name:'Person'
    }
</script>
<script lang="ts" setup>
    import {ref,computed} from 'vue'
    let firstName = ref("张")
    let lastName = ref("三")

    //这么定义的fullName 是一个计算属性， 且是只读的
    // let fullName = computed(()=>{
    //     return firstName.value.slice(0,1).toUpperCase()+firstName.value.slice(1) + "."+lastName.value
    // })

    let fullName = computed({
        get(){
            return firstName.value.slice(0,1).toUpperCase()+firstName.value.slice(1) + "."+lastName.value
        },  
        set (val){
            const [str1,str2] = val.split('-')
            firstName.value = str1
            lastName.value = str2
        }
    })

    function changeFullName() {
        console.log(fullName.value)
        fullName.value = '张-寻'
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