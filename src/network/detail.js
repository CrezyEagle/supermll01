import {request} from './request'

export function getRecommend(){
  return request({
    url:'/recommend'
  })
}
export class Goods {
  constructor(itemInfo,columns,services){
    this.title=itemInfo.title
    this.desc=itemInfo.desc
    this.newPrice=itemInfo.price
    this.oldPrice=itemInfo.oldPrice
    this.discount=itemInfo.discountDesc
    this.columns=columns
    this.realPrice=itemInfo.lowNowPrice
    this.services=services
  }
}
export class GoodsParam{
  constructor(info,rule){
    this.image=info.images? info.images[0]:'';
    this.info=info.set
    this.sizes=rule.tables
  }
}
export class Shop{
  constructor(shopInfo){
    this.logo=shopInfo.shopLogo
    this.name=shopInfo.name
    this.fans=shopInfo.cFans
    this.sells=shopInfo.cSells
    this.score=shopInfo.score
    this.goodsCount=shopInfo.cGoods
  }
}