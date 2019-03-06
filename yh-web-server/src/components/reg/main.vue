<template>
  <div class="content">
    <yh-phone></yh-phone>
    <yh-identifying></yh-identifying>
    <div class="validate v1">
      <img src="../../../static/img/l15.png" alt="">
      <input type="text"  placeholder="请设置登录密码">
      <img class="eyes" src="../../../static/img/l17.png" alt="">
    </div>
    <div class="validate v1 v2">
      <img src="../../../static/img/l16.png" alt="">
      <input type="text"  placeholder="好友潮流口令(选填)">
    </div>
    <yh-picture-yz></yh-picture-yz>
  </div>
</template>

<script>
    import YhPhone from "../common/phone";
    import YhIdentifying from "../common/identifying";
    import YhPictureYz from "./pictureyz";
    export default {
        name: "yhRegMain",
      components: {
          YhPictureYz,
        YhIdentifying,
        YhPhone
        }
    }
</script>

<style scoped>

</style>
