import {request} from "network/request/request";

export function GetDetail(iid){
  return request({
    url:'/detail',
    params:{
      iid
    }
  })


}
export function GetRecommend(){
  return request({
    url:'/recommend'
  })


}
export class Goods {
  constructor(itemInfo, columns, services) {
    this.title = itemInfo.title;
    this.desc = itemInfo.desc;
    this.newPrice = itemInfo.price;
    this.oldPrice = itemInfo.oldPrice;
    this.discount = itemInfo.discountDesc;
    this.columns = columns;
    this.services = services;
    this.nowPrice = itemInfo.highNowPrice;
    this.desc=itemInfo.desc
    this.lowPrice=itemInfo.lowPrice
  }
}

export class Shop {
  constructor(shopInfo) {
    this.logo = shopInfo.shopLogo;
    this.name = shopInfo.name;
    this.fans = shopInfo.cFans;
    this.sells = shopInfo.cSells;
    this.score = shopInfo.score;
    this.goodsCount = shopInfo.cGoods
  }
}

export class Size{
  constructor(itemParams) {
    this.set=itemParams.info.set;
    this.tables=itemParams.rule.tables;
    this.image=itemParams.info.image?itemParams.info.image[0]:""
  }
}