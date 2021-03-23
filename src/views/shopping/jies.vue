<template>
  <div class="jiesa">
    <div class="chcke" :class="{ actv: isShow }" @click="fn()">
      <img v-show="isShow" src="~assets/img/common/对.png" alt="" />
    </div>
    <div class="quanx">全选</div>
    <div class="res">
      <div >合计：</div>
      <div class="hj">￥{{hj}}</div>
      <div class="jies">结算{{jies}}</div>
    </div>
  </div>
</template>

<script>
import chckebutton from "components/content/chckebutton/chckebutton.vue";
export default {
  data() {
    return {
      isShow: false,
      jies:0,
      hj:0
    };
  },
  components: { chckebutton },
  methods: {
    fn() {
      if (!this.isShow) {
        this.isShow = true;
        //vuex中quanx值为假,通过下面重新赋值,按钮页面即可监听到quanx变化
         this.$store.commit("quanx",this.isShow)
        //quanx值为真，所有按钮开启，求购物车里面的商品总数
         this.jies=this.$store.state.sper.length
         //以及商品价格
         this.hj=this.heji
         //将基础数据里的isAbroad全部转为真，表示所有按钮选中
            this.$store.commit("cisAbroad")
         this.$store.commit("yxzg3")
       
      } else {
        this.isShow = false;
        this.$store.commit("quanx",this.isShow)
        this.jies=0
        this.hj=0
           this.$store.commit("bisAbroad")
      this.$store.commit("yxzg2")
      }
    },
  },
  computed:{
    heji(){
      let hej=0
      for(let i=0;i<this.$store.state.sper.length;i++){
       hej=(Number(this.$store.state.sper[i].mangl)*this.$store.state.sper[i].amount)+hej
      //  console.log(Number(this.$store.state.sper[i].mangl)*this.$store.state.sper[i].amount);
      }
      return hej
    }
  },
  watch:{
    "$store.state.yxz":function(){
      //当选中时判断选择的个数是否全部选择
      // console.log(this.$store.state.yxz);
      // console.log(this.$store.state.sper);
      if(this.$store.state.yxz.length==this.$store.state.sper.length){
        // console.log(11);
           this.$store.commit("quanx3")
          this.isShow=true
      }else if(this.$store.state.flag &&this.$store.state.yxz.length==0){
        // console.log(2);
        this.$store.commit("quanx2")
        this.isShow=false
      }else{
        this.isShow=false
      }
      //当选定数组发生改变时,计算总价格和总数量
      this.jies=this.$store.state.yxz.length
      this.hj=0
      for(let i=0;i<this.$store.state.yxz.length;i++){
        this.hj+=Number(this.$store.state.yxz[i].mangl)*this.$store.state.sper[i].amount
      }
    },
  }
};
</script>

<style scoped>
.chcke {
  position: absolute;
  width: 20px;
  height: 20px;
  left: 5px;
  top: 50%;

  margin-top: -10px;
  border-radius: 50%;
  border: 1px solid;
  border-color: rgb(182, 182, 182);
}
img {
  width: 100%;
  height: 100%;
  position: absolute;
  left: 1px;
  top: 0.4px;
  display: block;
  border-radius: 50%;
}
.actv {
  border-color: #ffc0cb;
}

.jiesa {
  border-top: 0.5px solid #e7e6e6;
  position: fixed;
  display: flex;
  align-items: center;
  width: 100%;
  height: 55px;
  bottom: 49px;
  justify-content: space-between;
}
.quanx {
  margin-left: 35px;
}
.jies {
  width: 50%;
  line-height: 48px;
  text-align: center;
  height: 48px;
  border-radius: 50px;
  color: #fff;
  background-color: #fe7d01;
}
.hj{
  margin-left: -12%;
}
.res {
  display: flex;
  width: 60%;
  align-items: center;
  justify-content: space-between;
  position: absolute;
  right: 10px;
}
</style>