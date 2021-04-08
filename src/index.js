import React from 'react';
import { render } from 'react-dom';
import styles from './index.scss';
import App from './App';

render(
  <App style={styles} />,
  document.getElementById('root'),
);
