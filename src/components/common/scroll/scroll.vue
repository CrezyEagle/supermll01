<template>
  <div ref="scroll" class="scrollc">
    <div>
      <slot name="contt"></slot>
    </div>
  </div>
</template>

<script>
import Bs from "better-scroll";
export default {
  name: "scroll",
  data() {
    return {
      bscroll: null,
    };
  },
  props: {
    pullUpLoad: {
      type: Boolean,
      default: false,
    },
  },

  mounted() {
    this.bscroll = new Bs(this.$refs.scroll, {
      usetransition: false,
      pullUpLoad: this.pullUpLoad,
      probeType: 0,
      click: true,
    });
   
    this.bscroll.on("pullingUp", () => {
      this.$emit("pullingUp");
       //多次运行上面的内容
    this.bscroll.finishPullUp();

    });
    //将当前的坐标传值给父组件
    this.bscroll.on("scroll", (a) => {
      this.$emit("scrollemit", a);
    });
  },
  methods: {
    scrollTo(x, y, time = 500) {
      this.bscroll.scrollTo(x, y, time);
    },
    refresh(){
      this.bscroll.refresh()
    }
  },
};
</script>

<style scoped>
.scrollc {
  position: absolute;
  right: 0;
  left: 0;
  top: 44px;
  bottom: 49px;
  overflow: hidden;
}
</style>