<template>
    <div class="fenLei">
      <yh-top></yh-top>
      <yh-top-nav></yh-top-nav>
      <yh-fmain :data="classify" v-if="classify"></yh-fmain>
      <yh-footer></yh-footer>
      <yh-shop-car-logo></yh-shop-car-logo>
    </div>
</template>

<script>
    import classifyApi  from "../assets/classifyApi";
    import YhFmain from "../components/fenlei/fmain";
    import YhTop from "../components/fenlei/top";
    import YhTopNav from "../components/fenlei/topnav";
    import YhFooter from "../components/common/footer";
    import YhShopCarLogo from "../components/common/shopcarlogo";
    export default {
      name: "yhFenLei",
      components: {YhShopCarLogo, YhFooter, YhTopNav, YhTop, YhFmain},
      data(){
          return {
            classify : {}
          }
      },
      methods: {
        _initData(){
          classifyApi.getClassifyInfo(data=>{
            console.log(data)
            this.classify = data;
          })
        }
      },
      created(){
        this._initData();
      }
    }
</script>

<style>
  @import "../../static/css/iconfont.css";
  @import "../../static/css/index.css";
  @import "../../static/css/assortment.css";
  .fenLei{
    width: 100%;
    height: 100%;
    display: -webkit-flex;
    flex-direction: column;
  }
</style>
