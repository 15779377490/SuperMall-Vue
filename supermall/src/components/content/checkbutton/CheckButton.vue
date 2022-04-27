<template>
  <div class="CheckButton" :class="{check:ischecked}">
    <img src="~assets/img/cart/tick.svg" alt="" >
  </div>
</template>

<script>

  export default {
    name: "CheckButton",
    props:{
      ischecked:{
        type:Boolean,
        default:false
      }
    }
  }
</script>

<style scoped>
  .CheckButton{
    width: 20px;
    height: 20px;
    margin:0 5px;
    border-radius: 50%;
    background-color: #a3a3a5;
    text-align: center;
  }

  .check{
    background-color: red;

  }
</style>