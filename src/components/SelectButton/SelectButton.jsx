import React from 'react';
import propTypes from 'prop-types';
import Button from '../Button/index';
import styles from './SelectButton.scss';

const SelectButton = ({ genres }) => {
  const genreList = genres.map((genre) => (
    <li key={genre} className={styles.selectOption} data-value={genre}>{genre}</li>
  ));

  return (

    <span className={styles.selectButton}>
      <Button className="filterButton">Genre</Button>
      <span className={styles.selectArrow} />
      <ul className={styles.selectOptionsList}>
        <li className={styles.selectOption} data-value="Genre">Genre</li>
        {genreList}
      </ul>
    </span>
  );
};

SelectButton.propTypes = {
  genres: propTypes.arrayOf(propTypes.string),
};

SelectButton.defaultProps = {
  genres: ['', ''],
};

export default SelectButton;
