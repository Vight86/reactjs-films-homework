import React from 'react';
import propTypes from 'prop-types';
import styles from './MovieSynopsis.scss';

const MovieSynopsis = ({ className, isShown, children }) => (
  <p className={`${styles[className]} ${isShown ? styles.active : ''}`.trim()}>
    <span>
      {children}
    </span>
  </p>
);

MovieSynopsis.propTypes = {
  className: propTypes.string.isRequired,
  isShown: propTypes.bool.isRequired,
  children: propTypes.string.isRequired,
};

export default MovieSynopsis;
