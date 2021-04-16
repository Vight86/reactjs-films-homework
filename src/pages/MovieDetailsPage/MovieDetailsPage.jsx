import React from 'react';
import styles from './MovieDetailsPage.scss';
import Cover from '../../components/Cover/index';
import Title from '../../components/Title/index';
import GenreList from '../../components/GenreList/index';
import Rating from '../../components/Rating/index';
import Button from '../../components/Button/index';
import image from '../../components/MovieCard/movieStab.jpg';

const stab = {
  image,
  title: 'Independance day',
  rating: '3.9',
  genre: ['scifi', 'comedy'],
  info: `There are growing dangers in
    the wizarding world of 1926 New York.
    Something mysterious is leaving a path of destruction in the streets,
    threatening to expose the wizarding`,
};

const MovieDetailsPage = () => (
  <section className={styles.movieDetails}>
    <Cover className="inHeroSection">
      <img src={stab.image} alt={stab.title} />
    </Cover>
    <div className={styles.movieInfo}>
      <div className={styles.movieInfo__left}>
        <Title className="primary">{stab.title}</Title>
        <GenreList className="primary">{stab.genre.join(' ')}</GenreList>
        <Rating className="primary">{stab.rating}</Rating>
      </div>
      <div className={styles.movieInfo__right}>
        <Button className="secondary">Watch Now</Button>
        <Button className="secondary">View Info</Button>
      </div>
    </div>
  </section>
);

export default MovieDetailsPage;
