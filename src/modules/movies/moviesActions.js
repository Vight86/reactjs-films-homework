import { updateStatus } from '../status/index';

export const MOVIES_LOADED = 'movies/moviesLoaded';
export const MOVIES_ADDED = 'movies/moviesAdded';
export const MOVIE_TRAILER_KEY_ADDED = 'movies/currentMovieTrailerKeyAdded';
export const MOVIE_DETAILS_LOADED = 'movies/movieDetailsLoaded';

const moviesLoaded = (totalPages, movies) => ({
  type: MOVIES_LOADED,
  payload: {
    page: 1,
    totalPages,
    movies,
  },
});

const moviesAdded = (page, movies) => ({
  type: MOVIES_ADDED,
  payload: {
    page,
    movies,
  },
});

export const currentMovieTrailerKeyAdded = (key) => ({
  type: MOVIE_TRAILER_KEY_ADDED,
  payload: {
    currentMovieTrailerKey: key,
  },
});

const movieDetailsLoaded = (movieDetails) => ({
  type: MOVIE_DETAILS_LOADED,
  payload: {
    movieDetails,
  },
});

export const loadMovies = (url) => async (dispatch) => {
  try {
    dispatch(updateStatus('loading'));
    const response = await fetch(url);
    const result = await response.json();
    const { total_pages: totalPages, results: movies } = result;
    dispatch(moviesLoaded(totalPages, movies));
  } catch (e) {
    dispatch(updateStatus('error'));
  }
};

export const addMovies = (url, page) => async (dispatch) => {
  try {
    dispatch(updateStatus('loading'));
    const response = await fetch(url);
    const result = await response.json();
    const { results: movies } = result;
    dispatch(moviesAdded(page, movies));
  } catch (e) {
    dispatch(updateStatus('error'));
  }
};

export const addCurrentMovieTrailerKey = (url) => async (dispatch) => {
  const response = await fetch(url);
  const { results } = await response.json();
  let movieKey;
  const result = results.find((item) => item.type === 'Trailer');
  if (result) {
    const { key } = result;
    movieKey = key;
  } else {
    movieKey = results[0].key;
  }
  dispatch(currentMovieTrailerKeyAdded(movieKey));
};

export const loadMovieDetails = (url) => async (dispatch) => {
  const response = await fetch(url);
  const result = await response.json();
  const {
    title, backdrop_path: backdroPath, genres, runtime, vote_average: voteAverage, overview,
  } = result;
  const movieDetails = {
    title, backdroPath, genres, runtime, voteAverage, overview,
  };
  dispatch(movieDetailsLoaded(movieDetails));
};
