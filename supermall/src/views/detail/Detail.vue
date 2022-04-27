<template>
  <div class="detail">
  <detail-nav class="detail-nav" @clickindex="clickindex" ref="nav"></detail-nav>
    <detail-bottom-bar @addToCart="addToCart"></detail-bottom-bar>
    <scroll class="content" :pullUpLoad="true" ref="scroll" :probe-type="3" @scroll="scrollbottom">
    <detail-swiper :top-image="TopImage" ></detail-swiper>
    <detail-base-info :goods="goods"></detail-base-info>
    <detail-shop-info :shop="shop"></detail-shop-info>
      <detail-godds-info :detailInfo="detailInfo"></detail-godds-info>
      <detail-params-info :parasminfo="parasminfo" ref="params"></detail-params-info>
      <detail-commend :commend="commend" ref="commend"></detail-commend>
      <good-list :goodslist="recommendList" ref="recommend"></good-list>
      <toast></toast>
    </scroll>
  </div>
</template>

<script>

import DetailNav from "@/views/detail/childDetail/DetailNav";
import {GetDetail,GetRecommend} from "@/network/detail";
import DetailSwiper from "@/views/detail/childDetail/DetailSwiper";
import DetailBaseInfo from "@/views/detail/childDetail/DetailBaseInfo";
import {Goods} from "@/network/detail";
import DetailShopInfo from "@/views/detail/childDetail/DetailShopInfo";
import {Shop,Size} from "@/network/detail";
import Scroll from "@/components/common/scroll/Scroll";
import DetailGoddsInfo from "@/views/detail/childDetail/DetailGoddsInfo";
import DetailParamsInfo from "@/views/detail/childDetail/DetailParamsInfo";
import DetailCommend from "@/views/detail/childDetail/DetailCommend";
import GoodList from "@/components/content/goods/GoodList";
import DetailBottomBar from "@/views/detail/childDetail/DetailBottomBar";
import Toast from "@/components/common/toast/Toast";
export default {
    name: "Detail",
    components:{
      DetailParamsInfo,
      Scroll,
      DetailBaseInfo,
      DetailSwiper,
     DetailNav,
      DetailShopInfo,
      DetailGoddsInfo,
      DetailCommend,
      GoodList,
      DetailBottomBar,
      Toast
      },
    data(){
      return{
        iid:null,
        TopImage:[],
        goods: {},
        shop:{},
        detailInfo:{},
        parasminfo:{},
        commend:{},
        recommendList:[],
        navtop:[],
        currentIndex:0,
        message:'哈哈哈'
      }

    },

    created() {
      this.iid=this.$route.params.iid
      GetDetail(this.iid).then(res=>{
        const data=res.result
      this.TopImage=data.itemInfo.topImages
        this.goods=new Goods(data.itemInfo,data.columns,data.shopInfo.services)
        this.shop=new Shop(data.shopInfo)
        this.detailInfo=data.detailInfo
        this.parasminfo=new Size(data.itemParams)
        this.commend=data.rate.list[0]



      })
      GetRecommend().then(res=>{
       this.recommendList=res.data.list
      })




    },

mounted() {

      const timeout=setTimeout(()=>{
        this.navtop.push(0)
        this.navtop.push(this.$refs.params.$el.offsetTop)
        this.navtop.push(this.$refs.commend.$el.offsetTop)
        this.navtop.push(this.$refs.recommend.$el.offsetTop)

      },2000)
},



  methods:{
      clickindex(index){
        this.$refs.scroll.scrollTo(0,-(this.navtop[index]))
      },
    scrollbottom(position){
        const positionY=-position.y
      let length=this.navtop.length
      for(let i=0;i<length;i++){

if(this.currentIndex!==i&&((i<length-1&&positionY>this.navtop[i]&&positionY<this.navtop[i+1])||(i===length-1&&positionY>this.navtop[i]))){
   this.currentIndex=i
this.$refs.nav.currentIndex=this.currentIndex
}
      }

    },
    addToCart(){
      const product={}
      product.image=this.TopImage[0]
      product.title=this.goods.title
      product.desc=this.goods.desc
      product.lowPrice=this.goods.lowPrice
      product.iid=this.iid
      // this.addToCart('product').then()
this.$store.dispatch('addCart',product).then(res=>{
  console.log(this.$toast)
       this.$toast.showMessage(res,2000)
})
    }


  }


}
</script>

<style scoped>
  .detail{
    position: relative;
    height: 100vh;
    background-color: white;
    z-index: 9;
  }
 .detail .detail-nav{
   position: relative;
    z-index: 9;
   background-color: white;
  }
.content{
 height:calc(100% - 107px);

}
</style>