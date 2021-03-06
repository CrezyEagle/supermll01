<template>
<!-- 导航栏 -->
  <div id="detail-nav-bar">
    <nav-bar>
      <template v-slot:left>
        <div class="detailimg" @click="imgClick()">
          <img src="~assets/img/common/back.svg" alt="" />
        </div>
      </template>
      <template v-slot:center>
        <div
          class="aa"
          v-for="(itme, index) in detailbar"
          :key="itme"
          :class="{ activ: activindex == index }"
          @click="activcolor(index)"
        >
          {{ itme }}
        </div>
      </template>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from "components/common/navBar/NavBar.vue";

export default {
  data() {
    return {
      detailbar: ["商品", "参数", "评论", "推荐"],
      activindex: 0,
    };
  },
  components: {
    NavBar,
  },

  methods: {
    activcolor(index) {
      this.activindex = index;
    },
    imgClick(){
      console.log(1111);
      this.$router.go(-1)
    }
  },
};
</script>

<style scoped>
.aa {
  flex: 1;
}
.detailimg{
  padding-top: 5px;
}
.activ {
  color: pink;
}
</style>