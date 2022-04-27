<template>
  <div class="ContentItem">
    <div class="Wrapper">
    <div class="ImageWrap">
      <a :href="listitem.link">
        <img :src="listitem.image">
      </a>
    </div>
    <div class="TitleWrap">{{listitem.title}}</div>
  </div>
  </div>
</template>

<script>
  export default {
    name: "CategoryContentItem",
    props:{
      listitem: {
        type:Object,
        return:{
          default:{}
        }
      }
    }
  }
</script>

<style scoped>

  .ContentItem .Wrapper{
    width: 100px;
    height: 120px;
    /*border: 1px solid red;*/
    /*flex-direction: row;*/
    text-align: center;
  }
.ContentItem .Wrapper .ImageWrap img{
  width: 70px;
  height: 70px;
}
  .TitleWrap{
    margin-top: 20px;
  }
</style>