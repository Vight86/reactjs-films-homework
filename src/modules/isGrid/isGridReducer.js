import { GRID_VIEW_UPDATED } from './isGridActions';

const initialState = {
  isGrid: true,
};

const isGridReducer = (state = initialState, action) => {
  switch (action.type) {
    case GRID_VIEW_UPDATED: {
      return {
        ...state,
        ...action.payload,
      };
    }
    default:
      return state;
  }
};

export default isGridReducer;
