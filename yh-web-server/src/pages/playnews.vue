<template>
    <div class="playnews">
      <yh-header></yh-header>
      <yh-play-nav></yh-play-nav>
      <yh-play-news-main></yh-play-news-main>
      <yh-footer></yh-footer>
    </div>
</template>

<script>
    import YhHeader from "../components/play/header";
    import YhPlayNav from "../components/play/playnav";
    import YhPlayNewsMain from "../components/playnews/playnewsmain";
    import YhFooter from "../components/common/footer";
    export default {
        name: "yhPlayNews",
      components: {YhFooter, YhPlayNewsMain, YhPlayNav, YhHeader}
    }
</script>

<style>
  @import "https://at.alicdn.com/t/font_1046545_6jyk7nqdcyk.css";
  @import "../../static/css/index.css";
  @import "../../static/css/play.css";
  .playnews{
    width: 100%;
    height: 100%;
    display: -webkit-flex;
    flex-direction: column;
  }
</style>
