<template>
  <div class="main">
    <yh-shop-detail-slider :data="data"></yh-shop-detail-slider>
    <div class="fzName">
      <a href="#">UNIFREE 运动风立领长袖圆环拉链撞色学院校服套装</a>
      <p>
        <i>￥</i>
        <span>289</span>
        <i>￥</i>
        <span>718</span>
      </p>
    </div>
    <div class="sales">
      <div class="hotSales">
        <span>促销</span>
        <p>满￥399增利是封，赠完即止，全场任意消费全场任意消费</p>
        <span class="iconfont icon-xiayiye1"></span>
      </div>
      <div class="pinpai">
        <p>
          <span class="iconfont icon-xuanzhongduihao"></span>
          <span>品牌保障</span>
        </p>
        <p>
          <span class="iconfont icon-xuanzhongduihao"></span>
          <span>支持7天退换货</span>
        </p>
      </div>
    </div>
    <div class="content">
      <div class="appraise">
        <p >晒单评价(0)</p>
        <span></span>
        <p class="fo1">购买咨询(1)</p>
      </div>
      <div class="fare">
        <div class="fareInsurance">
          <span class="letter">Q</span>
          <p>
            <span>有运费险吗</span>
            <span>2018-10-10 01:24:30</span>
          </p>
        </div>
        <div class="fareInsurance fareIns">
          <span class="letter">A</span>
          <p>您好，个人原因退换货运费由您自己承担哟~，由货原因需要退运费的包裹，请您先行垫付运费寄...</p>
        </div>
        <div class="more">
          <span>查看更多</span>
          <span class="iconfont icon-xiayiye1"></span>
        </div>
      </div>
    </div>
    <div class="lotteryDraw">
      <p >
        <span class="iconfont icon-hongbao"></span>
        <span>各类限量型鞋及免单券限时抽</span>
      </p>
      <p>
        <span class="iconfont icon-xiayiye1"></span>
      </p>
    </div>
    <div class="dianPu">
      <p class="dianPuTile">
        <span>UNIFREE</span>
        <span>UNIFREE</span>
      </p>
      <P class="comeDianPu">
        <span>进入店铺</span>
        <span class="iconfont icon-xiayiye1"></span>
      </P>
    </div>
    <div class="clothesImgs">
      <a href="#">
        <img src="../../../static/img/l14.jpg" alt="">
        <p>UNIFREE 立领宽松外套</p>
        <p>
          <span>￥</span>
          <span>269.00</span>
        </p>

      </a>
      <a href="#">
        <img src="../../../static/img/l15.jpg" alt="">
        <p>UNIFREE 立领宽松外套</p>
        <p>
          <span>￥</span>
          <span>269.00</span>
        </p>

      </a>
      <a href="#">
        <img src="../../../static/img/l16.jpg" alt="">
        <p>UNIFREE 立领宽松外套</p>
        <p>
          <span>￥</span>
          <span>269.00</span>
        </p>

      </a>
      <a href="#">
        <img src="../../../static/img/l14.jpg" alt="">
        <p>UNIFREE 立领宽松外套</p>
        <p>
          <span>￥</span>
          <span>269.00</span>
        </p>

      </a>
      <a href="#">
        <img src="../../../static/img/l14.jpg" alt="">
        <p>UNIFREE 立领宽松外套</p>
        <p>
          <span>￥</span>
          <span>269.00</span>
        </p>

      </a>
      <a href="#">
        <img src="../../../static/img/l14.jpg" alt="">
        <p>UNIFREE 立领宽松外套</p>
        <p>
          <span>￥</span>
          <span>269.00</span>
        </p>

      </a>
    </div>
  </div>
</template>

<script>
    import YhShopDetailSlider from "./shopdetailslider";
    export default {
        name: "yhShopDetailMain",
      props:["data"],
      components: {YhShopDetailSlider}
    }
</script>

<style scoped>
.main{
  width:100%;
  height: 100%;
  overflow-y: auto;
}
</style>
