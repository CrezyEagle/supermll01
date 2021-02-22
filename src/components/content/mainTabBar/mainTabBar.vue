<template>
  <tob>
    <tob-bar path="/home">
      <template v-slot:Imga>
        <img src="~assets/img/tabbar/home.png" alt="" />
      </template>
      <template v-slot:Imgb>
        <img src="~assets/img/tabbar/home_activ.png" alt="" />
      </template>
      <template v-slot:Div>
        <div><div>首页</div></div>
      </template>
    </tob-bar>
    <tob-bar path="/classify">
      <template v-slot:Imga>
        <img src="~assets/img/tabbar/classify.png" alt="" />
      </template>
      <template v-slot:Imgb>
        <img src="~assets/img/tabbar/classify_activ.png" alt="" />
      </template>
      <template v-slot:Div>
        <div>分类</div>
      </template>
    </tob-bar>
    <tob-bar path="/shopping">
      <template v-slot:Imga>
        <img src="~assets/img/tabbar/shopping.png" alt="" />
      </template>
      <template v-slot:Imgb>
        <img src="~assets/img/tabbar/shopping_activ.png" alt="" />
      </template>
      <template v-slot:Div>
        <div>购物车</div>
      </template>
    </tob-bar>
    <tob-bar path="/files">
      <template v-slot:Imga>
        <img src="../../../assets/img/tabbar/Files.png" alt="" />
      </template>
      <template v-slot:Imgb>
        <img src="../../../assets/img/tabbar/Files_activ.png" alt="" />
      </template>
      <template v-slot:Div>
        <div>我的</div>
      </template>
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