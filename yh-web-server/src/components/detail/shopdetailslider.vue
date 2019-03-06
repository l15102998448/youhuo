<template>
  <div class="banner">
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide"  v-for="k in data"  >
          <img  :src="k" alt="" />
        </div>

        <!--<div class="swiper-slide"> <img src="../../../static/img/l10.jpg" alt="" /></div>-->
        <!--<div class="swiper-slide"> <img src="../../../static/img/l11.jpg" alt="" /></div>-->
        <!--<div class="swiper-slide"> <img src="../../../static/img/l12.jpg" alt="" /></div>-->
        <!--<div class="swiper-slide"> <img src="../../../static/img/l13.jpg" alt=""/></div>-->
      </div>
      <!-- 如果需要分页器 -->
      <div class="swiper-pagination"></div>
    </div>
  </div>
</template>

<script>
  import Swiper from 'swiper';
  export default {
    name: "yhShopDetailSlider",
    props:["data"],
    data(){
      return{
        k:{}
      }

    },
    mounted() {
      var mySwiper = new Swiper('.swiper-container', {
        direction: 'horizontal', // 水平切换选项
        stopOnLastSlide:false,
        // 如果需要分页器
        pagination: {
          el: '.swiper-pagination',
        }
      })
    }
  }
</script>

<style >
@import "../../../static/css/animate.min.css";
@import "../../../static/css/swiper.min.css";
@import "../../../static/css/detail.css";
</style>
