import React from 'react';
import ReactDOM from 'react-dom';
import styles from '../index.scss';
import App from '../App';

jest.mock('react-dom', () => ({ render: jest.fn() }));

it('index.js renders App correctly', () => {
  const div = document.createElement('div');
  div.id = 'root';
  document.body.appendChild(div);
  // eslint-disable-next-line global-require
  require('../index.js');
  expect(ReactDOM.render).toHaveBeenCalledWith(<App style={styles} />, div);
});
