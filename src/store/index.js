import { createStore } from 'vuex'

export default createStore({
  state: {
    imgload:false,
    goods: {
      pop: { page: 0, list: [] },
      new: { page: 0, list: [] },
      sell: { page: 0, list: [] },
    },
  },
  mutations: {
    imglodea(state,imgloada){
      if(state.imgload){
        state.imgload=false
      }else{
        state.imgload=imgloada
      }
    },
      goods(state,goods){
        state.goods=goods
        console.log(state.goods);
      }
  },
  actions: {
  },
  modules: {
  }
})
