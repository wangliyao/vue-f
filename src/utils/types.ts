export interface TyepName {
  typename?: string,
  id?: string | number,
  page?: string | number,
  q?: string,
}

export interface Home {
  hot_rank_by_week: object,
  vod_type_vod: object[]
}
export interface FilterParmas {
  getDataHeader: (params: TyepName)=> Promise<any>,
  getDataBody: (params: TyepName)=> Promise<any>,
  getVod: (params: TyepName)=> Promise<any>,
  getVodRecommend: (params: TyepName)=> Promise<any>,
  getSearch: (params: TyepName) => Promise<any>,
}

export interface HomeFilterParams{
  getHome: ()=> Promise<any>,
  getMovieRank: ()=> Promise<any>,
  getTvshowRank: ()=> Promise<any>,
  getShowRank: ()=> Promise<any>,
  getAnimationDataRank: ()=> Promise<any>,
}