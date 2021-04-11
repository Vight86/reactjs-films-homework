import React from 'react';
import propTypes from 'prop-types';
import styles from './Rating.scss';

const Rating = ({
  className, withStars, children,
}) => {
  const width = (26 / 5) * Number(parseFloat(children).toFixed());
  let rating;

  if (withStars === true) {
    rating = (
      <div className={styles.rating}>
        <span className={styles.stars} style={{ width: `${width}em` }} />
        <span className={styles[className]}>
          {children}
        </span>
      </div>
    );
  } else {
    rating = (
      <span className={styles[className]}>
        {children}
      </span>
    );
  }

  return rating;
};

Rating.propTypes = {
  className: propTypes.string,
  withStars: propTypes.bool,
  children: propTypes.number,
};

Rating.defaultProps = {
  className: '',
  withStars: false,
  children: 0,
};

export default Rating;