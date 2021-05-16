import React from 'react';
import propTypes from 'prop-types';
import Button from '../../Button/index';
import Title from '../../Title/index';
import GenreList from '../../GenreList/index';
import Rating from '../../Rating/index';
import Cover from '../../Cover/index';
import MovieSynopsis from '../../MovieSynopsis/index';
import Modal from '../../Modal/index';
import styles from './MovieCardTable.scss';

const MovieCardTable = ({ data }) => {
  const {
    movie,
    genres,
    movieTrailerKey,
    isInfoShown,
    handleShowInfo,
    isModalOpened,
    handleModalToggle,
  } = data;

  const {
    id, title, voteAverage, posterPath, backdropPath, genreIds, overview,
  } = movie;

  const genreList = genreIds.map((genreId) => genres.find((item) => item.id === genreId).name);

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
        <Title className="secondary_table">{title}</Title>
        <Rating className="secondary_table">{voteAverage}</Rating>
        <GenreList className="secondary">{genreList}</GenreList>
        <MovieSynopsis className="tertiary">{overview}</MovieSynopsis>
      </section>
      <section
        className={`${styles.infoBlock} ${isInfoShown === true ? styles.infoBlock_active : ''}`.trim()}
      >
        <Cover className="backdropCover">
          {backdropPath && <img src={`https://image.tmdb.org/t/p/w780${backdropPath}`} alt={title} />}
        </Cover>
        <Button className="closeButton_inMovieCard" onClick={handleShowInfo}>&times;</Button>
        <section className={styles.generalInfo}>
          <Title className="secondary_table-light">{title}</Title>
          <Rating className="secondary_table">{voteAverage}</Rating>
          <GenreList className="secondary">{genreList}</GenreList>
        </section>
        <MovieSynopsis className="secondary_table">{overview}</MovieSynopsis>
        <Button className="secondary" onClick={() => handleModalToggle(id, isModalOpened)}>Watch Now</Button>
      </section>
      <Modal
        isModalOpened={isModalOpened}
        movieTrailerKey={movieTrailerKey}
        handleModalToggle={handleModalToggle}
      />
    </article>
  );
};

MovieCardTable.propTypes = {
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
    movieTrailerKey: propTypes.string,
    isInfoShown: propTypes.bool,
    handleShowInfo: propTypes.func,
    isModalOpened: propTypes.bool,
    handleModalToggle: propTypes.func,
  }).isRequired,
};

export default MovieCardTable;
