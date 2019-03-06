<template>
  <div class="content">
    <span class="checkbox">√</span>
    <a href="#">
      <img :src="data.pic" alt=""/>
    </a>
    <div class="trade">
      <div class="tradeTit">
        <a href="javascript:;">{{data.title}}</a>
        <p class="tradeNum">x &nbsp;<span> {{data.proNum}} </span></p>
      </div>
      <p class="tradeColor">
        <span>颜色 : </span><span>&nbsp;{{data.attr.color}}</span>
        <span>尺码 : </span><span>&nbsp;{{data.attr.size}}</span>
      </p>
      <p class="tradePrice">￥<span>{{data.singlePrice}}</span></p>
    </div>
  </div>
</template>

<script>
    export default {
        name: "yhShopCarContent",
        props:["data"]
    }
</script>

<style scoped>

</style>
