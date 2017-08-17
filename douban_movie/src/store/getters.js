/**
 * Created by a1 on 17/7/30.
 */
const getters = {
  movie: state => state.movies.movie,
  wantedMovies: state => state.movies.wantedMovies,
  watchedMovies: state => state.movies.watchedMovies
}

export default getters
