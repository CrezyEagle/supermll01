<template>
  <div id="nav">
    <keep-alive><router-view /></keep-alive>
    
    <main-tab-bar></main-tab-bar>
  </div>
</template>
<script>
import mainTabBar from "components/content/mainTabbar/mainTabBar.vue";
export default {
  components: {
    mainTabBar,
  },
};
</script>
<style>
@import "assets/css/base.css";
</style>
