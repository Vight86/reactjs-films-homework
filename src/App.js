import { hot } from 'react-hot-loader/root';
import React from 'react';
import { useDispatch } from 'react-redux';

import Header from './components/Header/index';
import Logo from './components/Logo/index';
import SearchForm from './components/SearchForm/index';
import SearchResultsPageContainer from './pages/SearchResultsPage/index';
import Footer from './components/Footer/index';

import { apiPathUpdated, searchQuerySubmitted } from './modules/query/index';

const App = () => {
  const dispatch = useDispatch();

  const handleSearchSubmit = (query, e) => {
    e.preventDefault();
    dispatch(searchQuerySubmitted(query));
    dispatch(apiPathUpdated('/search/movie'));
  };

  return (
    <>
      <Header className="primary">
        <Logo />
        <SearchForm handleSearchSubmit={handleSearchSubmit} />
      </Header>
      <SearchResultsPageContainer />
      <Footer />
    </>

  );
};

export default hot(App);
