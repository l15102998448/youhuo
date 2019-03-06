<template>
  <header>
    <div class="top">
      <router-link to="/detail">
        <span class="iconfont icon-fanhui"></span>
      </router-link>
      <span>购物车</span>
      <span>编辑</span>
    </div>
    <div class="fullReduction">
      <span>购物满￥299.00已免运费</span>
      <span class="iconfont icon-xiayiye1"></span>
    </div>
  </header>
</template>

<script>
    export default {
        name: "yhShopCarHeader"
    }
</script>

<style scoped>
.top a:nth-child(1){
  color:white;
}
</style>
