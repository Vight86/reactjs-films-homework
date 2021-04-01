import React from 'react';
import styles from './Preloader.scss';

const Preloader = () => (
  <div className={styles.preloader}>
    <div className={styles.preloader__circles}>
      <span className={styles.preloader__circle} />
      <span className={styles.preloader__circle} />
      <span className={styles.preloader__circle} />
    </div>
    <p className={styles.preloader__text}>Loading</p>
  </div>
);

export default Preloader;
