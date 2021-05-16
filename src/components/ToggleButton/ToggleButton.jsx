import React from 'react';
import propTypes from 'prop-types';
import styles from './ToggleButton.scss';

const ToggleButton = ({ className, isGrid, handleGridToggle }) => (
  <button
    type="button"
    className={`${styles[className]} ${isGrid ? styles.active : ''}`.trim()}
    onClick={() => handleGridToggle(isGrid)}
  >
    <span className={styles.toggleGridButtonMask} />
  </button>
);

ToggleButton.propTypes = {
  className: propTypes.string.isRequired,
  isGrid: propTypes.bool.isRequired,
  handleGridToggle: propTypes.func.isRequired,
};

export default ToggleButton;
