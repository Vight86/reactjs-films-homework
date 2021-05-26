import React from 'react';
import propTypes from 'prop-types';
import styles from './Button.scss';

const Button = ({
  className, onClick, children,
}) => (
  <button
    type="button"
    className={styles[className]}
    onClick={onClick}
    data-text={children}
  >
    {children}
  </button>
);

Button.propTypes = {
  className: propTypes.string.isRequired,
  onClick: propTypes.func.isRequired,
  children: propTypes.string,
};

Button.defaultProps = {
  children: '',
};

export default Button;
