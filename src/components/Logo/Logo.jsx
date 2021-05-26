import React from 'react';
import propTypes from 'prop-types';
import styles from './Logo.scss';

const Logo = ({ className, children }) => (
  <p className={styles[className]}>
    <a href="/" title="Films">
      {children}
    </a>
  </p>
);

Logo.propTypes = {
  className: propTypes.string.isRequired,
  children: propTypes.string.isRequired,
};

export default Logo;
