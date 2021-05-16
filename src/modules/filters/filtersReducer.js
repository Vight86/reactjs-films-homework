import { GENRE_FILTER_UPDATED } from './filtersActions';

const initialState = {
  genreId: 0,
};

const filtersReducer = (state = initialState, action) => {
  switch (action.type) {
    case GENRE_FILTER_UPDATED: {
      return {
        ...state,
        ...action.payload,
      };
    }
    default:
      return state;
  }
};

export default filtersReducer;
