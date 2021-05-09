import { API_PATH_UPDATED, SEARCH_QUERY_SUBMITTED } from '../queryActions';
import queryReducer, { apiPathUpdated, searchQuerySubmitted, selectQuery } from '../index';

let initialState;

beforeEach(() => {
  initialState = {
    query: {
      basePath: 'https://api.themoviedb.org/3',
      adult: false,
      apiKey: 'e5dc29ce2b6d31bb5c5306f6a7469ba2',
      apiPath: '/movie/popular',
      genresPath: '/genre/movie/list',
      lang: 'en-US',
      searchQuery: '',
    },
  };
});

afterEach(() => {
  initialState = null;
});

describe('test query actions', () => {
  it('handles apiPathUpdated action correctly', () => {
    const mockApiPath = '/test';
    const expectedAction = {
      type: API_PATH_UPDATED,
      payload: {
        apiPath: mockApiPath,
      },
    };
    expect(apiPathUpdated(mockApiPath)).toEqual(expectedAction);
  });

  it('handles searchQuerySubmitted action correctly', () => {
    const mockSearchQuery = 'testSearchQuery';
    const expectedAction = {
      type: SEARCH_QUERY_SUBMITTED,
      payload: {
        searchQuery: mockSearchQuery,
      },
    };
    expect(searchQuerySubmitted(mockSearchQuery)).toEqual(expectedAction);
  });
});

describe('test queryReducer', () => {
  it('returns default state correctly', () => {
    expect(queryReducer(undefined, {})).toEqual(initialState.query);
  });

  it('queryReducer handles apiPathUpdated correctly', () => {
    const mockApiPath = '/test';
    const expectedAction = {
      type: API_PATH_UPDATED,
      payload: {
        apiPath: mockApiPath,
      },
    };
    const expectedState = {
      query: {
        ...initialState.query,
        apiPath: mockApiPath,
      },
    };

    expect(queryReducer(initialState.query, expectedAction)).toEqual(expectedState.query);
  });

  it('queryReducer handles searchQuerySubmitted correctly', () => {
    const mockSearchQuery = 'testSearchQuery';
    const expectedAction = {
      type: SEARCH_QUERY_SUBMITTED,
      payload: {
        searchQuery: mockSearchQuery,
      },
    };

    const expectedState = {
      query: {
        ...initialState.query,
        searchQuery: mockSearchQuery,
      },
    };
    expect(queryReducer(initialState.query, expectedAction)).toEqual(expectedState.query);
  });
});

describe('test query selectors', () => {
  it('handles selectQuery correctly', () => {
    expect(selectQuery(initialState)).toEqual(initialState.query);
  });
});
