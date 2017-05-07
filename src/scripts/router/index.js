import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/scripts/components/m-index'
import Board from '@/scripts/components/Board'
import Search from '@/scripts/components/Search'
import EnterNote from '@/scripts/components/EnterNote'
import MyInfor from '@/scripts/components/MyInfor'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Index,
      redirect:'/board',
      children:[
        {
          path:'/board',
          component:Board
        },
        {
          path:'/search',
          component:Search
        },
        {
          path:'/enternote',
          component:EnterNote
        },
        {
          path:'/myinfo',
          component:MyInfor
        }
      ]
    }
  ]
})
