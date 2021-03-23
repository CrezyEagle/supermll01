<template>
<!-- 商家信息 -->
  <div class="detailsjia">
    <div class="sjia">
      <img class="imga" :src="shop.logo" alt="" /><span class="name">{{
        shop.name
      }}</span>
    </div>
    <div class="xq">
      <div class="xq2">
        <div>
          <div>{{ sells }}</div>
          <div>总数量</div>
        </div>
        <div>
          <div>{{ shop.goodsCount }}</div>
          <div>全部宝贝</div>
        </div>
      </div>
      <div class="xian"></div>
      <div class="miaos">
        <div v-for="item in shop.score" :key="item">
          <span>{{ item.name }}</span>
          <span :class="{ activ: !item.isBetter, activred: item.isBetter }">{{
            item.score
          }}</span>
          <span
            class="yans"
            :class="{ activ2: !item.isBetter, activred2: item.isBetter }"
            >{{ dj(item.isBetter) }}</span
          >
        </div>
      </div>
    </div>
    <div class="shop-bt">
      <div>进店逛逛</div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    sells() {
      return this.shop.sells > 10000
        ? Math.ceil(this.shop.sells / 1000) / 10 + "万"
        : this.shop.sells;
    },
    dj() {
      return function (aa) {
        return aa ? "高" : "低";
      };
    },
  },
  props: {
    shop: {
      type: Object,
      default() {
        return {};
      },
    },
  },
};
</script>

<style scoped>
.activ {
  color: #7ebd36;
}
.activred {
  color: red;
}
.activred2 {
  background-color: red;
}
.activ2 {
  background-color: #7ebd36;
}
.sjia {
  margin-top: 20px;
  display: flex;
}
.sjia .imga {
  height: 40px;
  width: 40px;
  background-color: pink;
  border-radius: 50%;
  margin-left: 10px;
  border: solid 1px #c7c5c8;
}
.name {
  line-height: 40px;
  font-size: 10px;
  margin-left: 5px;
  color: #b8b7b8;
}
.xq {
  display: flex;
  margin-top: 30px;
  justify-content: space-between;
}
.xian {
  margin-top: 10px;
  height: 60px;
  width: 2px;
  background-color: #c7c5c8;
}
.xq2 {
  margin-top: 15px;
  font-weight: 550;
  display: flex;
  text-align: center;
  justify-content: space-around;
}
.xq2 div {
  margin-left: 10px;
  margin-bottom: 10px;
}
.miaos {
  margin-right: 20px;
}
.miaos div {
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
}
.miaos div span {
  margin-right: 10px;
}
.yans {
  color: #fff;
}
.shop-bt{
  margin-top: 10px;
  display: flex;
  justify-content: center;
}
.shop-bt div{
  background-color: #F1F5FB;
  border-radius: 10px;
  padding: 10px 50px;
}
</style>