import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import MovieList from '../index';

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

const mockMovies = Array(2).fill(mockMovie);

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
    <MovieList
      movies={mockMovies}
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
});

describe('render MovieList component', () => {
  it('render table layout correctly', () => {
    expect(result).toMatchSnapshot();
  });

  it('render grid layout correctly', () => {
    renderer.render(
      <MovieList
        movies={mockMovies}
        genres={mockGenres}
        isGrid
        movieTrailerKey={mockMovieTrailerKey}
        updateMovieTrailerKey={mockUpdateMovieTrailerKey}
      />,
    );
    result = renderer.getRenderOutput();
    expect(result).toMatchSnapshot();
  });
});
