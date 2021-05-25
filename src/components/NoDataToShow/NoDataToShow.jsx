import React from 'react';
import styles from './NoDataToShow.scss';

const NoDataToShow = () => (
  <div className={styles.noMoviesWrapper}>
    <div className={styles.noMoviesImage} />
    <p className={styles.noMoviesTitle}>
      We&#39;re sorry. We have &#39;t found any movies to match your request.
    </p>

  </div>
);

export default NoDataToShow;
