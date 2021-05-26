import {
  MOVIES_LOADED, MOVIES_ADDED, MOVIE_TRAILER_KEY_ADDED, MOVIE_DETAILS_LOADED,
} from './moviesActions';

const initialState = {
  page: 1,
  pageSize: 16,
  totalPages: 0,
  currentMovieTrailerKey: '',
  currentMovieDetails: {
    title: '',
    backdroPath: '',
    genres: [],
    runtime: 0,
    voteAverage: 0,
    overview: '',
  },
  movies: [],
};

const moviesReducer = (state = initialState, action) => {
  switch (action.type) {
    case MOVIES_LOADED: {
      return {
        ...state,
        ...action.payload,
      };
    }
    case MOVIES_ADDED: {
      return {
        ...state,
        page: action.payload.page,
        movies: [
          ...state.movies,
          ...action.payload.movies,
        ],
      };
    }
    case MOVIE_TRAILER_KEY_ADDED: {
      return {
        ...state,
        ...action.payload,
      };
    }
    case MOVIE_DETAILS_LOADED: {
      return {
        ...state,
        currentMovieDetails: {
          ...state.currentMovieDetails,
          ...action.payload.movieDetails,
        },
      };
    }
    default:
      return state;
  }
};

export default moviesReducer;
