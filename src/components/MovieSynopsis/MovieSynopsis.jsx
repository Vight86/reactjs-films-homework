import React from 'react';
import propTypes from 'prop-types';
import styles from './MovieSynopsis.scss';

const MovieSynopsis = ({ className, isShown, children }) => (
  <p className={`${styles[className]}${isShown ? ` ${styles.active}` : ''}`}>
    <span>
      {children}
    </span>
  </p>
);

MovieSynopsis.propTypes = {
  className: propTypes.string,
  isShown: propTypes.bool,
  children: propTypes.string,
};

MovieSynopsis.defaultProps = {
  className: 'primary',
  isShown: false,
  children: '',
};

export default MovieSynopsis;
