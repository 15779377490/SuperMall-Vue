import {
    ADD_COUNT,
    ADD_CART
} from './mutations-type'
export default {
  [ADD_COUNT](state,payload){
    payload.count++
  },
  [ADD_CART](state,payload){
    payload.ischecked=true
    state.cartList.push(payload)
  }
}