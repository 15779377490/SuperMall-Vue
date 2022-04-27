<template>
  <div id="home">
    <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
    <tab-control :title="['流行','新款','精选']"  class="tab-control"
                 @clicktab="clicktab"
                 ref="load1"
                 :class="{fixed:isfixed}"
                 v-show="isfixed"
    ></tab-control>
    <scroll class="content1"  ref="top" :probe-type="3" @scroll="contentscroll" :pull-up-load="true" @pullupdate="pullup">
    <HomeSwiper :banners="banners" @imageload="ImageLoad"></HomeSwiper>
    <HomeRecommedView :recommends="recommends"></HomeRecommedView>
    <home-feature></home-feature>
    <tab-control :title="['流行','新款','精选']"  class="tab-control"
    @clicktab="clicktab"
    ref="load2"
    :class="{fixed:isfixed}"
    ></tab-control>
    <good-list :goodslist="goods[currenttype].list" />
    </scroll>

    <back-top @click.native="clicktop" v-show="isshow"></back-top>

  </div>
</template>

<script>
  import NavBar from "components/common/navbar/NavBar";
  import HomeSwiper from "views/home/childHome/HomeSwiper";
  import HomeRecommedView from "views/home/childHome/HomeRecommedView";
  import HomeFeature from "views/home/childHome/HomeFeature";
  import {getHomeMultidata} from "network/home";
  import TabControl from "components/content/tabControl/tabControl";
  import {GetHomeControl} from "network/home";
  import GoodList from "components/content/goods/GoodList";
  import BackTop from "components/content/backtop/BackTop";
  import Scroll from "components/common/scroll/Scroll";


  export default {
    name: "Home",
    components:{
      BackTop,
      Scroll,
      TabControl,
      HomeRecommedView,
      NavBar,
      HomeSwiper,
      HomeFeature,
      GoodList,

    },
    data(){
      return{
        banners:[],
        recommends:[],
        goods:{
          'pop':{page:0,list:[]},
          'new':{page:0,list:[]},
          'sell':{page:0,list:[]}
        },
        currenttype:'pop',
        isshow:false,
        isfixed:false,
        offsetTop:0,
        saveY:0
      }

    },
    created() {
         this.getHomeMultidata()
         this.GetHomeControl('pop')
      this.GetHomeControl('new')
      this.GetHomeControl('sell')


    },
    activated() {
this.$refs.top.scrollTo(0,this.saveY,0)
    },
    deactivated() {
      this.saveY=this.$refs.top.scroll.y

    },


    methods:{
      clicktab(index){
        switch (index) {
            case 0:
              this.currenttype='pop'
            break
          case 1:
            this.currenttype='new'
            break
          case 2:
            this.currenttype='sell'
            break

        }
        this.$refs.load1.currentIndex=index;
        this.$refs.load2.currentIndex=index;

      },
      clicktop(){
        // console.log(this.$refs.top.scroll)
       this.$refs.top.scrollTo(0,0)
      },
      contentscroll(position){
      this.isshow=(-position.y)>1000
        if(this.isfixed=(-position.y)>this.offsetTop){

        }

      },
      pullup(){
        this.GetHomeControl(this.currenttype)

      },
      ImageLoad(){

         this.offsetTop=this.$refs.load2.$el.offsetTop


      },

      // 进行的网络请求
      getHomeMultidata(){
        getHomeMultidata().then(res=>{

          this.banners=res.data.banner.list
          this.recommends=res.data.recommend.list
        })
      },
      GetHomeControl(type){
         const page=this.goods[type].page+1
       GetHomeControl(type,page).then(res=>{

             this.goods[type].list.push(...res.data.list)
             this.goods[type].page+=1

         this.$refs.top.scroll.finishPullUp()
      })

      }

    }

  }
</script>

<style scoped>
  #home{
    padding-top: 44px;
    position: relative;
    height: 100vh;
  }
  .home-nav{
    background-color:var(--color-tint);
    color: #fff;
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    z-index: 9;
  }
  .tab-control{
    position: sticky;
    top: 44px;
    z-index: 9;
  }
  .content1{
   position: absolute;
    top: 44px;
    bottom: 49px;
    left: 0;
    right: 0;
    overflow: hidden;

  }
  .fixed{

  }
</style>
