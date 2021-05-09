import React from 'react';
import propTypes from 'prop-types';
import styles from './FilterList.scss';

const FilterList = ({ children }) => (
  <nav className={styles.filterList}>
    {children.map((item) => item)}
  </nav>
);

FilterList.propTypes = {
  children: propTypes.arrayOf(propTypes.element),
};

FilterList.defaultProps = {
  children: [
    <button type="button" key="key1">Button</button>,
    <button type="button" key="key2">Button</button>,
  ],
};
export default FilterList;
