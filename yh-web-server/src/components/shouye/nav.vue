<template>
  <div class="nav">
    <h3><router-link to="home">男生MEN</router-link></h3>
    <h3><router-link to="home">女生WOMEN</router-link></h3>
    <h3><router-link to="gaojie">高街品牌#BLK</router-link></h3>
  </div>
</template>

<script>
    export default {
        name: "yhNav",

    }
</script>

<style scoped>
  .nav h3 a{
    color:#444444;
  }
</style>
