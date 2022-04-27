import {request} from "network/request/request";
export function getHomeMultidata(){
  return request({
   url:'/home/multidata'
  })
}

export function GetHomeControl(type,page){
  return request({
    url:'/home/data',
    params:{
      type,
      page
    }
  })

// export function GetGoodsContent(){
//   return request({
//     url:''
//   })


}