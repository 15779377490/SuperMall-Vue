<template>
  <div class="HomeRecommedView">
    <div  v-for="item in recommends" class="recommend">
    <a :href="item.link">
      <img :src="item.image" alt=""/>
      <div>{{item.title}}</div>
    </a>
  </div>
  </div>
</template>

<script>

  export default {
    name: "HomeRecommedView",
    props:{
      recommends:{
        type:Array,
        default() {
          return [];
        }
      }
    }
  }
</script>

<style scoped>
  .HomeRecommedView{
    display: flex;
    width: 100%;
    font-size: 12px;
    text-align: center;
    padding: 10px 0 20px;
    border-bottom: 8px solid #eee;
  }
.recommend{
  flex: 1;

}
  .recommend img{
    width: 65px;
    height: 65px;
    margin-bottom: 10px;
  }
</style>