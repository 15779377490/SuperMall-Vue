<template>
 <div class="cart">
   <nav-bar class="navbar">
     <div slot="center">购物车({{length}})</div>
   </nav-bar>

   <scroll class="content" :pullUpLoad="true" :probe-type="3">
   <cart-item></cart-item>
   </scroll>
   <cart-bottom-tap ></cart-bottom-tap>
 </div>
</template>

<script>
  import NavBar from "@/components/common/navbar/NavBar";
  import {mapGetters} from 'vuex';
  import CartItem from "@/views/cart/childCart/CartItem";
  import CartItemList from "@/views/cart/childCart/CartItemList";
  import Scroll from "@/components/common/scroll/Scroll";
  import CartBottomTap from "@/views/cart/childCart/CartBottomTap";
  export default {
    name: "Cart",
    components:{
      NavBar,
      CartItem,
      CartItemList,
      Scroll,
      CartBottomTap
    },
    computed:{
      ...mapGetters({
        length:'cartlength'
      })
    }
  }
</script>

<style scoped>
  .navbar{
    color: white;
    background-color: var(--color-tint);
  }
.cart{
 height: 100vh;
}
  .content{
    height:calc(100% - 93px);
    overflow: hidden;

  }
</style>
