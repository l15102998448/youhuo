<template>
  <div class="content">
    <yh-phone></yh-phone>
    <yh-identifying></yh-identifying>
    <yh-picture></yh-picture>
    <yh-login-button></yh-login-button>
    <yh-login-way></yh-login-way>
  </div>
</template>

<script>
    import YhPhone from "../common/phone";
    import YhIdentifying from "../common/identifying";
    import YhPicture from "../common/picture";
    import YhLoginWay from "./loginway";
    import YhLoginButton from "./loginbutton";
    export default {
        name: "yhLoginMain",
      components: {YhLoginButton, YhLoginWay, YhPicture, YhIdentifying, YhPhone}
    }
</script>

<style scoped>

</style>
