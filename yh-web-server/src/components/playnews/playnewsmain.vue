<template>
    <div class="main">
      <yh-play-news-con></yh-play-news-con>
      <div class="content_one content_two">
        <div class="playNewsTit">
          <a href="#">
            <img src="../../../static/img/n2.png" alt="">
            <span>北极兔</span>
          </a>
          <a href="#">#买物</a>
        </div>
        <div class="playNewsCon">
          <a href="#">
            <img src="../../../static/img/n5.jpg" alt="">
            <h3>开春了，就想要一双训练老爹鞋</h3>
            <h5>比普通老爹鞋更复古</h5>
          </a>
          <div class="newsCon">
            <p>
              <span class="iconfont icon-clock"></span>
              <span>03月01日  23:00</span>
            </p>
            <p>
              <span class="iconfont icon-yanjing"></span>
              <span>5471</span>
            </p>
            <p>
              <span class="iconfont icon-shoucang2"></span>
              <span class="iconfont icon-fanhuiyou"></span>
            </p>
          </div>
        </div>
      </div>
      <div class="content_one content_two">
        <div class="playNewsTit">
          <a href="#">
            <img src="../../../static/img/n1.png" alt="">
            <span>北极兔</span>
          </a>
          <a href="#">#买物</a>
        </div>
        <div class="playNewsCon">
          <a href="#">
            <img src="../../../static/img/n4.jpg" alt="">
            <h3>开春了，就想要一双训练老爹鞋</h3>
            <h5>比普通老爹鞋更复古</h5>
          </a>
          <div class="newsCon">
            <p>
              <span class="iconfont icon-clock"></span>
              <span>03月01日  23:00</span>
            </p>
            <p>
              <span class="iconfont icon-yanjing"></span>
              <span>5471</span>
            </p>
            <p>
              <span class="iconfont icon-shoucang2"></span>
              <span class="iconfont icon-fanhuiyou"></span>
            </p>
          </div>
        </div>
      </div>
      <div class="content_one content_two">
        <div class="playNewsTit">
          <a href="#">
            <img src="../../../static/img/n2.png" alt="">
            <span>北极兔</span>
          </a>
          <a href="#">#买物</a>
        </div>
        <div class="playNewsCon">
          <a href="#">
            <img src="../../../static/img/n5.jpg" alt="">
            <h3>开春了，就想要一双训练老爹鞋</h3>
            <h5>比普通老爹鞋更复古</h5>
          </a>
          <div class="newsCon">
            <p>
              <span class="iconfont icon-clock"></span>
              <span>03月01日  23:00</span>
            </p>
            <p>
              <span class="iconfont icon-yanjing"></span>
              <span>5471</span>
            </p>
            <p>
              <span class="iconfont icon-shoucang2"></span>
              <span class="iconfont icon-fanhuiyou"></span>
            </p>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
    import YhPlayNewsCon from "./playnewscon";
    export default {
        name: "yhPlayNewsMain",
      components: {YhPlayNewsCon}
    }
</script>

<style>
  .main{
    width:100%;
    height: 100%;
    overflow-y: auto;
  }
  .content_one{
    background:white;
    border-bottom: 1px solid #e0e0e0;
    margin-bottom:.1rem;
  }
  .playNewsTit{
    height: .41rem;
    display: -webkit-flex;
    -webkit-justify-content: space-between;
    -webkit-align-items: center;
    padding:0 .1rem;
  }
  .playNewsTit a img{
    width:.27rem;
    height: .27rem;
    margin-right: .1rem;
  }
  .playNewsTit a span{
    font-size:.12rem;
    color:#323232;
  }
  .playNewsTit a:nth-child(1){
    display: -webkit-flex;
    -webkit-align-items: center;
  }
  .playNewsTit a:nth-child(2){
    display: block;
    width:.54rem;
    height: .18rem;
    background:#3e3e3e;
    color:white;
    font-size:.12rem;
    text-align: center;
    line-height: .18rem;
  }
  .playNewsCon {
    background:white;
    padding-right: .1rem;
    border-top:1px solid #e0e0e0;
    margin-left:.1rem;
  }

  .playNewsCon a img{
    width:100%;
    height:2.23rem;
    padding-top:.1rem;
  }
  .playNewsCon a h3{
    font-size:.16rem;
    color:black;
  }
  .playNewsCon a h5{
    font-size:.14rem;
    color:#3e3a39;
  }
  .playNewsCon a h5, .playNewsCon a h3{
    margin-top:.1rem;
  }
  .newsCon,.newsCon p{
    display: -webkit-flex;
    height: .45rem;
    -webkit-align-items: center;
  }
  .newsCon p span{
    font-size:.12rem;
    color:#999999;

  }
  .newsCon p:nth-child(2){
    margin-left: .18rem;
    margin-right: .9rem;
  }
  .newsCon p:last-child .icon-fanhuiyou{
    margin-right: 0;
    margin-left: .15rem;
  }
  .newsCon p .iconfont{
    font-size:.18rem;
    margin-right:.09rem;
  }
  .content_two{
    border-top:1px solid #e0e0e0;
  }
</style>
