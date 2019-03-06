<template>
    <div class="shopDetail">
       <yh-shop-detail-header></yh-shop-detail-header>
      <yh-shop-detail-main :data="imgsInfo.img"></yh-shop-detail-main>
      <yh-shop-detail-footer></yh-shop-detail-footer>
      <yh-shop-car-logo></yh-shop-car-logo>
    </div>
</template>

<script>
    import YhShopDetailHeader from "../components/detail/header";
    import YhShopDetailMain from "../components/detail/main";
    import YhShopDetailFooter from "../components/detail/shopdetailfooter";
    import YhShopCarLogo from "../components/common/shopcarlogo";
    export default {
      name: "yhShopDetail",
      components: {
        YhShopCarLogo,
        YhShopDetailFooter,
        YhShopDetailMain,
        YhShopDetailHeader
      },
      data() {
        return {
          imgsInfo: {}
        }
      },
      methods: {
        getSliderImgs() {
          fetch("http://localhost:4000/apis/swiper", {
            method: 'GET'
          })
            .then((data) => {
              return data.text()
            })
            .then((data) =>{
              console.log(data)
              this.imgsInfo=JSON.parse(data);
            })
        }
      },
      mounted(){
        this.getSliderImgs()
      }
    }

</script>

<style>
  @import "https://at.alicdn.com/t/font_1046545_o7i054i8cp.css";
@import "../../static/css/detail.css";
  .shopDetail{
    width:100%;
    height: 100%;
    display: -webkit-flex;
    flex-direction: column;
  }
</style>
