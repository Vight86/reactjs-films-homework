import React from 'react';
import propTypes from 'prop-types';
import styles from './Cover.scss';

const Cover = ({ className, children }) => (
  <figure className={styles[className]}>
    {children}
  </figure>
);

Cover.propTypes = {
  className: propTypes.string.isRequired,
  children: propTypes.element,
};

Cover.defaultProps = {
  children: <img src="" alt="" />,
};

export default Cover;
