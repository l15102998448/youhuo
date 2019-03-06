<template>
  <div>
    <yh-login-header></yh-login-header>
    <yh-login-main></yh-login-main>
  </div>
</template>

<script>
    import YhLoginHeader from "../components/login/header";
    import YhLoginMain from "../components/login/main";
    export default {
        name: "yhLogin",
      components: {YhLoginMain, YhLoginHeader}
    }
</script>

<style>
@import "../../static/css/login.css";

</style>
