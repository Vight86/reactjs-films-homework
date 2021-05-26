import React, { useState } from 'react';
import propTypes from 'prop-types';
import { NavLink, useRouteMatch } from 'react-router-dom';
import SelectButton from '../SelectButton/index';
import styles from './Navigation.scss';

const Navigation = ({ genres }) => {
  const match = useRouteMatch('/:category/movie/:id');
  let id = match?.params?.id;
  id = id ? `/movie/${id}` : '';

  const [isMobMenuOpen, setIsMobMenuOpen] = useState(false);
  const handleClick = () => {
    setIsMobMenuOpen(!isMobMenuOpen);
  };

  return (
    <>
      <button
        type="button"
        className={`${styles.mobileMenuButton} ${isMobMenuOpen ? styles.active : ''}`.trim()}
        onClick={handleClick}
      >
        <svg viewBox="0 0 32 7" className={styles.line} preserveAspectRatio="none">
          <line x1={4} y1={4} x2={28} y2={4} />
        </svg>
        <svg viewBox="0 0 32 7" className={styles.line} preserveAspectRatio="none">
          <line x1={4} y1={4} x2={28} y2={4} />
        </svg>
        <svg viewBox="0 0 32 7" className={styles.line} preserveAspectRatio="none">
          <line x1={4} y1={4} x2={28} y2={4} />
        </svg>
      </button>
      <nav className={`${styles.navigation} ${isMobMenuOpen ? styles.active : ''}`.trim()}>
        <NavLink
          to={`/popular${id}`}
          className={styles.navItem}
          activeClassName={styles.navItem_active}
          data-text="Trending"
          onClick={handleClick}
        >
          Trending
        </NavLink>
        <NavLink
          to={`/top_rated${id}`}
          className={styles.navItem}
          activeClassName={styles.navItem_active}
          data-text="Top rated"
          onClick={handleClick}
        >
          Top rated
        </NavLink>
        <NavLink
          to={`/upcoming${id}`}
          className={styles.navItem}
          activeClassName={styles.navItem_active}
          data-text="ComingSoon"
          onClick={handleClick}
        >
          Coming soon
        </NavLink>
        <SelectButton
          genres={genres}
          onClick={handleClick}
        >
          Genre
        </SelectButton>
      </nav>
    </>
  );
};

Navigation.propTypes = {
  genres: propTypes.arrayOf(propTypes.object).isRequired,
};

export default Navigation;
