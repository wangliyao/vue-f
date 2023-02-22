import { defineStore } from 'pinia'
import CategroyApi from '@/utils/category_request'

interface CategroyData{
  vod_id: number,
  vod_name: string,
  vod_pic: string,
  vod_remarks: string,
  vod_score: string,
  vod_area: string,
  vod_year: string,
}

interface Pages{
  current_page: number,
  next_page?: any,
  total_pages: number,
  total_count: number
}

interface CategoryHeadeData {
  type_name: string,
  type_extend: {
    area: string,
    class: string,
    director: string,
    lang: string,
    star: string,
    state: string,
    version: string,
    year: string
  },
}

interface categoryData {
  name: string,
  child: string[]
}

interface Recommend {
  vod_id: string,
  vod_remarks: string,
  vod_area: string,
  vod_year: string,
  vod_score: string,
  vod_pic: string
}

interface VodDetailData{
  vod_id: number,
  vod_name: string,
  vod_class: string,
  vod_pic: string,
  vod_actor: string[],
  vod_director: string,
  vod_blurb: string,
  vod_area: string,
  vod_play_from: string,
  play_list: string[],
}

export const useGlobalStore = defineStore('global', {
  state: () =>{
    return{
      topBarIndex: 0,
      pathname: 'movie',
      categoryDataBody: [] as CategroyData[],
      categoryPage: {} as Pages,
      categoryHeadData: [] as categoryData[],
      vodDeatil: {} as VodDetailData,
      vodRecommend: [] as Recommend[],
    }
  },
  actions: {
    hoverTopBar(index: number){
      this.topBarIndex = index
    },
    changePathName(pathname: string){
      this.pathname = pathname
    },
    async getVodDetail(id: number | string){
      let data = await CategroyApi.getVod({id: id})
      this.vodDeatil = data
    },
    async getVodData(page: number){
      let data = await CategroyApi.getDataBody({typename: this.pathname, page: page})
      this.categoryDataBody = data.data
      this.categoryPage = data.pages
    },
    async getHeaderData(){
      const data:CategoryHeadeData = await CategroyApi.getDataHeader({typename: this.pathname})
      let area = data.type_extend.area.split(",")
      let class_t = data.type_extend.class.split(",").slice(0,23)
      let year = data.type_extend.year.split(",")
      const categoryData =[
        {
          name: '分类',
          child: class_t
        },
        {
          name: '地区',
          child: area
        },
        {
          name: '年代',
          child: year
        }
        ]
      this.categoryHeadData = categoryData
    },
    async getVodRecommendData(id: number | string){
      let data = await CategroyApi.getVodRecommend({id: id})
      this.vodRecommend = data.data
    },
    async getSearchData(q: string | undefined, page: number){
      let data = await CategroyApi.getSearch({q: q, page: page})
      this.categoryDataBody = data.data
      this.categoryPage = data.pages
    }
  }
})