import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import styles from './index.scss';
import App from './App';

import store, { history } from './modules/store';

render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App style={styles} />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root'),
);
