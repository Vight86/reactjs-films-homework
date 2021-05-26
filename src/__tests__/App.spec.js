import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import App from '../App';

let mockAppState;
jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useDispatch: jest.fn(() => jest.fn()),
  useSelector: jest.fn().mockImplementation((callback) => callback(mockAppState)),
}));

let mockIsExact;
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-redux'),
  useRouteMatch: jest.fn(() => ({ isExact: mockIsExact })),
  Redirect: jest.fn(),
  Route: jest.fn(),
}));

let renderer;
let result;

beforeEach(() => {
  mockAppState = {
    query: {
      basePath: 'http://testPath.com',
      apiKey: 'testKey',
    },
    movies: {
      currentMovieTrailerKey: 'test',
    },
  };
  mockIsExact = true;
  renderer = new ShallowRenderer();
  renderer.render(<App />);
  result = renderer.getRenderOutput();
});

afterEach(() => {
  mockAppState = null;
  mockIsExact = null;
  renderer = null;
  result = null;
});

describe('render App component', () => {
  it('App renders correctly', () => {
    expect(result).toMatchSnapshot();
  });

  it('renders no redirect from inner routes', () => {
    mockIsExact = false;
    renderer.render(<App />);
    result = renderer.getRenderOutput();
    expect(result).toMatchSnapshot();
  });

  it('renders handleSearchSubmit correctly', () => {
    const searchForm = result.props.children[0].props.children.props.children[1];
    const mockQuery = 'test';
    const mockEvent = { preventDefault: jest.fn() };
    const { handleSearchSubmit } = searchForm.props;
    handleSearchSubmit(mockQuery, mockEvent);
    result = renderer.getRenderOutput();
    expect(result).toMatchSnapshot();
  });

  it('renders handleModalToggle to open modal correctly', () => {
    const { handleModalToggle } = result.props.children[4].props.children.props;
    handleModalToggle('testId', true);
    result = renderer.getRenderOutput();
    expect(result).toMatchSnapshot();
  });

  it('renders handleModalToggle to close modal correctly', () => {
    const { handleModalToggle } = result.props.children[4].props.children.props;
    handleModalToggle(null, false);
    result = renderer.getRenderOutput();
    expect(result).toMatchSnapshot();
  });
});
