<template>
<div class="CartItem">
    <cart-item-list v-for="item in getcartlist" :list-item="item"></cart-item-list>
</div>
</template>

<script>
  import {mapGetters} from 'vuex';
import CartItemList from "@/views/cart/childCart/CartItemList";
  export default {
    name: "CartItem",
    computed:{
      ...mapGetters(['getcartlist'])
    },
    components:{
      CartItemList
    }
  }
</script>

<style scoped>

</style>