import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import SearchResultsPageContainer from '../index';

const map = {};
global.addEventListener = jest.fn((event, cb) => {
  map[event] = cb;
});

const mockUseSelector = jest.fn();
jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useDispatch: jest.fn(() => jest.fn()),
  useSelector: jest.fn(() => mockUseSelector()),
}));

jest.mock('react', () => ({
  ...jest.requireActual('react'),
  useEffect: jest.fn((f) => f()),
}));

let mockQuerySlice;
let mockGenres;
let mockMoviesSlice;
let mockFiltersSlice;
let mockStatusSlice;
let triggerMockUseSelector;
let renderer;
let result;

beforeEach(() => {
  mockQuerySlice = {
    basePath: 'testBasePath',
    apiPath: 'testApiPath',
    genresPath: 'testGenrePath',
    apiKey: 'testApiKey',
    lang: 'testAlng',
    adult: false,
    searchQuery: '',
  };
  mockGenres = [{ id: 1, name: 'Action' }];

  const mockMovie = {
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

  const mockMovies = Array(15).fill(mockMovie);
  mockMoviesSlice = {
    page: 1,
    pageSize: 16,
    totalPages: 5,
    currentMovieTrailerKey: 'testMovieTrailerKey',
    movies: mockMovies,
  };
  mockFiltersSlice = 0;

  mockStatusSlice = {
    status: 'loading',
  };

  triggerMockUseSelector = () => {
    mockUseSelector
      .mockReturnValueOnce(mockQuerySlice)
      .mockReturnValueOnce(mockGenres)
      .mockReturnValueOnce(mockMoviesSlice)
      .mockReturnValueOnce(mockMoviesSlice)
      .mockReturnValueOnce(mockFiltersSlice)
      .mockReturnValueOnce(mockMoviesSlice)
      .mockReturnValueOnce(mockStatusSlice);
  };
  triggerMockUseSelector();

  renderer = new ShallowRenderer();
  renderer.render(<SearchResultsPageContainer />);
  result = renderer.getRenderOutput();
});

afterEach(() => {
  mockQuerySlice = null;
  mockGenres = null;
  mockMoviesSlice = null;
  mockFiltersSlice = null;
  mockStatusSlice = null;
  triggerMockUseSelector = null;
  renderer = null;
  result = null;
});

describe('render SearchResultsPage component', () => {
  it('render initial state correctly', () => {
    expect(result).toMatchSnapshot();
  });

  it('render after dearch query submit correctly', () => {
    mockQuerySlice.searchQuery = 'test query';
    triggerMockUseSelector();
    renderer.render(<SearchResultsPageContainer />);
    result = renderer.getRenderOutput();
    expect(result).toMatchSnapshot();
  });

  it('render after filtering by genre correctly', () => {
    mockFiltersSlice = 1;
    triggerMockUseSelector();
    renderer.render(<SearchResultsPageContainer />);
    result = renderer.getRenderOutput();
    expect(result).toMatchSnapshot();
  });

  it('handles scroll event triggers at bottom correctly', () => {
    map.scroll();
    expect(result).toMatchSnapshot();
  });

  it('handles scroll event triggers not at bottom correctly', () => {
    jest
      .spyOn(document.documentElement, 'clientHeight', 'get')
      .mockImplementation(() => -100);
    map.scroll();
    expect(result).toMatchSnapshot();
  });

  it('updates status correctly when all movies are loaded', () => {
    mockMoviesSlice.pageSize = 1;
    triggerMockUseSelector();
    renderer.render(<SearchResultsPageContainer />);
    result = renderer.getRenderOutput();
    expect(result).toMatchSnapshot();
  });

  it('render grid toggle correctly', () => {
    triggerMockUseSelector();
    const { handleGridToggle } = result.props;
    handleGridToggle();
    result = renderer.getRenderOutput();
    expect(result).toMatchSnapshot();
  });

  it('render movie trailer key update correctly', () => {
    triggerMockUseSelector();
    const { updateMovieTrailerKey } = result.props;
    updateMovieTrailerKey('test key');
    result = renderer.getRenderOutput();
    expect(result).toMatchSnapshot();
  });

  it('render movie trailer key update to null correctly', () => {
    triggerMockUseSelector();
    const { updateMovieTrailerKey } = result.props;
    updateMovieTrailerKey(null);
    result = renderer.getRenderOutput();
    expect(result).toMatchSnapshot();
  });

  it('render getTrending function correctly', () => {
    triggerMockUseSelector();
    const { getTrending } = result.props;
    getTrending();
    result = renderer.getRenderOutput();
    expect(result).toMatchSnapshot();
  });

  it('render getTopRatedMovies function correctly', () => {
    triggerMockUseSelector();
    const { getTopRatedMovies } = result.props;
    getTopRatedMovies();
    result = renderer.getRenderOutput();
    expect(result).toMatchSnapshot();
  });

  it('render getUpcoming function correctly', () => {
    triggerMockUseSelector();
    const { getUpcoming } = result.props;
    getUpcoming();
    result = renderer.getRenderOutput();
    expect(result).toMatchSnapshot();
  });

  it('render filterMovies function correctly', () => {
    triggerMockUseSelector();
    const { filterMovies } = result.props;
    filterMovies();
    result = renderer.getRenderOutput();
    expect(result).toMatchSnapshot();
  });
});
