import { createStore } from 'redux';
import { GENRES_LOADED } from '../genresActions';
import genresReducer, { loadGenres, selectGenres } from '../index';

const genres = [{ id: 1, name: 'Action' }];
const expectedAction = {
  type: GENRES_LOADED,
  payload: {
    genres,
  },
};
const initialState = {
  genres: [],
};
const expectedState = {
  genres,
};

global.fetch = jest.fn(() => Promise.resolve({
  json: () => Promise.resolve({ genres }),
}));

describe('test genres actions', () => {
  it('handles loadGenres action correctly', async () => {
    const store = createStore(genresReducer);
    const mockDispatch = jest.fn(() => store.dispatch(expectedAction));
    await loadGenres()(mockDispatch);
    expect(store.getState()).toEqual(expectedState.genres);
  });
});

describe('test genresReducer', () => {
  it('returns default state correctly', () => {
    expect(genresReducer(undefined, {})).toEqual(initialState.genres);
  });

  it('genresReducer handles genresLoaded action correctly', () => {
    expect(genresReducer(initialState.genres, expectedAction)).toEqual(expectedState.genres);
  });
});

describe('test genres selectors', () => {
  it('handles selectGenres selector correctly', () => {
    expect(selectGenres(expectedState)).toEqual(genres);
  });
});
