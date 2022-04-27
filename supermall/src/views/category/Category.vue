<template>
  <div class="Category">
    <category-nav></category-nav>
    <div class="wrap">
<scroll class="content" :probe-type="3" :pull-up-load="true">
    <category-tab :category-list="CategoryList" @clickIndex="clickIndex"></category-tab>
</scroll>
      <scroll class="content1" :probe-type="3" :pull-up-load="true">
    <category-content :category-list-item="CategoryListItem"></category-content>
      </scroll>
  </div>
  </div>
</template>

<script>
  import {getCategory,getSubcategory} from "@/network/category";
  import CategoryNav from "@/views/category/childCategory/CategoryNav";
  import CartBottomTap from "@/views/cart/childCart/CartBottomTap";
  import CategoryTab from "@/views/category/childCategory/CategoryTab";
  import Scroll from "@/components/common/scroll/Scroll";
import CategoryContent from "@/views/category/childCategory/CategoryContent";
  export default {
    name: "Category",
    mounted() {
      this.getCategory()

    },
    data(){
      return{
        CategoryList:[],
        CategoryListItem:[]
      }
    },
    methods:{
      clickIndex(index){
        this.getSubcategory(index)
      },
    // 进行的网络请求
      getCategory(){
        getCategory().then(res=>{
    this.CategoryList=res.data.category.list
           this.getSubcategory(0)
        })

      },
      getSubcategory(index){
        const maiKey=this.CategoryList[index].maitKey
        getSubcategory(maiKey).then(res=>{
          this.CategoryListItem=res.data.list
        })
      }

    },
    components:{
      CategoryTab,
    CategoryNav,
      CartBottomTap,
      Scroll,
      CategoryContent
    }

  }
</script>

<style scoped>
  .Category{
    height: 100vh;
width: 100vw;
  }
  .wrap{
    display: flex;
    flex: 1;
    height: 100vh;
  }
.content{
  height: calc(100% - 93px);
  overflow: hidden;
  width: 100px;
}
.content1{
    height: calc(100% - 93px);
    overflow: hidden;
    width: 200px;
  }
</style>
