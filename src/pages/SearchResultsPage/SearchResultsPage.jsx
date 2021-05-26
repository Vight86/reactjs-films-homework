import React from 'react';
import propTypes from 'prop-types';
import Header from '../../components/Header/index';
import MovieList from '../../components/MovieList/index';
import Navigation from '../../components/Navigation/index';
import ToggleButton from '../../components/ToggleButton/index';
import Preloader from '../../components/Preloader/index';
import NoDataToShow from '../../components/NoDataToShow/index';
import styles from './SearchResultsPage.scss';

const SearchResultsPage = ({
  movies,
  genres,
  isGrid,
  handleGridToggle,
  status,
  isModalOpened,
  handleModalToggle,
}) => (
  <>
    <main className={styles.main}>
      <Header className="secondary">
        <Navigation genres={genres} />
        <ToggleButton
          className="toggleGridButton"
          isGrid={isGrid}
          handleGridToggle={handleGridToggle}
        />
      </Header>
      {status === 'no-movies'
        ? <NoDataToShow />
        : (
          <MovieList
            movies={movies}
            genres={genres}
            isGrid={isGrid}
            isModalOpened={isModalOpened}
            handleModalToggle={handleModalToggle}
          />
        )}
    </main>
    { status !== 'loaded' ? <Preloader /> : null}
  </>
);

SearchResultsPage.propTypes = {
  movies: propTypes.arrayOf(propTypes.object).isRequired,
  genres: propTypes.arrayOf(propTypes.object).isRequired,
  isGrid: propTypes.bool.isRequired,
  handleGridToggle: propTypes.func.isRequired,
  status: propTypes.string.isRequired,
  isModalOpened: propTypes.bool.isRequired,
  handleModalToggle: propTypes.func.isRequired,
};

export default SearchResultsPage;
