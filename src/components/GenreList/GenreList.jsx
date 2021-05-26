import React from 'react';
import propTypes from 'prop-types';
import styles from './GenreList.scss';

const GenreList = ({ className, order, children }) => (
  <ul className={styles[className]} style={{ order }}>
    {children.map((item) => <li key={item}>{item}</li>)}
  </ul>
);

GenreList.propTypes = {
  className: propTypes.string.isRequired,
  order: propTypes.number,
  children: propTypes.arrayOf(propTypes.string).isRequired,
};

GenreList.defaultProps = {
  order: null,

};

export default GenreList;
