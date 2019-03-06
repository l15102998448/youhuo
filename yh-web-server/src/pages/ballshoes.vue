<template>
  <div class="ballShoes">
    <yh-header></yh-header>
    <yh-main></yh-main>
    <yh-footer></yh-footer>
    <yh-shop-car-logo></yh-shop-car-logo>
  </div>
</template>

<script>
    import YhHeader from "../components/ballshoes/header";
    import YhMain from "../components/ballshoes/main";
    import YhFooter from "../components/common/footer";
    import YhShopCarLogo from "../components/common/shopcarlogo";
    export default {
      name: "yhBallShoes",
      components: {YhShopCarLogo, YhHeader,YhMain,YhFooter},

    }
</script>

<style>
  @import "../../static/css/iconfont.css";
  @import "../../static/css/index.css";
  @import "../../static/css/ballShoes.css";
  .ballShoes{
    width:100%;
    height: 100%;
    display: -webkit-flex;
    flex-direction: column;
  }
</style>
