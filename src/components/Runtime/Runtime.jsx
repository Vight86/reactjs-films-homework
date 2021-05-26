import React from 'react';
import propTypes from 'prop-types';
import styles from './Runtime.scss';

const Runtime = ({ children }) => {
  let hour = Math.floor(children / 60);
  hour = hour !== 0 ? `${hour}h` : '';
  let min = children % 60;
  min = min !== 0 ? `${min}m` : '';

  return (
    <span className={styles.runtime}>{`${hour} ${min}`.trim()}</span>
  );
};

Runtime.propTypes = {
  children: propTypes.number.isRequired,
};

export default Runtime;
