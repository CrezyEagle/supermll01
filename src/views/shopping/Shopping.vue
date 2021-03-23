<template>
  <div key="Shoppig" class="shop">
    <nav-bar class="navb"
      ><template v-slot:center
        ><div>购物车({{ jis }})</div></template
      ></nav-bar
    >
    <scroll class="scroll" ref="scroll">
         <template v-slot:contt>
      <less
      v-for="(item, index) in arr"
      :item="item"
      :index="index"
     class="less"
      :key="index"
    ></less>
         </template>
    </scroll>
    <jies ref="jie"></jies>
  </div>
</template>

<script>
import NavBar from "components/common/navBar/NavBar.vue";
import Less from "./less.vue";
import Jies from "./jies.vue";
import Scroll from '../../components/common/scroll/scroll.vue';
export default {
  data() {
    return {
      arr: [],
      zj: 0,
      // sum1:null,
      quanXuan: false,
    };
  },
  components: {
    NavBar,
    Less,
    Jies,
    Scroll,
  },
  computed: {
    jis() {
      //显示商品
      return this.arr.length || 0;
    },
    zja() {
      // 计算总价
      for (let i = 0; i < this.arr.length; i++) {
        this.zj += Number(this.arr[i].mangl) * this.arr[i].amount;
      }
    },
  },

  methods: {
    quanxuan() {
      if (this.quanXuan) {
        this.quanXuan = false;
      } else {
        this.quanXuan = true;
      }
    },
  },

  activated() {
    this.arr = this.$store.state.sper;
    console.log("购物车活跃");
    this.zj = 0;
    this.zja;
    if(this.$store.state.hei){
     this.$store.commit("yxzg2")
     this.$refs.jie.isShow=false
     this.$store.commit("quanx2")
      this.$store.commit("heig",false)
    }
    this.$refs.scroll.refresh()
  },
};
</script>

<style scoped>
.navb {
  background-color: pink;
  color: #fff;
}
.shop{
  height: 100vh;
}
.scroll{
  bottom: 104px;
  padding: 0px 10px;
  background-color:#F0F0F0 ;
}
</style>