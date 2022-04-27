<template>
  <div class="goodlistitem" @click="ClickGoods">
<img :src="showImage">
    <div class="listitem">
      <p>{{goodsItem.title}}</p>
      <span class="price">{{goodsItem.price}}</span>
      <span class="iconfont icon-shoucang"></span><span class="collection">{{goodsItem.cfav}}</span>
    </div>
  </div>
</template>

<script>

  export default {
    name: "GoodListItem",
    props:{
      goodsItem:{
        type:Object,
        default(){
          return {}
        }
      }
    },
    methods:{
      ClickGoods(){
        this.$router.push('/detail/'+this.goodsItem.iid)
      }

    },
    computed:{
      showImage(){
        return this.goodsItem.image || this.goodsItem.show.img
      }

    }
  }
</script>

<style scoped>
 @import "//at.alicdn.com/t/font_3255473_4fn7et1rc8k.css";
.goodlistitem{
  width: 45%;
font-size: 12px;
}
.goodlistitem img{
  width: 100%;
border-radius: 10px;

  }
.listitem p{
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}
.listitem{
text-align: center;
}
.listitem .price{
    color: var(--color-tint);
    margin:0 5px 20px;
  }
</style>