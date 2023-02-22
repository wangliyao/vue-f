<template>
  <div class="footer">
    © 2018-2023 努努影院
  </div>
  <div class="to_top" v-show="btnShow" @click="gobackTop">
    <el-icon :size="30" color="#fff">
      <ArrowUpBold />
    </el-icon>
  </div>
</template>

<script lang="ts" setup>
import {onMounted, ref} from "vue";

  const btnShow = ref(false)
  onMounted(()=>{
    window.addEventListener('scroll', scrollToTop)
  })
  const gobackTop = function():void{
  window.scrollTo({top: 0, left: 0,behavior: "smooth"})
  }

  const scrollToTop = function():void{
    if(window.scrollY > 0){
    btnShow.value = true
    }else{
    btnShow.value = false
    }
  }  
</script>
<style lang="scss" scoped>
  .footer{
    height: 70px;
    background-color: #fff;
    display: flex;
    justify-content: space-around;
    align-items: center;
    color: rgb(123, 120, 120);
    margin-top: 30px;
  }
  .to_top{
    width: 40px;
    height: 40px;
    background:rgba(17, 18, 18, 0.3);
    position: fixed;
    top: 90%;
    right: 3%;
    cursor: pointer;
    text-align: center;
  }
</style>