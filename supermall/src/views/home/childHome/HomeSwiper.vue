<template>
  <swiper>
    <swiper-item v-for="item in banners">
      <a :href="item.link">
        <img :src="item.image" alt="" @load="ImageLoad"/>
      </a>

    </swiper-item>
  </swiper>
</template>

<script>

  import Swiper from "components/common/swiper/Swiper";
  import SwiperItem from "components/common/swiper/SwiperItem";
  export default {
    name: "HomeSwiper",
    props:{
      banners:{
        type:Array,
        default(){
          return []
        }
      }
    },
    components:{
      Swiper,
      SwiperItem
    },
    data(){
      return{
        isload:false
      }

    },
    methods:{
      ImageLoad(){
if(!this.isload){
  this.$emit('imageload')
  this.isload=true
}

      },
    }
  }
</script>

<style scoped>

</style>