/**
 * Created by a1 on 17/7/30.
 */
import {saveWantedMovie, saveWatchedMovie, loadWantedMovie, loadWatchedMovie} from '../../common/js/cache'

const movies = {
  state: {
    movie: {},
    wantedMovies: loadWantedMovie(), // 想看的电影
    watchedMovies: loadWatchedMovie() // 看过的电影
  },

  mutations: {
    SET_MOVIE: (state, movie) => {
      state.movie = movie
    },
    SET_WANTED_MOVIES: (state, movies) => {
      state.wantedMovies = movies;
    },
    SET_WATCHED_MOVIES: (state, movies) => {
      state.watchedMovies = movies;
    }
  },

  actions: {
    markWantedMovie({commit}, movie){
      commit('SET_WANTED_MOVIES', saveWantedMovie(movie));
    },
    markWatchedMovie({commit}, movie){
      commit('SET_WATCHED_MOVIES', saveWatchedMovie(movie));
    }
  }
}
export default movies;
