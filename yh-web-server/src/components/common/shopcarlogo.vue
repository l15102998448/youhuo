<template>
  <router-link to="/shopCar">
    <a href="javascript:;" class="shopCarLogo">
      <span class="iconfont icon-gouwuche"></span>
    </a>
  </router-link>
</template>

<script>
    export default {
        name: "yhShopCarLogo"
    }
</script>

<style scoped>
@import "https://at.alicdn.com/t/font_1046545_o7i054i8cp.css";
@import "../../../static/css/shopCar.css";
  .shopCarLogo{
    position: fixed;
    bottom:.6rem;
    right:.17rem;
    display: block;
    width:.4rem;
    height: .4rem;
    background:rgba(0,0,0,.6);
    border-radius:50%;
    text-align:center;
    line-height: .4rem;
  }
  .shopCarLogo span{
    font-size:.2rem;
    color:white;
  }
</style>
