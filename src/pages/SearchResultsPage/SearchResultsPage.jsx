import React from 'react';
import propTypes from 'prop-types';
import Header from '../../components/Header/index';
import MovieList from '../../components/MovieList/index';
import FilterList from '../../components/FilterList/index';
import Button from '../../components/Button/index';
import SelectButton from '../../components/SelectButton/index';
import ToggleButton from '../../components/ToggleButton/index';
import Preloader from '../../components/Preloader/index';
import styles from './SearchResultsPage.scss';

const SearchResultsPage = ({
  movies,
  genres,
  isGrid,
  handleGridToggle,
  movieTrailerKey,
  updateMovieTrailerKey,
  getTrending,
  getTopRatedMovies,
  getUpcoming,
  status,
  filterMovies,
}) => (
  <>
    <main className={styles.main}>
      <Header className="secondary">
        <FilterList>
          <Button className="filterButton" onClick={getTrending}>Trending</Button>
          <Button className="filterButton" onClick={getTopRatedMovies}>Top rated</Button>
          <Button className="filterButton" onClick={getUpcoming}>Coming soon</Button>
          <SelectButton genres={genres} filterMovies={filterMovies}>Genre</SelectButton>
        </FilterList>
        <ToggleButton className="toggleGridButton" isGrid={isGrid} handleGridToggle={handleGridToggle} />
      </Header>
      <MovieList
        movies={movies}
        genres={genres}
        isGrid={isGrid}
        movieTrailerKey={movieTrailerKey}
        updateMovieTrailerKey={updateMovieTrailerKey}
      />
    </main>
    { status === 'loading' ? <Preloader /> : null}
  </>
);

SearchResultsPage.propTypes = {
  movies: propTypes.arrayOf(propTypes.object).isRequired,
  genres: propTypes.arrayOf(propTypes.object).isRequired,
  isGrid: propTypes.bool.isRequired,
  handleGridToggle: propTypes.func.isRequired,
  movieTrailerKey: propTypes.string,
  updateMovieTrailerKey: propTypes.func.isRequired,
  getTrending: propTypes.func.isRequired,
  getTopRatedMovies: propTypes.func.isRequired,
  getUpcoming: propTypes.func.isRequired,
  filterMovies: propTypes.func.isRequired,
  status: propTypes.string.isRequired,
};

SearchResultsPage.defaultProps = {
  movieTrailerKey: '',
};

export default SearchResultsPage;
