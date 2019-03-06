<template>
    <div class="shopCar">
      <yh-shop-car-header></yh-shop-car-header>
      <yh-shop-car-main :data="cartsInfoTwo.product"></yh-shop-car-main>
      <yh-shop-car-footer></yh-shop-car-footer>
    </div>
</template>

<script>
    import cartsApi from "../assets/cartsApi";
    import YhShopCarHeader from "../components/shopCar/header";
    import YhShopCarFooter from "../components/shopCar/footer";
    import YhShopCarMain from "../components/shopCar/main";
    export default {
        name: "yhShopCar",
      components: {YhShopCarMain, YhShopCarFooter, YhShopCarHeader},
      data(){
        return {
          cartsInfoTwo:{}
        }
      },
      methods:{
          _initData(){
            cartsApi.getCartsInfo(data=>{
              console.log(data);
              this.cartsInfoTwo=data;
            })
          }
      },
      mounted(){
          this._initData();
      }
    }
</script>

<style>
@import "https://at.alicdn.com/t/font_1046545_o7i054i8cp.css";
@import "../../static/css/shopCar.css";
 .shopCar{
   width:100%;
   height: 100%;
   display: -webkit-flex;
   flex-direction: column;
 }
</style>
