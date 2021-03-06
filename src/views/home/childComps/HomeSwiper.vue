<template>
  <div>
    <swiper>
      <swiper-item v-for="item in banner1.list" :key="item">
        <a :href="item.link">
          <img :src="item.image" alt="" @load="imgLoad" />
        </a>
      </swiper-item>
    </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperItem } from "components/common/swiper/index";
export default {
  data() {
    return {
      jiel:true
    }
  },
  props: {
    banner1: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  methods:{
    imgLoad(){
      if(this.jiel){
      this.$emit("imgLoad",true)
            this.jiel=false
      }
  }
  },

  components: {
    Swiper,
    SwiperItem,
  },
};
</script>

<style>
</style>