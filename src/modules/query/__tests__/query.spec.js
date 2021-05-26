import queryReducer, { selectQuery } from '../index';

let initialState;

beforeEach(() => {
  initialState = {
    query: {
      basePath: 'https://api.themoviedb.org/3',
      adult: false,
      apiKey: 'e5dc29ce2b6d31bb5c5306f6a7469ba2',
      lang: 'en-US',
    },
  };
});

afterEach(() => {
  initialState = null;
});

describe('test queryReducer', () => {
  it('returns default state correctly', () => {
    expect(queryReducer(undefined, {})).toEqual(initialState.query);
  });
});

describe('test query selectors', () => {
  it('handles selectQuery correctly', () => {
    expect(selectQuery(initialState)).toEqual(initialState.query);
  });
});
