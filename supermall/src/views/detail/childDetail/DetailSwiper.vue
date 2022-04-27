<template>

    <Swiper class="detailSwiper">
      <swiper-item v-for="item in TopImage"><img :src="item" alt=""/></swiper-item>
    </Swiper>

</template>

<script>
  import Swiper from "components/common/swiper/Swiper";
  import SwiperItem from "components/common/swiper/SwiperItem";
  export default {
    name: "DetailSwiper",
    components:{
      Swiper,
      SwiperItem
    },
    props:{
      TopImage:{
        type:Array,
        default:[]
      }
    }

  }
</script>

<style scoped>
.detailSwiper{
  height: 300px;
  overflow: hidden;
}
</style>