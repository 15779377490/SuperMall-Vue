<template>
  <div class="CategoryTab">
    <div v-for="(item,index) in CategoryList"
         class="CategoryItem"
         :class="{activetab:currentIndex === index}"
         @click="clicknav(index)">
      {{item.title}}
    </div>
  </div>
</template>

<script>
  export default {
    name: "CategoryTab",
    props:{
      CategoryList:{
        type:Array,
        default:[]
      }

    },
    data(){
      return{
        currentIndex:0
      }
    },
    methods:{
      clicknav(index){
        this.currentIndex=index
        this.$emit('clickIndex',index)
      }
    }
  }
</script>

<style scoped>
  .CategoryTab{
    width: 100px;
  }
.CategoryTab .CategoryItem{
  padding: 15px 10px;
  border-bottom: 1px solid rgba(0,0,.1,.1);
  width: 100px;
  text-align: center;
}
.activetab{
    color: var(--color-tint);
  border-left:3px solid var(--color-tint) ;
  }
</style>