<script lang="ts">
    export default{
        name:'App',//组件名
        components:{imperson}//注册组件
    }
</script>

<template>
  <div style="margin-bottom:20px"><imperson a="hahah" :list="personList"/></div><br>
</template>

<script lang="ts" setup>
    import imperson from './components/Person.vue'
    import {ref} from 'vue'
    import {type PersonInter} from '@/types'

    let personList:Array<PersonInter> = [
        {id:"aaaa", name:"张三",age:23},
        {id:"bbbb", name:"张四",age:40},
        {id:"cccc", name:"张五",age:58}
    ]
</script>


<style scoped>m 
  header {
    line-height: 1.5;
  }

  .logo {
    display: block;
    margin: 0 auto 2rem;
  }

  @media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
  .person{
        background-color: antiquewhite;
        box-shadow: 0 0 10px;
        border-radius:10px;
        padding: 20px;
    }
}
</style>
