import React from 'react';
import propTypes from 'prop-types';
import styles from './Title.scss';

const Title = ({ className, children }) => {
  switch (className) {
    case 'secondary':
    case 'tertiary':
      return (
        <h3 className={styles[className]}>
          { children}
        </h3>
      );
    default:
      return (
        <h1 className={styles[className]}>
          {children}
        </h1>
      );
  }
};

Title.propTypes = {
  className: propTypes.string.isRequired,
  children: propTypes.oneOfType([
    propTypes.element,
    propTypes.string,
  ]).isRequired,
};

export default Title;
