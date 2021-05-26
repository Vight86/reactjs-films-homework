import React, { useEffect } from 'react';
import propTypes from 'prop-types';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import { useRouteMatch } from 'react-router-dom';

import { selectQuery } from '../../modules/query/index';
import {
  selectMovies, loadMovies, addMovies,
} from '../../modules/movies/index';
import { loadGenres, selectGenres } from '../../modules/genres/index';
import { selectStatus } from '../../modules/status/index';
import { isGridUpdated, selectIsGrid } from '../../modules/isGrid/index';
import store from '../../modules/store';

import SearchResultsPage from './SearchResultsPage';

const SearchResultsPageContainer = ({ isModalOpened, handleModalToggle }) => {
  useEffect(() => {
    localStorage.setItem('movieDBState', JSON.stringify(store.getState()));
  });

  const dispatch = useDispatch();

  const {
    basePath, apiKey, lang, adult,
  } = useSelector(selectQuery);
  const genres = useSelector(selectGenres, shallowEqual);
  const { status } = useSelector(selectStatus);

  const getFetchUrl = (query, movieCategory, movieGenreId, page) => {
    if (query !== '' && query !== undefined && query !== null) {
      const fetchMoviesUrl = new URL(
        `${basePath}/search/movie?api_key=${apiKey}&language=${lang}&page=${page}&include_adult=${adult}`,
      );
      fetchMoviesUrl.searchParams.set('query', query);
      return fetchMoviesUrl;
    }

    if (movieGenreId) {
      return `${basePath}/discover/movie?api_key=${apiKey}&language=${lang}&page=${page}&with_genres=${movieGenreId}`;
    }

    return `${basePath}/movie/${movieCategory}?api_key=${apiKey}&language=${lang}&page=${page}`;
  };

  const category = useRouteMatch('/:category')?.params?.category;
  const genreId = (Number(category));
  const searchQuery = useSelector((state) => state.router.location.query.query);

  useEffect(() => {
    const fetchGenresUrl = `${basePath}/genre/movie/list?api_key=${apiKey}&language=${lang}`;

    const getInitialData = async () => {
      await new Promise((resolve) => {
        resolve(dispatch(loadGenres(fetchGenresUrl)));
      });

      const fetchMoviesUrl = getFetchUrl(searchQuery, category, genreId, 1);
      dispatch(loadMovies(fetchMoviesUrl));
    };
    getInitialData();
  }, [category, searchQuery, genreId]);

  const { movies, pageSize } = useSelector(selectMovies);
  let { page } = useSelector(selectMovies);
  const moviesToRender = movies.filter((_, index) => index < page * pageSize);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.pageYOffset + document.documentElement.clientHeight;
      let checkonce = false;

      if (currentScroll === document.documentElement.scrollHeight && !checkonce) {
        checkonce = true;
        page += 1;
        const fetchUrl = getFetchUrl(searchQuery, category, genreId, page);
        dispatch(addMovies(fetchUrl, page));
      }
      if (moviesToRender.length === movies.length) {
        window.removeEventListener('scroll', handleScroll);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [moviesToRender.length, category, searchQuery]);

  const isGrid = useSelector(selectIsGrid);
  const handleGridToggle = () => {
    dispatch(isGridUpdated(!isGrid));
  };

  return (
    <SearchResultsPage
      movies={moviesToRender}
      genres={genres}
      isGrid={isGrid}
      handleGridToggle={handleGridToggle}
      status={status}
      isModalOpened={isModalOpened}
      handleModalToggle={handleModalToggle}
    />
  );
};

SearchResultsPageContainer.propTypes = {
  isModalOpened: propTypes.bool.isRequired,
  handleModalToggle: propTypes.func.isRequired,
};

export default SearchResultsPageContainer;
