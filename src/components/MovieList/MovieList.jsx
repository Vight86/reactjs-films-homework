import React from 'react';
import propTypes from 'prop-types';
import MovieCard from '../MovieCard/index';
import styles from './MovieList.scss';

const MovieList = ({ movies }) => {
  const list = movies.map((movie) => <MovieCard key={movie.title} movie={movie} />);

  return (
    <section className={styles.movieList}>
      { list}
    </section>
  );
};

MovieList.propTypes = {
  movies: propTypes.arrayOf(propTypes.object),
};

MovieList.defaultProps = {
  movies: [],
};

export default MovieList;
