import {request} from './request'

export function grtHomeMultidata(){
  return  request({
    url:'/home/multidata'
  })
}