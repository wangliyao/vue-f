<template>
      <div class="onSecreen">
      <div class="onSecreencontent">
        <div class="contentHeader">
          <div class="headerLeft">
              <span style="color: #ec2d7a">{{title}}</span>
          </div>
        </div>
        <div class="contentBody">
          <Tabs>
            <Tab v-for="(item, index) of contentData" :key="index" :title="item.title" >
              <ListContainer :data="item.data"/>
            </Tab>
          </Tabs>
        </div>
      </div>
    </div>
</template>
<script lang="ts" setup>
  import Tabs from "@/components/Tabs.vue"
  import Tab from '@/components/Tab.vue'
  import ListContainer from '@/components/ListContainer.vue'
  import { defineProps } from "vue";

  const {title, data} = defineProps<{
    title: string,
    data?: object[]
  }>();
  interface SecreenData{
    title: string,
    content: object[]
  }
  let contentData: SecreenData[] = data
</script>

<style lang="scss" scoped>
    .onSecreen{
      width: 72%;
      height: 750px;
      background-color: #fff;
      border-radius: 1%;
      .onSecreencontent{
        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: space-between;
        font-size: 20px;
        height: 30px;
        color: #ec2d7a;
        padding: 17px 20px;
        border-bottom: 1px solid #eee;
        .contentHeader{
          width: 100%;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .contentBody{
          width: 100%;
          display: flex;
          height: 1000px;
          .itemRank{
            display: flex;
            flex-direction: column;
            align-items: center;
            position: relative;
            padding-top: 10px; 
            width: 23%;
            img{
              width: 100%;
            }
            .contentName{
              color: #333;
              font-size: 15px;
            }
            .contentNote{
              color: #fff;
              font-size: 13px;
              position: absolute;
              top: 255px;
              background:rgba(17, 18, 18, 0.3);
            }
            .contentRate{
              color: rgb(231, 174, 174);
              font-size: 10px;
              font-weight: 600;
            }
          }
        }
      }
    }
</style>