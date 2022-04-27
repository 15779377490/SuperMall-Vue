<template>
  <div class="GoodList">
    <good-list-item  v-for="item in goodslist" :goods-item="item"/>
  </div>
</template>

<script>
  import GoodListItem from "components/content/goods/GoodListItem";
  export default {
    name: "GoodList",
    components:{
      GoodListItem
    },
    props:{
      goodslist:{
        type:Array,
        default(){
        return []
        }
      }
    }
  }
</script>

<style scoped>
.GoodList {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
</style>