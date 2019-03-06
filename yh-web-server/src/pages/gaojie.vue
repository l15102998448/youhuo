<template>
    <div class="gaoJie">
      <yh-gao-jie-header></yh-gao-jie-header>
      <yh-gao-main></yh-gao-main>
      <yh-footer></yh-footer>
    </div>
</template>

<script>
    import YhGaoJieHeader from "../components/index-child/gaojieheader";
    import YhGaoMain from "../components/index-child/main";
    import YhFooter from "../components/common/footer";
    export default {
        name: "yhGaoJie",
      components: {YhFooter, YhGaoMain, YhGaoJieHeader}
    }
</script>

<style >
  @import "../../static/css/iconfont.css";
  @import "../../static/css/index.css";
  @import "../../static/css/gaojie.css";
  .gaoJie{
    width:100%;
    height: 100%;
    display: -webkit-flex;
    flex-direction: column;
  }
</style>
