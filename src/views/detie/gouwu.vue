<template>
  <div v-if="Object.keys(skuInfo).length !== 0" class="bs" v-show="isShow" :class="{bit:isShow}">

    <div v-if="xq.length !== 0" class="xqa">
      <img :src="xq[0].img" alt="" class="imga" />
      <div class="shuju">
        <div class="xd">
        <div class="hq">{{xq[0].currency}}</div>
        <div class="hh">{{ (xq[0].nowprice / 100).toFixed(2) }}</div>
        </div>

        <div class="kc">库存{{ xq[0].stock }}件</div>
        <div class="yixuanz">已选择：<span>{{xuanz}}</span></div>
      </div>
      <div class="cha" @click="gb()">×</div>
    </div>
    <div class="sc">{{ skuInfo.styleKey }}</div>
    <div class="scolor">
      <div
        class="nmd"
        v-for="(item, index) in skuInfo.props[0].list"
        :key="index"
        :class="{ fs: cout == index, bk: cout == index }"
        @click="fn(index)"
      >
        {{ item.name }}
      </div>
    </div>
    <div class="sc">{{ skuInfo.sizeKey }}</div>
    <div class="scolor">
      <div
        class="nmd"
        v-for="(item, index) in skuInfo.props[1].list"
        :key="index"
        :class="{ fs: cout2 == index, bk: cout2 == index }"
        @click="fn2(index)"
      >
        {{ item.name }}
      </div>
    </div>
    <div class="sc">数量</div>
    <div class="left" :class="{huise:jishu==1,fs:jishu>1,huzhe:jishu>1}" @click="jian()">-</div>
    <div class="st">{{jishu}}</div>
    <div :class="{fs:true}" class="ret" @click="sum()">+</div>
    <div class="qued" @click="addTo()">确定</div>

  </div>
</template>

<script>
export default {
  data() {
    return {
      cout: 0,
      cout2: 0,
      jishu:1,
      isShow:true,
      xq:[]
    };
  },
  props: {
    skuInfo: {
      type: Object,
      default() {
        return {};
      },
    },
      xq1: {
      type: Array,
      default() {
        return [];
      },
    },
     desc: {
      type: String,
      default() {
        return "";
      },
    },
  },
  watch:{
    xq1:function(a,b){
    this.xq1.length !== 0?this.xq=this.xq1:[]
      }
  },
  methods: {
    xqz() {
      console.log(typeof  this.skuInfo.skus);
      this.xq = this.skuInfo.skus.filter((n) => {
        return (
          n.styleId == this.skuInfo.props[0].list[this.cout].styleId &&
          n.sizeId == this.skuInfo.props[1].list[this.cout2].sizeId
        );
      });
    },
    fn(index) {
      this.cout = index;
      this.xqz()
    },
    fn2(index) {
      this.cout2 = index;
      this.xqz()
    },
    sum(){
      this.jishu++
    },
    jian(){
      if(this.jishu>=2){
this.jishu--
      }
      
    },
    gb(){
      this.$emit('gba')
    },
    //将用户选择的商品数据整理到一个类里
  addTo(){
    let prodouct={}
    prodouct.img=this.xq[0].img
    prodouct.cm=this.xuanz
    prodouct.amount=this.jishu
    prodouct.title=this.skuInfo.title
    prodouct.desc=this.desc
    prodouct.mangl=(this.xq[0].nowprice / 100).toFixed(2)
    prodouct.isAbroad=this.skuInfo.isAbroad
    this.$store.commit("sperpush",prodouct)
    this.$emit('gba')
    this.$store.commit("heig",true)
  },
  },
  computed:{
    xuanz(){
      return this.xq[0].style+"，"+this.xq[0].size
    },
   
  }
};
</script>

<style scoped>
/* .gowu {
position: absolute;

  background-color: #8b8b8b54;
  height: 100%;
  margin-top: -44px;

} */
.huise{
  color: #999999;
  border: 0.5px solid rgb(243, 243, 243);
}
.xd{
  position: relative;
}
.imga{
  display: inline-block;
  margin-top: 5px;
  height: 70px;
  width: 65px;
}
.bit{
bottom: -500px;
}
.bs{
  position: absolute;
  
  width: 100%;
    z-index: 20;
  background-color:#fff;
}
.cha{
  font-size: 30px;
  position: absolute;
  right: 10px;
  top: 5px;
}
.sc {
  padding: 9px;
  color: #5e5e5e;
}
.scolor {
  display: flex;
  padding-left: 9px;
  flex-wrap: wrap;
}
.nmd {
  padding: 0px 20px;
  margin-top: 5px;
  margin-right: 10px;
  height: 20px;
  color: #5e5e5e;
  border-radius: 0.06rem;
  font-size: 0.24rem;
  text-align: center;
  line-height: 17px;
  border: 0.5px solid #bbb;
}
.ret,
.left,
.st {
  display: inline-block;
  width: 30px;
  height: 18px;
  font-size: 0.24rem;
  text-align: center;
  line-height: 17px;

}
.ret{
    border: 0.5px solid #bbb;
}
.huzhe{
    border: 0.5px solid #bbb;
}
.st{
    border: 0.5px solid #bbb;
}
.fs {
  color: #ed4566;
}
.bk {
  border: 0.5px solid #ed4566;
}
.xqa{
  padding-left: 20px;
  display: flex;
  margin-bottom: 5px;
}
.shuju{
  margin-top: 10px;
  margin-left: 10px;
}
.shuju span{
color: #f25;
}
.shuju .hh{
  font-size: 25px;
  margin-bottom: 3px;
  display: inline-block;
  margin-left: 10px;
}
.hq{
  position: absolute;
  display: inline-block;
  font-size: 8px;
 top: 0px;
}
.kc{
font-size: 12px;
}
.yixuanz{
  font-size: 12px;
}
.qued{
  margin-top: 10px;
  height: 50px;
  width: 100%;
  background-color: #FF488C;
  text-align: center;
  line-height: 50px;
  color: #fff;
  font-size: 13px;
}
</style>