import  { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Toasta from './components/common/toast'
import FastClick from 'fastclick'
import VueLazyload from 'vue-lazyload'
//解决延迟移动端300问题
FastClick.attach(document.body)
createApp(App).use(store).use(router).use(Toasta).mount('#app')


