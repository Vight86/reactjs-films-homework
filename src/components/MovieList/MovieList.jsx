import React from 'react';
import propTypes from 'prop-types';
import MovieCard from '../MovieCard/index';
import styles from './MovieList.scss';

const MovieList = ({
  movies, genres, isGrid, movieTrailerKey, updateMovieTrailerKey,
}) => {
  const list = movies.map((movie) => (
    <MovieCard
      key={movie.id}
      movie={movie}
      genres={genres}
      isGrid={isGrid}
      movieTrailerKey={movieTrailerKey}
      updateMovieTrailerKey={updateMovieTrailerKey}
    />
  ));

  return (
    <section className={`${isGrid ? styles.movieListGrid : styles.movieListTable}`}>
      {list}
    </section>
  );
};

MovieList.propTypes = {
  movies: propTypes.arrayOf(propTypes.object).isRequired,
  genres: propTypes.arrayOf(propTypes.object).isRequired,
  isGrid: propTypes.bool.isRequired,
  movieTrailerKey: propTypes.string,
  updateMovieTrailerKey: propTypes.func.isRequired,
};

MovieList.defaultProps = {
  movieTrailerKey: null,
};

export default MovieList;
