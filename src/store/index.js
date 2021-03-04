import { createStore } from 'vuex'

export default createStore({
  state: {
    imgload:false
  },
  mutations: {
    imglodea(state,imgloada){
      if(state.imgload){
        state.imgload=false
      }else{
        state.imgload=imgloada
      }
      

    
    }
  },
  actions: {
  },
  modules: {
  }
})
