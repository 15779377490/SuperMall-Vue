import {
  ADD_COUNT,
  ADD_CART
} from './mutations-type'
export default {
  addCart(context,payload){
    return new Promise((resolve,reject)=>{
      let product=context.state.cartList.find(item=>item.iid===payload.iid)
      if(product){
        // product.count+=1
        context.commit(ADD_COUNT,product)
        resolve("当前的商品数量加1")
      }else {
        payload.count=1
        // state.cartList.push(payload)
        context.commit(ADD_CART,payload)
        resolve("添加了新商品")
      }
    })

  }
}