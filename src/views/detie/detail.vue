<template>
  <div key="detail" class="detabil">
    <detailnavbar ref="navbar" @navbarclick="navbarclick"></detailnavbar>
    <scroll class="cont" ref="scroll" @scrollemit="scrollemit">
      <template v-slot:contt>
        <detailswiper :swiper="swiper"></detailswiper>
        <detail-baec :goods="goods"></detail-baec>
        <detail-sjia :shop="shop"></detail-sjia>
        <detail-info
          :detailInfo="detailInfo"
          @imgaeLode="imgaeLode"
        ></detail-info>
        <param-info :paramInfo="paramInfo" ref="paramcont"></param-info>
        <comment-info :commentInfo="commentInfo" ref="comt"></comment-info>
        <goods-list :goods="recommend" ref="goodscomt"></goods-list>
      </template>
    </scroll>
    <detail-boutbar @shopping="shopping()" ref="boutbar"></detail-boutbar>
    <back-tope @click="backfn()" v-show="isShow"></back-tope>
    <gouwu :skuInfo="skuInfo" :xq1="xq1" ref="gouwu" id="gwc" @gba="gba" :desc="detailInfo.desc"></gouwu>
  </div>
</template>

<script>
import Detailnavbar from "./detailnavbar.vue";
import detailswiper from "./detailswiper";
import detailBaec from "./detailBaec";
import detailSjia from "./detiesjia";
import DetailInfo from "./detailInfo.vue";
import ParamInfo from "./paramInfo.vue";
import GoodsList from "components/content/goods/GoodsList.vue";
import CommentInfo from "./commentInfo.vue";

import Scroll from "components/common/scroll/scroll.vue";

import { getDetail } from "network/home.js";
import { Goods, Shop, GoodsParam, getRecommend } from "network/detail.js";

import { mixin } from "common/mixin.js";
import DetailBoutbar from "./detailBoutbar.vue";
import BackTope from "components/content/backTop/BackTope.vue";
import Gouwu from "./gouwu.vue";

export default {
  name: "Detail",
  mixins: [mixin],
  data() {
    return {
      swiper: [],
      goods: {},
      recommend: [],
      shop: {},
      detailInfo: {},
      paramInfo: {},
      commentInfo: {},
      huad: [],
      cuot: null,
      isShow: false,
      skuInfo: {},
      xq1: [],
      clientHeight: null,
      gwch: null,
      besc:null
    };
  },
  components: {
    Detailnavbar,
    detailswiper,
    detailBaec,
    detailSjia,
    Scroll,
    DetailInfo,
    ParamInfo,
    GoodsList,
    CommentInfo,
    DetailBoutbar,
    BackTope,
    Gouwu,
  },
  methods: {
    imgaeLode() {
      console.log("图片加载中，重新计算滑动距离");
      this.$refs.scroll.refresh();
      this.pusha();
    },
    pusha() {
      //获取到组件的位置
      this.huad = [];
      this.huad.push(0), this.huad.push(this.$refs.paramcont.$el.offsetTop);
      this.huad.push(this.$refs.comt.$el.offsetTop);
      this.huad.push(this.$refs.goodscomt.$el.offsetTop);
      this.huad.push(Number.MAX_VALUE);
    },
    navbarclick(index) {
      //点击tob组件滑动
      this.$refs.scroll.scrollTo(0, -this.huad[index] + 10, 200);
    },
    scrollemit(a) {
      //判断当前滑动距离，是否显示回到顶部按钮
      this.isShow = -a.y > 800;
      //标题和内容联动效果
      a = -a.y + 10;
      const lengtha = this.huad.length;
      for (let i = 0; i < lengtha - 1; i++) {
        if (a >= this.huad[i] && a <= this.huad[i + 1] && this.cuot !== i) {
          this.cuot = i;
          this.$refs.navbar.activindex = i;
        }
      }
    },
    backfn() {
      //点击回到顶部按钮，滑动到顶部
      this.$refs.scroll.scrollTo(0, 0);
    },
    animation(obj, distance, change) {
      //排他思想，为了避免多次调用定时器
      clearTimeout(obj.timer);
      //将定时器以对象赋值的方式添加给调用元素
      obj.timer = setInterval(function move() {
        //缓动特效公式
        var step = (distance - obj.offsetTop) / 10;
        //取整
        step = step > 0 ? Math.ceil(step) : Math.floor(step);
        //判断是否达到终点
        if (obj.offsetTop == distance) {
          //如果到达终点即结束定时器
          clearTimeout(obj.timer);
          //判断用户是否要添加终点效果
          if (change) {
            //达到终点后要执行的效果，效果在调用者参数里以回调函数执行
            change();
          }
        } else {
          obj.style.top = obj.offsetTop + step + "px";
        }
      }, 20);
    },
    shopping() {
      //点击加入购物车后弹出尺码
      console.log("加入购物车");
      this.$refs.gouwu.isShow = true;
      this.animation(this.$refs.gouwu.$el, this.clientHeight - this.gwch);
    },
    gba() {
      //点击购物车子组件的X是购物车关闭
      console.log("关闭");
      this.animation(this.$refs.gouwu.$el, this.clientHeight, () => {
        this.$refs.gouwu.isShow = false;
      });
    },
  },

  mounted() {
    //组件挂载完毕后重新计算滑动距离
    this.$refs.scroll.refresh();
    //得到窗口可视区的高度
    this.clientHeight = document.documentElement.clientHeight;
  },
  updated() {
    //得到购物车组件的高度
    this.gwch = this.$refs.gouwu.$el.offsetHeight;
  },
  watch: {
    //监听计算属性里的detail变化
    detail: function (a, b) {
      this.$refs.scroll.refresh();
      this.debounce(this.$refs.scroll.refresh, 50);
    },
  },
  computed: {
    detail() {
      //监听vuex里的detail数据变化
      return this.$store.state.detailImg;
    },
  },
  created() {
    getRecommend().then((res) => {
      this.recommend = res.data.list;
    });
    console.log("重新访问数据");
    //得到路由传过来的id，通过id获取到详情页的数据
    getDetail(this.$route.query.id).then((res) => {
      console.log(res);
      //得到轮播图的数据
      const data = res.result;
      this.swiper = data.itemInfo.topImages;
      this.goods = new Goods(
        data.itemInfo,
        data.columns,
        data.shopInfo.services
      );
      //店铺信息
      this.shop = new Shop(data.shopInfo);
      //详情数据
      this.detailInfo = data.detailInfo;
      //商品参数
      this.paramInfo = new GoodsParam(
        data.itemParams.info,
        data.itemParams.rule
      );
      //评论数据
      data.rate
        ? (this.commentInfo = data.rate.list)
        : console.log("无评论信息");
      //购物车
      this.skuInfo = data.skuInfo;
      this.xq1 = this.skuInfo.skus;
    });
  },
};
</script>

<style>
.detabil {
  width: 100%;
  z-index: 10;
  position: relative;
  background-color: #fff;
  height: 100vh;
}
</style>