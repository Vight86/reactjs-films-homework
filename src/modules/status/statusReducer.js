import { STATUS_UPDATED } from './statusActions';

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
    default:
      return state;
  }
};

export default statusReducer;
