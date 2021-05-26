import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import SearchResultsPage from '../SearchResultsPage';

let mockMovies;
let mockGenres;
let mockHandleGridToggle;
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
  mockMovies = Array(2).fill(mockMovie);

  mockGenres = [{
    id: 1,
    name: 'Action',
  },
  {
    id: 2,
    name: 'SciFi',
  }];

  mockHandleGridToggle = jest.fn();
  mockHandleModalToggle = jest.fn();

  renderer = new ShallowRenderer();
  renderer.render(
    <SearchResultsPage
      movies={mockMovies}
      genres={mockGenres}
      isGrid
      handleGridToggle={mockHandleGridToggle}
      isModalOpened={false}
      handleModalToggle={mockHandleModalToggle}
      status="loaded"
    />,
  );
  result = renderer.getRenderOutput();
});

afterEach(() => {
  renderer = null;
  result = null;
});

describe('render SearchResultsPage component', () => {
  it('render SearchResultsPage grid view correctly', () => {
    expect(result).toMatchSnapshot();
  });

  it('render SearchResultsPage table view correctly', () => {
    renderer.render(
      <SearchResultsPage
        movies={mockMovies}
        genres={mockGenres}
        isGrid={false}
        handleGridToggle={mockHandleGridToggle}
        isModalOpened={false}
        handleModalToggle={mockHandleModalToggle}
        status="loaded"
      />,
    );
    result = renderer.getRenderOutput();
    expect(result).toMatchSnapshot();
  });

  it('render loading status correctly', () => {
    renderer.render(
      <SearchResultsPage
        movies={mockMovies}
        genres={mockGenres}
        isGrid
        handleGridToggle={mockHandleGridToggle}
        isModalOpened={false}
        handleModalToggle={mockHandleModalToggle}
        status="loading"
      />,
    );
    result = renderer.getRenderOutput();
    expect(result).toMatchSnapshot();
  });

  it('render no-movies status correctly', () => {
    renderer.render(
      <SearchResultsPage
        movies={mockMovies}
        genres={mockGenres}
        isGrid
        handleGridToggle={mockHandleGridToggle}
        isModalOpened={false}
        handleModalToggle={mockHandleModalToggle}
        status="no-movies"
      />,
    );
    result = renderer.getRenderOutput();
    expect(result).toMatchSnapshot();
  });
});
