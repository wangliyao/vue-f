<template>
    <div class="list-container">
       <ul :class="listClass">
        <li v-for="item in data" :key="item.vod_id" class="list-item">
          <a :href="'/'+item.vod_id" class="thumbnail">
            <img :src="item.vod_pic" referrerpolicy="no-referrer" alt="图片已失效">
            <div class="contentNote">
              <span class="note-span">
                {{ item.vod_remarks }}
              </span>
            </div>
            <div class="contentCountireName">
               {{ sliceStr(item.vod_area || '') }}
            </div>
            <div class="contentreleaseDate">
               {{ item.vod_year }}
            </div>
          </a>
          <h4>{{ item.vod_name }}</h4>

          <div class="contentRate">
              {{ item.vod_score }}
            </div>
        </li>
       </ul>
    </div>
</template>

<script lang="ts">
  import { ref, watch } from 'vue'
  export default {
    props: ['data', 'maxListCount'],
    setup(props){
      interface ListContent {
        vod_id: number,
        vod_pic: string,
        type_name: string,
        vod_name: string,
        vod_score: string,
        link?: string,
        vod_area?: string,
        vod_year?: string,
        vod_remarks?: string
      }
      const maxListCount = ref(props.maxListCount)
      const listClass = ref('list-count-4')
      if(maxListCount.value === '6'){
        listClass.value = 'list-count-6'
      }

      const sliceStr = (str: string): string => {
        return str.split(',')[0]
      }
      return { maxListCount, listClass, sliceStr }
    }
  }
 
</script>

<style lang="scss" scoped>
   .list-container{
     width: 100%;
     display: flex;
     .list-count-4{
      display: flex;
      // flex-direction: row;
      flex-direction: row;
      flex-wrap: wrap;
      width: 100%;
      .list-item{
        width: 100%;
        display: flex;
        justify-items: center;
        margin: 0 5px;
        width: 208px;
        flex-direction: column;
        text-align: center;
        .thumbnail{
          position: relative;
          text-align: center;
          img{
            width: 208px;
            height: 290px;
          }
          .contentNote{
            position: absolute;
            bottom: 15px;
            right: 0;
            left: 0;
            color: #fff;
            font-size: 13px;
            .note-span{
              background:rgba(16, 16, 16, 0.3);
            }
          }
        }
        h4{
            margin: 0;
            padding: 0px 3px;
            font-weight: 200;
            font-size: 13px;
          }

          .contentRate{
            color: rgb(231, 174, 174);
            font-size: 10px;
            font-weight: 600;
          }
      }
     }
     .list-count-6{
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      width: 100%;
      padding: 20px 0px;
      .list-item{
        width: 100%;
        display: flex;
        justify-items: center;
        margin: 0 5px;
        width: 195px;
        max-width: 208px;
        flex-direction: column;
        text-align: center;
        .thumbnail{
          position: relative;
          text-align: center;
          img{
            width: 100%;
            height: 290px;
          }          
          .contentNote{
            position: absolute;
            bottom: 15px;
            right: 0;
            left: 0;
            color: #fff;
            font-size: 13px;
            .note-span{
              background:rgba(16, 16, 16, 0.3);
            }
          }
          .contentCountireName{
            position: absolute;
            color: #fff;
            background: orange;
            font-size: 14px;
            top: 0px;
            right: 0px;
          }
          .contentreleaseDate{
            position: absolute;
            color: #fff;
            background:orangered;
            font-size: 14px;
            top: 0px;
            right: 29px;
          }
        }
        h4{
            margin: 0;
            padding: 0px 3px;
            font-weight: 200;
            font-size: 13px;
          }
        .contentRate{
          color: rgb(231, 174, 174);
          font-size: 10px;
          font-weight: 600;
        }

      }
     }
   }
</style>