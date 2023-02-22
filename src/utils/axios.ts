import axios, { AxiosResponse, AxiosRequestConfig } from 'axios';

const service = axios.create();

service.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    return config;
  },
  (error: any) => {
      Promise.reject(error);
  }
);
service.interceptors.response.use(
  (res: AxiosResponse) => {
    return res;
  },
  (error: any) => {
    return Promise.reject(error);
 }
);

interface ResTyp<T>{
  code: number,
  data?: T,
  msg: string,
  err?: string
}

interface Http{
  get<T> (url: string, params?: unknown): Promise<ResTyp<T>>
  post<T> (url: string, params?: unknown): Promise<ResTyp<T>>
  upload<T> (url: string, params?: unknown): Promise<ResTyp<T>>
  download(url: string): void
}

const http: Http = {
  get(url, params){
    return new Promise((resolve, reject) => {
      axios
        .get(url, {params})
        .then((res) => {
          resolve(res.data)
        })
        .catch((err) => {
          reject(err.data)
        })
    })
  },
  post(url, params){
    return new Promise((resolve, reject) => {
      axios
       .post(url, JSON.stringify(params))
       .then((res) => {
        resolve(res.data)
        })
      .catch((err) => {
        reject(err.data)
      })
    })
  },
  upload(url, file){
    return new Promise((resolve, reject) => {
      axios
       .post(url, file, {
        headers: { 'Content-Type': 'multipart/form-data' },
       })
       .then((res)=>{
        resolve(res.data)
       })
       .catch((err) => {
        reject(err.data)
      })
    })
  },
  download(url){
    const iframe = document.createElement('iframe')
    iframe.style.display = 'none'
    iframe.src = url
    iframe.onload = function(){
      document.body.removeChild(iframe)
    }
    document.body.appendChild(iframe)
  }
}

export { http }
