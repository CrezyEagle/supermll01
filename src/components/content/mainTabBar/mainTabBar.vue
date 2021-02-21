<template>
  <tob>
    <tob-bar path="/home" >
      <img slot="Imga"  src="~assets/img/tabbar/home.png" alt="" >
     <img  slot="Imgb" src="~assets/img/tabbar/home_activ.png" alt="" >
      <div slot="Div"><div>首页</div></div>
    </tob-bar>
    <tob-bar path="/classify">
     <img slot="item-icon" src="~assets/img/tabbar/classify.png" alt="">
      <img slot="item-icon-active" src="~assets/img/tabbar/classify_activ.png" alt="">
      <div slot="item-text">分类</div>
    </tob-bar>
    <tob-bar path="/shopping" >
      <img slot="Imga" src="~assets/img/tabbar/shopping.png" alt="" />
      <img slot="Imgb" src="~assets/img/tabbar/shopping_activ.png" alt="" />
      <div slot="Div">购物车</div>
    </tob-bar>
    <tob-bar path="/files" >
      <img slot="Imga" src="../../../assets/img/tabbar/Files.png" alt="" />
      <img slot="Imgb" src="../../../assets/img/tabbar/Files_activ.png" alt="" />
      <div slot="Div">我的</div>
    </tob-bar>
  </tob>
</template>

<script>
import TobBar from "components/common/tabBar/TobBar.vue";
import tob from "components/common/tabBar/Tob";
export default {
  components: {
    TobBar,
    tob,
  },
};
</script>

<style>

</style>