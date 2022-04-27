<template>
  <div class="CategoryListItem">
   <category-content-item  v-for="item in CategoryListItem" :listitem="item"></category-content-item>
  </div>
</template>

<script>
  import CategoryContentItem from "@/views/category/childCategory/CategoryContentItem";
  export default {
    name: "CategoryContent",
    props:{
    CategoryListItem:{
      type:Array,
      default:[]
    }
    },
    components:{
      CategoryContentItem
    }
  }
</script>

<style scoped>
  .CategoryListItem{
    display: flex;

    flex-direction: row;
    flex-wrap: wrap;
    flex: 1;
  }
</style>