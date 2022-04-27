<template>
  <nav-bar class="DetailNav">
    <div slot="left" class="iconfont icon-xiangzuojiantou" @click="ClickBack"></div>
    <div slot="center" class="DetailCenter">
      <div v-for="(item,index) in lists" @click="clicktab(index)" :class="{active:currentIndex===index}">{{item}}</div>
    </div>
  </nav-bar>
</template>

<script>
  import NavBar from "components/common/navbar/NavBar";


  export default {
    name: "DetailNav",
    components:{
      NavBar
    },
    data(){
     return{
       lists:['商品','参数','评论','推荐'],
       currentIndex:0
     }
    },
    methods:{
      clicktab(index){
        this.currentIndex=index
         this.$emit('clickindex',index)
      },
      ClickBack(){
       this.$router.back()
      }
    }

  }
</script>

<style scoped>
  @import "//at.alicdn.com/t/font_3255473_k667glrv30q.css";

  .DetailNav .DetailCenter{
    display: flex;
    justify-content:space-around;
    text-align: center;
  }
  .active{
    color: var(--color-tint);
  }
</style>