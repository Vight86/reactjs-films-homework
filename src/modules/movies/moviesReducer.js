import {
  MOVIES_LOADED, MOVIES_ADDED, MOVIE_TRAILER_KEY_ADDED,
} from './moviesActions';

const initialState = {
  page: 1,
  pageSize: 16,
  totalPages: 0,
  currentMovieTrailerKey: '',
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
    default:
      return state;
  }
};

export default moviesReducer;
