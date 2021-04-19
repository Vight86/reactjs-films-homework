import React from 'react';
import styles from './Footer.scss';
import Logo from '../Logo/index';
import Signature from '../Signature/index';

const Footer = () => (
  <footer className={styles.footer}>
    <Logo theme="secondary" />
    <p className={styles.footer__copyRight}>
      Copyright © 2018 FILMS.
      {' '}
      <Signature name="by Vova Pekun" />
    </p>
  </footer>
);

export default Footer;
