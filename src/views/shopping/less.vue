<template>
  <div class="lessa">
    <chckebutton  :index="index" ></chckebutton>
    <div class="nm"><img :src="item.img" alt="" /></div>
    <div class="hxi">
      <div class="title">{{ item.title }}</div>
      <div class="desc">{{ item.desc }}</div>
      <div class="cm">{{ item.cm }}</div>
      <div class="mangl">￥{{ Number(item.mangl) * item.amount }}</div>
      <div class="amount">x{{ item.amount }}</div>
    </div>
  </div>
</template>
<script>
import chckebutton from "components/content/chckebutton/chckebutton.vue";
export default {
  components: { chckebutton },
  data() {
    return {
      mangl: 0,
    };
  },
  props: {
    item: {
      type: Object,
      default() {
        return [];
      },
    },
    index: {
      type: Number,
      default() {
        return 0;
      },
    },

  },
 
};
</script>

<style scoped>
.lessa {
  background-color: #fff;
  margin-bottom: 5px;
  position: relative;
  display: flex;
  height: 100px;
  border-radius: 10px;
  padding: 10px 10px 10px 0px;
  border-bottom: 3px solid #ecebec;
}
.nm {
  height: 100%;
  margin-left: 30px;
  margin-right: 10px;
}
img {
  border-radius: 10px;
  height: 100%;
  width: 83px;
}
.title {
  overflow: hidden;
  text-overflow: ellipsis;
  color: #727272;
  white-space: nowrap;
}
.hxi {
  position: relative;
  overflow: hidden;
}
.cm {
  margin-top: 15px;
  font-size: 14px;
  color: #b0aeb0;
}
.mangl {
  position: absolute;
  bottom: 0;
  color: #ff9a66;
}
.amount {
  position: absolute;
  right: 0px;
  bottom: 0px;
}
.desc {
  overflow: hidden;
  text-overflow: ellipsis;
  color: #b0aeb0;
  margin-top: 5px;
  font-size: 14px;
  white-space: nowrap;
}
</style>