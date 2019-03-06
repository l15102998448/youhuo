<template>
    <div class="main">
      <div class="emptyCar">
        <img src="../../../static/img/em1.png" alt="">
        <p>您的购物车暂无商品</p>
        <a href="#">随便逛逛</a>
      </div>
      <div class="shoppings">
        <h3>为您优选</h3>
        <div class="shopList">
          <yh-shop-list-one></yh-shop-list-one>
          <a href="#">
            <img src="../../../static/img/em3.jpg" alt="">
            <p>UGG Angelababy同款乐福加州系列休闲户外家...</p>
            <div class="emptyPrice">
              <p>￥<span>980.00</span></p>
              <p>￥<span>1680.00</span></p>
              <span class="iconfont icon-gengduo6"></span>
            </div>
          </a>
          <a href="#">
            <img src="../../../static/img/em4.jpg" alt="">
            <p>UGG Angelababy同款乐福加州系列休闲户外家...</p>
            <div class="emptyPrice">
              <p>￥<span>980.00</span></p>
              <p>￥<span>1680.00</span></p>
              <span class="iconfont icon-gengduo6"></span>
            </div>
          </a>
          <a href="#">
            <img src="../../../static/img/em5.jpg" alt="">
            <p>UGG Angelababy同款乐福加州系列休闲户外家...</p>
            <div class="emptyPrice">
              <p>￥<span>980.00</span></p>
              <p>￥<span>1680.00</span></p>
              <span class="iconfont icon-gengduo6"></span>
            </div>
          </a>
          <a href="#">
            <img src="../../../static/img/em6.jpg" alt="">
            <p>UGG Angelababy同款乐福加州系列休闲户外家...</p>
            <div class="emptyPrice">
              <p>￥<span>980.00</span></p>
              <p>￥<span>1680.00</span></p>
              <span class="iconfont icon-gengduo6"></span>
            </div>
          </a>
        </div>
      </div>
    </div>
</template>

<script>
    import YhShopListOne from "./shoplistone";
    export default {
        name: "yhEmptyShopCarMain",
      components: {YhShopListOne}
    }
</script>

<style>
  .main{
    width:100%;
    height: 100%;
    overflow-y: auto;
  }
</style>
