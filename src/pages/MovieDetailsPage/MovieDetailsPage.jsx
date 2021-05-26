import React, { useState } from 'react';
import propTypes from 'prop-types';

import Cover from '../../components/Cover/index';
import Title from '../../components/Title/index';
import GenreList from '../../components/GenreList/index';
import Runtime from '../../components/Runtime/index';
import Rating from '../../components/Rating/index';
import Button from '../../components/Button/index';
import MovieSynopsis from '../../components/MovieSynopsis/index';
import styles from './MovieDetailsPage.scss';

const MovieDetailsPage = ({
  id, currentMovieDetails, isModalOpened, handleModalToggle,
}) => {
  const [isSynopsisShown, setIsSynopsisShown] = useState(false);
  const showMovieSynopsis = () => {
    setIsSynopsisShown(!isSynopsisShown);
  };

  const {
    title, backdroPath, genres, runtime, voteAverage, overview,
  } = currentMovieDetails;

  const genreNames = genres.map((genre) => genre.name);

  return (
    <section className={styles.movieDetails}>
      <Cover className="inHeroSection">
        <img src={`https://image.tmdb.org/t/p/original${backdroPath}`} alt={title} />
      </Cover>
      <div className={styles.movieInfo}>
        <div className={styles.movieInfo__left}>
          <Title className="primary">
            {title}
          </Title>
          <div className={styles.movieSubInfo}>
            <GenreList className="primary">{genreNames}</GenreList>
            <Runtime>{runtime}</Runtime>
          </div>
          <Rating className="primary" withStars>{voteAverage}</Rating>
        </div>
        <MovieSynopsis className="primary" isShown={isSynopsisShown}>{overview}</MovieSynopsis>
        <div className={styles.movieInfo__right}>
          <Button className="secondary" onClick={() => handleModalToggle(id, isModalOpened)}>Watch Now</Button>
          <Button className="secondary" onClick={showMovieSynopsis}>View Info</Button>
        </div>
      </div>
    </section>
  );
};

MovieDetailsPage.propTypes = {
  id: propTypes.string.isRequired,
  currentMovieDetails: propTypes.shape({
    title: propTypes.string.isRequired,
    backdroPath: propTypes.string.isRequired,
    genres: propTypes.arrayOf(propTypes.object).isRequired,
    runtime: propTypes.number.isRequired,
    voteAverage: propTypes.number.isRequired,
    overview: propTypes.string.isRequired,
  }).isRequired,
  isModalOpened: propTypes.bool.isRequired,
  handleModalToggle: propTypes.func.isRequired,
};

export default MovieDetailsPage;
