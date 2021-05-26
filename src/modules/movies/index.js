export { default } from './moviesReducer';
export {
  MOVIES_LOADED,
  MOVIES_ADDED,
  loadMovies,
  addMovies,
  currentMovieTrailerKeyAdded,
  addCurrentMovieTrailerKey,
  loadMovieDetails,
} from './moviesActions';
export { selectMovies, selectMovieDetails } from './moviesSelectors';
