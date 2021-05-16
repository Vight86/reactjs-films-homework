import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import MovieCard from '../index';

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
const mockGenres = [{
  id: 1,
  name: 'Action',
},
{
  id: 2,
  name: 'SciFi',
}];
const mockMovieTrailerKey = 'test';
const mockUpdateMovieTrailerKey = jest.fn(() => 'tested');

let renderer;
let result;

beforeEach(() => {
  renderer = new ShallowRenderer();
  renderer.render(
    <MovieCard
      movie={mockMovie}
      genres={mockGenres}
      isGrid={false}
      movieTrailerKey={mockMovieTrailerKey}
      updateMovieTrailerKey={mockUpdateMovieTrailerKey}
    />,
  );
  result = renderer.getRenderOutput();
});

afterEach(() => {
  renderer = null;
  result = null;
  jest.clearAllMocks();
});

describe('render MovieCard component', () => {
  it('render table layout correctly', () => {
    expect(result).toMatchSnapshot();
  });

  it('render grid layout correctly', () => {
    renderer.render(
      <MovieCard
        movie={mockMovie}
        genres={mockGenres}
        isGrid
        movieTrailerKey={mockMovieTrailerKey}
        updateMovieTrailerKey={mockUpdateMovieTrailerKey}
      />,
    );
    result = renderer.getRenderOutput();
    expect(result).toMatchSnapshot();
  });

  it('render handleModalToggle click correctly', () => {
    jest.useFakeTimers();
    const { handleModalToggle } = result.props.data;
    handleModalToggle('test', true);
    expect(document.body.style).toHaveProperty('overflow', '');
    handleModalToggle(null, false);
    jest.runAllTimers();
    expect(document.body.style).toHaveProperty('overflow', 'hidden');
    expect(setTimeout).toHaveBeenCalledTimes(2);
  });

  it('render handleShowInfo click correctly', () => {
    const { handleShowInfo } = result.props.data;
    handleShowInfo();
    result = renderer.getRenderOutput();
    expect(result).toMatchSnapshot();
  });
});
