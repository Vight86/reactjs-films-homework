import { API_PATH_UPDATED, SEARCH_QUERY_SUBMITTED } from './queryActions';

const initialState = {
  basePath: 'https://api.themoviedb.org/3',
  apiPath: '/movie/popular',
  genresPath: '/genre/movie/list',
  apiKey: 'e5dc29ce2b6d31bb5c5306f6a7469ba2',
  lang: 'en-US',
  adult: false,
  searchQuery: '',
};

const queryReducer = (state = initialState, action) => {
  switch (action.type) {
    case API_PATH_UPDATED: {
      return {
        ...state,
        ...action.payload,
      };
    }
    case SEARCH_QUERY_SUBMITTED: {
      return {
        ...state,
        ...action.payload,
      };
    }
    default:
      return state;
  }
};

export default queryReducer;
