import React from 'react';
import propTypes from 'prop-types';
import styles from './Logo.scss';

const Logo = ({ theme }) => (
  <p className={styles[theme]}><a href="/" title="Films">Films</a></p>
);

Logo.propTypes = {
  theme: propTypes.string,
};

Logo.defaultProps = {
  theme: 'primary',
};

export default Logo;
