<template>
  <nav-bar class="nav">
    <div slot="center">详情页</div>
  </nav-bar>
</template>

<script>
  import NavBar from "@/components/common/navbar/NavBar";
  export default {
    name: "CategoryNav",
    components:{
      NavBar
    }
  }
</script>

<style scoped>
.nav{
  background-color: var(--color-tint);
  color: #ffffff;
}
</style>