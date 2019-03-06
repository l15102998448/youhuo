<template>
  <header>
    <div class="top">
      <router-link to="my">
        <img src="../../../static/img/l8.png" alt=""/>
      </router-link>
      <router-link to="reg">注册</router-link>
    </div>
    <div class="hBottom">
      <h1>Yoho!Buy有货</h1>
      <h3>Yoho!Family账号可登录Yoho!Buy有货<span>?</span></h3>

    </div>
  </header>
</template>

<script>
    export default {
        name: "yhLoginHeader"
    }
</script>

<style>
header{
  background:url("../../../static/img/l0.jpg");
  background-size: cover;
}
</style>
