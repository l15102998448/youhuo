<template>
  <div class="banner">
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide">  <a href="#"><img src="../../../static/img/e2.png" alt=""></a></div>
        <div class="swiper-slide">  <a href="#"><img src="../../../static/img/e2.png" alt=""></a></div>
        <div class="swiper-slide">  <a href="#"><img src="../../../static/img/e2.png" alt=""></a></div>
        <div class="swiper-slide">  <a href="#"><img src="../../../static/img/e2.png" alt=""></a></div>
        <div class="swiper-slide">  <a href="#"><img src="../../../static/img/e2.png" alt=""></a></div>
        <div class="swiper-slide">  <a href="#"><img src="../../../static/img/e2.png" alt=""></a></div>
      </div>
    </div>
  </div>
</template>

<script>
  import Swiper from 'swiper';
    export default {
        name: "yhPlaySilder",
        mounted() {
          var mySwiper = new Swiper('.swiper-container', {
            direction: 'horizontal', // 水平切换选项
            loop: true, // 循环模式选项
            autoplay: true,
            // 如果需要分页器
            pagination: {
              el: '.swiper-pagination',
            }
          })
        }
    }
</script>

<style scoped>
  @import "../../../static/css/animate.min.css";
  @import "../../../static/css/swiper.min.css";
</style>
