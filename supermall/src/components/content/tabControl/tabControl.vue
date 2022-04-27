<template>
  <div class="tab-control">
    <div v-for="(item,index) in title" class="tab-control-item" :class="{active:index===currentIndex}"
         @click="GettabControl(index)" >
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>

  export default {
    name: "tabControl",
    props:{
      title:{
        type:Array,
        default(){
          return []
        }
      }

    },
    data(){
      return{
        currentIndex:0
      }
    },
    methods:{
      GettabControl(index){
        this.currentIndex=index;
        this.$emit('clicktab',index)
      }

    }
  }
</script>

<style scoped>
.tab-control{
  display: flex;
  text-align: center;
  font-size: 15px;
  height: 44px;
  line-height: 44px;
  background-color: white;
}
  .tab-control .tab-control-item{
    flex: 1;
  }
  .tab-control-item span{
    padding: 5px;
  }
  .active{
    color: var(--color-tint);

  }
  .active span{
    border-bottom: 2px solid var(--color-tint);
  }
</style>