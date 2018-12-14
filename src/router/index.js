import Vue from 'vue'
import Router from 'vue-router'
import member from '@/components/tabbar/member'
import shopcar from '@/components/tabbar/shopcar'
import search from '@/components/tabbar/search'
import home from '@/components/tabbar/home'
Vue.use(Router)

export default new Router({
  routes: [
    {path:'/',redirect:'/home'},
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
    }
  ],
  linkActiveClass: 'mui-active'
})
