import React, { useState } from 'react';
import propTypes from 'prop-types';
import styles from './ToggleButton.scss';

const ToggleButton = ({ className }) => {
  const [isGrid, setIsGrid] = useState(true);

  return (
    <button
      type="button"
      className={`${styles[className]} ${isGrid && styles.active}`}
      onClick={() => setIsGrid(!isGrid)}
    >
      <span className={styles.toggleGridButtonMask} />
    </button>

  );
};

ToggleButton.propTypes = {
  className: propTypes.string,
};

ToggleButton.defaultProps = {
  className: 'toggleGridButton',
};

export default ToggleButton;
