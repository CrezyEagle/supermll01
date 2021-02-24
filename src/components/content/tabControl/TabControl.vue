<template>
  <div class="TabControl">
    <div v-for="(item,index) in tabcon" :key="index" :class="{activ:index===activColor}" @click='fn(index)'>
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activColor:0
    }
  },
  methods:{
    fn(index){
      this.activColor=index
      this.$emit("itemi",index)

    }
  },
props:{
  tabcon:{
    
        type: Array,
      default() {
        return [];
      },
  }
}
}
</script>

<style>
.TabControl{
  position: sticky;
  top: 44px;
  display: flex;
  width: 100%;
  text-align: center;
  height: 40px;
  line-height: 40px;
   color: #b8b7b7;
   background-color: #fff;
   z-index: 9;
}
.TabControl div{
  flex: 1;
}
.TabControl span{
 
  padding:3px;
}
.activ{
  color: var(--color--pink);
}
.activ span{
  
  border-bottom: 4px var(--color--pink) solid;
}
</style>