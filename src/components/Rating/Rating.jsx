import React from 'react';
import propTypes from 'prop-types';
import styles from './Rating.scss';

const Rating = ({ className, children }) => (
  <p className={styles[className]}>
    {children}
  </p>
);

Rating.propTypes = {
  className: propTypes.string,
  children: propTypes.string,
};

Rating.defaultProps = {
  className: '',
  children: '0',
};

export default Rating;
