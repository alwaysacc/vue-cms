import Vue from 'vue'
import Router from 'vue-router'
import member from '@/components/tabbar/member'
import shopcar from '@/components/tabbar/shopcar'
import search from '@/components/tabbar/search'
import home from '@/components/tabbar/home'
import newslist from '@/components/news/newslist'
import newsinfo from '@/components/news/newsinfo'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      redirect:'/home'},
    {
      path: '/home',
      name: 'home',
      component: home
    },
    {
      path: '/member',
      name: 'member',
      component: member
    },
    {
      path: '/shopcar',
      name: 'shopcar',
      component: shopcar
    },
    {
      path: '/search',
      name: 'search',
      component: search
    },
    {
      path: '/home/newslist',
      name: 'newslist',
      component: newslist
    },
    {
      path: '/home/newsinfo/:id',
      name: '/home/newsinfo/:id',
      component: newsinfo
    }
  ],
  linkActiveClass: 'mui-active'
})
