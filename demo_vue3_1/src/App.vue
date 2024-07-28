<script lang="ts">
    export default{
        name:'App',//组件名
    }
</script>

<template>
  <div class = "app">
    <h2 class="title">Vue 路由测试</h2>
    <!--导航区-->
    <div class="navigate">
      <RouterLink to="/home" active-class="active">首页</RouterLink><!--RouterLink 是个组件-->
      <RouterLink :to="{name:'rname_news'}" active-class="active">新闻</RouterLink>
      <RouterLink :to="{path:'/about'}" active-class="active">关于</RouterLink>
    </div>
    <!--展示区-->
    <div class="main-content">
      <RouterView></RouterView>
    </div>
  </div>
</template>

<script lang="ts" setup>
    import {RouterView, RouterLink} from 'vue-router'
    
</script>
<style scoped>/*scoped 的作用是仅用于当前组件，不会影响其他组件*/ 
  .title{
    text-align: center;
    word-spacing: 5px;
    margin:30px 0;
    height: 70px;
    line-height: 70px;
    background-image: linear-gradient(45deg,gray,white);
    border-radius: 10px;
    box-shadow: 0 0 2px;
    font-size:30px;
  }
  .navigate{
    display: flex;
    justify-content: space-around;
    margin:0 100px
  }

  .navigate a{
    display: block;
    text-align: center;
    width: 90px;
    height: 40px;
    line-height: 35px;
    border-radius: 10px;
    background-color: gray;
    text-decoration: none;
    color: white;
    font-size: 18px;
    letter-spacing: 5px;
  }

  .main-content{
    margin:0 auto;
    margin-top:30px;
    border-radius: 10px;
    width: 90%;
    height: 400px;
    border:1px solid;
  }

</style>

