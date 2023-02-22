<template>
   <div class="lists">
    <header>
      <h3>猜你喜欢</h3>
    </header>
    <ListContainer :data="store.vodRecommend" maxListCount="6"/>
   </div>
</template>
<script lang="ts" setup>
  import { ref } from "vue";
  import ListContainer from '@/components/ListContainer.vue'
  import { useGlobalStore } from '@/store/global'
  import { useRoute } from 'vue-router'
  const route = useRoute()
  let path_id = route.params.id
  const store = useGlobalStore()
  if (typeof path_id == 'string'){
    store.getVodRecommendData(path_id)
  }
</script>
<style lang="scss" scoped>
  .lists{
    width: 100%;
    padding: 0px 20px;
    header{
      padding-bottom: 20px;
      border-bottom: 1px solid #eee;
      h3{
        color: #ec2d7a;
        display: flex;
        margin: 0px 20px;
        padding-top: 25px;
        font-size: 21px;
      }
    }
    .list-content{
      display: flex;
      width: 100%;
      
      .list-ul{
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-items: center;
        margin: 20px;
        padding: 20px 0px;
        border-top: 1px solid rgb(224, 222, 222);
        li{
          margin: 0 5px;
          list-style: none;
          display: flex;
          width: 195px;
          flex-direction: column;
        }
        h4{
          margin: 0;
          padding: 0px 3px;
          font-weight: 400;
        }
      }
     
    }
  }
</style>