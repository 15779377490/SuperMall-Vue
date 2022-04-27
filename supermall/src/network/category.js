import {request} from "network/request/request"

export function getCategory() {
  return request({
    url:'/category'
  })
}
export function getSubcategory(maitKey) {
  return request({
    url: '/subcategory',
    params: {
      maitKey
    }
  })
}