<template>
  <div class="tobbra" @click="itmeClick">
 <div v-if="iteActive"><slot name="item-icon"></slot></div>
    <div v-else><slot name="item-icon-active"></slot></div>
    <div :style="itmeColor" class="wz"><slot name="item-icon"><div>首页</div></slot></div>
  </div>
</template>

<script>
export default {
name:'TobBra',
props:{
  path:String,
  activeColor:{
    type:String,
    default:"red"
  }
},
computed:{
    iteActive(){
    return this.$route.path.indexOf(this.path)
  },
   itmeColor(){
    return !this.iteActive ?{color:this.activeColor}:{}
  },
 
 
},
methods: {
 
  itmeClick(){
    this.$router.replace(this.path)
  },
  
},
}
</script>

<style>
.tobbra{
  flex: 1;
  text-align: center;
  height: 49px;
}
.tobbra img{
background-repeat: no-repeat;
width:25px;
height:25px;
vertical-align: middle;
}
.wz {
  font-size: 13px;

}
</style>