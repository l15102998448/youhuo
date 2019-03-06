<template>
    <div class="yhReg">
      <yh-header></yh-header>
      <yh-reg-main></yh-reg-main>
    </div>
</template>

<script>
    import YhHeader from "../components/reg/header";
    import YhRegMain from "../components/reg/main";
    export default {
        name: "yhReg",
      components: {
          YhRegMain,
        YhHeader
        }
    }
</script>

<style>
  @import "../../static/css/login.css";
  @import "../../static/css/reg.css";
  .yhReg{
    width:100%;
    height: 100%;
  }
</style>
