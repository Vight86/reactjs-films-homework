import React, { useState } from 'react';
import propTypes from 'prop-types';
import styles from './MovieCard.scss';
import Button from '../Button/index';
import Title from '../Title/index';
import GenreList from '../GenreList/index';
import Rating from '../Rating/index';
import Cover from '../Cover/index';
import MovieSynopsis from '../MovieSynopsis/index';

const MovieCard = ({ movie }) => {
  const {
    title, rating, image, genre, info,
  } = movie;

  const [isInfoShown, setIsInfoShown] = useState(false);
  const handleClick = () => setIsInfoShown(!isInfoShown);

  return (
    <article className={styles.movieCard}>
      <section className={styles.poster}>
        <Cover className="inCard">
          <img src={image} alt={title} />
        </Cover>
        <div className={styles.viewInfo}>
          <Button className="playButton" />
          <span className={styles.watchNowText}>Watch Now</span>
          <Button className="primary" onClick={handleClick}>View Info</Button>
        </div>
      </section>
      <section className={styles.generalInfo}>
        <Title className="secondary">{title}</Title>
        <GenreList className="secondary" order={3}>{genre}</GenreList>
        <Rating className="secondary">{rating}</Rating>
      </section>
      <section className={`${styles.infoBlock}${isInfoShown === true ? ` ${styles.infoBlock_active}` : ''}`}>
        <Button className="closeButton" onClick={handleClick}>&times;</Button>
        <section className={styles.generalInfo}>
          <Title className="tertiary">{title}</Title>
          <GenreList className="secondary" order={3}>{genre}</GenreList>
          <Rating className="secondary">{rating}</Rating>
        </section>
        <MovieSynopsis className="secondary">{info}</MovieSynopsis>
        <Button className="secondary">Watch Now</Button>
      </section>
    </article>
  );
};

MovieCard.propTypes = {
  movie: propTypes.shape({
    // eslint-disable-next-line react/forbid-prop-types
    image: propTypes.object,
    title: propTypes.string,
    rating: propTypes.number,
    genre: propTypes.arrayOf(propTypes.string),
    info: propTypes.string,
  }),
};

MovieCard.defaultProps = {
  movie: {
    image: { src: '' },
    title: '',
    rating: 0,
    genre: [],
    info: '',
  },
};

export default MovieCard;
