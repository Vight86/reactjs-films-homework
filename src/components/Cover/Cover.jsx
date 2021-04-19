import React from 'react';
import propTypes from 'prop-types';
import styles from './Cover.scss';

const Cover = ({ className, children }) => (
  <figure className={styles[className]}>
    {children}
  </figure>
);

Cover.propTypes = {
  className: propTypes.string,
  children: propTypes.element,
};

Cover.defaultProps = {
  className: 'inCard',
  children: <img src="" alt="" />,
};

export default Cover;
