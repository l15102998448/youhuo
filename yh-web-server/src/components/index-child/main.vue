<template>
    <div class="main">
      <div class="banner">
          <a href="#">
            <img src="../../../static/img/g1.jpg" alt=""/>
          </a>
        </div>
      <yh-nav></yh-nav>
      <div class="banner2">
        <a href="#">
          <img src="../../../static/img/g2.jpg" alt="">
        </a>
      </div>
      <div class="section">
        <div class="gaoTitle">
          <h3>选购最新上架</h3>
          <p>包含PALM ANGELS/Rick Owens/OAMC等最新商品</p>
        </div>
        <div class="gaoProduct">
          <a href="#">
            <img src="../../../static/img/g5.jpg" alt=""/>
            <span>PALM ANGELS</span>
            <span>logo撞色夹克</span>
          </a>
          <a href="#">
            <img src="../../../static/img/g6.jpg" alt=""/>
            <span>PALM ANGELS</span>
            <span>logo撞色夹克</span>
          </a>
          <a href="#">
            <img src="../../../static/img/g5.jpg" alt=""/>
            <span>PALM ANGELS</span>
            <span>logo撞色夹克</span>
          </a>
          <a href="#">
            <img src="../../../static/img/g5.jpg" alt=""/>
            <span>PALM ANGELS</span>
            <span>logo撞色夹克</span>
          </a>
        </div>
      </div>
      <div class="ban01">
        <a href="#">
          <img src="../../../static/img/g7.jpg" alt="">
        </a>
      </div>
      <div class="ban02">
        <a href="#">
          <img src="../../../static/img/g8.jpg" alt="">
        </a>
        <h2>MSGM</h2>
        <P>shop now</P>
      </div>
      <div class="ban02 ban03">
        <a href="#">
          <img src="../../../static/img/g9.jpg" alt="">
        </a>
        <h2>MSGM</h2>
        <P>shop now</P>
      </div>
      <div class="ban02">
        <a href="#">
          <img src="../../../static/img/g10.jpg" alt="">
        </a>
        <h2>MSGM</h2>
        <P>shop now</P>
      </div>
      <div class="ban02">
        <a href="#">
          <img src="../../../static/img/g11.jpg" alt="">
        </a>
        <h2>MSGM</h2>
        <P>shop now</P>
      </div>
      <div class="section">
        <div class="gaoTitle gaoTitle01">
          <h3>选购更多品类</h3>
        </div>
        <div class="gaoProduct gaoProduct01">
          <a href="#">
            <img src="../../../static/img/g5.jpg" alt=""/>
            <span>卫衣</span>
          </a>
          <a href="#">
            <img src="../../../static/img/g6.jpg" alt=""/>
            <span>logo撞色夹克</span>
          </a>
          <a href="#">
            <img src="../../../static/img/g5.jpg" alt=""/>
            <span>logo撞色夹克</span>
          </a>
          <a href="#">
            <img src="../../../static/img/g5.jpg" alt=""/>
            <span>logo撞色夹克</span>
          </a>
        </div>
      </div>
    </div>
</template>

<script>
    import YhNav from "../shouye/nav";
    export default {
        name: "yhGaoMain",
      components: { YhNav}
    }
</script>

<style scoped>
.main{
  width:100%;
  height: 100%;
  overflow-y: auto;
}
</style>
