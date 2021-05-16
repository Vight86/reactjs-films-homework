import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import styles from './index.scss';
import App from './App';

import store from './modules/store';

render(
  <Provider store={store}>
    <App style={styles} />
  </Provider>,
  document.getElementById('root'),
);
