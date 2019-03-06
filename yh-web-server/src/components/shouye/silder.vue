<template>
  <header>
    <div class="banner">
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide"> <img src="../../../static/img/banner.jpg" alt="" /></div>
          <div class="swiper-slide"> <img src="../../../static/img/banner.jpg" alt="" /></div>
          <div class="swiper-slide"> <img src="../../../static/img/banner.jpg" alt="" /></div>
          <div class="swiper-slide"> <img src="../../../static/img/banner.jpg" /></div>
          <div class="swiper-slide"> <img src="../../../static/img/banner.jpg" alt=""/></div>
          <div class="swiper-slide"> <img src="../../../static/img/banner.jpg" alt="" /></div>
        </div>
        <!-- 如果需要分页器 -->
        <div class="swiper-pagination"></div>
      </div>
    </div>
  </header>
</template>

<script>
  import Swiper from 'swiper';
    export default {
      name: "yhSilder",
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

<style>
  @import "../../../static/css/animate.min.css";
  @import "../../../static/css/swiper.min.css";
  @import "../../../static/css/index.css";
</style>
