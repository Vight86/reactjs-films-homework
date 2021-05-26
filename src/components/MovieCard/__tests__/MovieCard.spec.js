import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import MovieCard from '../index';

let mockMovie;
let mockGenres;
let mockHandleModalToggle;
let renderer;
let result;

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
  mockGenres = [{
    id: 1,
    name: 'Action',
  },
  {
    id: 2,
    name: 'SciFi',
  }];
  mockHandleModalToggle = jest.fn(() => 'tested');

  renderer = new ShallowRenderer();
  renderer.render(
    <MovieCard
      key={mockMovie.id}
      movie={mockMovie}
      genres={mockGenres}
      isGrid={false}
      isModalOpened={false}
      handleModalToggle={mockHandleModalToggle}
    />,
  );
  result = renderer.getRenderOutput();
});

afterEach(() => {
  mockMovie = null;
  mockGenres = null;
  mockHandleModalToggle.mockClear();
  renderer = null;
  result = null;
});

describe('render MovieCard component', () => {
  it('render table layout correctly', () => {
    expect(result).toMatchSnapshot();
  });

  it('render grid layout correctly', () => {
    renderer.render(
      <MovieCard
        key={mockMovie.id}
        movie={mockMovie}
        genres={mockGenres}
        isGrid
        isModalOpened={false}
        handleModalToggle={mockHandleModalToggle}
      />,
    );
    result = renderer.getRenderOutput();
    expect(result).toMatchSnapshot();
  });

  it('render handleModalToggle click correctly', () => {
    const { handleModalToggle } = result.props.data;
    handleModalToggle('test', true);
    expect(mockHandleModalToggle).toHaveBeenCalled();
    handleModalToggle(null, false);
    expect(mockHandleModalToggle).toHaveBeenCalled();
  });

  it('render handleShowInfo click correctly', () => {
    const { handleShowInfo } = result.props.data;
    handleShowInfo();
    result = renderer.getRenderOutput();
    expect(result).toMatchSnapshot();
  });
});
