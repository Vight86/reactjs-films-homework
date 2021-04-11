import React from 'react';
import propTypes from 'prop-types';
import styles from './FilterList.scss';

const FilterList = ({ children }) => (
  <nav className={styles.filterList}>
    <ul>
      {children.map((item) => <li key={item}>{item}</li>)}
    </ul>
  </nav>
);

FilterList.propTypes = {
  children: propTypes.arrayOf(propTypes.element),
};

FilterList.defaultProps = {
  children: [
    <button type="button">Button</button>,
    <button type="button">Button</button>,
  ],
};
export default FilterList;
