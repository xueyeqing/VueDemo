/**
 * Created by zyzhang on 17/7/8.
 */
import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import movies from './modules/curentmovies'
import createLogger from 'vuex/dist/logger'; // vuex调试工具

Vue.use(Vuex);

// 开发环境下开启严格模式
const debug = process.env.NODE_ENV !== 'production';

const store = new Vuex.Store({
  modules: {movies},
  getters,
  strict: debug,
  plugins: debug ? [createLogger()] : []
});

export default store
