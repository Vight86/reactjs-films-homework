import React from 'react';
import propTypes from 'prop-types';
import styles from './Button.scss';

const Button = ({ className, onClick, children }) => (
  <button type="button" className={styles[className]} onClick={onClick}>
    {children}
  </button>
);

Button.propTypes = {
  className: propTypes.string,
  onClick: propTypes.func,
  children: propTypes.string,
};

Button.defaultProps = {
  className: '',
  onClick() { },
  children: '',
};
export default Button;
