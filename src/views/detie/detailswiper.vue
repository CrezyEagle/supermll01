<template>
<!-- 详情轮播图 -->
    <swiper class="sw" v-if="swiper!==[]">
      <swiper-item  v-for="item in swiper" :key="item" >
          <img :src="item" alt="" class="tp">
      </swiper-item>
    </swiper>
</template>

<script>

import{Swiper, SwiperItem }from "components/common/swiper";

export default {
  components: { Swiper, SwiperItem },
  props: {
    swiper: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>

<style scoped>
.sw{
  height: 400px;
  overflow: hidden;
}
.tp{
  width: 100%;
}


</style>