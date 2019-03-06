<template>
    <div class="yhMy" >
        <yh-header></yh-header>
        <yh-my-main></yh-my-main>
        <yh-footer></yh-footer>
      <yh-shop-car-logo></yh-shop-car-logo>
    </div>
</template>

<script>
    import YhHeader from "../components/my/header";
    import YhMyMain from "../components/my/myMain";
    import YhFooter from "../components/common/footer";
    import YhShopCarLogo from "../components/common/shopcarlogo";
    export default {
        name: "yhMy",
      components: {YhShopCarLogo, YhFooter, YhMyMain, YhHeader}
    }
</script>

<style>
@import "../../static/css/index.css";
@import "../../static/css/my.css";
.yhMy{
  width:100%;
  height: 100%;
  display: -webkit-flex;
  flex-direction: column;
}
</style>
