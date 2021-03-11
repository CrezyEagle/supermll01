<template>
  <div v-if="Object.keys(commentInfo).length !==0" class="comm">
    <div class="tob">
      <div>用户评价</div>
      <div>更多</div>
    </div>
    <div class="xq">
      <img :src="commentInfo[0].user.avatar" alt="" />
      <h5>{{ commentInfo[0].user.uname }}</h5>
    </div>
    <div class="szi">{{ commentInfo[0].content }}</div>
    <div class="sj">
      <span>{{ sja(commentInfo[0].created)}}</span
      ><span>{{ commentInfo[0].style }}</span>
    </div>
    <div class="plimg">
      <img
        v-for="item in commentInfo[0].images"
        :key="item"
        :src="item"
        alt=""
      />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      sj:''
    }
  },
  props: {
    commentInfo: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  computed: {
    sja() {
      return function (a) {

        let sj=new Date(a*1000)
          return sj.getFullYear() +
          "-" +
          sj.getMonth() +
          "-" +
          sj.getDate() +
          " " +
          sj.getHours() +
          ":" +
          sj.getMinutes()
       
      };
    },
  },
};
</script>

<style scoped>
.comm {
  padding: 0px 15px;
  padding-bottom: 15px;
  margin-bottom: 10px;
  border-bottom: 5px solid #f1f1f1;
}
.tob {
  margin-top: 20px;
  padding-bottom: 15px;
  border-bottom: 0.5px solid rgb(209, 209, 209);
  display: flex;
  justify-content: space-between;
}
.xq {
  padding-top: 10px;
  height: 40px;
  display: flex;
  margin-bottom: 10px;
}
.xq img {
  height: 100%;
  border-radius: 50%;
}
.xq h5 {
  margin-left: 10px;
  line-height: 0px;
}
.szi {
  font-size: 13px;
  color: #858585;
  margin-bottom: 10px;
}
.sj {
  font-size: 13px;
  color: #b2b2b2;
  margin-bottom: 10px;
}
.sj span {
  margin-right: 8px;
}
.plimg {
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 10px;
}
.plimg img {
  height: 60px;
  margin-right: 3px;
  width: 60px;
}
</style>