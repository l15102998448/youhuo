<template>
  <div class="new">
    <h1><span></span>新品到着<span></span></h1>
    <h2>NEW APPLYALS</h2>
    <yh-new-a></yh-new-a>
    <yh-applyals></yh-applyals>
  </div>
</template>

<script>
    import YhNewA from "./newA";
    import YhApplyals from "./applyals";
    export default {
        name: "yhNew",
      components: {YhApplyals, YhNewA}
    }
</script>

<style scoped>

</style>
