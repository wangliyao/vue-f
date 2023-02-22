<template>
  <div class="container">
    <div class="list">
      <header>
        <h3>影视筛选</h3>
      </header>
      <div class="list-content">
         <dl v-for="(item, i) of store.categoryHeadData" :key="i" class="list-row">
         <dt>{{item.name}}：</dt>
         <dd v-for="(child, i) in item.child" :key="i">
            <a :href="child">{{child}}</a>
         </dd>
       </dl>

      </div>
      <!-- <div class="navbar-body">
       <div class="navbar active">
          <a href="#">按时间排序</a>
       </div>
       <div class="navbar">
          <a href="">按人气排序</a>
       </div>
       <div class="navbar">
          <a href="">按评分排序</a>
       </div>
      </div> -->
       <ListContainer :data="store.categoryDataBody" maxListCount="6"/>
      <footer class="footer">
       <el-pagination background layout="prev, pager, next" :total="store.categoryPage.total_count" @current-change="changePage" :page-size="24"/>
      </footer>
    </div>
  </div>
</template>
<script lang="ts" setup>
   import ListContainer from '@/components/ListContainer.vue'
   import { onMounted, ref, watch } from 'vue'
   import { useGlobalStore } from '@/store/global'
   import { useRoute } from 'vue-router'
   const route = useRoute()
   const store = useGlobalStore()
   const changePage = function (page_num: number){
    store.getSearchData(query, page_num)
  }
  const {query} = defineProps<{
    query?: string,
  }>();

  watch(
    () => route.query.q,
    newValue => {
     var value = newValue?.toString()
     store.getSearchData(value, 1);
    }
  )

  onMounted(()=>{
    store.getSearchData(query, 1);
  })

</script>


<style lang="scss" scoped>
  .container{
    background-color: #fff;
    max-width: 1270px;
    margin: 0 auto;
    .list{
      padding: 0 20px;
      header{
        display: flex;
        color: #ec2d7a;
        h3{
          font-weight: 400;
        }
      }
      .list-content{
        border-top: 1px solid #eee;
        dl{  
            display: flex;
            padding-top: 10px;
            dt{
              font-weight: 300;
              color: #555;
              font-size: 14px;
            }
            dd{
              font-size: 14px;
              a{
                display: block;
                text-align: center;
                padding:0 5px;
                margin:0 5px;
              }
              a:hover{
                background-color: #999;
                color: #fff;
              }
            }
          }
 
      }
      .navbar-body{
        border-bottom: 1px solid #eee;
        .navbar{
          margin-top: 20px;
          display: inline-block;
          padding: 0 15px;
        }
        .navbar.active{
          background-color: #ec2d7a ;
          a{
            color: #fff;
          }
        }
      }

    }
    .footer{
      padding: 20px;
      display: flex;
      justify-content: center;
      :deep(.el-pagination.is-background .el-pager li:not(.is-disabled).is-active) {
        background-color: #ec2d7a !important; //修改默认的背景色
      }
    }
  }
</style>