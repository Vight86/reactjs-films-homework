const initialState = {
  basePath: 'https://api.themoviedb.org/3',
  apiKey: 'e5dc29ce2b6d31bb5c5306f6a7469ba2',
  lang: 'en-US',
  adult: false,
};

const queryReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default queryReducer;
