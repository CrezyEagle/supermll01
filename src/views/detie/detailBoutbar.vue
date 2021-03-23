<template>
  <div class="detail-boutbar">
    <!-- 购物车 -->
    <div class="deleft">
     <div><img src="~assets/img/detail/客服.png" alt=""><div>客服</div></div>
     <div><img src="~assets/img/detail/店铺.png" alt=""><div>店铺</div></div>
     <div><img src="~assets/img/detail/收藏.png" alt=""><div>收藏</div></div>
    </div>
    <div class="re">
      <div class="gw" @click="jiaru()">加入购物车</div>
    <div class="gm">购买</div>
    </div>
  </div>
</template>

<script>
export default {
  methods:{
    jiaru(){
      this.$emit("shopping")
    }
  }
};
</script>

<style scoped>
.detail-boutbar {
  height: 49px;
  position: fixed;
  display: flex;
  bottom: 0px;
  width: 100%;
  justify-content: space-around;
}
.deleft{
  flex: 1;
  height: 100%;
  display: flex;
  justify-content: space-around;
}
img{
  height: 29px;
}
.re{

  flex: 1;
  display: flex;
  line-height: 49px;
  text-align: center;
  justify-content: space-around;
}
.gw{
  flex: 1;
  background-color: #FFE718;
}
.gm{
  flex: 1;
  color: #fff;
  background-color: #FF669A;
}
</style>