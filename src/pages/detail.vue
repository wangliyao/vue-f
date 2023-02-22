<template>
   <div class="content">
      <div class="container">
        <div class="header">
           <div class="headerLeft">
             <img :src="store.vodDeatil.vod_pic" alt="">
           </div>
           <div class="headerRight">
              <div class="header_title">
                 <h2>{{store.vodDeatil.vod_name}}</h2>
              </div>
              <div class="span_body">
                <span>导演：</span>
                <a v-for="(director, i) in store.vodDeatil.vod_director" :key="i" :href="'/search?q='+director">{{director}}</a>
              </div>
              <div class="span_body">
                <span>主演：</span>
                <a v-for="(actor, i) in store.vodDeatil.vod_actor" :key="i" :href="'/search?q='+actor">{{actor}}</a>
              </div>
              <div class="span_body">
                <span>类型：</span>
                <a :href="'/search?q='+store.vodDeatil.vod_class">{{store.vodDeatil.vod_class}}</a>
              </div>
              <div class="span_body">
                <span>制片国家/地区：</span>
                <a :href="'/search?q='+store.vodDeatil.vod_area">{{store.vodDeatil.vod_area}}</a>
              </div>
              <div class="span_body">
                <span>剧情简介：</span>
                <span class="text_intr">{{store.vodDeatil.vod_blurb}}</span>
              </div>
           </div>
        </div>
        <div class="ontentBody">
            <XgPlayer :id="'xgPlayer'" :url="playUrl" />
        </div>
        <div>
          <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">
              <el-tab-pane label="努努资源" name="first">
                <div>
                  <ul class="play_list">
                    <li v-for="(play, i) in sliceStr(store.vodDeatil.play_list)" :key="i">
                       <a :class="isActive == i ? 'active' : ''" @click="playVod(play.url, i)">{{play.name}}</a>
                    </li>
                  </ul>
                </div>
              </el-tab-pane>
              <!-- <el-tab-pane label="努努资源" name="second">Config</el-tab-pane>
              <el-tab-pane label="努努资源" name="third">Role</el-tab-pane>
              <el-tab-pane label="努努资源" name="fourth">Task</el-tab-pane> -->
            </el-tabs>
        </div>

      </div>
      <div class="footer">
          <Recommend/>
      </div>
   </div>
</template>
<script lang="ts" setup>
import { ref, onMounted } from "vue"
import XgPlayer from '@/components/XgPlayer.vue'
import Recommend from '@/components/Recommend.vue'
import type { TabsPaneContext } from 'element-plus'
import { useRoute } from 'vue-router'
import { useGlobalStore } from '@/store/global'
  const defaultPlayUrl = ref('')
  const isActive = ref(0)
  const store = useGlobalStore()
  const route = useRoute()
  let path_id = route.params.id
  if (typeof path_id == 'string'){
    store.getVodDetail(path_id)
  }

  const sliceStr = (strArray: string[]): any[] =>{
    var strList:{}[] = []
    for(var str of strArray){
      var result = str.split('$')
      if(result.length === 1){
        strList.push({
          name: '默认',
          url: result[1]
        })
      }else{
        strList.push({
          name: result[0] || '默认',
          url: result[1]
        })
      }
    }
    defaultPlayUrl.value = strList[0].url
    return strList
  }
  const activeName = ref('first')
  const playUrl = ref()
  const handleClick = (tab: TabsPaneContext, event: Event) => {
    console.log(tab, event)
  }
  const playVod = (str: string, index: number | string) =>{
    playUrl.value = str
    isActive.value = index
  }
  onMounted(()=>{
    playUrl.value =  defaultPlayUrl.value
  })
</script>

<style lang="scss" scoped>
  .content{
    max-width: 1270px;
    // width: 100%;
    text-align: left;
    margin: 0 auto;
    padding-left: 15px;
    padding-right: 15px;
    font-size: 15px;
    // display: flex;
    // justif-content: space-between;
    height: 100%;
    .container{
      border: 1px solid rgb(228, 225, 225);
      background-color: #fff;
      // width: 100%;
      // height: 1030px;
      padding: 30px 30px;
      .header{
        display: flex;
        // flex-direction: row;
        // justify-content: space-around;
        .headerLeft{
          padding-right: 30px;
        }
        .headerRight{
          padding-left: 20px;
          a{
            padding-right: 10px;
            color: #ec2d7a;
            text-decoration: none;
            cursor: pointer;
          }
          .header_title{
            h2{
              color: rgb(22, 21, 21);
              margin: 0px 0px;
            }
          }
          .span_body{
            padding: 10px 0px;
          }
          span{
            font-weight: 300;
            color: #999;
          }
          .text_intr{
            color: black;
          }
        }
      }
      
     .ontentBody{
      height: 500px;
      width: 100%;
      padding: 20px 0px;
     }
     .demo-tabs{
       width: 100%;
     }
     .play_list{
      display: flex;
      justify-items: center;
      padding: 7px;
      margin-top: 0px;
      flex-flow:row wrap;
      width: 100%;
      // align-items: center;
      li{
        display: flex;
        list-style:none;
        margin-bottom: 10px;
        width: 134px;
      }
      a{
        white-space: nowrap;
        text-decoration: none;
        text-align: center;
        padding: 3px 31px;
        width: 60px;
        margin-right: 13px;
        border: 1px solid #eee;
        border-radius: 3%;
        color: #666;
        font-size: 15px;;
        display: block;
      }
      a:hover{
        background-color: #ec2d7a;
        color: #fff;
      }
      .active{
          background-color: #ec2d7a;
          color: #fff;
        }
     }
      .el-tabs{
        padding-top: 20px;
        :deep(.el-tabs__active-bar){
            display: none;
          }
        :deep(.el-tabs__item){
          padding: 0 10px;
          font-size: 14px;
          height: 40px;
          width: 74px;
          font-weight: 777;
          text-align: center;
        }
        :deep(.el-tabs__item.is-active) {
          color: #fff;
          background: linear-gradient(45deg, #DD2E9B 0%, #F47039 99%);
        }
      }
    }

  }
  .footer{
      margin-top: 30px;
      border: 1px solid rgb(228, 225, 225);
      width: 100%;
      // height: 300px;
      background-color: #fff;
    }
</style>