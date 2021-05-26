import { STATUS_UPDATED } from './statusActions';
import { MOVIES_LOADED, MOVIES_ADDED } from '../movies/index';

const initialState = {
  status: 'loading',
};

const statusReducer = (state = initialState, action) => {
  switch (action.type) {
    case STATUS_UPDATED: {
      return {
        ...state,
        ...action.payload,
      };
    }
    case MOVIES_LOADED: {
      if (!action.payload.movies.length) {
        return {
          status: 'no-movies',
        };
      }
      return {
        status: 'loaded',
      };
    }
    case MOVIES_ADDED: {
      return {
        status: 'loaded',
      };
    }
    default:
      return state;
  }
};

export default statusReducer;
