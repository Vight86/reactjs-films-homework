import {
  createStore, applyMiddleware, combineReducers,
} from 'redux';
import camelMiddleware from 'redux-camel';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import moviesReducer from './movies/index';
import queryReducer from './query/index';
import genresReducer from './genres/index';
import statusReducer from './status/index';
import filtersReducer from './filters/index';

const rootReducer = combineReducers({
  query: queryReducer,
  movies: moviesReducer,
  genres: genresReducer,
  status: statusReducer,
  filters: filtersReducer,
});

const composeEnhancers = composeWithDevTools({ trace: true, traceLimit: 25 });

const store = createStore(rootReducer, composeEnhancers(
  applyMiddleware(thunk, camelMiddleware()),
));

export default store;
