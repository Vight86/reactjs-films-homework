import React from 'react';
import propTypes from 'prop-types';
import styles from './GenreList.scss';

const GenreList = ({ className, order, children }) => (
  <ul className={styles[className]} style={{ order }}>
    {children.map((item) => <li key={item}>{item}</li>)}
  </ul>
);

GenreList.propTypes = {
  className: propTypes.string,
  order: propTypes.number,
  children: propTypes.arrayOf(propTypes.string),
};

GenreList.defaultProps = {
  className: '',
  order: null,
  children: [''],
};

export default GenreList;
