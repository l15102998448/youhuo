<template>
  <!--footer-->
  <div class="footer">
    <a href="javascript:;" class="focusStore">
      <span class="iconfont icon-dianpu4"></span>
      <span >商家店铺</span>
    </a>
    <a href="javascript:;" >
      <span class="iconfont icon-shoucang1"></span>
      <span>收藏</span>
    </a>
    <router-link to="shopcar">
      <a href="javascript:;" class="joinCarts">加入购物车</a>
    </router-link>
  </div>
</template>

<script>
    export default {
        name: "yhShopDetailFooter"
    }
</script>

<style scoped>

</style>
