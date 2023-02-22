<template>
      <div class="weeklyRank">
      <div class="title">{{title}}</div>
      <ul class="listsContent">
         <li v-for="(item, index) in hostRank" :key="index" class="rankItem">
             <div class="rankItemLeft">
              <span class="itemIndex">{{index + 1}}</span>
             <a :href="item.vod_id">
              <h2> {{ item.vod_name }} </h2>
             </a>
             </div>
             <div>
              <time> {{ changeDate(item.vod_time) }} </time>
             </div>
         </li>
      </ul>
    </div>
</template>
<script lang="ts" setup>
import { defineProps } from 'vue';
  export interface rankData{
    vod_id: string
    vod_name: string,
    vod_time: number
  }
  const { title, data } = defineProps<{
    title: string,
    data?: any,
  }>()
 let hostRank: rankData[] = data

 const changeDate = function(timestamp: number): string {
    let date = new Date(timestamp);
    let y:string | number
    let MM:string | number
    let d:string | number
    y = date.getFullYear();
    MM = date.getMonth() + 1;
    MM = MM < 10 ? ('0' + MM) : MM;
    d = date.getDate();
    d = d < 10 ? ('0' + d) : d;
    return y + '-' + MM + '-' + d;
 }
</script>

<style lang="scss" scoped>
    .weeklyRank{
      width: 22%;
      background-color: #fff;
      padding: 20px 20px;
      display: flex;
      flex-direction: column;
      border-radius: 1%;
      .title{
        display: flex;
        align-items: center;
        font-size: 20px;
        height: 30px;
        color: #ec2d7a;
      }
      .listsContent{
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        margin-top: 14px;
        padding-left: 0px;
        border-top: 1px solid #eee;
        .rankItem{
          list-style: none;
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          align-items: center;
          .rankItemLeft{
            display: flex;
            align-items: center;
            h2{
            max-width: 160px;
            font-size: 14px;
            padding-left: 15px;
            font-weight: 400;
            text-align: left;
            white-space: no-warp;
            }
            span{
              width: 30px;
              text-align: center;
              color: #ccc;
            }
          }
          time{
            text-align: right;
            font-size: 10px;
            color: #ccc;
          }

        }
        .rankItem:nth-child(1) span{
          background-color: red;
          color: #fff;
          width: 30px;
          border-top-right-radius: 11px;
          border-bottom-right-radius: 11px;
          text-align: center;
        }
        .rankItem:nth-child(2) span{
          background-color: #ff6000;
          color: #fff;
          width: 30px;
          border-top-right-radius: 11px;
          border-bottom-right-radius: 11px;
          text-align: center;
        }
        .rankItem:nth-child(3) span{
          background-color: #ffb400;
          color: #fff;
          width: 30px;
          border-top-right-radius: 11px;
          border-bottom-right-radius: 11px;
          text-align: center;
        }
      }
    }
</style>