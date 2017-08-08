// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/index'

import VueLazyLoad from 'vue-lazyload'; // 图片懒加载

Vue.use(VueLazyLoad, {
  error: require('./common/image/error.jpg'),
  loading: require('./common/image/loading.gif')
});

import 'common/stylus/index.styl'; // 引入样式表

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
});
