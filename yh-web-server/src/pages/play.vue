<template>
    <div class="play">
      <yh-header></yh-header>
      <yh-play-nav></yh-play-nav>
      <yh-main></yh-main>
      <yh-footer></yh-footer>
    </div>
</template>

<script>
    import YhHeader from "../components/play/header";
    import YhMain from "../components/play/main";
    import YhFooter from "../components/common/footer";
    import YhPlayNav from "../components/play/playnav";
    export default {
        name: "yhPlay",
      components: {YhPlayNav, YhFooter, YhMain, YhHeader}
    }
</script>

<style>
  @import "../../static/css/index.css";
  @import "../../static/css/play.css";
  .play{
    width:100%;
    height: 100%;
    display: -webkit-flex;
    flex-direction: column;
  }
</style>
