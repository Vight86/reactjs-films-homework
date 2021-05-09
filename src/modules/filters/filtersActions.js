export const GENRE_FILTER_UPDATED = 'filters/genreFilterUpdated';

export const genreFilterUpdated = (genreId) => ({
  type: GENRE_FILTER_UPDATED,
  payload: {
    genreId,
  },
});
