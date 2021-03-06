<template>
  <div class="tobbra" @click="itmeClick">
    <div v-if="iteActive">
      <slot name="Imga"><img src="~assets/img/tabbar/shopping.png" alt=""/></slot>
    </div>
    <div v-else>
      <slot name="Imgb"><img src="~assets/img/tabbar/shopping_activ.png" alt=""/></slot>
    </div>
    <div :style="itmeColor" class="wz">
      <slot name="Div"><div>首页</div></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "TobBra",
  props: {
    path: String,
    activeColor: {
      type: String,
      default: "red",
    },
  },
  computed: {
    iteActive() {
      return this.$route.path.indexOf(this.path);
    },
    itmeColor() {
      return !this.iteActive ? { color: this.activeColor } : {};
    },
  },
  methods: {
    itmeClick() {
      this.$router.push(this.path);
    },
  },
};
</script>

<style>
.tobbra {
  flex: 1;
  text-align: center;
  height: 49px;
}
.tobbra img {
  background-repeat: no-repeat;
  width: 25px;
  height: 25px;
  vertical-align: middle;
}
.wz {
  font-size: 13px;
}
</style>