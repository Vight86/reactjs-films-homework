import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import SearchResultsPage from '../SearchResultsPage';

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

const mockHandleGridToggle = jest.fn(() => 'handleGridToggle tested');
const mockIsGrid = true;
const mockMovieTrailerKey = 'testMovieTrailerKey';
const mockUpdateMovieTrailerKey = jest.fn(() => 'updateMovieTrailerKey tested');
const mockGetTrending = jest.fn(() => 'getTrending tested');
const mockGetTopRatedMovies = jest.fn(() => 'getTopRatedMovies tested');
const mockGetUpcoming = jest.fn(() => 'getUpcoming tested');
const mockFilterMovies = jest.fn(() => 'filterMovies tested');
const mockStatus = 'testStatus';

let renderer;
let result;

beforeEach(() => {
  renderer = new ShallowRenderer();
  renderer.render(
    <SearchResultsPage
      movies={mockMovies}
      genres={mockGenres}
      isGrid={mockIsGrid}
      handleGridToggle={mockHandleGridToggle}
      movieTrailerKey={mockMovieTrailerKey}
      updateMovieTrailerKey={mockUpdateMovieTrailerKey}
      getTrending={mockGetTrending}
      getTopRatedMovies={mockGetTopRatedMovies}
      getUpcoming={mockGetUpcoming}
      status={mockStatus}
      filterMovies={mockFilterMovies}
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
        movieTrailerKey={mockMovieTrailerKey}
        updateMovieTrailerKey={mockUpdateMovieTrailerKey}
        getTrending={mockGetTrending}
        getTopRatedMovies={mockGetTopRatedMovies}
        getUpcoming={mockGetUpcoming}
        status={mockStatus}
        filterMovies={mockFilterMovies}
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
        isGrid={false}
        handleGridToggle={mockHandleGridToggle}
        movieTrailerKey={mockMovieTrailerKey}
        updateMovieTrailerKey={mockUpdateMovieTrailerKey}
        getTrending={mockGetTrending}
        getTopRatedMovies={mockGetTopRatedMovies}
        getUpcoming={mockGetUpcoming}
        status="loading"
        filterMovies={mockFilterMovies}
      />,
    );
    result = renderer.getRenderOutput();
    expect(result).toMatchSnapshot();
  });
});
