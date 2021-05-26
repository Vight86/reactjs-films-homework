import React, { useEffect } from 'react';
import propTypes from 'prop-types';
import {
  shallowEqual, useDispatch, useSelector,
} from 'react-redux';
import { useParams } from 'react-router-dom';

import { selectQuery } from '../../modules/query/index';
import { selectMovieDetails, loadMovieDetails } from '../../modules/movies/index';

import MovieDetailsPage from './MovieDetailsPage';
import Preloader from '../../components/Preloader/index';

const MovieDetailsPageContainer = ({ isModalOpened, handleModalToggle }) => {
  const dispatch = useDispatch();

  const { id } = useParams();
  const {
    basePath, apiKey, lang,
  } = useSelector(selectQuery);

  useEffect(() => {
    const fetchMovieDetailsUrl = `${basePath}/movie/${id}?api_key=${apiKey}&language=${lang}`;
    dispatch(loadMovieDetails(fetchMovieDetailsUrl));
    window.scrollTo(0, 0);
  }, [id]);

  const currentMovieDetails = useSelector(selectMovieDetails, shallowEqual);

  return (
    currentMovieDetails.title
      ? (
        <MovieDetailsPage
          isModalOpened={isModalOpened}
          handleModalToggle={handleModalToggle}
          id={id}
          currentMovieDetails={currentMovieDetails}
        />
      )
      : <Preloader />
  );
};

MovieDetailsPageContainer.propTypes = {
  isModalOpened: propTypes.bool.isRequired,
  handleModalToggle: propTypes.func.isRequired,
};

export default MovieDetailsPageContainer;
