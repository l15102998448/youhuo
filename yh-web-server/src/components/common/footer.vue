<template>
  <!--footer-->
  <div class="footer">
    <router-link to='/home'>
      <span class="iconfont icon-shouye2"></span>
      <i >首页</i>
    </router-link>
    <router-link to='/fenlei'>
        <span class="iconfont icon-gengduo"></span>
        <i>分类</i>
    </router-link>
    <router-link to='/ballshoes'>
        <img src="../../../static/img/a19.png" alt="">
    </router-link>
    <router-link to='/play'>
        <span class="iconfont icon-huojian2"></span>
        <i >逛</i>
    </router-link>
    <router-link to='/my'>
      <span class="iconfont icon-wodemian2"></span>
      <i>我的</i>
    </router-link>
  </div>
</template>

<script>
    export default {
        name: "yhFooter"
    }
</script>

<style scoped>
</style>
