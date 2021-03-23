import { createStore } from 'vuex'

export default createStore({
  state: {
    imgload: false,
    detailImg: false,
    sper: [],
    //按钮逻辑
    //全选按钮状态
    quanx: false,
    //已经选择按钮的数量
    yxz: [],
    flag:true,
    hei:false
  },
  mutations: {
    heig(state,be){
      state.hei=be
    },
    imglodea(state, imgloada) {
      if (state.imgload) {
        state.imgload = false
      } else {
        state.imgload = imgloada
      }
    },
    detailImglodea(state, imgloada) {
      if (state.detailImg) {
        state.detailImg = false
      } else {
        state.detailImg = imgloada
      }
    },
    sperpush(state, prodouct) {
      state.sper.push(prodouct)
    },
    //修改isAbroad值
    aisAbroad(state, obj) {
      console.log("修改sp");
        state.sper[obj.index].isAbroad = obj.isShow
    },
    bisAbroad(state) {
      for (let i = 0; i < state.sper.length; i++) {
        state.sper[i].isAbroad = false
      }
    },
    cisAbroad(state) {
      for (let i = 0; i < state.sper.length; i++) {
        state.sper[i].isAbroad = true
      }
    },
    quanx(state, zta) {
      state.quanx = zta
    },
    quanx2(state){
      state.quanx=false
    },
    quanx3(state){
      state.quanx=true
    },
    yxzg(state, arr) {
      state.yxz=arr
    },
    yxzg2(state,be) {
      state.yxz = []
    },
    yxzg3(state){
      state.yxz=state.sper
    },
    flagg(state,booler){
      state.flag=booler
    }
  },
  actions: {
  },
  modules: {
  }
})
