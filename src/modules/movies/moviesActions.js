export const MOVIES_LOADED = 'movies/moviesLoaded';
export const MOVIES_ADDED = 'movies/moviesAdded';
export const MOVIE_TRAILER_KEY_ADDED = 'movies/currentMovieTrailerKeyAdded';

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

export const loadMovies = (url) => async (dispatch) => {
  const response = await fetch(url);
  const result = await response.json();
  const { total_pages: totalPages, results: movies } = result;
  dispatch(moviesLoaded(totalPages, movies));
};

export const addMovies = (url) => async (dispatch) => {
  const response = await fetch(url);
  const result = await response.json();
  const { page, results: movies } = result;
  dispatch(moviesAdded(page, movies));
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
