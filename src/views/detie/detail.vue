<template>
  <div key="detail" class="detabil">
    <detailnavbar></detailnavbar>
    <detailswiper :swiper="swiper"></detailswiper>
  </div>
</template>

<script>
import Detailnavbar from "./detailnavbar.vue";
import detailswiper from "./detailswiper";

import {getDetail} from 'network/home.js'
export default {
  name:"Detail",
  data() {
    return {
      swiper:[]
    }
  },
  components: {
    Detailnavbar,
    detailswiper,
  },
  created() {
    //得到路由传过来的id，通过id获取到详情页的数据
    getDetail(this.$route.query.id).then((res) => {
      console.log(res);
      //得到轮播图的数据
      this.swiper=res.result.itemInfo.topImages
    });
  },
};
</script>

<style>
.detabil {
  width: 100%;
}
</style>