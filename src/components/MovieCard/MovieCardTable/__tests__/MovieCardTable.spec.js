import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import MovieCardTable from '../index';

const mockHandleModalToggle = jest.fn(() => 'tested');

const mockData = {
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

let renderer;
let result;

beforeEach(() => {
  renderer = new ShallowRenderer();
  renderer.render(<MovieCardTable data={mockData} />);
  result = renderer.getRenderOutput();
});

afterEach(() => {
  renderer = null;
  result = null;
});

describe('render MovieCardTable component', () => {
  it('render component with props', () => {
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
    renderer.render(<MovieCardTable data={mockData} />);
    result = renderer.getRenderOutput();
    infoBlock = result.props.children[2].props.className;
    expect(infoBlock).toMatch(/infoBlock_active/);
  });
});
