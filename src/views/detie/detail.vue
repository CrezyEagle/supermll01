<template>
  <div key="detail" class="detabil">
    <detailnavbar></detailnavbar>
    <scroll class="cont" ref="scroll">
      <template v-slot:contt>
        <detailswiper :swiper="swiper"></detailswiper>
        <detail-baec :goods="goods"></detail-baec>
        <detail-sjia :shop="shop"></detail-sjia>
        <detail-info :detailInfo="detailInfo" @imgaeLode="imgaeLode"></detail-info>
        <param-info :paramInfo='paramInfo'></param-info>
        <goods-list :goods="recommend"></goods-list>
      </template>
    </scroll>
  </div>
</template>

<script>
import Detailnavbar from "./detailnavbar.vue";
import detailswiper from "./detailswiper";
import detailBaec from "./detailBaec";
import detailSjia from "./detiesjia";
import DetailInfo from './detailInfo.vue';
import ParamInfo from './paramInfo.vue'

import Scroll from "components/common/scroll/scroll.vue";

import { getDetail } from "network/home.js";
import { Goods, Shop,GoodsParam,getRecommend } from "network/detail.js";
import GoodsList from 'components/content/goods/GoodsList.vue';


export default {
  name: "Detail",
  data() {
    return {
      swiper: [],
      goods: {},
      recommend:[],
      shop: {},
      detailInfo:{},
      paramInfo:{}
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
    GoodsList
  },
  methods:{
    imgaeLode(){
      console.log("图片加载中，重新计算滑动距离");
      this.$refs.scroll.refresh()
    }
  },

  mounted(){
    this.$refs.scroll.refresh()
  },
  created() {
    getRecommend().then((res)=>{
      this.recommend=res.data.list
    })
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
      this.shop = new Shop(data.shopInfo);
      this.detailInfo=data.detailInfo;
      this.paramInfo=new GoodsParam(data.itemParams.info,data.itemParams.rule)
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
.cont{
height: calc(100% - 44px);
}
</style>