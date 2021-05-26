import { GRID_VIEW_UPDATED } from '../isGridActions';
import isGridReducer, { isGridUpdated, selectIsGrid } from '../index';

let initialState;
let expectedState;
let mockGridViewUpdated;

beforeEach(() => {
  initialState = {
    isGrid: { isGrid: true },
  };
  expectedState = {
    isGrid: { isGrid: false },
  };

  mockGridViewUpdated = {
    type: GRID_VIEW_UPDATED,
    payload: {
      isGrid: false,
    },
  };
});

afterEach(() => {
  initialState = null;
  expectedState = null;
  mockGridViewUpdated = null;
});

describe('test isGrid module actions', () => {
  it('isGridUpdated action works correctly', () => {
    expect(isGridUpdated(false)).toEqual(mockGridViewUpdated);
  });
});

describe('test isGrid module reducer', () => {
  it('isGridReducer returns default state correctly', () => {
    expect(isGridReducer(undefined, {})).toEqual(initialState.isGrid);
  });

  it('isGridReducer GRID_VIEW_UPDATED action correctly', () => {
    expect(isGridReducer(initialState.isGrid, mockGridViewUpdated)).toEqual(expectedState.isGrid);
  });
});

describe('test isGrid selectors', () => {
  it('handles selectIsGrid selector correctly', () => {
    expect(selectIsGrid(initialState)).toBe(true);
  });
});
