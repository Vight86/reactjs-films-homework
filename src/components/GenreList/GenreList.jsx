import React from 'react';
import propTypes from 'prop-types';
import styles from './GenreList.scss';

const GenreList = ({ className, order, children }) => (
  <p className={styles[className]} style={{ order }}>
    {children}
  </p>
);

GenreList.propTypes = {
  className: propTypes.string,
  order: propTypes.number,
  children: propTypes.string,
};

GenreList.defaultProps = {
  className: '',
  order: null,
  children: '',
};

export default GenreList;
