export const GENRES_LOADED = 'genres/genresLoaded';

const genresLoaded = (genres) => ({
  type: GENRES_LOADED,
  payload: {
    genres,
  },
});

export const loadGenres = (url) => async (dispatch) => {
  const response = await fetch(url);
  const { genres } = await response.json();
  dispatch(genresLoaded(genres));
};
