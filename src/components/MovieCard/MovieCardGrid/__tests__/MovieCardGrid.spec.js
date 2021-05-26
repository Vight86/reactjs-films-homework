import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import MovieCardGrid from '../index';

let mockUseRouteMatchObject;
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useRouteMatch: jest.fn(() => mockUseRouteMatchObject),
  Link: jest.fn(),
}));

let mockHandleModalToggle;
let mockData;
let renderer;
let result;

beforeEach(() => {
  mockUseRouteMatchObject = { url: '/tested' };
  mockHandleModalToggle = jest.fn(() => 'tested');

  mockData = {
    movie: {
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
    },
    genres: [{
      id: 1,
      name: 'Action',
    },
    {
      id: 2,
      name: 'SciFi',
    }],
    movieTrailerKey: 'test',
    isInfoShown: false,
    handleShowInfo() { },
    isModalOpened: false,
    handleModalToggle() {
      mockHandleModalToggle();
    },
  };

  renderer = new ShallowRenderer();
  renderer.render(<MovieCardGrid data={mockData} />);
  result = renderer.getRenderOutput();
});

afterEach(() => {
  mockHandleModalToggle.mockClear();
  mockData = null;
  renderer = null;
  result = null;
});

describe('render MovieCardGrid component', () => {
  it('render correctly', () => {
    expect(result).toMatchSnapshot();
  });

  it('render playButton click', () => {
    const playButton = result.props.children[0].props.children[1].props.children[0];
    playButton.props.onClick();
    result = renderer.getRenderOutput();
    expect(result).toMatchSnapshot();
  });

  it('render watchNow button click', () => {
    const watchNowButton = result.props.children[2].props.children[4];
    watchNowButton.props.onClick();
    result = renderer.getRenderOutput();
    expect(result).toMatchSnapshot();
  });

  it('render viewInfoButton button click', () => {
    let infoBlock = result.props.children[2].props.className;
    expect(infoBlock).toMatch(/infoBlock/);
    mockData.isInfoShown = true;
    renderer.render(<MovieCardGrid data={mockData} />);
    result = renderer.getRenderOutput();
    infoBlock = result.props.children[2].props.className;
    expect(infoBlock).toMatch(/infoBlock_active/);
  });
});
