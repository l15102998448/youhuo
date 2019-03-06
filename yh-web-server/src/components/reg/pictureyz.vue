<template>
  <div class="picYz">
    <yh-picture></yh-picture>
    <router-link to="home"><button>注册</button></router-link>
    <a href="#">注册即表示您已阅读并同意</a>
    <a href="#" class="server">有货服务协议 有货隐私条款</a>
  </div>
</template>

<script>
    import YhPicture from "../common/picture";
    export default {
        name: "yhPictureYz",
      components: {YhPicture}
    }
</script>

<style scoped>

</style>
