import React, { useState } from 'react';
import styles from './MovieDetailsPage.scss';
import Cover from '../../components/Cover/index';
import Title from '../../components/Title/index';
import GenreList from '../../components/GenreList/index';
import Runtime from '../../components/Runtime/index';
import Rating from '../../components/Rating/index';
import Button from '../../components/Button/index';
import image from '../../components/MovieCard/movieStab.jpg';
import MovieSynopsis from '../../components/MovieSynopsis/index';

const stab = {
  image,
  title: 'Independance day',
  runtime: 240,
  rating: 1.9,
  genre: ['scifi', 'comedy'],
  info: `There are growing dangers in
    the wizarding world of 1926 New York.
    Something mysterious is leaving a path of destruction in the streets,
    threatening to expose the wizarding`,
};

const MovieDetailsPage = () => {
  const [isSynopsisShown, setIsSynopsisShown] = useState(false);
  const showMovieSynopsis = () => {
    setIsSynopsisShown(!isSynopsisShown);
  };

  return (
    <section className={styles.movieDetails}>
      <Cover className="inHeroSection">
        <img src={stab.image} alt={stab.title} />
      </Cover>
      <div className={styles.movieInfo}>
        <div className={styles.movieInfo__left}>
          <Title className="primary">{stab.title}</Title>
          <div className={styles.movieSubInfo}>
            <GenreList className="primary">{stab.genre}</GenreList>
            <Runtime>{stab.runtime}</Runtime>
          </div>
          <Rating className="primary" withStars>{stab.rating}</Rating>
        </div>
        <MovieSynopsis className="primary" isShown={isSynopsisShown}>{stab.info}</MovieSynopsis>
        <div className={styles.movieInfo__right}>
          <Button className="secondary">Watch Now</Button>
          <Button className="secondary" onClick={showMovieSynopsis}>View Info</Button>
        </div>
      </div>
    </section>
  );
};

export default MovieDetailsPage;
