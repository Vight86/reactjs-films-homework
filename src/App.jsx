import { hot } from 'react-hot-loader/root';
import React from 'react';
import Header from './components/Header/index';
import Logo from './components/Logo/index';
import SearchForm from './components/SearchForm/index';
import HomePage from './pages/HomePage/index';
import MovieDetailsPage from './pages/MovieDetailsPage/index';
import Footer from './components/Footer/index';

const App = () => (
  <>
    <Header className="primary">
      <Logo />
      <SearchForm />
    </Header>
    {/* <HomePage /> */}
    <MovieDetailsPage />
    <Footer />
  </>
);

export default hot(App);
