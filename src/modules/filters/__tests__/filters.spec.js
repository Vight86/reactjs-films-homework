import { GENRE_FILTER_UPDATED } from '../filtersActions';
import filtersReducer, { genreFilterUpdated, selectGenreId } from '../index';

const genreId = 1;
const expectedAction = {
  type: GENRE_FILTER_UPDATED,
  payload: {
    genreId,
  },
};
const initialState = {
  filters: {
    genreId: 0,
  },
};
const expectedState = {
  filters: {
    genreId: 1,
  },
};

describe('test filters actions', () => {
  it('handles genreFilterUpdated action correctly', () => {
    expect(genreFilterUpdated(genreId)).toEqual(expectedAction);
  });
});

describe('test filtersReducer', () => {
  it('returns default state correctly', () => {
    expect(filtersReducer(undefined, {})).toEqual(initialState.filters);
  });

  it('filterReducer handles GENRE_FILTER_UPDATED action correctly', () => {
    expect(filtersReducer(initialState.filters, expectedAction)).toEqual(expectedState.filters);
  });
});

describe('test filters selectors', () => {
  it('handles selectGenreId selector correctly', () => {
    expect(selectGenreId(initialState)).toBe(0);
  });
});
