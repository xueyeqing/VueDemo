import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/home'
import Newmusic from '@/views/musictype/newmusic'
import Rank from '@/views/musictype/rank'
import Allplaylist from '@/views/musictype/allplaylist'

Vue.use(Router)

export default new Router({
  routes: [
    {path: '/', redirect: '/home'},
    {
      path: '/home',
      name: 'home',
      component: Home,
      children: [
        {
          path: '/home',
          redirect: '/home/newmusic/',
        },
        {
          name: 'newmusic',
          path: 'newmusic/:album?/:type?',
          component: Newmusic
        },
        {
          name: 'rank',
          path: 'rank/:type?',
          component: Rank
        },
        {
          name: 'allplaylist',
          path: 'allplaylist/:type?',
          component: Allplaylist
        }
      ]
    }
  ]
})
