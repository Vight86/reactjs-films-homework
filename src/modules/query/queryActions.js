export const API_PATH_UPDATED = 'query/apiPathUpdated';
export const SEARCH_QUERY_SUBMITTED = 'query/searchQuerySubmitted';

export const apiPathUpdated = (apiPath) => ({
  type: API_PATH_UPDATED,
  payload: {
    apiPath,
  },
});

export const searchQuerySubmitted = (searchQuery) => ({
  type: SEARCH_QUERY_SUBMITTED,
  payload: {
    searchQuery,
  },
});
