import { STATUS_UPDATED } from '../statusActions';
import { MOVIES_LOADED, MOVIES_ADDED } from '../../movies/index';

import statusReducer, {
  updateStatus,
  selectStatus,
} from '../index';

let initialState;
let expectedState;
let mockStatus;
let expectedAction;
let mockMoviesLoaded;

beforeEach(() => {
  initialState = {
    status: 'loading',
  };

  expectedState = {
    status: 'testStatus',
  };

  mockStatus = 'testStatus';
  expectedAction = {
    type: STATUS_UPDATED,
    payload: {
      status: mockStatus,
    },
  };

  mockMoviesLoaded = {
    type: MOVIES_LOADED,
    payload: {
      page: 1,
      totalPages: 1,
      movies: ['test', 'test'],
    },
  };
});

afterEach(() => {
  initialState = null;
  expectedState = null;
  mockStatus = null;
  expectedAction = null;
});

describe('test status module actions', () => {
  it('handles updateStatus action correctly', () => {
    expect(updateStatus(mockStatus)).toEqual(expectedAction);
  });
});

describe('test statusReducer actions', () => {
  it('returns default state correctly', () => {
    expect(statusReducer(undefined, {})).toEqual(initialState);
  });

  it('handles updateStatus correctly', () => {
    expect(statusReducer(initialState, expectedAction)).toEqual(expectedState);
  });

  it('handles moviesLoaded action with NO movies correctly', () => {
    mockMoviesLoaded.payload.movies.length = 0;
    expectedState = {
      status: 'no-movies',
    };
    expect(statusReducer(initialState, mockMoviesLoaded)).toEqual(expectedState);
  });

  it('handles moviesLoaded action with movies correctly', () => {
    expectedState = {
      status: 'loaded',
    };
    expect(statusReducer(initialState, mockMoviesLoaded)).toEqual(expectedState);
  });

  it('handles moviesAdded correctly', () => {
    const mockMoviesAdded = {
      type: MOVIES_ADDED,
      payload: {
        page: 1,
        totalPages: 1,
        movies: [],
      },
    };
    expectedState = {
      status: 'loaded',
    };
    expect(statusReducer(initialState, mockMoviesAdded)).toEqual(expectedState);
  });
});

describe('test status module selectors', () => {
  it('handles selectStatus correctly', () => {
    expect(selectStatus(initialState)).toBe(initialState.status);
  });
});
