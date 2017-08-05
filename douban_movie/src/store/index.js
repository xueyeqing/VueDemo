/**
 * Created by zyzhang on 17/7/8.
 */
import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import movies from './modules/curentmovies'

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {movies},
  getters
});

export default store
