<template>
  <div class="hot">
   <yh-hot-nav></yh-hot-nav>
   <yh-hot-content></yh-hot-content>
  </div>
</template>

<script>
    import YhHotNav from "./hotNav";
    import YhHotContent from "./hotContent";
    export default {
        name: "yhHot",
      components: {YhHotContent, YhHotNav}
    }
</script>

<style scoped>

</style>
