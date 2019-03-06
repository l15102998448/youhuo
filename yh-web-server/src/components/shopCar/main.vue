<template>
  <div class="main">
   <yh-shop-car-content></yh-shop-car-content>
    <yh-reduction></yh-reduction>
    <yh-shop-car-content  v-for="i  in data " :data="i"></yh-shop-car-content>
  </div>
</template>

<script>
    import YhShopCarContent from "./content";
    import YhReduction from "./reduction";
    export default {
        name: "yhShopCarMain",
      components: {YhReduction, YhShopCarContent},
      props:["data"]
    }
</script>

<style scoped>
.main{
  width:100%;
  height: 100%;
  overflow-y: auto;

}
</style>
