import { hot } from 'react-hot-loader/root';
import React from 'react';
import Header from './components/Header/index';
import Logo from './components/Logo/index';
import SearchForm from './components/SearchForm/index';
import SearchResultsPage from './pages/SearchResultsPage/index';
import Footer from './components/Footer/index';

const App = () => (
  <>
    <Header className="primary">
      <Logo />
      <SearchForm />
    </Header>
    <SearchResultsPage />
    <Footer />
  </>
);

export default hot(App);
