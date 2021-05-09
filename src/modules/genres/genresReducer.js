import { GENRES_LOADED } from './genresActions';

const genresReducer = (state = [], action) => {
  switch (action.type) {
    case GENRES_LOADED: {
      return action.payload.genres;
    }
    default:
      return state;
  }
};

export default genresReducer;
