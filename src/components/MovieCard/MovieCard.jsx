import React, { useState } from 'react';
import propTypes from 'prop-types';
import MovieCardGrid from './MovieCardGrid/index';
import MovieCardTable from './MovieCardTable/index';

const MovieCard = ({
  movie, genres, isGrid, isModalOpened, handleModalToggle,
}) => {
  const [isInfoShown, setIsInfoShown] = useState(false);
  const handleShowInfo = () => setIsInfoShown(!isInfoShown);

  const data = {
    movie,
    genres,
    isInfoShown,
    handleShowInfo,
    isModalOpened,
    handleModalToggle,
  };

  const movieCard = isGrid ? <MovieCardGrid data={data} /> : <MovieCardTable data={data} />;

  return movieCard;
};

MovieCard.propTypes = {
  movie: propTypes.shape({
    adult: propTypes.bool,
    backdropPath: propTypes.string,
    genreIds: propTypes.arrayOf(propTypes.number),
    id: propTypes.number,
    originalLanguage: propTypes.string,
    originalTitle: propTypes.string,
    overview: propTypes.string,
    popularity: propTypes.number,
    posterPath: propTypes.string,
    releaseDate: propTypes.string,
    title: propTypes.string,
    video: propTypes.bool,
    voteAverage: propTypes.number,
    voteCount: propTypes.number,
  }).isRequired,
  genres: propTypes.arrayOf(propTypes.object).isRequired,
  isGrid: propTypes.bool.isRequired,
  isModalOpened: propTypes.bool.isRequired,
  handleModalToggle: propTypes.func.isRequired,
};

export default MovieCard;
