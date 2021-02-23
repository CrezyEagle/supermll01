<template>
  <div id="Home">
    <nav-bar class="home-nav" backgroundColro="var(--color--pink)"><template v-slot:center><div>购物街</div></template></nav-bar>
    <home-swiper :banner1="banner"></home-swiper>
    <recommend-view :recommend="recommend"></recommend-view>
    <feature-view></feature-view>
    <tab-control :tabcon="['流行','新款','精选']"></tab-control>
    <ul>
      <li>111</li>
      <li>111</li>
      <li>111</li>
      <li>111</li>
      <li>111</li>
      <li>111</li>
      <li>111</li>
      <li>111</li>
      <li>111</li>
      <li>111</li>
      <li>111</li>
<li>111</li>
<li>111</li>
      <li>111</li>
      <li>111</li>
      <li>111</li>
      <li>111</li>
      <li>111</li>
      <li>111</li>
      <li>111</li>
      <li>111</li>
      <li>111</li>
      <li>111</li>
      <li>111</li>
      <li>111</li>
      <li>111</li>
      <li>111</li>
      <li>111</li>
      <li>111</li>
      <li>111</li>
      <li>111</li>
      <li>111</li>
      <li>111</li>
      <li>111</li>
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
import {grtHomeMultidata} from 'network/home.js'

//子组件
import HomeSwiper from './childComps/HomeSwiper.vue'
import RecommendView from './childComps/RecommendView.vue'
import FeatureView from './childComps/FeatureView.vue'

//公共组件
import TabControl from 'components/content/tabControl/TabControl.vue'
import NavBar from 'components/common/navBar/NavBar'
export default {
  data() {
    return {
      banner:[],
      recommend:[]
    }
  },
components:{
  NavBar,
  HomeSwiper,
RecommendView,
FeatureView,
TabControl


}
,created() {
  grtHomeMultidata().then(res=>{
   this.banner= res.data.banner
    this.recommend= res.data.recommend
  })
},
}
</script>

<style>

.home-nav{
  background-color: var(--color--pink);
  color: var(--color--baise);
  position: sticky;
  top: 0;
  z-index: 9;
}
</style>