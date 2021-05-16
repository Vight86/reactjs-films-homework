import React, { useState } from 'react';
import propTypes from 'prop-types';
import Button from '../Button/index';
import styles from './SelectButton.scss';

const SelectButton = ({ genres, filterMovies, children }) => {
  const [isActive, setIsActive] = useState(false);
  const [buttonTitle, setButtonTitle] = useState(children);

  const handleClick = (e) => {
    setButtonTitle(e.target.innerHTML);
    setIsActive(!isActive);
    filterMovies(+e.target.dataset.value);
  };

  const genreList = genres.map((genre) => (
    <li key={genre.id} className={styles.selectOption}>
      <button
        type="button"
        onClick={handleClick}
        data-value={genre.id}
      >
        {genre.name}
      </button>
    </li>
  ));

  return (

    <span className={`${styles.selectButton} ${isActive ? styles.active : ''}`.trim()}>
      <Button
        className="filterButton"
        onClick={() => setIsActive(!isActive)}
      >
        {buttonTitle}
      </Button>
      <span className={styles.selectArrow} />
      <ul className={styles.selectOptionsList}>
        <li key={0} className={styles.selectOption}>
          <button
            type="button"
            onClick={handleClick}
            data-value=""
          >
            All genres
          </button>
        </li>
        {genreList}
      </ul>
    </span>
  );
};

SelectButton.propTypes = {
  genres: propTypes.arrayOf(propTypes.object).isRequired,
  filterMovies: propTypes.func.isRequired,
  children: propTypes.string.isRequired,
};

export default SelectButton;
