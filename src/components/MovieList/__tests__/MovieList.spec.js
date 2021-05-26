import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import MovieList from '../index';

let mockMovie;
let mockMovies;
let mockGenres;
let mockhandleModalToggle;
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

  mockMovies = Array(2).fill(mockMovie);

  mockGenres = [{
    id: 1,
    name: 'Action',
  },
  {
    id: 2,
    name: 'SciFi',
  }];

  mockhandleModalToggle = jest.fn(() => 'tested');

  renderer = new ShallowRenderer();
  renderer.render(
    <MovieList
      movies={mockMovies}
      genres={mockGenres}
      isGrid={false}
      isModalOpened={false}
      handleModalToggle={mockhandleModalToggle}
    />,
  );
  result = renderer.getRenderOutput();
});

afterEach(() => {
  mockMovie = null;
  mockMovies = null;
  mockGenres = null;
  mockhandleModalToggle.mockClear();
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
        isModalOpened={false}
        handleModalToggle={mockhandleModalToggle}
      />,
    );
    result = renderer.getRenderOutput();
    expect(result).toMatchSnapshot();
  });
});
