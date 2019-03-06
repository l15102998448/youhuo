<template>
    <div class="emptyShopCar">
      <yh-empty-shop-car-header></yh-empty-shop-car-header>
      <yh-empty-shop-car-main></yh-empty-shop-car-main>
    </div>
</template>

<script>
    import YhEmptyShopCarHeader from "../components/emptyshopcar/header";
    import YhEmptyShopCarMain from "../components/emptyshopcar/emptyshopcarmain";
    export default {
        name: "yhEmptyShopCar",
      components: {YhEmptyShopCarMain, YhEmptyShopCarHeader}
    }
</script>

<style>
  @import "https://at.alicdn.com/t/font_1046545_o7i054i8cp.css";
  @import "../../static/css/emptyshopcar.css";
.emptyShopCar{
  width:100%;
  height: 100%;
  display: -webkit-flex;
  flex-direction: column;
}
</style>
