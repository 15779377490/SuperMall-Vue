<template>

  <div class="CartItemList">
    <check-button :ischecked="listItem.ischecked" @click.native="getcheck"></check-button>
   <img :src="listItem.image" alt=""/>
    <div class="goods">
      <div class="title">
      <p class="title1">{{listItem.title}}</p>
      <p class="desc">{{listItem.desc}}</p>
      </div>
      <div class="price">
        <div class="left">${{listItem.lowPrice}}</div>
        <div class="right">X{{listItem.count}}</div>

    </div>

  </div>
  </div>
</template>

<script>
  import CheckButton from "@/components/content/checkbutton/CheckButton";
  export default {
    name: "CartItemList",
    props:{
      listItem:{
       type:Object,
       default:[]
      }
    },
    components:{
      CheckButton
    },
    methods:{
     getcheck(){
       this.listItem.ischecked=!this.listItem.ischecked
     }
    }
  }
</script>

<style scoped>
.CartItemList img{
  width: 90px;
  height: 110px;
  border-radius: 10px;

}
.CartItemList{
  height: calc(100% - 93px);
}
  .CartItemList{
    height:130px;
    display: flex;
    flex: 1;
  border-bottom: 2px solid #a3a3a5;
    align-items: center;
  }
.CartItemList .goods{

  margin-left: 20px;
height: 100%;
}
.CartItemList .title{
  text-align: center;
  width: 250px;
}
.CartItemList .goods .title1{
  font-size: 18px;
  margin-top: 20px;
}
.CartItemList .goods .desc{
  font-size: 12px;
  margin-top: 10px;
}
  .CartItemList p{
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }
  .price{
    margin-top: 40px;
    display: flex;

  }
  .price div{
    flex: 1;
  }
  .price .left{
    color: #f13e3a;
  }
.price .right{
  text-align: right;
}
</style>