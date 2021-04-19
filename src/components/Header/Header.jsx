import React from 'react';
import propTypes from 'prop-types';

import styles from './Header.scss';

const Header = ({ className, children }) => (
  <header className={styles[className]}>
    {children}
  </header>
);

Header.propTypes = {
  className: propTypes.string,
  children: propTypes.node,
};

Header.defaultProps = {
  className: '',
  children: <span />,
};

export default Header;
