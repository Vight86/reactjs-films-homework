import { hot } from 'react-hot-loader/root';
import React, { useState } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import {
  Redirect, Route, useRouteMatch,
} from 'react-router-dom';

import { push } from 'connected-react-router';

import { selectQuery } from './modules/query/index';
import { addCurrentMovieTrailerKey, currentMovieTrailerKeyAdded, selectMovies } from './modules/movies/index';

import ErrorBoundary from './components/ErrorBoundary/index';
import Header from './components/Header/index';
import Logo from './components/Logo/index';
import SearchForm from './components/SearchForm/index';
import SearchResultsPageContainer from './pages/SearchResultsPage/index';
import MovieDetailsPageContainer from './pages/MovieDetailsPage/index';
import Footer from './components/Footer/index';
import Modal from './components/Modal/index';

const App = () => {
  const dispatch = useDispatch();

  const handleSearchSubmit = (query, e) => {
    e.preventDefault();
    dispatch(push(`?query=${query}`));
  };

  const { basePath, apiKey } = useSelector(selectQuery);
  const updateMovieTrailerKey = (id) => {
    if (id === null) {
      dispatch(currentMovieTrailerKeyAdded(id));
      return;
    }
    const url = `${basePath}/movie/${id}/videos?api_key=${apiKey}`;
    dispatch(addCurrentMovieTrailerKey(url));
  };

  const [isModalOpened, setIsModalOpened] = useState(false);
  const handleModalToggle = (movieId, isOpened) => {
    const paddingRight = window.innerWidth - document.documentElement.clientWidth;
    updateMovieTrailerKey(movieId);
    setIsModalOpened(!isOpened);
    document.body.style.overflow = !isOpened ? 'hidden' : '';
    document.body.style.paddingRight = !isOpened ? `${paddingRight}px` : '0px';
  };

  const { currentMovieTrailerKey } = useSelector(selectMovies, shallowEqual);

  return (
    <>
      <ErrorBoundary>
        <Header className="primary">
          <Logo className="primary">Films</Logo>
          <SearchForm handleSearchSubmit={handleSearchSubmit} />
        </Header>
      </ErrorBoundary>
      <ErrorBoundary>
        <Route path="/:category/movie/:id">
          <MovieDetailsPageContainer
            isModalOpened={isModalOpened}
            handleModalToggle={handleModalToggle}
          />
        </Route>
      </ErrorBoundary>
      <ErrorBoundary>
        <Route path="/:category">
          <SearchResultsPageContainer
            isModalOpened={isModalOpened}
            handleModalToggle={handleModalToggle}
          />
        </Route>
      </ErrorBoundary>
      <Footer />
      <ErrorBoundary>
        <Modal
          movieTrailerKey={currentMovieTrailerKey}
          isModalOpened={isModalOpened}
          handleModalToggle={handleModalToggle}
        />
      </ErrorBoundary>
      {useRouteMatch().isExact ? <Redirect to="/popular" /> : null}
    </>

  );
};

export default hot(App);
