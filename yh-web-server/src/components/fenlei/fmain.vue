<template>
  <div class="fmain">
    <div class="navLeft">
      <a v-for="(k,i) in data.leftTitle" @click="isClick(i)"  href="javascript:;"  >{{k}}</a>
    </div>
    <div class="goodsList">
      <div class="list_one" >
        <h3><span></span>热门推荐<span></span></h3>
        <div class="listInfo">
          <a href="#"  v-for="keys in data.rightInfo[houzi]">
            <img :src="keys.img">
            <span>{{keys.title}}</span>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
    export default {
      name: "yhFmain",
      props:["data"],
      data(){
        return {
          houzi:0,
        }
      },
      methods:{
        isClick(key){
          this.houzi=key
        }
      },
      mounted(){
        this.isClick(0);
      }

    }
</script>

<style scoped>
.fmain{
  width: 100%;
  height: 100%;
  -webkit-flex: 1;
  overflow-y: auto;
  display: -webkit-flex;
}
  .goodsList{
    overflow-y: auto;
    padding:0 .1rem;
    width: 100%;
  }
</style>
