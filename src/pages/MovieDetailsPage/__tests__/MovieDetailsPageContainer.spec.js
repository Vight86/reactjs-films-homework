import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import MovieDetailsPageContainer from '../index';

jest.mock('react', () => ({
  ...jest.requireActual('react'),
  useEffect: jest.fn((f) => f()),
}));

let mockAppState = jest.fn();
jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useDispatch: jest.fn(() => jest.fn()),
  useSelector: jest.fn().mockImplementation((callback) => callback(mockAppState)),
}));

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useParams: jest.fn(() => ({ id: '2' })),
}));

window.scrollTo = jest.fn();

let renderer;
let result;

beforeEach(() => {
  mockAppState = {
    query: {
      basePath: 'http://testBasePath.com',
      apiKey: 'testApiKey',
      lang: 'testAlng',
      adult: false,
    },
    movies: {
      currentMovieDetails: {
        title: 'tested Title',
        backdroPath: '/tested',
        genres: [],
        runtime: 0,
        voteAverage: 0,
        overview: 'Tested overview',
      },
    },
  };

  renderer = new ShallowRenderer();
  renderer.render(
    <MovieDetailsPageContainer
      isModalOpened={false}
      handleModalToggle={jest.fn(() => 'test')}
    />,
  );
  result = renderer.getRenderOutput();
});

afterEach(() => {
  mockAppState = null;
  renderer = null;
  result = null;
});

describe('render MovieDetailsPageContainer component', () => {
  it('render component correctly', () => {
    expect(result).toMatchSnapshot();
  });

  it('renders Preloader while getting data', () => {
    mockAppState.movies.currentMovieDetails.title = '';

    renderer.render(
      <MovieDetailsPageContainer
        isModalOpened={false}
        handleModalToggle={jest.fn()}
      />,
    );
    expect(result).toMatchSnapshot();
  });
});
