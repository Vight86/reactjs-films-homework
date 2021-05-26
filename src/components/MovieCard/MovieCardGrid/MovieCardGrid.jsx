import React from 'react';
import propTypes from 'prop-types';
import { Link, useRouteMatch } from 'react-router-dom';
import Button from '../../Button/index';
import Title from '../../Title/index';
import GenreList from '../../GenreList/index';
import Rating from '../../Rating/index';
import Cover from '../../Cover/index';
import MovieSynopsis from '../../MovieSynopsis/index';
import styles from './MovieCardGrid.scss';

const MovieCardGrid = ({ data }) => {
  const {
    movie,
    genres,
    isInfoShown,
    handleShowInfo,
    isModalOpened,
    handleModalToggle,
  } = data;

  const {
    id, title, voteAverage, posterPath, backdropPath, genreIds, overview,
  } = movie;

  const genreList = genreIds.map((genreId) => genres.find((genre) => genre.id === genreId)?.name);

  const url = useRouteMatch()?.url;

  return (
    <article className={styles.movieCard}>

      <section className={styles.poster}>
        <Cover className="inCard">
          {posterPath && <img src={`https://image.tmdb.org/t/p/w780${posterPath}`} alt={title} />}
        </Cover>
        <div className={styles.viewInfo}>
          <Button className="playButton" onClick={() => handleModalToggle(id, isModalOpened)} />
          <span className={styles.watchNowText}>Watch Now</span>
          <Button className="primary" onClick={handleShowInfo}>View Info</Button>
        </div>
      </section>

      <section className={styles.generalInfo}>
        <Title className="secondary">
          <Link to={`${url}/movie/${id}`}>
            {title}
          </Link>
        </Title>
        <GenreList className="secondary" order={3}>{genreList}</GenreList>
        <Rating className="secondary" withStars={false}>{voteAverage}</Rating>
      </section>

      <section
        className={`${styles.infoBlock} ${isInfoShown === true ? styles.infoBlock_active : ''}`.trim()}
      >
        <Cover className="backdropCover">
          {backdropPath && <img src={`https://image.tmdb.org/t/p/w780${posterPath}`} alt={title} />}
        </Cover>
        <Button className="closeButton_inMovieCard" onClick={handleShowInfo}>&times;</Button>

        <section className={styles.generalInfo}>
          <Title className="tertiary">
            <Link to={`${url}/movie/${id}`}>
              {title}
            </Link>
          </Title>
          <GenreList className="secondary" order={3}>{genreList}</GenreList>
          <Rating className="secondary" withStars={false}>{voteAverage}</Rating>
        </section>

        <MovieSynopsis className="secondary_grid" isShown={false}>{overview}</MovieSynopsis>
        <Button className="secondary" onClick={() => handleModalToggle(id, isModalOpened)}>Watch Now</Button>
      </section>

    </article>
  );
};

MovieCardGrid.propTypes = {
  data: propTypes.shape({
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
    }),
    genres: propTypes.arrayOf(propTypes.object),
    isInfoShown: propTypes.bool,
    handleShowInfo: propTypes.func,
    isModalOpened: propTypes.bool,
    handleModalToggle: propTypes.func,
  }).isRequired,
};

export default MovieCardGrid;
