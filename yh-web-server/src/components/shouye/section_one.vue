<template>
  <div class="section_one">
    <yh-content></yh-content>
    <yh-con-img></yh-con-img>
  </div>
</template>

<script>
    import YhContent from "./content";
    import YhConImg from "./conImg";
    export default {
        name: "yhSection_one",
      components: {YhConImg, YhContent}
    }
</script>

<style scoped>

</style>
