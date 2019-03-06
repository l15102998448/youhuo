<template>
    <div class="main">
      <!--header-->
      <yh-silder></yh-silder>
      <yh-nav></yh-nav>
      <!--nav-->
      <yh-section></yh-section>
      <!--section-->
    </div>
</template>

<script>
    import YhNav from "./nav";
    import YhSilder from "./silder";
    import YhSection from "./section";
    export default {
        name: "yhMain",
      components: {YhSection, YhSilder, YhNav}
    }
</script>

<style scoped>
  .main{
    width: 100%;
    height: 100%;
    -webkit-flex: 1;
    overflow-y: auto;
  }
</style>
