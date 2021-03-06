import { createRouter, createWebHistory } from 'vue-router'
const Home =()=>import("../views/home/Home.vue")
const Classify =()=>import("../views/Classify.vue")
const Shopping =()=>import("../views/shopping/Shopping.vue")
const Files =()=>import("../views/Files.vue")
const Detail =()=>import("../views/detie/detail.vue")
const routes = [
  {
    path:'',
    redirect:'/home'
  }
  ,
  {
    path: '/home',
    component:Home,
    meta:{
      title:"首页"
    }
  },
  {
    path: '/classify',
    component:Classify,
    meta:{
      title:"分类"
    }
  },
  {
    path: '/files',
    component:Files,
    meta:{
      title:"我的"
    }
  },
  {
    path: '/shopping',
    component:Shopping,
    meta:{
      title:"购物车"
    }
  },
    {
      path: '/detail',
      component:Detail,
      meta:{
        title:"详情"
      }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
