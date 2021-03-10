<template>
  <div  v-if="Object.keys(detailInfo).length !==0" class="detailInfo">
    <div class="desc">
      <div class="xian1">
        <div class="dian1"></div>
      </div>
      <div>
        {{detailInfo.desc}}
      </div>
      <div class="xian2">
        <div class="dian2"></div>
      </div>
    </div>
     <div class="detailkey">{{detailInfo.detailImage[0].key}}</div>
     <div class="detailimg">
       <img v-for="(item,index) in detailInfo.detailImage[0].list" :key="index" :src="item" alt="" @load="imgaeLoad()">
     </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      counter:0,
      imgaglength:0
    }
  },
  props: {
    detailInfo: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  watch:{
    detailInfo(){
    this.imgaglength=this.detailInfo.detailImage[0].list.length
    }

  },
  methods:{
    imgaeLoad(){
      this.counter++
      if(this.counter==this.imgaglength||this.imgaglength%this.counter==1){
        this.$emit("imgaeLode")
      }
    }
  }
};
</script>

<style scoped>
.detailInfo{
  margin-top: 30px;
  padding-top: 30px;
  border-top: 5px solid #F1F1F1;
}
.xian1{
  position: relative;
  margin-bottom: 20px;
  width: 25%;
  border-bottom: 1px solid #535353;
}.desc{
  padding: 0px 20px;
  font-size: 13px;
  color: rgb(134, 134, 134);
}
.detailkey{
  margin-top: 15px;
  margin-left: 20px;
  font-weight: 500;
}
.xian2{
  position: relative;
  margin-left: 75%;
   margin-top: 20px;
  width: 25%;
  border-bottom: 1px solid #535353;
}
.dian1{
  position: absolute;
  border-radius: 50%;
  left: -4px;
  top: -4px;
  height: 5px;
  width: 5px;
  background-color: #000;
}
.dian2{
  border-radius: 50%;
  position: absolute;
  right:  -4px;
  top: -4px;
  height: 5px;
  width: 5px;
  background-color: #000;
}
img{
  width: 100%;
}
.detailimg{
  margin-top: 15px;
}
</style>