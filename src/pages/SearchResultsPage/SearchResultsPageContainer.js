import React, { useState, useCallback, useEffect } from 'react';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';

import { apiPathUpdated, selectQuery } from '../../modules/query/index';
import {
  selectMovies, loadMovies, addMovies, currentMovieTrailerKeyAdded, addCurrentMovieTrailerKey,
} from '../../modules/movies/index';
import { loadGenres, selectGenres } from '../../modules/genres/index';
import { updateStatus, selectStatus } from '../../modules/status/index';
import { genreFilterUpdated, selectGenreId } from '../../modules/filters/index';

import SearchResultsPage from './SearchResultsPage';

const SearchResultsPageContainer = () => {
  const dispatch = useDispatch();

  const {
    basePath, apiPath, apiKey, lang, genresPath, adult, searchQuery,
  } = useSelector(selectQuery);

  const genres = useSelector(selectGenres, shallowEqual);
  useEffect(() => {
    const fetchGenresUrl = `${basePath}${genresPath}?api_key=${apiKey}&language=${lang}`;
    dispatch(loadGenres(fetchGenresUrl));
  }, []);

  const getFetchUrl = (query, pageNumber) => {
    let fetchMoviesUrl;
    if (query !== '') {
      fetchMoviesUrl = `${basePath}${apiPath}?api_key=${apiKey}&language=${lang}&query=${searchQuery}&page=${pageNumber}&include_adult=${adult}`;
    } else {
      fetchMoviesUrl = `${basePath}${apiPath}?api_key=${apiKey}&language=${lang}&page=${pageNumber}`;
    }

    return fetchMoviesUrl;
  };

  const { movies, pageSize } = useSelector(selectMovies, shallowEqual);
  let { page } = useSelector(selectMovies);
  const genreId = useSelector(selectGenreId);
  let moviesToRender = movies.filter((_, index) => index < page * pageSize);

  moviesToRender = (genreId === 0)
    ? moviesToRender
    : moviesToRender.filter((movie) => movie.genreIds.includes(genreId));

  useEffect(() => {
    page = 1;
    let fetchUrl = getFetchUrl(searchQuery, page);
    dispatch(loadMovies(fetchUrl));

    const handleScroll = () => {
      const windowRelativeBottom = document.documentElement.getBoundingClientRect().bottom;
      if (Math.trunc(windowRelativeBottom) <= document.documentElement.clientHeight + 5) {
        page += 1;
        fetchUrl = getFetchUrl(searchQuery, page);
        dispatch(addMovies(fetchUrl));
      }
    };
    window.addEventListener('scroll', handleScroll);

    if (page * pageSize >= movies.length && movies.length !== 0) {
      dispatch(updateStatus('loaded'));
    }
  }, [apiPath, searchQuery, genreId]);

  const [isGrid, setIsGrid] = useState(true);
  const handleGridToggle = () => {
    setIsGrid(!isGrid);
  };

  const { currentMovieTrailerKey } = useSelector(selectMovies, shallowEqual);
  const updateMovieTrailerKey = (id) => {
    if (id === null) {
      dispatch(currentMovieTrailerKeyAdded(id));
      return;
    }
    const url = `${basePath}/movie/${id}/videos?api_key=${apiKey}`;
    dispatch(addCurrentMovieTrailerKey(url));
  };

  const getTrending = useCallback(
    () => dispatch(apiPathUpdated('/movie/popular')),
    [dispatch],
  );

  const getTopRatedMovies = useCallback(
    () => dispatch(apiPathUpdated('/movie/top_rated')),
    [dispatch],
  );

  const getUpcoming = useCallback(
    () => dispatch(apiPathUpdated('/movie/upcoming')),
    [dispatch],
  );

  const filterMovies = useCallback(
    (id) => dispatch(genreFilterUpdated(id)),
    [dispatch],
  );

  const { status } = useSelector(selectStatus);
  return (
    <SearchResultsPage
      movies={moviesToRender}
      genres={genres}
      isGrid={isGrid}
      handleGridToggle={handleGridToggle}
      movieTrailerKey={currentMovieTrailerKey}
      updateMovieTrailerKey={updateMovieTrailerKey}
      getTrending={getTrending}
      getTopRatedMovies={getTopRatedMovies}
      getUpcoming={getUpcoming}
      filterMovies={filterMovies}
      status={status}
    />
  );
};

export default SearchResultsPageContainer;
