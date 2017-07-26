import Vue from 'vue'
import Router from 'vue-router'

const MovieShow = resolve => require(['components/movie-show/movie-show'], resolve);
const Rank = resolve => require(['components/rank/rank'], resolve);
const UserCenter = resolve => require(['components/user/user'], resolve);

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/movie-show'
    },
    {
      path: '/movie-show',
      component: MovieShow
    },
    {
      path: '/rank',
      component: Rank
    },
    {
      path: '/user',
      component: UserCenter
    }
  ],
  mode: 'history'
})
