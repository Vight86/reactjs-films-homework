import React, { useState } from 'react';
import propTypes from 'prop-types';
import styles from './SearchForm.scss';

const SearchForm = ({ handleSearchSubmit }) => {
  const [value, setValue] = useState('');

  return (
    <form
      className={styles.searchForm}
      onSubmit={(e) => {
        handleSearchSubmit(value, e);
        setValue('');
      }}
    >
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className={styles.searchForm__input}
      />
      <button
        type="submit"
        aria-label="Search"
        className={styles.searchForm__button}
      />
    </form>
  );
};

SearchForm.propTypes = {
  handleSearchSubmit: propTypes.func.isRequired,
};

export default SearchForm;
