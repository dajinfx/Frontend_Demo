<script lang="ts">
    import import_Person from './components/Person.vue';
    export default{
        name:'App',//组件名
        components:{import_Person}//注册组件
    }
</script>

<template>
        <import_Person/>
        <import_Person/>
        <import_Person/>
</template>

<style scoped>
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
}
</style>
