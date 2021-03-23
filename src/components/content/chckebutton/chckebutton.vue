<template>
  <div class="chcke" :class="{ actv: isShow }" @click="fn()">
    <img v-show="isShow" src="~assets/img/common/对.png" alt="" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      isShow: false,
    };
  },
  props: {
    index: {
      typeof: Number,
      default() {
        return 0;
      },
    },
  },
  methods: {
    fn() {
      if (this.isShow) {
        this.isShow = false;
      } else {
        this.isShow = true;
      }
      let obj = {};
      obj.index = this.index;
      obj.isShow = this.isShow;
      //改变当前按钮在vuex中的isAbroad值

      this.$store.commit("aisAbroad", obj);
// console.log(this.$store.state.sper);
      //判断所有按钮都选择了
      let a =null;
      a=this.$store.state.sper.filter((n=>{
      return  n.isAbroad==true
      }))
      if(a.length==0){
        this.$store.commit("flagg",true)
        
      }else{
        this.$store.commit("flagg",false)
      }
      // this.$store.commit("yxzg2")
      
      // console.log(this.$store.state.flag);
      // for (let i = 0; i < this.$store.state.sper.length; i++) {
      //   if (this.$store.state.sper[i].isAbroad == true) {
      //     a = this.$store.state.sper[i];
      //     this.$store.commit("yxzg", a);
      //   }
      //  }
       
      //  console.log(this.$store.state.yxz==this.$store.state.sper);
      this.$store.commit("yxzg",a)
    },
  },
  watch: {
    "$store.state.quanx": function () {
      console.log("全选改变");
      //将全选按钮的值绑定到普通按钮上
      this.isShow = this.$store.state.quanx;
    },
  },
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
</style>