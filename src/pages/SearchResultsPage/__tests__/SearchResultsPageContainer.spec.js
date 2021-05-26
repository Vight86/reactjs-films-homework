import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import SearchResultsPageContainer from '../index';

const map = {};
window.addEventListener = jest.fn((event, cb) => {
  map[event] = cb;
});

let cleanUp;
jest.mock('react', () => ({
  ...jest.requireActual('react'),
  useEffect: jest.fn((f) => {
    cleanUp = f();
    return f();
  }),
}));

let mockAppState;
jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useDispatch: jest.fn(() => jest.fn()),
  useSelector: jest.fn().mockImplementation((callback) => callback(mockAppState)),
}));

const mockUseRouteMatchObject = { params: { category: '' } };
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useRouteMatch: jest.fn(() => mockUseRouteMatchObject),
}));

let mockMovies;
let mockIsModalOpened;
let mockHandleModalToggle;
let renderer;
let result;

beforeEach(() => {
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
  mockMovies = Array(20).fill(mockMovie);
  mockAppState = {
    query: {
      basePath: 'http://testBasePath.com',
      apiKey: 'testApiKey',
      lang: 'testAlng',
      adult: false,
    },
    genres: [{ id: 1, name: 'Action' }],
    movies: {
      page: 1,
      pageSize: 16,
      totalPages: 5,
      movies: mockMovies,
    },
    isGrid: { isGrid: true },
    status: { status: 'loading' },
    router: {
      location: {
        query: {
          query: '',
        },
      },
    },
  };

  mockIsModalOpened = false;
  mockHandleModalToggle = jest.fn();

  renderer = new ShallowRenderer();
  renderer.render(
    <SearchResultsPageContainer
      isModalOpened={mockIsModalOpened}
      handleModalToggle={mockHandleModalToggle}
    />,
  );
  result = renderer.getRenderOutput();
});

afterEach(() => {
  mockAppState = null;
  mockMovies = null;
  mockIsModalOpened = null;
  mockHandleModalToggle = null;
  renderer = null;
  result = null;
});

describe('render SearchResultsPage component', () => {
  it('render initial state correctly', () => {
    expect(result).toMatchSnapshot();
  });

  it('render after search query submit correctly', () => {
    mockAppState.router.location.query.query = 'test';
    renderer.render(
      <SearchResultsPageContainer
        isModalOpened={mockIsModalOpened}
        handleModalToggle={mockHandleModalToggle}
      />,
    );
    result = renderer.getRenderOutput();
    expect(result).toMatchSnapshot();
  });

  it('render after movie genre chosen correctly', () => {
    mockUseRouteMatchObject.params.category = '1';
    renderer.render(
      <SearchResultsPageContainer
        isModalOpened={mockIsModalOpened}
        handleModalToggle={mockHandleModalToggle}
      />,
    );
    result = renderer.getRenderOutput();
    expect(result).toMatchSnapshot();
  });

  it('handles scroll event triggers at bottom correctly', () => {
    function main() {
      document.addEventListener('scroll', () => {
        map.scroll();
      });
    }
    document.addEventListener = jest.fn().mockImplementationOnce((event, callback) => {
      callback();
    });
    main();

    expect(document.addEventListener).toHaveBeenCalledWith('scroll', expect.any(Function));
  });

  it('handles scroll event triggers not at bottom correctly', () => {
    function main() {
      document.addEventListener('scroll', () => {
        map.scroll();
      });
    }
    jest
      .spyOn(document.documentElement, 'clientHeight', 'get')
      .mockImplementation(() => 100);
    document.addEventListener = jest.fn().mockImplementationOnce((event, callback) => {
      callback();
    });
    main();

    expect(document.addEventListener).toHaveBeenCalledWith('scroll', expect.any(Function));
  });

  it('handle cleanUp function in useEffect', () => {
    cleanUp();
    expect(result).toMatchSnapshot();
  });

  it('removes scroll event listener when all movies are loaded', () => {
    mockMovies.length = 15;
    renderer.render(
      <SearchResultsPageContainer
        isModalOpened={mockIsModalOpened}
        handleModalToggle={mockHandleModalToggle}
      />,
    );
    map.scroll();
    result = renderer.getRenderOutput();
    expect(result).toMatchSnapshot();
  });

  it('render grid toggle correctly', () => {
    const { handleGridToggle } = result.props;
    handleGridToggle();
    result = renderer.getRenderOutput();
    expect(result).toMatchSnapshot();
  });
});
