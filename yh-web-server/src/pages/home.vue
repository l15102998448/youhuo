<template>
  <div class="home">
    <yh-header></yh-header>
    <yh-main></yh-main>
    <yh-footer></yh-footer>
    <yh-shop-car-logo></yh-shop-car-logo>
  </div>

</template>

<script>
    import YhHeader from "../components/shouye/header";
    import YhFooter from "../components/common/footer";
    import YhMain from "../components/shouye/main";
    import YhShopCarLogo from "../components/common/shopcarlogo";
    export default {
        name: "yhHome",
      components: {YhShopCarLogo, YhMain,YhFooter,YhHeader}
    }
</script>

<style>
  @import "../../static/css/iconfont.css";
  @import "../../static/css/index.css";

  .home{
    width: 100%;
    height: 100%;
    display: -webkit-flex;
    flex-direction: column;
  }
</style>
