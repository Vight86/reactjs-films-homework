import {
  createStore, applyMiddleware, combineReducers,
} from 'redux';
import camelMiddleware from 'redux-camel';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import { createBrowserHistory } from 'history';

import moviesReducer from './movies/index';
import queryReducer from './query/index';
import genresReducer from './genres/index';
import statusReducer from './status/index';
import isGridReducer from './isGrid/index';

const createRootReducer = (history) => combineReducers({
  router: connectRouter(history),
  query: queryReducer,
  movies: moviesReducer,
  genres: genresReducer,
  status: statusReducer,
  isGrid: isGridReducer,
});

export const history = createBrowserHistory();

const composeEnhancers = composeWithDevTools({ trace: true, traceLimit: 25 });

const persistedState = localStorage.getItem('movieDBState');
const preloadedState = JSON.parse(persistedState) || {};

const store = createStore(
  createRootReducer(history),
  preloadedState,
  composeEnhancers(
    applyMiddleware(
      routerMiddleware(history),
      thunk,
      camelMiddleware(),
    ),
  ),
);

export default store;
