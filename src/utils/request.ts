import { http } from './axios'

import * as T from './types'

const HomeApi: T.HomeFilterParams = {
  getHome(){
    return http.get("api/v1/home")
  },
  getMovieRank(){
    return http.get("api/v1/home/list", {type_name: 'movie'})
  },
  getAnimationDataRank(){
   return http.get("api/v1/home/list", {type_name: 'animation'})
  },
  getTvshowRank(){
    return http.get("api/v1/home/list", {type_name: 'tvshow'})
  },
  getShowRank(){
    return http.get("api/v1/home/list", {type_name: 'show'})
  } 
}

export default HomeApi