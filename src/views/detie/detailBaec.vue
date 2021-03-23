<template>
<!-- 商品介绍 -->
  <div class="besc" v-if="Object.keys(goods).length !==0">
    <div class="title">{{ goods.title }}</div>
    <div class="qian">
      <span class="newPrice">{{ goods.newPrice }}</span>
      <span class="oldPrice"
        ><s>{{ goods.oldPrice }}</s></span
      >
      <span class="discount">{{ goods.discount }}</span>
    </div>
    <div class="xiaol">
      <span class="columns">{{ goods.columns[0] }}</span>
      <span>{{ goods.columns[1] }}</span>
      <span class="services">{{ goods.services[goods.services.length-1].name }}</span>
    </div>
    <div class="fuwu">
      <span v-for="index in goods.services.length-1" :key="index" class="flexa">
        <img :src="goods.services[index-1].icon" alt="" />
        <span>{{ goods.services[index-1].name }}</span>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    goods: {
      type: Object,
      default() {
        return {};
      },
    },
  },
};
</script>

<style scoped>
.besc{
  padding-bottom: 20px;
  border-bottom: 5px solid #F1F1F1;
}
.title {
  margin-top: 15px;
  font-weight: 600;
  margin-left: 8px;
  margin-bottom: 14px;
}
.newPrice {
  font-size: 23px;
  color: #ed8ca0;
}
.oldPrice {
  margin: 0px 7px;
  line-height: 30px;
  color: #abaaac;
  font-size: 8px;
}
.qian{
  display: flex;
  margin-bottom: 20px;
  padding-left: 8px;
}
.discount {
  display: inline-block;
  font-size: 6px;
padding: 2px;
  background-color: #fb5879;
  border-radius: 8px;
  color: #fff;
  height: 18px;
  line-height: 15px;

}
.xiaol{
  display: flex;

  justify-content: space-between;
  font-size: 8px;
  height: 20px;
  padding-bottom: 6pxp;
  margin: 0px 8px;
  border-bottom: 1px #c7c5c8 solid;
  color: #abaaac;
}
.columns{
  margin-left: 5px;
}
.services{
  margin-right: 5px;
}
.fuwu{
  margin:  17px 0px;
  display: flex;
  padding: 0px 8px;
  justify-content: space-between;
  font-size: 13px;
}
.flexa{
  display: flex;
}
.fuwu img{
  height: 15px;
  
}
</style>