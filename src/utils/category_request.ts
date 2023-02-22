import { http } from './axios'

import * as T from './types'

const CategroyApi: T.FilterParmas = {
  getDataHeader(params){
    return http.get('api/v1/categories', params)
  },
  getDataBody(params){
   return http.get('api/v1/categories/list', params)
  },
  getVod(params){
    return http.get('api/v1/mac_vods/' + params.id)
  },
  getVodRecommend(params){
    return http.get('api/v1/mac_vods/' + params.id + '/recommend')
  },
  getSearch(params){
    return http.get('api/v1/categories/search', params)
  } 
}

export default CategroyApi