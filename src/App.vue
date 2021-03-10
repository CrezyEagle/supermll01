<template>
  <div id="nav">
    <router-view v-slot="{ Component }">
      <keep-alive exclude="Detail">
        <component :is="Component" />
      </keep-alive >
    </router-view>

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
