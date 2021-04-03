import React, { useState } from 'react';
import styles from './SearchForm.scss';

const SearchForm = () => {
  const [value, setValue] = useState('');

  return (
    <form className={styles.searchForm}>
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className={styles.searchForm__input}
      />
      <button type="submit" aria-label="Search" className={styles.searchForm__button} />
    </form>
  );
};

export default SearchForm;
