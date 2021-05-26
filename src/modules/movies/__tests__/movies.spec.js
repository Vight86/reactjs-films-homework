import { createStore } from 'redux';
import {
  MOVIES_LOADED,
  MOVIES_ADDED,
  MOVIE_TRAILER_KEY_ADDED,
  MOVIE_DETAILS_LOADED,
} from '../moviesActions';

import moviesReducer, {
  loadMovies,
  addMovies,
  loadMovieDetails,
  addCurrentMovieTrailerKey,
  selectMovies,
  selectMovieDetails,
} from '../index';

let mockMovie;
let mockMovies;
let initialState;
let mockMoviesLoaded;
let expectedStateAfterMoviesLoaded;
let mockMovieDetailsLoaded;
let expectedStateAfterMovieDetailsLoaded;

beforeEach(() => {
  mockMovie = {
    adult: false,
    backdropPath: '/test.jpg',
    genreIds: [1, 2],
    id: 1,
    originalLanguage: 'en',
    originalTitle: 'test',
    overview: 'test',
    popularity: 1,
    posterPath: '/test.jpg',
    releaseDate: '1',
    title: 'test',
    video: false,
    voteAverage: 1,
    voteCount: 1,
  };

  mockMovies = Array(2).fill(mockMovie);

  initialState = {
    movies: {
      page: 1,
      pageSize: 16,
      totalPages: 0,
      currentMovieTrailerKey: '',
      currentMovieDetails: {
        title: '',
        backdroPath: '',
        genres: [],
        runtime: 0,
        voteAverage: 0,
        overview: '',
      },
      movies: [],
    },
  };

  mockMoviesLoaded = {
    type: MOVIES_LOADED,
    payload: {
      page: 1,
      totalPages: 2,
      movies: mockMovies,
    },
  };

  expectedStateAfterMoviesLoaded = {
    movies: {
      page: 1,
      pageSize: 16,
      totalPages: 2,
      currentMovieTrailerKey: '',
      currentMovieDetails: {
        title: '',
        backdroPath: '',
        genres: [],
        runtime: 0,
        voteAverage: 0,
        overview: '',
      },
      movies: mockMovies,
    },
  };

  mockMovieDetailsLoaded = {
    type: MOVIE_DETAILS_LOADED,
    payload: {
      movieDetails: {
        title: 'test',
        backdroPath: '/test',
        genres: [1, 2],
        runtime: 100,
        voteAverage: 5,
        overview: 'test overview',
      },
    },
  };

  expectedStateAfterMovieDetailsLoaded = {
    movies: {
      page: 1,
      pageSize: 16,
      totalPages: 0,
      currentMovieTrailerKey: '',
      currentMovieDetails: {
        title: 'test',
        backdroPath: '/test',
        genres: [1, 2],
        runtime: 100,
        voteAverage: 5,
        overview: 'test overview',
      },
      movies: [],

    },
  };
});

afterEach(() => {
  mockMovie = null;
  mockMovies = null;
  initialState = null;
  mockMoviesLoaded = null;
  expectedStateAfterMoviesLoaded = null;
  mockMovieDetailsLoaded = null;
  expectedStateAfterMovieDetailsLoaded = null;
});

describe('test movies actions', () => {
  let store;
  beforeEach(() => {
    store = createStore(moviesReducer);
  });

  afterEach(() => {
    store = null;
  });

  it('handles loadMovies action correctly', async () => {
    const mockDispatch = jest.fn(() => store.dispatch(mockMoviesLoaded));

    global.fetch = jest.fn(() => Promise.resolve({
      json: () => Promise.resolve(expectedStateAfterMoviesLoaded.movies),
    }));

    await loadMovies()(mockDispatch);
    expect(store.getState()).toEqual(expectedStateAfterMoviesLoaded.movies);
  });

  it('handles loadMovies action with error correctly', async () => {
    const mockDispatch = jest.fn();
    global.fetch = jest.fn(() => { throw new Error('tested'); });
    await loadMovies()(mockDispatch);
    expect(global.fetch).toThrow('tested');
  });

  it('handles addMovies action correctly', async () => {
    const mockMoviesAdded = {
      type: MOVIES_ADDED,
      payload: {
        page: 1,
        movies: mockMovies,
      },
    };

    const expectedStateAfterMoviesAdded = {
      movies: {
        page: 1,
        pageSize: 16,
        totalPages: 0,
        currentMovieTrailerKey: '',
        currentMovieDetails: {
          title: '',
          backdroPath: '',
          genres: [],
          runtime: 0,
          voteAverage: 0,
          overview: '',
        },
        movies: [...mockMovies, ...mockMovies],
      },
    };

    const mockDispatch = jest.fn(() => store.dispatch(mockMoviesAdded));
    global.fetch = jest.fn(() => Promise.resolve({
      json: () => Promise.resolve(expectedStateAfterMoviesAdded),
    }));

    await addMovies()(mockDispatch);
    expect(store.getState()).toEqual(expectedStateAfterMoviesAdded.movies);
  });

  it('handles addMovies action with error correctly', async () => {
    const mockDispatch = jest.fn();
    global.fetch = jest.fn(() => { throw new Error('tested'); });
    await addMovies()(mockDispatch);
    expect(global.fetch).toThrow('tested');
  });

  it('handles addCurrentMovieTrailerKey action correctly with Trailer type in results', async () => {
    const mockCurrentMovieTrailerKeyAdded = {
      type: MOVIE_TRAILER_KEY_ADDED,
      payload: {
        currentMovieTrailerKey: 'testKey',
      },
    };

    const expectedStateAfterTrailerKeyAdded = {
      movies: {
        page: 1,
        pageSize: 16,
        totalPages: 0,
        currentMovieTrailerKey: 'testKey',
        currentMovieDetails: {
          title: '',
          backdroPath: '',
          genres: [],
          runtime: 0,
          voteAverage: 0,
          overview: '',
        },
        movies: [],
      },
    };

    const mockVideoTrailers = {
      results: [
        {
          type: 'testKey',
          key: 'testKey',
        },
        {
          type: 'Trailer',
          key: 'testkey2',
        },
      ],
    };
    global.fetch = jest.fn(() => Promise.resolve({
      json: () => Promise.resolve(mockVideoTrailers),
    }));

    const mockDispatch = jest.fn(() => store.dispatch(mockCurrentMovieTrailerKeyAdded));
    await addCurrentMovieTrailerKey()(mockDispatch);
    expect(store.getState()).toEqual(expectedStateAfterTrailerKeyAdded.movies);
  });

  it('handles addCurrentMovieTrailerKey action correctly without Trailer type in results', async () => {
    const mockCurrentMovieTrailerKeyAdded = {
      type: MOVIE_TRAILER_KEY_ADDED,
      payload: {
        currentMovieTrailerKey: 'noTrailerTestKey',
      },
    };

    const expectedStateAfterTrailerKeyAdded = {
      movies: {
        page: 1,
        pageSize: 16,
        totalPages: 0,
        currentMovieTrailerKey: 'noTrailerTestKey',
        currentMovieDetails: {
          title: '',
          backdroPath: '',
          genres: [],
          runtime: 0,
          voteAverage: 0,
          overview: '',
        },
        movies: [],
      },
    };

    const mockVideoTrailers = {
      results: [
        {
          type: 'testKey',
          key: 'noTrailerTestKey',
        },
        {
          type: 'NotTrailerType',
          key: 'testkey2',
        },
      ],
    };
    global.fetch = jest.fn(() => Promise.resolve({
      json: () => Promise.resolve(mockVideoTrailers),
    }));

    const mockDispatch = jest.fn(() => store.dispatch(mockCurrentMovieTrailerKeyAdded));
    await addCurrentMovieTrailerKey()(mockDispatch);
    expect(store.getState()).toEqual(expectedStateAfterTrailerKeyAdded.movies);
  });

  it('handles loadMovieDetails action correctly', async () => {
    const mockDispatch = jest.fn(() => store.dispatch(mockMovieDetailsLoaded));

    global.fetch = jest.fn(() => Promise.resolve({
      json: () => Promise.resolve(expectedStateAfterMovieDetailsLoaded),
    }));

    await loadMovieDetails()(mockDispatch);
    expect(store.getState()).toEqual(expectedStateAfterMovieDetailsLoaded.movies);
  });
});

describe('test moviesReducer', () => {
  it('returns default state correctly', () => {
    expect(moviesReducer(undefined, {})).toEqual(initialState.movies);
  });

  it('moviesReducer handles moviesLoaded action correctly', () => {
    expect(moviesReducer(initialState.movies, mockMoviesLoaded))
      .toEqual(expectedStateAfterMoviesLoaded.movies);
  });
});

it('moviesReducer handles movieDtailsLoaded action correctly', () => {
  expect(moviesReducer(initialState.movies, mockMovieDetailsLoaded))
    .toEqual(expectedStateAfterMovieDetailsLoaded.movies);
});

describe('test movies selectors', () => {
  it('handles selectMovies selector correctly', () => {
    expect(selectMovies(initialState))
      .toEqual(initialState.movies);
  });

  it('handles selectMovieDetails selector correctly', () => {
    expect(selectMovieDetails(initialState))
      .toEqual(initialState.movies.currentMovieDetails);
  });
});
