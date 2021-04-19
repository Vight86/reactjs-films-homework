import React from 'react';
import Header from '../../components/Header/index';
import MovieList from '../../components/MovieList/index';
import FilterList from '../../components/FilterList/index';
import Button from '../../components/Button/index';
import SelectButton from '../../components/SelectButton/index';
import ToggleButton from '../../components/ToggleButton/index';
import image from '../../components/MovieCard/movieStab.jpg';
import styles from './SearchResultsPage.scss';

const stab = {
  image,
  title: 'Independance day',
  rating: 3.9,
  genre: ['scifi', 'comedy'],
  info: `There are growing dangers in
    the wizarding world of 1926 New York.
    Something mysterious is leaving a path of destruction in the streets,
    threatening to expose the wizarding`,
};

const movies = Array(16).fill(stab);
const genres = ['action', 'scifi'];

const SearchResultsPage = () => (
  <main className={styles.main}>
    <Header className="secondary">
      <FilterList>
        <Button className="filterButton">Trending</Button>
        <Button className="filterButton">Top rated</Button>
        <Button className="filterButton">Coming soon</Button>
        <SelectButton genres={genres} />
      </FilterList>
      <ToggleButton className="toggleGridButton" />
    </Header>
    <MovieList movies={movies} />
  </main>
);

export default SearchResultsPage;
