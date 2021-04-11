import React from 'react';
import propTypes from 'prop-types';
import styles from './ToggleButton.scss';

const ToggleButton = ({ className }) => (
  <button
    type="button"
    className={styles[className]}
  >
    <span className={styles.toggleGridButtonMask} />
  </button>

);

ToggleButton.propTypes = {
  className: propTypes.string,
};

ToggleButton.defaultProps = {
  className: 'toggleGridButton',
};

export default ToggleButton;
