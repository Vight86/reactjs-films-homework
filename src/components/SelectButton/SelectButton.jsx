import React, { useState } from 'react';
import propTypes from 'prop-types';
import { NavLink, useRouteMatch } from 'react-router-dom';
import styles from './SelectButton.scss';

const SelectButton = ({ genres, children }) => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
  };

  const url = useRouteMatch()?.url;
  const curId = Number(url.slice(1));
  const isUrlNumber = Boolean(Number(url.slice(1)));

  let id = useRouteMatch('/:category/movie/:id')?.params?.id;
  id = id ? `/movie/${id}` : '';

  const genreList = genres.map((genre) => (
    <li key={genre.id} className={styles.selectOption}>
      <NavLink
        to={`/${genre.id}${id}`}
        className={styles.selectOptionLink}
        onClick={handleClick}
        data-value={genre.id}
        data-text={genre.name}
      >
        {genre.name}
      </NavLink>
    </li>
  ));

  return (

    <span className={`${styles.selectButton} ${isActive ? styles.active : ''}`.trim()}>
      <NavLink
        to={`${url}${id}`}
        className={styles.selectedOption}
        activeClassName={isUrlNumber ? styles.selectedOption_active : null}
        onClick={() => setIsActive(!isActive)}
      >
        {isUrlNumber ? (genres.find((genre) => genre.id === curId)?.name) : children}
      </NavLink>
      <span className={styles.selectArrow} />
      <ul className={styles.selectOptionsList}>
        {genreList}
      </ul>
    </span>
  );
};

SelectButton.propTypes = {
  genres: propTypes.arrayOf(propTypes.object).isRequired,
  children: propTypes.string.isRequired,
};

export default SelectButton;
