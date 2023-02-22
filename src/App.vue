<script>
 import TopNav from '@/components/NavTop.vue'
 import Footer from '@/components/Footer.vue' 
 export default{
    components:{
        TopNav,
        Footer,
    }
 }
</script>

<template>
    <div class="root">
        <TopNav/>
        <Suspense>
          <RouterView/>
        </Suspense>
        <Footer/>
    </div>
</template>

<style scoped lang="scss">
  .root{
    width: 100%;
    // margin: 0 100px;
  }
</style>
