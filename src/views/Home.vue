<template>
  <div class="content">
    <ItemList :title="titleObj.top" :data="hotRakeByWeek.hot_rank_by_week"/>
    <ItemContentVue :title="titleObj.topRank" :data="hotRakeByWeek.vod_type_vod"/>
  </div>
  <div class="content">
    <ItemContentVue :title="titleObj.hotMoive" :data="movieRankByWeek.vod_type_vod "/>
    <ItemList :title="titleObj.hotMoiveRank" :data="movieRankByWeek.hot_rank_by_week"/>
  </div>
  <div class="content">
    <ItemContentVue :title="titleObj.hotDrama"  :data="tvshowRankRankByWeek.vod_type_vod"/>
    <ItemList :title="titleObj.hotDramaRank" :data="tvshowRankRankByWeek.hot_rank_by_week"/>
  </div>
  <div class="content">
    <ItemContentVue :title="titleObj.hotShow" :data="showRankRankByWeek.vod_type_vod"/>
    <ItemList :title="titleObj.hotShowRank" :data="showRankRankByWeek.hot_rank_by_week"/>
  </div>
  <div class="content">
    <ItemContentVue :title="titleObj.hotAnimation" :data="animationRankByWeek.vod_type_vod"/>
    <ItemList :title="titleObj.hotAnimationRank" :data="animationRankByWeek.hot_rank_by_week"/>
  </div>
</template>

<script lang="ts" setup>
import {ref} from "vue";
import HomeApi from "@/utils/request";
import ItemList from '@/components/ItemList.vue'
import ItemContentVue from '@/components/ItemContent.vue';

const titleObj = ref({
  topRank: '本周排行榜',
  top: '正在上映',
  hotMoive: '热门电影',
  hotMoiveRank: '电影排行榜',
  hotDrama: '热门电视剧',
  hotDramaRank: '电视剧排行榜',
  hotShow: '热门综艺',
  hotShowRank: '综艺排行榜',
  hotAnimation: '热门动漫',
  hotAnimationRank: '动漫排行榜'
})

let hotRakeByWeek = await HomeApi.getHome()
let movieRankByWeek = await HomeApi.getMovieRank()
let animationRankByWeek = await HomeApi.getAnimationDataRank()
let tvshowRankRankByWeek = await HomeApi.getTvshowRank()
let showRankRankByWeek =  await HomeApi.getShowRank() 
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
    display: flex;
    justify-content: space-between;
    height: 750px;
    margin-bottom: 30px;

  }
</style>