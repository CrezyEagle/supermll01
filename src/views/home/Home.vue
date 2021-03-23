<template>
  <div id="Home">
    <nav-bar class="home-nav" backgroundColro="var(--color--pink)"
      ><template v-slot:center><div>购物街</div></template></nav-bar
    >
       <tab-control
          :tabcon="['流行', '新款', '精选']"
          @itemi="fn"
          ref="tabCon3"
          v-show="tabShow"
        :class="{tabc:tabShow}"
        ></tab-control>
    <scroll
      class="scroll"
      ref="scroll"
      @scrollemit="scrollfn"
      @pullingUp="loadMore"
      :pullUpLoad="true"
    >
      <template v-slot:contt>
        <home-swiper :banner1="banner" @imgLoad="imgLoad"></home-swiper>
        <recommend-view :recommend="recommend"></recommend-view>
        <feature-view></feature-view>
        <tab-control
          :tabcon="['流行', '新款', '精选']"
          @itemi="fn"
          ref="tabCon2"
        
        ></tab-control>

        <goods-list :goods="chuanz"></goods-list>
      </template>
    </scroll>
    <back-tope @click="backfn()" v-show="isShow"></back-tope>
  </div>
</template>

<script>
//网络封装组件
import { grtHomeMultidata, getHomeGoods } from "network/home.js";
import { request2 } from "network/request";

//子组件
import HomeSwiper from "./childComps/HomeSwiper.vue";
import RecommendView from "./childComps/RecommendView.vue";
import FeatureView from "./childComps/FeatureView.vue";

//公共组件
import TabControl from "components/content/tabControl/TabControl.vue";
import NavBar from "components/common/navBar/NavBar";
import GoodsList from "components/content/goods/GoodsList.vue";
import Scroll from "components/common/scroll/scroll.vue";
import BackTope from "components/content/backTop/BackTope.vue";
export default {
  data() {
    return {
      banner: {},
      recommend: {},
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] },
      },
      crte: 0,
      isShow: false,
      tabShow:false,
      timer: null,
      tabcon:0,
      deactivatedTop:0
    };
  },
  components: {
    HomeSwiper,
    RecommendView,
    FeatureView,
    TabControl,
    NavBar,
    GoodsList,
    Scroll,
    BackTope,
  },
  watch: {
    
    imgload: function (a, b) {
      this.$refs.scroll.refresh()
      this.debounce(this.$refs.scroll.refresh, 50);
    },
  },
  activated() {
    //打开组件自动滑动到所记录的位置
    this.$refs.scroll.scrollTo(0,this.deactivatedTop)
    this.$refs.scroll.refresh()
  },
 deactivated() {
   //离开组件，记录下当前滑动到的位置
  //  console.log(this.$refs.scroll.bscroll.y);
   this.deactivatedTop=this.$refs.scroll.bscroll.y
 },
  created() {
    //网络请求
    this.grtHomeMultidata();
    this.getHomeGoods("pop");
    this.getHomeGoods("new");
    this.getHomeGoods("sell");
  },
  methods: {
    //网络封装
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
      });
    },
    //goods-list传值
    fn(index) {
      this.$refs.tabCon2.activColor=index
      this.$refs.tabCon3.activColor=index
      this.crte = index;
    },
    //通过ref父访问子调用scroll组件里的scrollTo方法
    backfn() {
      this.$refs.scroll.scrollTo(0, 0);
    },
    //通过自定义事件得到scroll传过来的坐标
    scrollfn(a) {
      //坐标大于800显示
      this.isShow = -a.y > 800;
      this.tabShow=-a.y>this.tabcon
    },
    loadMore() {
      console.log(this.chuanz2(this.crte)+"追加数据");
      this.getHomeGoods(this.chuanz2(this.crte));
      //下拉加载更多时，给当前的goods追加数据
    },
    //防抖函数
    debounce(fun, delay) {
      if (this.timer) clearTimeout(this.timer);
      this.timer = setTimeout(() => {
        console.log("---");
        fun.call(this);
      }, delay);
    },
    imgLoad(){
      this.tabcon=this.$refs.tabCon2.$el.offsetTop
    }
  },
  computed: {
    
    imgload() {
      return this.$store.state.imgload;
    },
    //goods-list传值
    chuanz() {
      if (this.crte == 0) {
        return this.goods.pop.list;
      } else if (this.crte == 1) {
        return this.goods.new.list;
      } else if (this.crte == 2) {
        return this.goods.sell.list;
      }
    },
    chuanz2() {
      return function (index) {
        if (index == 0) {
          return "pop";
        } else if (index == 1) {
          return "new";
        } else if (index == 2) {
          return "sell";
        }
      };
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
.tabc{
  position: absolute;
  z-index: 11;
  top: 44px;
}
#Home{
  height: 100vh;
}
.scroll{
  height: 100vm;
}
</style>