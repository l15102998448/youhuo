<template>
  <header>
    <div class="top">
      <a href="javascript:;">
        <img src="../../../static/img/l13.png" alt=""/>
      </a>
      <a href="#">注册</a>
      <a href="javascript:;">
        <img src="../../../static/img/l14.png" alt=""/>
      </a>
    </div>
  </header>
</template>

<script>
    export default {
        name: "yhHeader"
    }
</script>

<style scoped>
  header{
    height: .5rem;
    background:none;
  }
  .top{
    box-sizing: border-box;
  }
  .top a:nth-child(2){
    border:none;
    color:black;
  }
</style>
