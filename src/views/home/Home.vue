<template>
  <div id="Home">
    <nav-bar class="home-nav" backgroundColro="var(--color--pink)"
      ><template v-slot:center><div>购物街</div></template></nav-bar
    >
    <home-swiper :banner1="banner"></home-swiper>
    <recommend-view :recommend="recommend"></recommend-view>
    <feature-view></feature-view>
    <tab-control :tabcon="['流行', '新款', '精选']" @itemi="fn"></tab-control>
    <goods-list :goods="chuanz"></goods-list>
    <ul>
      <li>111</li>
      <li>111</li>
      <li>111</li>
      <li>111</li>
      <li>111</li>
    </ul>
  </div>
</template>

<script>
//网络封装组件
import { grtHomeMultidata, getHomeGoods } from "network/home.js";

//子组件
import HomeSwiper from "./childComps/HomeSwiper.vue";
import RecommendView from "./childComps/RecommendView.vue";
import FeatureView from "./childComps/FeatureView.vue";

//公共组件
import TabControl from "components/content/tabControl/TabControl.vue";
import NavBar from "components/common/navBar/NavBar";
import GoodsList from "../../components/content/goods/GoodsList.vue";
export default {
  data() {
    return {
      banner: [],
      recommend: [],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] },
      },
      crte: 0,
    };
  },
  components: {
    NavBar,
    HomeSwiper,
    RecommendView,
    FeatureView,
    TabControl,
    GoodsList,
  },
  created() {
    
    this.grtHomeMultidata();
    this.getHomeGoods("pop");
    this.getHomeGoods("new");
    this.getHomeGoods("sell");
  },
  methods: {
    //网络请求
    grtHomeMultidata() {
      grtHomeMultidata().then((res) => {
        this.banner = res.data.banner;
        this.recommend = res.data.recommend;
      });
    },
    getHomeGoods(type) {
      //传入的type是字符串不能直接用必须[type]
      var page = this.goods[type].page + 1;
      getHomeGoods(type, page).then((res) => {
        this.goods[type].page = res.data.page;
        this.goods[type].list.push(...res.data.list);
        console.log(this.goods[type]);
      });
    },
    
    //传值
    fn(index) {
      this.crte = index;
      console.log(thiscrte);
    },
  },
  computed: {
    chuanz() {
      if (this.crte == 0) {
        return this.goods.pop.list;
      } else if (this.crte == 1) {
        return this.goods.new.list;
      } else if (this.crte == 2) {
        return this.goods.sell.list;
      }
    },
  },
};
</script>

<style>
.home-nav {
  background-color: var(--color--pink);
  color: var(--color--baise);
  position: sticky;
  top: 0;
  z-index: 9;
}
</style>