import {request} from './request'

export function grtHomeMultidata(){
  return  request({
    url:'/home/multidata'
  })
}
export function getHomeGoods (type,page){
  return  request({
    url:'/home/data',
    params:{
      type,
      page
    }
  })
}
export function getDetail (iid){
  return  request({
    url:'/detail',
    params:{
      iid
    }
  })
}