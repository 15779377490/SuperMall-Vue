<template>

  <div class="CartBottom">
    <div class="select">
      <check-button :ischecked="isselectall" @click.native="clickselect()"></check-button>
      <span>全选</span>
    </div>
   <div class="allprice">
     <span>合计:{{totalPrice}}</span>
   </div>
   <div class="calc">去计算({{totalLength}})</div>
  </div>
</template>

<script>
  import CheckButton from "@/components/content/checkbutton/CheckButton";
  import {mapGetters} from "vuex"
  export default {
    name: "CartBottomTap",
    components:{
      CheckButton
    },
    computed:{
      ...mapGetters(['getcartlist']),
      totalPrice(){
        return '$'+this.getcartlist.filter(item=>{
          return item.ischecked
        }).reduce((preValue,item)=>{
            return preValue+item.lowPrice*item.count
        },0).toFixed(2)
      },
      totalLength(){
        return this.getcartlist.filter(item=> item.ischecked).length
      },
      isselectall(){
        if(this.getcartlist.length === 0) return false
        return !this.getcartlist.find(item=>!item.ischecked)
      }
    },
    methods:{
    clickselect(){
    if(this.isselectall){
      this.getcartlist.forEach(item=>item.ischecked=false)
    }else{
      this.getcartlist.forEach(item=>item.ischecked=true)
    }

    }
    }
  }
</script>

<style scoped>

.CartBottom{
  height: 40px;
display: flex;
  position: relative;
  bottom: 40px;
  align-items: center;
  background-color: #eee;
}
  .CartBottom .calc{
    background-color: red;
    color: white;
    width: 80px;
    height: 40px;
    line-height: 40px;
  }
  .CartBottom .allprice{
    flex: 1;
    color: red;
  }
  .CartBottom .select{
    width: 80px;
   display: flex;
    font-size: 14px;
  }

</style>